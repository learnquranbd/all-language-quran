# Quranic Duas: drafter brief

A new page lists every dua in the Quran in one place. Each dua shows its Arabic word by
word (each word with its meaning under it), how many words it has, who made it, and its
ayat. Readers are Bengali first, English second.

## What counts as a dua

A supplication addressed to Allah in the Quran's text: the words of a prophet, of the
believers, of the angels, or one the Quran teaches ("say: my Lord..."). Usually it opens
with رَبِّ / رَبَّنَا / ٱللَّهُمَّ, but not always (Yūnus's dua in 21:87, Ayyūb's in
21:83, al-Fātiḥah 1:5-7, "ḥasbunā Allāh" 3:173 is NOT a dua addressed to Allah: judge each).
Leave out:
- رَبِّ in the genitive ("rabbi al-ʿālamīn") and anything that is not addressed to Allah.
- Pleas of the disbelievers or of the people of the Fire (23:107, 35:37, 40:11...) and
  the plea of Iblīs (7:14, 15:36). They are not duas for a reader to make. Pharaoh's
  magicians after they believed (7:126) and the believers of other nations ARE included.
- Duas against people (Nūḥ 71:26, Mūsā 10:88) are included, with the context the ayat give,
  because the page is complete; mark them `"kind": "against"`.

## Inputs and your one output

- `tools/duas/work/candidates.txt`: one line per candidate ayah (ref, why it is a candidate,
  the Arabic words). It is a hint list from old collections and a crude vocative scan; most
  "vocative" hits in the genitive are noise. Duas it misses are your job to add.
- `data/quran-words.json` (key "s:a" → array of Arabic words, 1-based positions in the
  draft), `data/wbw/en.json` + `data/wbw/bn.json` (a gloss per word, same order),
  `data/translations/en.json` + `bn.json`. Print them with a helper script in your folder.
- `tools/BANGLA-STYLE.md` before writing Bengali.
- Your batch: D1 = surahs 1-17, D2 = surahs 18-114. Write **only**
  `tools/duas/work/<batch>/draft.json` (helper scripts in that folder; no git, no other files).

## draft.json: an array, one object per dua, in muṣḥaf order

```json
[ { "id": "2-201",
    "parts": [ { "ref": "2:201", "from": 4, "to": 14 } ],
    "who": "believers",
    "kind": "for",
    "theme": "both-worlds",
    "title": { "en": "Good in this world and the next", "bn": "দুনিয়া ও আখিরাতের কল্যাণ" },
    "context": { "en": "One sentence: who says it and when, from the ayat only.", "bn": "..." } } ]
```

- `id`: "<surah>-<first ayah>" (add "-b" if two duas start in one ayah).
- `parts`: the exact span of the dua, one part per ayah, word positions 1-based inclusive.
  `from` is the first word of the dua itself (رَبَّنَا, not "and from them is who says").
  A dua over several ayat has one part per ayah; all but the first usually run from 1.
  Do not include the narrative frame ("qāla", "yaqūlūna") or what follows the dua.
- `who`: `believers` | `angels` | `prophet` (the Prophet ﷺ, when the Quran says "say:") |
  a prophet's id: `adam` `nuh` `hud` `salih` `ibrahim` `ismail` `lut` `shuayb` `yaqub`
  `yusuf` `musa` `harun` `sulayman` `ayyub` `yunus` `zakariyya` `isa` `muhammad` |
  `maryam` `imran-wife` `pharaoh-wife` `magicians` `ashab-kahf` `talut-army` `luqman` `other`.
  Use `muhammad` when a dua is in the Prophet's ﷺ own voice in a narrative; `prophet` when
  the Quran instructs him "say".
- `kind`: `for` (asking for good or protection) | `against`.
- `theme` (one): `forgiveness` `guidance` `mercy` `both-worlds` `family` `protection`
  `relief` `victory` `steadfastness` `knowledge` `provision` `gratitude` `righteousness`
  `akhirah` `against`.
- `title`: a short name for the dua (en ≤ 50 chars), in plain words, not a translation.
- `context`: one sentence (en ≤ 220 chars) on who says it and the situation, taken only from
  the surrounding ayat. No hadith, no tafsir stories.
- Bengali: written from the idea, Bengali digits, at most one em dash per string.

## Done means

`node tools/duas/validate.js <batch>` prints CLEAN. Then print every dua's Arabic span with
`node tools/duas/show.js <batch>` and read it: each span starts at the first word of the
dua and ends at its last. Report: number of duas, candidates you rejected by category
(genitive, disbelievers, not addressed to Allah...), duas you added that were not in the
candidate list, and any span you were unsure of.
