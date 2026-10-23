// Depth pass: shipped Tadabbur articles still under the deep template (< 1,100 EN words), mushaf order.
// usage: node tools/wip/round11/upgrade-queue.js [N=6]
const path = require('path');
const L = require(path.join(__dirname, '../../../tests/lib.js'));
const N = +(process.argv[2] || 6);
const A = L.loadTadabburArticles();
const w = s => String(s || '').split(/\s+/).filter(Boolean).length;
const words = k => A[k].sections.reduce((t, s) => t + s.p.reduce((u, p) => u + w(p.en), 0), 0);
const ord = (a, b) => { const [x, y] = a.split(':'), [p, q] = b.split(':'); return x - p || parseInt(y) - parseInt(q); };
const left = Object.keys(A).filter(k => words(k) < 1100).sort(ord);
console.log(`${Object.keys(A).length - left.length} deep, ${left.length} short left. Next: ${left.slice(0, N).join(' ')}`);
