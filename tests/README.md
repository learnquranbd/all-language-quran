# Checks

```
npm test              # run everything
node tests/run.js i18n   # run one check by filename fragment
```

Exits non-zero on failure, so it can gate a deploy. Runs in ~1.5s with no
network and no browser.

## What these are

Content and integration checks, not unit tests. The app is plain `<script>`
files with no build step or module system, so the useful questions are "does
every reference resolve", "does every module still render", "is anything
shipping to nobody" — not "does this function return 4". Each check loads real
source files into a VM context and inspects the actual data.

| check | catches |
|---|---|
| `check-release.js` | version drift between `index.html`, `sw.js` and the cache name; scripts or precached files that don't exist; a lazy bundle that lost its precache entry (breaks offline) or crept back into eager loading |
| `check-refs.js` | Quran references pointing at verses that don't exist (~3,300 refs, ranges included) |
| `check-links.js` | cross-dataset ids pointing at nothing — lesson→unit, lesson→event, prophet keyings, tajweed rule→lesson, era refs |
| `check-dead-data.js` | authored datasets no module reads: content shipping in every bundle to nobody |
| `check-quizzes.js` | answer-position bias, duplicate options, and options that are synonyms of the correct answer |
| `check-i18n.js` | incomplete language packs, merge-order dependence, missing English fallback, and loss of the `t()` / `isRTL()` / `applyTranslations()` API |
| `check-modules.js` | modules that throw while rendering in any of the 15 languages; modules whose content resolver ignores the offline dictionary |

## Why each exists

Every one was written because it caught something real:

- **`check-dead-data`** — six datasets, 139 authored entries, rendered nowhere:
  `TAJWEED_QUIZ` (30 questions with full Bengali), `QA_FREQ_WORDS` (the 51 most
  frequent Quranic words), four handwriting sets. It later found a seventh,
  `SALAH_MISTAKES`, which had been hidden because the file's own doc comment
  named the constant and that read as a usage. Comments are now stripped first.
- **`check-links`** — `SEERAH_LESSONS` tagged `banu_mustaliq` against an event
  id of `bani_mustaliq`. Two lessons silently lost their context pill.
- **`check-quizzes`** — `SALAH_QUIZ` had 52 of 75 correct answers at index 1 and
  `WUDU_QUIZ` 22 of 30, so always picking the second option scored ~70%. It also
  found a `QA_IRAB` question offering both *ṣifa* and *naʿt* — the Basran and
  Kufan names for one category — so a correct answer scored wrong.
- **`check-i18n`** — splitting `translations.js` per language dropped `isRTL()`
  and `applyTranslations()`. Key-by-key data equality passed completely while
  the static header, sidebar and tab strip stayed English and RTL was never
  applied. Data equality cannot see a missing function, so this asserts the API
  surface and actually calls `applyTranslations`.
- **`check-modules`** — four modules never called `CI18N` at all, so every
  non-Bangla reader was hard-wired to English no matter what the dictionary
  held.

## Working on them

**A flag is not a verdict.** Roughly half the flags raised while building these
were the check being wrong, not the content — Arabic clitics, Arabic
punctuation, Urdu letterforms for Arabic loanwords, CJK compactness, canonical
list sizes. Inspect before "fixing" the data.

**Re-test after every relaxation.** Loosening a check to make a batch pass is
worthless unless it still fails on real breakage. Fault injection is cheap:
change a ref to `2:9999`, break a tag, bump the cache name, and confirm the
check goes red before you trust it green.

**Don't pad canonically-fixed lists.** There really are 4 noon-sakinah rules,
3 meem-sakinah rules, 5 makharij zones, 6 kalimas, 7 verses of al-Fatiha.
"Small" is not "incomplete".
