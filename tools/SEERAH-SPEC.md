# Seerah article spec

The Seerah tab renders a timeline of 86 events from `SEERAH_EVENTS`
(`js/seerah-data.js`). Each card carries a title, place, year, a ~60-word
description and a one-line lesson. When a card is expanded the app looks for a
long-form article in `js/seerah-articles.js` (`SEERAH_ARTICLES`) and, if one
exists, shows a "Full article" panel beneath the card.

This file defines that article. Everything in `tools/ARTICLE-SPEC.md` about
accuracy, references, honorifics and no-HTML applies unchanged, and every
Bengali string is bound by `tools/BANGLA-STYLE.md`. What follows is what is
specific to seerah.

## Shape

Keyed by the event's `id` exactly as `SEERAH_EVENTS` spells it (`"hira"`,
`"badr"`, `"aqabah_second"`):

```js
  "badr": { sections: [ { h: { en, bn }, p: [ { en, bn }, … ] }, … ] },
```

- **6–8 sections**, each `h` 2–6 words, each with 2–3 paragraphs.
- **Paragraphs 55–110 English words**; Bengali of equivalent substance, written
  from the idea and never as a calque, at most one em dash per paragraph.
- **Total 800–1,000 English words** (gate: 700–1,100).

## The sections, in order

Every article carries these. Write a heading that fits the event; never reuse
the labels below as headings, and never let two events in a batch share one.

1. **Setting the scene.** Where the event sits in the Prophet's ﷺ life: what
   had just happened, who the people involved were, the year in both CE and AH
   where the sources give one, the place as it actually was. The card's own
   description is the floor, not the ceiling: assume the reader has read it.
2. **What happened.** The narrative itself, in order, with the details the
   classical sirah preserves — names, numbers, the words people actually said.
   Where the sources differ on a number or a sequence, say so in a clause
   ("Ibn Ishaq counts …, while al-Waqidi gives …") rather than picking silently.
3. **The Quran on it.** The verses revealed about, or during, this event, as
   bare refs in the prose (the autolinker makes them tappable) with a sentence
   each on what the verse adds. Use the app's own translations
   (`data/translations/en.json`, `data/translations/bn.json`, keyed `"s:a"`) so
   a reader tapping a ref sees what you described. If no verse is tied to the
   event, say that plainly and give the closest thematic verse instead, marked
   as thematic.
4. **The hadith.** One or two narrations that the sirah and the hadith
   collections attach to the event, quoted in ONE collection's wording and cited
   to that collection (number only if certain). A grading is stated only when
   the collector's own grading is being quoted or the classical source carries
   it — never assert "graded weak/sound by X" from memory. If nothing sound is
   attached, say so in a sentence.
5. **The people in it.** Two to four Companions (or opponents) whose part in the
   event the reader should know, and what the event shows about each. Where an
   article already exists for that Companion in `SAHABA_ARTICLES`, do not
   contradict it.
6. **What it changed.** The consequence: for the Muslim community then, for the
   law or practice that came from it, for the shape of what followed. This is
   the section that keeps the timeline a story rather than a list.
7. **How it is carried.** Concrete application for a reader today — what a
   believer does differently because of this event. Specific, no abstract
   sermonising.
8. *(optional)* **Questions to carry** — three to five personal reflection
   questions, written as questions.

## Content rules specific to seerah

- **Sirah is history; treat it as history.** Attribute contested material. Ibn
  Ishaq (via Ibn Hisham), al-Waqidi, at-Tabari, Ibn Sa'd, Ibn Kathir's
  *al-Bidayah* and the *Sahih* collections are the sources to name. Later
  popular retellings are not; if a beloved story has no early chain, either
  leave it out or mark it as a later account.
- **Numbers are claims.** Army sizes, casualty counts, distances and dates are
  attributed or hedged, never rounded into confidence.
- **Adab.** The Prophet ﷺ takes the honorific every time; Companions take (RA),
  prophets (AS). Opponents are described by what they did, not with abuse.
- **Fitnah neutrality.** Nothing that reads as a partisan case against a school,
  a sect, or a modern community. Events involving the Jewish tribes of Madinah,
  the conquest, and the campaigns are told as the sources tell them, as
  responses to specific treaties and acts, with no generalisation onto a people.
- **The card must not be contradicted.** Read the event's `SEERAH_EVENTS` entry
  first; the article deepens it. If the card is wrong, report it for a data fix
  in the same commit.

## Validation

```
node tools/merge-articles.js <chunk> js/seerah-articles.js SEERAH_ARTICLES js/seerah-data.js SEERAH_EVENTS --band 700-1100
```
Dry run must print CLEAN; then `--write`, then `node tools/build-article-index.js`
and `node tests/run.js`. The chunk is `"id": { sections: [...] },` entries only.
