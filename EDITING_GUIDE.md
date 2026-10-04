# How to edit and republish this website

This guide is for **Pawan Kumar Mishra's personal website**. You can make ordinary text and link changes directly on GitHub. You do not need a build command or a separate publishing service.

- **Repository:** [pawanresearch/pawan-portfolio](https://github.com/pawanresearch/pawan-portfolio)
- **Live website:** [pawanresearch.github.io/pawan-portfolio](https://pawanresearch.github.io/pawan-portfolio/)
- **Publishing branch:** `main`
- **Pages folder:** `/ (root)`

**A commit to `main` publishes your changes automatically.** This is a public repository: its files and commit history are public. Do not upload passwords, tokens, private documents, or material you do not have permission to share.

## 1. Which file should I edit?

| Website tab or feature | File | What to change there |
| --- | --- | --- |
| Home | [`index.html`](index.html) | Introduction, role/profile link, research summary, movie preview, short academic background |
| Research | [`research.html`](research.html) | Research themes, movie, figures, captions, credits |
| Publications | [`publications.html`](publications.html) | Papers, preprints, their links, and the separate doctoral thesis entry |
| Conferences | [`conferences.html`](conferences.html) | Conferences/workshops, dates, venues, attendance or presentation details, official photo links |
| Resume | [`resume.html`](resume.html) | Appointment, education, skills, publication list, selected meetings and travel support |
| Colors, fonts, spacing, mobile/print layout | [`styles.css`](styles.css) | Shared visual design for all five tabs |
| Print button and footer year | [`script.js`](script.js) | Small JavaScript enhancements; ordinary content edits do not need this file |
| Images and movie | [`assets/`](assets/) | Media files used by the HTML pages |
| Media attribution | [`MEDIA_CREDITS.md`](MEDIA_CREDITS.md) | Image/movie source, permission or licence, and credit information |
| Factual sources | [`CONTENT_SOURCES.md`](CONTENT_SOURCES.md) | Sources used to verify professional details, publications, conferences and thesis |

Some information is repeated. For example, a new paper may belong in both `publications.html` and `resume.html`; a role change may affect Home and Resume. Headers and footers are also repeated in each HTML file. Edit every relevant copy, but leave unrelated content alone.

Keep filenames unchanged unless you also update every link to them. Keep the `.nojekyll` file in the repository.

## 2. Make a small text or link change on GitHub

1. Sign in to GitHub and open the repository above.
2. Select the **Code** tab and check that the branch selector says **main**.
3. Click the file you want to edit, such as `index.html`.
4. Click the **pencil / Edit this file** control. Depending on the screen width, it may be inside the file's menu.
5. Find the existing words you want to change. The HTML may appear on long lines; the editor's Find command is useful. Make the smallest change you need.
6. Preserve the surrounding HTML tags, quotation marks, `class` values, and closing tags. Replace the text between tags or the URL inside `href="..."`.
7. Review the changes/diff before saving. An HTML source preview on GitHub is **not a rendered preview of the website**.
8. Click **Commit changes…**, enter a short message such as `Update research introduction`, and choose **Commit directly to the main branch** if that option is shown.
9. Confirm **Commit changes**. This saves a new version and starts publication.
10. Follow the checks in section 7 below.

If direct editing is unavailable, first check that you are signed in to the correct account and have write access. Do not change repository permissions or Pages settings just to make an edit.

### Example: change the homepage introduction

Find this paragraph in `index.html`:

```html
<p class="hero-intro">I study self-organization and collective behavior in complex systems, exploring the physics of active matter and biophysics.</p>
```

Replace only the sentence between `>` and `</p>`. Keep `class="hero-intro"` so the existing styling continues to work. Use `&amp;` when writing an ampersand in HTML text.

### Example: change an external link

The homepage role currently links to the official MBI profile:

```html
<a href="https://www.mbi.nus.edu.sg/research-fellow/pawan-kumar-mishra/" target="_blank" rel="noopener noreferrer">Postdoctoral Research Fellow<span class="sr-only"> (opens in a new tab)</span></a>
```

To change its destination, replace only the URL inside `href`. Keep `target`, `rel`, and the screen-reader hint.

- External web links: keep `target="_blank" rel="noopener noreferrer"` and the new-tab hint.
- Internal links such as `research.html` or `#doctoral-thesis`: keep normal same-tab navigation.
- Email links such as `mailto:p_mishra@nus.edu.sg`: keep normal email behavior.

## 3. Add a paper or preprint

1. Verify the exact title, authors, year, publication status and DOI using the publisher or official preprint record.
2. In `publications.html`, copy one **complete** existing `<article class="publication-item"> ... </article>` block from the **Publication list** section. Do not copy the separate Doctoral thesis block.
3. Insert the copy in the appropriate year/order, then replace the year, type, title, authors, journal/preprint details and links. The following shortened example shows those fields; replace every placeholder before using it:

```html
<article class="publication-item">
  <div class="publication-meta">
    <span class="publication-year">YEAR</span>
    <span class="paper-type">Preprint</span>
  </div>
  <div class="publication-content">
    <span class="publication-number">NEXT_NUMBER</span>
    <h2>Exact paper title</h2>
    <p class="publication-authors">Author One, <strong>Pawan Kumar Mishra</strong>, Author Three</p>
    <p class="publication-journal">Preprint repository and identifier</p>
    <div class="paper-links">
      <a class="text-link" href="REPLACE_WITH_VERIFIED_HTTPS_URL" target="_blank" rel="noopener noreferrer">Read preprint<span class="sr-only"> (opens in a new tab)</span></a>
    </div>
  </div>
</article>
```

4. Use `Journal article` only for a published journal article. Update the journal name, volume/article number and DOI accordingly. Keep a preprint clearly labelled until publication is verified.
5. Keep the displayed paper numbers distinct and consistent. If the copied block has an `id`, remove it from the copy or give the new item a unique ID. Duplicate IDs can break links.
6. Update the corresponding `<li> ... </li>` item in the `resume-paper-list` in `resume.html` as well.
7. Add the factual source to `CONTENT_SOURCES.md`, then commit and check both pages.

The doctoral thesis is deliberately separate from the numbered papers/preprints. Its permanent repository link is in the Doctoral thesis block in Publications and the PhD entry in Resume. Do not count it as a journal paper or duplicate the same work as both a journal article and a separate preprint entry when the preprint is just an earlier version.

## 4. Add a conference or workshop

In `conferences.html`, copy a complete `<article class="conference-item"> ... </article>` block and update it. Keep the newest meetings first. Example fields:

```html
<article class="conference-item" id="unique-event-year">
  <div class="conference-date">
    <span>Exact event dates</span>
    <span>Venue<br> City, Country</span>
  </div>
  <div>
    <p class="eyebrow">Attendee</p>
    <h2>Official conference or workshop title</h2>
    <p>One short, accurate description.</p>
    <a class="text-link" href="REPLACE_WITH_OFFICIAL_HTTPS_URL" target="_blank" rel="noopener noreferrer">Event website<span class="sr-only"> (opens in a new tab)</span></a>
  </div>
</article>
```

Use a unique `id`. Record a talk or poster only when that was your actual role; attendance alone should stay `Attendee` or `Participant`. Use the organizer's event dates rather than your travel dates.

For selected events, update the `resume-meetings` section in `resume.html` too. A funding acknowledgement can be included when it is accurate; do not publish private grant letters, identifiers or financial details by accident. Add an official event source to `CONTENT_SOURCES.md`.

## 5. Upload or replace an image

1. Use an image you own or have permission to publish. Check any required credit/licence. A photo being publicly visible does not itself give permission to copy it.
2. Choose a simple filename, for example `new-research-figure.jpg`. Match capitalization exactly in your links.
3. Open the repository's **assets** folder, then choose **Add file → Upload files**. Drag the file in or choose it from your computer.
4. Check that it will be saved inside `assets/`, then commit the upload to `main`. Upload the image files themselves; do not nest another `assets` folder inside this one.
5. Edit the relevant HTML page to use the new file. Usually it is easiest to copy an existing figure block and update its image, caption, paper link and credit.
6. Commit the HTML change and test the image on the live page.

Example image tag:

```html
<img src="assets/new-research-figure.jpg" alt="A concise description of what this research figure shows" loading="lazy">
```

Write meaningful `alt` text and a visible caption/credit. Preserve scientific axes, labels, scale bars and color scales. Update `MEDIA_CREDITS.md`. If you replace an image, uploading it with a **new filename** and updating the HTML avoids visitors seeing a cached old version.

Conference photographs currently link to the organizers' official galleries. Keep those links unless you have permission to reproduce the photos. For an external gallery link, preserve the new-tab attributes and accessible hint shown above.

## 6. Update the research movie

The current movie is `assets/research-movie.mp4`; its poster is `assets/research-movie-poster.jpg`. The video element and explanation are in `research.html`. The homepage preview also uses the poster, so check `index.html` when changing it.

- Use a browser-compatible MP4, preferably H.264, and keep playback controls.
- Keep `playsinline` and avoid autoplay with sound.
- Update the poster, accessible description, caption and `MEDIA_CREDITS.md` when the movie changes.
- Preserve the full scientific frame and labels when compressing or converting research video.
- GitHub's **browser upload limit is 25 MiB per file**. Normal Git repository uploads block files larger than **100 MiB**. These are different limits.
- This website's existing movie is about 10 MB and fits the browser limit. For a larger replacement, compress a copy appropriately or use a suitable public video-hosting service and update the page deliberately. Keep the original safely elsewhere.
- Git LFS is **not supported for GitHub Pages sites**, so it is not a solution for serving an oversized movie here.

Do not simply rename an incompatible video to `.mp4`; the encoding must also be compatible. After publishing, test that the movie loads, plays, pauses and seeks.

## 7. Check that publishing worked

There is no separate “Republish” button for this setup. Every commit to `main` can trigger the GitHub Pages workflow.

1. Open the repository's **Actions** tab and select the latest **pages build and deployment** run. Check that it corresponds to your latest commit message/SHA.
2. Wait for that run to finish successfully. You can also check **Settings → Pages** for the live site address and deployment information.
3. Open the live page. Changes can take several minutes to appear even after you commit; GitHub advises allowing up to 10 minutes.
4. If the old content remains, hard-refresh: **Cmd + Shift + R** on Mac or **Ctrl + Shift + R** on Windows/Linux. If necessary, try a private/incognito window.
5. Check all affected tabs on a computer and phone/narrow window. Check links, images, captions and video playback. External links should open a separate tab; site navigation should stay in the same tab.
6. If you edited Resume, use **Print / save CV** and review the print preview as well.

If the latest Actions run failed, open the failed job and read its message before changing anything else. Confirm that you edited `main` in **pawan-portfolio**, rather than the older **resume** repository. Avoid repeated duplicate commits while a deployment is still running.

The current Pages setting is **Deploy from a branch → main → / (root)**. You normally do not need to change it. Keep HTTPS enabled.

### If a CSS change looks stale

First confirm the new `styles.css` committed successfully and the Pages run finished. Each HTML page currently loads a versioned stylesheet URL such as `styles.css?v=20261004-5`. If needed, change the value after `v=` to a new version in **all five HTML files**, while keeping the real filename `styles.css`. Commit those changes and recheck. This asks browsers to fetch the updated stylesheet.

## 8. Preview a larger change before publishing

For a visual redesign or many changes:

1. On the repository's **Code** tab, choose **Code → Download ZIP**.
2. Extract the ZIP and keep a backup of the original folder.
3. Edit copies of the files in a plain-text/code editor.
4. Open the extracted `index.html` in a browser, or serve the folder locally with `python3 -m http.server 8000` and open `http://localhost:8000` if Python is available.
5. Check every changed page and use a narrow window to inspect the mobile layout.
6. Upload the changed files to their correct paths on GitHub and commit. Then check the actual live site again.

For multi-file work, you may instead work on a new branch and merge a reviewed pull request into `main` when ready. An unmerged branch does not publish through this site's `main` Pages configuration.

## 9. Safely undo a mistake

For a small error, the simplest fix is to edit the affected file again and commit a correction.

To restore an earlier version of **one file**:

1. Open that file on GitHub and click **History**.
2. Choose a known-good earlier commit, then open the file **at that commit**. Check the date and contents; the current file view is not the old version.
3. Copy the full earlier file contents (the **Raw** view can help), or download that earlier version.
4. Return to the current `main` branch, edit the same file, replace its contents with the earlier version, and commit with a message such as `Restore previous research page`.
5. Wait for deployment and check the live site.

Restoring a whole old file also replaces any later good edits in that file. If you want to keep those, restore only the broken section. For an image or movie, re-upload a known-good copy to the intended filename.

This creates a new correction commit and preserves history. For a coordinated multi-file change, restore the related files together or carefully revert the relevant commit using Git. Do not delete the repository, reset/force-push the branch, or turn off Pages to undo an ordinary content mistake.

## Official GitHub help

- [Editing files](https://docs.github.com/en/repositories/working-with-files/managing-files/editing-files)
- [Adding a file and browser upload limits](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository)
- [Configuring the Pages publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [Creating and publishing a Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)
- [Large files and repository limits](https://docs.github.com/en/repositories/working-with-files/managing-large-files/about-large-files-on-github)
- [Viewing file history and raw content](https://docs.github.com/en/repositories/working-with-files/using-files/viewing-and-understanding-files)
- [Workflow run history](https://docs.github.com/en/actions/how-tos/monitor-workflows/view-workflow-run-history)
- [Git LFS restrictions](https://docs.github.com/en/repositories/working-with-files/managing-large-files/about-git-large-file-storage)

Last reviewed: 4 October 2026.
