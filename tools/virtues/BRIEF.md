# Virtues of surahs and ayat: drafter brief

The Quranic Duas page gets a second section: what authentic hadith say about particular
surahs and ayat (al-Fātiḥah, al-Baqarah, Āyat al-Kursī, the last two ayat of al-Baqarah, the
first ten of al-Kahf, al-Mulk, al-Ikhlāṣ, the Muʿawwidhatān...). Readers are Bengali first,
English second. Many popular "virtues" are weak or fabricated; this section is only as good
as its refusal to include them.

## Inputs and your one output

- `node tools/virtues/hadith.js <bukhari|muslim|abudawud|tirmidhi|nasai|ibnmajah> <N>`
  fetches a hadith with its gradings, saves it under `tools/virtues/work/hadith/` and prints
  it. Numbers are as usually cited (sunnah.com; Muslim by ʿAbd al-Bāqī). If the text is not
  the hadith you expected, the number is wrong: search nearby numbers, never assume.
- `tools/BANGLA-STYLE.md` before writing Bengali.
- Write **only** `tools/virtues/work/V1/draft.json` (helpers in that folder; no git).

## Which hadith qualify

- Ṣaḥīḥ al-Bukhārī or Ṣaḥīḥ Muslim: qualify.
- Abū Dāwūd, at-Tirmidhī, an-Nasāʾī, Ibn Mājah: only if the saved file's GRADES line has
  al-Albānī (or Shākir / Bashshār ʿAwwād where al-Albānī is absent) grading it Ṣaḥīḥ or
  Ḥasan. Record that grader and grade exactly as the file has it. Anything graded Ḍaʿīf,
  Mawḍūʿ or with no grading is out, however famous (Yā Sīn "the heart of the Quran",
  al-Wāqiʿah against poverty, az-Zalzalah "half the Quran" are known to be weak: check, and
  list them as rejected with the grade you found).
- A virtue must be about reciting, learning or acting on a specific surah or ayah. General
  virtues of the Quran are out of scope.

## draft.json: an array, in muṣḥaf order of the target

```json
[ { "id": "ayat-al-kursi",
    "target": { "surah": 2, "ayat": "255" },
    "title": { "en": "Āyat al-Kursī: the greatest ayah", "bn": "আয়াতুল কুরসি: সবচেয়ে মহান আয়াত" },
    "virtues": [
      { "text": { "en": "One or two sentences: what the hadith says, close to its words.", "bn": "..." },
        "hadith": { "collection": "muslim", "number": "810", "grade": "Ṣaḥīḥ", "gradedBy": "Muslim",
                    "quote": "exact English words copied from the saved file" } } ] } ]
```

- `target.ayat`: "255", a range "285-286", "1-10", or omitted for the whole surah.
- `virtues`: one per distinct benefit, each with its own hadith. `text` keeps to what the
  hadith says: no added promises, no "scholars say", no practice the hadith doesn't give.
  If the wording names a time or count (before sleep, morning and evening, three times),
  keep it exactly.
- `gradedBy`: "Bukhari" / "Muslim" for the Ṣaḥīḥayn, else the grader from the file.
- Bengali: written from the idea, Bengali digits, at most one em dash per string.

Aim for coverage of what is authentic: expect roughly 15-25 targets.

## Done means

`node tools/virtues/validate.js V1` prints CLEAN. Report: targets, each hadith with grade,
and a "rejected" list (hadith you checked and left out, with the grade that excluded them).
Put the rejected list in `tools/virtues/work/V1/rejected.json` as
`[{ "claim": "...", "collection": "...", "number": "...", "grade": "...", "gradedBy": "..." }]`.
