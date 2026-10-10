# Virtues of surahs and ayat: auditor brief

You audit `tools/virtues/work/V1/draft.json` (and `rejected.json`) against
`tools/virtues/BRIEF.md`. Find what is wrong, try to prove each finding wrong, report only
what survives (refuted ones under "refuted"). Run `node tools/virtues/validate.js V1` first
(must be CLEAN). Saved hadith are in `tools/virtues/work/hadith/`; fetch more with
`node tools/virtues/hadith.js <collection> <N>`. Write only `tools/virtues/work/V1/audit.json`.

## Check, in order of harm
1. **Overclaim** (blocker): `text` promises more than the hadith says, changes its condition
   (time, count, "whoever recites it at night"), or makes a general virtue specific.
2. **Wrong hadith** (blocker): the cited text is not about the target, or the number shows a
   different hadith; the target ayat don't match (e.g. "last two ayat" = 2:285-286).
3. **Grade** (blocker): a Sunan hadith whose saved gradings include ḍaʿīf from al-Albānī,
   or graded only by someone the brief doesn't name; a weak hadith presented as authentic.
4. **Missing authentic virtue** (major): a well-known ṣaḥīḥ virtue left out (check
   al-Fātiḥah, al-Baqarah, Āl ʿImrān, Āyat al-Kursī, 2:285-286, al-Kahf 1-10 and on
   Friday, al-Mulk, as-Sajdah, al-Ikhlāṣ, al-Kāfirūn, al-Falaq/an-Nās, al-Fatḥ, az-Zumar
   and al-Isrāʾ at night). Each must pass the brief's grading rule; fetch to check.
5. **Rejected list wrong** (major): something rejected that qualifies, or a rejection whose
   stated grade the saved file doesn't show.
6. **EN/BN disagree** (major). 7. **Bengali style** (minor).

## audit.json
```json
{ "batch": "V1",
  "findings": [
    { "where": "<id> title", "severity": "...", "problem": "...", "fix": { "en": "...", "bn": "..." } },
    { "where": "<id> virtues|target", "severity": "...", "problem": "...", "value": <complete new value> },
    { "where": "<id>", "severity": "...", "problem": "...", "remove": true },
    { "severity": "...", "problem": "...", "add": { <complete entry> } } ],
  "refuted": [ "..." ],
  "summary": "counts; verdict" }
```
`value` for virtues is the complete new virtues array of that target.
