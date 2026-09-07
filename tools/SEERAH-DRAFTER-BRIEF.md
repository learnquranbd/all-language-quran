# Brief for Seerah DRAFTER agents

Repo (READ-ONLY for you): /var/www/html/learnquranbd/all-language-quran
You write ONLY the one output file named in your task, under `tools/wip/`.
Never write under `js/` or `tools/` (other than your own `tools/wip/<batch>-*`
file). Never pass `--write` to any tool. Name every working file with your
batch letter (e.g. `S1-articles.js`) — generic names collide with the other
agents running in parallel. Write the file INCREMENTALLY, appending each
finished event, so partial work survives an interruption.

## Read first, in this order
1. `tools/SEERAH-SPEC.md` — the article template (sections, lengths, rules).
2. `tools/ARTICLE-SPEC.md` — accuracy, references, honorifics, no HTML (binding).
3. `tools/BANGLA-STYLE.md` — binding for every Bengali string.
4. Your events' own cards, so the article deepens the card and never fights it:
   `node -e "const L=require('./tests/lib.js');const e=L.get(L.load('js/seerah-data.js'),'SEERAH_EVENTS');for(const x of e)if(['ID1','ID2'].includes(x.id))console.log(JSON.stringify(x,null,1))"`
5. The neighbouring events in the timeline (the entries just before and after
   yours in `SEERAH_EVENTS`) so "what had just happened" is real, not invented.
6. Every verse you cite, in BOTH app translations: `data/translations/en.json`
   and `data/translations/bn.json`, keyed `"s:a"`. Describe the verse the way
   the app renders it — a reader will tap the ref and read exactly that.
7. Any Companion in your event who already has an article, so you do not
   contradict it:
   `node -e "const L=require('./tests/lib.js');const a=L.get(L.load('js/sahaba-articles.js'),'SAHABA_ARTICLES');console.log(Object.keys(a).join(' '))"`

## What you produce
One file, `tools/wip/<batch>-articles.js`, holding only entries:
```
  "badr": { "sections": [ { "h": {"en":"…","bn":"…"}, "p": [ {"en":"…","bn":"…"}, … ] }, … ] },
```
6–8 sections, 55–110 English words per paragraph, 800–1,000 English words per
event, Bengali of equal substance, at most one em dash per Bengali paragraph,
bare verse refs (in Bengali never followed by a hyphen: write "3:169 আয়াতের").
Headings must differ across your events — the merge gate refuses a batch where
one heading is used by more than half its subjects.

## Validate before you report (from the repo root)
```
node tools/merge-articles.js tools/wip/<batch>-articles.js js/seerah-articles.js SEERAH_ARTICLES js/seerah-data.js SEERAH_EVENTS --band 700-1100
```
It must print `=> CLEAN`. Also check your own per-paragraph band and Bengali
dashes:
```
node -e "const vm=require('vm'),fs=require('fs');const ctx={};vm.createContext(ctx);const o=vm.runInContext('({'+fs.readFileSync('tools/wip/<batch>-articles.js','utf8')+'})',ctx);for(const [id,e] of Object.entries(o)){let w=0,d=0,bad=[];e.sections.forEach(s=>s.p.forEach(p=>{const n=p.en.split(/\s+/).length;w+=n;if(n<55||n>110)bad.push(n);if((p.bn.match(/—/g)||[]).length>1)d++;}));console.log(id,w,'words | sections:',e.sections.length,'| out-of-band:',bad.length,'| bn>1dash:',d)}"
```

## Final report must contain
- Both validation outputs, verbatim.
- Per event: word count, section count, the verses cited, the hadith cited
  (collection + number if given), the sirah sources named.
- Your attribution/hedging ledger: every number or contested detail, and how
  you attributed it. Every story you deliberately left out for want of a chain.
- Any defect you found in an EXISTING `SEERAH_EVENTS` card (quote it).
