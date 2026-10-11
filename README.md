# Rickey Burns — Integration Leadership Portfolio (v1)

A fully working, responsive, single-page portfolio inspired by the approved V3 case study. Vanilla HTML/CSS/JavaScript. No frameworks, package manager, APIs, backend, or monthly hosting requirements.

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

Colors and spacing are centralized in CSS custom properties (`:root`). The text and repeated components are data driven by `content.js` so content feedback does not require page rebuilds.

## Verify

```bash
python scripts/verify.py
node --check assets/js/content.js
node --check assets/js/main.js
```

The smoke test validates assets, sections, local links, the primary metrics, and the contact configuration.

## Deploy (free static hosting)

Upload this folder's **contents** to a static host such as Cloudflare Pages, Netlify, or GitHub Pages. `index.html` must remain at the root. No build command is needed.

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
