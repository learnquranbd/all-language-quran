# Round 8 addendum — headings (one lesson from round 7)

Round 7's second batch was merged only after nine headings were rewritten. Two
classes, both cheap to avoid and both caught by gates rather than by the author:

1. **Length.** Every `h.en` is 2-6 words. Two ran to seven ("What Is Attached and
   What Is Not", "What Was Given to Those Who Asked"). Count the words.

2. **Reuse across your own verses.** `tools/TADABBUR-SPEC.md` names the nine
   sections but says explicitly: do not use those labels verbatim as headings,
   write a heading that fits the verse. One batch gave all four of its articles
   the heading "Verses That Stand With It" and three of them "What to Ask Here".
   `tools/merge-articles.js` refuses the merge when a heading repeats across a
   chunk, so this costs a whole extra pass.

Before you report, print your own headings as a grid — every verse down the side,
every section across — and check two things: no `h.en` over six words, and no
`h.en` appearing twice anywhere in the grid. A heading that fits the verse is
usually specific enough to be unique by itself; if two verses want the same
heading, at least one of them is describing the template instead of the verse.

The same goes for the Bengali headings: same length discipline, same uniqueness.
