/**
 * Theme pages (the Allah and Quranic Themes groups): wiring and data.
 *
 * Twenty pages are registered in five places that nothing cross-checks at
 * runtime: tools/themes/registry.js, THEME_EMOJI/THEME_GROUPS in
 * js/theme-pages.js, TAB_META in js/tabs.js, the lazy BUNDLES in
 * js/module-loader.js and a #<id>-container panel in index.html. A page missing
 * from any one of them is a sidebar link that opens a blank tab. Every page also
 * needs its data/themes/<id>.json, a title key in the English UI strings, valid
 * refs, and — once it is "full" — no ERROR from tools/themes/validate.js.
 */
const { ROOT, fs, path, load, get } = require('./lib.js');
const { execFileSync } = require('child_process');
const { THEMES } = require('../tools/themes/registry.js');

module.exports = {
  name: 'theme pages wired and valid',
  run() {
    const problems = [];
    const read = (f) => fs.readFileSync(path.join(ROOT, f), 'utf8');
    const sb = load('js/theme-pages.js');
    const emoji = get(sb, 'THEME_EMOJI') || {};
    const groups = get(sb, 'THEME_GROUPS') || [];
    const inGroups = new Set(groups.flatMap((g) => g.pages.filter((p) => typeof p === 'string')));
    const html = read('index.html'), tabs = read('js/tabs.js'), loader = read('js/module-loader.js');
    const nav = read('js/app-nav.js'), en = read('js/translations.js');
    const ids = [...THEMES.map((t) => t.id), ...groups.map((g) => g.id)];
    for (const id of ids) {
      const isHub = groups.some((g) => g.id === id);
      if (!isHub && !emoji[id]) problems.push(`${id}: not in THEME_EMOJI`);
      if (!isHub && !inGroups.has(id)) problems.push(`${id}: not in any THEME_GROUPS page list`);
      if (!html.includes(`id="tab-${id}"`) || !html.includes(`id="${id}-container"`)) problems.push(`${id}: no panel in index.html`);
      if (!tabs.includes(`'${id}':`)) problems.push(`${id}: no TAB_META entry`);
      if (!loader.includes(`'${id}'`)) problems.push(`${id}: no lazy bundle`);
      if (!nav.includes(`'${id}'`)) problems.push(`${id}: not in the sidebar (app-nav.js)`);
      const key = isHub ? `th_group_${id}` : 'th_' + id.replace(/-/g, '_');
      if (!en.includes(`"${key}":`)) problems.push(`${id}: no "${key}" UI string`);
    }
    let full = 0, refs = 0;
    const fullFiles = [];
    for (const t of THEMES) {
      const f = `data/themes/${t.id}.json`;
      if (!fs.existsSync(path.join(ROOT, f))) { problems.push(`${t.id}: missing ${f}`); continue; }
      let d; try { d = JSON.parse(read(f)); } catch (e) { problems.push(`${f}: ${e.message}`); continue; }
      refs += (d.refs || []).length;
      if (!(d.refs || []).length) problems.push(`${f}: no refs`);
      if (d.status === 'full') { full++; fullFiles.push(path.join(ROOT, f)); }
    }
    if (fullFiles.length) {
      try { execFileSync('node', [path.join(ROOT, 'tools/themes/validate.js'), ...fullFiles], { stdio: 'pipe' }); }
      catch (e) { String(e.stdout).split('\n').filter((l) => /ERROR/.test(l)).forEach((l) => problems.push(l.trim())); }
    }
    return { ok: !problems.length, problems,
      detail: `${THEMES.length} pages in ${groups.length} groups, ${full} with full content, ${refs} ayat listed` };
  },
};
