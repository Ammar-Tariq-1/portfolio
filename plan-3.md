# Phase 3: About redesign and Experience details

Companion files: `design.md` (tokens, accessibility) and `content.md` (all copy). Read both before each task. Phases 1 and 2 are finished.

## Rules

- One task per session. Do not start the next one.
- Static HTML, CSS, and JavaScript only. No new dependency or font family.
- Use tokens from `design.md`. Use the copy in `content.md` exactly. Never invent copy.
- Archive before removing: copy removed markup into `archive/removed-sections.html` with an HTML comment naming it.
- Mark `[CONFIRM]` text with `data-confirm="true"`.
- Tick the task below and add a 3-line summary to the Task log when done.

## Status

- [x] Task 1: About redesign (no photo)
- [x] Task 2: Experience cards with details

---

## Task 1: About redesign (no photo)

Layout, top to bottom, inside the existing `#about` section:
1. Section title "About me" (existing style).
2. Big headline "DESIGN × CODE": heading font, uppercase, `font-size: clamp(2.8rem, 9vw, 7rem)`, line-height 1, `--text-dark`. The × uses `--sage-deep`. It is a decorative `h3` with an accessible text equivalent ("Design and code").
3. Two text columns (1fr / 1fr, gap 48px, each max-width 52ch), body size 1.1rem, line-height 1.7, `--text-dark-secondary`. Under 768px, one column.
4. Journey line, 64px below the text:
   - An ordered list (`<ol>`) laid out horizontally: a 1px `--text-dark` line across the full width with an arrowhead at each end (inline SVG or CSS).
   - A large word at each end in the heading font at about 3rem to 5rem: left "2024", right "NOW". Both `--text-dark`.
   - Three pills sit on the line between them, evenly spaced: `--cream` fill, 1px `--text-dark` border, `--radius-pill`, 14px text, 44px minimum height. Pill text from `content.md`.
   - Under 768px: the line turns vertical, with the large words at the top and bottom and the pills stacked down the line.
5. No photo. Remove the photo markup, its CSS, and any image-only layout rules for About. Keep the section background alternation.

Steps:
1. Archive the old About markup (photo, paragraph, education line).
2. Build the new layout with the copy in `content.md` ("About"). Mark the `[CONFIRM]` paragraph.
3. Check 390px, 768px, and 1280px widths for clipping or horizontal overflow. Do not rely on `overflow-x: hidden`.
4. The journey line must be readable in reading order for a screen reader (the `<ol>` order).

Acceptance:
- No image in About. Two text columns. A horizontal journey line with three pills on desktop, vertical on mobile.
- No horizontal overflow at any width.

## Task 2: Experience cards with details

Problem: the Experience cards show only role and company, with a large empty area. Find out why before changing anything.

Steps:
1. Open the Experience markup in `index.html`. Report whether the summary, bullet list, tools, and link elements exist in the HTML.
2. If the bullets exist but are not visible, find the cause (opacity 0, a scroll-reveal class, a color matching the background, a height or overflow rule) and fix it so the content is visible by default. Report the cause.
3. If the content is missing, add it.
4. Build each card from the slots in `content.md` ("Experience", including the table of what goes where):
   - Two columns on desktop (left about 30%, right the rest); one column on mobile.
   - Left column: dates (`--text-dark`, 15px, medium emphasis) and location (`--text-dark-secondary`, 13px).
   - Right column, top to bottom: role (`h3`, heading font), company (`--text-dark-secondary`, linked if a URL exists), one-line summary (1.05rem), bullet list (15px, `--text-dark-secondary`, 8px between items, a small `--sage-deep` marker), tools as small pill chips (same style as the Tools section), then the optional link.
   - If a slot has no content, omit it. No empty headings or empty areas.
5. Use the exact text in `content.md`. Do not add bullets or results.
6. Both cards must look complete at 390px, 768px, and 1280px.

Acceptance:
- Both cards show dates, location, role, company, summary, bullets, tools, and (card 1) the link.
- All text is visible with JavaScript disabled and passes the contrast pairs in `design.md`.

---

## Task log

- Replaced About with the sourced two-column copy, oversized headline, and ordered journey; the old markup is archived.
- Removed the About photo and photo-only layout rules while preserving the existing cream section surface.
- Checked 390px, 768px, and 1280px viewports in Edge; no clipping or horizontal overflow remains.
- Reported missing summaries, tools, and links; the JS-only bullet fade had no observed parent to reveal it.
- Rebuilt both Experience cards from the exact content.md slots and archived the previous card markup.
- Kept bullets visible by default; checked 390px, 768px, and 1280px with no clipping or horizontal overflow.
