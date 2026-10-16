# One Tadabbur review packet (for a reviewer agent)

You are given a shard S and a packet N. CONST = `TADABBUR_ARTICLES@S`.

Read and follow `tools/bn-review/BRIEF.md` (and `tools/BANGLA-STYLE.md` it points to).
Input: `tools/bn-review/work/TADABBUR_ARTICLES@S/RN/review.json`.
Write only `tools/bn-review/work/TADABBUR_ARTICLES@S/RN/bn-fixes.json` (helper scripts may go in that
same folder, e.g. a make.js; do not use any shared scratch folder). No git, no edits to any other file,
and do NOT run `bn.js apply ... --write` (the orchestrator applies). Other agents review the other
packets in parallel; ignore their folders.

- In rewritten strings use নামাজ নাজিল ওহি হাদিস রোজা ফরজ রমজান জিকির রাসূল জালিম জুলুম.
- Address Allah in duas as আপনি. Where scripture has Allah addressing a person, keep the string's existing form.
- Keep hadith grade terms (sahih, hasan, gharib, da'if) as terms; a gloss may follow. Never gloss hasan as সহীহ.
- Write য় as the single character U+09DF, never য + nukta.
- Never blind-replace spellings: নামায় (to lower) is a verb, not নামাজ.

Done = `node tools/bn-review/bn.js apply TADABBUR_ARTICLES@S` (dry run) shows no ERROR lines for your ids.
Final reply at most 6 lines as the brief says, including any string where the English itself looks
wrong (id + one-line reason).
