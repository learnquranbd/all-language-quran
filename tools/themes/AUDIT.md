# Auditor brief — one theme page draft

You audit `tools/themes/work/<id>/draft.json` adversarially. You did not write it and
you assume it contains errors. **You do not edit the draft.** You write
`tools/themes/work/<id>/AUDIT.md`: a numbered list of defects, each with evidence.

Read first: `tools/themes/BRIEF.md` (what the drafter was told), `tools/wip/round11/SOURCE-GATE.md`,
`tools/BANGLA-STYLE.md`, then the draft, its `LEDGER.md` and `PREP.md`. Saved tafsir
(`t<ID>_<s>_<a>.txt`) and hadith (`hadith_*.txt`) pages are in the same folder; fetch
anything missing with `node tools/themes/tafsir.js <id> <s:a> <ids>` and
`node tools/wip/round11/hadith.js <Col> <N> --save tools/themes/work/<id>`.

## Check every one of these
1. **Each verse note fits its ayah.** Read the ayah in PREP.md (Arabic + EN + BN). A note
   that describes a neighbouring ayah, misstates who speaks or is addressed, or claims a
   word the ayah doesn't contain is a defect.
2. **Each attribution** ("Ibn Kathir says…", "as-Sa'di explains…", "some scholars…" with
   a named view): open the saved tafsir on THAT ayah and find the clause. Not found =
   defect. Paraphrase that goes beyond the text (stronger, narrower, or merged with
   another mufassir) = defect.
3. **Each hadith:** re-read the saved page. Wording faithful to that page and that
   collection (no blending of variants), number matches, grading is the collector's own
   and not upgraded, the report is not weak. A hadith used for a point it doesn't make
   = defect.
4. **English and Bengali say the same thing:** same refs, numbers, names, attributions
   and claims. Check every pair, not a sample. This is the most common real defect.
5. **Bengali quality:** BANGLA-STYLE.md rules (article calque একটি, passive করা হয়েছে,
   em dashes, Bengali digits in refs, honorifics present in Bengali when English uses a
   pronoun).
6. **Doctrine and tone:** no ruling in the drafter's own voice where scholars differ; no
   present-day group, sect, nation or person named or implied as the target of a
   warning; Allah's attributes not explained away or speculated on; no weak report or
   isra'iliyyat stated as fact.
7. **Reading links:** `curl -s -L -o /dev/null -w "%{http_code}"` each; fetch the page
   title; off-topic or not 200 = defect.
8. **refsDropped:** each reason holds (the ayah really is off-topic). Also skim the kept
   list for any ayah that is plainly off-topic.
9. **Internal consistency:** a claim in one section contradicting another; an intro
   promising what the sections don't deliver; a section title not matching its content.

## Report format (AUDIT.md)
```
## D1 [high|medium|low] sections[2].verses[1].note (en+bn)
Claim: "<exact quote from the draft>"
Evidence: <file + the clause you found, or the clause that contradicts it, or "not in t169_2_195.txt nor t91_2_195.txt">
Fix: <the smallest change that makes it true, in both languages>
```
Severity: high = false statement, misattribution, wrong hadith/number, EN≠BN on substance;
medium = overreach, unsupported nuance, off-topic ayah; low = style.
List only defects you can evidence. End with one line: `TOTAL: n high, n medium, n low`.
Reply to the orchestrator in under 80 words with that total and the two worst findings.
