# Portfolio Regression Tests

Run all non-emulator checks from `redesign-dark`:

```sh
node --test tests/admin-save.test.mjs tests/portfolio-form.test.mjs tests/portfolio-markdown.test.mjs tests/bundle-split.test.mjs
```

The form test invokes actual form handlers with stubbed React state and no live
writes. The bundle test builds in memory and checks static imports of the app,
home and project list to prevent the Markdown parser returning to initial loads.

## Project Markdown Regression Tests

```sh
node --test tests/portfolio-markdown.test.mjs
```

Tests the actual parser and shared renderer, including authored order, nested
lists, fenced code, tables, reference links, intro content and unsafe markup.

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
