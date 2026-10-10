# Project summary (read this first)

Snapshot: 2026-10-10, live version **v912** (`lq-v912`). Kept short so a new
session can start from here instead of re-reading the repo. Live state of any
running wave is in `CLAUDE-LOG.md` (top section); this file is the stable map.

## What it is

A multi-language Quran study PWA, the "pro" rewrite of the Bangla-only
learn-quran-bd.web.app. Vanilla JS, no framework, **no build step**: plain
`<script>` tags in `index.html`, Tailwind from the Play CDN. Bengali is the
primary audience; English is the source language for all content.

- **Languages (15):** en bn ar ur fa id ms tr hi fr es de ru ja zh. ar/ur/fa are RTL.
- **Hosting:** Firebase project `learn-quran-pro` → https://learn-quran-pro.web.app
  (`firebase.json` serves the repo root; docs/, tools/, tests/, qa/, src/ are not deployed).
- **Remotes:** `origin` = learnquranbd/all-language-quran, `pro` = learnquranbd/learn-quran-pro.
  Push both. If a push 403s as `miningshahin`: `gh auth switch --user learnquranbd`.
- **Old app source** (data mined from it): `/var/www/html/learnquranbd/understand-quran`.

## Shipping a change (every release)

1. Edit. Run `npm test` (17 checks in `tests/`, ~2 s, no network; see `tests/README.md`).
2. Bump the version everywhere: `sed -i 's/?v=OLD/?v=NEW/g' index.html sw.js && sed -i 's/lq-vOLD/lq-vNEW/' sw.js`.
   `check-release.js` fails on any drift. Nothing reaches users without the bump (SW cache).
3. One commit per change, subject `vNNN: what changed`.
4. `git push origin main && git push pro main`, then `firebase deploy --only hosting`.
5. Verify live: `curl -s https://learn-quran-pro.web.app/sw.js | grep lq-v` shows the new number.

Firebase keeps only 10 versions (`maxVersions=10`). It hit a 429 quota at 141 versions
before that rule was set.

**Browser checks:** use the headless harness `node qa/run.js '<json steps>'`
(see `tools/wip/round11/ship.sh` for an example). Do not drive Claude-in-Chrome:
it is not attached to this PC and cannot reach localhost. Never test via `file://`
(fetch breaks); Apache serves the repo at `http://localhost/learnquranbd/all-language-quran/`.

## Architecture

| Piece | Where |
|---|---|
| App shell, all panels `#tab-<id>`, script tags | `index.html` |
| Tab registry + History-API back button | `js/tabs.js` (`TAB_META`) |
| Sidebar tree (groups and children) | `js/app-nav.js` (`APP_NAV_PRIMARY`) |
| Lazy bundles (tab → scripts, data first) | `js/module-loader.js` (`LQ.Modules.load`, `LQ.ready`) |
| UI strings, 15 langs, `t(key, lang)`, en fallback | `js/translations.js` + `js/i18n/` |
| Module content in the 13 non-en/bn langs | `js/content-i18n.js` → `data/content-i18n/<lang>.json` (`CI18N.tr(lang, enText)`, exact-string lookup) |
| Ayah text, WBW, translation (offline-first, API fallback) | `js/quran-data.js` + `data/verse-base.json`, `data/translations/`, `data/wbw/` |
| Tafsir (offline-first) | `js/tafseer.js` + `data/tafsir/<id>.json` (75 MB) |
| Long-form article view (Tadabbur, Sahaba, Seerah, Prophets) | `js/article-view.js`, `js/article-index.js` (generated) |
| Service worker | `sw.js` (`CACHE='lq-vN'`, precache list; only base+en+bn data precached) |

**Adding a tab** touches: `index.html` (panel + script), `sw.js` precache,
`js/tabs.js`, `js/app-nav.js`, and a lazy bundle in `module-loader.js` if the
data is heavy. Content modules carry `*En`/`*Bn` (or `{en,bn}`) fields; other
languages come from content-i18n.

**Trap:** data files read across modules must be declared with `var` or `window.X`,
not top-level `const`. Articles never rendered until v255 because of this.

## Modules (sidebar order) and how deep each is

| Group / module | Files | Content |
|---|---|---|
| Reading, WBW, grammar, tafsir, tajweed, audio | `app.js`, `wordbyword.js`, `grammar.js`, `tafseer.js`, `tajweed*.js`, `audio.js` | Full Quran. Corpus morphology `data/morphology/`, i'rab `data/irab/` |
| Memorize (speech / typing / arrange / record) | `memorize.js`, `type-memorize.js`, `word-arrange.js`, `record-memorize.js` | Tool |
| **Quran group:** Mushaf, Subjects, Topics | `mushaf.js`, `legacy-ayah.js`, `topics-*.js` | 1,854 subjects from the old app, ~19,700 refs |
| Mutashabihat | `mutashabihat*.js`, `data/mutashabihat.json` | 2,800 ayat linked; 78 explained groups; "Find similar" search (v908) |
| **Tadabbur** | `tadabbur*.js`, `js/tadabbur-articles/<surah>.js` | **1,061 cards + deep bn/en articles. Target queue finished at v907** |
| Hope | `hope*.js` | 33 chapters, 12 names |
| Word Repeat | `word-repeat.js` | Juz + whole-Quran word lists (v909) |
| Sarf, Nuzul/Asbab | `sarf.js`, `nuzul-timeline.js`, `data/nuzul/` | 358 occasions of revelation |
| Surah Names | `surah-names*.js` | "Why this name?" for every surah (moved here v912) |
| Quiz, Audio, Khatmah, Learn (Vocab, Kids, Handwriting, Tajweed lessons) | `quiz-center.js`, `khatmah.js`, `learn*.js` | Tools / courses |
| **Allah group** (99 Names + 7 pages) and **Quranic Themes group** (13 pages) | `theme-pages.js`, `data/themes/*.json` | 20 rich pages (v910-v911) |
| Quranic Arabic | `learn-quranic-arabic*.js`, `data/qarabic/` | Word-parsing lessons for Juz 30 only (310 of its 564 ayat) |
| Amal, Sawm, Hajj, Zakat, Namaz | `amal-daily.js`, `learn-sawm/hajj/zakat.js`, `learn-prayer*.js` | Namaz is well sourced; the others are thin and barely sourced |
| **Prophets group:** Prophets, Seerah, Sahaba | `prophets*.js`, `seerah-*.js`, `sahaba*.js` | 25 prophets, 86 Seerah events, 127 companions, all with articles |
| **Islam group:** Why Islam, Fard/Wajib/Nafl/Makruh/Mustahabb | `why-islam*.js`, `islam-*.js` | 61 items; 150 rulings at ~2 sentences each |
| Resources, Dashboard, Bookmarks, Account | `resources.js`, `dashboard.js`, `bookmarks.js`, `account.js` | Firebase sign-in, dormant until `firebase-config.js` is set |

## Content pipelines (reuse these, don't reinvent)

- **Tadabbur:** skill `.claude/skills/tadabbur-enrich/SKILL.md`. Tools in
  `tools/wip/round11/`: `budget.js` (usage → NORMAL/LOW/STOP mode),
  `prep.js`, `gate.js`, `hadith.js` (hadith source check), `ship.sh`
  (merge → index → bump → test → headless bn check), `commit.sh`. Specs in
  `tools/TADABBUR-SPEC.md`, `ARTICLE-SPEC.md`, `BANGLA-STYLE.md`. Brief + open
  traps: `tools/wip/round11/BRIEF.md`. History: `tools/wip/round11/HISTORY.md`.
- **Theme pages:** `tools/themes/` (prep → drafter BRIEF.md → auditor AUDIT.md →
  fix → confirm audit → merge.js). About 0.5% of the weekly budget per page.
- **Seerah / Sahaba / Prophets articles:** `tools/SEERAH-SPEC.md`,
  `SEERAH-DRAFTER-BRIEF.md`, `tools/merge-articles.js`, `build-*-index.js`.
- **Translation into 13 langs:** extract the missing English → one agent per 1-3
  languages → gate (key integrity, language detection, markup/Arabic byte check)
  → merge into `data/content-i18n/` without clobbering. Generators in `scripts/`.

Rules every pipeline follows: drafts live in `tools/wip/` (never `/tmp`; a wipe once
destroyed 6 agent-hours). Every draft gets an adversarial audit, which has found real
defects every round. Commonest defect: the Bengali says something its English twin
doesn't. No hadith grading unless the collector's own grading is quoted. 5 drafters
in parallel on claude-max, 2 on claude-pro. Run `budget.js` first.

## Where things stand / what's next

- Tadabbur: complete. User decision 2026-10-06: leave as is.
- Next module: **not chosen yet; the user picks.** Ranked candidates are in
  `docs/module-enrichment-audit-2026-10-06.md`:
  1. Islam rulings + Sawm/Zakat/Hajj/Amal (check hadith numbers first with `hadith.js`, then add deep articles)
  2. Nuzul: add al-Wahidi's occasions; mark weak reports as "it was said"
  3. Quranic Arabic: finish Juz 30, then Juz 29, 28
  4. Mutashabihat: notes on how the linked ayat differ
- Known debt: about 80% of module content still shows English in the 13 non-bn
  languages (content-i18n lags every enrichment wave).
- Performance: the Tailwind Play CDN is the largest cost (a 234 s JIT on the
  Khatmah path). Swapping to a rebuilt `css/tailwind.min.css` is analysed and
  ready; it is blocked only on the user accepting emerald as the dark-mode accent.

## Open items (user decides; don't act unasked)

- `data/translations/bn.json`: 6:110 drops a clause; 4:171 renders *ruhun minhu* as নির্দেশ.
- Asbab 109:1 (`asbab-meccan-famous.json`) states a "qila" report as fact.
- At-Tabari neighbouring-slot misfiling in some earlier Tadabbur articles (not re-audited).
- The Hajj quick link (Bengali-only guide) shows in all 15 languages.
- BANGLA-STYLE.md says `(আ)`; shipped text uses `(আঃ)`.

## Housekeeping notes

- `tools/wip/round11/` is deliberately tracked (`.gitignore` excludes the rest of
  `tools/wip/`), so its draft files show as untracked until committed.
- Older docs (`docs/opencode.md`, `docs/*2026-07-*.md`) describe July state; trust
  this file and `CLAUDE-LOG.md` over them.
- `README.md` is out of date (lists 7 languages and the early modules only).
