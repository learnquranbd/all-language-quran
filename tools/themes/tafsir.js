// Fetch tafsir for one ayah, save it, print a truncated plain-text copy.
// usage: node tools/themes/tafsir.js <page-id> <s:a> [ids=169,91] [--max 4000]
// IDs: 169 Ibn Kathir (en, abridged) · 168 Ma'arif al-Qur'an (en) · 14 Ibn Kathir (ar)
//      91 as-Sa'di (ar) · 15 at-Tabari (ar) · 90 al-Qurtubi (ar) · 94 al-Baghawi (ar) · 16 al-Muyassar (ar)
// Saved to tools/themes/work/<page-id>/t<ID>_<s>_<a>.txt; a saved copy is reused, never refetched.
const fs = require('fs'), path = require('path');
const [id, ref, idsArg] = process.argv.slice(2);
if (!id || !/^\d+:\d+$/.test(ref || '')) { console.log('usage: tafsir.js <page-id> <s:a> [169,91] [--max N]'); process.exit(1); }
const mi = process.argv.indexOf('--max'); const MAX = mi > 0 ? +process.argv[mi + 1] : 4000;
const ids = (idsArg && !idsArg.startsWith('--') ? idsArg : '169,91').split(',');
const NAMES = { 169: 'Ibn Kathir (en)', 168: "Ma'arif al-Qur'an (en)", 14: 'Ibn Kathir (ar)', 91: "as-Sa'di", 15: 'at-Tabari', 90: 'al-Qurtubi', 94: 'al-Baghawi', 16: 'al-Muyassar' };
const dir = path.join(__dirname, 'work', id); fs.mkdirSync(dir, { recursive: true });
const dec = s => s.replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16))).replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(+d));
const strip = t => dec(String(t).replace(/<[^>]+>/g, ' ')).replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/[ \t]+/g, ' ').replace(/\n\s*\n+/g, '\n').trim();
(async () => {
  for (const tid of ids) {
    const f = path.join(dir, `t${tid}_${ref.replace(':', '_')}.txt`);
    let text;
    if (fs.existsSync(f)) text = fs.readFileSync(f, 'utf8');
    else {
      try {
        const r = await fetch(`https://api.qurancdn.com/api/qdc/tafsirs/${tid}/by_ayah/${ref}`);
        const j = await r.json();
        const vs = j.tafsir && j.tafsir.verses ? Object.keys(j.tafsir.verses).join(',') : '';
        text = `SOURCE: ${NAMES[tid] || tid} on ${ref} (group covers: ${vs || ref})\n` + strip(j.tafsir && j.tafsir.text || '(empty)');
        fs.writeFileSync(f, text);
      } catch (e) { text = `(fetch failed: ${e.message})`; }
    }
    console.log(`\n===== ${NAMES[tid] || tid} · ${ref} · ${text.length} chars (saved ${path.basename(f)}) =====\n` + text.slice(0, MAX) + (text.length > MAX ? `\n…[truncated; grep the saved file for more]` : ''));
  }
})();
