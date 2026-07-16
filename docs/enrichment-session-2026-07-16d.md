# Enrichment wave 4 — 2026-07-16 (v89 → v90)

Fourth multi-agent pass (3 enrichment agents + 1 research), focused on the
cross-cutting experience: hub, shared ayah modal, and a progress dashboard.

## Module enrichments
- **learn.js** (hub) — pin/favorite modules to top (own key `lq_learn_pins`), live module search/filter, "Surprise me" random/suggested-next. Reads existing per-module progress keys read-only.
- **ayah-modal.js** (shared) — Share, bookmark toggle (writes the SAME `bookmarks` store as bookmarks module), audio playback speed, repeat toggle, Arabic font-size control. Public `open()` API confirmed unchanged.
- **account.js** — new **My Progress** dashboard (📊): ~21 stat tiles aggregated read-only from other modules' localStorage keys (each hidden if absent), earned-only achievements/badges, and local-only export/import of progress JSON (inline confirm, no dialogs, allowlisted keys).

## New resources (+9 verified live 2025/26 — language gaps)
- Study: QuranO (15-lang word-by-word), Visual Quran (infographics), New Muslims eLearning, New Muslim Academy, Chinese Quran (Islamic Union HK)
- Tafsir: Quran Malayalam, Tamil Il Quran, Surah.my (Malay)
- Audio: IslamicFinder Quran (40+ langs)
- (Rejected padding: French/Spanish/Urdu/Russian portals that just clone already-listed sites; Dawate Islami excluded as sectarian.)

Resources hub now: **91 links across 12 categories.**

## i18n
53 new keys added to `en` + `bn` (`import_apply` reused, not duplicated). Fallback covers other 14 languages.
Duplicate-key scan: 0. All touched JS files pass `node --check`. Cache v89→v90.

## Cumulative (waves 1–4, this session)
- 27 modules enriched; a shared ayah modal and a whole progress dashboard added.
- Resources 33 → 91; categories 6 → 12.
- Still pending on the user: GitHub push (403 — credential `miningshahin` lacks write access to origin/pro) and the Firebase production deploy.
