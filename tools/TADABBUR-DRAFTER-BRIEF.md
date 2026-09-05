# Brief for Tadabbur DRAFTER agents (breadth waves, deep template)

Repo (READ-ONLY for you): /var/www/html/learnquranbd/all-language-quran
You write ONLY the two output files named in your task, in the scratchpad
directory named in your task. Never write under js/ or tools/. Never pass
--write to any tool. Name any working parts with your batch letter
(e.g. `tadT1-p1.js`) — generic names collide with parallel agents.

## Read first, in this order
1. tools/TADABBUR-SPEC.md — the deep article template (sections, lengths, rules).
2. tools/ARTICLE-SPEC.md — accuracy, references, honorifics, no HTML (binding).
3. tools/BANGLA-STYLE.md — binding for every Bengali string.
4. The verse text itself in BOTH app translations: data/translations/en.json
   and data/translations/bn.json are keyed "s:a". Read the verse AND its
   neighbours (at least 5 before and 5 after) so "where it sits" is real.
5. For sister verses you cite, read them in the same files; characterise them
   the way the app renders them.
6. Existing neighbours: if a nearby verse already has a card or article, read
   them and do not contradict them.
   Cards: node -e "const L=require('./tests/lib.js');const n=L.get(L.load('js/tadabbur-data.js'),'TADABBUR_NOTES');for(const k of Object.keys(n))if(k.startsWith('S:'))console.log(k,'::',n[k].reflectionEn)"   (replace S)
   Articles: node -e "const L=require('./tests/lib.js');const a=L.loadTadabburArticles();for(const k of Object.keys(a))if(k.startsWith('S:'))a[k].sections.forEach(s=>s.p.forEach(p=>console.log(k,'::',p.en)))"

## What you produce, per verse
**A card** (goes into TADABBUR_NOTES):
```
  "2:177": {
    "reflectionEn": "…100-130 words…", "reflectionBn": "…",
    "pointsEn": ["…4-5 personal reflection questions…"], "pointsBn": ["…"],
    "lessonEn": "one line", "lessonBn": "এক লাইন",
    "themes": ["character"]        // 0-2 keys from PONDER_THEMES in js/ponder.js
  },
```
Card rules: the evident, agreed meaning only; no hadith numbers, no scholar
names, no asbab in the card (those belong in the article); Bengali per
BANGLA-STYLE; questions are questions a reader asks themselves.

**An article** (goes into the surah shard), per tools/TADABBUR-SPEC.md:
```
  "2:177": { "sections": [ { "h": {"en":"…","bn":"…"}, "p": [ {"en":"…","bn":"…"}, … ] }, … ] },
```
7-9 sections, 55-110 English words per paragraph, 1,400-1,800 English words
total, Bengali of equal substance, at most one em dash per Bengali paragraph,
bare verse refs (never followed by a hyphen in Bengali: "3:169 আয়াতের").

## Output files
- `<scratchpad>/<batch>-notes.js` — card entries only, `"ref": {...},` lines.
- `<scratchpad>/<batch>-articles.js` — article entries only.
Write both INCREMENTALLY (append each finished verse) so partial work survives.

## Validate before you report (from the repo directory)
```
node tools/merge-tadabbur-notes.js <scratchpad>/<batch>-notes.js
node -e "const vm=require('vm'),fs=require('fs');const ctx={};vm.createContext(ctx);const o=vm.runInContext('({'+fs.readFileSync('<scratchpad>/<batch>-articles.js','utf8')+'})',ctx);for(const [id,e] of Object.entries(o)){let w=0,d=0,bad=[];e.sections.forEach(s=>s.p.forEach(p=>{const n=p.en.split(/\s+/).length;w+=n;if(n<55||n>110)bad.push(n);if((p.bn.match(/—/g)||[]).length>1)d++;}));console.log(id,w,'words | sections:',e.sections.length,'| out-of-band:',bad.length,'| bn>1dash:',d)}"
```
The article merge gate (`tools/merge-articles.js … js/tadabbur-articles … --band 1200-2000`)
can only run AFTER the cards are merged, so the parent runs it; your own
checks above must all be clean: every article 1,400-1,800 words, 7-9 sections,
every paragraph in band, no Bengali paragraph with more than one em dash, and
every verse ref in bounds (badRef in tests/lib.js: node -e "console.log(require('./tests/lib.js').badRef('2:286'))").

## Final report must contain
- Both validation outputs.
- Per verse: word count, section count, the hadith cited (collection + number
  if given), the commentators named, the sister verses used.
- Attribution/hedging ledger and deliberate omissions (weak reports left out).
- Any defect you found in an EXISTING card or article nearby (quote it).
