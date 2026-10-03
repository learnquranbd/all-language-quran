// Fetch one quranx hadith page and print only the reference, English and Arabic text.
// usage: node tools/wip/round11/hadith.js Bukhari 660 [--save <dir>]
// Bukhari/AbuDawud use the DarusSalam path; if a number shows the wrong hadith, pass --plain.
const fs = require('fs'), path = require('path');
const [col, num] = process.argv.slice(2);
if (!col || !num) { console.log('usage: hadith.js <Collection> <N> [--plain] [--save dir]'); process.exit(1); }
const plain = process.argv.includes('--plain');
const si = process.argv.indexOf('--save');
const ds = !plain && /^(Bukhari|AbuDawud)$/i.test(col) ? 'DarusSalam/' : '';
const url = `https://quranx.com/hadith/${col}/${ds}Hadith-${num}`;
const dec = s => s.replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16))).replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(+d));
const clean = s => dec(s.replace(/<[^>]+>/g, ' ')).replace(/&nbsp;/g, ' ').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
(async () => {
  const html = await (await fetch(url)).text();
  const pick = re => [...html.matchAll(re)].map(x => clean(x[1]));
  const refs = pick(/class="hadith__reference"[^>]*>([\s\S]*?)<\/div>\s*<\/div>/g);
  const en = pick(/class="hadith__text"[^>]*>([\s\S]*?)<\/div>/g);
  const ar = pick(/class="hadith__text arabic"[^>]*>([\s\S]*?)<\/div>/g);
  const text = `URL: ${url}\nREFS: ${refs.join(' ; ') || '(none found)'}\nEN: ${en.join('\n') || '(no English text — page may be empty or numbering differs)'}\nAR: ${ar.join('\n')}\n`;
  if (si > 0) { const d = process.argv[si + 1]; fs.mkdirSync(d, { recursive: true }); fs.writeFileSync(path.join(d, `hadith_${col}_${num}.txt`), text); }
  console.log(text);
})();
