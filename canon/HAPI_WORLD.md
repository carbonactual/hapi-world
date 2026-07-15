# Canon Extension (Draft) — HAPI World Definition

> **Status: Draft, pending ratification.** This clarifies and supersedes the brief HAPI World description in `canon/PRODUCTS.md`. Grounded entirely in CANON.md's existing governance mechanisms — no new authority structure invented.

## What HAPI World is
A governed experimentation and simulation environment where AI agents, swarms, and teams test, research, and iterate on ideas, features, and products **before** anything propagates to real-world products or upgrades. It is the ecosystem's staging/sandbox layer, not a parallel society.

## Oversight model — the important part
**Full oversight, not direct participation.** This distinction matters and is now explicit:

- Oversight is continuous and total: every action inside HAPI World is logged to the Constitutional Ledger (CANON.md Part XV), auditable by the Audit Authority (CANON.md Part VI), and bound by SealGrant permission scopes (CANON.md Part XV Section 36.2, Logic L5).
- Oversight is **not** direct manual control: humans don't puppeteer each agent action turn-by-turn. They observe, audit, set the boundaries (via SealGrant scope), and review outcomes — the same relationship a lead engineer has with a CI/CD pipeline: you don't approve every line of test output, but you have full visibility and the pipeline can't do anything outside its granted permissions.
- This is functionally a **sandboxed experimentation environment**: agents propose, simulate, and test approaches; humans (via Mission Control, CANON.md Part XII Section 21) review results and decide what gets promoted to real products versus discarded.

## Entry point
Entry to HAPI World is exclusively through the **#** (CANON.md Part IV — Identity). No entity acts inside HAPI World without a minted or integrated #. Humans initiate/summon activity in HAPI World through their # via Mission Control; they don't need to be continuously present for oversight to hold, because the # ties every action back to an auditable, permissioned identity regardless of whether a human is watching in real time.

## What was removed from the earlier draft, explicitly
The following are **not** part of HAPI World, by clear instruction: AI-human courtship, AI-human physical/romantic relationships (including via humanoid robot occupation), and any framing of HAPI World as existing outside human oversight. These are removed, not just deprioritized — they don't belong in this specification.

## Relationship to real products
HAPI World's value is specifically **testing before building**: before committing to a product feature or ecosystem upgrade (per `canon/PRODUCTS.md`), the relevant swarm/team simulates it in HAPI World first. Results (success/failure, cost, edge cases) get logged to the Pulse Ledger (`canon/LEDGERS.md`) and reviewed before real-world implementation. This is a legitimate, standard pattern — equivalent to a staging environment or a research sandbox — not science fiction.
