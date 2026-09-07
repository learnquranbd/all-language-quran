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

## What the audit of the first twenty articles actually caught

Every one of these got past a drafter who believed the article was clean, and
each was confirmed by an independent check. They are the failure modes of this
task, not general advice — read them as a checklist against your own draft.

1. **A quotation that was never transmitted.** One draft had Abu Lahab say "may
   your hands perish", which is the surah's wording, not his; the narration has
   no "hands", and the invented quote destroyed the paragraph's own point about
   the Quran answering him in his own words. If you put words in quotation
   marks, they must be the wording of the collection you cite. If you are
   paraphrasing, do not use the shape of a quotation.
2. **A hadith number you cannot check.** The repo carries no hadith corpus, so
   a number is either one you can corroborate against something shipped here
   (grep js/sahaba-articles.js and the other article files — many carry numbers
   already) or one you must omit. Collection plus narrator with no number is
   always acceptable. Never write a grading.
3. **Claims about a collection's structure.** "The first hadith in Bukhari",
   "the chapter named for this verse" — these are checkable assertions and one
   draft got one wrong. Say what you can support and no more.
4. **English and Bengali asserting different things.** One draft called Ali (RA)
   "a cousin's son" in English while the Bengali correctly said "an uncle's son"
   — two different genealogies in one sentence. Another attributed an
   identification to "the commentators" in English and to "the narrations" in
   Bengali. Read every pair back to back and check they claim the same thing at
   the same strength.
5. **Speech assigned to the wrong speaker.** One draft gave the Prophet's ﷺ own
   words at the digging of the trench to the Companions as their chant. When a
   narration is an exchange, be certain who says which half.
6. **The wrong Companion.** Usamah ibn Zayd (RA) rode behind the Prophet ﷺ from
   Arafah; al-Fadl ibn al-Abbas (RA) rode the Muzdalifah leg. Check the person,
   not just the event.
7. **Adjacency and ordering claims.** "The next entry in this timeline" was
   false — four cards sat between the two. Do not describe where a card sits
   relative to another unless you have listed them.
8. **Dates that contradict the app's own cards.** One draft put Hudaybiyyah two
   years after the Trench; the cards say one. Every date you give is checkable
   against js/seerah-data.js — check it.
9. **Missing honorifics in Bengali only.** English uses a pronoun where Bengali
   must repeat the noun, so Bengali forces a choice English never made. Every
   নবী in Bengali narrative prose takes ﷺ.
10. **Fixing one site and not its twin.** Where a fact appears twice in an
    article, correcting one occurrence and leaving the other creates a
    self-contradiction that reads worse than the original error.

## Final report must contain
- Both validation outputs, verbatim.
- Per event: word count, section count, the verses cited, the hadith cited
  (collection + number if given), the sirah sources named.
- Your attribution/hedging ledger: every number or contested detail, and how
  you attributed it. Every story you deliberately left out for want of a chain.
- Any defect you found in an EXISTING `SEERAH_EVENTS` card (quote it).
