# Firestore Rules Tests

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
featured ordering, administrator access, blog writes, theme validation and
default-deny behavior. A custom `admin` claim alone does not grant access;
authorization matches the app's bootstrap UID and `admins` document checks.

## Production Parity

On 2026-09-05, this rules file was synchronized with the active
`my-portfolio-2ea55` Firestore release. The outdated field allowlists were
removed to match production and support the current administrator forms.
Content writes remain restricted to administrators; this is not strict
content-schema validation. Existing public blog read permissions are unchanged.

Before future rule deployments, compare the active server rules, rerun this
suite, and deploy only the intended service. Do not replace this file with the
old allowlist-based rules from historical commits.
