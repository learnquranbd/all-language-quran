// Every drafter self-gate in one call, compact output. Exit 0 only if all clean.
// usage: node tools/wip/round11/gate.js 12:30
const fs = require('fs'), path = require('path'), vm = require('vm'), cp = require('child_process');
const ROOT = path.join(__dirname, '../../..');
const L = require(path.join(ROOT, 'tests/lib.js'));
const key = process.argv[2]; if (!key) { console.log('usage: gate.js <key>'); process.exit(1); }
const base = key.replace(':', '_');
const notesF = path.join(__dirname, base + '-notes.js'), artF = path.join(__dirname, base + '-articles.js');
const load = f => { const c = {}; vm.createContext(c); return vm.runInContext('({' + fs.readFileSync(f, 'utf8') + '})', c); };
const run = (cmd) => { try { return cp.execSync(cmd, { cwd: ROOT, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }); } catch (e) { return (e.stdout || '') + (e.stderr || ''); } };
const words = s => s.trim().split(/\s+/).filter(Boolean).length;
let bad = 0; const say = (ok, msg) => { if (!ok) bad++; console.log((ok ? 'ok   ' : 'FAIL ') + msg); };

// card
const card = load(notesF)[key];
say(!!card, 'card entry present');
if (card) {
  const r = words(card.reflectionEn), l = words(card.lessonEn);
  say(r >= 100 && r <= 130, `card reflectionEn ${r} words (100-130)`);
  say(l < 35, `card lessonEn ${l} words (<35)`);
  say(card.pointsEn.length >= 4 && card.pointsEn.length <= 5 && card.pointsBn.length === card.pointsEn.length, `card points ${card.pointsEn.length}/${card.pointsBn.length}`);
  say((card.themes || []).length <= 2, `card themes [${card.themes}]`);
  say(!/\b(Tabari|Qurtubi|Kathir|Baghawi|Bukhari|Muslim|Tirmidhi|Sa'di|hadith \d)/i.test(JSON.stringify(card)), 'card has no scholar names / hadith refs');
}
const dry = run(`node tools/merge-tadabbur-notes.js ${path.relative(ROOT, notesF)}`);
say(/=> CLEAN/.test(dry), 'notes merge dry run' + (/=> CLEAN/.test(dry) ? '' : '\n' + dry));

// article
const art = load(artF)[key];
say(!!art, 'article entry present');
if (art) {
  let w = 0; const oob = [], dash = [];
  art.sections.forEach((s, si) => s.p.forEach((p, pi) => { const n = words(p.en); w += n; if (n < 55 || n > 110) oob.push(`${si + 1}.${pi + 1}:${n}`); if ((p.bn.match(/—/g) || []).length > 1) dash.push(`${si + 1}.${pi + 1}`); }));
  say(w >= 1400 && w <= 1800, `article ${w} EN words (1400-1800)`);
  say(art.sections.length >= 7 && art.sections.length <= 9, `sections ${art.sections.length} (7-9)`);
  say(!oob.length, `paragraphs 55-110${oob.length ? ': ' + oob.join(' ') : ''}`);
  say(!dash.length, `bn em dashes <=1/para${dash.length ? ': ' + dash.join(' ') : ''}`);
  // headings: length + uniqueness vs shipped, shipped-headings.txt, other drafts
  const seenEn = new Map(), seenBn = new Map(), norm = s => s.trim().toLowerCase();
  const all = L.loadTadabburArticles();
  for (const k in all) if (k !== key) all[k].sections.forEach(s => { seenEn.set(norm(s.h.en), k); seenBn.set(s.h.bn.trim(), k); });
  for (const f of fs.readdirSync(__dirname)) if (f.endsWith('-articles.js') && f !== base + '-articles.js') { try { const o = load(path.join(__dirname, f)); for (const k in o) o[k].sections.forEach(s => { seenEn.set(norm(s.h.en), f); seenBn.set(s.h.bn.trim(), f); }); } catch (e) { } }
  const txt = path.join(__dirname, 'shipped-headings.txt');
  if (fs.existsSync(txt)) for (const l of fs.readFileSync(txt, 'utf8').split('\n')) if (l.trim() && !seenEn.has(norm(l))) seenEn.set(norm(l), 'shipped-headings.txt');
  const mine = new Set(); const hp = [];
  for (const s of art.sections) {
    const we = words(s.h.en), wb = words(s.h.bn);
    if (we < 2 || we > 6) hp.push(`LEN en ${we} "${s.h.en}"`);
    if (wb < 2 || wb > 6) hp.push(`LEN bn ${wb} "${s.h.bn}"`);
    if (seenEn.has(norm(s.h.en))) hp.push(`DUP en "${s.h.en}" (${seenEn.get(norm(s.h.en))})`);
    if (seenBn.has(s.h.bn.trim())) hp.push(`DUP bn "${s.h.bn}" (${seenBn.get(s.h.bn.trim())})`);
    if (mine.has(norm(s.h.en))) hp.push(`SELF-DUP "${s.h.en}"`); mine.add(norm(s.h.en));
  }
  say(!hp.length, 'headings' + (hp.length ? '\n     ' + hp.join('\n     ') : ''));
}
const sw = run(`node tools/wip/round11/sweep.js ${path.relative(ROOT, artF)}`);
say(/SWEEP CLEAN/.test(sw), 'sweep' + (/SWEEP CLEAN/.test(sw) ? '' : '\n' + sw.split('\n').filter(l => !/^spellings used/.test(l)).join('\n')));
const nu = run(`node tools/wip/round11/nums.js ${path.relative(ROOT, artF)}`).trim();
say(!nu, 'nums (EN-only numbers)' + (nu ? '\n' + nu : ''));
console.log(bad ? `\n${bad} FAIL` : '\nALL GATES CLEAN');
process.exit(bad ? 1 : 0);
