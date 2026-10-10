/**
 * Places in the Quran — the places the Quran names or clearly refers to, on a map.
 *
 * Data: data/places/basemap.json (Natural Earth 1:50m land, lakes and rivers, already
 * projected; built by tools/places/build-map.js) and data/places/places.json (one entry
 * per place: coordinates, how certain the location is, the ayat, and a short audited
 * {en, bn} text; built by tools/places/merge.js). Both are fetched the first time the
 * tab opens.
 *
 * The map is plain SVG. Pins that would overlap at the current zoom are drawn as one
 * numbered cluster; tapping it zooms to that cluster (the Ḥaram sites sit within a few
 * kilometres of each other). A place whose location is only a region is a dashed area,
 * and one with no known location is listed but not drawn.
 *
 * Journeys (data/places/journeys.json, built by tools/places/merge-journeys.js) are drawn
 * one at a time as a curved, arrowed route through their stops; the stops are place ids
 * (coordinates come from places.json) or free points. Seas, rivers and regions carry
 * faint labels for orientation. The map pans by dragging and zooms by wheel, pinch or the
 * +/− buttons; while a gesture runs only the viewBox changes, and the pins are redrawn
 * for the new zoom when it ends.
 *
 * Renders into #places-container (tab "places").
 */
/* eslint-disable no-unused-vars */
const PLACES_UI = {
  places_title:   { en: 'Places in the Quran', bn: 'কুরআনের স্থানসমূহ' },
  pl_intro:       { en: 'Where the places the Quran names or refers to lie. Tap a pin or a card to see the place, what the Quran says there, and its ayat.', bn: 'কুরআনে যেসব স্থানের নাম বা ইঙ্গিত এসেছে, সেগুলো কোথায়। কোনো পিন বা কার্ডে চাপ দিন: স্থানটি, সেখানে কুরআন কী বলে, আর তার আয়াতগুলো দেখবেন।' },
  pl_known:       { en: 'Known site', bn: 'নিশ্চিত স্থান' },
  pl_traditional: { en: 'Traditional identification', bn: 'প্রচলিত শনাক্তকরণ' },
  pl_uncertain:   { en: 'Region only', bn: 'কেবল অঞ্চল জানা' },
  pl_unknown:     { en: 'Location unknown', bn: 'অবস্থান অজানা' },
  pl_reset:       { en: 'Whole map', bn: 'পুরো মানচিত্র' },
  pl_read:        { en: 'Read all its ayat', bn: 'সব আয়াত পড়ুন' },
  pl_where:       { en: 'Where it is', bn: 'কোথায়' },
  pl_quran:       { en: 'In the Quran', bn: 'কুরআনে' },
  pl_sources:     { en: 'Sources', bn: 'সূত্র' },
  pl_loading:     { en: 'Loading the map…', bn: 'মানচিত্র লোড হচ্ছে…' },
  pl_failed:      { en: 'The map could not be loaded.', bn: 'মানচিত্র লোড করা যায়নি।' },
  pl_group_P1:    { en: 'The Sanctuary and the Prophet\'s ﷺ time', bn: 'হারাম ও নবী ﷺ-এর যুগ' },
  pl_group_P2:    { en: 'Mūsā, the Israelites and the Holy Land', bn: 'মূসা, বনী ইসরাঈল ও পবিত্র ভূমি' },
  pl_group_P3:    { en: 'Earlier nations and other lands', bn: 'পূর্ববর্তী জাতি ও অন্যান্য ভূখণ্ড' },
  pl_same_spot:   { en: 'These places are at the same spot:', bn: 'এই স্থানগুলো একই জায়গায়:' },
  pl_zoom_hint:   { en: 'Numbered circles are several places close together: tap to zoom in.', bn: 'সংখ্যাযুক্ত বৃত্তে কাছাকাছি কয়েকটি স্থান আছে: চাপ দিলে কাছে যাবে।' },
  pl_pan_hint:    { en: 'Drag to move the map; pinch, Ctrl + scroll or + and − to zoom.', bn: 'মানচিত্র টেনে সরান; দুই আঙুলে, Ctrl চেপে স্ক্রল করে বা + ও − দিয়ে ছোট-বড় করুন।' },
  pl_zoom_in:     { en: 'Zoom in', bn: 'বড় করুন' },
  pl_zoom_out:    { en: 'Zoom out', bn: 'ছোট করুন' },
  pl_journeys:    { en: 'Journeys', bn: 'যাত্রাপথ' },
  pl_journeys_hint: { en: 'Tap a journey to draw its route on the map.', bn: 'কোনো যাত্রায় চাপ দিলে মানচিত্রে তার পথ আঁকা হবে।' },
  pl_route:       { en: 'The route', bn: 'পথটি' },
  pl_stops:       { en: 'Along the way', bn: 'পথের স্থানগুলো' },
  pl_sketch:      { en: 'The line only sketches the direction; it is not the road that was taken.', bn: 'রেখাটি কেবল দিক বোঝায়; এটি আসলে চলা পথ নয়।' },
  pl_through:     { en: 'Journeys through this place', bn: 'এই স্থান ছুঁয়ে যাওয়া যাত্রা' },
  pl_close:       { en: 'Close', bn: 'বন্ধ করুন' },
};
/** Faint orientation labels: seas, rivers, regions. `w` = largest view width (map units) at which it shows. */
const PLACES_REGIONS = [
  { kind: 'sea', lat: 33.6, lon: 27.5, en: 'Mediterranean Sea', bn: 'ভূমধ্যসাগর', w: 999 },
  { kind: 'sea', lat: 20.6, lon: 38.4, en: 'Red Sea', bn: 'লোহিত সাগর', w: 999, rot: 58 },
  { kind: 'sea', lat: 27.0, lon: 50.9, en: 'Persian Gulf', bn: 'পারস্য উপসাগর', w: 999, rot: 35 },
  { kind: 'sea', lat: 14.2, lon: 57.0, en: 'Arabian Sea', bn: 'আরব সাগর', w: 999 },
  { kind: 'sea', lat: 12.4, lon: 47.6, en: 'Gulf of Aden', bn: 'এডেন উপসাগর', w: 400, rot: -12 },
  { kind: 'river', lat: 26.3, lon: 32.2, en: 'Nile', bn: 'নীলনদ', w: 400, rot: 75 },
  { kind: 'river', lat: 34.6, lon: 41.6, en: 'Euphrates', bn: 'ফোরাত', w: 400, rot: -38 },
  { kind: 'river', lat: 34.9, lon: 43.9, en: 'Tigris', bn: 'দজলা', w: 400, rot: -60 },
  { kind: 'land', lat: 22.6, lon: 46.4, en: 'ARABIAN PENINSULA', bn: 'আরব উপদ্বীপ', w: 999 },
  { kind: 'land', lat: 25.6, lon: 38.0, en: 'al-Ḥijāz', bn: 'হিজাজ', w: 300, rot: 58 },
  { kind: 'land', lat: 25.0, lon: 44.6, en: 'Najd', bn: 'নজদ', w: 300 },
  { kind: 'land', lat: 15.0, lon: 45.2, en: 'Yemen', bn: 'ইয়েমেন', w: 999 },
  { kind: 'land', lat: 34.6, lon: 37.6, en: 'ash-Shām', bn: 'শাম', w: 999 },
  { kind: 'land', lat: 32.0, lon: 45.6, en: 'Iraq', bn: 'ইরাক', w: 999 },
  { kind: 'land', lat: 32.6, lon: 53.6, en: 'Persia', bn: 'পারস্য', w: 999 },
  { kind: 'land', lat: 39.2, lon: 33.0, en: 'Anatolia', bn: 'আনাতোলিয়া', w: 999 },
  { kind: 'land', lat: 25.0, lon: 29.0, en: 'Egypt', bn: 'মিসর', w: 999 },
  { kind: 'land', lat: 13.6, lon: 37.4, en: 'Abyssinia', bn: 'হাবশা', w: 999 },
  { kind: 'land', lat: 29.4, lon: 33.6, en: 'Sinai', bn: 'সিনাই', w: 300 },
];
const PLACES_TAFSIR = { 169: 'Ibn Kathīr', 14: 'Ibn Kathīr', 91: 'as-Saʿdī', 15: 'aṭ-Ṭabarī', 90: 'al-Qurṭubī', 94: 'al-Baghawī', 16: 'al-Muyassar', 168: 'Maʿārif al-Qurʾān' };
const PLACES_KIND = { city: '🏙️', sanctuary: '🕋', mountain: '⛰️', valley: '🏜️', land: '🗺️', battle: '⚔️', sea: '🌊', ruin: '🏛️' };

class QuranPlacesView {
  constructor() {
    this.container = document.getElementById('places-container');
    if (!this.container) return;
    this.language = (typeof appSettings !== 'undefined' && appSettings) ? (appSettings.get('language') || 'en') : 'en';
    this.map = null; this.places = null; this.failed = false;
    this.view = null;        // current viewBox {x, y, w, h}
    this.selected = null;    // place id
    this.journey = null;     // journey id whose route is drawn
    this.journeys = [];
    this.gesture = null;     // pointers of a drag or pinch in progress
    this.chooser = null;     // ids of places that share one spot (a cluster zoom can't split)
    window.addEventListener('tabChanged', (e) => {
      try { if (e && e.detail && e.detail.tabId === 'places') this.render(); } catch (_) { /* ignore */ }
    });
    window.addEventListener('settingChanged', (e) => {
      try {
        if (e && e.detail && e.detail.key === 'language') { this.language = e.detail.value || 'en'; if (this.rendered) this.render(); }
      } catch (_) { /* ignore */ }
    });
    this.container.addEventListener('click', (e) => this.onClick(e));
    this.container.addEventListener('pointerdown', (e) => this.onPointerDown(e));
    this.container.addEventListener('pointermove', (e) => this.onPointerMove(e));
    this.container.addEventListener('pointerup', (e) => this.onPointerUp(e));
    this.container.addEventListener('pointercancel', (e) => this.onPointerUp(e));
    this.container.addEventListener('wheel', (e) => this.onWheel(e), { passive: false });
  }

  // ── helpers ──────────────────────────────────────────────────────────
  tt(key) {
    try { const v = t(key, this.language); if (v && v !== key) return v; } catch (_) { /* ignore */ }
    const e = PLACES_UI[key];
    if (!e) return key;
    if (e[this.language]) return e[this.language];
    if (this.language !== 'en' && typeof CI18N !== 'undefined' && e.en) {
      try { const tr = CI18N.tr(this.language, e.en); if (tr) return tr; } catch (_) { /* ignore */ }
    }
    return e.en || key;
  }
  lc(o) {
    if (!o) return '';
    if (this.language === 'bn' && o.bn) return o.bn;
    const en = o.en || '';
    if (!en || this.language === 'en' || this.language === 'bn') return en;
    try { if (typeof CI18N !== 'undefined') return CI18N.tr(this.language, en) || en; } catch (_) { /* ignore */ }
    return en;
  }
  esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c])); }
  xy(p) { const P = this.map.proj; return [(p.lon - P.lon0) * P.k * P.c, (P.lat1 - p.lat) * P.k]; }
  kmPx(km) { return km / 111.32 * this.map.proj.k; }
  full() { return { x: 0, y: 0, w: this.map.width, h: this.map.height }; }
  drawn() { return (this.places || []).filter(p => p.loc !== 'unknown' && p.lat != null); }
  byId(id) { return (this.places || []).find(p => p.id === id); }

  load() {
    if (this._loading) return this._loading;
    if (typeof fetch !== 'function') { this.failed = true; return (this._loading = Promise.resolve()); }
    const get = u => fetch(u).then(r => { if (!r.ok) throw new Error(u); return r.json(); });
    this._loading = Promise.all([get('data/places/basemap.json'), get('data/places/places.json'), get('data/places/journeys.json').catch(() => [])])
      .then(([m, p, j]) => { this.map = m; this.places = Array.isArray(p) ? p : []; this.journeys = Array.isArray(j) ? j : []; this.view = this.full(); })
      .catch(() => { this.failed = true; });
    return this._loading;
  }

  // ── map ──────────────────────────────────────────────────────────────
  /** Group pins that would overlap at this zoom (distance in viewBox units). */
  clusters() {
    const v = this.view, gap = v.w * 0.03, out = [];
    for (const p of this.drawn().filter(p => p.loc !== 'uncertain')) {
      const [x, y] = this.xy(p);
      if (x < v.x - gap || x > v.x + v.w + gap || y < v.y - gap || y > v.y + v.h + gap) continue;
      const c = out.find(c => Math.hypot(c.x - x, c.y - y) < gap);
      if (c) { c.items.push(p); c.x = (c.x * (c.items.length - 1) + x) / c.items.length; c.y = (c.y * (c.items.length - 1) + y) / c.items.length; }
      else out.push({ x, y, items: [p] });
    }
    return out;
  }

  /** Land, lakes and rivers for a viewBox; `extra` is drawn on top. */
  svg(v, extra, cls, label) {
    const m = this.map;
    return `<svg viewBox="${v.x.toFixed(1)} ${v.y.toFixed(1)} ${v.w.toFixed(1)} ${v.h.toFixed(1)}" class="${cls}" role="img" aria-label="${this.esc(label)}" preserveAspectRatio="xMidYMid meet">
      <rect x="${v.x - v.w}" y="${v.y - v.h}" width="${v.w * 3}" height="${v.h * 3}" class="fill-sky-100 dark:fill-slate-900"/>
      <path d="${m.land}" class="fill-amber-50 stroke-stone-400 dark:fill-slate-700 dark:stroke-slate-500" stroke-width="${(v.w * 0.0012).toFixed(2)}"/>
      <path d="${m.lakes}" class="fill-sky-100 dark:fill-slate-900" stroke="none"/>
      <path d="${m.rivers}" fill="none" class="stroke-sky-400 dark:stroke-sky-700" stroke-width="${(v.w * 0.0018).toFixed(2)}"/>
      ${extra}
    </svg>`;
  }

  pinColor(p) { return p.loc === 'known' ? 'fill-emerald-600' : 'fill-amber-500'; }

  mainMap() {
    const v = this.view, r = v.w * 0.012, fs = v.w * 0.027, sw = v.w * 0.003;
    // While a journey is drawn, other places step back: only its own stops keep their areas.
    const j = this.journey && this.journeyById(this.journey);
    const onRoute = j ? new Set(this.journeyStops(j).filter(q => q.place).map(q => q.place.id)) : null;
    const fade = id => (onRoute && !onRoute.has(id) ? ' opacity="0.35"' : '');
    const areas = this.drawn().filter(p => p.loc === 'uncertain' && (!onRoute || onRoute.has(p.id))).map(p => {
      const [x, y] = this.xy(p);
      return `<g data-pl-pin="${this.esc(p.id)}" class="cursor-pointer">
        <circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${this.kmPx(p.radiusKm || 150).toFixed(1)}" class="fill-sky-500/15 stroke-sky-600 dark:stroke-sky-400" stroke-width="${sw.toFixed(2)}" stroke-dasharray="${(sw * 3).toFixed(2)} ${(sw * 2).toFixed(2)}"/>
        ${this.kmPx(p.radiusKm || 150) < v.w * 0.05 ? '' : `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}" font-size="${fs.toFixed(1)}" text-anchor="middle" class="fill-sky-800 dark:fill-sky-200" style="paint-order:stroke" stroke="white" stroke-opacity="0.7" stroke-width="${(fs * 0.25).toFixed(2)}">${this.esc(this.lc(p.label))}</text>`}
      </g>`;
    }).join('');
    const pins = this.clusters().map(c => {
      if (c.items.length > 1) {
        return `<g data-pl-cluster="${this.esc(c.items.map(p => p.id).join(','))}" class="cursor-pointer"${onRoute && !c.items.some(p => onRoute.has(p.id)) ? ' opacity="0.35"' : ''}>
          <circle cx="${c.x.toFixed(1)}" cy="${c.y.toFixed(1)}" r="${(r * 1.8).toFixed(1)}" class="fill-primary stroke-white" stroke-width="${sw.toFixed(2)}"/>
          <text x="${c.x.toFixed(1)}" y="${(c.y + fs * 0.35).toFixed(1)}" font-size="${fs.toFixed(1)}" text-anchor="middle" fill="white" font-weight="700">${c.items.length}</text>
        </g>`;
      }
      const p = c.items[0], sel = p.id === this.selected;
      return `<g data-pl-pin="${this.esc(p.id)}" class="cursor-pointer"${fade(p.id)}>
        <circle cx="${c.x.toFixed(1)}" cy="${c.y.toFixed(1)}" r="${(sel ? r * 1.5 : r).toFixed(1)}" class="${this.pinColor(p)} stroke-white" stroke-width="${sw.toFixed(2)}"/>
        <text x="${(c.x + r * 1.6).toFixed(1)}" y="${(c.y + fs * 0.35).toFixed(1)}" font-size="${fs.toFixed(1)}" class="fill-gray-800 dark:fill-gray-100" font-weight="${sel ? 700 : 500}" style="paint-order:stroke" stroke="white" stroke-opacity="0.75" stroke-width="${(fs * 0.25).toFixed(2)}">${this.esc(this.lc(p.label))}</text>
      </g>`;
    }).join('');
    return this.svg(v, this.regionLabels(v) + areas + pins + this.routeLayer(v), 'w-full h-auto block select-none touch-none', this.tt('places_title'));
  }

  /** Faint sea, river and region names; small regions only once zoomed in. */
  regionLabels(v) {
    const base = v.w * 0.026;
    return PLACES_REGIONS.filter(r => v.w <= r.w).map(r => {
      const [x, y] = this.xy(r);
      if (x < v.x || x > v.x + v.w || y < v.y || y > v.y + v.h) return '';
      const fs = base * (r.kind === 'river' ? 0.85 : r.kind === 'sea' ? 1 : 1.05);
      const cls = r.kind === 'land' ? 'fill-stone-500/70 dark:fill-slate-400/70' : 'fill-sky-700/70 dark:fill-sky-300/60';
      const label = this.language === 'bn' ? r.bn : (this.language === 'en' ? r.en : this.lc({ en: r.en }));
      return `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}" font-size="${fs.toFixed(2)}" text-anchor="middle" class="${cls}" font-style="${r.kind === 'land' ? 'normal' : 'italic'}" letter-spacing="${r.kind === 'land' ? (fs * 0.12).toFixed(2) : 0}" pointer-events="none"${r.rot ? ` transform="rotate(${r.rot} ${x.toFixed(1)} ${y.toFixed(1)})"` : ''}>${this.esc(label)}</text>`;
    }).join('');
  }

  journeyById(id) { return (this.journeys || []).find(j => j.id === id); }
  stopPoint(s) {
    if (s && s.place) { const p = this.byId(s.place); return p && p.lat != null ? { lat: p.lat, lon: p.lon, place: p } : null; }
    return s && s.lat != null ? { lat: s.lat, lon: s.lon, label: s.label } : null;
  }
  /** A journey's distinct stops in travel order, each with its number. */
  journeyStops(j) {
    const out = [], key = q => (q.place ? q.place.id : `${q.lat},${q.lon}`);
    for (const leg of j.legs || []) for (const s of leg) {
      const q = this.stopPoint(s);
      if (q && !out.some(o => key(o) === key(q))) out.push(q);
    }
    return out;
  }

  /** The selected journey: curved dashed legs with a mid-arrow, numbered stops. */
  routeLayer(v) {
    const j = this.journey && this.journeyById(this.journey);
    if (!j) return '';
    const sw = v.w * 0.004, stops = this.journeyStops(j);
    const still = typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;
    let paths = '', arrows = '';
    for (const leg of j.legs || []) {
      const pts = leg.map(s => this.stopPoint(s)).filter(Boolean).map(q => this.xy(q));
      for (let i = 1; i < pts.length; i++) {
        const [ax, ay] = pts[i - 1], [bx, by] = pts[i], len = Math.hypot(bx - ax, by - ay);
        if (len < 1e-6) continue;
        const cx = (ax + bx) / 2 - (by - ay) * 0.18, cy = (ay + by) / 2 + (bx - ax) * 0.18;
        const d = `M${ax.toFixed(2)} ${ay.toFixed(2)} Q${cx.toFixed(2)} ${cy.toFixed(2)} ${bx.toFixed(2)} ${by.toFixed(2)}`;
        paths += `<path d="${d}" fill="none" stroke="white" stroke-opacity="0.8" stroke-width="${(sw * 2.4).toFixed(2)}" stroke-linecap="round"/>
          <path d="${d}" fill="none" class="stroke-rose-600 dark:stroke-rose-400" stroke-width="${sw.toFixed(2)}" stroke-linecap="round" stroke-dasharray="${(sw * 4).toFixed(2)} ${(sw * 2.5).toFixed(2)}">${still ? '' : `<animate attributeName="stroke-dashoffset" from="${(sw * 13).toFixed(2)}" to="0" dur="1.2s" repeatCount="indefinite"/>`}</path>`;
        // the point and direction of a quadratic curve at t = 0.5
        const mx = ax / 4 + cx / 2 + bx / 4, my = ay / 4 + cy / 2 + by / 4, ang = Math.atan2(by - ay, bx - ax) * 180 / Math.PI, a = sw * 3.2;
        arrows += `<path d="M${a} 0 L${-a} ${a * 0.8} L${-a * 0.4} 0 L${-a} ${-a * 0.8} Z" transform="translate(${mx.toFixed(2)} ${my.toFixed(2)}) rotate(${ang.toFixed(1)})" class="fill-rose-600 dark:fill-rose-400" stroke="white" stroke-width="${(sw * 0.4).toFixed(2)}"/>`;
      }
    }
    const r = v.w * 0.016, fs = v.w * 0.022;
    const nums = stops.map((q, i) => {
      const [x, y] = this.xy(q), at = q.place ? `data-pl-pin="${this.esc(q.place.id)}" class="cursor-pointer"` : 'pointer-events="none"';
      const lbl = q.place ? '' : `<text x="${(x + r * 1.4).toFixed(2)}" y="${(y + fs * 0.35).toFixed(2)}" font-size="${(fs * 1.15).toFixed(2)}" font-weight="600" class="fill-rose-800 dark:fill-rose-200" style="paint-order:stroke" stroke="white" stroke-opacity="0.8" stroke-width="${(fs * 0.3).toFixed(2)}">${this.esc(this.lc(q.label))}</text>`;
      return `<g ${at}><circle cx="${x.toFixed(2)}" cy="${y.toFixed(2)}" r="${r.toFixed(2)}" class="fill-rose-600 dark:fill-rose-500" stroke="white" stroke-width="${(sw * 0.6).toFixed(2)}"/>
        <text x="${x.toFixed(2)}" y="${(y + fs * 0.36).toFixed(2)}" font-size="${fs.toFixed(2)}" text-anchor="middle" fill="white" font-weight="700">${i + 1}</text>${lbl}</g>`;
    }).join('');
    return `<g data-pl-route>${paths}${arrows}${nums}</g>`;
  }

  /** The per-place graphic: a close crop of the map around the place. */
  miniMap(p) {
    if (p.loc === 'unknown' || p.lat == null) return '';
    const [x, y] = this.xy(p), span = p.loc === 'uncertain' ? Math.max(this.kmPx(p.radiusKm || 150) * 3.2, 120) : 110;
    const v = { x: x - span / 2, y: y - span * 0.35, w: span, h: span * 0.7 }, r = span * 0.022, fs = span * 0.05;
    const mark = p.loc === 'uncertain'
      ? `<circle cx="${x}" cy="${y}" r="${this.kmPx(p.radiusKm || 150).toFixed(1)}" class="fill-sky-500/20 stroke-sky-600" stroke-width="${(span * 0.006).toFixed(2)}" stroke-dasharray="${(span * 0.02).toFixed(2)} ${(span * 0.012).toFixed(2)}"/>`
      : `<circle cx="${x}" cy="${y}" r="${r.toFixed(2)}" class="${this.pinColor(p)} stroke-white" stroke-width="${(span * 0.006).toFixed(2)}"/>`;
    const near = this.drawn().filter(o => o.id !== p.id && o.loc !== 'uncertain').map(o => {
      const [ox, oy] = this.xy(o);
      if (Math.abs(ox - x) > span / 2 || Math.abs(oy - y) > span * 0.35 || Math.hypot(ox - x, oy - y) < span * 0.06) return '';
      return `<circle cx="${ox.toFixed(1)}" cy="${oy.toFixed(1)}" r="${(r * 0.6).toFixed(2)}" class="fill-gray-400 dark:fill-gray-500"/>
        <text x="${(ox + r).toFixed(1)}" y="${(oy + fs * 0.3).toFixed(1)}" font-size="${(fs * 0.75).toFixed(2)}" class="fill-gray-500 dark:fill-gray-400">${this.esc(this.lc(o.label))}</text>`;
    }).join('');
    const lbl = `<text x="${(x + r * 1.5).toFixed(1)}" y="${(y - r * 1.2).toFixed(1)}" font-size="${fs.toFixed(2)}" font-weight="700" class="fill-gray-900 dark:fill-white" style="paint-order:stroke" stroke="white" stroke-opacity="0.8" stroke-width="${(fs * 0.25).toFixed(2)}">${this.esc(this.lc(p.label))}</text>`;
    return this.svg(v, near + mark + lbl, 'w-full h-auto block rounded-xl border border-gray-200 dark:border-gray-700', this.lc(p.name));
  }

  // ── cards ────────────────────────────────────────────────────────────
  badge(p) {
    const m = { known: ['bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300', 'pl_known'],
      traditional: ['bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300', 'pl_traditional'],
      uncertain: ['bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-300', 'pl_uncertain'],
      unknown: ['bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300', 'pl_unknown'] }[p.loc] || ['', 'pl_unknown'];
    return `<span class="inline-block text-[0.65rem] font-semibold px-2 py-0.5 rounded-full ${m[0]}">${this.esc(this.tt(m[1]))}</span>`;
  }

  detail(p) {
    const refs = (p.refs || []).map(r => `<button type="button" data-pl-ref="${this.esc(r)}" class="px-2 py-0.5 rounded-md bg-gray-100 dark:bg-gray-700 text-xs font-medium text-gray-700 dark:text-gray-200 hover:bg-primary/10 hover:text-primary">${this.esc(r)}</button>`).join(' ');
    const src = [...new Set((p.sources || []).map(s => `${this.esc(PLACES_TAFSIR[s.tafsir] || ('#' + s.tafsir))} · ${this.esc(s.ref)}`))];
    return `<article class="mt-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 overflow-hidden" data-pl-detail>
      <div class="grid sm:grid-cols-2 gap-0">
        <div class="p-3 bg-gray-50 dark:bg-gray-900/40">${this.miniMap(p) || `<div class="h-full min-h-[8rem] flex items-center justify-center text-sm text-gray-400">${this.esc(this.tt('pl_unknown'))}</div>`}</div>
        <div class="p-4">
          <div class="flex items-start justify-between gap-2">
            <h3 class="text-lg font-bold text-gray-800 dark:text-gray-100" dir="auto">${PLACES_KIND[p.kind] || '📍'} ${this.esc(this.lc(p.name))}</h3>
            <span class="text-xl text-gray-500 dark:text-gray-400" dir="rtl" lang="ar">${this.esc(p.name && p.name.ar)}</span>
          </div>
          <div class="mt-1">${this.badge(p)}</div>
          <h4 class="mt-3 text-xs font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400">${this.esc(this.tt('pl_where'))}</h4>
          <p class="text-sm leading-relaxed text-gray-700 dark:text-gray-300" dir="auto">${this.esc(this.lc(p.location))}</p>
        </div>
      </div>
      <div class="p-4 pt-3 border-t border-gray-100 dark:border-gray-700" data-lq-autolink>
        <h4 class="text-xs font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400">${this.esc(this.tt('pl_quran'))}</h4>
        <p class="text-sm leading-relaxed text-gray-700 dark:text-gray-300 mb-3" dir="auto">${this.esc(this.lc(p.about))}</p>
        <div class="flex flex-wrap items-center gap-1.5">${refs}
          <button type="button" data-pl-read="${this.esc(p.id)}" class="ms-auto px-3 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary hover:bg-primary/20">📖 ${this.esc(this.tt('pl_read'))}</button>
        </div>
        ${src.length ? `<p class="mt-3 text-[0.7rem] text-gray-400 dark:text-gray-500">${this.esc(this.tt('pl_sources'))}: ${src.join(' · ')}</p>` : ''}
        ${this.journeysThrough(p)}
      </div>
    </article>`;
  }

  journeyChip(j) {
    const on = j.id === this.journey;
    return `<button type="button" data-pl-journey="${this.esc(j.id)}" class="shrink-0 px-2.5 py-1 rounded-full text-xs font-semibold border ${on ? 'border-rose-600 bg-rose-600 text-white' : 'border-rose-200 dark:border-rose-900 bg-white dark:bg-gray-800 text-rose-700 dark:text-rose-300 hover:border-rose-500'}">🧭 ${this.esc(this.lc(j.label))}</button>`;
  }

  journeysThrough(p) {
    const js = (this.journeys || []).filter(j => (j.legs || []).some(leg => leg.some(s => s.place === p.id)));
    if (!js.length) return '';
    return `<h4 class="mt-3 mb-1.5 text-xs font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400">${this.esc(this.tt('pl_through'))}</h4>
      <div class="flex flex-wrap gap-1.5">${js.map(j => this.journeyChip(j)).join('')}</div>`;
  }

  /** The card of the selected journey: what the ayat say, its stops, and what the route rests on. */
  journeyCard(j) {
    const refs = (j.refs || []).map(r => `<button type="button" data-pl-ref="${this.esc(r)}" class="px-2 py-0.5 rounded-md bg-gray-100 dark:bg-gray-700 text-xs font-medium text-gray-700 dark:text-gray-200 hover:bg-primary/10 hover:text-primary">${this.esc(r)}</button>`).join(' ');
    const stops = this.journeyStops(j).map((q, i) => {
      const n = `<span class="inline-flex items-center justify-center w-4 h-4 rounded-full bg-rose-600 text-white text-[0.6rem] font-bold">${i + 1}</span>`;
      return q.place
        ? `<button type="button" data-pl-place="${this.esc(q.place.id)}" data-pl-keep-journey="1" class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border border-gray-200 dark:border-gray-600 text-xs text-gray-700 dark:text-gray-200 hover:border-primary">${n} ${this.esc(this.lc(q.place.label))}</button>`
        : `<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border border-dashed border-gray-300 dark:border-gray-600 text-xs text-gray-600 dark:text-gray-300">${n} ${this.esc(this.lc(q.label))}</span>`;
    }).join(' ');
    const src = [...new Set((j.sources || []).map(s => `${this.esc(PLACES_TAFSIR[s.tafsir] || ('#' + s.tafsir))} · ${this.esc(s.ref)}`))];
    return `<article class="mt-4 rounded-2xl border border-rose-200 dark:border-rose-900/60 bg-white dark:bg-gray-800 p-4" data-pl-journey-detail data-lq-autolink>
      <div class="flex items-start justify-between gap-2">
        <h3 class="text-lg font-bold text-gray-800 dark:text-gray-100" dir="auto">🧭 ${this.esc(this.lc(j.name))}</h3>
        <button type="button" data-pl-journey-close class="shrink-0 px-2 py-1 rounded-full text-xs text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700" aria-label="${this.esc(this.tt('pl_close'))}">✕</button>
      </div>
      <h4 class="mt-2 text-xs font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400">${this.esc(this.tt('pl_quran'))}</h4>
      <p class="text-sm leading-relaxed text-gray-700 dark:text-gray-300 mb-2" dir="auto">${this.esc(this.lc(j.about))}</p>
      <div class="flex flex-wrap items-center gap-1.5">${refs}
        <button type="button" data-pl-jread="${this.esc(j.id)}" class="ms-auto px-3 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary hover:bg-primary/20">📖 ${this.esc(this.tt('pl_read'))}</button>
      </div>
      <h4 class="mt-3 mb-1.5 text-xs font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400">${this.esc(this.tt('pl_stops'))}</h4>
      <div class="flex flex-wrap gap-1.5">${stops}</div>
      <h4 class="mt-3 text-xs font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400">${this.esc(this.tt('pl_route'))}</h4>
      <p class="text-sm leading-relaxed text-gray-700 dark:text-gray-300" dir="auto">${this.esc(this.lc(j.route))}</p>
      <p class="mt-1 text-xs italic text-gray-500 dark:text-gray-400">${this.esc(this.tt('pl_sketch'))}</p>
      ${src.length ? `<p class="mt-3 text-[0.7rem] text-gray-400 dark:text-gray-500">${this.esc(this.tt('pl_sources'))}: ${src.join(' · ')}</p>` : ''}
    </article>`;
  }

  /** Zoom buttons, plus "whole map" once zoomed in. */
  controls() {
    const zoomed = this.view.w < this.map.width * 0.98;
    const b = 'w-8 h-8 rounded-full bg-white/90 dark:bg-gray-800/90 shadow text-base font-bold text-gray-700 dark:text-gray-200 flex items-center justify-center';
    return `<div class="absolute top-2 end-2 flex flex-col items-end gap-1.5">
      ${zoomed ? `<button type="button" data-pl-reset class="px-3 py-1.5 rounded-full text-xs font-semibold bg-white/90 dark:bg-gray-800/90 shadow text-gray-700 dark:text-gray-200">⤢ ${this.esc(this.tt('pl_reset'))}</button>` : ''}
      <button type="button" data-pl-zoom="in" class="${b}" aria-label="${this.esc(this.tt('pl_zoom_in'))}">+</button>
      <button type="button" data-pl-zoom="out" class="${b}" aria-label="${this.esc(this.tt('pl_zoom_out'))}">−</button>
    </div>`;
  }

  list() {
    const groups = ['P1', 'P2', 'P3'];
    return groups.map(g => {
      const ps = (this.places || []).filter(p => p.group === g);
      if (!ps.length) return '';
      return `<h3 class="mt-6 mb-2 text-sm font-bold text-gray-700 dark:text-gray-200">${this.esc(this.tt('pl_group_' + g))}</h3>
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">${ps.map(p => `
          <button type="button" data-pl-place="${this.esc(p.id)}" class="text-start p-2.5 rounded-xl border ${p.id === this.selected ? 'border-primary bg-primary/5' : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800'} hover:border-primary transition-colors">
            <div class="text-sm font-semibold text-gray-800 dark:text-gray-100" dir="auto">${PLACES_KIND[p.kind] || '📍'} ${this.esc(this.lc(p.label))}</div>
            <div class="mt-1">${this.badge(p)}</div>
          </button>`).join('')}</div>`;
    }).join('');
  }

  render() {
    if (!this.container) return;
    this.rendered = true;
    if (!this.map && !this.failed) {
      this.container.innerHTML = `<p class="py-10 text-center text-gray-400">${this.esc(this.tt('pl_loading'))}</p>`;
      this.load().then(() => this.render());
      return;
    }
    if (this.failed) { this.container.innerHTML = `<p class="py-10 text-center text-gray-400">${this.esc(this.tt('pl_failed'))}</p>`; return; }
    const sel = this.selected && this.byId(this.selected);
    const jsel = this.journey && this.journeyById(this.journey);
    const jrow = (this.journeys || []).length ? `<div class="mb-2">
        <div class="flex items-center gap-2 mb-1"><span class="text-xs font-bold text-gray-700 dark:text-gray-200">${this.esc(this.tt('pl_journeys'))}</span><span class="text-[0.7rem] text-gray-400 dark:text-gray-500">${this.esc(this.tt('pl_journeys_hint'))}</span></div>
        <div class="flex gap-1.5 overflow-x-auto pb-1">${this.journeys.map(j => this.journeyChip(j)).join('')}</div>
      </div>` : '';
    this.container.innerHTML = `<div class="max-w-4xl mx-auto px-1">
      <p class="mt-1 mb-3 text-sm text-gray-600 dark:text-gray-300">${this.esc(this.tt('pl_intro'))}</p>
      <div class="flex flex-wrap items-center gap-3 mb-2 text-xs text-gray-600 dark:text-gray-300">
        <span class="inline-flex items-center gap-1"><span class="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>${this.esc(this.tt('pl_known'))}</span>
        <span class="inline-flex items-center gap-1"><span class="w-2.5 h-2.5 rounded-full bg-amber-500"></span>${this.esc(this.tt('pl_traditional'))}</span>
        <span class="inline-flex items-center gap-1"><span class="w-3 h-3 rounded-full border border-dashed border-sky-600 bg-sky-500/15"></span>${this.esc(this.tt('pl_uncertain'))}</span>
      </div>
      ${jrow}
      <div class="relative rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700" data-pl-map>
        ${this.mainMap()}
        <div data-pl-ctrl>${this.controls()}</div>
      </div>
      <p class="mt-1.5 text-[0.7rem] text-gray-400 dark:text-gray-500">${this.esc(this.tt('pl_zoom_hint'))} ${this.esc(this.tt('pl_pan_hint'))} · Natural Earth</p>
      ${this.chooser ? `<div data-pl-chooser class="mt-3 p-3 rounded-xl bg-primary/5 border border-primary/20">
        <p class="text-xs text-gray-600 dark:text-gray-300 mb-2">${this.esc(this.tt('pl_same_spot'))}</p>
        <div class="flex flex-wrap gap-1.5">${this.chooser.map(id => this.byId(id)).filter(Boolean).map(p => `<button type="button" data-pl-place="${this.esc(p.id)}" class="px-2.5 py-1 rounded-full text-xs font-semibold border ${p.id === this.selected ? 'border-primary bg-primary text-white' : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200'}">${PLACES_KIND[p.kind] || '📍'} ${this.esc(this.lc(p.label))}</button>`).join('')}</div>
      </div>` : ''}
      ${jsel ? this.journeyCard(jsel) : ''}
      ${sel ? this.detail(sel) : ''}
      ${this.list()}
    </div>`;
  }

  /** Zoom so the given places fill the map, keeping the map's aspect ratio. */
  zoomTo(ps, minW) {
    const pts = ps.filter(p => p.lat != null).map(p => this.xy(p));
    if (!pts.length) return;
    const xs = pts.map(q => q[0]), ys = pts.map(q => q[1]);
    const cx = (Math.min(...xs) + Math.max(...xs)) / 2, cy = (Math.min(...ys) + Math.max(...ys)) / 2;
    const ratio = this.map.height / this.map.width;
    let w = Math.max((Math.max(...xs) - Math.min(...xs)) * 2.2, (Math.max(...ys) - Math.min(...ys)) * 2.2 / ratio, minW || 8);
    w = Math.min(w, this.map.width);
    this.view = { x: cx - w / 2, y: cy - w * ratio / 2, w, h: w * ratio };
  }

  onClick(e) {
    const t0 = e.target;
    const at = sel => (t0.closest ? t0.closest(sel) : null);
    let el;
    // the click that ends a drag is not a tap
    if (Date.now() - (this._dragEnd || 0) < 350 && at('[data-pl-map] svg')) return;
    if ((el = at('[data-pl-zoom]'))) { this.zoomBy(el.getAttribute('data-pl-zoom') === 'in' ? 1 / 1.6 : 1.6, 0.5, 0.5); this.redrawMap(); return; }
    if ((el = at('[data-pl-journey]'))) {
      const id = el.getAttribute('data-pl-journey'), j = this.journeyById(id);
      if (!j || this.journey === id) { this.journey = null; this.render(); return; }
      this.journey = id; this.selected = null; this.chooser = null;
      this.zoomTo(this.journeyStops(j), 20);
      this.render(); this.scrollTo('[data-pl-map]'); return;
    }
    if (at('[data-pl-journey-close]')) { this.journey = null; this.render(); return; }
    if ((el = at('[data-pl-jread]'))) {
      const j = this.journeyById(el.getAttribute('data-pl-jread'));
      if (j && typeof ayahTimeline !== 'undefined' && ayahTimeline) ayahTimeline.open({ title: this.lc(j.name), refs: j.refs });
      return;
    }
    if ((el = at('[data-pl-cluster]'))) {
      const ps = el.getAttribute('data-pl-cluster').split(',').map(id => this.byId(id)).filter(Boolean);
      const pts = ps.map(p => this.xy(p)), spread = Math.max(...pts.map(q => q[0])) - Math.min(...pts.map(q => q[0])) + Math.max(...pts.map(q => q[1])) - Math.min(...pts.map(q => q[1]));
      // Places on (nearly) the same spot stay clustered at any zoom: list them instead.
      if (spread < 0.6 || this.view.w <= 4) { this.chooser = ps.map(p => p.id); this.render(); this.scrollTo('[data-pl-chooser]'); return; }
      this.chooser = null; this.zoomTo(ps, 3); this.render(); return;
    }
    if ((el = at('[data-pl-pin]'))) { this.selected = el.getAttribute('data-pl-pin'); this.render(); this.scrollTo('[data-pl-detail]'); return; }
    if ((el = at('[data-pl-place]'))) {
      const p = this.byId(el.getAttribute('data-pl-place'));
      if (!p) return;
      this.selected = p.id;
      if (!el.hasAttribute('data-pl-keep-journey')) this.journey = null;
      if (p.lat != null) this.zoomTo([p], p.loc === 'uncertain' ? this.kmPx(p.radiusKm || 150) * 6 : 60);
      this.render(); this.scrollTo('[data-pl-map]'); return;
    }
    if (at('[data-pl-reset]')) { this.view = this.full(); this.chooser = null; this.render(); return; }
    if ((el = at('[data-pl-ref]'))) {
      const r = el.getAttribute('data-pl-ref');
      try { if (typeof ayahModal !== 'undefined' && ayahModal) ayahModal.open(r.split('-')[0]); } catch (_) { /* ignore */ }
      return;
    }
    if ((el = at('[data-pl-read]'))) {
      const p = this.byId(el.getAttribute('data-pl-read'));
      if (p && typeof ayahTimeline !== 'undefined' && ayahTimeline) ayahTimeline.open({ title: this.lc(p.name), titleAr: p.name.ar, refs: p.refs });
    }
  }

  // ── pan and zoom ─────────────────────────────────────────────────────
  /** Keep the view within the map, between a close zoom and the whole map. */
  clampView(v) {
    const W = this.map.width, H = this.map.height, ratio = H / W;
    const w = Math.min(Math.max(v.w, 1.5), W), h = w * ratio;
    const x = Math.min(Math.max(v.x, -w * 0.25), W - w * 0.75), y = Math.min(Math.max(v.y, -h * 0.25), H - h * 0.75);
    return { x, y, w, h };
  }
  /** Zoom by factor f (<1 zooms in) keeping the point at fraction (fx, fy) of the view still. */
  zoomBy(f, fx, fy) {
    const v = this.view, w = Math.min(Math.max(v.w * f, 1.5), this.map.width), h = w * this.map.height / this.map.width;
    this.view = this.clampView({ x: v.x + v.w * fx - w * fx, y: v.y + v.h * fy - h * fy, w, h });
  }
  mapSvg() { return this.container.querySelector('[data-pl-map] svg'); }
  setViewBox() {
    const svg = this.mapSvg(), v = this.view;
    if (svg) svg.setAttribute('viewBox', `${v.x.toFixed(1)} ${v.y.toFixed(1)} ${v.w.toFixed(1)} ${v.h.toFixed(1)}`);
  }
  /** Redraw only the map and its buttons (pins, labels and strokes depend on the zoom). */
  redrawMap() {
    const svg = this.mapSvg(), ctrl = this.container.querySelector('[data-pl-ctrl]');
    if (!svg) { this.render(); return; }
    svg.outerHTML = this.mainMap();
    if (ctrl) ctrl.innerHTML = this.controls();
  }

  onPointerDown(e) {
    const svg = e.target && e.target.closest ? e.target.closest('[data-pl-map] svg') : null;
    if (!svg || (e.pointerType === 'mouse' && e.button !== 0)) return;
    const g = this.gesture || (this.gesture = { pts: new Map(), moved: false });
    g.pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
    // every change in the number of fingers restarts the gesture from the current view
    g.start = { view: Object.assign({}, this.view), pts: new Map([...g.pts].map(([k, q]) => [k, Object.assign({}, q)])), rect: svg.getBoundingClientRect() };
  }
  onPointerMove(e) {
    const g = this.gesture;
    if (!g || !g.pts.has(e.pointerId)) return;
    g.pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
    const st = g.start, sv = st.view, rect = st.rect, k0 = sv.w / rect.width;
    const cur = [...g.pts.values()], ini = [...g.pts.keys()].map(id => st.pts.get(id)).filter(Boolean);
    if (cur.length === 1 && ini.length === 1) {
      const dx = cur[0].x - ini[0].x, dy = cur[0].y - ini[0].y;
      if (!g.moved && Math.hypot(dx, dy) < 6) return;
      if (!g.moved) { g.moved = true; try { e.target.setPointerCapture(e.pointerId); } catch (_) { /* ignore */ } }
      this.view = this.clampView({ x: sv.x - dx * k0, y: sv.y - dy * k0, w: sv.w, h: sv.h });
    } else if (cur.length >= 2 && ini.length >= 2) {
      g.moved = true;
      const d0 = Math.hypot(ini[0].x - ini[1].x, ini[0].y - ini[1].y), d1 = Math.hypot(cur[0].x - cur[1].x, cur[0].y - cur[1].y);
      if (d0 < 1 || d1 < 1) return;
      const m0 = { x: (ini[0].x + ini[1].x) / 2 - rect.left, y: (ini[0].y + ini[1].y) / 2 - rect.top };
      const m1 = { x: (cur[0].x + cur[1].x) / 2 - rect.left, y: (cur[0].y + cur[1].y) / 2 - rect.top };
      const w = Math.min(Math.max(sv.w * d0 / d1, 1.5), this.map.width), k1 = w / rect.width;
      this.view = this.clampView({ x: sv.x + m0.x * k0 - m1.x * k1, y: sv.y + m0.y * k0 - m1.y * k1, w, h: w * this.map.height / this.map.width });
    } else return;
    e.preventDefault();
    this.setViewBox();
  }
  onPointerUp(e) {
    const g = this.gesture;
    if (!g || !g.pts.has(e.pointerId)) return;
    g.pts.delete(e.pointerId);
    if (g.pts.size) { g.start = { view: Object.assign({}, this.view), pts: new Map([...g.pts].map(([k, q]) => [k, Object.assign({}, q)])), rect: g.start.rect }; return; }
    this.gesture = null;
    if (g.moved) { this._dragEnd = Date.now(); this.redrawMap(); }
  }
  /** Ctrl + wheel (and a trackpad pinch, which arrives as one) zooms; a plain wheel scrolls the page. */
  onWheel(e) {
    const svg = e.target && e.target.closest ? e.target.closest('[data-pl-map] svg') : null;
    if (!svg || !(e.ctrlKey || e.metaKey)) return;
    e.preventDefault();
    const r = svg.getBoundingClientRect();
    this.zoomBy(Math.exp(e.deltaY * 0.01), (e.clientX - r.left) / r.width, (e.clientY - r.top) / r.height);
    this.setViewBox();
    clearTimeout(this._wheelT);
    this._wheelT = setTimeout(() => this.redrawMap(), 150);
  }

  scrollTo(sel) {
    try { const n = this.container.querySelector(sel); if (n) n.scrollIntoView({ behavior: 'smooth', block: 'start' }); } catch (_) { /* ignore */ }
  }
}

let quranPlacesView = null;
(window.LQ && LQ.ready ? LQ.ready : function (f) { document.addEventListener('DOMContentLoaded', f); })(() => {
  try { quranPlacesView = new QuranPlacesView(); } catch (e) { /* ignore */ }
});
