# Full Ecosystem Audit
Extracted 2026-07-14. No credentials included.

## GitHub — carbonactual account (24 repos)
abba, abba-mas, ABDUHABU, baserow, Botpress, Carbon-Actual-, caveman, crewAI,
direct-bank-app, ECC, eve-slack-agent, Grok-Api, hapi-world, hapi-world-nexus,
mcp-remote, omni, omnii, open-ballot, openclaw, PraisonAI, Shadow,
skills-from-google, thunderbird, universal-mcp

Note: `B3C0M1NG` (org, not `carbonactual`) hosts `carbon_actual` and `ABBA` repos
with recurring GitHub Actions failures ("Moltbook earning and monetization
submolts" / "Certify live ABBA runtime"). This connector cannot reach that org —
it's scoped to the `carbonactual` account only.

## CrewAI + Zapier Orchestration — already built correctly
`carbonactual/Carbon-Actual-`, branch `codex/integrate-crew-ai-with-github-and-codex`
(PR #38) contains working serverless endpoints:

- `api/integrations/crewai.js` — reads bearer token ONLY from Vercel env
  (`CREWAI_BEARER_TOKEN` / `CREWAI_API_TOKEN` / `CREWAI_TOKEN`), never from a
  request body. Base URL defaults to
  `https://carbon-actual-full-civilization-builder-v0--9aec87e7.crewai.com`.
- `api/integrations/zapier.js` — self-contained task classifier/router reading
  a local JSON registry (`data/zapier_orchestration_registry.json`). No live
  Zapier connection required; classifies into REQUIRES_APPROVAL / RESEARCH_TASK /
  UI_GENERATION / API_AUTOMATION / CODE_GENERATION / QUALIFIED_LEAD and routes
  to CrewAI / Base44 / Manus / OpenAI-GitHub-Codex / Tables-Base44-Slack.
- Both expose `GET` for status (presence-only, never reveals values) and `POST`
  with `dryRun` for safe local testing.

**Action required to activate CrewAI:** set `CREWAI_BEARER_TOKEN` in the Vercel
project's environment variables (Settings → Environment Variables), then
redeploy. Do not commit the token to any file.

## Slack — workspace state
Only two channels exist: `#general`, `#random`. The env vars
`ZAPIER_MASTER_SLACK_CHANNEL` / `ZAPIER_LEAD_SLACK_CHANNEL` that the
orchestration code expects are not yet pointing at any real channel — no
dedicated ABBA channel has been created in this workspace.

## PraisonAI — status
Full agent framework fork: `src/`, `docker/`, `examples/`, `.agent/`,
`AGENTS.md`, `ARCHITECTURE.md`, 47KB README, 148KB api.md. This is a complete,
substantial codebase — not a stub.

## openclaw — status
Large fork of an agentic coding tool: `apps/`, `packages/`, `extensions/`,
`ui/`, `deploy/`, Docker + Fly.io + Render deploy configs, `taxonomy.yaml`
(650KB), `CHANGELOG.md` (2.6MB), pnpm workspace. This is a full application,
not a script.

**Note on "activating" PraisonAI and openclaw:** both are complete,
deployable applications, not simple toggles. Activating either means real
infrastructure work — choosing a host, provisioning a database if required,
setting environment variables, and running a deploy pipeline (Docker/Fly/Render
configs already exist in openclaw). This is a distinct project from the
documentation/env work done so far and needs its own scoped plan.

## Base44 apps (6, from prior audit)
HAPI World, ABBA — Digital Guardian & Revenue Engine, AbbaAgent, ABBA, Solas,
ClawManager. Three separate ABBA-branded apps — consolidation candidate.

## Manus tasks (14, from prior audit)
3 in error state, most notably "Complete Lossless Inventory and Migration Plan
for ABBA Workspace."
