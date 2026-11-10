# Portfolio restructure: phase 2 plan

Companion files: `design.md` (tokens, surfaces, accessibility) and `content.md` (all copy and links). Read both before every task.

Phase 1 (`plan.md`, Tasks 1 to 8) must be finished first. If any phase 1 task is unticked, stop and tell me.

Goal: replace the middle sections with a proven structure: selected work, testimonials, services, about, experience, tools, recognition, then a call to action and contact. Header, hero, contact layout, and footer stay as they are, apart from the small changes listed.

## How to use this file

1. Do exactly one task per session, in order. Do not start the next one.
2. Before Task 1, I will commit to Git. Do not run Git commands yourself.
3. When a task is done, tick its box below and add a 3-line summary under "Task log".
4. If something is unclear or a file is missing, stop and ask.

## Global rules

- Static HTML, CSS, and JavaScript only. No framework, build step, new dependency, or new font family.
- Use tokens from `design.md`. No new raw colors outside `:root`, except pure black or white alpha for shadows and overlays.
- Use the copy in `content.md` exactly. Never invent copy, numbers, names, links, or results.
- Placeholders: any text marked `[EXAMPLE]` goes in an element with `data-placeholder="true"` and class `placeholder-flag-target`. Any text marked `[CONFIRM]` gets `data-confirm="true"`. `{{...}}` values stay as written.
- Removing a section: do not just delete it. First copy its full markup into `archive/removed-sections.html` (create the folder and file once, append after that), with an HTML comment naming the section. Then remove it from `index.html`.
- Do not rename or move existing files. Do not touch the header, hero text, or footer except where a task says so.
- Every new image needs descriptive alt text. Every new interactive element needs a visible focus style and a 44px minimum target (see `design.md`).
- External links open in a new tab with `rel="noopener noreferrer"`.
- Make the smallest change that meets the acceptance criteria.

## Status

- [x] Task 1: Section order, nav, and placeholder styles
- [x] Task 2: Selected work (three case studies)
- [x] Task 3: Other builds and testimonials
- [x] Task 4: Services and call-to-action band
- [x] Task 5: About and Experience
- [x] Task 6: Tools and Recognition
- [x] Task 7: Hero resume button, contact select, and header/footer links
- [x] Task 8: Verification and placeholder audit

---

## Task 1: Section order, nav, and placeholder styles

Steps:
1. Create the section skeletons in this order, each with an `id` and a section title from `content.md`: Hero, Selected work (`#work`), What clients say (`#testimonials`), What I can build for you (`#services`), About (`#about`), Experience (`#experience`), Tools (`#tools`), Recognition (`#recognition`), call-to-action band (`#cta`), Contact (`#contact`), Footer. Reuse the existing About, Contact, and footer markup; the other sections start empty except for their title and subtitle.
2. Archive then remove the old Education, Certifications, and Achievements sections. Leave Projects and Skills in place for now, below Recognition, so nothing is lost; later tasks archive them.
3. Nav links, in this order: Work (`#work`), Services (`#services`), About (`#about`), Experience (`#experience`), Contact (`#contact`). Keep the nav styling.
4. Alternate section backgrounds (`--cream`, `--cream-dark`) in the new order, per `design.md` "Surfaces".
5. Add placeholder styles. A small visible badge on every `[data-placeholder="true"]` element: text "Example", 12px, `--sage` fill, `--text-on-sage` text, `--radius-pill`, shown above the element. Also add a subtle dashed 1px `--border-field` outline on `[data-placeholder="true"]`. Add `[data-confirm="true"]` with a small "Confirm" badge in the same style.

Acceptance:
- Sections appear in the order above and the nav scrolls to each.
- Background colors alternate down the page.
- The placeholder styles exist (test by adding the attribute to one element, then remove the test).

## Task 2: Selected work (three case studies)

Layout (each of the three projects is one row, stacked vertically, 64px apart):
- Two columns on desktop (55% image, 45% text), image always on the left. On screens under 768px, image on top and text below.
- Image: the project screenshot in a `--radius-lg` card with a 1px `--border-light` border. Keep the existing project images (Navni Organic and TA Labels already exist; see `content.md` for Energy For You).
- Text column, top to bottom: category tags (small pill tags), project name (`h3`, heading font), one-line summary, then a three-item definition list labeled Problem, What I built, and Result (labels in `--sage-deep`, small caps off, 13px; text in `--text-dark-secondary`), then stack tags, then one primary button.
- Primary button text: "View live site". Primary button style per `design.md`.
- Problem and Result lines marked `[EXAMPLE]` use the placeholder attribute.

Steps:
1. Fill the Selected work section from `content.md`, in this order: Energy For You, TA Labels, Navni Organic.
2. Reuse the existing Navni Organic and TA Labels images. If there is no Energy For You image, leave `{{EFY_IMAGE}}` as a labeled empty card and report it.
3. Archive the old Projects section's Navni Organic and TA Labels cards (copy only those two cards' markup to the archive file). Do not remove the other projects yet.

Acceptance:
- Three rows with the exact copy from `content.md`. Three working external links.
- Every Problem and Result line is flagged as an example.

## Task 3: Other builds and testimonials

Other builds (below the three case studies, same section):
- A compact two-column grid of small cards for Baskeria and Foodmart: thumbnail (existing image), name, one-line description, tech tags, and a text link using the existing URL.
- Archive the old Projects section completely now (all remaining cards, including Educrown), then remove it. Educrown does not appear on the page.

Testimonials:
- Three cards in a row on desktop, stacked on mobile.
- Each card: a large decorative opening quote mark in `--sage-deep`, the quote text (1.05rem, `--text-dark`), then name (bold), then role and brand, then a small "Project: ..." line in `--text-dark-secondary`.
- Cards follow the card rules in `design.md`.
- Each testimonial card gets `data-placeholder="true"` until the owner replaces it.

Acceptance:
- Other builds shows exactly Baskeria and Foodmart.
- Three testimonial cards with the copy from `content.md`, all flagged.
- The old Projects section is only in the archive file.

## Task 4: Services and call-to-action band

Services:
- Three cards in a row (stacked on mobile), each with a sage circle icon (simple inline SVG), a title (`h3`), a two-line description, and a "Good for" line in `--text-dark-secondary`.
- No prices, no buttons inside the cards.

Call-to-action band (`#cta`):
- Centered. Headline in heading font, one line below it, and one primary button "Get in touch" linking to `#contact`.
- Headline and line carry `data-confirm="true"`.

Acceptance:
- Three service cards with the exact copy from `content.md`.
- The button scrolls to the contact section.

## Task 5: About and Experience

About:
- Replace the About paragraph with the one in `content.md`. Keep the existing photo and its layout.
- Add the education line as a small text line under the paragraph.
- Archive and remove the Mission and Vision cards.

Experience:
- Two stacked cards, most recent first.
- Each card is two columns on desktop: the left column (about 30%) has the date range and the location; the right column has the role, then the company name, then the bullet list. On mobile, stack them.
- Use the bullets from `content.md` exactly.
- Archive and remove the old Work Experience section.

Acceptance:
- About matches `content.md`. Mission and Vision are gone.
- Two Experience cards, Voltaic Power first, with no empty headings.

## Task 6: Tools and Recognition

Tools:
- Five groups in a responsive grid (3 columns on desktop, 2 on tablet, 1 on mobile). Each group has a label (13px, `--sage-deep`) and a wrap of pill chips (`--cream` or `--cream-dark` fill, 1px `--border-light`, `--text-dark`, 13px).
- No bars, no percentages, no levels.
- Archive and remove the old Skills section.

Recognition:
- Three cards in a row on desktop (stacked on mobile), using the exact text in `content.md`: Smart Web Designing certificate, Advanced Web Development certificate, and the competition win. Keep the existing certificate links (map "View Designing Certificate" to the Smart Web Designing card and "View Development Certificate" to the Advanced Web Development card) and the existing medal image with its alt text.
- Remove the stat counters. Archive the old Achievements content if any remains.
- Also remove any leftover counter JavaScript that is no longer used. List what you removed.

Acceptance:
- Tools shows the five groups from `content.md`.
- No skill bars, counters, or percentage text remain on the page.

## Task 7: Hero resume button, contact select, and header/footer links

Steps:
1. Hero: add a text-style button "Download resume" next to the existing hero buttons. It links to `{{RESUME_PDF_PATH}}` and uses the `download` attribute. It must be a secondary (outline) button so the hero keeps one primary button. Add the `hidden` attribute and `data-confirm="true"` so it does not show until the owner sets the real path and removes `hidden`. Report that it is hidden.
2. Contact form: add the optional select field "What are you looking for?" with the options in `content.md`, with a visible label, above the Message field. Keep every existing field and the submit behavior.
3. Header and footer: the email address and the GitHub and LinkedIn links must be reachable from both the nav area (a small mail icon link, 44px target) and the footer. Keep the existing footer layout. Use the existing icons.

Acceptance:
- The resume button, select field, and both contact entry points work and are keyboard reachable.

## Task 8: Verification and placeholder audit

Steps:
1. Run `node tools/check-contrast.js index.css`. Report the table. Do not change colors; report failures.
2. List every element with `data-placeholder="true"` or `data-confirm="true"`, and every remaining `{{...}}` value, as a table: file, line, text, status.
3. Check every new image has descriptive alt text.
4. Check every new interactive element: focus outline visible, 44px target, correct `rel` on external links.
5. Check at 390px width: no horizontal scroll, case-study rows and cards stack correctly.
6. Check the section order and nav anchors against Task 1.
7. Search the project (excluding `plan.md`, `plan-2.md`, `archive/`) for "Educrown", "Mission", "Vision", "Years Experience", and "ansari". Report any hit.
8. Report whether the resume button is still hidden and whether `{{RESUME_PDF_PATH}}` is still a placeholder.
9. Search for "ansari" in `index.html`, CSS, and JS (not `plan.md`, `plan-2.md`, or `archive/`), including any link or text that contains the old portfolio address `ammar-ansari.netlify.app`. Report every hit.
10. Do not publish or change placeholder text. The owner replaces it.

Acceptance:
- A complete table of placeholders and confirmations, and a pass or fail result for each check.

---

## Task log

### Task 1
Added empty skeletons for Selected work, Testimonials, Services, Tools, Recognition, and the call-to-action band; reordered existing About, Experience, Projects, Skills, and Contact sections.
Updated the navigation to Work, Services, About, Experience, and Contact; applied alternating cream surfaces and added Example/Confirm placeholder badge styles.
Archived and removed Education, Certifications, and Achievements; left Projects and Skills below Recognition for the following tasks.

### Task 2
Built the Energy For You, TA Labels, and Navni Organic case-study rows in the required order using the supplied copy, links, category tags, and stack details.
Flagged all six Problem and Result lines as examples; used existing TA Labels and Navni screenshots and left the Energy For You image as the labeled {{EFY_IMAGE}} placeholder because no asset exists.
Archived only the legacy Navni and TA Labels project cards; the other existing Projects cards remain on the page for Task 3.

### Task 3
Added the Baskeria and Foodmart cards under Other builds with supplied descriptions, tags, existing images, and provided project links.
Added three testimonial cards using the supplied copy and kept each card flagged as a placeholder.
Archived the complete legacy Projects section, including Educrown, then removed it from the page.

### Task 4
Added the three service cards with the supplied titles, descriptions, and Good for lines, plus sage circle icons.
Centered the CTA band and added its supplied confirmation-marked headline and supporting line.
Added the primary Get in touch button linking to #contact and responsive card styling for mobile.

### Task 5
Replaced the About copy with the supplied paragraph, kept the existing photo, and added the education line.
Archived and removed the Mission and Vision cards, then archived the old Work Experience section.
Built two responsive Experience cards in the requested order with the supplied dates, locations, roles, companies, and bullets.

### Task 6
Added the five Tools groups with supplied labels and chips, and removed the Skills section after archiving it.
Added the three Recognition cards, retained the existing certificate links, and reused the archived medal image with its existing alt text; Achievements content was already archived in Task 1.
Removed obsolete skill-fill/percentage and achievement stat-counter JavaScript, including reduced-motion initialization and observer hooks.

### Task 7
Added the hidden secondary Download resume link with the unchanged {{RESUME_PDF_PATH}} placeholder and added the optional labeled contact select.
Added a 44px mail icon link to the navigation and ensured email, GitHub, and LinkedIn are available in the footer and existing social links.
Updated the LinkedIn URLs supplied by the owner and added secure rel attributes to external social links.

### Task 8
Ran the contrast checker: all 17 required contrast pairs pass; audited all placeholder and confirmation markers and remaining template values.
Reviewed image alt text, focus and touch-target styles, external and section links, section order, and requested legacy-content searches.
Recorded verification failures: hero copy clips at 390px, legacy quick links are stale, and the Contact LinkedIn link remains `#`.
