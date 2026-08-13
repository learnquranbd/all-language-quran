# Long-form article spec (Prophets & Companions)

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
