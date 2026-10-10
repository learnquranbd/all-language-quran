# Tadabbur cards: Bengali review brief

Each Tadabbur card has a reflection, 2-6 reflection points and a lesson, in English and
Bengali. Bengali is the app's first language. Many early cards were written before the
style rules existed: their Bengali was made by walking the English sentence and
substituting words, so it parses but reads like a translation. Your job: make every Bengali
string read like natural, warm Bengali written by a Bangladeshi teacher, saying exactly what
the English says.

Read `tools/BANGLA-STYLE.md` first and apply it. Input: `tools/tadabbur-i18n/work/<C>/review.json`
(per card: ref, the ayah in English and Bengali for context, then the English and Bengali card).
Write only `tools/tadabbur-i18n/work/<C>/bn-fixes.json` (helper scripts in that folder; no git).

## Rewrite a Bengali string when
- it is a calque: English word order, English idioms carried over, "যা" / "যে" chains
  mirroring English relative clauses, passive voice where Bengali would be active, noun
  stacks ("তাঁর মনোযোগ দিয়ে সাড়া পায়");
- a word is the wrong register (technical, academic, bureaucratic) or a rare Sanskritised word
  where an everyday one exists;
- it is unclear, clumsy, or a reader would have to read it twice;
- it says something different from the English (missing a clause, adding one, wrong
  sense) — fix the Bengali to match the English; never change the English;
- spelling, Latin digits (use Bengali digits; verse refs like ২:২৫৫), or more than one em dash.
- Honorifics as the app ships them: আল্লাহ, নবী ﷺ / রাসূল ﷺ, prophets (আঃ), Companions (রাঃ).

## Leave it alone when
it already reads naturally and says what the English says. Do not rewrite for taste. Do not
add content, hadith, tafsir or new ideas; "enrich" here means clearer and more natural, not
longer. Keep each reflection point a question if the English is a question.

## bn-fixes.json
```json
{ "2:152": { "reflectionBn": "<complete new string>", "pointsBn": { "1": "<complete new point>" }, "lessonBn": "..." } }
```
Only cards and fields you changed; `pointsBn` keys are 0-based indexes.

## Done means
`node tools/tadabbur-i18n/apply-bn.js <C>` (dry run, no --write) prints no ERROR lines.
Report: cards reviewed, strings rewritten, the commonest problems you fixed (with one short
before/after example each), and any card where the English itself looked wrong (report it;
don't change it).
