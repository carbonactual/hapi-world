# OEI Production Gate

OEI is considered production-ready only when these gates are evidenced:

1. **Universal contract** — domain, entity, relationship and capability contracts remain institution-neutral.
2. **Learner continuity** — learner identity remains stable while institution relationships change.
3. **Evidence and provenance** — externally asserted relationships/resources carry evidence or verification metadata.
4. **Open licensing** — open access is never inferred to mean open reuse, adaptation or redistribution rights.
5. **Learning integrity** — practice/mock support is allowed; graded-work completion, impersonation and exam proxy are blocked.
6. **Research integrity** — discovery and methodology support are allowed; fabricated evidence/citations and unauthorized submission are blocked.
7. **Support and inclusion** — accessibility requirements are explicit and unsupported cases escalate to human/institutional support.
8. **Opportunity integrity** — matching is explainable and source/eligibility uncertainty is visible.
9. **Marketplace consent** — learner offerings require deliberate publication consent; private academic context is not automatically public.
10. **Institution authority** — institution-specific workflows are resolved through adapters and verified sources.
11. **Persistence** — OEI state migration is reviewed and applied to the target Supabase environment before stateful features are claimed live.
12. **NOUN integration** — NOUN V4 boundaries remain intact after adapter integration.
13. **Runtime** — available tests pass in the actual CI/runtime environment; no passing claim is made from unexecuted source files.

## Current status

- Universal OEI architecture: implemented.
- Core domain, learner, graph, knowledge, learning, assessment, research, support, credential, opportunity, service, community modules: implemented.
- Learning-path traversal: graph-driven implementation committed; runtime verification remains pending.
- Knowledge licensing: access, reuse and adaptation are now explicitly separated; unknown rights are not assumed.
- NOUN adapter boundary: implemented.
- NOUN student-bot integration boundary: implemented.
- Persistence schema: drafted with tenant-scoped RLS policies; **production migration/application remains a deployment step**.
- Persistence RLS contract test: added.
- GitHub Actions test workflow: added; **a successful CI run has not yet been observed**.
- Test files: added; **runtime execution must be performed in CI or a repository-capable test environment before declaring the suite passing**.

OEI therefore remains **implementation-complete in architecture/code, but not yet production-certified**.
