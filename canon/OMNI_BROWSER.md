# Canon Extension (Draft) — Omni Browser Implementation Roadmap

> **Status: Draft, pending ratification.** Grounded in an actual code audit of `carbonactual/omni` earlier this session — this is not speculative, it reflects real files that exist right now.

## What's actually built (verified by reading the code)
`carbonactual/omni` has a real backend: `api/router.js`, `api/execute.js`, `api/visit.js`, `api/browser.js`, `api/teams.js`, and a substantial `api/mcp.js` (9.8KB) implementing a genuine MCP server via `@modelcontextprotocol/sdk`, exposing tools: `omni_status`, `list_swarms`, `list_apps`, `route_intent`, `form_team`, `assess_liability`, `record_pulse`. The `assess_liability`/`record_pulse` tools already implement Carbon Actual's "inverted economics" philosophy (liabilities generate pulse) for real.

## The 3 real gaps (in priority order)

### 1. Routing is keyword-matching, not intelligent
`router.js` and `mcp.js`'s `route_intent` currently score messages against fixed term lists for a hardcoded set of projects. To fix: replace keyword scoring with an actual LLM call (Claude or GPT via the same env-var-secret pattern already used correctly in `Carbon-Actual-`'s `crewai.js`) that classifies intent against the swarm-selection algorithm already fully specified in `knowledge/EXTRACTED_FROM_OMNII.md` (capability match, latency fit, cost fit, privacy — weighted scoring, not keyword matching).

### 2. Execution never executes
`execute.js` resolves which connector should handle an instruction, checks authorization, and returns `result: null`. To fix: implement the actual connector call for at least one connector end-to-end (recommend: GitHub, since that pattern is already proven working via Zapier's `execute_zapier_read_action`/`execute_zapier_write_action` this session) before generalizing to others.

### 3. Secrets storage is UI-only
The frontend's "seal" button explicitly states encrypted production storage is pending. To fix: route secret storage through Vercel environment variables (same pattern as `CREWAI_BEARER_TOKEN`), never through client-side storage or a database field, consistent with `docs/ECOSYSTEM_STANDARDS.md` limit 1.

## Terminal capability (mentioned as a target)
Omni's `app.js` already tracks visited URLs and routes commands — extending this to a PowerShell-like terminal is an additive UI feature on top of gap #2 (execution), not a separate system. Build gap #2 first; the terminal becomes straightforward once execution actually works.

## What this document does NOT include
No claims about deployment status beyond what's verified. `omni` exists as a Vercel project (`prj_rLEudWX56isC2rkmuLpqaEvfHMgX`) but its live/build status should be checked fresh, not assumed, before any further work.
