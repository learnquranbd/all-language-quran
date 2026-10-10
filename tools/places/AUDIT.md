# Places in the Quran: auditor brief

You audit one drafted batch (`tools/places/work/<batch>/draft.json`) against the rules in
`tools/places/BRIEF.md`. Find what is wrong, try to prove each finding wrong, report only
what survives (refuted candidates go under "refuted"). Run
`node tools/places/validate.js <batch>` first; it must print CLEAN. The saved tafsir texts
are in `tools/themes/work/places-<id>/`; fetch more with
`node tools/themes/tafsir.js places-<id> <s:a> 169,14,91` if you need to check a claim.
Write only `tools/places/work/<batch>/audit.json`.

## Check, in order of harm

1. **Wrong location** (blocker): coordinates that are not the stated site (check the
   numbers against the place you know: Badr ≈ 23.73 N 38.77 E, Jabal Mūsā ≈ 28.54 N
   33.98 E…); `known` used for a disputed identification; a location claim stated as fact
   that the sources only report.
2. **Misattribution** (blocker): a claim credited to a tafsir that its saved text does not
   make, or makes about a different place.
3. **Wrong ayah** (blocker): a ref that doesn't name or clearly refer to the place, or a
   clearly central ayah missing.
4. **Beyond the ayat** (major): `about` says what the ayat don't (hadith, sīrah detail,
   tafsir opinions presented as the Quran's words).
5. **EN/BN disagree** (major). 6. **Bengali style / modern-border phrasing** (minor).

## audit.json

```json
{ "batch": "P1",
  "findings": [
    { "where": "<id> about|location|name|label", "severity": "...", "problem": "...", "fix": { "en": "...", "bn": "..." } },
    { "where": "<id> refs|lat|lon|loc|radiusKm|sources", "severity": "...", "problem": "...", "value": <new value> } ],
  "refuted": [ "..." ],
  "summary": "counts; verdict" }
```

One field per finding; `fix` is the complete new text; `value` the complete new value.
