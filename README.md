# Rickey Burns — Enterprise Transformation & Strategic Operations

A responsive, single-page portfolio using the owner-supplied Cross-Industry Site and Case Study Preview ZIP as its baseline. Vanilla HTML/CSS/JavaScript. No frameworks, package manager, APIs, backend, or monthly hosting requirements.

## Start

**Option 1 — Simple:** Open `index.html` in Chrome, Edge, or Firefox.

**Option 2 — Local server:** In this folder, run:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Edit without rebuilding

| What you want to change | Edit this file |
| --- | --- |
| Metrics, career stages, case studies, descriptions, leadership principles, contact links | `assets/js/content.js` |
| Colors, typography, spacing, responsive layout, motion | `assets/css/styles.css` |
| Main headline, hero copy, section titles, download links | `index.html` |
| Counter, timeline, reveal effects, mobile navigation | `assets/js/main.js` |
| Portrait or office imagery | `assets/images/` (keep file names or update content.js) |
| Case study PDF | `assets/docs/` |
| Editable one-page case study | `assets/docs/case-study-source.html` |

Colors and spacing are centralized in CSS custom properties (`:root`). The text and repeated components are data driven by `content.js` so content feedback does not require page rebuilds.

## Verify

```bash
python scripts/verify.py
node --check assets/js/content.js
node --check assets/js/main.js
```

The smoke test validates assets, sections, local links, the primary metrics, and the contact configuration.

## Export the editable case study

Open `assets/docs/case-study-source.html` in Chrome or Edge, edit its native HTML/CSS in a text editor, then print to PDF: Letter, portrait, scale 100%, margins None, background graphics enabled, headers and footers disabled. The source defines a single 8.5 × 11 inch page. Save as `assets/docs/Rickey_Burns_Enterprise_Transformation_Case_Study.pdf` and update the matching `assets/images/case-study-poster.webp` when the design changes. Keep the six blue and three green arrows and verified metric wording. Text remains selectable in the exported PDF.

## Deploy (free static hosting)

Upload this folder's **contents** to a static host such as Cloudflare Pages, Netlify, or GitHub Pages. `index.html` must remain at the root. No build command is needed.

For review, push only a feature branch and use the connected Cloudflare Pages **Preview** deployment. Production tracks `main`; do not merge or deploy production without the owner's explicit approval.

For GitHub Pages, the repository root can be the deployment target. For Cloudflare Pages/Netlify manual upload, upload the whole directory's contents.

## Photo and content notes

- Headshot: supplied by the portfolio owner.
- Office and NYC photographic crops: reused from the owner-approved *V3 Real Photography* case-study graphic, rather than newly generated.
- Source photo references were Pexels photos 31770423, 31731339, and 32715525; license information: https://www.pexels.com/license/ . The photos are not actual integration properties or agency site photos.
- Preserve the distinction between **100% of committed milestones completed** and **100% on-time milestones**. The latter is NOT claimed.
- The case study PDF is included for download.

## Release scope

This is v1 for iterative review. Future edits should be patches to existing sections. Maintain the approved V3 visual identity, verified numbers, and mobile performance unless the owner requests a change.

## GitHub and Codex editing

Start with [`GITHUB_SETUP.md`](GITHUB_SETUP.md). The proposed small-change edit queue is in [`CODEX_PLAN.md`](CODEX_PLAN.md), and Codex should obey [`AGENTS.md`](AGENTS.md). No build tool required.
