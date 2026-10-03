// Pre-fetch everything a drafter needs for one key, with zero model tokens.
// usage: node tools/wip/round11/prep.js 12:30      (or a range key: 12:5-6)
// writes tools/wip/round11/audit/<s>_<a>/  t<ID>_<v>.txt per tafsir, and PREP.md
const fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, '../../..');
const L = require(path.join(ROOT, 'tests/lib.js'));
const key = process.argv[2];
const m = key && key.match(/^(\d+):(\d+)(?:-(\d+))?$/);
if (!m) { console.log('usage: prep.js <s>:<a>[-<b>]'); process.exit(1); }
const S = +m[1], A = +m[2], B = +(m[3] || m[2]);
const dir = path.join(__dirname, 'audit', key.replace(':', '_'));
fs.mkdirSync(dir, { recursive: true });
const IDS = { 15: 'at-Tabari', 90: 'al-Qurtubi', 91: "as-Sa'di", 14: 'Ibn Kathir (ar)', 169: 'Ibn Kathir (en, abridged)', 94: 'al-Baghawi', 168: "Ma'arif (en)", 16: 'al-Muyassar' };
const PAUSE = /^[ۖ-ۭ]+$/;
const dec = s => s.replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16))).replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(+d));
const strip = t => dec(t.replace(/<[^>]+>/g, ' ')).replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/[ \t]+/g, ' ').replace(/\n\s*\n+/g, '\n').trim();

(async () => {
  const out = [];
  const Q = require(path.join(ROOT, `data/quran-json/${S}.json`)).verse;
  const EN = require(path.join(ROOT, 'data/translations/en.json'));
  const BN = require(path.join(ROOT, 'data/translations/bn.json'));
  const tr = (T, v) => { const s = T[S] || T[String(S)]; if (!s) return T[`${S}:${v}`] || ''; return Array.isArray(s) ? s[v - 1] : (s[v] || s[String(v)] || ''); };
  out.push(`# PREP ${key}\n\n## Verses (target marked >>), Arabic word counts exclude pause marks\n`);
  for (let v = Math.max(1, A - 6); v <= B + 6; v++) {
    const ar = Q['verse_' + v]; if (!ar) continue;
    const n = ar.split(/\s+/).filter(x => x && !PAUSE.test(x)).length;
    const t = v >= A && v <= B ? '>>' : '  ';
    out.push(`${t} ${S}:${v} [${n} words] ${ar}\n   EN: ${tr(EN, v)}\n   BN: ${tr(BN, v)}\n`);
  }
  // shipped neighbours: headings + lesson only, never full text
  const N = L.get(L.load('js/tadabbur-data.js'), 'TADABBUR_NOTES');
  const ART = L.loadTadabburArticles();
  out.push(`\n## Shipped cards/articles in surah ${S} within ±25 (read a full article only if you must)\n`);
  for (const k of Object.keys(N)) {
    const km = k.match(/^(\d+):(\d+)/); if (!km || +km[1] !== S || Math.abs(+km[2] - A) > 25) continue;
    out.push(`- ${k}: lesson: ${N[k].lessonEn || ''}`);
    if (ART[k]) out.push(`    headings: ${ART[k].sections.map(s => s.h.en).join(' | ')}`);
  }
  out.push(`\n## Tafsir files (read these; do not re-fetch). Size in chars; "covers" = verse keys the API grouped\n`);
  for (let v = A; v <= B; v++) for (const id of Object.keys(IDS)) {
    const f = path.join(dir, `t${id}_${v}.txt`);
    let covers = '', txt;
    if (fs.existsSync(f)) { txt = fs.readFileSync(f, 'utf8'); covers = (txt.match(/^COVERS: (.*)$/m) || [])[1] || ''; }
    else {
      try {
        const r = await fetch(`https://api.qurancdn.com/api/qdc/tafsirs/${id}/by_ayah/${S}:${v}`);
        const j = await r.json(); const t = j.tafsir || {};
        covers = Object.keys(t.verses || {}).join(',');
        txt = `SOURCE: ${IDS[id]} (tafsir ${id}) on ${S}:${v}\nCOVERS: ${covers}\n\n` + strip(t.text || '');
        fs.writeFileSync(f, txt);
      } catch (e) { txt = ''; covers = 'FETCH FAILED ' + e.message; }
    }
    const body = txt.length - (txt.indexOf('\n\n') + 2);
    const warn = covers && !covers.split(',').includes(`${S}:${v}`) ? '  !! WRONG GROUP — do not use' : (covers.includes(',') ? '  (grouped)' : '');
    out.push(`- ${path.relative(ROOT, f)}  ${IDS[id]}  ${body} chars  covers ${covers}${warn}`);
  }
  out.push(`\nHadith: node tools/wip/round11/hadith.js Bukhari 660   (also Muslim, AbuDawud, Tirmidhi, Nasai, IbnMajah)\nGates: node tools/wip/round11/gate.js ${key}\n`);
  fs.writeFileSync(path.join(dir, 'PREP.md'), out.join('\n'));
  console.log('wrote', path.relative(ROOT, path.join(dir, 'PREP.md')));
})();
