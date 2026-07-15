# Canon Extension (Draft) — Ledger Architecture

> **Status: Draft, pending ratification.** Extends CANON.md Part XV (Data Models — Transaction Model / Constitutional Ledger) into named, purpose-specific ledgers. All ledgers below are views/partitions of the single underlying Constitutional Ledger defined in CANON.md — this is not proposing 18 separate databases, it's defining what gets tagged and queried as what.

## Relationship to CANON.md
CANON.md Part XV already defines the core `Transaction` model with a `value_type` enum (financial, knowledge, reputation, trust, creativity, research, contribution, compute, energy, time). The ledgers below map onto that existing model as filtered views, not new infrastructure:

| Named Ledger | Filters Transaction Model by | Status |
|---|---|---|
| Value Ledger | `value_type` (any) | Already specified in CANON.md |
| Identity Ledger | Identity model events (mint/evolve/retire/restore) | Already specified in CANON.md Part IV |
| Governance Ledger | Governance events (proposal/vote/ruling) | Already specified in CANON.md Part XVI |
| Audit Ledger | Security events (threat/incident/violation) | Already specified in CANON.md Part XVI |
| Economic Ledger | `value_type = financial` | Subset of Value Ledger |
| Asset Ledger | Transactions where `value_type` relates to Asset entities | Subset of Value Ledger |
| Ownership / Mint Ledger | `identity.minted` events specifically | Subset of Identity Ledger |
| Token Ledger | Currency-type Asset transactions | Subset of Asset Ledger |
| Knowledge Ledger | `knowledge.*` events | Already specified in CANON.md Part XVI |
| Contribution Ledger | `value_type = contribution` | Subset of Value Ledger |
| Trust / Reputation Ledger | Trust/reputation score changes (CANON.md Part XIII, Section 34) | Needs new event types, not yet in CANON.md's event list — real gap |
| Activity Ledger | All events, unfiltered | Superset — this is just the raw Constitutional Ledger |
| Pulse Ledger | Real-time event stream (not historical) | Distinct from the above — this is a live feed, not a queryable history table |
| Phoenix / Continuum Ledger | Archive/restoration events | Maps to Ash Layer + Phoenix Layer per CANON.md Part XX |
| Omni Ledger | Cross-product coordination events | Maps to Omni product spec, CANON.md Part XII Section 25 |

## Real gap identified
CANON.md's canonical event list (Part XVI, Section 38) does not currently include trust/reputation score change events, even though Section 34 defines trust and reputation as first-class constitutional concepts. This is a genuine inconsistency worth fixing in CANON.md itself, not just documenting around.

## Implementation notes
- Do not build 18 separate ledger tables. Build one well-indexed transaction/event table (as CANON.md already specifies) with a `ledger_view` or tag field, then define these 18 names as saved queries/views over it.
- This avoids the exact fragmentation pattern already flagged in `docs/REPO_HYGIENE_AUDIT.md` and `docs/FULL_ECOSYSTEM_AUDIT.md` (duplicate/scattered infrastructure for the same underlying thing).
