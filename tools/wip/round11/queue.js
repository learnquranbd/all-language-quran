// Print the next N uncovered Tadabbur targets (ranges expanded before comparing).
// usage: node tools/wip/round11/queue.js [N=6]
const path = require('path'), fs = require('fs');
const ROOT = path.join(__dirname, '../../..');
const L = require(path.join(ROOT, 'tests/lib.js'));
const N = +(process.argv[2] || 6);
const have = Object.keys(L.get(L.load('js/tadabbur-data.js'), 'TADABBUR_NOTES'));
const t = JSON.parse(fs.readFileSync(path.join(ROOT, 'tools/tadabbur-targets.json'), 'utf8'));
const span = k => { const m = k.match(/^(\d+):(\d+)(?:-(\d+))?$/); if (!m) return []; const r = []; for (let a = +m[2]; a <= (+m[3] || +m[2]); a++) r.push(m[1] + ':' + a); return r; };
const cov = new Set(have.flatMap(span));
const left = t.order.filter(k => !span(k).some(v => cov.has(v)));
console.log(`${have.length} shipped, ${left.length} targets left. Next: ${left.slice(0, N).join(' ')}`);
