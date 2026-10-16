#!/usr/bin/env bash
# Save packets FROM..TO of a Tadabbur shard, one commit each, in order: tools/bn-review/tad-steps.sh <surah> <from> <to>
# (bn.js apply reads every packet, so later packets are held aside while each one is applied).
set -euo pipefail
cd "$(dirname "$0")/../.."
S=$1 FROM=$2 TO=$3 W="tools/bn-review/work/TADABBUR_ARTICLES@$S"
for f in "$W"/R*/bn-fixes.json; do n=$(basename "$(dirname "$f")"); n=${n#R}; [ "$n" -ge "$FROM" ] && mv "$f" "$f.hold"; done
for r in $(seq "$FROM" "$TO"); do
  mv "$W/R$r/bn-fixes.json.hold" "$W/R$r/bn-fixes.json"
  tools/bn-review/tad-step.sh "$S" "$r"
done
