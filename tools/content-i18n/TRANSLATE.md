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
