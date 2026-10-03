#!/usr/bin/env bash
# Orchestrator pipeline for one gated draft: merge -> index -> bump -> test -> headless bn check -> log.
# Does NOT commit (the commit message is written after reading these numbers).
# usage: tools/wip/round11/ship.sh 12:30
set -e
cd "$(dirname "$0")/../../.."
KEY="$1"; [ -z "$KEY" ] && { echo "usage: ship.sh <key>"; exit 1; }
B="${KEY/:/_}"; W=tools/wip/round11
OLD=$(grep -o 'lq-v[0-9]*' sw.js | head -1 | grep -o '[0-9]*'); NEW=$((OLD+1))
node tools/merge-tadabbur-notes.js $W/$B-notes.js --write | grep -E 'CLEAN|!!|merged'
node tools/merge-articles.js $W/$B-articles.js js/tadabbur-articles TADABBUR_ARTICLES js/tadabbur-data.js TADABBUR_NOTES --band 1200-2000 --write | grep -E 'subjects|CLEAN|!!'
node tools/build-article-index.js | tail -1
sed -i "s/?v=$OLD/?v=$NEW/g" index.html sw.js && sed -i "s/lq-v$OLD/lq-v$NEW/" sw.js
echo "bumped v$OLD -> v$(grep -o 'lq-v[0-9]*' sw.js | head -1 | grep -o '[0-9]*'); stale ?v=$OLD left: $(cat index.html sw.js | grep -c "?v=$OLD" || true)"
# log: mark MERGED so a dead session knows to test+commit, not re-merge
sed -i "s/^| $KEY *|.*$/| $KEY | v$NEW | MERGED+TESTED (uncommitted) — if session died here: run tests, commit |/" CLAUDE-LOG.md
T=$(node tests/run.js 2>&1 | tail -2 | grep .); echo "$T"; echo "$T" | grep -q "all checks passed" || { echo "TESTS FAILED: fix before commit (log row stays MERGED+TESTED)"; exit 1; }
Q='[{"lang":"bn"},{"eval":"LQ.Modules.load(\"tadabbur\").then(()=>\"loaded\")","waitMs":3000},{"eval":"(async()=>{await LQArticle.load(\"tadabbur\",\"K\");const h=LQArticle.html(\"tadabbur\",\"K\",{lc:x=>(x&&(x.bn||x.en))||\"\"});const d=document.createElement(\"div\");d.innerHTML=h;const t=d.textContent.trim();return {sections:LQArticle.get(\"tadabbur\",\"K\").sections.length,words:t.split(/\\s+/).length,bengali:(t.match(/[\\u0980-\\u09FF]/g)||[]).length};})()"}]'
QA=$(node qa/run.js "${Q//K/$KEY}" 2>&1 | grep -E '"result"|"errors"|consoleErrors|fetchFails' | tail -4); echo "$QA"
mkdir -p $W/audit/$B; node -e '
const t=process.argv[1];const r=JSON.parse(JSON.parse((t.match(/"result": (".*")/)||[,"\"{}\""])[1]));
const clean=/"errors": \[\]/.test(t)&&/"consoleErrors": \[\]/.test(t);
console.log(`Browser (headless, bn): ${r.sections} sections, ${(r.words||0).toLocaleString("en")} rendered words, ${(r.bengali||0).toLocaleString("en")} Bengali\ncharacters, ${clean?"no console errors":"CHECK CONSOLE ERRORS"}. Tests pass.`)' "$QA" > $W/audit/$B/BROWSER.txt; cat $W/audit/$B/BROWSER.txt
if [ -f $W/audit/$B/COMMIT.md ]; then echo "commit draft: $W/audit/$B/COMMIT.md"; fi
