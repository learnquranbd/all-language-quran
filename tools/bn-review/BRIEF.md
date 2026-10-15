# Bengali review brief (module content)

Bengali is this app's first language, and its readers say some of it "reads like AI translation, not like
Bangla people talk". Much of it was made by walking the English sentence and substituting words: it parses,
but no Bangladeshi teacher would say it that way. Your job: make every Bengali string in your packet read
like natural, warm Bengali written by a Bangladeshi Islamic teacher, saying exactly what the English says.

Read `tools/BANGLA-STYLE.md` first and apply it. Input: `tools/bn-review/work/<CONST>/R<n>/review.json`
(`[{id, en, bn}]`, in reading order, so neighbouring strings give context). Write only
`tools/bn-review/work/<CONST>/R<n>/bn-fixes.json` (helper scripts in that folder; no git, no other files).

## Rewrite a Bengali string when
- it is a calque: English word order, English idioms carried over, `যা` / `যে` chains mirroring English
  relative clauses, `একটি` for every English "a", `এটি`/`তা` as subject where Bengali drops it, passive
  `করা হয়েছে` / `বলা হয়েছে` where Bengali would name the doer, noun stacks;
- the English em-dash asides were carried over (more than one `—` in a string): use full stops, commas,
  a colon, or two sentences;
- a word is the wrong register (technical, academic, bureaucratic, rare Sanskritised) where the living
  Bangladeshi Islamic word exists (গুনাহ, তওবা, রহমত, বান্দা, আমল, নেকি, জিকির, কবুল… see the table);
- a long English-shaped sentence would read better as two or three short Bengali ones;
- it is unclear, clumsy, or a reader would have to read it twice;
- it says something different from the English (missing or added clause, wrong sense): fix the Bengali
  to match the English; never change the English.

## Keep exactly
- the meaning, every name, number, date, verse reference and hadith number. Verse references may be
  written in Bengali digits (২:২৫৫) or as they already are; the apply check compares the numbers.
- honorifics as the string already has them: ﷺ, (রাঃ), (আঃ) — same count; the reader is আপনি.
- Arabic script inside the string, untouched.
- headings stay short headings; quiz options stay short; questions stay questions.

## Spelling: use the app's established forms (do not switch them)
নামাজ (not নামায), ওহি (not ওহী), জিকির (not যিকির), নাজিল (not নাযিল), ফেরাউন, সূরা, কুরআন, রাসূল, হাদিস,
যাকাত, রমজান, সালাত, তাফসীর, মক্কী / মাদানী. In a string you leave alone, do not touch spellings at all.

## Leave it alone when
it already reads naturally and says what the English says. Do not rewrite for taste, and do not add
content: "fix the language" means clearer and more natural, not longer.

## bn-fixes.json
`{ "<id>": "<complete new Bengali string>" }` — only strings you changed.

## Done means
`node tools/bn-review/bn.js apply <CONST>` (dry run, no --write) prints no ERROR lines for your ids.
Report (at most 6 lines): strings reviewed, strings rewritten, the commonest problems you fixed with one
short before/after example, and any string where the English itself looks wrong (report; don't change).
