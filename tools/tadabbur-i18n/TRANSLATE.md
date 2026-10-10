# Tadabbur cards: translation brief

Tadabbur cards (a reflection on an ayah, reflection points that are questions to the
reader, a practical lesson) exist in English and Bengali. Readers in 13 other languages see
English. You translate one chunk into one language.

Input: `tools/tadabbur-i18n/work/<C>/en.json` = { "<id>": "<English>" }.
Output: `tools/tadabbur-i18n/work/<C>/tr-<lang>.json` = { "<id>": "<translation>" }, every id,
same ids. Helper scripts and part files go in `tools/tadabbur-i18n/work/<C>/<lang>-parts/`
(your private folder; others work in parallel). No git, no other files.

## How to translate
- Natural, fluent prose a native reader would write: the meaning of the English, not its
  word order. Warm, plain register: this is devotional reflection for ordinary readers.
- Islamic terms in the form the language's Muslim readers use: Allah (never "God" in
  place of Allah), the Prophet ﷺ (keep ﷺ), prophets' names in the language's usual Islamic
  form (Mūsā → Musa/Moïse/Муса… as Muslims writing that language name him), Quran, ayah/surah
  in the language's usual Islamic word. Keep (ʿalayhi s-salām)/(raḍiya Allāhu ʿanhu)
  conventions as the language normally writes them, or omit if the English has none.
- Verse references like 2:255 or 39:53-54 stay exactly as written, in Latin digits (the app
  links them).
- Reflection points that are questions stay questions.
- Do not add or drop content. Do not explain. No notes in the output.
- Write the output in parts (e.g. 100 ids per part) and combine with a script; a chunk is
  12-27 thousand English words, so do not try to emit it in one message.

## Done means
`node tools/tadabbur-i18n/check-tr.js <C> <lang>` prints CLEAN. Report: strings translated,
terminology choices you made (Allah, Prophet, ayah, surah, prophets' names), anything you
were unsure of.
