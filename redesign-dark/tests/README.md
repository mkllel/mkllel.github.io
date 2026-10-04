# Portfolio Regression Tests

Run all non-emulator checks from `redesign-dark`:

```sh
node --test tests/admin-save.test.mjs tests/portfolio-form.test.mjs tests/portfolio-markdown.test.mjs tests/bundle-split.test.mjs
```

Public route generation, summary formatting and loading/retry regression checks:

```sh
node --test tests/project-pages.test.mjs tests/portfolio-loading.test.mjs tests/portfolio-markdown.test.mjs
```

Loading checks cover the list, Home's featured projects and project details:
failure versus empty/missing/private results, retry recovery, stale responses
after navigation and subscription cleanup. SDK responses are stubbed; these
tests do not change production data or network settings.

System-flow editor and rendering checks:

```sh
node --test tests/project-flow.test.mjs tests/project-system-flow.test.mjs tests/portfolio-form.test.mjs
```

The editor stores `architectureLayout` and `architectureParents` alongside the
existing `architecture` labels. Parent indexes follow the saved array order;
stable draft IDs preserve relationships while moving or deleting rows. Coverage
includes mode changes, legacy defaults, cyclic or missing parents, renaming,
multiple roots, previews and static pages. The emulator suite checks persistence
with the real create/update helpers. No production data migration is performed.

`npm run build` also generates the static project routes. Check their HTTP status
using a plain static server (see `scripts/README.md`), not Vite's SPA fallback.

The form test invokes actual form handlers with stubbed React state and no live
writes. The bundle test builds in memory and checks static imports of the app,
home and project list to prevent the Markdown parser returning to initial loads.

## Project Markdown Regression Tests

```sh
node --test tests/portfolio-markdown.test.mjs
```

Tests the actual parser and shared renderer, including authored order, nested
lists, fenced code, tables, reference links, intro content and unsafe markup.

The code-language regression also prevents encoded whitespace from injecting
additional CSS classes (GHSA-4fh9-h7wg-q85m).

## Dependency Security Checks

Run both `npm audit` and `npm audit --omit=dev` after dependency updates to
distinguish build-tool warnings from production dependencies. Firebase remains
on the existing SDK version; its Node-only `@grpc/grpc-js` dependency is scoped to
1.13.6 in `package.json` because the SDK's `~1.9.0` range excludes those security
fixes. Recheck this override when upgrading Firebase, and run the Firestore
emulator suite below whenever changing it. Do not use production writes for
compatibility tests.

Rollup is pinned to 4.59.0, which includes the output-path security fix.
Rollup 4.64.0 stalled this project's build for over two minutes, while 4.59.0
completed it in about six seconds. Recheck a future Rollup update with both
`npm run build` and `node --test tests/bundle-split.test.mjs` before removing
this compatibility pin.

As of 2026-10-04, the remaining development-only advisory is
[GHSA-vfj7-8cjw-p6xm](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm):
`braces` has no patched release and is used through Tailwind 3 and `gh-pages`.
Avoid untrusted build/glob inputs. Do not force an audit fix that migrates
Tailwind or downgrades the deployment tool without a separate compatibility
review. This warning does not occur in `npm audit --omit=dev`.

## Administrator Save Regression Tests

```sh
node --test tests/admin-save.test.mjs
```

These tests exercise the real save handlers with stubbed React state and
Firebase operations, without a server or live data. They verify rejection on
failed saves and missing IDs, loading cleanup, and retry with the same draft
and selected image. UI rendering is not covered by this unit suite.

## Firestore Emulator Suite

Run from `redesign-dark` with Node.js, Java 21+ and the Firebase CLI:

```sh
firebase emulators:exec --only firestore --project demo-portfolio-rules "node --test tests/firestore.rules.test.mjs"
```

The suite uses the existing Firebase SDK and a loopback Firestore emulator.
It never writes to the production project. Rules are loaded from the
`firestore.rules` path in this directory's `firebase.json`.

Coverage includes public/private queries, current project form fields,
featured ordering, administrator access, admin-only blog reads/writes, theme validation and
default-deny behavior. A custom `admin` claim alone does not grant access;
authorization matches the app's bootstrap UID and `admins` document checks.
The persistence tests call the app's actual create/update helpers against the
emulator to verify unnamed resource links, empty fields and partial updates.
Storage uploads are not part of these tests.

## Rule Deployment

On 2026-09-05, this rules file was synchronized with the active
`my-portfolio-2ea55` Firestore release. The outdated field allowlists were
removed to match production and support the current administrator forms.
Content writes remain restricted to administrators; this is not strict
content-schema validation. The subsequent local change also restricts blog
reads to administrators. This restriction requires an explicit Firestore rules
deployment; building or publishing GitHub Pages does not apply it to Firebase.

After approval, run from `redesign-dark`:

```sh
firebase deploy --only firestore:rules --project my-portfolio-2ea55
```

Before future rule deployments, compare the active server rules, rerun this
suite, and deploy only the intended service. Do not replace this file with the
old allowlist-based rules from historical commits.
