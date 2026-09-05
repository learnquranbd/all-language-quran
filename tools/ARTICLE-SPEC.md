# Long-form article spec (Prophets & Companions)

> Tadabbur articles use their own, deeper template: **`tools/TADABBUR-SPEC.md`**.
> Everything below about Bengali, references, honorifics and accuracy applies there too.

The Prophets and Companions modules each show a short summary (58 and 107 words
on average). This spec defines the **long-form article** that a detail page shows
beneath that summary.

## Shape

One JS object literal per subject, keyed by the subject's existing `id`:

```js
  adam: {
    sections: [
      {
        h: { en: 'Created and Honoured', bn: 'সৃষ্টি ও সম্মান' },
        p: [
          { en: 'First paragraph…', bn: 'প্রথম অনুচ্ছেদ…' },
          { en: 'Second paragraph…', bn: 'দ্বিতীয় অনুচ্ছেদ…' },
        ],
      },
      // …5–7 sections
    ],
  },
```

- `h` — section heading, 2–6 words.
- `p` — 2–4 paragraphs of 55–110 words each.
- **Total 700–950 English words per subject**, Bengali of equivalent substance
  (not a word-for-word calque — natural Bengali).

> **The Bengali has its own rules and they are binding: `tools/BANGLA-STYLE.md`.**
> Written after a whole module shipped with Bengali a reader called "quite
> literal". Read it before you write a single `bn` string. The short version:
> at most one em dash per paragraph, drop the `একটি`/`এটি` article calque, name
> the agent instead of `বর্ণনা করা হয়েছে`, use the living Islamic register
> (গুনাহ, মাফ, আমল, হক) over academic Sanskritic vocabulary, and break the long
> periodic sentence into two. `tests/check-bangla-style.js` enforces part of it.

## Rules

1. **Accuracy above all.** Only what is well attested: the Quran, Sahih
   al-Bukhari and Muslim, Ibn Hisham, Ibn Sa'd, al-Tabari, Ibn Hajar's
   *al-Isabah*, Ar-Raheeq Al-Makhtum. Where sources differ, write the account
   without the disputed number or date rather than picking one silently. Where a
   popular story is weak or israiliyyat, **leave it out** — do not retell it with
   a hedge.
2. **Verse references inline, as bare `s:a` or `s:a-b` in the prose** — e.g.
   "the command came in 20:14". The app auto-links every valid reference inside
   these panes, so an inline reference becomes a tappable button with no markup.
   Every reference must be verified against `js/surah-data.js` `ayahCount`
   programmatically before you finish. A wrong reference is worse than none.
3. **No HTML** in any string. No markdown either — plain prose only.
4. **Honorifics** follow the existing data files: ﷺ after the Prophet, (AS) for
   prophets, (RA) for companions; in Bengali ﷺ, (আঃ), (রাঃ).
5. **Straight ASCII apostrophes are fine**; the files already mix `'` and `’`.
   Do not introduce smart quotes inside single-quoted JS strings without
   escaping — prefer double-quoted JS strings when the text contains `'`.
6. **No invented dialogue, numbers, dates, or "it is said" filler.** Every
   sentence should be something a teacher could source.
7. Sections should tell a story with structure — origin, mission, trial,
   turning point, legacy — not repeat the summary already on the page.

## Output

A file containing **only** the `id: { sections: [...] },` entries — no wrapper,
no `const`, no markdown fences — so it can be spliced straight into the object
literal.

## Verify before finishing

Wrap your file in `const X = { … }` in a temp file and:

- `node --check` it;
- assert every id matches an existing subject id, no duplicates;
- assert every `p` string is non-empty in **both** `en` and `bn`;
- assert the English word count per subject is 700–950;
- extract every `\d+:\d+(-\d+)?` from the English **and** Bengali prose and
  assert it is in bounds against `SURAH_DATA` — Bengali too, because a copied
  reference can drift.

Report the assertion results in your final line.

## Defects the audits keep finding

Each entry below is a real error that shipped, was caught by an adversarial
review, and had to be corrected. They are listed because they recur: the same
class reappears from a different author in a later wave unless it is named in
the brief. Read this as a checklist against your own draft before you return.

### 1. Invented Arabic word counts

The single most repeated error. Two different authors in one wave wrote "the
verse closes on four words" for a two-word clause and "their answer is seven
words" for a four-word one. Both times the English committed to a number and
the Bengali said only "a few words" — a count error and a bilingual drift at
once.

**Rule:** never state an Arabic word count you have not counted in
`data/quran-json/<surah>.json` or `data/wbw/en.json` for that exact ayah. If
you have not counted, write "a few words" in *both* languages. Never let one
language carry a number the other omits.

### 2. Adjacency claims

"Immediately after", "just before", "the next verse" — count the intervening
verses first. Caught live: 33:41 is five verses after 33:35, not immediately;
18:46 has 18:45 between it and the two-gardens parable; Ibrahim's reply is
15:56, two verses after 15:54, not the next one.

### 3. Item counts in a list or a du'a

Count the imperatives. A perfect-tense statement is not a request: 46:15 was
described as "four requests" when three are imperatives and the fourth,
"I have repented to You", is a declaration — and the article's own later
section said so. Likewise 2:2-5 is four verses describing the believers, not
five: 2:1 is the disjointed letters and describes nobody.

### 4. Passage boundaries and whose speech it is

Read the verse *after* the one you are bounding. Luqman's counsel does not end
at 31:18 — 31:19 is still him speaking. The servants-of-ar-Rahman passage ends
at 25:76, because 25:77 turns to address the deniers. In both cases a sibling
article in this same file said the opposite.

### 5. Paraphrase that contradicts the linked verse

Every bare reference becomes a tappable link, so the reader lands on the app's
own translation. Your characterisation must match what they will read. Caught
live: waves attributed to 29:65 (they are in 10:22 and 31:32); the mountains
dropped from 33:72's three offerees; a pit placed in 12:100, which names the
prison and the estrangement; `kulla hin` narrowed to "every season" when the
app renders it "all the time". Check `data/translations/en.json` **and**
`bn.json` for every verse you characterise — the two sometimes differ, and a
claim true of one can be false for the other.

### 6. Reported speech

Shift the pronouns correctly. 28:55 — "For us are our deeds, and for you are
your deeds" — became "their deeds are theirs and ours are ours", which makes
the speakers claim the reader's deeds and says the same thing twice.

### 7. Transliteration that collapses its own point

Bengali আলীম renders *'Alim* (the intensive); আলিম renders *'Alim* (the
participle). A sentence contrasting the two forms is destroyed if both are
spelled the same. The same trap caught `al-qanitin`: 15:55's despairing ones
and 33:35's devoutly obedient are different roots, but three articles used one
transliteration in both languages for both. If your point rests on a
distinction, make sure the Bengali preserves it — or drop the point.

### 8. Hadith wording hybrids

Do not merge two variants into one quotation. Sahih Muslim 2564 has one wording
ending "your hearts" (opening "bodies … forms") and another ending "your hearts
and your deeds" (opening "your forms and your wealth"). Muslim 125's answer to
each petition of 2:286 is "Yes"; "I have done so" is Muslim 126, from a
different Companion. Abu Dawud's "over either one of them" was grafted onto
Muslim's cloak-and-garment hadith. Pick one wording, quote it whole, name its
collection and narrator. Never write "agreed upon" unless that wording really
is in both Sahihs. If the collector graded it — at-Tirmidhi's *gharib* or
*hasan gharib* — report the grading he gave, not a shorter version of it.

### 9. Attribution to the wrong author

"Allah commanded increase in nothing but knowledge" is Ibn Hajar in Fath
al-Bari, not Ibn Kathir. "The disease of desire" at 2:10 is Ibn Kathir's gloss
at 33:32; at 2:10 he gives doubt, disease-in-religion, and evil and deviation.
Verify who actually said it.

### 10. Reversing a narration

The 3:186 article had the Prophet ﷺ counselling Sa'd ibn Ubadah (RA) to pardon.
In Bukhari 4566 it is Sa'd who asks *him* to pardon Abdullah ibn Ubayy. When a
report has two parties, check which one speaks.

### 11. Cross-article contradiction

This has been the most reliable signal in every audit. Before you write about a
verse, read the sibling articles that touch it — `js/article-index.js` lists
what exists. If your claim contradicts one of them, one of you is wrong and it
may be you.

### 12. Script and encoding

Write real UTF-8 punctuation. A double-encoded em dash (`C3 A2 C2 80 C2 94`)
shipped in four English paragraphs and rendered as a stray character plus two
invisible controls. A dependent Bengali vowel sign cannot follow an independent
vowel — `কোথাওেও` renders as a broken cluster. Never put Bengali script inside
an `en:` field; an English reader cannot read it. `npm test` now checks all
three, plus the 55–110 words-per-paragraph bound.
