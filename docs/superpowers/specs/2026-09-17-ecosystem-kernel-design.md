# Ecosystem Kernel Design

**Date:** 2026-09-17  
**Status:** Approved for implementation  
**Scope:** Semantic/architectural compatibility layer for the Carbon Actual ecosystem

## Purpose

The ecosystem has accumulated many valid domain concepts, but they risk becoming a catalogue of specialized nouns. The kernel compresses the common language beneath them without deleting or replacing existing canonical concepts.

The kernel is **not a new constitutional authority**. `CANON.md` remains supreme. Existing laws, doctrines, ontology, registries, and product-native meanings remain valid unless a future constitutional amendment explicitly changes them.

## Core invariant

> **Identity → Authority → Intent → Capability → Relationship → Event → Evidence → State → Value**

This is a semantic grammar, not a mandatory software stack. A domain object may implement one or more kernel facets through inheritance, composition, or projection.

## Kernel primitives

### 1. Identity

Every constitutional entity has one identity/#, lineage, and a traceable history. Identity remains governed by the existing Identity model and Seal system.

### 2. Authority

Authority answers **who may act**. The canonical implementation remains SealGrant/SealConsent and the permission logic in the Canon. A capability never implies authority by itself.

### 3. Intent

Intent answers **what an actor is trying to accomplish**. Intent is declarative and must be separable from execution. Examples: acquire, transfer, create, discover, verify, settle, govern, learn, observe, publish.

### 4. Capability

Capability answers **what can be done**. Capabilities may be supplied by humans, agents, services, institutions, devices, software, or external systems. Capability must be discoverable and bounded independently of implementation technology.

### 5. Relationship

Relationship connects entities and preserves direction, type, scope, strength/state, provenance, and history where applicable. Ownership, employment, representation, trust, delegation, supply, teaching, investment, rental, transport, and governance are relationship projections rather than unrelated universes.

### 6. Event

Event records a consequential occurrence or attempted occurrence. Events may originate inside or outside the platform and may be physical, digital, virtual, broadcast, remote, or hybrid. Event ingestion does not require the ecosystem to have hosted the event.

### 7. Evidence

Evidence supports claims about events, identity, state, value, ownership, provenance, or other facts. Evidence has source, timestamp, integrity/provenance metadata, confidence/status, and lineage appropriate to the evidence type.

### 8. State

State is the current condition of an entity, relationship, intent, capability, asset, workflow, or transaction. State transitions are caused by events and remain reconstructable through history.

### 9. Value

Value records measurable economic or non-economic consequence. Money is one value representation, not the universal definition of value. Existing Pulse, Index, Root, IOLedger, and TIP concepts remain domain implementations over this primitive.

## Layering

```text
CANON / Constitution
        ↓
Kernel grammar
        ↓
HAPI World ontology + registries + world state
        ↓
OMNII implementation/control-plane standards
        ↓
ABBA orchestration + intelligence
        ↓
Products / institutions / agents / services
```

The kernel does not collapse these layers. It gives them a shared vocabulary.

## ABBA boundary

ABBA is the ecosystem orchestrator/intelligence. It may discover entities, inspect authority, translate intent into executable plans, select capabilities, coordinate events, and explain outcomes. ABBA must not become the exclusive owner of identity, state, ledgers, evidence, or every capability.

## Domain projections

Existing domain models remain valid. Examples:

- Market Universe objects (assets, rights, claims, obligations, opportunities, capabilities, capacities, information, relationships) become domain projections of the kernel.
- RITES events are event/evidence/state workflows.
- TIP is a value/exchange surface over assets, rights, claims, obligations, counterparties, capabilities, settlement, and evidence.
- HAPI World remains the world/ontology layer.
- SealGrant/SealConsent remain authority mechanisms.
- Pulse remains a value-feedback mechanism, not a duplicate value primitive.

## Compatibility rules

1. Do not modify `CANON.md` through this kernel work.
2. Do not delete or rename existing domain concepts merely to make the kernel fit.
3. Do not create a new subsystem when an existing primitive can express the requirement.
4. New domain concepts must declare which kernel facets they implement.
5. A capability is not authority.
6. An event is not proof; evidence is attached to claims/events/states as appropriate.
7. A current state is not the full history.
8. A value signal is not automatically a monetary balance.
9. Product-specific workflows must remain projections of shared primitives rather than parallel universes.
10. Infrastructure choices remain replaceable beneath the semantic contract.

## Migration strategy

The first implementation is additive:

1. Publish the kernel manifest and terminology map.
2. Add conformance validation for domain objects.
3. Map existing ontology/entity registries to kernel facets.
4. Add event/evidence/state interfaces where missing.
5. Make ABBA use the kernel as its common routing language.
6. Progressively migrate product surfaces without a big-bang rewrite.

## Success criteria

A new ecosystem capability should be expressible by declaring:

- the identity involved;
- the authority required;
- the intent;
- the capability/capabilities used;
- the relationships affected;
- the resulting event(s);
- the evidence available;
- the resulting state transition(s);
- the value consequence(s).

If that can be represented without inventing a parallel ontology, the ecosystem is becoming more composable instead of merely larger.
