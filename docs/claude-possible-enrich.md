# Possible enrichment: what is left

Written 2026-10-16, after v966. Ranked by value within each part.

## Letter practice, Tajweed and Kids

Done so far (v960–v966): Letter practice page (top 50 words, top 10 ayahs by count and by density),
word counts that open every ayah, makhraj and sifat per letter, 61 Quranic minimal pairs with a
listening quiz, the letter with each vowel, minor/major qalqalah, heavy/light ra, Kids "Sound Twins",
and links between Makharij, Letter practice, Kids letters, the Learn hub, the sidebar and the welcome modal.

1. **Progress tracking.** DONE in v967 (`LetterProgress`). Nothing remembers what a student has practised yet. Each letter could be
   marked as practised, with quiz scores saved per letter and a "letters mastered: 12/29" count. The
   Letter practice card on the Learn hub shows no progress today.
2. **What happens before this letter.** DONE in v967 (noon, tanween and meem sakinah). On each letter's page, show what a preceding noon sakinah or
   tanween does: izhar, idgham, ikhfa or iqlab. For example, on ف's page: "ikhfa: مِن فَضْلِهِۦ" with
   real examples and audio. This ties the letters directly to the Tajweed rules.
3. **Lam in the name Allah.** DONE in v968. Heavy after fatha or damma (وَٱللَّهُ), light after kasra (بِٱللَّهِ).
   It is the last letter whose heaviness depends on a rule; ra is already done.
4. **Madd drills.** DONE in v968 (on the ا و ي pages). Words with a natural 2-count madd vs the longer madds (muttasil, munfasil,
   lazim), detected from the madd sign in the text.
5. **Record and compare.** DONE in v969. The student records a word and plays it back next to the reciter. The
   Memorize module already has recording code to reuse.
6. **Smaller items:**
   - a printable sheet for each letter (DONE v969)
   - a link from Kids' "Letter of the day" to Sound Twins (DONE v969)
   - a "new version available, tap to refresh" banner (DONE v969, js/pwa.js; first shows on the release after v969), so people stop seeing old cached copies

## The rest of the app (from docs/PROJECT-SUMMARY.md)

1. **Islam rulings, Sawm, Zakat, Hajj and Amal** are thin and barely sourced. They need hadith
   numbers verified first (`tools/wip/round11/hadith.js`), then full articles. This is the
   top-ranked open candidate.
2. **Translation gaps:**
   - DONE v980: Sahaba, Seerah and Prophets articles in all 13 languages (fact-checked English along the way).
   - Tadabbur articles exist only in English and Bengali.
3. **Nuzul:** add al-Wahidi's occasions of revelation, and mark weak reports as "it was said".
4. **Quranic Arabic:** Juz 27 is next, using the same `tools/qarabic/` pipeline as Juz 28–30.
5. **Known defects that are cheap to fix:**
   - DONE v970: 71 of 73 morphology tag errors fixed (overrides + test)
   - DONE v970: ثَمَّ gloss fixed (76:20, 81:21 in en/ja/zh, tr, id)
   - two Bengali translation slips in `data/translations/bn.json` (6:110 drops a clause; 4:171). Checked 2026-10-16: our copy matches the published Taisirul Quran (quran.com id 161) exactly, so the slips are in the published text (6:110 omits كَمَا لَمْ يُؤْمِنُوا بِهِ أَوَّلَ مَرَّةٍ; 4:171 renders وَرُوحٌ مِّنْهُ as "নির্দেশ"). Fixing = a deliberate departure like 4:163 (v276); owner to decide.
   - DONE v970: Asbab 109:1 now attributed with "it was said" (13 langs)
   - DONE v970: Hajj guide link shows only in Bengali
6. **Bengali naturalness review of Tadabbur:** shard 2 is at 6 of 12 packets (see `CLAUDE-LOG.md`).
7. **Performance:** swapping out the Tailwind Play CDN is ready to go. It only needs a choice of
   dark-mode accent colour.

## Small follow-ups from the v965–v966 translations

- French "le ra, lourd/léger" vs badges "lourde/légère": checked 2026-10-16, both correct (ra is masculine, the badges agree with "la lettre"). No change.
- Turkish "Vasıl hemzesi" in the ra drill: changed to "Hemze-i vasıl" (2026-10-16).
- Native speakers should check the short one-word sifat labels (e.g. Ismat, Takrir) in each language.

## Recommendation

Items 1 to 4 shipped (v967, v968). Items 5 and 6 shipped in v969, so the letter area list is done. Next: the known cheap defects (part 2, item 5), then Islam rulings. If moving on instead, fixing the known defects is the cheapest high-value job.
