# Laura's CV - four HTML design directions

Open `index.html` to compare all four. Each design also opens directly as a local HTML file; no build, package install, or web service is needed.

- `content.js`: shared copy, jobs, languages, education, contact details.
- `styles.css`: colors, typography and layout; each design has its own labeled section.
- `cv.js`: small shared rendering helper.
- `assets/laura-portrait.png`: original portrait extracted from the supplied CV.

Copy is shared between `content.js` (designs 01–04) and the four self-contained pages in `claude/` (05–08); keep jobs, companies and dates aligned across both. Replace the old portrait with a higher-resolution file when possible.

Use the Print / PDF button to export an A4 page. Enable background graphics and disable browser headers/footers in the print dialog. The toolbar does not print.

## GitHub Pages

This folder is a standalone static site. GitHub Pages serves the `gh-pages` branch, containing only this folder. The full project remains local. To publish updates from the repository root, commit the CV changes and run `git subtree push --prefix=cv-designs origin gh-pages`. Do not push the full `main` branch: it contains unrelated projects.
