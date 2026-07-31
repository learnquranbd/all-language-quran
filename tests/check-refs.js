/**
 * Every Quran reference in every dataset must point at a verse that exists.
 *
 * A bad ref renders as a dead chip or an empty verse panel — no error, just
 * missing content. Covers ~2,900 refs across all data files, ranges included.
 */
const { load, get, constNames, dataFiles, badRef } = require('./lib.js');

const REF_KEYS = new Set(['ref', 'refs', 'ayah', 'ayahs', 'verse', 'verses']);
const problems = [];
let checked = 0;

function walk(node, pathStr, file) {
  if (node == null) return;
  if (Array.isArray(node)) return node.forEach((n, i) => walk(n, `${pathStr}[${i}]`, file));
  if (typeof node !== 'object') return;
  for (const [k, v] of Object.entries(node)) {
    const p = `${pathStr}.${k}`;
    if (REF_KEYS.has(k)) {
      for (const r of (Array.isArray(v) ? v : [v])) {
        if (typeof r !== 'string') continue;
        for (const part of r.replace(/^Quran\s+/i, '').split(/\s*,\s*/)) {
          if (!/^\d+:\d+/.test(part)) continue;
          checked++;
          const why = badRef(part);
          if (why) problems.push(`${file} ${p} = "${r}" -> ${why}`);
        }
      }
    }
    walk(v, p, file);
  }
}

for (const file of dataFiles()) {
  let sb;
  try { sb = load(file); } catch (e) { continue; }
  for (const name of constNames(file)) walk(get(sb, name), name, file);
}

module.exports = {
  name: 'Quran references resolve',
  run() {
    return { ok: problems.length === 0, detail: `${checked} refs checked`, problems };
  },
};
