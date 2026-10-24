#!/usr/bin/env bash
# Depth-pass twin of ship.sh: replaces a shipped short article with the deep draft, keeps the card.
# Does NOT commit (the commit message is written after reading these numbers).
# usage: tools/wip/round11/ship-upgrade.sh 2:2
set -eo pipefail
cd "$(dirname "$0")/../../.."
KEY="$1"; [ -z "$KEY" ] && { echo "usage: ship.sh <key>"; exit 1; }
B="${KEY/:/_}"; W=tools/wip/round11
OLD=$(grep -o 'lq-v[0-9]*' sw.js | head -1 | grep -o '[0-9]*'); NEW=$((OLD+1))
echo "depth pass: card kept, article replaced"
node tools/wip/round11/nukta.js $W/$B-articles.js --write
node tools/merge-articles.js $W/$B-articles.js js/tadabbur-articles TADABBUR_ARTICLES js/tadabbur-data.js TADABBUR_NOTES --band 1200-2000 --replace --write | grep -E 'subjects|CLEAN|!!'
node tools/build-article-index.js | tail -1
sed -i "s/?v=$OLD/?v=$NEW/g" index.html sw.js && sed -i "s/lq-v$OLD/lq-v$NEW/" sw.js
echo "bumped v$OLD -> v$(grep -o 'lq-v[0-9]*' sw.js | head -1 | grep -o '[0-9]*'); stale ?v=$OLD left: $(cat index.html sw.js | grep -c "?v=$OLD" || true)"
# log: mark MERGED so a dead session knows to test+commit, not re-merge
sed -i "s/^| $KEY *|.*$/| $KEY | v$NEW | MERGED+TESTED (uncommitted) — if session died here: run tests, commit |/" CLAUDE-LOG.md
T=$(node tests/run.js 2>&1 | tail -2 | grep .); echo "$T"; echo "$T" | grep -q "all checks passed" || { echo "TESTS FAILED: fix before commit (log row stays MERGED+TESTED)"; exit 1; }
tools/wip/round11/browser.sh "$KEY"
