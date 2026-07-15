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

## Cross-cutting capability layers (not standalone products)
Four items appear in `canon/PRODUCTS.md`'s catalog that are better understood as **capabilities every product plugs into**, not standalone offerings competing for the same customer attention as BUNK or Institute GPT:

- **Management** (VMS, Tally, and general operations tooling) — every product needs asset/operations/workflow management; this isn't one product's job, it's infrastructure all products consume.
- **Trading** (Capital Markets, Commodities, Forex, Crypto exposure) — the mechanism by which any tokenized value (per `canon/ECONOMICS.md`) gets exchanged; every product that mints value needs a trading capability, not a separate trading product per domain.
- **Marketplace** (Markets Build, Spotist's sourcing, Prompt Marketplace) — the mechanism by which any product's outputs get discovered and transacted; a shared capability, not one product's silo.
- **IO** — already defined in `canon/PRODUCTS.md` as the universal value movement platform; this is the clearest existing example of a cross-cutting layer already correctly identified as one.

**Practical implication**: when building any of the 47 products in `canon/PRODUCTS.md`, don't build a bespoke management/trading/marketplace system for that product. Build against the shared Management/Trading/Marketplace/IO capability layer once, and every product consumes it via the API-first pattern. This is a direct application of the "Integration First" and "Modular" denominators already in the original list — duplicate management/trading/marketplace logic per-product is exactly the kind of scatter `docs/REPO_HYGIENE_AUDIT.md` flagged elsewhere in the account (omni/omnii, Zujid variants).

## What was deliberately excluded from this extension
The following concepts from the broader discussion are **not** included as Canon material, because they describe operational claims ("active," "deployed," "running") that were never verified against actual infrastructure, or introduce governance models (fully autonomous AI realm with no human oversight) that conflict with CANON.md Part VI's existing governance structure without a formal amendment process. If any of these are wanted later, they need their own scoped proposal and Constitutional Council-style review, per CANON.md Part XVIII (Governance Authority):
- Quantum computing/cryptography/teleportation/internet claims beyond documented, verifiable integrations
- "HAPI World" as a fully autonomous, human-oversight-free AI realm (note: a governed, sandboxed version was subsequently clarified and specified in `canon/HAPI_WORLD.md`)
- AI-human and AI-robot relationship dynamics
- Interplanetary/alien ontology extensions
- ABBA as astrologer/fortune-teller
