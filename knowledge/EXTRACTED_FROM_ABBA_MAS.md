# Extracted from `abba-mas` — Phase 1 Canon Discovery Report
Source: carbonactual/abba-mas/PHASE_1_DISCOVERY_REPORT.md. Extracted 2026-07-14.
Originally generated 2026-07-02 under the Carbon Actual Canon Engineering Charter.

This is the master architectural discovery document tying together abba-mas,
omnii, Shadow, and 5 forked repos. Preserved here in hapi-world as the
ecosystem's canonical source of truth.

## Repository inventory (as of discovery)
**Primary source repos:**
- `abba-mas` — command routing, SEAL evaluation, proof coordination. Has `config/products.json`, `config/providers.json`, `config/seal-policy.json`, `03_SHARED_CONTRACTS/` (HAPI data model v0.1.0), `docs/ecosystem/` (12-principle doctrine). Foundation validation active; execution gates incomplete.
- `omnii` — actually contains the **BUNK product** (property route) + Foundation framework, not what its name suggests. 8 open issues.
- `Shadow` — HumAIn: personal AI identity + lawful ownership. AI minting not yet connected to HAPI.

**Integration fork repos:**
- `openclaw` (fork) — multi-channel personal AI assistant, memory backend missing
- `ECC` (fork) — agent harness optimization (skills, instincts, memory, security), not yet integrated
- `caveman` (fork) — 65% token reduction via minimalist prompts, ready to integrate as efficiency layer
- `Botpress` (fork) — conversational AI/ADK, forked but not integrated
- `baserow` (fork) — no-code database + automation (GDPR/HIPAA/SOC2 compliant), massive integration potential

## Canon concepts — verified implementations
- **Command & Execution (ABBA-MAS)**: Instruction → Interpretation → Classification → Routing → Policy Validation → SEAL Evaluation → Approved Route → Execution → Verification → Proof → Actual Response. External execution disabled until provider workflows complete.
- **HAPI contracts (v0.1.0)**: HashIdentity, HumanAIEntry, PersonalAIMint, SealGrant, PulseEvent, RootUpdateEvent, IndexUpdateEvent, ActualSession, BecomingCard, AtlasProjection, VerificationRequest/Response. Principle: HAPI carries the person across products; products don't absorb HAPI.
- **SEAL** (consent/authority): human-only approval/rejection/amendment/revocation/disclosure. Partial in BUNK.
- **PROOF** (evidence/verification): claims, evidence, verification stage, confidence, expiry, visibility, dispute — contracts defined, full flow incomplete.
- **PULSE** (event/audit): timelines, audit, analytics, notifications — schema defined, orchestration partial.
- **ROOT, INDEX, VAULT, ACTUAL, ATLAS, I/O, ABBA (orchestration)**: all referenced in architecture, all partially or not implemented.

## Critical gaps (not yet coded)
BEING/BECOMING/STATE/FORMATION/TRANSFORMATION/CONTINUUM (no state machine), VECTOR (no implementation anywhere), TERMINAL (unclear purpose, unimplemented), FLOOR (unimplemented), BECOMING MULTIPLIER (no formula), formal mathematics/logic foundation, unified knowledge graph, Carbon Actual OS unification layer, unified measurements/metrics system, and the integration layer for the 4 unintegrated forks (ECC, caveman, Botpress, baserow).

## 12-point operating doctrine (authoritative, from abba-mas)
1. Every industry = domain
2. Every domain = specialised, independently deployable products
3. Products built on real entities, relationships, workflows, risks, obligations, markets, proof conditions
4. Every entity integrates with Actual Management through a common envelope
5. Every tradable object integrates with Capital through a common trade-object contract
6. Every HAPI retains continuous identity across multiple domains
7. Shared ecosystem services inherited, not rebuilt
8. SEAL limits access by identity, authority, consent, purpose, evidence
9. Root=truth; Vector=direction; Pulse=movement; Proof=verification; Actual=reality
10. Past=proof/continuity/recovery/learning; Present=action; Future=survival/resilience/opportunity/advancement
11. Every product/service must include forecasting, foresight, scenario planning, frontier readiness
12. Trading=universal infrastructure; Capital=specialised product family

## Canonical hierarchy
```
Carbon Actual Ecosystem
├── Shared Foundation
├── Actual Management (universal core + functional/industry/HAPI/AI/asset/frontier branches)
├── Marketplace (discovery, listing, matching, fulfillment)
├── Capital (trading/bidding/auction/barter, finance/investment, escrow/clearing/custody/settlement, spot/forwards/futures/options/swaps, industry/digital/environmental/frontier markets)
├── Industry Domains (product families + specialist domain packs + trading adapters)
├── Entity Networks (HAPIs, AIs, organisations, physical/digital assets, legal/financial/operational/environmental entities)
├── I/O Movement & Settlement
├── Pulse → Proof → Actual
└── Forecast, foresight & frontier readiness
```

## BUNK product factory pattern (implemented, in omnii)
Authentication → multi-role onboarding → property/unit registry → listings/search/wanted requests → explainable matching → lead CRM → inspections/offers/agreements → payments/tenancy/maintenance → Proof & Pulse events → human SEAL/moderation → ABBA routing → notifications/analytics/audit.

## Naming issue flagged at the time
`omnii` contained the BUNK product + Foundation framework despite its name — flagged for rename to `carbon-actual` or a split. (Note: as of this later ecosystem audit, `omni` — the browser/MCP product — and `omnii` — this BUNK+Foundation repo — are two distinct, confusingly-named repos; this is the root of that confusion.)

## Fork integration readiness
| Fork | Purpose | Integration point | Readiness |
|---|---|---|---|
| ECC | Agent optimization | AI swarm foundation | High |
| caveman | Token efficiency | All agent communications | Ready |
| Botpress | Conversational AI | User interface layer | Medium |
| baserow | No-code database | Data + workflow platform | Medium |
| openclaw | Multi-channel UI | Universal user interface | High |

## Phase 2 recommendations (from the report, still open)
1. Rename/split omnii
2. Consolidate all Canon concepts into a single CANON.md
3. Create an integration registry for forks
4. Build unified repository structure aligned to doctrine
5. Implement missing layers (state machine, knowledge graph, metrics, OS)
6. Integrate the 4 unintegrated forks
7. Complete HAPI contract implementation across all products
8. Build a unified measurement system
9. Create CI/CD automation for ecosystem health tracking
10. Generate an executive dashboard showing Canon completeness
