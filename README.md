# Pawan Kumar Mishra — personal research website

A lightweight, responsive personal website for GitHub Pages. Plain HTML, CSS, and a small progressive-enhancement script; no framework, analytics, external fonts, or build service.

## Editing and publishing

**[Read the step-by-step editing guide](EDITING_GUIDE.md)** for text and link edits, adding papers/conferences, uploading media, checking publication, and safely undoing mistakes.

Live website: https://pawanresearch.github.io/pawan-portfolio/

## Pages

- `index.html`: introduction, research overview, movie preview, and academic background
- `research.html`: research themes, video, credited publication figures
- `publications.html`: selected verified journal articles, a review/feature article, separately labelled preprints, and the doctoral thesis
- `conferences.html`: selected meetings, schools, and a poster, with official source and photograph links
- `resume.html`: appointment, education, skills, publications, and selected conferences and workshop travel support, with a print/save-as-PDF control

## Preview locally

Open `index.html` in a browser, or run `python3 -m http.server 8000` from this directory and open the address printed by Python. Navigation and content work without JavaScript. External web links open in a new tab with an accessible announcement; internal navigation and email links keep their normal behavior. JavaScript enables printing and updates the copyright year.

## GitHub Pages

This public repository is `pawanresearch/pawan-portfolio`. GitHub Pages deploys from `main`, `/ (root)`. Committing changes to `main` republishes the site automatically. Check the latest **pages build and deployment** run in the repository's **Actions** tab, then verify the live page.

The separate older `resume` repository is not used to publish this site. If the repository name changes, update each page's canonical URL and `og:url`.

## Updates

Content is directly editable in the HTML files. Shared styles are in `styles.css` and the header/footer are repeated in each page. Keep the active page’s `aria-current="page"` attribute and update navigation consistently if a page is added.

Replace research media only with files you have permission to publish. Preserve scientific axes, labels, scale bars, and color scales. Update the accompanying descriptions and `MEDIA_CREDITS.md`.

## Research movie

`assets/research-movie.mp4` is a web-compatible H.264 version of the supplied `high_density_nem_op.mp4`. Duration, frame size, frame rate, and full-frame composition are preserved (50 seconds, 800 × 800, 8 fps). It has no audio and does not autoplay. The original file has not been modified.

The page provides a visual description only; model parameters and an exact scientific interpretation should be added by the author if desired.

## Verification

Before committing, check factual sources, HTML/link changes, and any media replacements. After publication, test the affected pages and external links, inspect a narrow/mobile layout, and check video or print preview when relevant. The editing guide includes the full checklist.
