# Places in the Quran: journeys drafter brief

The map also draws journeys the Quran tells of, as routes between places. Each journey has
a short text, its ayat, and stops. Readers are Bengali first, English second. Read
`tools/places/BRIEF.md` first: its content rules (what the ayat say vs. what tafsir
identify, attribution, no modern borders, Bengali style) all apply here too.

## Inputs and your one output

- `tools/places/journeys.js`: your batch's journeys (`batch: 'J1'` etc.) with candidate
  refs and stops. A stop in the registry is a place id (`tools/places/registry.js`; its
  coordinates are in `data/places/places.json` or, for new P4/P5 places, in
  `tools/places/work/P4|P5/draft.json`). A stop in parentheses is a free point you must
  define yourself. Refs and stops are hints: confirm or correct them.
- Tafsir: `node tools/themes/tafsir.js journey-<id> <s:a> 169,14,91` (also 15, 90, 94).
  Saved under `tools/themes/work/journey-<id>/`. Quotes may also come from the saved
  `tools/themes/work/places-<stop id>/` folders.
- `tools/BANGLA-STYLE.md` before writing Bengali.
- Write **only** `tools/places/work/<batch>/draft.json`. Helper scripts go in that folder.
  No git, no other files.

## draft.json: an array, one object per journey

```json
[ { "id": "quraysh",
    "name":  { "en": "The winter and summer journeys of Quraysh", "bn": "..." },
    "label": { "en": "Quraysh caravans", "bn": "..." },
    "refs": ["106:1-4"],
    "legs": [
      [ { "place": "makkah" }, { "lat": 15.35, "lon": 44.21, "label": { "en": "Yemen", "bn": "ইয়েমেন" } } ],
      [ { "place": "makkah" }, { "lat": 33.51, "lon": 36.29, "label": { "en": "ash-Shām", "bn": "শাম" } } ] ],
    "about": { "en": "2-4 sentences: what the ayat say about the journey.", "bn": "..." },
    "route": { "en": "1-3 sentences: how the stops are identified, attributed; say the line is only a sketch of the direction, not the road taken.", "bn": "..." },
    "sources": [ { "tafsir": 169, "ref": "106:2", "quote": "exact words copied from a saved file" } ] } ]
```

- `legs`: one or more paths; each is two or more stops in travel order. A stop is either
  `{ "place": "<registry id>" }` or a free point `{ "lat", "lon", "label": {en ≤ 18, bn} }`
  inside lon 24-61, lat 11-42. Use a free point only for a stop with no place entry.
  A place whose location is unknown cannot be a stop.
- Every journey line is a sketch. The text must never describe a road, a camp or a
  waypoint the sources don't give. "route" says what the stops rest on, attributed when it
  is a tafsir identification (the destinations of 106:2, the start of the Elephant army,
  where Ibrāhīm emigrated from).
- `about` follows the ayat only. No hadith; no sīrah detail beyond what the ayat state
  (no dates, numbers of people, names of companions unless an ayah gives them).

## Done means

`node tools/places/validate-journeys.js <batch>` prints CLEAN; every ref re-checked against
the Arabic; every attributed claim matches its quote. Report: journeys done, refs and stops
changed and why, and every free point you defined with its basis.
