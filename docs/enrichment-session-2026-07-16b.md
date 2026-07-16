# Enrichment wave 2 — 2026-07-16 (v87 → v88)

Second multi-agent enrichment pass (7 agents, disjoint file ownership).

## Module enrichments
- **grammar.js** — POS-identification practice quiz (noun/verb/particle) from loaded ayah morphology; persistent score + accuracy.
- **sarf.js** — persisted practice score/accuracy; favorite/starred roots with "favorites only" filter.
- **learn-vocab.js** — favorite/starred words + favorites filter; live search box (Arabic/translit/meaning); favorites count. (SRS/quiz already existed.)
- **quiz-center.js** — 2 new quiz types (Surah Order = before/after; Surah Match = Arabic name→surah), added to exam pool; persisted best-streak with 🔥 highlight.
- **word-repeat.js** — repeat count (×1–10) & playback speed (0.75–2×), auto-replay with live rep progress, session rep counter, persisted settings.
- **word-arrange.js** — move counter, live timer, hint button, solved-ayah streak, per-ayah best score (moves then time), tap-to-hear word audio. Hard/salt-words mode preserved.
- **tajweed-learn.js** — Reference view: colour key + Noon-Sakinah/Tanween & Meem-Sakinah decision tables + print; persisted drill best score.
- **memorize.js** — progressive hide levels (25/50/75/100%, stable per-word), peek hint budget (3).
- **type-memorize.js** — accuracy-driven spaced-review scheduling with a "due today" panel of range chips.

## New resources (+16 verified live 2025/26)
- Study: Quran Index, IslamiCity Quran Search, Quran Analysis, IslamHouse (100+ langs), Quran Kemenag (ID), Diyanet Kuran (TR)
- Tafsir: Tadabbur-e-Quran (Islahi, nazm-based)
- Arabic: Bayyinah/Nouman Ali Khan YouTube, Uthmani Mushaf Calligraphy
- New category **Tajweed & Colour-coded**: Tilawa.ai, QuranMakkah, Al-Dirassa course
- New category **Duas & Supplications**: My Islam Duas, Hisnul Muslim Online
- New category **Seerah & Prophet's Life**: The Seerah App, Yaqeen Life of the Prophet
- Memorization: Ayah app
- (Dropped Duas.com — Shia-oriented — to keep the hub mainstream/neutral for this audience.)

Resources hub now: **67 links across 11 categories.**

## i18n
49 new module keys + 3 new category titles added to `en` + `bn` (fallback covers other 14 languages).
Duplicate-key scan: 0. All touched JS files pass `node --check`. Cache v87→v88.
