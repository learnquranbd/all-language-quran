# Places in the Quran: drafter brief

A new module shows the places the Quran names or clearly refers to on a map of the
region (Egypt to Iraq, Anatolia to Yemen), each with a card: where it is, what the Quran
says there, and the ayat. Readers are Bengali first, English second.

## Your inputs and your one output

- `tools/places/registry.js`: your batch's places (`batch: 'P1'` etc.), with candidate ayat.
  The candidates are hints: confirm each in `data/quran-words.json` + `data/translations/en.json`,
  drop any that doesn't name or clearly refer to the place, add any clearly missing one.
- Tafsir: `node tools/themes/tafsir.js places-<id> <s:a> 169,14,91` fetches and saves
  Ibn Kathir (en, abridged), Ibn Kathir (ar) and as-Saʿdī; other ids are listed in the
  script header (15 aṭ-Ṭabarī, 90 al-Qurṭubī). Saved under `tools/themes/work/places-<id>/`.
- `tools/BANGLA-STYLE.md`: read before writing Bengali.
- Write **only** `tools/places/work/<batch>/draft.json`. Helper scripts go in that folder.
  No git, no other files.

## draft.json: an array, one object per place

```json
[ { "id": "ahqaf", "kind": "land",
    "name": { "en": "al-Aḥqāf", "bn": "আল-আহকাফ", "ar": "الأحقاف" },
    "label": { "en": "al-Aḥqāf", "bn": "আহকাফ" },
    "loc": "traditional", "lat": 17.5, "lon": 49.0, "radiusKm": 250,
    "refs": ["46:21"],
    "about": { "en": "2-4 sentences: what the Quran says here.", "bn": "..." },
    "location": { "en": "1-3 sentences: how the place is identified, attributed.", "bn": "..." },
    "sources": [ { "tafsir": 169, "ref": "46:21", "quote": "exact words copied from the saved file" } ] } ]
```

- `loc`: `known` (a site identified without dispute: Makkah, Madinah, Badr, Jerusalem, Egypt…),
  `traditional` (a widely held identification that is not certain: Jabal Mūsā for Sinai,
  al-Bad' for Madyan, Hegra for al-Ḥijr), `uncertain` (only a broad region is held; give
  `radiusKm` for a dashed area), or `unknown` (no location; `lat`/`lon` null, not drawn).
- `lat`/`lon`: the site's real coordinates, two decimals. For `traditional`/`uncertain`,
  the commonly named site or region centre. Must be inside lon 24-61, lat 11-42.
- `label`: the short name drawn on the map (en ≤ 18 chars).

## Content rules

- **about** says only what the ayat say about the place (use the bundled translations).
  No hadith. No sīrah detail beyond what the ayah itself states.
- **location** must be one of: plain modern geography for `known` places ("today in
  western Saudi Arabia, about 150 km south-west of al-Madīnah"), or an identification
  **attributed** to a tafsir you fetched ("Ibn Kathīr says al-Aḥqāf were sand hills in
  Yemen, in Ḥaḍramawt"). Every attributed claim needs a `sources` entry whose `quote` is
  copied exactly from the saved tafsir file (`validate.js` checks it). If the tafsir
  disagree, say so; if none locates it, say the location is unknown.
- Never state a disputed identification as fact. Never use modern political borders as
  the place's identity ("in Israel", "in Jordan"); describe by region, city or landmark.
- Bengali: written from the idea, says what the English says, Bengali digits, at most one
  em dash per string. Arabic names in `name.ar` without diacritics are fine.

## Done means

`node tools/places/validate.js <batch>` prints CLEAN; every ref re-checked against the
Arabic; every attributed claim matches its quote. Report: places done, refs added or
dropped, and every location you marked traditional/uncertain/unknown and why.
