# Mutashabihat notes: drafter brief

The Mutashabihat module groups ayat that are nearly identical: the ones a ḥāfiẓ mixes up
in recitation. Opening a group shows its ayat with the shared words marked. What is
missing, and what you write, is the **help a memoriser needs**:

- a **tip** per group: how to keep the ayat apart, the single most useful pattern;
- a **note** per ayah: what is distinctive about *this* ayah's wording.

Readers are Bengali first, English second, and they are memorisers, not scholars.

## Inputs and your one output

- `tools/mutashabihat/work/<batch>/PREP.md`: every group in your batch, each ayah's
  Arabic with the words **no sibling ayah has** in ⟦brackets⟧, and the bundled en/bn
  translations.
- `tools/BANGLA-STYLE.md`: read it before writing Bengali.
- Write **only** `tools/mutashabihat/work/<batch>/draft.json`. Put any helper script in the
  same folder. Touch no other file; no git.

## draft.json shape

```json
{ "musabbihat": {
    "tip": { "en": "...", "bn": "..." },
    "verses": {
      "57:1": { "en": "...", "bn": "..." },
      "59:1": { "en": "...", "bn": "..." } } } }
```

One key per group id in your batch; one note for **every** ayah listed under it.

## What a good note says

- **Name the actual difference**, quoting the Arabic word(s): "Only here: وَٱلْأَرْضِ with no
  وَمَا فِى before it." Compare with the siblings by surah name and ayah: "al-Ḥadīd 57:1
  drops the second مَا فِى that al-Ḥashr 59:1 and aṣ-Ṣaff 61:1 keep."
- Differences that matter to a memoriser: an added or dropped word, a different verb
  form or tense, singular/plural, a different ending (name pairs like ٱلْعَزِيزُ ٱلْحَكِيمُ
  vs ٱلْمَلِكِ ٱلْقُدُّوسِ), a changed word order, a different particle (فَ vs وَ, مِن vs absent).
- When two ayat are word-for-word identical, say so plainly ("identical to 59:1").
- The **tip** is a memory hook: an ordering, a count, a pattern, an alphabet or surah-order
  cue ("past tense in the three surahs that come first in the muṣḥaf: 57, 59, 61;
  present in 62 and 64"). Only hooks that are true of the text.

## Hard rules

- **Only what the text shows.** No reasons for the differences (no "because Allah…",
  no balāgha or tafsīr explanation of *why*), no hadith, no occasions of revelation,
  no claims about scholars. Description and memory aids only.
- **Every Arabic word you quote must be in that ayah** (for a tip: in one of the group's
  ayat). Copy it from PREP.md. `validate.js` enforces this.
- Surah references by English name and number (al-Baqarah 2:35). Bengali uses Bengali
  digits (২:৩৫) and the module's Bengali surah names.
- Lengths: note en ≤ 260 chars, tip en ≤ 420 chars (Bengali ≤ 1.3×). No HTML, at most
  one em dash per string.
- The Bengali says what the English says, written from the idea (BANGLA-STYLE.md):
  no extra claim, no dropped claim.

## Done means

`node tools/mutashabihat/validate.js <batch>` prints CLEAN and you have re-read every
note against PREP.md once: is each stated difference really there, and is nothing
claimed "only here" that a sibling also has? Then report: groups done, and any group
whose verses turned out not to be confusable (so the group itself may be questionable).
