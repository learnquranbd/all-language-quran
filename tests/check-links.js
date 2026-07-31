/**
 * Cross-dataset referential integrity.
 *
 * An entry pointing at an id that does not exist renders as a blank panel or a
 * silently missing chip. This found SEERAH_LESSONS tagged event 'banu_mustaliq'
 * against an event whose id is 'bani_mustaliq' — two lessons quietly lost their
 * context pill, no error anywhere.
 */
const { load, get } = require('./lib.js');

const problems = [];
const passed = [];

function idsOf(arr, key = 'id') {
  return new Set((arr || []).map((x) => x && x[key]).filter(Boolean));
}
function check(label, refs, valid, noun) {
  const bad = [...new Set((refs || []).filter((r) => r && !valid.has(r)))];
  if (bad.length) problems.push(`${label}: ${bad.length} dangling -> ${bad.slice(0, 8).join(', ')}`);
  else passed.push(`${label} (${(refs || []).length} refs -> ${valid.size} ${noun})`);
}

try {
  const qa = load('js/learn-quranic-arabic-data.js');
  check('QA_LESSONS.unit -> QA_UNITS.id',
    (get(qa, 'QA_LESSONS') || []).map((l) => l.unit),
    idsOf(get(qa, 'QA_UNITS')), 'units');
} catch (e) { problems.push('QA check failed: ' + e.message); }

try {
  const s = load('js/seerah-data.js');
  const events = get(s, 'SEERAH_EVENTS') || [];
  const evKeys = new Set(events.flatMap((e) => [e.id, e.key, e.slug].filter(Boolean)));
  const eras = new Set((get(s, 'SEERAH_ERAS') || []).map((e) => e.id || e.key).filter(Boolean));
  check('SEERAH_EVENTS.era -> SEERAH_ERAS', events.map((e) => e.era).filter(Boolean), eras, 'eras');
  check('SEERAH_LESSONS.event -> SEERAH_EVENTS.id',
    (get(s, 'SEERAH_LESSONS') || []).map((l) => l.event).filter(Boolean), evKeys, 'events');
} catch (e) { problems.push('Seerah check failed: ' + e.message); }

try {
  const p = load('js/prophets-data.js');
  const pids = idsOf(get(p, 'PROPHETS_DATA'));
  check('PROPHETS_MENTION_POS keys -> PROPHETS_DATA.id', Object.keys(get(p, 'PROPHETS_MENTION_POS') || {}), pids, 'prophets');
  check('PROPHETS_DEPTH keys -> PROPHETS_DATA.id', Object.keys(get(p, 'PROPHETS_DEPTH') || {}), pids, 'prophets');
  check('PROPHETS_MENTIONS.id -> PROPHETS_DATA.id',
    (get(p, 'PROPHETS_MENTIONS') || []).map((m) => m.id || m.pid).filter(Boolean), pids, 'prophets');
} catch (e) { problems.push('Prophets check failed: ' + e.message); }

try {
  const t = load('js/tajweed-data.js');
  const lessons = new Set(Object.keys(get(t, 'TAJWEED_LESSONS') || {}));
  check('TAJWEED_RULE_EXAMPLES keys -> TAJWEED_LESSONS', Object.keys(get(t, 'TAJWEED_RULE_EXAMPLES') || {}), lessons, 'lessons');
  check('TAJWEED_PATH rules -> TAJWEED_LESSONS',
    (get(t, 'TAJWEED_PATH') || []).flatMap((x) => x.rules || x.keys || []), lessons, 'lessons');
} catch (e) { problems.push('Tajweed check failed: ' + e.message); }

try {
  const s = load('js/sahaba-data.js');
  const eras = new Set((get(s, 'SAHABA_ERAS') || []).map((e) => e.id || e.key).filter(Boolean));
  check('SAHABA_DATA.era -> SAHABA_ERAS', (get(s, 'SAHABA_DATA') || []).map((x) => x.era).filter(Boolean), eras, 'eras');
} catch (e) { problems.push('Sahaba check failed: ' + e.message); }

module.exports = {
  name: 'cross-dataset references',
  run() {
    return { ok: problems.length === 0, detail: `${passed.length} link types clean`, problems };
  },
};
