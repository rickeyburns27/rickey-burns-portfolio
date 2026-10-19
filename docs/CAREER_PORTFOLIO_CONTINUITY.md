# Career Portfolio — Recovery Checkpoint
Updated: 2026-10-18

## 2026-10-18 — Executive Impact Brief redesign and network icon

- Owner authorized expanding the case-study download to two pages and updating existing PR #7 on `feature/branded-executive-downloads`. No general website redesign, merge, or production deployment authorized.
- The former one-page case study is now the two-page Executive Impact Brief. Editable source and stable PDF filename remain `assets/docs/case-study-source.html` and `assets/docs/Rickey_Burns_Enterprise_Transformation_Case_Study.pdf`. Poster shows the new page 1; website copy, alt/ARIA labels, page-count badge, README and repository verification reflect two pages.
- Page 1: cinematic mountain-road hero, one focal 50% result, $60M+ enterprise portfolio and 25-of-25 completion, six-month-to-three-month visual comparison, and 100% completion of committed milestones. Exactly six blue and three green arrows.
- Page 2: six-site, five-site/~50-employee and three-location NYC examples presented as challenge, leadership action and demonstrated result. Career-scale evidence and executive governance closing add proof without repeating page 1.
- Added `icon-network` to the existing SVG symbol system; only the Systems aligned principle uses it. Shared `icon-gear` preserved unchanged. Website CSS, motion, images, approved resume PDF/HTML and cleaned ATS text unchanged.
- Final PDF rendered and visually inspected at normal reading scale, with thumbnail/mobile-width checks. Two native-text Letter pages; no clipping/overlap; photo treatment and hierarchy clearly differ from the previous single-page version. Staging/download verification is recorded in PR #7 when complete.
- Approved resume PDF hash remains `b4b4396c5c9b31144bc5e1b8c5930d955d182973ead975b7cc9b53c8d58a0fa2`.


## 2026-10-18 — Coordinated branded downloads ready for review

- Baseline: current main at `ba623d2da101cecc636f918445b1bc4195fc28b0` (PR #6 was already merged before this task). New branch: `feature/branded-executive-downloads`; implementation commit `a1934088248adfeb52eef96589b867186b3011c4`; new PR https://github.com/rickeyburns27/rickey-burns-portfolio/pull/7 .
- Verified Cloudflare Preview: https://41c293a4.rickey-burns-portfolio.pages.dev/ . Production remains on the main baseline; this task did not merge or deploy production.
- Actual resume source: owner-attached `Rickey_Burns_Cross_Resume_2.docx` at the supplied Desktop path; SHA-256 `2b9a0822b5c3856f11bb9a54b4fde1a8b25bcc45a59fdcab7b3f8f667f03e669`. Request text calls it version 2(3), but the attachment has the shorter name. It was available and read; content was not reconstructed from memory.
- Owner's new standards explicitly supersede older annual-revenue/investment and on-time wording: $60M+ enterprise portfolio; 25 simultaneous initiatives; all 25 completed in 20 months; 50% shorter delivery cycle; 100+ organizations; 1,000+ employees supported; completion of committed initiatives/milestones. Updated AGENTS accordingly. Resume employment titles/dates and other achievements follow the attachment; no Keystone references. Corrected the education typo to Expected 2028.
- Outputs: `assets/docs/Rickey_Burns_Enterprise_Transformation_Case_Study.pdf` (one Letter page) and `assets/docs/Rickey_Burns_Executive_Resume.pdf` (two Letter pages). Editable sources: `assets/docs/case-study-source.html` and `assets/docs/resume-source.html`. Recruiter companion: `assets/docs/Rickey_Burns_Resume_ATS.txt`. README documents export settings and provenance.
- Design: shared navy/blue/green palette, executive typography, clear hierarchy, generous resume spacing, photo-led case-study hero, coordinated impact cards and graphics. Case study retains six blue and three green arrows. Website photos and motion JavaScript unchanged; only download-button spacing added to CSS.
- Site download links added in hero and case-study panel; existing resume request replaced with a direct PDF download. Standardized metric wording on site and both PDFs. Removed the NYC annual-revenue scope label to honor the explicit terminology restriction; three-location example retained.
- Validation passed: repository smoke check, both JS syntax checks, whitespace check; native selectable PDF text, expected page counts and Letter size; all three final PDF pages visually inspected via Poppler, without clipping/overlap. Desktop 1440px and mobile 390px reviewed; desktop anchors, mobile Enter/Escape/link-close, back-to-top, all five images loaded, no horizontal overflow or console errors observed.
- Actual browser downloads from staging match repository assets: case study SHA-256 `be644abc8f8940a10df6c4be2a1a785451fc569768ef717d680ee0cfe281adc1`; resume SHA-256 `b4b4396c5c9b31144bc5e1b8c5930d955d182973ead975b7cc9b53c8d58a0fa2`.
- Remaining: owner review and explicit approval. No merge or production deployment authorized.


## 2026-10-18 — Cross-industry baseline integrated for review

- Explicit owner request supersedes earlier wording-only/no-publication limits for this task: use the supplied ZIP, polish its case study, open a PR, and deploy a Cloudflare Pages preview. Production still requires explicit approval.
- Actual source: `Rickey_Burns_Cross_Industry_Site_AND_Case_Study_PREVIEW.zip`, SHA-256 `1423a51fce15fa850e4d5c65017485eac3cb843932521aa0dbe044d1a052b8bf`.
- Branch: `feature/cross-industry-portfolio-case-study`. Implementation commit: `c76866e576b5e597e8cc015b439bb0296300a052`. Review: https://github.com/rickeyburns27/rickey-burns-portfolio/pull/6 .
- Verified implementation preview: https://a176e151.rickey-burns-portfolio.pages.dev/ . Cloudflare identifies it as Preview for the implementation commit. Production remains on `main` at `5f5f5111afa88c21a7a7c5f674345dcee6c696e5`.
- Website `index.html` and `assets/js/content.js` match the supplied baseline exactly. Existing CSS/behavior match the ZIP after newline normalization. Portrait and three example photographs are byte-identical to the ZIP. No employment-history edits.
- New files: `assets/docs/case-study-source.html`, `assets/docs/Rickey_Burns_Enterprise_Transformation_Case_Study.pdf`, and `assets/images/mountain-road-case-study.png`. Updated preview: `assets/images/case-study-poster.webp`. README includes editable-source export instructions; `scripts/verify.py` checks the new assets and arrow counts.
- Case-study polish: shared navy/blue/green palette, typography, card alignment, spacing, and page composition. Native editable HTML/CSS, native PDF text, one Letter-size page (612 x 792 points), six blue arrows and three green arrows.
- Accuracy corrections limited to case-study tiles: 25 integrations completed, $60M annual revenue across those integrations, and 100% committed milestones completed. The ZIP's portfolio-scope and initiative-completion labels were inconsistent with verified facts. Website wording is preserved.
- Completed: required smoke and JS syntax checks; diff whitespace check; 1440px and 390px browser review; desktop anchors; mobile Enter/Escape/link-close behavior; back-to-top; career disclosure expansion; all five website images loaded; no horizontal overflow or browser console errors observed. PDF visually inspected through Poppler. Browser downloads from local preview and staging match the generated PDF SHA-256 `6967b906165a325b5ca90bade541594f4e4e716e004771122dc487a5894f1014`.
- A separate command-line HTTP audit of staging returned 403; browser access and the real staging download succeeded. Do not describe that optional HTTP audit as passed.
- Remaining: owner review/approval. No merge or production deployment authorized or performed.

## Purpose
Start new portfolio work by reading this checkpoint and AGENTS.md, then verifying the actual repo/branch/PR and latest available user-approved drafts. This is a checkpoint, not a claim that the latest design was recovered.

## Non-negotiable decisions
- Never restart, redesign, or overwrite approved work without an explicit request.
- Prefer the smallest localized change and preserve approved wording, V3 design, layout, assets and behavior.
- Never claim something was recovered, saved, built, deployed, or verified without checking it.
- Do not treat GitHub main as necessarily the latest *designed* or uncommitted draft.
- Keystone must NEVER be included or suggested as an employer, job title, employment dates, or affiliated professional experience. Selected projects may be described without that attribution.
- No career-search database or search-configuration changes unless explicitly requested.

## Career positioning
Cross-industry positioning: Enterprise Transformation & Strategic Operations Leader. Emphasize enterprise transformation, strategic operations, portfolio governance, multi-location standardization, stakeholder leadership, enterprise business systems, technology-enabled operations, and business process improvement. Insurance integration experience is evidence, not the sole identity.

## Source of truth for resume content
User-edited file: Rickey_Burns_Cross_Resume_2(1).docx (provided in conversation on 2026-10-16). Seek the actual attachment and verify wording before reproducing metrics; it is not necessarily stored in this repository. Existing employment: HUB International, CompuCom, United States Army. Do NOT add Keystone employment.

## Portfolio and case-study status
Repository: rickeyburns27/rickey-burns-portfolio.
Previously linked case study: assets/docs/Rickey_Burns_Integration_Leadership_Case_Study_V3.pdf; user explicitly said this was NOT the latest *designed* version sought. Do not pass it off as the newest design.
Earlier discussion: Real-World Transformation Examples cards may have photo/header/icon overlap. Verify against the current site before changing CSS.
Cross-industry portfolio content changes were discussed but were NOT verified as committed or completed. Exact three-hour design session and last designed draft remain UNRECOVERED / UNVERIFIED.

## Mandatory work flow
1. Establish baseline: inspect AGENTS.md, README, main, latest branches/PRs, available local files, and user-approved drafts.
2. Separate verified current files, known approved decisions, missing drafts, and proposed changes.
3. Make ONLY the requested scoped diff. Never silently reconstruct missing work as the original.
4. Run required checks in AGENTS.md, plus mobile/desktop review if styling changes.
5. Save a recovery point (commit, PR, or exported file), confirm its link exists, and update this checkpoint with exact branch, commit, filenames, completed work, and remaining tasks.
6. At handoff, supply the real artifact links and explicitly identify anything not saved or verified.

## Next action
Find and verify the latest actual designed portfolio and case study—including branches, PRs, and local conversation files—before attempting to recreate anything. Preserve site and search state until explicitly instructed to modify them.


## 2026-10-17 — USER-APPROVED WORDING PREVIEW (NEW)
- User reviewed the FULL interactive portfolio preview and said **"Looks good"**. This approves the *wording preview for later Codex implementation*, not a merge, deployment, redesign, or case-study rewrite.
- Approved standalone review artifact: `Rickey_Burns_FULL_Interactive_Portfolio_Preview.html` (SHA-256 `32916656093ea9277a47e76e6d01243b1fe30d1d1ba6ee57dd0c8e7369a6550f`). The sandbox file is conversation-local; its existence in later chats MUST be verified, not assumed.
- Companion whole-site preview package: `Rickey_Burns_Visual_Verified_Wording_Preview.zip` (SHA-256 `1f5681bcd4e7aa1d99d27ea473e67e49e1c172d73bce3464435a9abdac7752e4`). It is also conversation-local, NOT committed here.
- Verified diff between original uploaded website ZIP and prepared approved-design wording preview: **ONLY** `index.html` and `assets/js/content.js` differ. All original CSS, JS behavior, images, and PDF files were unchanged in that site folder.
- The full standalone preview was packaged with embedded assets and verified rendered in Chromium at desktop and mobile sizes. An earlier bare HTML-only link was broken due to missing relative CSS/assets; NEVER repeat it. Any next interactive preview MUST render with all assets in a browser.
- Direction: lead with cross-industry Enterprise Transformation & Strategic Operations, retain insurance M&A and integration as evidence, preserve exact employment history and approved metrics. Never add Keystone as employment or name it as employer.
- **No website source changes, merges, deployments or pull requests are approved or made by this documentation update.** Codex should use the user's approved preview as source if accessible, verify it matches hash above, and propose a targeted TWO-FILE wording-only patch for approval. If preview artifact cannot be accessed, ask for it rather than fabricating the approved copy.
- Next task is **the case study**. User says prior chat built a newer case study before failing; actual latest draft is currently UNVERIFIED. Do NOT assume the repository's V3 PDF is the newer work. Get the actual document/artifact before editing it; preserve design, ask only for essential missing source.


## 2026-10-17 — CASE STUDY ACTUAL DRAFT LOCATED
- User uploaded `Rickey_Burns_Cross_Industry_Case_Study_PREVIEW(1).pdf` and explicitly identified it as the latest case-study draft built in the previous chat. THIS is the source for continued case-study review, not the older V3 PDF in the repository.
- PDF identity: SHA-256 `2b3ad82cca452a8011cc72dc84e07c3670e350cc333131514dc134f2c8eb6e1a`; 1 page, 576 x 864 pts, 1,853,437 bytes.
- Key design: hero/headshot with "Enterprise Transformation & Strategic Operations"; impact tiles 25 initiatives, $60M+ portfolio, 50% shorter cycle, 100+ organizations, 1,000+ employees, 100% completed; four-stage career journey; process improvement; six-, five-, and three-site example cards; core value row and closing.
- This PDF is an **existing draft**, not yet newly edited, approved for publication, or merged. Preserve its graphic layout and imagery unless user requests a change.
- File is conversation-local; future sessions must locate actual uploaded PDF and verify hash before editing. Do not tell user V3 is latest.
- Accuracy checkpoint: its tile reads "$60M+ PORTFOLIO INVESTMENT", while AGENTS.md currently locks "$60M in annual revenue across these 25 integrations". Do not silently reconcile; flag for user when reviewing factual wording.
- No portfolio website source code or case study file changed as part of this documentation update.
