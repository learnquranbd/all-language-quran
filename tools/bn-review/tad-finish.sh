#!/usr/bin/env bash
# Finish one reviewed Tadabbur shard: save packets 1..N in order (one commit each), run the spelling
# pass, check for broken য় (জ় = a spelling swap hit a decomposed য়), test, commit. Prints one line.
#   tools/bn-review/tad-finish.sh <surah> <packets>
set -euo pipefail
cd "$(dirname "$0")/../.."
S=$1 N=$2 F="js/tadabbur-articles/$S.js"
last=$(tools/bn-review/tad-steps.sh "$S" 1 "$N" 2>&1 | grep -E "fixes|FAIL|rror" | tail -1)
swaps=$(node tools/bn-review/tad-spell.js "$S" | grep -o '[0-9]*$')
broken=$(grep -c 'জ়' "$F" || true)
[ "$broken" = 0 ] || { echo "shard $S: BROKEN য় x$broken, not committed"; exit 1; }
npm test --silent >/dev/null 2>&1 || { echo "shard $S: TESTS FAILED"; exit 1; }
if ! git diff --quiet -- "$F"; then
  git add "$F" && git commit -q -m "Bengali: one spelling per word in Tadabbur $S articles"
fi
echo "shard $S: $last | spelling swaps $swaps | $(git log --oneline -1)"
