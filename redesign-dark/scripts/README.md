# Project thumbnails

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
