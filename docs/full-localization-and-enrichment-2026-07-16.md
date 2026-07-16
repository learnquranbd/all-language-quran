# v94 → v95 — Full UI localization + content enrichment wave

## Full UI localization (the big one)
Every UI string now renders in the user's selected language. Previously 13 languages
fell back to English (ja was 100% English; fa/ms/hi/es/de/ru/zh were 22%; ar/ur/id/tr/fr
were 44%). Translated all missing UI strings via parallel per-language agents (each
read a todo file and wrote a translated file), then merged into translations.js.

- **All 15 languages now at 100%** (1,121 keys each): en, bn, ar, ur, fa, id, ms, tr, hi,
  fr, es, de, ru, ja, zh.
- Validation: **0 duplicate keys, 0 placeholder mismatches** (every {n}/{days}/{count}/…
  preserved). Islamic terms kept in each language's conventional form; proper nouns/code
  tokens/verse refs untouched. (Machine/AI-translated UI strings — recommend a native
  speaker spot-check the religious-adjacent labels.)
- Ayah translations, word-by-word, and tafsir remain authentic (offline data, v93/v94);
  the Arabic Quran text is always Arabic.
- Tooling: scripts/gen todo extraction + scripts/merge_i18n.py (insert-after-block,
  skip-existing, idempotent).

## Content enrichment (4 Islamic-knowledge modules)
- **Learn Quranic Arabic** — now **39 lessons / 7 units** (+Advanced Grammar: passive,
  haal, tamyiz, istithna, emphatic nun, five nouns, sisters of inna/kana, lam of purpose),
  37-term glossary, "review missed questions" spaced practice. All 258 Arabic tokens
  re-verified against quran-words.json (0 mismatches).
- **Seerah** — **16 Major Topics** (+covenants/letters, treaties & Charter of Medina,
  women & family rights, economics & charity, Hijri calendar, du'a life, preservation of
  revelation, final illness), a 12-companion mini-directory, and a "Test Your Knowledge"
  quiz. Aniconic.
- **Prophets & Messengers** — 13 "miracles & signs" notes, story spotlights for 6 major
  prophets, a "Common Threads" section (tawhid, patience, the covenant, belief in all
  prophets), and a "Match the Prophet" quiz. All 33 referenced surahs verified vs SURAH_DATA.
- **Why Islam?** — new **Common Objections & Responses** (6, respectful rebuttals),
  **Comparative Theology (respectful)**, and **Adab of Da'wah / Respectful Dialogue** (16:125,
  29:46, 2:256). Idea-focused, never demeaning; scholar disclaimer retained.

## Resources (+12 verified → 140 links)
Seerah atlases/maps (Seerah Atlas, SirahMaps, LearnSeerah), Ibn Kathir's Stories of the
Prophets, Hijri Timeline, OER Islamic World, Sapience Institute, Dawah Institute, Quranic
Grammar, Al-Aqidah al-Tahawiyyah, Tafsir API (spa5k), Adab Adventures. Dropped 3 already
listed (Corpus Coranicum, QUL, fawazahmed0).

## Verification
All 54 JS pass node --check; 15/15 languages at 100%; 0 dup keys; 0 placeholder mismatches.
Cache v94 → v95. Module enrichments use inline en/bn fallback dicts (their new keys render
without translations.js entries; can be localized in a later pass).
