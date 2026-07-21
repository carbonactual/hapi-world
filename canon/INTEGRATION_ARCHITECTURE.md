# Canon Extension (Draft) — Integration Architecture (Free / Open-Source / White-Label Path)

> **Status: Draft, pending ratification.** Real, checkable tools — not a claim that any of these are already wired in. Prioritizes free tiers and open source, consistent with `canon/COMMON_DENOMINATORS.md`'s "Open Source Friendly" and "White-label Compatible" denominators.

## Already proven working this session (build on these first)
- **Zapier MCP** — GitHub, Slack, Manus, Base44 read/write actions all confirmed working via `execute_zapier_read_action`/`execute_zapier_write_action`
- **Vercel MCP** — project/deployment/build-log inspection confirmed working
- **Supabase MCP** — project status, migrations confirmed working (note: project `koxzunmwzsjjwwrzsali` is currently INACTIVE, needs resuming before further use)
- **Lovable MCP** — project listing confirmed working

## No-code / low-code automation (free tiers)
- **n8n** — self-hostable, no per-execution cost if self-hosted; 1400+ node integrations
- **Zapier free tier** — already connected; watch usage limits

## AI model access
- **OpenRouter** — single endpoint, many models, pay-per-use (not free, but no subscription lock-in)
- **Anthropic/OpenAI/Google direct APIs** — already the pattern used correctly in `Carbon-Actual-`'s integration endpoints (env-var secrets only)

## MCP servers (Model Context Protocol — genuinely free, open standard)
- Official `@modelcontextprotocol/sdk` — already in use in `omni`'s `api/mcp.js`, proven working
- GitHub, Slack, Notion, and other MCP servers already connected in this session

## Databases / backend
- **Supabase** — already the ecosystem's chosen backend, free tier available
- **Baserow** — already forked in the account (`carbonactual/baserow`), self-hostable no-code database

## CLI tools
- **GitHub CLI (`gh`)** — free, official
- **Supabase CLI** — free, official, for local dev/migrations
- **Vercel CLI** — free, official

## Concrete package reference (real, installable, not hypothetical)
For whoever actually writes code against this spec — the specific packages, not just category names:

| Need | Package | Install |
|---|---|---|
| GitHub API (Node) | Octokit.js | `npm install octokit` |
| GitHub CLI | `gh` | official installer, not npm |
| Supabase client (JS) | supabase-js | `npm install @supabase/supabase-js` |
| Supabase local dev/migrations | Supabase CLI | `npm install supabase --save-dev` |
| Vercel AI SDK (agents, streaming, tool calling, MCP support) | `ai` | `npm install ai` |
| MCP server/client | `@modelcontextprotocol/sdk` | `npm install @modelcontextprotocol/sdk` — already in use in `omni/api/mcp.js`, proven working this session |
| OpenRouter (TS) | `@openrouter/sdk` | `npm install @openrouter/sdk` |
| OpenRouter (Python) | `openrouter` | `pip install openrouter` |

This list replaces vague "we integrated the SDK" claims with the actual command someone would run. If a package name above turns out to be wrong or renamed by the time someone builds against this, that's a 30-second fix — verify before use, don't take it on faith either.

## What to explicitly avoid
- Any integration requiring a credential to be typed into chat or committed to a file (see the CrewAI token incident earlier this session — credentials belong in Vercel env vars or the platform's own connection settings, never in a conversation or a commit)
- Speculative/unverifiable "integrations" (quantum cloud services beyond documented AWS Braket/Azure Quantum access, claims about platforms with no confirmed API)

## Priority order for actually wiring things up
1. Fix Omni's 3 real gaps (see `canon/OMNI_BROWSER.md`) using the already-proven Zapier/Vercel/Supabase MCP connections
2. Build one product end-to-end (BUNK or Direct Bank OS, per `canon/PRODUCTS.md`) using n8n or Zapier for workflow automation
3. Only then expand to additional platforms — breadth after depth, not before
