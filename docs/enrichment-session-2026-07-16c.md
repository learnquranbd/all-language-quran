# Enrichment wave 3 — 2026-07-16 (v88 → v89)

Third multi-agent enrichment pass (5 agents, disjoint file ownership).

## Module enrichments
- **learn-names.js** — Name of the Day; favorite/bookmark names + favorites filter; new Flashcards flip mode (Arabic→reveal, shuffle, audio, mark-learned).
- **learn-kids.js** — Letter of the Day banner; gentle daily streak card (flames, best-ever) on "My Stars".
- **mutashabihat.js** — Browse/Practice/Review tabs; "distinguish the pair" quiz (which verse is this?) with streak+best; mark-tricky (persisted) with review view; search, sort (by ayah / most-similar), random pair, copy pair.
- **wordbyword.js** — transliteration on/off (persisted), copy word info, "quiz me on this word" mini-check.
- **record-memorize.js** — per-recording playback speed, download recording (local only), session-persisted ✓/✗ marks per range, correct/total summary bar.

## New resources (+15 verified live 2025/26)
- Study: Quran Mind Maps, Ulum al-Quran (SunnahOnline), Islam By Touch (Braille), Quran Majeed
- Tafsir: Tafhim al-Quran (Maududi), Tafsir Ibn Kathir, Maarif-ul-Quran, NAK Collection audio
- Audio: Quran Central (450+ reciters)
- Arabic: Understand Al-Quran Academy, Quranic (getquranic), Quranle (word game)
- Memorization: The Hifz Project
- Kids: Islam 4 Kids
- New category **Hadith**: Sunnah.com
- (Rejected: Quran Era (paid), englishtafsir.com / m.qtafsir.com (expired TLS) — substituted reliable mirrors.)

Resources hub now: **82 links across 12 categories.**

## i18n
34 new module keys + 1 new category title added to `en` + `bn` (fallback covers other 14 languages).
Duplicate-key scan: 0. All touched JS files pass `node --check`. Cache v88→v89.

## Cumulative (waves 1–3, this session)
- 24 modules enriched, resources 33 → 82, categories 6 → 12.
- Still pending: push to GitHub remotes (origin/pro) blocked by 403 auth (credential `miningshahin` lacks write access) and the Firebase production deploy — both awaiting the user.
