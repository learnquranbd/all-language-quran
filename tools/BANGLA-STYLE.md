# Bengali style for module content

Written after the Hope & Character module shipped with Bengali that a reader
described as "quite literal". It was: every `bn` string had been produced by
walking the English sentence left to right and substituting words, which yields
Bengali that parses but does not read like Bengali.

These rules are for the `bn` half of every `{en, bn}` pair in `js/*-data.js`.
They are not translation theory — each one is a defect that actually shipped.

## The rule behind all the other rules

**Write the Bengali from the idea, not from the English sentence.** Read the
English, understand what it claims, look away, and say that in Bangla. If the
Bengali clause order matches the English clause order for more than a sentence
or two, it was transliterated rather than written.

---

## 1. Punctuation is not shared between the two languages

English prose here uses the em dash heavily for asides. Bengali does not.

- **Bad:** `রোগনির্ণয়ের আগেই সম্বোধন। আপনি যা-ই করে থাকুন, আপনাকে সম্বোধন করা হচ্ছে তাঁরই একজন হিসেবে।`
- **Good:** `দোষ ধরার আগেই ডাকটা এসে গেছে। আপনি যা-ই করে থাকুন, আপনাকে ডাকা হচ্ছে তাঁরই লোক বলে।`

At most one `—` per paragraph. Where the English has a dash, Bengali usually
wants a full stop, a comma, or a colon. A dash-joined English appositive
("‘ibādī, My servants, spoken by Allah about…") normally becomes its own
Bengali sentence.

## 2. Kill the article calque

English needs *a/an*; Bengali mostly does not. `একটি` copied across from every
English "a" is the single loudest marker of a translated text.

- **Bad:** `এটি একটি সময়সীমা, আবার একটি নিশ্চয়তাও।`
- **Good:** `এ যেমন সময়সীমা, তেমনি নিশ্চয়তাও।`

Same for `এটি` / `তা` as sentence subjects. Bengali drops the pronoun far more
readily than English.

## 3. Prefer the active verb to `করা হয়েছে`

The English of these modules is heavy with agentless passives ("is described
as", "is presented as", "was revealed"). Rendering each as `বর্ণনা করা হয়েছে`
/ `উপস্থাপন করা হয়েছে` produces a report, not prose.

- **Bad:** `রহমতকে উপস্থাপন করা হয়েছে প্রতিশ্রুতি হিসেবে।`
- **Good:** `রহমত এখানে তাঁর মেজাজ নয়, তাঁর দেওয়া কথা।`

Name the agent where the Qur'an names it: `কুরআন বলছে`, `আল্লাহ বলছেন`,
`নবী ﷺ বলেছেন`, `আয়াতটি ধরিয়ে দেয়`.

## 4. Use the living Islamic register, not the academic one

Bangladeshi Islamic writing has its own settled vocabulary. Reach for it before
reaching for a Sanskritic abstraction.

| Prefer | Over |
| --- | --- |
| গুনাহ | পাপ (in a fiqh/tawbah context) |
| তওবা, মাগফিরাত, রহমত | অনুশোচনা, ক্ষমাদান, করুণা |
| বান্দা, হক, কবুল, নাফরমানি | দাস, অধিকার, গৃহীত, অবাধ্যতা |
| আমল, নেকি, ইস্তিগফার, জিকির | কর্ম, পুণ্য, ক্ষমাপ্রার্থনা, স্মরণ |
| দোষ ধরা, ধরিয়ে দেওয়া | রোগনির্ণয়, নির্দেশ করা |
| ছবি, চেহারা | প্রতিকৃতি |
| সোজা কথায়, খাঁটি | স্পষ্টভাবে বললে, বিশুদ্ধ |

Words that must never appear in this content: `প্রক্রিয়াকরণ`, `রোগনির্ণয়`,
`দ্বিতীয় পুরুষ` and other grammar-class jargon, `ইনপুট`, `অডিট`.
`tests/check-bangla-style.js` fails the build on these.

## 5. Break the periodic sentence

English here builds long sentences that hold a claim to the end. Bengali carries
that badly. Two or three short sentences almost always read better than one
faithful long one.

- **Bad:** `নিরাশা প্রায়ই টিকে থাকে কারণ তা কখনো এত স্পষ্টভাবে বলা হয় না যে তার প্রতিবাদ করা যায়।`
- **Good:** `নিরাশা টিকে থাকে চুপচাপ। মনের কথাটা কখনো মুখে এনে সোজাসুজি বলা হয় না, বললেই তো জবাব দেওয়া যেত।`

## 6. Do not translate English idioms word for word

"Run out of chances", "the arithmetic left something out", "the door is open",
"on the same ledger" — find the Bangla thought, not the Bangla words.

- **Bad:** `আপনার হিসাবে একটি জিনিস বাদ পড়েছে।`
- **Good:** `আপনার হিসাব থেকে একটা জিনিস বাদ পড়ে গেছে।` (or drop the metaphor)

## 7. Address and honorifics

- The reader is **আপনি** throughout. Never তুমি, except inside quoted scripture
  where the Arabic addresses a person directly.
- Prophets: `(আ)`. The Prophet Muhammad: `ﷺ` — the character U+FDFA, never a
  spelled-out বাংলা equivalent and never a lookalike glyph.
- Companions: `(রা)`.

## 8. Numerals

Verse references and counts inside Bengali prose take Bengali digits: `৩৯:৫৩`,
`২৯৯টি`. Hadith collection numbers inside a `src` field stay Latin, because that
field is shared with every other language.

## 9. Bilingual parity is about content, not shape

The Bengali must make the same claim as the English — same verse, same count,
same attribution. It does **not** have to keep the same sentence count, the same
order of clauses, or the same rhetorical device. Where an English pun or word
order carries the point (a doubled word, an English-only alliteration), say the
point plainly in Bengali instead of reproducing the device.

If the English says something that is only true about English (e.g. "the two
verbs sit in the same order"), the Bengali must not assert it about Bengali.
That is defect class 7 in `ARTICLE-SPEC.md` and it has shipped before.
