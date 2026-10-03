// Audit of the Tadabbur module: cards, articles, index, and the git wave history.
// Read-only. Run: node tools/wip/round11/audit-tadabbur.js
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { execSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..', '..', '..');
const read = (p) => fs.readFileSync(path.join(ROOT, p), 'utf8');

const problems = [];
const warn = [];
const flag = (list, msg) => list.push(msg);

// 1. Cards (TADABBUR_NOTES)
const notesCtx = { window: {} };
vm.createContext(notesCtx);
vm.runInContext(read('js/tadabbur-data.js') + '\n;this.__N = typeof TADABBUR_NOTES !== "undefined" ? TADABBUR_NOTES : null;', notesCtx);
const notes = notesCtx.__N || {};
const cardKeys = Object.keys(notes);

// 2. Articles (shards)
const shardDir = path.join(ROOT, 'js/tadabbur-articles');
const shardFiles = fs.readdirSync(shardDir).filter((f) => f.endsWith('.js'));
const articles = {};
const keyToShard = {};
for (const f of shardFiles) {
  const ctx = { window: {} };
  vm.createContext(ctx);
  try {
    vm.runInContext(fs.readFileSync(path.join(shardDir, f), 'utf8'), ctx);
  } catch (e) {
    flag(problems, `shard ${f} does not evaluate: ${e.message}`);
    continue;
  }
  const table = ctx.window.TADABBUR_ARTICLES || {};
  for (const k of Object.keys(table)) {
    if (articles[k]) flag(problems, `duplicate article key ${k} (${keyToShard[k]} and ${f})`);
    articles[k] = table[k];
    keyToShard[k] = f;
  }
}
const articleKeys = Object.keys(articles);

// 3. Index (article-index.js, tadabbur list)
const idxCtx = { window: {} };
vm.createContext(idxCtx);
vm.runInContext(read("js/article-index.js") + "\n;this.__I = typeof LQ_ARTICLE_IDS !== \"undefined\" ? LQ_ARTICLE_IDS : null;", idxCtx);
const idx = idxCtx.__I;
const indexKeys = idx && idx.tadabbur ? idx.tadabbur : null;

// Cross-checks
const cardSet = new Set(cardKeys);
const artSet = new Set(articleKeys);
const cardNoArt = cardKeys.filter((k) => !artSet.has(k));
const artNoCard = articleKeys.filter((k) => !cardSet.has(k));
if (cardNoArt.length) flag(problems, `cards without an article (${cardNoArt.length}): ${cardNoArt.slice(0, 15).join(' ')}`);
if (artNoCard.length) flag(problems, `articles without a card (${artNoCard.length}): ${artNoCard.slice(0, 15).join(' ')}`);
if (!indexKeys) {
  flag(problems, 'article-index.js has no tadabbur list');
} else {
  const idxSet = new Set(indexKeys);
  const notIndexed = articleKeys.filter((k) => !idxSet.has(k));
  const stale = indexKeys.filter((k) => !artSet.has(k));
  if (notIndexed.length) flag(problems, `articles missing from the index (${notIndexed.length}): ${notIndexed.slice(0, 15).join(' ')}`);
  if (stale.length) flag(problems, `index lists keys with no article (${stale.length}): ${stale.slice(0, 15).join(' ')}`);
}

// 4. Article shape: en/bn parity, section count, placeholders, word counts
const PLACEHOLDER = /\b(TODO|TBD|FIXME|XXX|lorem)\b|\bNaN\b|\[\s*\]|<\?claude/;
const wordsOf = (s) => (s || '').trim().split(/\s+/).filter(Boolean).length;
for (const k of articleKeys) {
  const a = articles[k];
  const secs = a && a.sections;
  if (!Array.isArray(secs) || secs.length === 0) {
    flag(problems, `${k}: no sections`);
    continue;
  }
  if (secs.length < 5 || secs.length > 10) warn.push(`${k}: ${secs.length} sections (usual 5-9)`);
  let enWords = 0;
  secs.forEach((s, i) => {
    if (!s.h || !s.h.en || !s.h.bn) flag(problems, `${k} section ${i + 1}: missing heading in en or bn`);
    if (!Array.isArray(s.p) || s.p.length === 0) flag(problems, `${k} section ${i + 1}: no paragraphs`);
    else {
      if (s.p.length !== (s.p || []).length) flag(problems, `${k} section ${i + 1}: paragraph count mismatch`);
      s.p.forEach((p, j) => {
        if (!p.en || !p.bn) flag(problems, `${k} section ${i + 1} para ${j + 1}: missing en or bn text`);
        if (PLACEHOLDER.test((p.en || '') + ' ' + (p.bn || ''))) flag(problems, `${k} section ${i + 1} para ${j + 1}: placeholder-like text`);
        enWords += wordsOf(p.en);
      });
    }
  });
  if (enWords < 500) warn.push(`${k}: only ${enWords} English words (short for a wave)`);
  if (enWords > 2000) warn.push(`${k}: ${enWords} English words (over the 2000 soft ceiling)`);
  const flatEn = JSON.stringify(a);
  if (/“\s*”|\(\s*\)/.test(flatEn)) warn.push(`${k}: empty quote or empty parenthesis`);
}

// 5. Cards: both languages, reflection present, question count
for (const k of cardKeys) {
  const c = notes[k];
  if (!c || typeof c !== 'object') { flag(problems, `${k}: card is not an object`); continue; }
  const en = c.reflectionEn || c.reflection || '';
  const bn = c.reflectionBn || '';
  if (!en) flag(problems, `${k}: card has no English reflection`);
  if (!bn) warn.push(`${k}: card has no Bengali reflection field (check naming)`);
  if (PLACEHOLDER.test(en + ' ' + bn)) flag(problems, `${k}: placeholder-like text in card`);
}

// 6. Git wave history: every "vNNN: Tadabbur REF" commit
const log = execSync('git log --format=%s', { cwd: ROOT, encoding: 'utf8' }).split('\n').filter(Boolean);
const waves = [];
for (const subj of log) {
  const m = subj.match(/^v(\d+): Tadabbur (\d+:\S+)/);
  if (m) waves.push({ v: +m[1], ref: m[2], subj });
}
const seenV = new Map();
for (const w of waves) {
  if (seenV.has(w.v)) flag(problems, `version v${w.v} used by two commits: "${seenV.get(w.v)}" and "${w.subj}"`);
  else seenV.set(w.v, w.subj);
}
const vs = [...seenV.keys()].sort((a, b) => a - b);
const gaps = [];
for (let i = 1; i < vs.length; i++) if (vs[i] !== vs[i - 1] + 1) gaps.push(`${vs[i - 1]}->${vs[i]}`);
if (gaps.length) warn.push(`version gaps in tadabbur commits: ${gaps.join(', ')}`);
const waveKeysNorm = (r) => r.replace(/_/g, ':');
const waveRefs = new Set(waves.map((w) => waveKeysNorm(w.ref)));
const commitNoCard = [...waveRefs].filter((r) => !cardSet.has(r) && !artSet.has(r));
// commit refs can be ranges (e.g. 38:11-12) that the card keys express as single verses
const commitNoCardClean = commitNoCard.filter((r) => !/-/.test(r));
if (commitNoCardClean.length) flag(problems, `commit refs with no card or article: ${commitNoCardClean.slice(0, 15).join(' ')}`);
const shippedNotRecorded = [...artSet].filter((k) => !waveRefs.has(k) && !waveRefs.has(k.replace(/:/g, '_')));
if (shippedNotRecorded.length) warn.push(`articles with no tadabbur commit in git history (${shippedNotRecorded.length}): ${shippedNotRecorded.slice(0, 15).join(' ')}`);

// 7. Output
console.log(`cards ${cardKeys.length} | articles ${articleKeys.length} | shards ${shardFiles.length} | index ${indexKeys ? indexKeys.length : 'none'} | waves in git ${waves.length} (v${vs[0]}-v${vs[vs.length - 1]})`);
console.log(problems.length ? `\nPROBLEMS (${problems.length}):` : '\nno problems found');
for (const p of problems) console.log('  x ' + p);
console.log(warn.length ? `\nWARNINGS (${warn.length}):` : '\nno warnings');
for (const w of warn) console.log('  ! ' + w);
process.exit(problems.length ? 1 : 0);
