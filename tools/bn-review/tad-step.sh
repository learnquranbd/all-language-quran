#!/usr/bin/env bash
# Save one reviewed Tadabbur packet: apply its Bengali fixes, test, commit only that shard, record progress.
#   tools/bn-review/tad-step.sh <surah> <packet-number>
set -euo pipefail
cd "$(dirname "$0")/../.."
S=$1 R=$2 C="TADABBUR_ARTICLES@$S" F="js/tadabbur-articles/$S.js"
N=$(ls -d "tools/bn-review/work/$C"/R* | wc -l)
node tools/bn-review/bn.js apply "$C" --write
npm test --silent >/dev/null || { echo "TESTS FAILED"; npm test 2>&1 | grep -v '^ *ok' | head -30; exit 1; }
sed -i -E "s/^(- Progress \(shard: packets done\):.*)\b$S: [0-9]+\/[0-9]+/\1$S: $R\/$N/" CLAUDE-LOG.md
grep -q "^- Progress (shard: packets done):.*\b$S: " CLAUDE-LOG.md || sed -i -E "s/^(- Progress \(shard: packets done\):.*)$/\1, $S: $R\/$N/" CLAUDE-LOG.md
git add "$F" CLAUDE-LOG.md
if git diff --cached --quiet; then echo "no change in $F"; else
  git commit -q -m "Bengali: Tadabbur $S articles read naturally ($R/$N)"
fi
git log --oneline -1; grep '^- Progress (shard' CLAUDE-LOG.md
