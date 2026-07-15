# Canon Extension (Draft) — Agents, Swarms & Teams

> **Status: Draft, pending ratification.** Grounded in real swarm intelligence theory (Ant Colony Optimization, Particle Swarm Optimization, stigmergy, emergence) and in code that already exists: Omni's `form_team` MCP tool (`canon/OMNI_BROWSER.md`) and the scoring algorithm preserved in `knowledge/EXTRACTED_FROM_OMNII.md`.

## The core distinction
**Swarm**: many agents, same or highly similar purpose, decentralized coordination, redundancy and fault-tolerance through scale. No central controller — coordination emerges from local rules and shared state (stigmergy: indirect coordination via a shared environment, like the Pulse Ledger).

**Team**: fewer agents, diverse/specialized roles, complementary skills toward one shared goal, more structured coordination (explicit handoffs, defined roles).

Both are Organization-type entities per CANON.md's ontology (Part II), distinguished by structure, not by any special new entity type.

## Formation mechanism (concrete, matches existing code)
This is not abstract — it's the same algorithm already fully specified in `knowledge/EXTRACTED_FROM_OMNII.md`'s "Swirm Selection" section, which Omni's code should implement (see gap #1 in `canon/OMNI_BROWSER.md`):

1. Task/request arrives
2. Requirements analyzed against the Skills/Capability Registry (`canon/REGISTRIES.md`)
3. Candidate agents scored: capability match (up to +30), latency fit (up to +15), cost fit (up to +10), privacy fit (±20) — baseline 50, max 100
4. If the task needs volume/redundancy → forms a **swarm** (many similar-scoring agents deployed in parallel)
5. If the task needs diverse expertise → forms a **team** (best-scoring agent per distinct sub-capability)
6. Assembled group executes; outcomes logged to Pulse Ledger (`canon/LEDGERS.md`)
7. Dynamic reselection: if error rate or latency exceeds threshold mid-task, the group is reformed — this is the one part of the original design that's genuinely sophisticated and worth preserving as-is

## What makes this real vs. the earlier "1 million+ swarms" claim
The earlier extended conversation this is partly drawn from claimed "over 1 million+ integrations, AIs, swarms & teams... actively running" with zero verifiable instance. This document does not repeat that claim. Formation happens **on demand**, scored against **actual** registered capabilities — there is no ambient population of a million agents; there's a formation algorithm that creates exactly as many agents as a given task's scoring calls for.

## Feedback loop (the real gap flagged earlier)
Earlier in this session it was noted that "agents are not sending feedback yet." The fix is not more agents — it's implementing gap #2 from `canon/OMNI_BROWSER.md` (execution actually executing) so that outcomes have something real to report back into the Pulse Ledger. Feedback loops can't function on top of an execution layer that returns `null`.

## Retired agents
Agents/swarms/teams that repeatedly score below threshold or generate no Pulse (per `canon/ECONOMICS.md`'s No Waste principle) are retired — logged in the Registry as inactive, not deleted, preserving audit history per CANON.md's Continuum principle.
