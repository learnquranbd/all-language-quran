---
name: tadabbur-enrich
description: Add Tadabbur verses one ayah at a time — card plus deep bilingual article, source-gated, merged and committed per ayah, pushed and deployed only every tenth. Use whenever the user says to continue the enrichment, continue enrich, or names a target ayah for the Tadabbur module.
---

# Tadabbur enrichment loop

The standing working agreement for this module. Follow it without asking.

## Pacing — the part that has been corrected most

- **One ayah at a time, and do not stop between them.** Finish an ayah, commit it,
  start the next in the same turn. Keep going until the user says stop.
- **Do not report after each ayah.** No "Next: 9:5", no summary of what the verse
  gave, no asking whether to continue. The user reads the commits. A closing line
  belongs only at the end of a batch of ten, or when something actually blocks.
- **Never hand the turn back for acknowledgement.** Saying what comes next and
  waiting is the failure mode; the user has twice had to repeat the instruction.
- **Commit locally per ayah. Push and deploy only after every tenth ayah.**
  `git push origin main`, then `firebase deploy --only hosting`, then verify the
  live site serves the new version.

## Which ayah is next

`tools/tadabbur-targets.json` holds the ordered target list. Next target = first
entry in `order` whose verses are not already covered by a key in
`TADABBUR_NOTES` (expand ranges before comparing).

## Per-ayah pipeline

1. **Read the verse and its neighbours** in `data/translations/en.json` and
   `bn.json` (at least five either side), plus the Arabic in
   `data/quran-json/<surah>.json`. Count Arabic words yourself when a count is
   going into the prose.
2. **Read the shipped neighbours.** Cards and articles already in the module for
   nearby verses, via `tests/lib.js` (`loadTadabburArticles`). Never contradict or
   repeat them. Check `js/seerah-articles.js` and the Prophets/Companions articles
   when the verse touches events they cover.
3. **Source gate — nothing cited from memory.**
   - Tafsir: `curl -s "https://api.qurancdn.com/api/qdc/tafsirs/<ID>/by_ayah/<S:A>"`
     then strip tags. IDs: `15` at-Tabari, `90` al-Qurtubi, `91` as-Sa'di,
     `14` Ibn Kathir (ar), `169` Ibn Kathir (en abridged), `94` al-Baghawi,
     `168` Ma'arif, `16` Muyassar. Attribute a reading only if it is in the text
     fetched for that exact verse. Some verses have no entry for a given
     mufassir — use another voice rather than inventing one.
   - Hadith: confirm on a page actually fetched. `quranx.com/hadith/Bukhari/DarusSalam/Hadith-<N>`,
     `quranx.com/hadith/Muslim/Hadith-<N>`, `.../AbuDawud/DarusSalam/Hadith-<N>`,
     `.../Tirmidhi/Hadith-<N>`. **sunnah.com returns 403 here — do not try it.**
     Numbering differs between editions: if a number shows the wrong hadith, try
     the DarusSalam path before concluding anything.
   - Report the collector's own grading, never upgraded. Quote one collection's
     wording whole; never merge two variants.
   - If no tafsir attaches a prophetic hadith, say so in a sentence and move on. A
     sound narration may be brought as a general principle if it is marked as not
     attached to the verse.
4. **Write the card** (`tools/wip/round<N>/<s>_<a>-notes.js`): reflection 100-130
   English words, 4-5 personal questions, one-line lesson, both languages, 0-2
   `themes` keys from `PONDER_THEMES`. No scholar names, no hadith numbers, no
   asbab in the card — those belong in the article.
5. **Write the article** (`..._<a>-articles.js`): 7-9 sections, 1,400-1,800 English
   words, every paragraph 55-110 English words, Bengali of equal substance written
   from the idea, at most one em dash per Bengali paragraph, Bengali digits for
   refs (ranges like `২৬:৮৭-৮৯` do link), bare verse refs, `tools/BANGLA-STYLE.md`
   binding throughout.
6. **Gate it.** `node tools/merge-tadabbur-notes.js <notes>` dry run; the
   per-article word/section/dash check; `tools/wip/round7/sweep.js` (badRef, ref
   parity, name parity, encoding, headings); `tools/wip/round9/nums.js` for
   English-only numbers. Then headings: 2-6 words each, and **unique against every
   heading already shipped** — `merge-articles.js` refuses a chunk that repeats one.
7. **Merge, rebuild, bump, test, verify.** Notes `--write`, then articles
   `--write --band 1200-2000`, then `node tools/build-article-index.js`, then bump
   `lq-v<N>` and every `?v=<N>` in `sw.js` and `index.html`, then `node tests/run.js`,
   then headless Chrome via `qa/run.js` in Bengali (load the article, check its
   section count and Bengali word count, no console errors).
8. **Commit** with a message that names what the sources gave, every defect fixed
   before merge, and the verified browser numbers. Write the message after the
   browser check, not before — its numbers have had to be amended twice.

## Accuracy rules that have actually caught defects here

- Never state an Arabic word count you have not counted in the data. `107:6` is
  three words, not two; that one shipped as far as the draft.
- Both languages must carry the same numbers, the same attributions and the same
  verse refs. A proposition in one language only is the worst defect this module
  has shipped.
- Transliterate from the fetched Arabic: مأسور is `ma'sur`.
- On a verse about a punished or condemned group, state plainly that it describes
  what the text describes and licenses no application to any living community, and
  leave rulings of war to the authority the commentators name.
- Keep genuine disagreements as disagreements, with both names.
- Drop what cannot be confirmed and say so, rather than softening it.

## Files

Drafts live in `tools/wip/round<N>/` (gitignored). Never in the session scratchpad
— a whole wave was lost that way.
