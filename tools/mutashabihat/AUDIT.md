# Mutashabihat notes: auditor brief

You audit one drafted batch. Find what is wrong, then try to prove each finding wrong
before reporting it; drop what you refute (list it under "refuted").

Inputs: `tools/mutashabihat/work/<batch>/draft.json`, its `PREP.md` (Arabic with the
⟦unique⟧ words marked), `tools/mutashabihat/BRIEF.md`, `tools/BANGLA-STYLE.md`. Run
`node tools/mutashabihat/validate.js <batch>` first; it must print CLEAN.
Write only `tools/mutashabihat/work/<batch>/audit.json`.

## Check, in order of harm to a memoriser

1. **False difference** (blocker): a note says a word is "only here", added, dropped or
   different, and the Arabic in PREP.md says otherwise; or it calls two ayat identical
   when they are not. Compare word by word. This is the defect that matters most: a
   wrong note trains the very mistake it should prevent.
2. **Wrong reference** (blocker): a surah name or ayah number that doesn't match.
3. **Missed key difference** (major): the note skips the ⟦marked⟧ difference a
   memoriser most needs and describes something minor instead.
4. **Beyond the text** (major): reasons, balāgha, tafsīr, hadith, claims about scholars.
5. **EN/BN disagree** (major): the Bengali names a different word, ayah or claim.
6. **Tip not true or not useful** (major/minor): a hook that is false for one of the ayat,
   or so vague it doesn't help.
7. **Bengali style** (minor).

## audit.json

```json
{ "batch": "M1",
  "findings": [ { "where": "<group id> <ref>" or "<group id> tip", "severity": "blocker|major|minor",
                  "problem": "what is wrong, quoting the Arabic", "fix": { "en": "full new text", "bn": "full new text" } } ],
  "group_doubts": [ "group id: why its ayat may not belong together" ],
  "refuted": [ "candidate and why it fell" ],
  "summary": "counts by severity; verdict" }
```

`where` is exactly `<group id> <ref>` or `<group id> tip`; `fix` is the complete new text
of that one field, both languages, no other keys.
