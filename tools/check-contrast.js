// Usage: node tools/check-contrast.js [path-to-css]
// Reads :root tokens from the stylesheet and tests the pairs listed in design.md "Required pairs".
const fs = require('fs');
const cssPath = process.argv[2] || 'index.css';
const css = fs.readFileSync(cssPath, 'utf8');

const rootMatch = css.match(/:root\s*\{([\s\S]*?)\n\}/);
if (!rootMatch) { console.error('No :root block found in ' + cssPath); process.exit(1); }

const tokens = {};
for (const m of rootMatch[1].matchAll(/--([\w-]+)\s*:\s*([^;]+);/g)) tokens[m[1]] = m[2].trim();

function resolve(name, depth = 0) {
  let v = tokens[name];
  if (v === undefined) return null;
  const ref = v.match(/^var\(--([\w-]+)\)$/);
  if (ref && depth < 5) return resolve(ref[1], depth + 1);
  return v;
}

function hexToRgb(hex) {
  let h = hex.replace('#', '');
  if (h.length === 3) h = h.split('').map(c => c + c).join('');
  if (!/^[0-9a-fA-F]{6}$/.test(h)) return null;
  return [0, 2, 4].map(i => parseInt(h.slice(i, i + 2), 16));
}
function lum([r, g, b]) {
  const f = c => { c /= 255; return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4); };
  return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
}
function ratio(a, b) {
  const [l1, l2] = [lum(a), lum(b)].sort((x, y) => y - x);
  return (l1 + 0.05) / (l2 + 0.05);
}

const cream = ['cream', 'cream-dark', 'cream-darker'];
const sages = ['sage', 'sage-light', 'sage-dark'];
const pairs = [];
const add = (fg, bgs, min, note) => bgs.forEach(bg => pairs.push({ fg, bg, min, note }));

add('text-dark', cream, 7, 'body text');
add('text-dark-secondary', cream, 4.5, 'supporting text');
add('sage-deep', cream, 4.5, 'sage text/icons on cream');
add('text-on-sage', sages, 4.5, 'text on sage fills');
add('border-field', ['cream', 'cream-dark'], 3, 'form field border');
add('sage-deep', ['cream-darker'], 3, 'skill bar fill vs track');
add('text-dark', ['cream', 'cream-dark', 'sage'], 3, 'focus ring');

let fails = 0;
console.log('Foreground'.padEnd(22) + 'Background'.padEnd(16) + 'Ratio'.padEnd(9) + 'Min'.padEnd(6) + 'Result  Note');
for (const p of pairs) {
  const fgV = resolve(p.fg), bgV = resolve(p.bg);
  const fg = fgV && hexToRgb(fgV), bg = bgV && hexToRgb(bgV);
  if (!fg || !bg) {
    console.log(('--' + p.fg).padEnd(22) + ('--' + p.bg).padEnd(16) + 'n/a'.padEnd(9) + String(p.min).padEnd(6) + 'SKIP    could not read hex (' + (fgV || 'missing') + ' / ' + (bgV || 'missing') + ')');
    fails++;
    continue;
  }
  const r = ratio(fg, bg);
  const ok = r >= p.min;
  if (!ok) fails++;
  console.log(('--' + p.fg).padEnd(22) + ('--' + p.bg).padEnd(16) + (r.toFixed(2) + ':1').padEnd(9) + (p.min + ':1').padEnd(6) + (ok ? 'PASS    ' : 'FAIL    ') + p.note);
}
console.log('\n' + (fails ? fails + ' pair(s) failed or could not be checked.' : 'All pairs pass.'));
process.exit(fails ? 1 : 0);