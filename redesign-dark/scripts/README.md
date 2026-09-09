# Project thumbnails

Run `npm run thumbnails` to refresh the list-only WebP variants from public
Firestore projects. The deployment script also refreshes them before building.
This is read-only: original image URLs, gallery images, and project data in
Firebase are never changed. Sharp is a development dependency, not browser code.

Generated files are committed under `public/project-thumbnails` and
`src/data/projectThumbnails.ts`, so `npm run build` works without downloading
images. Each source gets 480px and 960px variants without cropping or upscaling.

New or changed image URLs use the original until the next thumbnail refresh and
deployment. If a generated image fails to load, the list falls back to its
original. Detail pages and the image viewer continue using originals.
