# Portfolio redesign: implementation plan

Project: Ammar Tariq personal portfolio (static site, entry file `index.html`).
Companion file: `design.md` (source of truth for tokens, surfaces, and accessibility rules).

Goal: apply the hero section's look (cream surface, dark text, DM Serif Display, Space Grotesk, sage accent) to the whole portfolio, fix contrast, and finish accessibility.

## How to use this file

1. Do exactly one task per session, in order. Do not start the next task.
2. Read `design.md` fully before every task.
3. When a task is done, tick its checkbox below and write a 3-line summary under "Task log".
4. If something is unclear or a file you expect is missing, stop and ask. Do not guess.

## Global rules (apply to every task)

- The site is hand-written HTML, CSS, and JavaScript. No framework, no build step, no new dependency, no new font family.
- Do not redesign layout, section order, copy, or images. Only change what the task says.
- Do not rename or move files. Do not delete anything. Prefer editing existing files.
- Every color comes from a token in `design.md`. Do not add raw hex or rgb values outside `:root`.
- Make the smallest change that meets the acceptance criteria.
- Never invent content (stats, testimonials, links, email addresses). Leave `{{PLACEHOLDERS}}` as they are and report them.
- Sage (`--sage`, `--sage-dark`) is never used as text on a light background. See `design.md`.

## Status

- [x] Task 1: Add new tokens
- [x] Task 2: Light surfaces and section titles (global)
- [x] Task 3: About, Work Experience, Education
- [x] Task 4: Projects, Skills, Certifications, Achievements
- [x] Task 5: Contact, footer, and form
- [x] Task 6: Name consistency (Ansari to Tariq)
- [x] Task 6b: Cleanup after audit
- [x] Task 7: Focus visibility, touch targets, skip link
- [x] Task 8: Alt text, reduced motion, and contrast verification

---

## Task 1: Add new tokens

Goal: define the tokens the rest of the plan needs, with no visual change.

Steps:
1. Find where `:root` is defined (a stylesheet or a `<style>` block). Report which file.
2. Add the tokens from `design.md` under "New tokens": `--sage-deep`, `--text-on-sage`, `--border-light`, `--border-light-hover`, `--border-field`, `--font-heading`, `--font-body`, `--tap-min`. Do not change any existing token.
3. Confirm the existing tokens in `design.md` ("Existing tokens") are present with the same values. Report any that are missing or different.
4. Confirm both fonts (DM Serif Display, Space Grotesk) are loaded in `<head>` with `display=swap`. Add `display=swap` if missing. Do not add other fonts.

Acceptance:
- All new tokens exist with the exact names.
- The page looks identical to before.

## Task 2: Light surfaces and section titles (global)

Goal: set the page-wide light theme and make section headings use the hero style.

Steps:
1. Read the hero section's HTML and CSS. Write a short list of its patterns (label, headline, buttons, icon buttons, radius, spacing) in the Task log. These are the reference for Tasks 3 to 5.
2. Hero only: any sage used as text or as a thin glyph on cream (the ampersand, small label, icons) becomes `--sage-deep`. Sage may stay as a fill behind dark text (the primary button). Check hero buttons against the button rules in `design.md`.
3. Give each section below the hero its background from the alternating pattern in `design.md` ("Surfaces"): `--cream-dark`, `--cream`, `--cream-dark`, and so on in page order. Footer: `--cream-darker` with a top border (full footer styling is in Task 5).
4. In the HTML, change every `section-title dark` to `section-title light` and every `section-subtitle dark` to `section-subtitle light`. Keep the `.dark` CSS rules; just stop using them.
5. Apply the global `body`, `h1-h6`, and `.serif` rules from `design.md` ("Typography") using the font tokens.
6. Do not restyle individual cards or components yet.

Acceptance:
- No section has a dark background. Section backgrounds alternate down the page.
- Every section title is `--text-dark` and every subtitle is `--text-dark-secondary`.
- Section content may look unfinished (cards still styled for dark). That is expected until Tasks 3 to 5.

## Task 3: About, Work Experience, Education

Goal: restyle these three sections to the light theme.

Steps:
1. Cards: background, border, radius, and hover from `design.md` ("Surfaces"). Cards alternate against their section as written there.
2. Text: paragraphs `--text-dark-secondary` (or `--text-dark` for lead text), headings `--text-dark`, small metadata `--text-dark-secondary` at 13px or larger.
3. The About photo, the Mission and Vision cards, the experience card, the education cards, tags, and bullet icons: replace any dark-theme color with tokens. Sage icon circles are allowed (sage fill with dark icon). Any sage icon drawn directly on cream uses `--sage-deep`.
4. Remove every use of `--dark-*`, `--text-light`, `--text-light-secondary`, and `--text-sage` in these three sections.

Acceptance:
- These sections match the hero's feel and use only light-theme tokens.
- Layout, copy, and images are unchanged.

## Task 4: Projects, Skills, Certifications, Achievements

Goal: restyle these four sections.

Steps:
1. Same card, text, and token rules as Task 3.
2. Project cards: tags are pill-shaped with `--sage-muted` or `--cream` fill, `--text-dark` text, and a `--border-light` border. Tech tags likewise. The Client and Practice tags must remain visually distinct by text and shape, not only by color.
3. Skills: bar track is `--cream-darker`, fill is `--sage-deep`, and the percentage or level is shown as text next to each bar. Do not use plain sage for the fill.
4. Certifications and Achievements: the stat tiles, certificate card, and award image caption follow the card rules. Links use `--sage-deep` with underline.
5. Remove every use of `--dark-*`, `--text-light`, `--text-light-secondary`, and `--text-sage` in these sections.

Acceptance:
- Skill bars are visible against their track, with level text.
- No dark-theme token remains in these sections.

## Task 5: Contact, footer, and form

Goal: restyle Contact and the footer, and fix the form.

Steps:
1. Contact card and info panel follow the card rules. Icons use `--sage-deep` or sit in a sage circle with a dark icon.
2. Form: every field gets a visible `<label>` above it, linked with `for` and `id`. Add `autocomplete` for name and email, `type="email"` on the email field, and `required` plus `aria-required="true"` on required fields. Field styling follows `design.md` ("Forms").
3. Add a status element with `role="status"` and `aria-live="polite"` for the submit result. Do not change how the form submits.
4. The send button is the primary button from `design.md`. If it is currently a different color, change it to match.
5. Footer: `--cream-darker` background, 1px `--border-light` top border, text `--text-dark` and `--text-dark-secondary`, links `--sage-deep` with underline.
6. After this task, search the whole project for `--dark-`, `--text-light`, and `--text-sage`. Report every remaining use.

Acceptance:
- Clicking a label focuses its field. No field relies on placeholder text alone.
- No dark-theme token is used anywhere, or the remaining uses are listed for me.

## Task 6: Name consistency (Ansari to Tariq)

Goal: the professional name is "Ammar Tariq" everywhere.

Steps:
1. Search every file (HTML, CSS, JS, JSON, text, meta tags, structured data, alt text, `title`, Open Graph tags, comments) for "ansari", case-insensitive.
2. Replace each occurrence of the name with "Tariq" ("Ammar Ansari" becomes "Ammar Tariq"). Keep capitalization.
3. Replace the current email address everywhere (visible text, `mailto:` links, form action, footer) with `{{EMAIL_TARIQ}}`. Do not invent an address.
4. Check the nav logo and footer monogram read "Ammar Tariq" and "AT".
5. Do not rename files. List any file names or URLs containing "ansari" for me.
6. Finish with every change as `file:line  old  ->  new`.

Acceptance:
- A case-insensitive search for "ansari" returns only the file names and URLs listed for me.

## Task 7: Focus visibility, touch targets, skip link

Goal: keyboard users can see where they are, and phone users can tap accurately.

Steps:
1. Search all CSS for `outline: none`, `outline: 0`, and `:focus { outline`. List them, then remove or replace each with the global `:focus-visible` rule in `design.md`.
2. Make these at least `--tap-min` by `--tap-min` (use padding): nav links, social icon links, buttons, the two certificate links, and the form submit. Keep at least 8px between adjacent targets.
3. Add a "Skip to content" link as the first focusable element, visible only on focus, pointing to the main content. Add an `id` to the main content wrapper if needed.
4. Confirm tab order follows the visual order.

Acceptance:
- Tab from the top reaches every interactive element with a visible focus outline.
- The tap targets listed above measure at least 44px. Report the measured sizes.

## Task 8: Alt text, reduced motion, and contrast verification

Goal: finish accessibility and prove the colors pass.

Steps:
1. Alt text: every `<img>` gets descriptive alt text (what it shows and why it is there; for projects, the project name and what the screenshot shows). Decorative images get `alt=""`. No filenames, no "image of".
2. Reduced motion: disable transitions, animations, scroll reveals, and skill-bar animation under `prefers-reduced-motion: reduce`. The final state of every animated element, including skill-bar fill, must still be visible without motion.
3. Create `tools/check-contrast.js` that reads the token values from the stylesheet and prints the contrast ratio for every row in `design.md` under "Required pairs", marked PASS or FAIL.
4. Run it and print the full table. If any pair fails, do not change colors; tell me which pair fails and by how much.
5. Search the project once more for `--dark-`, `--text-light`, `--text-sage`, `outline: none`, and the word "ansari". Report any remaining hit.

Acceptance:
- No `<img>` is missing `alt`.
- Every required pair is PASS, or the failures are reported to me.

---

## Task log

### Task 1 — 2026-11-07
`:root` lives in `index.css` (line 9). All 8 new tokens (`--sage-deep`, `--text-on-sage`, `--border-light`, `--border-light-hover`, `--border-field`, `--font-heading`, `--font-body`, `--tap-min`) were appended inside `:root` with values exactly as specified in `design.md`.
`body` and `h1–h6` were updated to reference `var(--font-body)` and `var(--font-heading)` instead of raw strings; a `.serif` utility class was also added per `design.md`.
No existing token was changed; `display=swap` was already present on the Google Fonts link; the page looks identical to before.

### Task 2 — 2026-11-07

**Hero patterns (reference for Tasks 3–5):**
- **Label** (`landing-greeting`): Space Grotesk 500, 1rem, uppercase, 3px letter-spacing, `--text-dark-secondary`.
- **Headline** (`landing-name`): DM Serif Display 400, `clamp(3.5rem,9vw,7rem)`, `--text-dark`; ampersand inline italic `--sage-deep`.
- **Sub-label** (`landing-designations`): Space Grotesk 400, `clamp(1rem,2.5vw,1.2rem)`, `--text-dark-secondary`.
- **Body copy** (`landing-intro`): 1.05rem, `--text-dark-secondary`, line-height 1.85.
- **Primary button** (`.btn-primary-light`): `--sage` fill, `--text-on-sage` text, 1px `--sage-deep` border, `--radius-pill`.
- **Secondary button** (`.btn-outline-light`): transparent, 1px `--text-dark` border, `--text-dark` text, `--radius-pill`.
- **Icon buttons** (`.social-icon.light-icon`): 44 × 44px circle, `rgba(0,0,0,0.06)` fill, `--text-dark-secondary` icon, `--text-dark` hover.
- **Radius**: buttons `--radius-pill`; decorative circle is 700px with 1px dashed border; scroll arrow `border-radius: 12px`.
- **Spacing**: label→headline 16px; headline→designations 12px; designations→intro 32px; intro→buttons 40px; buttons→socials 40px.
- **Decorative**: spinning dashed circle (`border: 1px dashed rgba(0,0,0,0.08)`); floating emoji icons at 1.8rem, `opacity: 0.5`; scroll mouse indicator at bottom.
- **Animations**: `fadeInUp` staggered 0.2–1.5s on page load; `heroCircleSpin` 60s infinite; `floatBob` 4s infinite; `scrollBounce` 1.5s infinite.

**Changes made:** All 8 non-hero sections given alternating cream backgrounds (about → `--cream-dark`, experience → `--cream`, education → `--cream-dark`, projects → `--cream`, skills → `--cream-dark`, certifications → `--cream`, achievements → `--cream-dark`, contact → `--cream`); footer set to `--cream-darker` with `--border-light` top border; all 9 `section-title dark` → `section-title light` and 3 `section-subtitle dark` → `section-subtitle light` in HTML; `.dark-section` colour cleared; `.landing-amp` fixed to `--sage-deep`; `.section-title` and `.landing-name` raw font strings → `var(--font-heading)`; `.btn-primary-light` gained 1px `--sage-deep` border per design rules.
Section content (cards, text inside) looks unfinished — expected until Tasks 3–5.

### Task 3 — 2026-11-08
Restyled About, Work Experience, and Education sections to light surfaces (`--cream` and `--cream-dark`) with `--border-light` borders, `--radius-lg`, and soft hover states per `design.md`.
Headings use `var(--font-heading)` and `--text-dark`, body and metadata use `--text-dark-secondary`, company and institution names use `--sage-deep`, and badges/pills use `--sage-muted` with `--text-dark`.
Replaced all legacy dark tokens (`--dark-*`, `--text-light*`, `--text-sage`), raw hex colors, and plain sage text with tokens (`--sage-deep` for bullet points and SVG icons); layout, copy, and images remain unchanged.

### Task 4 — 2026-11-08
Restyled Projects, Skills, Certifications, and Achievements to light theme surfaces (`--cream` and `--cream-dark`) with `--border-light` borders, `--radius-lg`, and subtle hover states per `design.md`.
Project tags and tech pills styled with `--cream` or `--sage-muted` fills, `--text-dark` text, and distinct shapes/borders for Client (pill) vs Practice (rounded dashed); certification links use `--sage-deep` with underlines.
Skill bars now feature visible `--cream-darker` tracks with `--sage-deep` progress fills and level text; stat counters and achievement cards converted to light tokens, eliminating all legacy dark tokens across all four sections.

### Task 5 — 2026-11-08
Restyled Contact section and footer to light theme surfaces (`--cream-dark`, `--cream-darker`) with `--border-light` borders, `--radius-lg`, and updated all contact icons to `--sage-deep` circles.
Fixed form to provide persistent visible `<label>` elements linked with `for`/`id`, added `autocomplete` on name and email, `aria-required="true"` on required fields, boxed styling with `--border-field`, a live status region, and primary send button styling (`--sage` fill, `--text-on-sage`, 1px `--sage-deep` border).
Footer restyled with `--cream-darker` surface, `--border-light` border, `--text-dark` monogram and text, and `--sage-deep` underlined links; audited the project and confirmed zero dark tokens remain in any section content.

### Task 6 — 2026-11-08
Verified professional name "Ammar Tariq" across document title, meta tags, alt text, and footer; verified nav logo reads "Ammar Tariq" and footer monogram reads "AT".
Replaced every instance of the legacy email address across all visible text, mailto links, and the form action with `{{EMAIL_TARIQ}}` (5 occurrences in `index.html`).
Audited the entire project for "ansari", confirming zero occurrences remain in text files and listing the 9 image files containing binary author metadata.

### Task 6b - 2026-11-08
Converted the mobile menu to cream with dark links and light dividers; replaced legacy dark-theme color tokens and palette raw colors with theme tokens or `color-mix()`.
Changed legacy dark button text and subtitle colors to light-theme tokens; confirmed skill fills already use solid `--sage-deep` and level text remains visible beside every bar.
Updated palette rgba values, replaced the contact placeholder with `ammartariq7@hotmail.com` in the spec and HTML, and revised design rule 6 for black/white alpha shadows and overlays.

### Task 7 - 2026-11-08
Verified the global `:focus-visible` outline and first-focusable skip link; no `outline: none` or `outline: 0` rules remain.
Measured target boxes at desktop and 390px; all listed targets meet 44px minimum, and adjacent targets have at least 8px spacing after increasing the mobile nav gap.
Hid the closed off-canvas mobile links from keyboard navigation; confirmed focus order follows the document and visual order when the menu is open.

### Task 8 - 2026-11-08
Added descriptive alt text to the profile portrait, five project screenshots, and award medal, explaining their visible content and purpose.
Added reduced-motion styles that disable animation and transitions and reveal scroll content immediately; skill bars, levels, and counters show final values without animation.
Verified all images have alt attributes; skipped the contrast checker as requested and searched for the specified legacy tokens, outline rule, and name.
