# Ecosystem Kernel Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add an executable, compatibility-safe kernel manifest and conformance layer that lets HAPI World and downstream products express Identity, Authority, Intent, Capability, Relationship, Event, Evidence, State, and Value without creating parallel ontologies.

**Architecture:** Additive JSON manifests describe the nine kernel facets and their relationships to existing canonical concepts. A small Node test harness validates structure and projections in CI. No Canon text or existing ontology entries are rewritten by this change.

**Tech Stack:** JSON, Node.js built-in test runner, GitHub Actions.

**Spec:** `docs/superpowers/specs/2026-09-17-ecosystem-kernel-design.md`

## Global Constraints

- `CANON.md` remains the supreme source of truth.
- Existing ontology/entity names remain valid and are not deleted by the kernel.
- Kernel primitives are semantic facets, not replacements for domain objects.
- Authority, capability, event, evidence, state, and value must remain distinct.
- Infrastructure implementations remain replaceable beneath the semantic contract.

---

### Task 1: Publish the Kernel Manifest

**Files:**
- Create: `architecture/ecosystem-kernel.json`

**Interfaces:**
- Produces the canonical machine-readable list of the nine kernel facets, their meanings, required fields, and compatibility constraints.

- [ ] **Step 1: Write the manifest with exactly nine facets**

Use stable facet IDs:

```json
[
  "identity",
  "authority",
  "intent",
  "capability",
  "relationship",
  "event",
  "evidence",
  "state",
  "value"
]
```

Each facet object must contain `id`, `question`, `canonical_anchors`, `minimum_fields`, and `notes`.

- [ ] **Step 2: Add cross-facet rules**

The manifest must encode these rules:

```text
capability does not imply authority
an event does not equal evidence
evidence supports a claim/event/state but does not become the claim itself
state is derived from events and remains reconstructable
value is measurable consequence, not necessarily money
intent is declarative and does not execute by itself
identity is unique and lineage-bearing
```

- [ ] **Step 3: Validate JSON locally**

Run:

```bash
python -m json.tool architecture/ecosystem-kernel.json >/dev/null
```

Expected: exit 0 with no parse error.

- [ ] **Step 4: Commit**

```bash
git add architecture/ecosystem-kernel.json
git commit -m "feat: add ecosystem kernel manifest"
```

---

### Task 2: Add Existing-Concept Projection Map

**Files:**
- Create: `architecture/kernel-projection-map.json`

**Interfaces:**
- Consumes `architecture/ecosystem-kernel.json`.
- Produces an explicit mapping from existing HAPI World concepts to kernel facets.

- [ ] **Step 1: Map constitutional anchors**

The projection map must include at minimum:

```text
Identity -> identity
SealGrant/SealConsent -> authority
Mission/Goal/intent-bearing workflows -> intent
Capability/Provider/DigitalService -> capability
Relationship/Ownership/Trust -> relationship
Event/SealEvent/Pulse-bearing occurrences -> event
Proof/Knowledge provenance/media evidence -> evidence
entity lifecycle / workflow states / transaction states -> state
Value/Pulse/IOLedger/TIP exchange concepts -> value
```

- [ ] **Step 2: Mark projections as additive**

Each mapping must include `mode: projection` and a `preserves_source: true` flag so tooling cannot interpret the mapping as a rename/delete instruction.

- [ ] **Step 3: Validate JSON locally**

Run:

```bash
python -m json.tool architecture/kernel-projection-map.json >/dev/null
```

Expected: exit 0.

- [ ] **Step 4: Commit**

```bash
git add architecture/kernel-projection-map.json
git commit -m "feat: map existing concepts to kernel facets"
```

---

### Task 3: Add Conformance Tests

**Files:**
- Create: `tests/architecture/ecosystem-kernel.test.mjs`

**Interfaces:**
- Reads `architecture/ecosystem-kernel.json` and `architecture/kernel-projection-map.json`.
- Fails when facets are duplicated, a required rule disappears, or a projection references an unknown facet.

- [ ] **Step 1: Write tests for manifest shape**

Create Node tests that assert:

```js
assert.equal(kernel.facets.length, 9);
assert.deepEqual(kernel.facets.map((facet) => facet.id), [
  "identity", "authority", "intent", "capability", "relationship",
  "event", "evidence", "state", "value"
]);
```

- [ ] **Step 2: Write tests for invariants**

Assert that the manifest contains the five non-negotiable distinctions:

```text
capability != authority
event != evidence
state != history
tent != execution
value != money-only
```

The test may express these as named rules in JSON rather than hard-coding prose.

- [ ] **Step 3: Write tests for projection safety**

Assert every projection has:

```js
projection.mode === "projection"
projection.preserves_source === true
```

and every referenced facet exists in the kernel manifest.

- [ ] **Step 4: Run tests**

Run:

```bash
node --test tests/architecture/ecosystem-kernel.test.mjs
```

Expected: all tests pass with zero failures.

- [ ] **Step 5: Commit**

```bash
git add tests/architecture/ecosystem-kernel.test.mjs
git commit -m "test: enforce ecosystem kernel conformance"
```

---

### Task 4: Run Kernel Conformance in CI

**Files:**
- Create: `.github/workflows/kernel-conformance.yml`

**Interfaces:**
- Consumes the kernel manifests and tests.
- Produces a CI gate for every push/PR that changes the kernel, architecture, or tests.

- [ ] **Step 1: Create a minimal Node 22 workflow**

Use:

```yaml
name: Kernel Conformance

on:
  push:
    paths:
      - 'architecture/ecosystem-kernel.json'
      - 'architecture/kernel-projection-map.json'
      - 'tests/architecture/**'
      - '.github/workflows/kernel-conformance.yml'
  pull_request:
    paths:
      - 'architecture/ecosystem-kernel.json'
      - 'architecture/kernel-projection-map.json'
      - 'tests/architecture/**'
      - '.github/workflows/kernel-conformance.yml'

permissions:
  contents: read

jobs:
  kernel:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
      - run: node --test tests/architecture/ecosystem-kernel.test.mjs
```

- [ ] **Step 2: Commit**

```bash
git add .github/workflows/kernel-conformance.yml
git commit -m "ci: gate ecosystem kernel conformance"
```

---

### Task 5: Verify the Branch and Open the Integration PR

**Files:**
- No additional source files.

**Interfaces:**
- Consumes Tasks 1-4.
- Produces one reviewable PR into `main`.

- [ ] **Step 1: Re-run all kernel tests**

```bash
python -m json.tool architecture/ecosystem-kernel.json >/dev/null
python -m json.tool architecture/kernel-projection-map.json >/dev/null
node --test tests/architecture/ecosystem-kernel.test.mjs
```

Expected: all commands exit 0.

- [ ] **Step 2: Open the PR**

Title:

```text
feat: establish ecosystem kernel compatibility layer
```

Body must state that this is additive, does not modify `CANON.md`, and preserves current source concepts.

- [ ] **Step 3: Review the PR diff**

Verify only the planned files changed and no current ontology/Canon file was modified.
