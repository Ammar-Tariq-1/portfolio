# Design system: Ammar Tariq portfolio

Source of truth for colors, fonts, surfaces, and accessibility. `plan.md` says what to do; this file says what the values are.

## Direction

The hero section is the reference design. The entire portfolio uses the hero's look: a warm cream surface, dark text, DM Serif Display headlines, Space Grotesk body, sage as the accent, pill buttons, and soft rounded cards. There are no dark sections anymore.

In Task 2, read the hero's HTML and CSS first and write down its patterns (label style, headline size and weight, button shapes, icon buttons, radius, spacing, decorative marks). Reuse those exact patterns elsewhere. Do not invent new ones.

## Existing tokens (already in `:root`; do not change their values)

```css
--cream: #F5F0E8;
--cream-dark: #EDE8DD;
--cream-darker: #E0D9CC;

--sage: #b8cec4;
--sage-light: #d0e0d8;
--sage-dark: #8faa9e;
--sage-muted: rgba(184, 206, 196, 0.15);
--sage-glow: rgba(184, 206, 196, 0.25);

--lime: #d4e157;
--lime-muted: rgba(212, 225, 87, 0.15);

--text-dark: #1a1a1a;
--text-dark-secondary: #555;

--shadow-sm: 0 2px 8px rgba(0,0,0,0.08);
--shadow-md: 0 8px 30px rgba(0,0,0,0.12);
--shadow-lg: 0 16px 60px rgba(0,0,0,0.2);

--radius-sm: 8px;  --radius-md: 14px;  --radius-lg: 20px;
--radius-xl: 28px; --radius-pill: 100px;

--ease: cubic-bezier(0.4, 0, 0.2, 1);
--transition: 0.35s var(--ease);
--transition-slow: 0.6s var(--ease);
--bounce: cubic-bezier(0.34, 1.56, 0.64, 1);

--max-width: 1240px;
--nav-height: 72px;
```

## Legacy tokens (keep defined, stop using)

`--dark-bg`, `--dark-card`, `--dark-card-hover`, `--dark-border`, `--dark-border-hover`, `--text-light`, `--text-light-secondary`, `--text-sage`, `--shadow-dark-sm`, `--shadow-dark-md`.

After Task 5, nothing in the site should reference them. Do not delete them.

## New tokens (add in Task 1)

| Token | Value | Use |
|---|---|---|
| `--sage-deep` | `#3F5C4F` | Sage used as text, icon strokes, or progress fill on cream. Owner may change this value. |
| `--text-on-sage` | `var(--text-dark)` | Text on any sage fill. |
| `--border-light` | `rgba(26, 26, 26, 0.12)` | Card and divider borders on cream. |
| `--border-light-hover` | `rgba(26, 26, 26, 0.25)` | Card border on hover. |
| `--border-field` | `#7A7568` | Form field borders and any border that identifies a control. Owner may change this value. |
| `--font-heading` | `'DM Serif Display', Georgia, 'Times New Roman', serif` | All headings. |
| `--font-body` | `'Space Grotesk', system-ui, -apple-system, sans-serif` | Everything else. |
| `--tap-min` | `44px` | Minimum touch target size. |

## Surfaces

- Section backgrounds alternate: hero `--cream`, then `--cream-dark`, `--cream`, `--cream-dark`, and so on down the page. The footer uses `--cream-darker` with a 1px `--border-light` top border.
- Cards on a `--cream` section use `--cream-dark` with a 1px `--border-light` border. Cards on a `--cream-dark` section use `--cream` with the same border.
- Card hover: `--border-light-hover` and `--shadow-sm`. No other hover effects.
- Radius: cards `--radius-lg`, buttons `--radius-pill`, small tags `--radius-pill`, images inside cards `--radius-md`.
- No dark backgrounds anywhere.

## Color usage rules

1. Page and section text is `--text-dark`. Supporting text is `--text-dark-secondary`. Never lower opacity to make text quieter.
2. Plain `--sage` and `--sage-dark` are fills, never text. On cream they measure about 1.5:1 and 2.2:1. Use them only as backgrounds (buttons, badges, icon circles, bars' tracks) with `--text-on-sage` text on top.
3. Sage as text, an icon, a link, or a progress fill on cream uses `--sage-deep`.
4. `--lime` is decorative only (small shapes, highlights behind text). Never put text in lime on cream, and never use lime as the only way to show something.
5. Primary button: `--sage` fill, `--text-on-sage` text, 1px `--sage-deep` border. Secondary button: transparent, 1px `--text-dark` border, `--text-dark` text. One primary button per view.
6. Raw colors are allowed only as pure black or white alpha for shadows and overlays. Everything else uses a token or `color-mix()` of a token.

## Typography (global rules to keep or apply)

```css
body {
  font-family: var(--font-body);
  background: var(--cream);
  color: var(--text-dark);
  line-height: 1.7;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.01em;
}

.serif {
  font-family: var(--font-heading);
  font-weight: 400;
}
```

- DM Serif Display only has weight 400. Never set a bolder heading weight (it creates fake bold).
- Body text 16px minimum. Tags and metadata 13px minimum.
- Sentence case for labels and buttons. The small hero label may stay uppercase.
- Fonts already load from Google Fonts. Confirm both are loaded with `display=swap`. Do not add other font families.

## Section pattern

All section titles and subtitles use the light variants. The `.dark` variants stay in the CSS but no element uses them.

```css
.section-title {
  font-family: var(--font-heading);
  font-size: clamp(2.2rem, 5vw, 3.2rem);
  font-weight: 400;
  margin-bottom: 20px;
  position: relative;
}
.section-title.light { color: var(--text-dark); }

.section-subtitle {
  font-size: 1.05rem;
  margin-bottom: 56px;
  max-width: 600px;
  line-height: 1.8;
}
.section-subtitle.light { color: var(--text-dark-secondary); }
```

In the HTML, every `section-title dark` becomes `section-title light`, and every `section-subtitle dark` becomes `section-subtitle light`.

## Required pairs (minimum contrast, WCAG 2.x)

Task 8's script must test every row.

| Foreground | Background | Minimum |
|---|---|---|
| `--text-dark` | `--cream`, `--cream-dark`, `--cream-darker` | 7:1 |
| `--text-dark-secondary` | `--cream`, `--cream-dark`, `--cream-darker` | 4.5:1 |
| `--sage-deep` | `--cream`, `--cream-dark`, `--cream-darker` | 4.5:1 |
| `--text-on-sage` | `--sage`, `--sage-light`, `--sage-dark` | 4.5:1 |
| `--border-field` | `--cream`, `--cream-dark` | 3:1 |
| `--sage-deep` (progress fill) | `--cream-darker` (track) | 3:1 |
| `--text-dark` (focus ring) | `--cream`, `--cream-dark`, `--sage` | 3:1 |

If a pair fails, report it. Do not change color values yourself.

## Focus

```css
:focus-visible {
  outline: 3px solid var(--text-dark);
  outline-offset: 3px;
}
```

Never remove an outline without this replacement. The skip link, buttons, links, and form fields must all show it.

## Touch targets

- At least `--tap-min` by `--tap-min` for nav links, icon links, buttons, certificate links, and the form submit. Increase padding, not the visual size of icons.
- At least 8px between adjacent targets.

## Forms

- Persistent visible label above every field. Placeholder text is an example only.
- Field: `--cream` background on `--cream-dark` sections (or `--cream-dark` on `--cream` sections), 1px `--border-field` border, `--radius-md`. Focused field: 2px `--sage-deep` border plus the global focus outline.
- Success and error messages are text, announced with `role="status"`. Never color alone.

## Motion

- Animations stay subtle (fade and small translate, under 400ms).
- Respect `prefers-reduced-motion: reduce`: remove transitions and animations.
- Content must be fully visible without animation, including skill-bar fill.

## Images

- Every informative image has descriptive alt text: what it shows and why it is there. Decorative images use `alt=""`.
- Project images keep one consistent treatment.

## Naming and copy

- Professional name everywhere: Ammar Tariq. Initials: AT.
- Contact email: `ammartariq7@hotmail.com`.
- Do not add, rewrite, or invent copy, statistics, testimonials, or links.

## Out of scope

Section reordering, new sections (internship, testimonials), project copy rewrites, and layout changes. Do not do these even if they seem helpful.
