# Project thumbnails

## Public project HTML and sitemap

`npm run sync:projects` anonymously reads only public portfolio documents and
saves their display fields in `content/public-projects.json`. This snapshot
retains the original text and is not imported into browser JavaScript. It never
includes private projects, blog posts or administrator-only fields, and never
writes to Firebase. A failed query leaves the previous snapshot intact and
stops deployment.

`npm run build` uses that snapshot offline to generate `dist/portfolio/index.html`
and `dist/portfolio/<id>/index.html`, with project-specific metadata and visible
HTML rendered by the same article/card components as the app. GitHub Pages can
serve these real paths without the 404 JavaScript fallback. The sitemap is
generated from the same IDs; only genuinely missing routes use `404.html`.

`npm run deploy` refreshes public data before building. New/deleted/private
projects and text changes update immediately in the running Firebase app, but
the static HTML, link previews and sitemap require a fresh build/deployment.
In particular, making a previously published project private requires a new
deployment to remove its generated HTML; cached/indexed copies can persist.
Do not publish a manually built, stale snapshot. The build clears its generated
portfolio directory so removed projects do not survive a rebuild.

For local verification without SPA fallback:

```sh
npm run sync:projects
npm run build
python3 -m http.server 4174 --bind 127.0.0.1 --directory dist
```

The static server redirects extensionless directory URLs to their trailing-slash
form, then returns 200. Canonical URLs and the sitemap use that final slash form;
existing links and project IDs are retained.

## Thumbnail generation

Run `npm run thumbnails` to refresh the list-only WebP variants from public
Firestore projects. The deployment script also refreshes them before building.
This is read-only: original image URLs, gallery images, and project data in
Firebase are never changed. Sharp is a development dependency, not browser code.

Generated files are committed under `public/project-thumbnails` and
`src/data/projectThumbnails.ts`, so `npm run build` works without downloading
images. Each source gets 480px, 960px and 1600px variants without cropping or
upscaling. Cards use the first two sizes; detail images can use all three.

New or changed image URLs use the original until the next thumbnail refresh and
deployment. If a generated image fails to load, the list falls back to its
original. Detail pages load variants lazily, while the image viewer always uses
the original URL and dimensions, even for an image not yet loaded on the page.

## Font subsets

The source fonts and original Pretendard range definitions are retained. The
generated `font-subsets.css` is used by the site. Common UI and public project
characters are in small subsets; complementary ranges preserve every other
supported character, including future administrator-authored content.

To regenerate with a Python virtual environment:

```sh
pip install -r scripts/font-requirements.txt
python scripts/generate-font-subsets.py --project-id my-portfolio-2ea55
python tests/font-subsets.test.py
```

The optional project argument only reads public Firestore documents. The script
never updates content or fonts in Firebase. Generated assets are committed, so
normal builds and deployments do not require Python or font generation.
