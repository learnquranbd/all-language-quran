# Tadabbur article spec (deep template)

The Tadabbur tab shows, per verse or passage, a short card from
`js/tadabbur-data.js` (`TADABBUR_NOTES`: a reflection, points to ponder, a
lesson) and, beneath it, a long-form article fetched on demand from
`js/tadabbur-articles/<surah>.js`. This spec defines that article. Everything in
`tools/ARTICLE-SPEC.md` about accuracy, references, honorifics, no-HTML and the
binding Bengali rules in `tools/BANGLA-STYLE.md` applies here unchanged; this
file adds what is specific to tadabbur.

## Shape

Keyed by the verse ref exactly as `TADABBUR_NOTES` keys it (`"2:255"`,
`"3:26-27"`). Same section shape as every other article:

```js
  "2:255": { sections: [ { h: { en, bn }, p: [ { en, bn }, … ] }, … ] },
```

- **7–9 sections**, each `h` 2–6 words, each with 2–3 paragraphs.
- **Paragraphs 55–110 English words**; Bengali of equivalent substance, written
  from the idea (never a calque), at most one em dash per paragraph.
- **Total 1,400–1,800 English words** (gate: 1,200–2,000). The old template was
  700–950; articles at that length are "shallow" and are queued for upgrade.

## The sections, in order

Every article carries these, under its own headings (do not use these labels
verbatim as headings; write a heading that fits the verse):

1. **Where it sits.** The verse's place in its surah: what comes just before
   and after, the surah's theme, Makkan/Madinan, and the occasion of revelation
   ONLY if it is established (Sahih or a widely accepted sirah report, named).
   If the occasion is disputed or weak, say the verse's placement instead.
2. **The words.** Two or three key Arabic words or roots, transliterated
   (`al-Qayyum`, `wasi'a`, the root `s-b-r`), with their range of meaning and
   why THIS word was chosen over a near-synonym. Word-order, emphasis, a
   negation-then-affirmation, a shift of pronoun, a rhetorical question: name
   the device and say what it does. Do not invent counts of occurrences; if you
   give one, it must be verifiable in `data/quran-tokens.json`.
3. **What the mufassirun said.** Two to four named commentators (at-Tabari,
   Ibn Kathir, al-Qurtubi, ar-Razi, as-Sa'di, Ibn Ashur, Ibn al-Qayyim) with
   their actual readings, and where they differ, the difference stated as a
   difference. "The commentators say" without a name is allowed once; the rest
   must be attributed.
4. **The hadith that goes with it.** One or two narrations that the classical
   tafsir attaches to the verse, quoted in ONE collection's wording and cited to
   that collection (number only if certain). If there is no sound hadith on the
   verse, say so in a sentence and move on; never fill the slot with a weak one.
5. **Its sisters in the Quran.** Three to five other verses that the reader
   should hear alongside this one, as bare refs in the prose (the autolinker
   makes them tappable), each with one sentence on what it adds. Every ref
   verified in bounds in BOTH languages.
6. **How it is lived.** Concrete application: what a believer does differently
   in a day, a week, a hard season, because of this verse. Specific and
   practical, no sermonising in the abstract.
7. **A du'a from the verse.** Either the verse itself as a supplication (many
   are), a Sunnah du'a the commentators link to it, or a short supplication in
   the verse's own vocabulary, clearly marked as such. Give it in both
   languages; if it is a Sunnah du'a, cite it.
8. **Questions to carry.** Three to five reflection questions, written as
   questions, personal, not quiz questions about the content.
9. *(optional)* **A word to teachers/parents** — how to teach this verse to a
   child or a study circle. Include when the verse invites it.

## Content rules specific to tadabbur

- **Tafsir before tadabbur.** A reflection must stand on an established meaning.
  Do not build a reflection on a reading no commentator holds.
- **No invented linguistics.** Root meanings and rhetorical claims must be ones
  a classical lexicon (Lisan al-Arab, al-Mufradat) or commentator supports.
- **Fitnah neutrality and adab** exactly as in the companion articles: no
  school editorialised against; verses about the Prophet ﷺ handled with adab.
- **The card must not be contradicted.** Read the verse's `TADABBUR_NOTES`
  entry first; the article deepens it, never disagrees with it. If the card is
  wrong, report it for a data fix in the same commit.
- **Cross-article consistency.** If a sister verse has its own article, do not
  contradict it; dump it with the helpers in `tests/lib.js`
  (`loadTadabburArticles()`).

## Validation

```
node tools/merge-articles.js <chunk> js/tadabbur-articles TADABBUR_ARTICLES js/tadabbur-data.js TADABBUR_NOTES --band 1200-2000
```
Dry run must print CLEAN; then `--write`, then `node tools/build-article-index.js`
and `node tests/run.js`. The chunk is `"s:a": { sections: [...] },` entries only.

## Adding a NEW verse (breadth waves)

A verse gets an article only if it first has a card in `TADABBUR_NOTES`
(`reflectionEn/Bn` 100–130 words, `pointsEn/Bn` 4–5 questions, `lessonEn/Bn`
one line). Cards for a wave are drafted in the same chunk pass as the articles,
merged with `tools/append-entries.js`-style routing into `js/tadabbur-data.js`,
and the article merged afterwards so the merge gate can see the id.
