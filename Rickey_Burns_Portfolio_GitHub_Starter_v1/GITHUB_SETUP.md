# GitHub + Codex setup (one-time)

This is the V1 site with an added `.nojekyll`, `.gitignore`, and `CODEX_PLAN.md`. No live site design or content was changed.

## 1. Create repository
1. In GitHub, create a public repository named `rickey-burns-portfolio` (or your preferred name). Public is simplest for GitHub Pages on GitHub Free.
2. Do **not** add a README or license when creating the repository; the upload contains its own README.
3. Unzip this archive. Open the extracted folder and upload **all of the files and folders inside it**, not the ZIP itself. Be sure `index.html` is at the repository root and `assets/` is beside it. Commit to `main`.

Alternative for existing `git` setup (PowerShell; replace USERNAME):

```powershell
cd path\to\Rickey_Burns_Portfolio_GitHub_Starter_v1
git init -b main
git add .
git commit -m "Add approved V1 portfolio baseline"
git remote add origin https://github.com/USERNAME/rickey-burns-portfolio.git
git push -u origin main
```

## 2. Enable free GitHub Pages
Repository **Settings → Pages → Build and deployment → Deploy from a branch → main → /(root) → Save**. The site generally appears at `https://USERNAME.github.io/rickey-burns-portfolio/`. Follow the exact URL shown in Settings → Pages.

## 3. Connect Codex
Open Codex in ChatGPT (or your Codex app) and grant it access to this GitHub repository. Select the repository and use `CODEX_PLAN.md`, `AGENTS.md` as its instructions. Ask it to complete **Task 1 only** as a small PR. Review the diff and preview, then merge. Repeat for later tasks.

## 4. Resume and deeper content
Before Task 2, provide your current approved, public-facing resume file to the repository/project, or tell Codex where to find it. Convert it to a linkable PDF and let users open/download it; do not publish internal employer documents.

## Rollback
Changes are managed as commits and pull requests. Revert an individual PR if you don't like an edit; no need to regenerate the site.
