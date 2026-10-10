# Quranic Arabic: drafter brief

You are writing word-by-word reading lessons for the Quranic Arabic module
(sidebar → Quranic Arabic → "Reading Real Ayat"). Each surah is a unit; a lesson
walks a learner through 3-7 consecutive ayat, every word with its grammatical
role, one short note per ayah, one grammar concept, and one practice question.
Readers are Bengali first, English second. They are learners, not grammarians.

## Your inputs and your one output

- `tools/qarabic/work/<batch>/PREP.md`: every unparsed ayah in your batch, with each
  word's Arabic, its bundled en/bn gloss, the **corpus morphology** (segments with
  POS, tense, person, case, voice, root, lemma) and, where it aligned, the **corpus
  i'rab** (syntactic function, English + Arabic label). It also lists the lessons
  that already exist for each surah.
- `tools/BANGLA-STYLE.md`: read it before writing any Bengali.
- Look at one existing lesson for tone: `data/qarabic/parse-114-110.json`, lesson `read-114-1`.
- Write **only** `tools/qarabic/work/<batch>/draft.json`. Touch no other file.

The Arabic text, the word glosses and the ayah translations are copied in from the
bundled data at merge time. You do not write them, and you must not contradict them.

## draft.json shape

```json
{ "lessons": [
  { "id": "read-78-2", "unit": "read-78",
    "title":   { "en": "an-Naba' 8-11: verbs with two objects", "bn": "আন-নাবা ৮-১১: দুই কর্মবিশিষ্ট ক্রিয়া" },
    "concept": { "en": "2-4 sentences. May use <b>ja'ala</b> for a transliterated term; no other HTML.", "bn": "..." },
    "examples": [
      { "ref": "78:8",
        "note": { "en": "1-2 sentences about the highlighted word(s).", "bn": "..." },
        "words": [
          { "ar": "وَخَلَقْنَٰكُمْ", "role": { "en": "and + past verb + 'We' + object 'you'", "bn": "এবং + অতীত ক্রিয়া + 'আমরা' + কর্ম 'তোমাদের'" }, "hl": true },
          { "ar": "أَزْوَٰجًا", "role": { "en": "accusative noun (hal: 'in pairs')", "bn": "মানসুব বিশেষ্য (হাল: 'জোড়ায় জোড়ায়')" } }
        ] }
    ],
    "practice": {
      "q": { "en": "...", "bn": "..." },
      "options": [ { "en": "...", "bn": "..." }, { "en": "...", "bn": "..." }, { "en": "...", "bn": "..." }, { "en": "...", "bn": "..." } ],
      "answer": 2,
      "explain": { "en": "...", "bn": "..." } } }
] }
```

- `id`: `read-<surah>-<n>`, starting at the number PREP.md gives, counting up in ayah order.
- `words`: one entry per word of the ayah, in order, `ar` copied exactly from PREP.md.
- `hl: true` on 1-3 words per ayah: the words the note talks about.

## Lessons

- Split each unparsed run (PREP.md lists them) into lessons of **3-7 consecutive ayat**
  at natural breaks in meaning. A lesson never crosses a run's gap. A run of 1-2 ayat
  may be its own short lesson.
- Each lesson teaches **one concept that its ayat actually show**: the oath *wa*,
  *inna* and its noun, *kāna* and its predicate, idafa chains, the *ḥāl*, the
  *tamyīz*, the passive, verb forms II-X, *lā* of negation vs prohibition, *idhā* +
  past verb, the cognate object (*mafʿūl muṭlaq*), and so on. Vary the concept
  across a surah's lessons, and don't make the existing lesson's concept your main point.
- Title: `<surah name> <first>-<last>: <concept in a few words>`, en ≤ 70 chars.
  Bengali titles use Bengali digits.

## Roles (the heart of it)

- A role says what each segment of the word **is and does**, joined with ` + `:
  prefix, core word, suffix. Keep it short: **en ≤ 48 chars**. Abbreviate the obvious
  ("and +", "obj. 'you'") rather than drop information.
- **The morphology column is authoritative for form**: POS, past/present/imperative,
  person, voice (PASS), case (NOM/ACC/GEN), definiteness. The one exception: the local
  file has some tagging errors (80:10 تَلَهَّىٰ is tagged past Form I, but with *anta* it is
  present Form V with one ta elided). Where the Arabic itself proves a tag wrong
  (vowelling, agreement with an explicit pronoun, a preposition before it), teach the
  correct analysis and record it in `FLAGS.md` as `ref word: tag → correct, evidence`.
- **Function** (subject, object, predicate, *ḥāl*, *tamyīz*, *mafʿūl muṭlaq*, *badal*,
  *naʿt*, *muḍāf ilayh*...): take it from the i'rab column when shown. When there is
  no i'rab, give the function only when the grammar is unambiguous, otherwise give the
  form alone (e.g. "accusative noun"). A form-only role is fine; a guessed function is
  a defect.
- `validate.js` compares every role with the morphology and prints FLAGs. Fix each
  flag, or, if the flag is wrong, list it in `FLAGS.md` with a one-line reason.

## Traps the audits have caught (don't repeat them)

- *innamā*: the *mā* cancels *inna*, so the next word is a plain **mubtadaʾ** (*innamā anta
  mudhakkirun*: separate pronoun *anta*, not *innaka*). The predicate is nominative with or
  without the *mā*; never say the *mā* is why it is nominative.
- *-nā* on a past verb is the subject only after a silent (sākin) letter (*khalaq-nā*);
  after a vowel it is the object "us" (*hadā-nā*). Don't state either as a general rule.
- The lām of emphasis after *inna* goes on the predicate, *or* on inna's noun when the
  predicate is fronted (*inna fī dhālika la-ʿibratan*). Don't generalise from one ayah.
- Never mention "the corpus" or tags to learners; give the grammatical reason.
- *illā* after a negative statement may be disconnected (munqaṭiʿ, "but"); where
  grammarians differ, say "sets apart" and that they differ.

## Notes, concept, practice

- A note explains the highlighted word(s): what form or function it shows and how
  that produces the meaning in the translation. 1-2 sentences.
- Grammar only. No tafsir, no hadith, no claims about occasions of revelation. Any
  meaning you mention must be supported by the gloss or translation in PREP.md.
- Practice: test the lesson's concept on a word from the lesson. Exactly one option is
  correct; the distractors are plausible to a learner but clearly wrong to a grammarian
  (no near-synonyms of the answer). Vary `answer` across your lessons (0-3 roughly even).
- English transliteration: ā ī ū ḥ ṣ ḍ ṭ ẓ, ʿ for ʿayn, ʾ for hamza, e.g. *ʿamma*,
  *kallā*. Plain text; only `concept` may wrap a term in `<b>`.

## Bengali

- Write each Bengali string from the idea, not word by word from the English
  (`BANGLA-STYLE.md`). The Bengali must say what the English says: no extra claim,
  no dropped claim. Auditors check this first.
- At most one em dash per string. Bengali digits in prose and titles (৭৮:৮).
- Grammar terms: Bengali word plus the Arabic term in brackets the first time in a
  lesson, then either one. Match the module's existing usage:

| English | Bengali |
|---|---|
| noun / verb / particle | বিশেষ্য / ক্রিয়া / অব্যয় |
| past / present / imperative verb | অতীত / বর্তমান / আদেশসূচক ক্রিয়া |
| preposition (harf jarr) | অব্যয় (হারফ জার্র) |
| conjunction | সংযোজক অব্যয় |
| genitive (majrūr) | মাজরুর (সম্বন্ধপদ) |
| accusative (manṣūb) | মানসুব |
| nominative (marfūʿ) | মারফু |
| subject / object | কর্তা (ফা'য়িল) / কর্ম (মাফ'উল বিহি) |
| possessive / object / subject pronoun | সম্বন্ধ-সর্বনাম / কর্ম-সর্বনাম / কর্তা-সর্বনাম |
| construct (muḍāf) / muḍāf ilayh | মুদাফ / মুদাফ ইলাইহি |
| relative pronoun | সম্বন্ধবাচক সর্বনাম |
| adjective (naʿt) | বিশেষণ (না'ত) |
| ḥāl / tamyīz | হাল (অবস্থাবাচক) / তাময়ীয |
| oath particle | শপথ-অব্যয় |
| emphatic particle | জোরারোপক অব্যয় |
| passive | কর্মবাচ্য |

## Done means

`node tools/qarabic/validate.js <batch>` prints CLEAN, every FLAG is fixed or
answered in FLAGS.md, and you have re-read every Bengali string once against its
English. Then report: lessons written, ayat covered, flags answered, anything in
the morphology you were unsure of.
