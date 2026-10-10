// Build the base map for "Places in the Quran": land, lakes and the four rivers that
// matter here (Nile, Euphrates, Tigris, Jordan), clipped to Egypt–Iran / Yemen–Anatolia,
// projected and simplified into SVG path strings. Source: Natural Earth 1:50m (public
// domain), downloaded into tools/places/work/ (gitignored):
//   ne_50m_land.geojson, ne_50m_lakes.geojson, ne_50m_rivers_lake_centerlines.geojson
//   from https://github.com/nvkelso/natural-earth-vector/tree/master/geojson
// usage: node tools/places/build-map.js   → data/places/basemap.json
const fs = require('fs'), path = require('path');
const W = path.join(__dirname, 'work'), ROOT = path.join(__dirname, '../..');
const R = f => JSON.parse(fs.readFileSync(path.join(W, f), 'utf8'));
// Equirectangular, scaled for latitude 27°. The page projects place coordinates with
// the same numbers (basemap.json "proj"), so pins and coastline always agree.
const proj = { lon0: 24, lon1: 61, lat0: 11, lat1: 42, k: 20, c: Math.cos(27 * Math.PI / 180) };
const X = lon => (lon - proj.lon0) * proj.k * proj.c, Y = lat => (proj.lat1 - lat) * proj.k;
const width = +X(proj.lon1).toFixed(1), height = +Y(proj.lat0).toFixed(1);
const B = { x0: proj.lon0 - 1, x1: proj.lon1 + 1, y0: proj.lat0 - 1, y1: proj.lat1 + 1 };

// Sutherland–Hodgman against the padded box, in lon/lat.
function clipRing(ring) {
  const edges = [[p => p[0] >= B.x0, (a, b) => cut(a, b, 0, B.x0)], [p => p[0] <= B.x1, (a, b) => cut(a, b, 0, B.x1)],
    [p => p[1] >= B.y0, (a, b) => cut(a, b, 1, B.y0)], [p => p[1] <= B.y1, (a, b) => cut(a, b, 1, B.y1)]];
  function cut(a, b, i, v) { const t = (v - a[i]) / (b[i] - a[i]); return [a[0] + t * (b[0] - a[0]), a[1] + t * (b[1] - a[1])]; }
  let out = ring;
  for (const [inside, inter] of edges) {
    const inp = out; out = [];
    for (let i = 0; i < inp.length; i++) {
      const cur = inp[i], prev = inp[(i + inp.length - 1) % inp.length];
      if (inside(cur)) { if (!inside(prev)) out.push(inter(prev, cur)); out.push(cur); }
      else if (inside(prev)) out.push(inter(prev, cur));
    }
    if (!out.length) break;
  }
  return out;
}
const inBox = p => p[0] >= B.x0 && p[0] <= B.x1 && p[1] >= B.y0 && p[1] <= B.y1;
// project, then drop points within `tol` px of the last kept one
function pathOf(pts, close, tol = 0.8) {
  const kept = [];
  for (const p of pts) {
    const q = [X(p[0]), Y(p[1])], l = kept[kept.length - 1];
    if (!l || Math.hypot(q[0] - l[0], q[1] - l[1]) >= tol) kept.push(q);
  }
  if (kept.length < (close ? 3 : 2)) return '';
  return 'M' + kept.map(q => q[0].toFixed(1) + ' ' + q[1].toFixed(1)).join('L') + (close ? 'Z' : '');
}
const polys = g => g.type === 'Polygon' ? [g.coordinates] : g.type === 'MultiPolygon' ? g.coordinates : [];
const lines = g => g.type === 'LineString' ? [g.coordinates] : g.type === 'MultiLineString' ? g.coordinates : [];

const land = R('ne_50m_land.geojson').features.flatMap(f => polys(f.geometry))
  .map(p => pathOf(clipRing(p[0]), true)).filter(Boolean).join('');
const lakes = R('ne_50m_lakes.geojson').features.flatMap(f => polys(f.geometry))
  .map(p => pathOf(clipRing(p[0]), true, 0.5)).filter(Boolean).join('');
const rivers = R('ne_50m_rivers_lake_centerlines.geojson').features
  .filter(f => /^(Nile|Euphrates|Tigris|Jordan)$/.test(f.properties.name || ''))
  .flatMap(f => lines(f.geometry)).map(l => pathOf(l.filter(inBox), false, 0.6)).filter(Boolean).join('');

const out = { source: 'Natural Earth 1:50m (public domain)', width, height, proj, land, lakes, rivers };
fs.mkdirSync(path.join(ROOT, 'data/places'), { recursive: true });
fs.writeFileSync(path.join(ROOT, 'data/places/basemap.json'), JSON.stringify(out) + '\n');
console.log(`basemap ${width}x${height}: land ${(land.length / 1024).toFixed(1)} KB, lakes ${(lakes.length / 1024).toFixed(1)} KB, rivers ${(rivers.length / 1024).toFixed(1)} KB`);
