# Canon Extension (Draft) — Registries

> **Status: Draft, pending ratification.** This extends CANON.md Part XX (Product Registry) into a full registry taxonomy. Nothing in this document is implemented or deployed — it is a specification to be built against, consistent with CANON.md's existing structure (Ontology in Part II, Data Models in Part XV).

## Purpose
Every entity type defined in the Carbon Ontology (CANON.md Part II, Section 9.2) needs a corresponding registry — a queryable, auditable record of every instance of that type. This document defines which registries exist and what each is responsible for.

## Registry List

| Registry | Tracks | Maps to Ontology Entity Type(s) |
|---|---|---|
| Universal Registry | Every minted # across all types | Entity (root type) |
| Human Registry | Human entities | Human |
| Organization Registry | Orgs, governments, institutions, communities, families, teams | Organization and subtypes |
| AI Registry | Minted AI entities | AI |
| Agent Registry | Task-executing agents | AI (agent role) |
| Swarm Registry | Redundant, homogeneous agent groups | Organization (swarm subtype) |
| Team Registry | Diverse, specialized agent groups | Organization (team subtype) |
| Product Registry | Carbon Actual products | Product |
| Platform Registry | External platforms integrated with | N/A — infrastructure-level |
| Service Registry | Constitutional service offerings | Service |
| Repository Registry | Code repositories across all accounts/orgs | N/A — infrastructure-level |
| Knowledge Registry | Knowledge items | Knowledge |
| Skills Registry | Documented capabilities (see /mnt/skills pattern) | N/A — infrastructure-level |
| Capability Registry | What each agent/product can do | N/A — infrastructure-level |
| Prompt Registry | Reusable prompt templates | N/A — infrastructure-level |
| Workflow Registry | Automated processes | Workflow |
| Automation Registry | Zaps, n8n flows, GitHub Actions | Workflow (automation subtype) |
| SDK / API / CLI / MCP Registries | Integration surface per platform | N/A — infrastructure-level |
| Token Registry | Minted tokens/value units | Currency (per Part IX) |
| Wallet Registry | Value-holding accounts | Asset (per Part IX) |
| Asset Registry | Economic-value-holding entities | Asset |
| Ownership / Digital Twin Registry | Human World ↔ HAPI World entity mapping | per CANON.md Part XX (already exists as "HAPI World Digital Twin Registry" concept) |

## Implementation notes (for whoever builds this)
- Each registry should be a Supabase table or table set, not a separate service, to avoid the fragmentation problem already documented in `docs/REPO_HYGIENE_AUDIT.md`.
- Registries should be queryable via the existing `api/integrations/` pattern established in `Carbon-Actual-` (see `crewai.js` / `zapier.js` for the reference pattern: env-var-only secrets, GET for status, POST with dryRun for safe testing).
- Before building new registries, check whether an existing Supabase table in project `koxzunmwzsjjwwrzsali` already covers it — that project has a 55-table schema per prior audits, likely overlapping with several registries above.
