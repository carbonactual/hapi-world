# Canon Extensions

This folder holds **draft extensions** to `CANON.md` (which stays at repo root as the sole ratified supreme source, per `ARCHITECTURE.md`). Nothing here is authoritative until formally merged into CANON.md itself through the amendment process CANON.md Part XVIII describes.

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
