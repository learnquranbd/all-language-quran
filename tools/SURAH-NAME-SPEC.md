# "Why this name?" — entry spec

For each surah, explain **why it carries the name it does**. Read
`js/surah-names-data.js` for the field documentation and
`js/surah-data.js` for each surah's number, Arabic name, localised names and
`ayahCount`.

## Shape

Keyed by surah **number** (an integer, unquoted):

```js
  2: {
    meaning: { en: 'The Cow', bn: 'গাভী' },
    source: {
      en: 'From the episode of the cow the Children of Israel were commanded to slaughter, in 2:67-73.',
      bn: '…',
    },
    why: { en: '…70-120 words…', bn: '…' },
    signal: { en: '…25-45 words…', bn: '…' },
    alt: [
      { name: 'Fustat al-Quran', en: 'Reported as "the pavilion of the Quran" for its length and comprehensiveness.', bn: '…' },
    ],
    refs: ['2:67'],
  },
```

## What each field must do

- **meaning** — the plain gloss. 1-4 words.
- **source** — ONE sentence: the word, verse or episode the name is taken from,
  with the reference. This is the single most useful line on the card.
- **why** — 70-120 words. Why *this* word out of the whole surah? Most surah
  names are markers drawn from a distinctive or unusual word rather than
  summaries of the contents, and where that is the case, **say so** — it is the
  central insight of the module. Where the name IS thematic (Al-Ikhlas,
  At-Tawbah), say that instead, and why it differs.
- **signal** — 25-45 words: what a reader should expect from the surah on
  meeting this name. Do not repeat `why`.
- **alt** — other names genuinely recorded in the tradition, each with its
  basis. Many surahs have them (Al-Fatihah has several; At-Tawbah is also
  Bara'ah; Al-Isra is also Bani Isra'il; Muhammad is also al-Qital; Fussilat is
  also Ha Mim as-Sajdah). Where none is attested, use an **empty array** —
  never invent one to fill the field.
- **refs** — 1-3 references where the naming word or episode actually occurs.
  Verify every one against `ayahCount`. If the name does not occur as a word in
  the surah (e.g. Al-Fatihah), give the most relevant verse or use `[]`.

## Rules

1. **Report, do not invent.** Where the basis of a name is disputed or simply
   not established, `why` says so plainly. Never manufacture an etymology.
2. The **Huruf al-Muqatta'at** surahs (Ta-Ha, Ya-Sin, Sad, Qaf, Ha-Mim series):
   the name is the disjointed letters themselves. Say honestly that their
   meaning is not established, that the majority position is to affirm them
   without claiming to know their meaning, and resist the popular "Ya-Sin means
   O human" claim — mention it as a reported view, not a fact.
3. **Bengali** must be natural, not a calque, and use Bengali numerals in prose.
4. No HTML, no markdown. Straight prose. Prefer double-quoted JS strings when
   the text contains an apostrophe.
5. Names differ slightly between traditions (Al-Masad / Al-Lahab / Tabbat;
   Al-Insan / Ad-Dahr) — the `names` in surah-data is what the app displays, so
   explain that one and record the others under `alt`.

## Output

Entries only, each ending with a comma, no wrapper and no `const`.

## Verify before finishing

Wrap in `const X = { … }` in a temp file and:
- `node --check`;
- assert the keys are exactly your assigned numbers;
- assert `meaning`, `source`, `why`, `signal` each have non-empty `en` **and**
  `bn`, and `alt` is an array (possibly empty) whose items each have
  `name`, `en`, `bn`;
- assert `why` is 70-120 English words and `signal` 25-45;
- extract every `\d+:\d+(-\d+)?` from `refs` **and** from all English and
  Bengali prose and assert each is in bounds against `SURAH_DATA`.

Report the assertion results in your final line.
