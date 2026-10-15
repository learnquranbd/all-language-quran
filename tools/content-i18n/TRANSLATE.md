# Module content: translation brief

The app's modules (Hope, Surah names, Prophets, Companions, Seerah, Tajweed, Handwriting, Kids, Islam rulings,
Mutashabihat, Nuzul, Duas, Places…) carry English and Bengali text. Readers in 13 other languages see English for
these strings. You translate one chunk into one language.

Input: `tools/content-i18n/work/<C>/en.json` = { "<ns>|<CONST>|<i>": "<English>" }. The id tells you the module and
the data table (e.g. `tajweed|TAJWEED_QUIZ|12` is a tajweed quiz item, `shared|DASH_L|3` a dashboard label,
`kids|KIDS_STORIES|4` a children's story: simple words, warm). Use it for register and length.
Output: `tools/content-i18n/work/<C>/tr-<lang>.json` = { "<id>": "<translation>" }, every id, same ids.
Write it in parts (`work/<C>/<lang>-parts/pNN.txt`, format `@@ <id>` line then the text, blank line between),
then combine with a script. Your helper files stay in `work/<C>/<lang>-parts/` (others work in parallel). No git.

## Rules
- Follow `tools/tadabbur-i18n/STYLE-<lang>.md` for all Islamic terminology (Allah, the Prophet ﷺ, prophets'
  names and honorifics, Companions, ayah/surah, divine names, register). Same voice as the Tadabbur cards.
- `⟦1⟧`, `⟦2⟧`… stand for Arabic text (a word, a letter, an ayah) that is restored byte-exact after you finish.
  Keep every token exactly once, placed where the Arabic belongs in your sentence. Never type Arabic yourself.
  To see what a token stands for, look the id up in `tools/content-i18n/work/index.json` (`runs`).
- Keep `{n}`-style placeholders, ﷺ, verse references like 2:255 (Latin digits) and all numbers exact.
- Short UI labels and quiz options stay short; questions stay questions; do not add or drop content, no notes.
- Transliterations the English uses on purpose (Arabic letter names, tajweed terms like idgham, ikhfa, qalqalah,
  makharij) stay as the standard transliteration for your language's Muslim readers, glossed only where the English glosses.
- Natural, fluent prose a native Muslim reader would write; meaning first, not English word order.

## Done means
`node tools/content-i18n/check.js <C> <lang>` prints CLEAN. Report: strings translated, any NEW terminology
STYLE-<lang>.md does not cover (one line each), anything unsure, suspected English errors (id + why).

## Inline chunks (`work/I-<lang>/`)
Objects that already carry several languages inline ({ en, bn, fr, id, ur, tr, ar, zh, ja }) but not yours. Ids are
`<file>|<CONST>|<path>`, e.g. `js/vocab-data.js|VOCAB_WORDS|12.meanings` (a Quranic word's gloss),
`js/topics-life-duas.js|TRAVEL_DUAS|3.names` (a du'a's title), `js/names-data.js|NAMES_99|4.meanings` (a Name of
Allah). Input `work/I-<lang>/en.json`, output `work/I-<lang>/tr-<lang>.json`, gate `check.js I-<lang> <lang>`.
- To see the Arabic word or the whole entry, open the file at that const (`work/inline-index.json` has file + path);
  the sibling languages (fr, id, tr, ur…) show how others rendered it.
- Glosses stay glosses: short, the same alternatives separated the same way (`face; countenance`), no articles added
  where the English has none. Titles stay titles. Names of Allah: the established rendering in your language.
- `tools/content-i18n/inline.js apply --write` writes the result into the source files (the orchestrator runs it).

## Article chunks (`work/A<n>/`)
Long-form biographies and history: Companions (`sahaba|<id>|…`), Seerah events (`seerah|<id>|…`), Prophets
(`prophets|<id>|…`). Ids end in `<section>.h` (a section heading) or `<section>.<paragraph>`. Each chunk holds whole
articles: read an article's paragraphs in order so the prose flows, names stay consistent and pronouns resolve.
Output `work/A<n>/tr-<lang>.json`, gate `check.js A<n> <lang>`; the orchestrator merges with `articles.js merge`.
- Prose for an educated general reader, the register of a good encyclopedia or biography in your language; same
  voice as the Tadabbur articles. Keep every verse reference (2:255) and hadith citation (Bukhari 3673) as written.
- These pages are read by Sunni and Shia learners alike: where the English attributes a view or marks something as
  disputed ("it is reported", "according to some"), keep that hedge exactly; never firm it up or soften it.
- Honorifics: follow STYLE-<lang>.md ((RA), ﷺ, (AS) equivalents) exactly as the English places them.
- Arabic (ar) only: when the English quotes a verse, give the Quran's own words with a placeholder `{Q:s:a:from-to}`
  (1-based word range of data/quran-words.json) or `{Q:s:a}` for a whole ayah, expanded into ﴿…﴾ by your combine
  script (see tools/tadabbur-i18n/ar-combine-example.js); check.js rejects any ﴿…﴾ that is not an exact run. Never
  type Quran or hadith Arabic from memory; for a hadith, paraphrase without « ».
