#!/usr/bin/env python3
"""
Merge translated UI strings (scratchpad/i18n/<lang>.done.json) into the matching
language block in js/translations.js. Inserts each new key right after the block's
opening `  <lang>: {` line; skips keys already present so it's safe to re-run.

Usage: python3 scripts/merge_i18n.py <i18n_dir> [lang ...]
"""
import json, os, re, sys, glob

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TR = os.path.join(ROOT, "js", "translations.js")


def block_bounds(lines, lang):
    start = None
    for i, ln in enumerate(lines):
        if ln.rstrip("\n") == f"  {lang}: {{":
            start = i
            break
    if start is None:
        return None, None
    for j in range(start + 1, len(lines)):
        if re.match(r"^  \},?\s*$", lines[j]):
            return start, j
    return start, None


def existing_keys(lines, start, end):
    ks = set()
    for ln in lines[start + 1:end]:
        m = re.match(r"^\s{4}([A-Za-z0-9_]+):", ln)
        if m:
            ks.add(m.group(1))
    return ks


def main():
    idir = sys.argv[1]
    only = set(sys.argv[2:])
    lines = open(TR, encoding="utf-8").read().split("\n")
    lines = [l + "\n" for l in lines]  # normalize
    total_added = 0
    for f in sorted(glob.glob(os.path.join(idir, "*.done.json"))):
        lang = os.path.basename(f).split(".")[0]
        if only and lang not in only:
            continue
        try:
            done = json.load(open(f, encoding="utf-8"))
        except Exception as e:
            print(f"[{lang}] SKIP - bad JSON: {e}")
            continue
        start, end = block_bounds(lines, lang)
        if start is None:
            print(f"[{lang}] SKIP - no block found")
            continue
        have = existing_keys(lines, start, end)
        ins = []
        for k, v in done.items():
            if k in have:
                continue
            ins.append(f"    {k}: {json.dumps(v, ensure_ascii=False)},\n")
        if not ins:
            print(f"[{lang}] nothing new")
            continue
        lines[start + 1:start + 1] = ins
        total_added += len(ins)
        print(f"[{lang}] +{len(ins)} keys")
    open(TR, "w", encoding="utf-8").write("".join(lines))
    print("TOTAL added:", total_added)


if __name__ == "__main__":
    main()
