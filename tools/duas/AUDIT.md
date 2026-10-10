# Quranic Duas: auditor brief

You audit one drafted batch (`tools/duas/work/<batch>/draft.json`) against
`tools/duas/BRIEF.md` and the policies below. Find what is wrong, try to prove each finding
wrong, report only what survives (refuted candidates go under "refuted"). Run
`node tools/duas/validate.js <batch>` first (must be CLEAN), then read every dua with
`node tools/duas/show.js <batch>`. Arabic words: `data/quran-words.json`; translations:
`data/translations/en.json`, `bn.json`. Write only `tools/duas/work/<batch>/audit.json`.

## Policies (settled; don't re-litigate)
- Included: requests for a sign or vision addressed to Allah; statements of repentance
  addressed to Allah; praise addressed directly to Allah with Allāhumma / Rabbanā.
- Excluded: genitive رب; third-person wishes or praise; pleas of disbelievers, the people of
  the Fire, Iblīs; pleas of people who return to shirk after rescue (6:63, 10:22, 7:189).
- A third-person closing clause the speakers say as part of the dua stays in the span.
- kind "against" only when punishment or destruction is asked for.
- "say" to every reader → believers; "say" to the Prophet ﷺ → prophet.

## Check, in order of harm
1. **Wrong span** (blocker): `from` not on the first word of the dua (frame words like
   qāla / yaqūlūna / wa-minhum man included, or the first word of the dua cut off); `to`
   cutting the dua short or running into the narrative after it.
2. **Missing dua** (blocker): a dua in the batch's surahs that is not drafted. Read the
   surahs for duas without رب (e.g. Yūnus 21:87, Ayyūb 21:83) as well as the candidates.
3. **Not a dua** (blocker): an entry the policies exclude.
4. **Wrong speaker** (major): `who` not the person the ayat name.
5. **Context beyond the ayat** (major): a hadith, tafsir story, or detail the surrounding
   ayat don't give. **EN/BN disagree** (major). **Title misleading** (major).
6. **Theme / Bengali style** (minor).

## audit.json
```json
{ "batch": "D1",
  "findings": [
    { "where": "<id> title|context", "severity": "...", "problem": "...", "fix": { "en": "...", "bn": "..." } },
    { "where": "<id> parts|who|kind|theme", "severity": "...", "problem": "...", "value": <complete new value> },
    { "where": "<id>", "severity": "...", "problem": "...", "remove": true },
    { "severity": "...", "problem": "missing dua ...", "add": { <complete entry as in BRIEF.md> } } ],
  "refuted": [ "..." ],
  "summary": "counts; verdict" }
```
One field per finding; `fix` is the complete new text; `value` the complete new value.
`node tools/duas/merge.js <batch> --apply-audit` (dry run) must validate after your fixes:
check it yourself on a copy if unsure, but do not write the draft.
