# Arabic conventions (set by the C1 pilot; every Arabic chunk follows them)

- QURAN QUOTES: never typed. Write placeholders {Q:s:a:from-to}, {Q:s:a:n} or {Q:s:a} (whole ayah)
  and fill them from data/quran-words.json inside ﴿ ﴾ with a combine script; see
  tools/tadabbur-i18n/ar-combine-example.js (the C1 pilot's combine.js: parts are `@@ <id>` + text).
  Quote only where the English quotes ayah wording; paraphrase otherwise, without ﴿ ﴾.
  Where the English quote is loose, quote the nearest exact Quranic words.
  Non-Quranic set phrases and quoted single words in « » («إن شاء الله»).
- الله always (also for "God"); إله only as the Quran's own wording. النبي ﷺ / نبيّه ﷺ, الرسول ﷺ; ﷺ whenever he is meant.
- Prophets: عليه السلام at each mention (dual عليهما السلام, Maryam عليها السلام); drop English glosses "(Jonah)";
  Luqman plain لقمان; unnamed figures stay unnamed. Companions رضي الله عنه.
- Terms: الآية/الآيات (هاتان الآيتان)، السورة، القرآن، الذِّكر، الدعاء، الصلاة، التقوى (اتّقى)، التوكّل، التوحيد،
  الإيمان، الجنة، النار، الآخرة، يوم القيامة، القضاء/قضاء الله، آية الكرسي، سورة الفاتحة.
- Divine names in Quranic form (الحيّ القيّوم، الوهّاب، الغفور الرحيم، الغنيّ الحميد، الأسماء الحسنى).
- Register: warm teaching voice; reflection questions first person masculine singular (هل أنا…؟ كيف…؟);
  lessons gentle masculine-singular imperatives (اجعل، ادعُ، ثِق). Verse refs in Latin digits as written.
