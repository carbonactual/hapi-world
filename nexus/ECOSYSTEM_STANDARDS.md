# Carbon Actual Ecosystem — Repo Standards

These are the rules the conformance bot (`.github/workflows/conformance-check.yml`)
enforces on every pull request. Keep this file in sync with the workflow.

## 1. No secrets in git, ever
No API keys, bearer tokens, or credentials in any tracked file, in any commit.
Secrets live in:
- Vercel/hosting platform environment variables
- GitHub Actions Secrets (for CI)
- The platform's own secret store (Zapier, Supabase, etc.)

`.env`, `.env.local`, `*.pem`, `*.key` must be gitignored in every repo.
The bot scans every changed file in a PR for common credential patterns
(long hex/base64 tokens, `Bearer `, `sk-`, `AIza`, etc.) and fails the check
if any are found.

## 2. Documentation lives under `docs/`
Standalone reference docs, audits, and architecture notes go in `docs/`.
Exception: root-level `README.md`, `CONTRIBUTING.md`, `SECURITY.md`,
`ARCHITECTURE.md`, `LICENSE` are allowed at repo root by convention.
The bot flags new top-level `.md` files outside that allow-list.

## 3. One branch, one purpose, one PR
No direct pushes to `main` for anything beyond trivial fixes. Every change
lands via a branch named `<type>/<short-description>` (`docs/`, `chore/`,
`fix/`, `feat/`) and a PR. This keeps history readable and gives every change
a reviewable diff instead of scattered untracked edits.

## 4. No untitled or duplicate builds
Every Lovable project, Base44 app, Manus task, and Zap must have a real,
descriptive name before being considered part of the ecosystem. Duplicate
names (e.g. three "ABBA" apps, five "Carbon Actual Formation" variants) get
consolidated or explicitly renamed with a reason, not left to accumulate.

## 5. Integration credentials are documented, values are not
Every external integration gets an entry in `docs/INTEGRATIONS.md` (or
equivalent) stating its purpose and where its credential lives — never the
credential itself.

## 6. Consistent naming across platforms
When the same logical thing exists in multiple platforms (a repo, a Vercel
project, a Supabase project, a Base44 app), names should match or clearly
reference each other. Avoid generic names like "Zapping" or "(Copy) Zapping"
for anything meant to persist.
