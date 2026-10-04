# Laura's CV - four HTML design directions

Open `index.html` to compare all four. Each design also opens directly as a local HTML file; no build, package install, or web service is needed.

- `content.js`: shared copy, jobs, languages, education, contact details.
- `styles.css`: colors, typography and layout; each design has its own labeled section.
- `cv.js`: small shared rendering helper.
- `assets/laura-portrait.png`: original portrait extracted from the supplied CV.

The copy is an intentionally condensed design draft from the 2020 CV. The 130+ countries figure comes from the user's requested update. Dates are historical; nothing has been extended to the present. Replace the old portrait with a higher-resolution file when the content is updated.

Use the Print / PDF button to export an A4 page. Enable background graphics and disable browser headers/footers in the print dialog. The toolbar does not print.

## GitHub Pages

This folder is a standalone static site. GitHub Pages serves the `gh-pages` branch, containing only this folder. The full project remains local. To publish updates from the repository root, commit the CV changes and run `git subtree push --prefix=cv-designs origin gh-pages`. Do not push the full `main` branch: it contains unrelated projects.
