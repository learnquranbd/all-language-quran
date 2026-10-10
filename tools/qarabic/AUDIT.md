# Quranic Arabic: auditor brief

You audit one drafted batch before it ships. Your job is to find what is wrong,
then try to prove each finding wrong before you report it. A finding you could not
refute is reported; a finding you refuted is dropped (list it under "refuted" so
the next auditor doesn't raise it again).

## Inputs

- `tools/qarabic/work/<batch>/draft.json`: the lessons under audit
- `tools/qarabic/work/<batch>/PREP.md`: corpus morphology and i'rab per word (the source)
- `tools/qarabic/work/<batch>/FLAGS.md` (if present): the drafter's answers to validator flags
- `node tools/qarabic/validate.js <batch>`: run it first; it must print CLEAN
- `tools/qarabic/BRIEF.md` and `tools/BANGLA-STYLE.md`: the rules the drafter had

Write only `tools/qarabic/work/<batch>/audit.json`. Touch no other file.

## What to check, in order of cost to a learner

1. **Wrong grammar** (blocker). Any role, note, concept or practice answer that misstates a
   word's form or function. Check each role against the morphology column word by word:
   POS, tense, person/number, voice, case. Check each stated function (subject, object,
   ḥāl, tamyīz, khabar, badal, naʿt, mafʿūl muṭlaq...) against the i'rab column where
   shown, and against standard i'rab where it is not. The morphology file has some tagging
   errors: where the Arabic itself proves a tag wrong, the lesson must teach the correct
   analysis. List each confirmed error under `morphology_errors` in audit.json. A function stated where the i'rab
   is absent and the grammar is genuinely disputed is a major: it should be form-only.
2. **Practice question broken** (blocker). The marked answer is wrong, a second option is
   also defensible, or the question can't be answered from the lesson.
3. **EN/BN disagree** (major). The Bengali claims something the English doesn't, drops a
   claim, or names a different word or function. This is the commonest defect in this
   project; read every pair.
4. **Concept not shown** (major). The concept describes something the lesson's ayat don't
   actually contain, or the notes teach a different point than the concept says.
5. **Beyond grammar** (major). Tafsir, hadith, occasions of revelation, or a meaning not
   supported by the bundled gloss/translation.
6. **Bengali style and terms** (minor). Word-by-word Bengali, wrong register, terms that
   differ from BRIEF.md's table, an English word left in. Also a role so terse a
   learner can't read it.

Do not report: wording preferences with no error, the fixed fields (Arabic, glosses,
translations; they are not the drafter's), or anything validate.js already enforces.

## Refute-test every finding before reporting

For each candidate: re-read the morphology row, the i'rab row and the whole ayah; ask
"under which reading is the draft right?" If a mainstream i'rab supports the draft,
drop it. Grammar findings need the specific segment/feature that contradicts the draft.

## audit.json

```json
{ "batch": "T6",
  "findings": [
    { "where": "read-89-4 89:21 w3 role", "severity": "blocker|major|minor",
      "problem": "what is wrong, citing the morphology/i'rab evidence",
      "fix": { "en": "exact replacement text", "bn": "exact replacement text" } }
  ],
  "morphology_errors": [ { "ref": "80:10", "word": "تَلَهَّىٰ", "tag": "PERF VF:1 3MS", "correct": "IMPF VF:5 2MS (one ta elided)" } ],
  "refuted": [ "one line each: candidate finding and why it fell" ],
  "summary": "counts by severity; overall verdict" }
```

Give an exact replacement for every finding, so the fix round patches clauses rather
than rewriting passages. `tools/qarabic/apply-audit.js` applies them mechanically, so:

- `where` is exactly `<lesson id> <ref> note`, `<lesson id> <ref> w<N> role`,
  `<lesson id> title|concept`, `<lesson id> practice q|explain`, or
  `<lesson id> option <N>`. Append ` (and w<N> hl)` to also highlight a word. No other
  words or parentheses in `where`.
- `fix` is exactly `{ "en": ..., "bn": ... }`: the complete new text of that one field
  (the whole note, not "replace the last sentence with"). No other keys.
- A change touching two fields (a role and its note) is two findings.
- The drafter's FLAGS.md entry for a confirmed morphology error goes in `morphology_errors`.
