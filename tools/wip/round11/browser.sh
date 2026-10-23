#!/usr/bin/env bash
# Headless bn render check for one shipped key -> audit/<key>/BROWSER.txt. Re-runnable on its own.
# usage: tools/wip/round11/browser.sh 2:2   (Apache down? QA_BASE=http://127.0.0.1:8099, see memory qa-harness-without-apache)
cd "$(dirname "$0")/../../.."
KEY="$1"; B="${KEY/:/_}"; W=tools/wip/round11
Q='[{"lang":"bn"},{"eval":"LQ.Modules.load(\"tadabbur\").then(()=>\"loaded\")","waitMs":3000},{"eval":"(async()=>{await LQArticle.load(\"tadabbur\",\"K\");const h=LQArticle.html(\"tadabbur\",\"K\",{lc:x=>(x&&(x.bn||x.en))||\"\"});const d=document.createElement(\"div\");d.innerHTML=h;const t=d.textContent.trim();return {sections:LQArticle.get(\"tadabbur\",\"K\").sections.length,words:t.split(/\\s+/).length,bengali:(t.match(/[\\u0980-\\u09FF]/g)||[]).length};})()"}]'
QA=$(node qa/run.js "${Q//K/$KEY}" 2>&1 | grep -E '"result"|"errors"|consoleErrors|fetchFails' | tail -4 || true); echo "$QA"
mkdir -p $W/audit/$B; node -e '
const t=process.argv[1];const r=JSON.parse(JSON.parse((t.match(/"result": (".*")/)||[,"\"{}\""])[1]));
const clean=/"errors": \[\]/.test(t)&&/"consoleErrors": \[\]/.test(t);
console.log(`Browser (headless, bn): ${r.sections} sections, ${(r.words||0).toLocaleString("en")} rendered words, ${(r.bengali||0).toLocaleString("en")} Bengali\ncharacters, ${clean?"no console errors":"CHECK CONSOLE ERRORS"}. Tests pass.`)' "$QA" > $W/audit/$B/BROWSER.txt; cat $W/audit/$B/BROWSER.txt
if [ -f $W/audit/$B/COMMIT.md ]; then echo "commit draft: $W/audit/$B/COMMIT.md"; fi
