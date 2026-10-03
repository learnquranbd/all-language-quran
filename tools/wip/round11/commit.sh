#!/usr/bin/env bash
# Commit one shipped ayah: title + audit/<key>/COMMIT.md + BROWSER.txt + attribution,
# then mark the log row DONE and record plan usage (so budget.js learns the per-ayah cost).
# usage: tools/wip/round11/commit.sh 13:3 "the phrase for the title"
set -e
cd "$(dirname "$0")/../../.."
KEY="$1"; PHRASE="$2"; [ -z "$PHRASE" ] && { echo 'usage: commit.sh <key> "<title phrase>"'; exit 1; }
B="${KEY/:/_}"; A=tools/wip/round11/audit/$B
V=$(grep -o 'lq-v[0-9]*' sw.js | head -1 | grep -o '[0-9]*')
[ -f $A/COMMIT.md ] && [ -f $A/BROWSER.txt ] || { echo "missing $A/COMMIT.md or BROWSER.txt (run ship.sh first)"; exit 1; }
{ echo "v$V: Tadabbur $KEY — $PHRASE"; echo; cat $A/COMMIT.md; echo; cat $A/BROWSER.txt; } > /tmp/lq-commit-msg
git add -A -- js index.html sw.js
git commit -q -F /tmp/lq-commit-msg
git log --oneline -1
sed -i "s/^| $KEY *|.*$/| $KEY | v$V | DONE |/" CLAUDE-LOG.md
node tools/wip/round11/budget.js --mark "$KEY" | tail -2
