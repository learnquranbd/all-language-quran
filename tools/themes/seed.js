// Write data/themes/<id>.json seeds from the legacy extract (refs + live resources).
// Never overwrites a page that already has prose (status !== 'seed').
const fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, '../..');
const { THEMES } = require('./registry.js');
for (const t of THEMES) {
  const out = path.join(ROOT, 'data/themes', t.id + '.json');
  if (fs.existsSync(out) && JSON.parse(fs.readFileSync(out, 'utf8')).status !== 'seed') { console.log('skip (has prose)', t.id); continue; }
  const L = JSON.parse(fs.readFileSync(path.join(__dirname, 'legacy', t.id + '.json'), 'utf8'));
  const videos = L.videos.filter(v => v.live).map(v => ({
    title: (v.title || v.ytTitle || '').trim(), ytId: v.ytId, list: v.list,
    thumb: v.ytId ? undefined : v.thumb, channel: v.channel || '', watch: v.watch }));
  const reading = L.articles.filter(a => a.status === 200).map(a => ({ title: a.title, url: a.url, site: new URL(a.url).hostname.replace(/^www\./, ''), lang: 'bn' }));
  const page = { id: t.id, status: 'seed', title: { en: t.en, bn: t.bn }, tagline: null, intro: [], sections: [], practice: [],
    refs: L.refs, videos, reading, sources: [], related: [] };
  fs.writeFileSync(out, JSON.stringify(page, null, 1) + '\n');
  console.log('seeded', t.id, L.refs.length, 'refs', videos.length, 'videos', reading.length, 'reading');
}
