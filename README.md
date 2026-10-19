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
| Editable two-page Executive Impact Brief | `assets/docs/case-study-source.html` |

Colors and spacing are centralized in CSS custom properties (`:root`). The text and repeated components are data driven by `content.js` so content feedback does not require page rebuilds.

## Verify

```bash
python scripts/verify.py
node --check assets/js/content.js
node --check assets/js/main.js
```

The smoke test validates assets, sections, local links, the primary metrics, and the contact configuration.

## Export the editable case study

Open `assets/docs/case-study-source.html` in Chrome or Edge, edit its native HTML/CSS in a text editor, then print to PDF: Letter, portrait, scale 100%, margins None, background graphics enabled, headers and footers disabled. The source defines two 8.5 × 11 inch pages with explicit page breaks. Save as `assets/docs/Rickey_Burns_Enterprise_Transformation_Case_Study.pdf` and update the matching `assets/images/case-study-poster.webp` when the design changes. Keep the six blue and three green arrows and verified metric wording. Text remains selectable in the exported PDF.

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

## Coordinated branded downloads

The live download set is `assets/docs/Rickey_Burns_Enterprise_Transformation_Case_Study.pdf` (two Letter pages) and `assets/docs/Rickey_Burns_Executive_Resume.pdf` (two Letter pages). Editable HTML/CSS sources are `case-study-source.html` and `resume-source.html` in the same directory. A linear recruiter-friendly companion is `Rickey_Burns_Resume_ATS.txt`.

Export either HTML source in Chrome/Edge with Letter paper, portrait, scale 100%, no margins, background graphics on, and browser headers/footers off. Both sources have explicit page breaks. Keep text native; do not flatten pages into images. Re-render and inspect every page after edits. Refresh the case-study poster from the final source after case-study changes.

Source resume supplied for this work: `Rickey_Burns_Cross_Resume_2.docx` (owner-attached Desktop file; SHA-256 `2b9a0822b5c3856f11bb9a54b4fde1a8b25bcc45a59fdcab7b3f8f667f03e669`). The request called it `Rickey_Burns_Cross_Resume_2(3).docx`; the attached file is the actual content source. Explicit owner metric standards supersede its investment and on-time claims: $60M+ enterprise portfolio; 25 simultaneous initiatives; all 25 completed in 20 months; 50% shorter delivery cycle; 100+ organizations; 1,000+ employees supported; completion of committed initiatives/milestones. The education typo is normalized to Expected 2028.

## Executive Impact Brief

The case-study download is now a two-page Executive Impact Brief. Page 1 stands alone with the cinematic mountain-road opening, signature results, six-blue/three-green-arrow comparison and milestone completion. Page 2 adds three challenge/action/result examples and operational leadership evidence. The stable PDF filename is retained so existing downloads continue to work. The website poster shows page 1 and labels the download as two pages.

Systems aligned uses the scoped `icon-network` symbol. Keep `icon-gear` unchanged for other components. The approved executive resume PDF, its editable source, and the cleaned ATS text are unchanged by this redesign.

## Cinematic Journey preview

The owner-authorized 2026-10-19 redesign is isolated on feature/cinematic-executive-journey. assets/css/cinematic.css holds the cinematic presentation overrides; existing stylesheets and all document sources remain intact. The optimized road WebP derives from the approved existing photograph. Native disclosures, chapter navigation and replay enhance the same vanilla site. See docs/CAREER_PORTFOLIO_CONTINUITY.md for the review checkpoint. Production requires explicit owner approval.
