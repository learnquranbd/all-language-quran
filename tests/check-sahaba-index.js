/**
 * js/sahaba-index.js is generated from js/sahaba-data.js for the dashboard's
 * "Companion of the day" card. If it drifts, the card shows stale names or
 * nothing; regenerate with tools/build-sahaba-index.js.
 */
const { execFileSync } = require('child_process');
const path = require('path');
module.exports = {
  name: 'sahaba index is current',
  run() {
    try {
      const out = execFileSync(process.execPath, [path.join(__dirname, '..', 'tools', 'build-sahaba-index.js'), '--check'], { encoding: 'utf8' });
      return { ok: true, detail: out.trim(), problems: [] };
    } catch (e) {
      return { ok: false, detail: 'stale', problems: [String(e.stderr || e.message).trim()] };
    }
  },
};
