# Pawan Kumar Mishra — personal research website

A lightweight, responsive personal website for GitHub Pages. Plain HTML, CSS, and a small progressive-enhancement script; no framework, analytics, external fonts, or build service.

## Pages

- `index.html`: introduction, research overview, movie preview, and academic background
- `research.html`: research themes, video, credited publication figures
- `publications.html`: selected verified journal articles, a review/feature article, and separately labelled preprints
- `conferences.html`: selected meetings, schools, and a poster, with official source links
- `resume.html`: appointment, education, skills, and publications, with a print/save-as-PDF control

## Preview locally

Open `index.html` in a browser, or run `python3 -m http.server 8000` from this directory and open the address printed by Python. Navigation and content work without JavaScript. External web links open in a new tab with an accessible announcement; internal navigation and email links keep their normal behavior. JavaScript enables printing and updates the copyright year.

## GitHub Pages

This draft is intended for a fresh public repository named `pawan-portfolio` under `pawanresearch`. It does not change the existing `resume` repository.

After approving the content and design:

1. Commit these files at the root of the new repository.
2. In repository Settings → Pages, choose “Deploy from a branch”.
3. Select `main` and `/ (root)` and save.
4. Wait for the Pages deployment to finish, then check all five pages and video playback at the published URL.

If the repository name changes, update each page’s canonical URL and `og:url`.

## Updates

Content is directly editable in the HTML files. Shared styles are in `styles.css` and the header/footer are repeated in each page. Keep the active page’s `aria-current="page"` attribute and update navigation consistently if a page is added.

Replace research media only with files you have permission to publish. Preserve scientific axes, labels, scale bars, and color scales. Update the accompanying descriptions and `MEDIA_CREDITS.md`.

## Research movie

`assets/research-movie.mp4` is a web-compatible H.264 version of the supplied `high_density_nem_op.mp4`. Duration, frame size, frame rate, and full-frame composition are preserved (50 seconds, 800 × 800, 8 fps). It has no audio and does not autoplay. The original file has not been modified.

The page provides a visual description only; model parameters and an exact scientific interpretation should be added by the author if desired.

## Verification

The draft includes local file/anchor checks, HTML structure checks, JavaScript syntax and print-state tests, media metadata checks, and source verification. These are not a substitute for final browser checks on the deployed site. See the separate review note for the exact visual verification status.
