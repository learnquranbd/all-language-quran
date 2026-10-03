# Session log — Tadabbur enrichment, round 11

Read this together with `.claude/skills/tadabbur-enrich/SKILL.md`, which is the
binding working agreement. This file is the state; the skill is the method.

**This log is updated at every stage** (agent launched, draft landed, merged,
committed, pushed, deployed) because sessions end abruptly on the usage limit.
A new session: read LIVE STATE below, check `git status` / `git log -3`, and resume
from the first line that is not DONE. Never re-run a notes merge for an ayah that
is already in `js/tadabbur-data.js`.

## LIVE STATE (updated 2026-09-29)

- **Live at v353** (verified with a cache-buster, 2026-09-29). Pushed to origin + pro.
  509 cards, 509 articles.
- Batch v344–v353, all deployed: 12:36, 12:43, 12:50, 12:53, 12:70, 12:72, 12:76,
  12:90, 12:109 (v352), 12:97 (v353). First batch on the lean workflow: drafters
  used 87–117k tokens each, against 130–190k before.
- Next batch (push + deploy after v363). Stages: LAUNCHED / DRAFTED / MERGED+TESTED / DONE:

| Ayah   | Version | Stage |
|--------|---------|-------|
| 13:3   | v354 | not started |
| 13:31  | v355 | not started |
| 13:38  | v356 | not started |
| 14:13  | v357 | not started |

  Versions are assigned in merge order, not queue order; fix the row when they differ.
- ship.sh sets a row to MERGED+TESTED by matching `| <key> |`; set it to DONE after commit.
- If a drafter died: check `tools/wip/round11/<s>_<a>-*.js`. If the files exist, run
  `node tools/wip/round11/gate.js <key>`, then either finish them yourself or launch a
  fresh drafter told to finish the existing files, not restart. The files never
  parse standalone (fragment format), which is normal.
- Next targets after 12:30: 12:36 (PREP.md already built) 12:43 12:50 (recompute with the snippet below).
- **From the next batch on, use the lean workflow** in the skill: prep.js → short
  prompt pointing at `tools/wip/round11/BRIEF.md` → gate.js → ship.sh. Start a new
  session after each deploy.

## Stages to log (one line each, in the table above)

LAUNCHED → DRAFTED (report in, gates clean) → MERGED+TESTED (vN bumped, uncommitted)
→ DONE (committed) → PUSHED → DEPLOYED. The dangerous gap is MERGED-but-not-committed:
if a session dies there, `git status` shows modified `js/` files; verify with
`node tests/run.js` and commit rather than re-merging.

## What this session shipped (v315–v334, twenty ayahs, one commit each)

Surah Yunus, closing the surah: 10:81, 10:78, 10:92, 10:87, 10:99, 10:109.
Surah Hud: 11:18, 11:12, 11:31, 11:24, 11:40, 11:44, 11:56, 11:47, 11:67, 11:61,
11:73, 11:81, 11:100, 11:84.

Two deploys, after v324 and after v334 — the skill's every-tenth rule.

## Next targets

`tools/tadabbur-targets.json`, first uncovered entries, in order:

```
11:82  11:94  11:103  11:108  11:118  12:5-6  12:16  12:25  12:30  12:36  12:43  12:50
```

570 targets remain on the list. Compute the head of the queue rather than trusting
this snapshot:

```
node -e "
const L=require('./tests/lib.js');
const have=new Set(Object.keys(L.get(L.load('js/tadabbur-data.js'),'TADABBUR_NOTES')));
const t=JSON.parse(require('fs').readFileSync('tools/tadabbur-targets.json','utf8'));
const cov=new Set();
for(const k of have){const m=k.match(/^(\d+):(\d+)(?:-(\d+))?\$/);if(!m)continue;
  for(let a=+m[2];a<=(+m[3]||+m[2]);a++)cov.add(m[1]+':'+a);}
console.log(t.order.filter(k=>{const m=k.match(/^(\d+):(\d+)(?:-(\d+))?\$/);
  for(let a=+m[2];a<=(+m[3]||+m[2]);a++)if(cov.has(m[1]+':'+a))return false;return true;}).slice(0,6).join(' '));
"
```

Left deliberately as future ground inside Hud: 11:42-43 and 11:45-46 (the son),
11:64-66, 11:68, 11:71 (the Dhabih question), 11:77-80, 11:82-83, 11:85-87,
11:101-103. 2:256 has no card and came up as worth queuing.

## The loop that worked, exactly

Two drafter agents at a time, one ayah each, Opus, drafting into
`tools/wip/round11/<s>_<a>-notes.js` and `-articles.js`. The orchestrator owns every
merge, bump, test, browser check and commit — agents never write under `js/` and never
pass `--write`. As each report lands: merge, commit, then launch a replacement so two
are always in flight.

Per ayah, in this order (the merge order is not reversible — cards first):

```
node tools/merge-tadabbur-notes.js tools/wip/round11/<s>_<a>-notes.js --write
node tools/merge-articles.js tools/wip/round11/<s>_<a>-articles.js js/tadabbur-articles \
  TADABBUR_ARTICLES js/tadabbur-data.js TADABBUR_NOTES --band 1200-2000 --write
node tools/build-article-index.js
sed -i 's/?v=N/?v=N+1/g' index.html sw.js && sed -i 's/lq-vN/lq-vN+1/' sw.js
node tests/run.js
# headless Bengali check, below
git add -A && git commit -F -   # message written after the browser check
```

Push and deploy only after every tenth ayah, then verify live:

```
git push origin main && git push pro main
firebase deploy --only hosting
curl -s "https://learn-quran-pro.web.app/sw.js?cb=$RANDOM" | grep -o 'lq-v[0-9]*' | head -1
```

## Two things that cost time this session — don't repeat them

**1. The notes subject file is `js/tadabbur-data.js`, not `js/ponder.js`.**
Passing `js/ponder.js` to `merge-articles.js` fails with "TADABBUR_NOTES in js/ponder.js
yielded no subject ids" *after* the cards have already been written. Harmless, but
re-run only the articles step; do not re-run the notes merge.

**2. `qa/run.js` takes a JSON step array as argv[2], and `LQArticle.html()` needs a
localiser or it renders English.** The signature is `html(module, id, opts)` — the
default `lc` returns `x.en`, so a Bengali check without `opts.lc` reports zero Bengali
characters. The working invocation:

```
node qa/run.js '[{"lang":"bn"},
 {"eval":"LQ.Modules.load(\"tadabbur\").then(()=>\"loaded\")","waitMs":3000},
 {"eval":"(async()=>{await LQArticle.load(\"tadabbur\",\"11:84\");const h=LQArticle.html(\"tadabbur\",\"11:84\",{lc:x=>(x&&(x.bn||x.en))||\"\"});const d=document.createElement(\"div\");d.innerHTML=h;const t=d.textContent.trim();return {sections:LQArticle.get(\"tadabbur\",\"11:84\").sections.length,words:t.split(/\\s+/).length,bengali:(t.match(/[\\u0980-\\u09FF]/g)||[]).length};})()"}]'
```

There is no `#tab-ponder`; the module id is `tadabbur` and the lazy bundle must be
loaded with `LQ.Modules.load('tadabbur')` before `LQArticle` exists.

**3. Drafters die with nothing saved when the API drops.** Two agents were lost to an
`EAI_AGAIN` server error mid-draft and left no partial files. Tell every drafter to
write each file the moment it has content and extend it in place.

## What the drafter brief must carry

The full brief pattern is in the commit history of this session; the parts that matter:
the reading order (skill → `tools/wip/round11/SOURCE-GATE.md` → `HEADINGS.md` → the
three specs → a recent shipped pair for register), the hard numbers (1,400–1,800 EN
words aiming ~1,700, 7–9 sections, 55–110 words a paragraph, headings 2–6 words unique
in **both** languages, card reflection 100–130 words, `lessonEn` under 35), the source
gate verbatim, the accuracy rules, and a per-ayah list of watch-points naming the
specific disputes that verse carries. The verbatim gate block at the end of the brief
is what makes the reports checkable — keep it.

Ayah-specific watch-points are worth writing by hand each time. The ones that caught
real problems this round: telling the 11:40 drafter to attribute every count of who
believed rather than state one (it then dropped al-Qurtubi's Ham report, which has no
chain and is racially defamatory); telling the 11:73 drafter not to import the 33:33
dispute; telling the 11:47 drafter never to say in the article's own voice that a
prophet erred.

## Standing quality rules these twenty entries were held to

- Nothing cited from memory. Every tafsir fetched for that exact verse; every hadith
  confirmed on a quranx page actually fetched (sunnah.com 403s here); the collector's
  own grading reported and never upgraded.
- Genuine disagreements stay disagreements, with both names, and the article takes no
  position. Roughly every second verse this round had one.
- One collection's wording quoted whole; variants never blended.
- Arabic word counts counted in `data/quran-json/<surah>.json`, never recalled.
- Both languages carry the same numbers, attributions and refs.
- On a verse about a destroyed or condemned people: state plainly that it describes
  what the text describes and licenses nothing against any living community.
- Drop what cannot be confirmed and say so in the commit message rather than softening
  it. Several entries this round name what they dropped and why.

## Open items, none blocking

- `data/translations/bn.json` 6:110 drops the كما لم يؤمنوا به أول مرة clause. A real
  omission, awaiting the user's call the way 4:163 was.
- `bn.json` 4:171 renders *rūḥun minhu* as "নির্দেশ" — left alone as defensible.
- Tailwind Play CDN swap analysed and ready; blocked only on a dark-mode accent choice.
- 17 MiB precache.
- BANGLA-STYLE.md says prophets take `(আ)`, but shipped articles use `(আঃ)` 819 times vs 24. Drafts follow the shipped form; the guide or the 24 need reconciling.
- The Hajj quick link added at v278 points to a Bengali-only guide but shows in all
  fifteen languages; never settled.
