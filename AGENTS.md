# Codex Efficiency Contract — Rickey Burns Portfolio

## Objective
Maintain the approved V3-inspired single-page site, preserving user-verified wording and metrics. Optimize for minimal tokens, minimal file churn, and tiny diff-based feedback loops.

## Workflow — every request
1. Read `README.md` and inspect only the section/files relevant to the requested change.
2. Make the smallest localized edit; do NOT regenerate or rewrite the whole site.
3. For content changes, edit `assets/js/content.js` or the corresponding passage in `index.html` only.
4. For visual edits, adjust existing CSS rules and `:root` design tokens before adding new markup or libraries.
5. For animation/interaction bugs, edit `assets/js/main.js`; preserve reduced-motion and keyboard accessibility.
6. Run `python scripts/verify.py`, `node --check assets/js/content.js`, and `node --check assets/js/main.js`. Test at 390px and 1440px if styling changes.
7. Report changed files, what changed, what was tested, and any blocker. No unsolicited redesigns or dependency installs.

## Locked content / accuracy
- 25 integrations completed in 20 months.
- $60M in annual revenue across these 25 integrations (wording approved in V3).
- Integration playbook reduced from six to three months (50% cycle reduction).
- 100+ acquired organizations supported across career.
- 1,000+ employees impacted.
- 100% of **committed milestones completed**; do NOT change to 100% on time.
- Career: Field Integration → Systems Engineering → Application & Data Migration PM → Accountable Integration Leader.
- Independent examples: six sites; five sites/~50 employees; three sites across NYC/$20M annual revenue.
- No identifying acquired agency or HUB office photos/addresses/names. No visible image disclaimer.
- The user's headshot and V3 case study graphic are owner supplied; preserve them.

## Engineering constraints
- Vanilla JS/CSS/HTML, no frameworks or CDNs without explicit request.
- Dynamic repeated cards live in `content.js`; motion code lives in `main.js`.
- Respect `prefers-reduced-motion`, `aria-*`, keyboard navigation, and mobile layouts.
- Keep local asset references relative for easy GitHub Pages/Cloudflare Pages deployment.
- Do not add user tracking, analytics, forms, or collection of personal data without authorization.

## Reusable minimal Codex prompt
"In the existing Rickey Burns portfolio, implement ONLY [specific change]. Inspect the relevant components first. Make a small targeted diff; preserve V3 design/content and all other behaviors. Run the existing smoke check and JS syntax checks. Summarize files changed and results. Do not rewrite the site."
