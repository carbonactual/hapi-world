# Canon Extensions

This folder holds **draft extensions** to `CANON.md` (which stays at repo root as the sole ratified supreme source, per `ARCHITECTURE.md`). Nothing here is authoritative until formally merged into CANON.md itself through the amendment process CANON.md Part XVIII describes.

## RATIFIED ACTS (September 16, 2026)

The following canon/ documents are **no longer drafts** — they are ratified authoritative law per CANON.md PART XXI (Canonical Acts Amendment, Sept 16, 2026):

- TRADE_CANON.md (the law of trade)
- MARKET_UNIVERSE_CANON.md (the law of market objects)
- HAPI_WORLD_SYSTEMS.md (the registry of the twelve native systems)
- VOICE_VIDEO_SURFACE_LAW.md (obligatory voice/video product surfaces)
- OMNI_BROWSER.md (the law of the browser surface)
- HAPI_WORLD_COMPLETION.md (the 14 completion systems; registry extended 12 to 26; ABBA Declaration: orchestrator + living law)

All other files in this folder remain draft extensions pending the CANON.md Part XVIII amendment process.


## Full contents (as of 2026-07-15, across both open PRs)

**PR #4 — Registries, Ledgers, Governance, Identity:**
- `REGISTRIES.md` — full registry taxonomy extending Part XX
- `LEDGERS.md` — named ledger views extending Part XV, plus one real gap found in Part XVI's event list (trust/reputation events undefined)
- `COMMON_DENOMINATORS.md` — conformance checklist for every ecosystem component, cross-cutting capability layers (Management/Trading/Marketplace/IO), and an explicit record of what was considered and excluded
- `GOVERNANCE.md` — rights, permissions, trust, audit, and compliance, formalizing what every other document references as "SealGrant"
- `BLOCKCHAIN_IDENTITY.md` — DID/ENS/HNS as the real technical substrate for the `#`, minting and tokenization patterns

**PR #5 — Products, Architecture, Economics:**
- `PRODUCTS.md` — 47-product domain catalog
- `OMNI_BROWSER.md` — the 3 real gaps in the actual `omni` codebase (routing, execution, secrets), in priority order
- `INTEGRATION_ARCHITECTURE.md` — free/open/white-label tools, what's already proven working vs. what's untested, concrete package names
- `HAPI_WORLD.md` — governed experimentation sandbox definition, oversight model, entry via `#`
- `ECONOMICS.md` — inverted economics, value chain, No Waste, asset/liability lifecycle
- `AGENTS_SWARMS_TEAMS.md` — swarm vs. team distinction, formation algorithm, coordination techniques (ACO/PSO/stigmergy/handoff)

## Suggested reading order
1. `GOVERNANCE.md` — read first; almost every other doc assumes SealGrant/permission logic
2. `REGISTRIES.md` + `LEDGERS.md` — the data model everything else sits on
3. `BLOCKCHAIN_IDENTITY.md` — how `#` and minting actually get implemented
4. `ECONOMICS.md` — how value moves through the registries/ledgers
5. `COMMON_DENOMINATORS.md` — the conformance bar for anything built
6. `PRODUCTS.md` — what's actually being built
7. `OMNI_BROWSER.md` + `AGENTS_SWARMS_TEAMS.md` — the one product with real code, and how agents get formed/coordinated
8. `HAPI_WORLD.md` — the sandbox/testing layer for all of the above
9. `INTEGRATION_ARCHITECTURE.md` — last, once you know what you're building

## Origin
These drafts were extracted from a large architecture discussion (2026-07-14/15) that mixed genuinely substantive systems design with unverified operational claims. Only the structural/architectural material was kept; claims of things being "built," "deployed," or "running" were excluded unless independently verified against actual GitHub/Vercel/Supabase state. See `COMMON_DENOMINATORS.md`'s "What was deliberately excluded" section for the specific list of what didn't make it in, and why.

## DRAFT REGISTER (post-completion reconciliation, Sept 16, 2026)

Each draft extension's relationship to the ratified acts:

1. `AGENTS_SWARMS_TEAMS.md` — SUPERSEDED (core content folded into HAPI_WORLD_SYSTEMS.md Systems 9-11); retained for the Swarm-vs-Team distinction text (Swarm = many agents, same purpose; Team = fewer agents, diverse roles).
2. `HAPI_WORLD.md` — SUPERSEDED (world definition and oversight model folded into HAPI_WORLD_SYSTEMS.md + HAPI_WORLD_COMPLETION.md); retained for the "full oversight, not direct participation" clarification.
3. `SPOTIST_SEEK_CAPABILITY_AMENDMENT.md` — ACTIVE ecosystem amendment (not a draft); canonical source remains omnii/docs/canonical.
4. `SPOTIST_V2_RECONCILIATION.md` — product reconciliation record; retained.
5. `BLOCKCHAIN_IDENTITY.md` — COMPLEMENTARY DRAFT (DID/ENS/HNS technical implementation; unique).
6. `COMMON_DENOMINATORS.md` — COMPLEMENTARY DRAFT (component conformance checklist; unique).
7. `ECONOMICS.md` — COMPLEMENTARY DRAFT (Inverted Economics detail; principles ratified in CANON.md Part VII).
8. `GOVERNANCE.md` — COMPLEMENTARY DRAFT (SealGrant rights/defaults formalization; unique).
9. `INTEGRATION_ARCHITECTURE.md` — COMPLEMENTARY DRAFT (proven integration tooling: Zapier/Vercel/Supabase MCP; unique operational record).
10. `LEDGERS.md` — COMPLEMENTARY DRAFT (named ledger views; Accounts System declares the machinery).
11. `PRODUCTS.md` — COMPLEMENTARY DRAFT (product domain catalog with OMNII Common Layer mapping).
12. `REGISTRIES.md` — COMPLEMENTARY DRAFT (registry taxonomy mapping to ontology entities).

No draft was deleted; superseded drafts are marked and retained as history per the Continuum law (nothing dies unrecorded).
