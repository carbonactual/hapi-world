# Extracted from `hapi-world-nexus` — session audit docs
Source: carbonactual/hapi-world-nexus/docs/. Extracted 2026-07-14.

hapi-world-nexus's actual codebase (src/) is a standard Vite/React/TS frontend
scaffold with no unique architecture content of its own. The vital content is
the ecosystem-wide audit and inventory work done in its docs/ folder this
session. Indexed here so hapi-world becomes the single source of truth.

## docs/ECOSYSTEM_STANDARDS.md
Defines the repo conventions the ecosystem should follow: no secrets committed
(scanned for Bearer/sk-/AIza/hex/xox patterns), docs live under `docs/` (root
allow-list: README/CONTRIBUTING/SECURITY/ARCHITECTURE/LICENSE only), one
branch/one purpose/one PR (no direct pushes to main), no untitled or duplicate
builds, every integration documented with credential location (never the
credential itself), consistent naming across platforms for the same logical
product.

## docs/AGENT_INVENTORY.md
Manus: 14 tasks, 3 in error state (notably "Complete Lossless Inventory and
Migration Plan for ABBA Workspace"), duplicate Gemini-API-test and
social-media-manager tasks. Base44: 6 apps, 3 separately ABBA-branded ("ABBA
— Digital Guardian & Revenue Engine", "AbbaAgent", plain "ABBA"). Lovable: 23
projects, 8 Zujid & Co. variants, 5 Carbon Actual Formation variants. Not
extractable at the time: CrewAI (needs dashboard auth), Google AI Studio (no
list endpoint), Zapier Zaps (no MCP detail tool).

## docs/FULL_ECOSYSTEM_AUDIT.md
Catalogued 24 GitHub repos under `carbonactual`. Confirmed `B3C0M1NG` is a
separate org unreachable from this GitHub connection (has `carbon_actual` and
`ABBA` repos with recurring Action failures: "Moltbook earning and
monetization submolts" and "Certify live ABBA runtime"). Found the working
CrewAI/Zapier orchestration code in `carbonactual/Carbon-Actual-` (PR #38,
branch `codex/integrate-crew-ai-with-github-and-codex`): `api/integrations/crewai.js`
reads `CREWAI_BEARER_TOKEN`/`CREWAI_API_TOKEN`/`CREWAI_TOKEN` from Vercel env
only (never request body); `api/integrations/zapier.js` is a self-contained
task classifier/router reading a local JSON registry, no live Zapier
connection needed. Slack workspace only has `#general`/`#random` — the
orchestration code's expected `ZAPIER_MASTER_SLACK_CHANNEL` doesn't point at
anything real yet. PraisonAI and openclaw are full applications (not toggles)
requiring real deployment decisions to "activate."

## docs/ABBA_AUTOMATION_STACK.md
Full automation stack export: 8 Zap configs (Master Orchestrator "Zapping",
Slack ABBA Orchestrator — Main Command Router, Qualified Lead Router, Email
to Song Order Processor, Daily Scheduler, Base44 Crews Query, Base44 Entity
Creation, GitHub Issue Analyzer), two orchestrator prompts (Master AI
Orchestrator identity/contact/directives; Multi-Agent DevOps Orchestrator's
8-trigger workflow spec), agent/table/entity IDs, the 96-agent/8-platform
swarm architecture (Base44/Manus/Vercel/CrewAI/GitHub/Slack/Email/Tables, 4
agents per sub-swarm), and the 7-phase execution model with quality gate
thresholds (95% semantic validation, 100% completeness, 98% cross-platform
consistency, 100% security compliance). Contains personal contact info — keep
private.

## Repo hygiene audit (docs/REPO_HYGIENE_AUDIT.md, if merged)
Full 24-repo hygiene pass: `abba-mas`, `Grok-Api`, `omni`, `omnii`, `Shadow`
lack `.gitignore`. `abba-mas` has zip/CSV files committed to root. `omni` vs
`omnii` naming collision flagged as the clearest instance of ecosystem scatter.
`hapi-world` itself has three overlapping constitution docs at root
(CANON.md, CARBON_ACTUAL_CONSTITUTION.md, CONSTITUTION.md) worth reviewing.
