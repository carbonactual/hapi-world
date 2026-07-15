# Canon Extension (Draft) — Common Denominators

> **Status: Draft, pending ratification.** A checklist for every component (product, agent, repo, integration) in the Carbon Actual Ecosystem. This is the conformance bar — complements `docs/ECOSYSTEM_STANDARDS.md` in `hapi-world-nexus`, which covers repo-level hygiene (secrets, docs placement, branching). This document covers architectural/ontological conformance instead.

## The checklist
Every component should be able to answer yes to each of these, referencing the CANON.md part that governs it:

- [ ] **Identity through #** — CANON.md Part IV
- [ ] **Governed by SealGrant/permission logic** — CANON.md Part XV, Section 36.2 + Part VI Logic L5
- [ ] **Discoverable through a Registry** — see `canon/REGISTRIES.md` (this extension)
- [ ] **Measured in the Ledger** — see `canon/LEDGERS.md` (this extension), grounded in CANON.md Part XV
- [ ] **Participates in the Value Chain** — CANON.md Part VII, value_type taxonomy
- [ ] **Supports tokenization/fractionalization where appropriate** — not universal; only where the component genuinely represents divisible value (avoid forcing this on things that aren't actually assets)
- [ ] **API-first** — matches the working pattern already established in `Carbon-Actual-`'s `api/integrations/` folder
- [ ] **Secrets never committed** — enforced by `docs/ECOSYSTEM_STANDARDS.md` limit 1
- [ ] **Docs live under `docs/` or `canon/`** — enforced by `docs/ECOSYSTEM_STANDARDS.md` limit 2
- [ ] **One branch, one PR** — enforced by `docs/ECOSYSTEM_STANDARDS.md` limit 3
- [ ] **Has a real, non-duplicate name** — enforced by `docs/ECOSYSTEM_STANDARDS.md` limit 4; see `docs/REPO_HYGIENE_AUDIT.md` for known violations (omni/omnii collision, 8 Zujid variants, 5 Carbon Actual Formation variants)
- [ ] **Auditable** — every state change should be traceable through the Ledger, per CANON.md's Doctrine of Explainability (Part I, Section 4.7)

## What was deliberately excluded from this extension
The following concepts from the broader discussion are **not** included as Canon material, because they describe operational claims ("active," "deployed," "running") that were never verified against actual infrastructure, or introduce governance models (fully autonomous AI realm with no human oversight) that conflict with CANON.md Part VI's existing governance structure without a formal amendment process. If any of these are wanted later, they need their own scoped proposal and Constitutional Council-style review, per CANON.md Part XVIII (Governance Authority):
- Quantum computing/cryptography/teleportation/internet claims beyond documented, verifiable integrations
- "HAPI World" as a fully autonomous, human-oversight-free AI realm
- AI-human and AI-robot relationship dynamics
- Interplanetary/alien ontology extensions
- ABBA as astrologer/fortune-teller
