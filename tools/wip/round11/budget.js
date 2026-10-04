// Plan-usage check: may this run start another ayah? Answers with a measured cost.
// usage: node tools/wip/round11/budget.js            -> usage, per-ayah cost, how many ayat fit, mode
//        node tools/wip/round11/budget.js --mark 13:3   -> also record a reading (commit.sh does this)
// Data: <account>/state/statusline-last.json (latest) and usage-history.tsv (every change),
// written by each account's statusline script. Plan usage is account-wide, so the reading MUST
// come from the account running this session — we pick the state dir whose statusline-last.json
// session_id matches $CLAUDE_CODE_SESSION_ID, else the freshest file (see pickStateDir).
// Cost of one ayah = usage change between consecutive "Tadabbur" commits (same window only).
// Safe cost = the WORST of the last 5 ayat × 1.2. Run only if it fits under the 95% ceiling.
const fs = require('fs'), os = require('os'), path = require('path'), cp = require('child_process');
function pickStateDir() {
  const home = os.homedir();
  const cands = [path.join(home, '.claude/state'), path.join(home, '.claude-personal/state')];
  const sid = process.env.CLAUDE_CODE_SESSION_ID || '';
  let best = null, bestMtime = -1, matched = null;
  for (const d of cands) {
    const f = path.join(d, 'statusline-last.json');
    let st; try { st = fs.statSync(f); } catch (e) { continue; }
    if (st.mtimeMs > bestMtime) { bestMtime = st.mtimeMs; best = d; }
    if (sid) { try { if (JSON.parse(fs.readFileSync(f, 'utf8')).session_id === sid) matched = d; } catch (e) { } }
  }
  return matched || best || cands[0];   // exact session match wins; else the most recently written
}
const ST = pickStateDir();
const HIST = path.join(__dirname, 'audit/budget-history.tsv');
const CEIL = 95, MARGIN = 1.2, DEFAULT5 = 6, DEFAULT7 = 2, LOW_AT = 65;

let j = null, age = null;
try { const f = path.join(ST, 'statusline-last.json'); j = JSON.parse(fs.readFileSync(f, 'utf8')); age = Math.round((Date.now() - fs.statSync(f).mtimeMs) / 60000); } catch (e) { }
const rl = j && (j.rate_limits || j.rateLimits);
if (!rl) { console.log('BUDGET UNKNOWN: no plan-usage data. Mode: LOW (1 drafter at a time).'); process.exit(0); }
const when = t => t ? new Date(typeof t === 'number' ? t * 1000 : t).toLocaleString('en-GB', { weekday: 'short', day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' }) : '';
const h5 = rl.five_hour?.used_percentage ?? 0, d7 = rl.seven_day?.used_percentage ?? 0;
const ctx = j.context_window && j.context_window.used_percentage;

const mi = process.argv.indexOf('--mark');
if (mi > 0) { fs.mkdirSync(path.dirname(HIST), { recursive: true }); fs.appendFileSync(HIST, [new Date().toISOString(), process.argv[mi + 1] || '-', h5, d7].join('\t') + '\n'); }

// usage readings: statusline history (epoch s) + our own marks
const reads = [];
try { for (const l of fs.readFileSync(path.join(ST, 'usage-history.tsv'), 'utf8').trim().split('\n')) { const [t, a, b] = l.split('\t'); reads.push([+t, +a, +b]); } } catch (e) { }
try { for (const l of fs.readFileSync(HIST, 'utf8').trim().split('\n')) { const [t, , a, b] = l.split('\t'); reads.push([Math.floor(Date.parse(t) / 1000), +a, +b]); } } catch (e) { }
reads.sort((x, y) => x[0] - y[0]);
const at = t => { let r = null; for (const x of reads) { if (x[0] <= t) r = x; else break; } return r; };

// commit times of the last ayat, each costed against the previous one
let commits = [];
try { commits = cp.execSync('git log -40 --format=%ct%x09%s', { cwd: path.join(__dirname, '../../..'), encoding: 'utf8' }).trim().split('\n').map(l => l.split('\t')).filter(x => / Tadabbur /.test(x[1])).map(x => [+x[0], x[1].split(':')[0]]).reverse(); } catch (e) { }
const c5 = [], c7 = [];
for (let i = 1; i < commits.length; i++) {
  const a = at(commits[i - 1][0]), b = at(commits[i][0]);
  if (!a || !b || a === b || b[0] - commits[i - 1][0] > 7200) continue;   // need a reading close to both commits
  if (b[1] >= a[1]) c5.push(b[1] - a[1]);   // a drop means the 5h window reset in between: unusable
  if (b[2] >= a[2]) c7.push(b[2] - a[2]);
}
const worst = (a, d) => a.length ? Math.max(...a.slice(-5)) : d;
// readings are whole percents, so with <3 samples never go below the default guess
const s5 = +(Math.max(worst(c5, DEFAULT5), c5.length < 3 ? DEFAULT5 : 0) * MARGIN).toFixed(1), s7 = +(Math.max(worst(c7, DEFAULT7), c7.length < 3 ? DEFAULT7 : 0) * MARGIN).toFixed(1);
const fit = Math.max(0, Math.floor(Math.min((CEIL - h5) / Math.max(s5, 0.5), (CEIL - d7) / Math.max(s7, 0.5))));

// Account decides max parallelism: claude-max (~/.claude) runs 5, claude-pro (~/.claude-personal) runs 2.
const isMax = /\.claude\/state\/?$/.test(ST) && !/personal/.test(ST);
const account = isMax ? 'claude-max' : 'claude-pro';
const cap = isMax ? 5 : 2;
const par = Math.max(1, Math.min(cap, fit));   // never launch more drafters than fit under the ceiling

let mode;
if (Math.max(h5, d7) >= CEIL) mode = 'STOP';
else if (fit === 0) mode = 'WIND-DOWN';
else if (fit >= 2 && Math.max(h5, d7) < LOW_AT) mode = 'NORMAL';
else mode = 'LOW';
const what = {
  NORMAL: `${par} drafter(s) in parallel (${account} cap ${cap}, ${fit} fit).`,
  LOW: '1 drafter at a time; re-check after each commit.',
  'WIND-DOWN': 'launch NO new drafter (it would not fit). Finish only what is in flight, push + deploy undeployed commits, then SMALL TASKS from CLAUDE-LOG.md.',
  STOP: 'launch nothing. Commit anything merged, update CLAUDE-LOG.md (usage + reset time), end the turn.',
}[mode];
const n = c5.length;
console.log(`BUDGET [${account}] 5h ${h5}% (resets ${when(rl.five_hour?.resets_at)}) | 7d ${d7}% (resets ${when(rl.seven_day?.resets_at)}) | data ${age} min old${ctx != null ? ` | context ${Math.round(ctx)}%` : ''}`);
console.log(`One ayah, safe estimate: ${s5}% of 5h, ${s7}% of 7d (${n ? `worst of last ${Math.min(n, 5)} measured ayat × ${MARGIN}; measured 5h: ${c5.slice(-5).join(', ')}` : `default guess × ${MARGIN}, no measured ayat yet`}).`);
console.log(`Room under ${CEIL}%: 5h ${Math.max(0, CEIL - h5)}%, 7d ${Math.max(0, CEIL - d7)}% → ${fit} more ayah(s) fit now.`);
console.log(`MODE ${mode}: ${what}`);
if (ctx != null && ctx >= 60) console.log('CONTEXT HIGH: after the current ayah, update CLAUDE-LOG.md and tell the user to start a fresh session.');
