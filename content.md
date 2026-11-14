# Content for the restructured portfolio

All copy for plan-2.md lives here. Use it exactly. Do not rewrite it or add claims.

## Markers

- `[EXAMPLE]` = sample text I (the owner) will replace with real text. It must be wrapped in an element with `data-placeholder="true"` and show the visible "Example" flag described in plan-2.md.
- `[CONFIRM]` = a fact the owner must verify. Leave the text as written and mark the element `data-confirm="true"`.
- `{{DOUBLE_BRACES}}` = a value the owner fills in. Never invent it.

Text with no marker is based on facts the owner supplied and can ship as is.

---

## Hero (keep as is, plus one button in Task 7)

Add a text link/button "Download resume" next to the existing buttons. File: `resume/ammar-resume.pdf`. Keep it visible as a secondary outline button with the `download` attribute; the final resume file is present.

---

## Selected work

Section title: **Selected work**
Subtitle: Three real builds, from a company website to a custom-coded business site and an online store.

### 1. Energy For You

- Category tags: `Company website` `Internship`
- Summary: A product website for Energy For You, an authorized Sungrow distributor in Pakistan, built from scratch during my internship at Voltaic Power.
- Problem: `[EXAMPLE]` The distributor needed a clear online home for its inverters and batteries, so customers could browse products and get in touch.
- What I built: A responsive WordPress site with an Elementor design, a product mega menu, product pages for hybrid inverters and batteries, a news section, an FAQ, and a contact form with authenticated email delivery.
- Role: Sole developer on the build, working with my mentors at Voltaic Power.
- Duration: 2 to 22 July 2026
- Stack: WordPress, Elementor, Contact Form 7, WP Mail SMTP, cPanel
- Result: `[EXAMPLE]` Delivered to the team within the internship and now live at energyforyou.net.
- Button: "View live site" -> https://energyforyou.net/ (new tab, `rel="noopener noreferrer"`)
- Image: use the existing Energy For You image if the project has one. If not, leave `{{EFY_IMAGE}}` and report it.

### 2. TA Labels

- Category tags: `Custom build` `Client`
- Summary: A fully custom, dynamic website for TA Labels, a label manufacturer and wholesaler, with its own admin dashboard.
- Problem: `[EXAMPLE]` The business needed to show its label and packaging range online and manage that content without calling a developer.
- What I built: The front end, back end, and database, written from scratch, plus an admin dashboard so the owner can update the site content.
- Role: Sole developer, from design to deployment.
- Stack: HTML, CSS, JavaScript, PHP, MySQL
- Result: `[EXAMPLE]` The owner now updates products and content from the dashboard without touching code.
- Button: "View live site" -> https://talabels.site.je/ (new tab, `rel="noopener noreferrer"`)

### 3. Navni Organic

- Category tags: `E-commerce` `Client`
- Summary: An online store for Navni Organic, an organic skincare brand.
- Problem: `[EXAMPLE]` The brand needed to sell its products online with a clean, trustworthy shopping experience that works on phones.
- What I built: A WooCommerce store with an Elementor and ShopEngine design: product pages, cart, and checkout, tested across devices.
- Role: Sole developer, from design to deployment.
- Stack: WordPress, WooCommerce, Elementor, ShopEngine
- Result: `[EXAMPLE]` The store went live and the owner now manages products and orders herself.
- Button: "View live site" -> https://navniorganic.com/ (new tab, `rel="noopener noreferrer"`)

### Other builds (small row below the three)

Title: **Other builds**
Subtitle: Practice projects I built to sharpen specific skills.

- Baskeria: a restaurant site with a menu, chefs, and an about page. Tags: HTML/CSS, JavaScript, Bootstrap. Link: keep the existing link.
- Foodmart: a grocery storefront UI with category browsing, product grids, and a cart flow. Tags: HTML/CSS, JavaScript, Bootstrap, AJAX. Link: keep the existing link.

Educrown is removed from the page (archive it per plan-2.md).

---

## Testimonials

Section title: **What clients say**

All three are `[EXAMPLE]` and must stay flagged until the owner replaces them with real quotes and real names.

1. Quote: "Ammar built our online store from scratch and handled everything, from the design to getting it live. It looks professional and our customers find it easy to use."
   Name: `{{CLIENT_NAME}}` | Role: `{{ROLE_AND_BRAND}}` | Project: Navni Organic

2. Quote: "We needed a site we could manage ourselves, and Ammar delivered one with an admin dashboard. He explained what he was building and made the changes we asked for."
   Name: `{{CLIENT_NAME}}` | Role: `{{ROLE_AND_BRAND}}` | Project: TA Labels

3. Quote: "Ammar took ownership of the Energy For You website and kept improving it throughout his internship. He was reliable, and he fixed problems quickly."
   Name: `{{MENTOR_NAME}}` | Role: `{{ROLE_AT_VOLTAIC_POWER}}` | Project: Energy For You

---

## Services

Section title: **What I can build for you**
Subtitle: Websites for small businesses, built and launched end to end.

1. **Business websites**
   Fast, responsive company sites in WordPress and Elementor, with forms, blogs, and product pages you can edit yourself.
   Good for: companies, distributors, and service businesses.

2. **Online stores**
   WooCommerce stores with product pages, cart, and checkout, designed to feel trustworthy on a phone.
   Good for: brands that want to sell online.

3. **Custom web apps**
   Hand-coded PHP and MySQL sites with an admin dashboard, so you can manage content without a developer.
   Good for: businesses with their own catalog or workflow.

---

## About (replaces the current About section; no photo)

Section title: **About me**

Big headline (heading font, very large, uppercase, the x in `--sage-deep`): **DESIGN × CODE**

Two text columns under the headline.

Left column:
- "I'm Ammar Tariq, a web developer in Karachi. Since 2024 I've built business websites and online stores for clients, from the first layout to the hosting."
- "In July 2026 I built the Energy For You distributor website during an internship at Voltaic Power."

Right column:
- `[CONFIRM]` "I care about the practical side of the web: sites that load fast, read clearly on a phone, and that the owner can keep updating without calling me."
- "I'm looking for businesses and teams who want one developer to own the whole project. Right now I'm studying HSC Computer Science at Commecs College, Karachi (expected 2027)."

Journey line (below the text): a horizontal line with an arrow at each end. A large word at the left end and the right end, and three pills along the line.
- Left word: **2024**   Right word: **NOW**
- Pill 1: Aug 2024 · Started freelancing
- Pill 2: 2025 · Advanced Web Development certificate
- Pill 3: Jul 2026 · Internship at Voltaic Power

Remove the photo, the old About paragraph, and the education line (the education line now lives in the right column).

---

## Experience

Section title: **Experience**

### What goes where (the slots every card must fill)

| Slot | Where it appears | What to write |
|---|---|---|
| Dates | Left column, top | Month and year range. |
| Location | Left column, under the dates | City, or "Remote". |
| Role | Right column, heading | Your job title. |
| Company | Right column, under the role | Company name (link it if it has a site). |
| Summary | Right column, one line under the company | One sentence: what you were there to do. |
| Bullets | Right column, list of 3 to 5 | Start with a verb, say what you built or fixed, and for whom. Add a real result only if you have one. |
| Tools | Right column, row of small chips | The 4 to 6 tools you used on that job. |
| Link | Right column, last line (optional) | A live URL for the work. |

Bullet formula: **Verb + what you built or fixed + for whom or where.** Example: "Built the product mega menu and product pages for the Energy For You site."

### Card 1: Voltaic Power, Karachi

- Dates: 2 to 22 July 2026
- Location: Karachi, on site
- Role: Web Developer Intern
- Company: Voltaic Power Pvt Ltd
- Summary: Built the Energy For You distributor website from scratch, working with my mentors at Voltaic Power.
- Bullets:
  - Built the Energy For You website from scratch in WordPress and Elementor, from layout to launch.
  - Created the product mega menu, product pages for inverters and batteries, an FAQ, and the blog section.
  - Set up authenticated SMTP email for the contact and file-upload forms, and fixed form validation and delivery problems.
  - Tested the site across browsers and devices after every change.
  - Also worked on Voltaic Power's own website, and turned mentor feedback into daily improvements.
- Tools: WordPress, Elementor, Contact Form 7, WP Mail SMTP, cPanel
- Link: "energyforyou.net" -> https://energyforyou.net/

### Card 2: Freelance

- Dates: August 2024 to present
- Location: Remote, Karachi
- Role: Full-Stack Web Developer
- Company: Self-employed
- Summary: Design, build, and launch websites for small businesses, working directly with the owners.
- Bullets:
  - Built a WooCommerce online store for Navni Organic with Elementor and ShopEngine.
  - Built a fully custom, dynamic website with an admin dashboard for TA Labels, covering the front end, back end, and database.
  - Took each project from design to hosting and deployment, so clients dealt with one person from start to launch.
- Tools: WordPress, WooCommerce, PHP, MySQL, JavaScript, Figma
- Link: none

No empty headings. If a slot has nothing yet, leave that line out of the card entirely.

---

## Tools

Section title: **Tools I work with**
Subtitle: What I use to build and launch websites.

- Front end: HTML, CSS, JavaScript, jQuery, AJAX, Bootstrap
- Back end: PHP, Python, MySQL, Supabase
- CMS and e-commerce: WordPress, WooCommerce, Elementor, ShopEngine
- Design: Figma, Adobe XD, Photoshop, Canva
- Hosting and tools: Git, GitHub, cPanel, Hostinger, Netlify, InfinityFree

---

## Recognition

Section title: **Recognition**

Three cards in a row on desktop:

1. Certificate in Smart Web Designing. Skill Development Council Karachi, August 2024 to January 2025, grade A. Link: keep the existing "View Designing Certificate" link.
2. Advanced Certificate in Web Development. Skill Development Council Karachi, June to November 2025, grade A-1. Link: keep the existing "View Development Certificate" link.
3. Winner, Web Designing Competition. Korean Computer Academy. Keep the existing medal image and its alt text.

No stat counters. Remove the "Years Experience", "Certifications", "Projects", and "Award" tiles.

---

## Call-to-action band (before Contact)

Headline: **Open for internships and freelance projects.** `[CONFIRM]`
Line: Tell me about your project and I'll reply within a couple of days. `[CONFIRM]`
Button: "Get in touch" -> `#contact`

---

## Contact form addition

Add one select field above Message. Label: **What are you looking for?**
Options: Business website | Online store | Custom web app | Internship or job | Something else
It is optional. Keep the existing form fields and submit behavior.
