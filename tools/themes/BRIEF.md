# Drafter brief — one theme page (Allah / Quranic Themes groups)

You draft ONE page: `data/themes/<id>.json`, the rich version of a page from the old
Learn Quran BD app. The orchestrator's message gives the id and the page-specific
watch-points; this file is everything else.

**You never write under `js/` or `data/`, and never commit.** Your output is
`tools/themes/work/<id>/draft.json` plus `tools/themes/work/<id>/LEDGER.md`.

## 1. Read, in this order
1. `tools/themes/work/<id>/PREP.md` (run `node tools/themes/prep.js <id>` if it is
   missing): every ayah on the page's list with Arabic, English (Saheeh) and Bengali,
   the old app's intro, the sibling pages, and the videos already on the page.
2. `tools/wip/round11/SOURCE-GATE.md` (**binding**) and `tools/BANGLA-STYLE.md` (**binding**).
3. `data/themes/<id>.json`: the seed. Keep its `refs`, `videos`, `reading` (you may
   add to `reading`) and `title`.
4. To see the register, read ONE chapter of `js/hope-data.js` (search `id: 'never-despair'`)
   — about 60 lines. Do not read more of it.

## 2. What the page is for
A reader opens "Whom Allah Loves" (or "Patience", …) and should leave knowing what the
Quran actually says on it, in what words, with which nuances, and what to do about it.
Not a sermon and not a list: a guided reading of the ayat, organised into themes,
with the Sunnah where a sound hadith genuinely adds something.

## 3. Shape and hard numbers (`node tools/themes/validate.js <draft>` enforces them)
```json
{
  "id": "<id>", "status": "full",
  "title": { "en": "...", "bn": "..." },              // keep the seed's
  "tagline": { "en": "6-25 words", "bn": "..." },
  "intro": [ { "en": "50-120 words", "bn": "..." }, ... ],   // 2-3 paragraphs
  "sections": [                                        // 5-7 sections
    { "id": "kebab-case",
      "title": { "en": "2-6 words", "bn": "..." },
      "body": [ { "en": "50-120 words", "bn": "..." } ],     // 1-2 paragraphs
      "verses": [ { "ref": "3:31", "note": { "en": "30-90 words", "bn": "..." } } ],  // 2-5
      "hadith": [ { "src": "Sahih al-Bukhari 6502", "url": "https://quranx.com/hadith/Bukhari/DarusSalam/Hadith-6502",
                    "grade": { "en": "hasan", "bn": "হাসান" },          // only the collector's own grading, else omit
                    "text": { "en": "...", "bn": "..." }, "note": { "en": "≤70 words", "bn": "..." } } ]  // 0-2
    } ],
  "practice": [ { "en": "5-35 words", "bn": "..." } ],       // 4-6 concrete takeaways
  "refs": [ "s:a", ... ],                 // the seed list, sorted; add any ayah you use in a section
  "refsDropped": [ { "ref": "s:a", "reason": "..." } ],     // only clear mismatches, see §5
  "videos": [ ... ],                      // unchanged from the seed
  "reading": [ { "title": {"en":"...","bn":"..."} or "string", "url": "https://...", "site": "islamqa.info", "lang": "bn" } ],  // 2-4
  "sources": [ "Tafsir Ibn Kathir", "Tafsir as-Sa'di", ... ],   // only what you actually fetched and used
  "related": [ "<other theme id>", ... ]  // 2-4
}
```
Total: **2,300-3,000 English words** across intro, bodies, notes and hadith. Plan the
budget before writing (e.g. 6 sections × [1 body of 90 + 3 notes of 55] + intro 2 × 90
≈ 2,350). Write to the budget the first time.

A section's verse notes should say what THAT ayah adds: its wording, its context, the
qualifier that is easy to miss, how it differs from its neighbour in the section. Not a
paraphrase of the translation printed right above it.

## 4. Bengali
Bengali of equal substance, written from the idea (BANGLA-STYLE.md). Same refs,
numbers and attributions as the English. At most one em dash per Bengali string.
Verse refs in Bengali prose use Bengali digits (২:১৫৩). Prophet's salutation ﷺ;
other prophets (আঃ), matching what ships. No Latin words in Bengali.

## 5. Accuracy rules (each one is a defect that has shipped before)
- **Nothing from memory.** Every attribution to a mufassir needs that tafsir fetched
  on that ayah: `node tools/themes/tafsir.js <id> <s:a> 169,91` (saved copies are
  reused). IDs are in the script's header. Budget: fetch for the ayat you write notes
  on, not the whole list. Grep long saved files rather than printing them whole.
- **Hadith:** `node tools/wip/round11/hadith.js <Collection> <N> --save tools/themes/work/<id>`.
  Quote ONE collection's wording whole (a faithful English rendering of the page you
  fetched), give the number only if the page shows it, report only the collector's own
  grading, never upgrade it, never use a weak report. Zero hadith in a section is fine.
  sunnah.com returns 403; don't try it.
- **Quran:** the ayah text is rendered by the app; you cite refs only. Check each ref's
  meaning in PREP.md before writing a note on it. A note must fit the ayah it sits under.
- **The ayah list** comes from the old app and is mostly right. If an ayah on it plainly
  does not belong to the topic (e.g. listed under "Patience" but about inheritance),
  move it to `refsDropped` with a one-line reason. Don't prune for borderline cases.
- **No polemic and no named modern groups.** Where the Quran speaks of a past people
  or a category (the hypocrites, those who conceal the Book), describe the deed and
  the warning; do not extend it to a present-day community, sect, nation or person.
- **Fiqh:** where scholars differ (e.g. the number of prostration ayat), report the
  difference with who holds what, as fetched; no ruling in your own voice.
- **Reading links:** 2-4, from quran.com, islamqa.info, islamhouse.com, hadeethenc.com,
  or yaqeeninstitute.org; at least one in Bengali if one exists. Each must return
  HTTP 200 (`curl -s -o /dev/null -w "%{http_code}" -L <url>`) and you must read its
  title to confirm it is on THIS topic. Never link a page you didn't fetch.
- Section titles: unique within the page, not just the page title repeated.

## 6. The ledger (`tools/themes/work/<id>/LEDGER.md`)
- Per section: tafsir files fetched and which mufassir you ended up naming.
- Each hadith: collection, number, URL fetched, first ten words used, grading.
- Each reading link: URL, HTTP code, page title.
- `refsDropped` reasons.
- **Dropped:** anything you wanted to say but couldn't confirm. An unconfirmable claim
  quietly softened instead of dropped is a defect.

## 7. Finish
Run `node tools/themes/validate.js tools/themes/work/<id>/draft.json` until it
reports no ERROR (WARNs are for judgement). Reply in under 120 words: totals, any WARN
you kept and why, and anything the auditor should look at first.
