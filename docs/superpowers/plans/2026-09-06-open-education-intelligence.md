# Open Education Intelligence Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build Open Education Intelligence (OEI) as the universal education intelligence foundation under InstituteGPT, with an institution-neutral learner/education graph, Open Student Environment, and institution-adapter boundary that can specialize the same foundation for NOUN and later institutions.

**Architecture:** OEI is a universal graph and orchestration layer. The learner remains the primary entity; institutions, educators, knowledge/resources, curricula, activities, assessments, evidence, credentials, skills, opportunities, services, events, authorities and outcomes connect to the learner through typed relationships. Institution adapters contribute verified institution-specific identity, rules, workflows, catalogues and services without changing the universal model. Cross-cutting controls cover provenance, licensing, verification, accessibility, personalization, assessment integrity, authority and consent.

**Tech Stack:** Existing Carbon Actual repository conventions; TypeScript/JavaScript-compatible domain modules; PostgreSQL/Supabase-compatible persistence where state is required; existing Carbon Actual event/identity/consent patterns; deterministic tests first; no institution-specific logic in the universal OEI core.

**Spec:** `open-education-intelligence/OEI_DESIGN.md`

## Global Constraints

- The learner is the primary entity; institutions are relationships/environments, not the root identity.
- OEI must support open, distance, online, blended, flexible and lifelong learning.
- Institution-specific rules and workflows belong in adapters.
- Source provenance, freshness, licensing and verification are first-class data.
- Assessment support may teach, explain, practice and generate mocks, but must not complete graded work or impersonate learners.
- Authority and consent must be explicit before consequential institutional actions.
- Financial functionality is education/discovery-oriented in OEI; regulated execution remains outside autonomous OEI authority.
- Accessibility and inclusive learner support are first-class requirements, not optional features.
- The universal core must remain usable without a NOUN dependency.
- Every new domain must have deterministic tests before implementation is considered complete.

---

## Task 1: Establish the OEI Domain Contract

**Files:**
- Create: `open-education-intelligence/domain-contract.js`
- Create: `tests/open-education-intelligence/domain-contract.test.js`
- Modify: `open-education-intelligence/OEI_DESIGN.md` only if implementation terminology needs clarification

**Interfaces:**
- Produces `OEI_DOMAINS`, `OEI_ENTITIES`, `OEI_RELATIONSHIPS`, and `OEI_CAPABILITIES` as immutable canonical contracts.
- `OEI_DOMAINS` must include learner, institution, educator, knowledge, curriculum, learning, assessment, research, support, credential, skills, opportunity, services, community, enterprise, finance-education, governance, lifecycle, evidence and orchestration.
- `OEI_RELATIONSHIPS` must represent learner-to-institution, learner-to-learning, learner-to-resource, learner-to-educator, learner-to-assessment, learner-to-credential, learner-to-skill, learner-to-opportunity and institution-to-provider/authority relationships.

- [ ] Write failing tests that assert every universal domain exists and that NOUN is not required by the contract.
- [ ] Run the focused test and confirm failure.
- [ ] Implement the smallest immutable contract.
- [ ] Run the focused test and confirm it passes.
- [ ] Commit as `feat(oei): establish universal domain contract`.

---

## Task 2: Build the Learner Intelligence Core

**Files:**
- Create: `open-education-intelligence/learner-intelligence.js`
- Create: `tests/open-education-intelligence/learner-intelligence.test.js`

**Interfaces:**
- `buildLearnerProfile(input)` returns a normalized institution-neutral learner context.
- `addLearnerRelationship(profile, relationship)` returns a new profile with a typed relationship.
- `deriveLearnerContext(profile, events)` returns current goals, learning stage, needs, active pathways and opportunities without inventing facts.

- [ ] Write failing tests for a learner with no institution, one institution, and multiple simultaneous learning relationships.
- [ ] Test that learner identity persists while institutional relationships can be added/removed.
- [ ] Implement normalization and relationship handling.
- [ ] Verify focused tests pass.
- [ ] Commit as `feat(oei): add learner intelligence core`.

---

## Task 3: Build the Education Graph

**Files:**
- Create: `open-education-intelligence/education-graph.js`
- Create: `tests/open-education-intelligence/education-graph.test.js`

**Interfaces:**
- `createEducationNode(type, attributes)` creates a typed node.
- `createEducationRelationship(from, relationship, to, evidence)` creates an evidence-aware edge.
- `queryEducationGraph(graph, query)` returns deterministic matching nodes/relationships.
- `traceLearningPath(graph, learnerId, goal)` returns a sequence such as goal → learning → evidence → credential → skill → opportunity.

- [ ] Write failing graph construction and relationship tests.
- [ ] Add provenance/evidence requirements for externally asserted relationships.
- [ ] Implement node/edge storage and deterministic traversal.
- [ ] Verify graph queries and learning-path tests.
- [ ] Commit as `feat(oei): add education graph`.

---

## Task 4: Add Knowledge, OER, Provenance and Licensing Intelligence

**Files:**
- Create: `open-education-intelligence/knowledge-intelligence.js`
- Create: `tests/open-education-intelligence/knowledge-intelligence.test.js`

**Interfaces:**
- `registerResource(resource)` normalizes title, type, source, licence, subject, audience, format and freshness.
- `verifyResource(resource, evidence)` records verification state without claiming unsupported authority.
- `classifyReuseRights(licence)` returns access/reuse/adaptation/redistribution properties.
- `findLearningResources(query, context)` ranks resources by relevance, provenance, freshness, accessibility and licence compatibility.

- [ ] Write failing tests for official, openly licensed and unknown-provenance resources.
- [ ] Test that open access is not treated as equivalent to open licence.
- [ ] Implement provenance and licensing model.
- [ ] Verify focused tests.
- [ ] Commit as `feat(oei): add knowledge and oer intelligence`.

---

## Task 5: Build Learning Pathway Intelligence

**Files:**
- Create: `open-education-intelligence/learning-intelligence.js`
- Create: `tests/open-education-intelligence/learning-intelligence.test.js`

**Interfaces:**
- `buildLearningPath(goal, learnerContext, graph)` produces ordered learning steps.
- `recommendNextLearningAction(context)` returns one or more explainable next actions.
- `mapPrerequisites(pathway)` identifies missing knowledge or skills.

- [ ] Write failing tests for beginner, progressing and career-transition learner paths.
- [ ] Test that recommendations cite the graph relationships/resources used.
- [ ] Implement deterministic pathway logic.
- [ ] Verify tests.
- [ ] Commit as `feat(oei): add learning pathway intelligence`.

---

## Task 6: Add Assessment, Practice and Academic Integrity Contracts

**Files:**
- Create: `open-education-intelligence/assessment-intelligence.js`
- Create: `tests/open-education-intelligence/assessment-intelligence.test.js`

**Interfaces:**
- `buildPracticeSet(spec)` creates non-graded practice content.
- `scorePracticeAttempt(attempt, rubric)` returns score, feedback and weak areas.
- `assessmentBoundary(action)` returns allowed/blocked classification.
- `buildMockAssessment(spec)` creates a practice/mock assessment with explicit integrity metadata.

- [ ] Write failing tests for practice, mock assessment and blocked graded-work completion.
- [ ] Test that impersonation and exam attendance by another person are blocked.
- [ ] Implement the assessment boundary and practice model.
- [ ] Verify tests.
- [ ] Commit as `feat(oei): add assessment intelligence and integrity boundary`.

---

## Task 7: Add Research Intelligence

**Files:**
- Create: `open-education-intelligence/research-intelligence.js`
- Create: `tests/open-education-intelligence/research-intelligence.test.js`

**Interfaces:**
- `buildResearchPathway(topic, learnerContext)` returns research questions, discovery steps and milestone suggestions.
- `classifyResearchResource(resource)` classifies source/evidence type.
- `buildLiteratureDiscoveryPlan(query)` returns search concepts without fabricating citations.
- `researchBoundary(action)` blocks unauthorized submission/impersonation while allowing research support.

- [ ] Write failing tests for project topic discovery, literature search and methodology support.
- [ ] Add explicit academic-integrity boundary tests.
- [ ] Implement research intelligence.
- [ ] Verify tests.
- [ ] Commit as `feat(oei): add research intelligence`.

---

## Task 8: Build Learner Support, Accessibility and Inclusion Intelligence

**Files:**
- Create: `open-education-intelligence/support-intelligence.js`
- Create: `tests/open-education-intelligence/support-intelligence.test.js`

**Interfaces:**
- `classifySupportNeed(input)` returns academic, technical, administrative, career, wellbeing, accessibility or escalation categories.
- `buildSupportPlan(need, availableServices)` produces explainable support routes.
- `checkAccessibility(resource, learnerContext)` reports compatibility gaps without inferring sensitive attributes.

- [ ] Write failing tests for academic, technical, administrative and accessibility support.
- [ ] Test human escalation for needs outside autonomous support.
- [ ] Implement support routing.
- [ ] Verify tests.
- [ ] Commit as `feat(oei): add inclusive learner support intelligence`.

---

## Task 9: Add Credential, Skills and Lifelong-Learning Intelligence

**Files:**
- Create: `open-education-intelligence/credential-intelligence.js`
- Create: `tests/open-education-intelligence/credential-intelligence.test.js`

**Interfaces:**
- `registerCredential(credential)` records issuer, type, evidence and verification status.
- `mapCredentialToSkills(credential, evidence)` returns explicitly supported skills.
- `buildLifelongLearningProfile(learner)` connects credentials, skills and future learning without overclaiming competence.
- `compareLearningRecognition(a, b)` reports portability/recognition evidence rather than assuming equivalence.

- [ ] Write failing tests for degree, certificate, microcredential and badge paths.
- [ ] Test that a credential does not automatically imply unsupported skills.
- [ ] Implement credential/skills mapping.
- [ ] Verify tests.
- [ ] Commit as `feat(oei): add credentials skills and lifelong learning`.

---

## Task 10: Build Opportunity and Employability Intelligence

**Files:**
- Create: `open-education-intelligence/opportunity-intelligence.js`
- Create: `tests/open-education-intelligence/opportunity-intelligence.test.js`

**Interfaces:**
- `registerOpportunity(opportunity)` records eligibility, source, deadline, skills and authority.
- `matchOpportunities(learnerContext, opportunities)` returns explainable matches.
- `buildSkillToOpportunityPath(skill, learnerContext)` connects learning to internships, apprenticeships, employment, research, mentorship or enterprise opportunities.

- [ ] Write failing tests for scholarship, internship, apprenticeship, research and employment matching.
- [ ] Test source verification and eligibility uncertainty.
- [ ] Implement explainable opportunity matching.
- [ ] Verify tests.
- [ ] Commit as `feat(oei): add opportunity intelligence`.

---

## Task 11: Build Services, Marketplace and Education-Economy Contracts

**Files:**
- Create: `open-education-intelligence/service-intelligence.js`
- Create: `tests/open-education-intelligence/service-intelligence.test.js`

**Interfaces:**
- `registerEducationService(service)` creates a verified service listing.
- `createServiceRequest(request)` creates a learner service need.
- `matchService(request, services)` produces explainable matches.
- `publishStudentOffering(offering, consent)` requires deliberate publication consent.

- [ ] Write failing tests for tutoring, printing, binding, learning resources, study spaces and student services.
- [ ] Test that private academic data cannot automatically become marketplace data.
- [ ] Implement service/matching contracts.
- [ ] Verify tests.
- [ ] Commit as `feat(oei): add education services and marketplace contracts`.

---

## Task 12: Add Events, Community, Governance and Student-Life Intelligence

**Files:**
- Create: `open-education-intelligence/community-intelligence.js`
- Create: `tests/open-education-intelligence/community-intelligence.test.js`

**Interfaces:**
- `registerEducationEvent(event)` supports classes, seminars, competitions, clubs, sports, excursions, governance and community events.
- `matchLearnerToCommunities(learnerContext, communities)` returns explainable matches.
- `governanceBoundary(action)` distinguishes information/consultation from consequential institutional action.

- [ ] Write failing tests for event discovery, club matching, sports/competition discovery and governance information.
- [ ] Test that ballots/official governance actions require the institution adapter's authority contract.
- [ ] Implement community/event intelligence.
- [ ] Verify tests.
- [ ] Commit as `feat(oei): add student life and community intelligence`.

---

## Task 13: Build Institutional Adapter Contract

**Files:**
- Create: `open-education-intelligence/institution-adapter.js`
- Create: `tests/open-education-intelligence/institution-adapter.test.js`

**Interfaces:**
- `createInstitutionAdapter(config)` creates a validated adapter.
- `registerInstitutionSource(adapter, source)` registers an authoritative source.
- `registerInstitutionRule(adapter, rule)` registers institution-specific eligibility/process rules.
- `resolveInstitutionWorkflow(adapter, request)` returns the verified workflow without embedding it in OEI core.
- `getInstitutionContext(adapter, learnerId)` returns only authorized institutional context.

- [ ] Write failing tests proving a generic learner can operate without an institution adapter.
- [ ] Write tests proving adapter rules can specialize generic domains.
- [ ] Test source freshness and authority metadata.
- [ ] Implement adapter contract.
- [ ] Verify tests.
- [ ] Commit as `feat(oei): establish institutional adapter architecture`.

---

## Task 14: Build the Open Student Environment Orchestrator

**Files:**
- Create: `open-education-intelligence/open-student-environment.js`
- Create: `tests/open-education-intelligence/open-student-environment.test.js`

**Interfaces:**
- `buildOpenStudentEnvironment(learnerContext, graph, adapters)` returns the learner's current environment.
- `recommendEnvironmentActions(environment)` produces explainable next actions across learning, support, research, skills and opportunities.
- `routeInstitutionRequest(environment, institutionId, request)` delegates institution-specific action to the correct adapter.

- [ ] Write failing tests for institution-free learners and learners connected to NOUN.
- [ ] Test cross-domain flows such as goal → learning → practice → skill → opportunity.
- [ ] Implement orchestration without duplicating domain logic.
- [ ] Verify focused tests.
- [ ] Commit as `feat(oei): add open student environment orchestration`.

---

## Task 15: Create the NOUN Adapter Using Existing V4 Scope

**Files:**
- Create: `open-education-intelligence/adapters/noun-adapter.js`
- Create: `tests/open-education-intelligence/adapters/noun-adapter.test.js`
- Modify: `noun-student-bot/lib/student-ecosystem.js` only where required to consume shared OEI contracts
- Modify: `noun-student-bot/docs/NOUN_STUDENT_ECOSYSTEM_SCOPE_V4.md` to mark OEI as the universal parent architecture

**Interfaces:**
- `createNounAdapter()` returns the NOUN institution adapter.
- Adapter domains include academic, services, research, forms, physical services, authorized representation, skills, work, commerce, finance-education, governance, sports/clubs/events, matriculation/graduation and support.
- Adapter sources carry NOUN authority, URL/source reference, freshness and verification metadata.

- [ ] Write failing tests for NOUN programme/course, form/request, project/PAS, study-centre service, learning media, mock assessment, scholarship/aid and student-life mappings.
- [ ] Test existing V4 representation and financial boundaries remain intact.
- [ ] Implement adapter mappings using universal OEI contracts.
- [ ] Verify adapter tests.
- [ ] Commit as `feat(oei): add noun institutional adapter`.

---

## Task 16: Integrate Existing NOUN Student Bot with OEI Contracts

**Files:**
- Modify: `noun-student-bot/lib/student-context.js`
- Modify: `noun-student-bot/lib/student-ecosystem.js`
- Modify: `noun-student-bot/lib/abba.js` where orchestration hooks are required
- Create: `noun-student-bot/tests/oei-integration.test.js`

**Interfaces:**
- NOUN responses consume the same learner context and education graph primitives as OEI.
- NOUN-specific workflows are routed through the NOUN adapter rather than hard-coded into universal OEI modules.

- [ ] Write failing integration tests for personalized NOUN academic, service and opportunity responses.
- [ ] Verify no regression of V4 safety/authority boundaries.
- [ ] Implement adapter-backed routing.
- [ ] Run the complete NOUN focused test suite.
- [ ] Commit as `feat(noun): integrate student bot with oei foundation`.

---

## Task 17: Persistence Contract and State Migration

**Files:**
- Create: `open-education-intelligence/supabase-oei.sql`
- Create: `tests/open-education-intelligence/persistence-contract.test.js`
- Modify: `noun-student-bot/supabase-student-ecosystem-v4.sql` only through reviewed compatibility migration

**Interfaces:**
- Persist learner profiles, institution relationships, graph nodes/edges, sources, resources, credentials, skills, opportunities, services, events and consent/evidence references.
- All stateful tables must be tenant/institution scoped where applicable and use RLS.

- [ ] Write failing schema-contract tests for required tables and RLS expectations.
- [ ] Implement minimal normalized schema.
- [ ] Validate compatibility with NOUN V4 tables.
- [ ] Review migration before production application.
- [ ] Commit as `feat(oei): add persistent education graph schema`.

---

## Task 18: End-to-End OEI Validation and Production Gate

**Files:**
- Create: `tests/open-education-intelligence/end-to-end.test.js`
- Create: `docs/open-education-intelligence/PRODUCTION_GATE.md`
- Modify: `README.md` to document OEI architecture and implementation status

**Interfaces:**
- End-to-end flow: learner goal → resource discovery → learning path → practice → evidence → skill → opportunity.
- Institutional flow: learner → OEI → NOUN adapter → verified NOUN workflow → response.
- Integrity flow: attempted unauthorized assessment/institutional action → blocked/escalated.

- [ ] Write failing end-to-end tests for universal and NOUN-specialized flows.
- [ ] Run all OEI tests and record failures.
- [ ] Fix only verified failures, preserving domain boundaries.
- [ ] Run complete available test suite.
- [ ] Verify production health and runtime configuration before claiming deployment readiness.
- [ ] Commit as `test(oei): validate universal education intelligence flows`.

## Coverage Check

This plan covers the design requirements for: learner intelligence; institution intelligence; learning; OER/knowledge; teaching; assessment/practice/integrity; research; learner support; accessibility/inclusion; credentials; skills/lifelong learning; careers/employability; opportunity discovery; education services; student marketplace; student life; governance; institutional operations; provenance/licensing; authority/consent; personalization; events; and NOUN specialization.

The implementation deliberately separates universal OEI contracts from NOUN-specific data and workflows so later institution adapters can be added without rewriting the education intelligence core.
