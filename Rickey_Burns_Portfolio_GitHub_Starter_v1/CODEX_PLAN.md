# Approved V1 baseline and targeted V2 expansion roadmap

## Non-negotiable
- Treat the original V1 design as the approved baseline. Do not regenerate the site or swap the framework.
- HTML/CSS/vanilla JavaScript only, no package manager/build or hosted backend.
- Use existing `AGENTS.md` workflow and smoke test. Each task below is a separate, small, reviewable PR.
- Keep the approved infographic and PDF intact; preserve headshot and licensed photo crops.
- Never publish confidential HUB agency identities, internal locations, or proprietary material.
- Preserve the distinction between milestone completion and on-time delivery.
- Do not invent credentials, technologies, certifications, employment dates, or skills. Verify any new details against owner-approved resume or ask.

## Task 1 — navbar simplification (first Codex PR)
Owner feedback: Remove the top-left header element showing the RB square and Rickey Burns/PMP Integration Leader text. Leave all other navigation, layout, menu, buttons, hero, and footer unchanged. Inspect `.site-header`, `.brand`, and nav CSS/JS dependencies before removing markup. Maintain mobile nav alignment, scroll/top behavior, and accessibility. Test desktop 1440 and mobile 390 widths.

## Task 2 — in-depth career and technology profile (separate PR)
Owner wants this to be the comprehensive reference, while the V3 PDF is high-level. Preserve the hero and existing case studies, then add discoverable sections (progressive disclosure where useful):
1. **About / career progression** — field/on-site integration → systems engineering → application/data conversions PM → leader accountable for PMs, engineers and delivery. Explain practical hands-on-to-strategy perspective.
2. **Technologies / platforms** — grouped into Insurance/AMS, data/migrations, enterprise IT, project/PMO, cloud/collaboration, and tooling. Add only owner-verified experience; distinguish deep hands-on skill from systems encountered or managed.
3. **What I've delivered** — detailed responsibilities and examples, honoring client confidentiality.
4. **Leadership & operating model** — team composition, governance, stakeholder communications, integration lifecycle, change management, business continuity.
5. **Credentials / certifications** — verified PMP and other confirmed credentials only.
6. **Resume** — visible 'View resume' and 'Download PDF' link, with optional accessible expandable PDF preview (avoid a huge auto-loaded iframe on mobile). Owner must provide/approve the latest publishable resume.

Add anchors to the existing navigation only when sections are ready. Favor cards/tabs/accordion groups over a wall of text. All text must remain human, specific and accurate. Do not overstate hands-on proficiency, and do not expose acquired agency names/addresses.

## Task 3 — portfolio polish (only after review)
Verify keyboard/touch, mobile menu, image loading, PDF/resume downloads, reduced motion, Open Graph metadata, performance and Pages subpath support; do not introduce analytics or forms by default.

## Every Codex PR
- Explain what changed in <=5 bullet points.
- Show only the touched files.
- Run: `python scripts/verify.py`, `node --check assets/js/content.js`, `node --check assets/js/main.js`.
- Check 390px and 1440px viewport if markup/CSS changes.
- Never rewrite unrelated content.
