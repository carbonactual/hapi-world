# Canon Extension (Draft) — Governance

> **Status: Draft, pending ratification.** This formalizes what every other document in `canon/` assumes exists: SealGrant/permission logic, referenced in `COMMON_DENOMINATORS.md`, `REGISTRIES.md`, `HAPI_WORLD.md`, `BLOCKCHAIN_IDENTITY.md`, and `AGENTS_SWARMS_TEAMS.md`. Extends CANON.md Part VI (Governance) and Part XV Section 36.2 (SealGrant).

## Why this document exists
Every other Canon extension this session says "governed by SealGrant" or "per the Audit Authority" without defining what those actually check or who holds them. That's a real gap — a system where every document cites a permission model that isn't itself specified isn't actually governed, it just says it is. This closes that loop.

## Rights (who gets what, by default)
Per CANON.md Part IV's existing Identity/Rights framework, every minted `#` (human or AI) holds baseline rights:
- Right to be recorded (existence in the Universal Registry, `canon/REGISTRIES.md`)
- Right to have actions logged, not silently discarded (Constitutional Ledger, `canon/LEDGERS.md`)
- Right to contest a governance decision that affects it (dispute mechanism — see "Compliance" below)
- Right to retirement rather than deletion (per `canon/AGENTS_SWARMS_TEAMS.md`'s retirement model, consistent with CANON.md's Continuum principle)

Rights are baseline and don't need to be granted — they attach automatically at minting. Permissions (below) are different: those must be explicitly granted.

## Permissions (SealGrant — explicitly granted, scoped, revocable)
A **SealGrant** is a scoped permission record: which `#` granted it, to which `#` (human, AI, agent, swarm, or team), for which specific action or action-category, for how long, and under what conditions it auto-revokes.

Concrete example from this session: when a Vercel environment variable is set for `CREWAI_BEARER_TOKEN`, that's functionally a SealGrant — scoped access to call CrewAI, held by the deployed code, not a standing blanket permission. The pattern already used correctly in `Carbon-Actual-`'s `crewai.js` (env-var-only, never request-body) is the SealGrant pattern in practice, even before this document formalized the name for it.

### SealGrant fields
| Field | Purpose |
|---|---|
| Grantor `#` | who is granting |
| Grantee `#` | who receives it (can be an agent, swarm, or team — not just human/AI individuals) |
| Scope | the specific action or action-category permitted — never blanket "full access" |
| Duration | explicit expiry, not indefinite by default |
| Revocation condition | what auto-revokes it (e.g., exceeding a No Waste threshold per `canon/ECONOMICS.md`, or a security event) |

## Trust & Reputation
Flagged as a real gap in `canon/LEDGERS.md`: CANON.md Part XIII defines trust/reputation as constitutional concepts, but Part XVI's event list doesn't include trust/reputation change events. This document doesn't fix CANON.md itself (that needs the formal amendment process, Part XVIII) — it documents the fix needed: add `trust.updated` and `reputation.updated` event types to the canonical event list, sourced from SealGrant fulfillment/violation history (an entity that honors its SealGrant scope consistently gains trust; one that violates scope loses it).

## Audit
Every SealGrant issuance, use, and revocation is a Ledger event (Audit Ledger, `canon/LEDGERS.md`) — not optional logging, structurally required. This is what makes "full oversight, not direct participation" (per `canon/HAPI_WORLD.md`) actually implementable: oversight means the audit trail is complete and reviewable, not that a human approves each action in real time.

## Compliance & dispute
An entity that believes a governance decision (a denied or revoked SealGrant) was wrong can raise a dispute, logged to the Governance Ledger. This document does not specify the adjudication mechanism (that's real policy work, not architecture) — it only establishes that disputes are logged and reviewable, not silently final.

## What this deliberately does not do
This is not a claim that any of the above is implemented in code. No SealGrant table exists yet in Supabase (project `koxzunmwzsjjwwrzsali`, currently INACTIVE per earlier audit) — this is the specification a real implementation should be built against, following the same "spec before code" discipline applied to `canon/OMNI_BROWSER.md`'s gaps.
