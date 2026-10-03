# Drafter brief — one Tadabbur ayah (round 11, lean workflow)

You draft ONE key: a card and a deep bilingual article. You never write under `js/`,
never pass `--write`, never commit. The orchestrator's message gives the key and the
verse-specific watch-points; this file is everything else.

## 1. Read (in this order, nothing more unless a watch-point needs it)
1. `tools/wip/round11/audit/<s>_<a>/PREP.md`: the verses ±6 with Arabic word counts
   already computed, the shipped neighbours' lessons and headings, and the list of
   tafsir files **already fetched**. If PREP.md is missing, run
   `node tools/wip/round11/prep.js <key>` first.
2. `tools/wip/round11/SOURCE-GATE.md` (binding) and `tools/BANGLA-STYLE.md` (binding).
3. `tools/wip/round11/TEMPLATE-notes.js` and `TEMPLATE-articles.js`: the file shape
   and the register. **Do not open the full shipped drafts for style.**
4. The tafsir .txt files named in PREP.md. Skip any marked `WRONG GROUP`.
   For a long file (over 6,000 chars), read the first part and then grep for the
   clauses you need, rather than reading all of it.
5. Open a shipped neighbour article (via `tests/lib.js` `loadTadabburArticles()[key]`)
   only when its headings in PREP.md suggest a real overlap.

Hadith: `node tools/wip/round11/hadith.js <Collection> <N> --save tools/wip/round11/audit/<s>_<a>`
prints only the reference, English and Arabic. Never fetch raw quranx HTML.
sunnah.com returns 403, so don't try it.

## 2. Hard numbers
- Article: 7-9 sections, **1,400-1,800 English words (aim 1,650-1,750)**, every
  paragraph 55-110 EN words. Plan the budget before writing: for example 8 sections ×
  2-3 paragraphs × ~85 words. **Write to the budget the first time.** Overshooting and
  trimming a 40 KB file doubles the cost.
- Bengali of equal substance, written from the idea. Same numbers, attributions and
  verse refs as the English. At most one em dash per Bengali paragraph. Bengali digits
  in refs. Bengali ranges as pairs (১২:৩১ ও ১২:৩২). Prophets' honorific `(আঃ)`,
  matching what ships.
- Headings 2-6 words, unique in both languages against everything shipped and every
  draft; don't use the spec's section labels verbatim.
- Card: reflection 100-130 EN words, 4-5 questions, `lessonEn` under 35 words, 0-2
  `themes` from `PONDER_THEMES`. No scholar names, hadith numbers or asbab in the card.

## 3. Standing accuracy rules
- Nothing from memory. Attribute a reading only if it is in the text fetched for
  this verse (or its stated group), and name the group when you use one.
- Keep a genuine disagreement as a disagreement, with both names and no position.
- One collection's wording, quoted whole. Report the collector's grading and never
  upgrade it. If no tafsir attaches a sound hadith, say so in one sentence. A general
  narration must be marked as not attached to the verse.
- Never say in the article's own voice that a prophet erred.
- On a destroyed or condemned people, or a wrongdoer in a story: state plainly, in
  both languages, that the verse describes what the text describes and licenses
  nothing against any living person or community.
- Drop what you cannot confirm, and list it in the ledger.

## 4. How to write (saves tokens and survives crashes)
- Write the notes file first, then the article **section by section**: create the
  file with section 1, then add each section with an Edit. Never rewrite the whole
  file. A crash then leaves a usable partial draft.
- Run `node tools/wip/round11/gate.js <key>`, one command for every gate. Fix only
  what it reports and re-run it.

## 5. Outputs
- `tools/wip/round11/<s>_<a>-notes.js` and `-articles.js`
- `tools/wip/round11/audit/<s>_<a>/LEDGER.md`: the full SOURCES ledger per
  SOURCE-GATE.md §3. For each tafsir used, the Arabic clause each attribution rests
  on; for each hadith, URL, number, first ten words and grading; asbab used or not;
  everything dropped.
- `tools/wip/round11/audit/<s>_<a>/COMMIT.md`: a commit-message body, about 25 lines
  at most, in the style of `git log -5 --format=%B`. Include what the sources gave,
  the disagreements kept, the hadith used, what was dropped and any defect fixed.
  Leave out the title line and the browser numbers; the orchestrator adds those.
- **Final reply: at most 12 lines.** Give the gate.js summary line, the EN word count
  and section count, and anything the orchestrator must decide or verify. Don't paste
  the ledger or the headings; they are in the files.
