// Mark each legacy video live/dead via YouTube oEmbed (200 = still public).
const fs = require('fs'), path = require('path');
const dir = path.join(__dirname, 'legacy');
const idOf = u => { const m = String(u).match(/(?:v=|embed\/|youtu\.be\/)([\w-]{11})/); return m && m[1]; };
const listOf = u => { const m = String(u).match(/list=([\w-]+)/); return m && m[1]; };
(async () => {
  for (const f of fs.readdirSync(dir).filter(f => f.endsWith('.json'))) {
    const d = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));
    for (const v of d.videos) {
      const id = idOf(v.url), list = listOf(v.url);
      const watch = id ? `https://www.youtube.com/watch?v=${id}` : list ? `https://www.youtube.com/playlist?list=${list}` : v.url;
      try {
        const r = await fetch('https://www.youtube.com/oembed?format=json&url=' + encodeURIComponent(watch));
        v.live = r.ok; if (r.ok) { const j = await r.json(); v.ytTitle = j.title; v.channel = j.author_name; }
      } catch (e) { v.live = null; }
      v.watch = watch; v.ytId = id || null; v.list = list || null;
    }
    fs.writeFileSync(path.join(dir, f), JSON.stringify(d, null, 1));
    const live = d.videos.filter(v => v.live).length;
    if (d.videos.length) console.log(d.id.padEnd(22), `${live}/${d.videos.length} live`);
  }
})();
