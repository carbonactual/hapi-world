# hapi-world — Architecture & Document Hierarchy

## Document hierarchy (resolved 2026-07-14)
1. **`CANON.md`** — the single supreme source of truth. Ratified v1.0, July 4 2026. 45 sections across 20 parts: Constitution, Ontology, Lifecycle, Identity, Rights/Responsibilities, Governance, Economy, Knowledge, AI, Infrastructure, Products, Product Specifications, Security, Interoperability, Data Models, APIs/Events, Lifecycles, Evolution/Versioning, Glossary, Product Registry. If anything anywhere in this ecosystem conflicts with CANON.md, CANON.md wins.
2. **`CARBON_ACTUAL_CONSTITUTION.md`** — superseded. A compressed article-list summary of CANON.md Part I. Marked deprecated in-file. Kept for history.
3. **`CONSTITUTION.md`** — superseded. An earlier prose draft with a conflicting "13 Canonical Layers" model. Marked deprecated in-file. Useful as plain-language companion reading, not as a rules source.

## Existing folder structure — mapped to Canon parts
| Folder | Corresponds to Canon part(s) |
|---|---|
| `architecture/` | Part XI — Products, Part XX — Product Registry |
| `constitution/` | Part I — Constitution (this folder should hold constitutional sub-documents, amendments, and interpretations — not duplicate top-level constitutions) |
| `economy/` | Part VII — Economy |
| `ecosystem/` | Part XI–XII — Products & Product Specifications |
| `environment/` | Referenced in Article XII of the (deprecated) short-form constitution; Canon doesn't have a dedicated Environment part — candidate for a Part addition or fold into Infrastructure |
| `geography/` | Part IX (Civil Society/Geography per short-form Article VII) — candidate for a Part addition, currently only referenced, not detailed, in CANON.md |
| `government/` | Part VI — Governance |
| `infrastructure/` | Part X — Infrastructure |
| `interoperability/` | Part XIV — Interoperability |
| `knowledge/` | Part VIII — Knowledge (this is also where the abba-mas and hapi-world-nexus extraction docs now live) |
| `lifecycle/` | Part III — Lifecycle, Part XVII — Lifecycles |
| `ontology/` | Part II — Ontology |
| `society/` | Part IX (per short-form Article IX — Civil Society) — not yet detailed in CANON.md as its own part |
| `timeline/` | Part XVII / short-form Article XIV — Civilization Timeline — not yet detailed in CANON.md as its own part |

## Gaps identified
Three folders (`environment/`, `geography/`, `society/`, `timeline/`) correspond to content referenced in the deprecated short-form constitution (Articles VI, VII, IX, XIV) but are **not yet fully specified** in CANON.md itself. If these folders contain real content, that content should be promoted into CANON.md as new Parts; if they're empty placeholders, that's a real gap between the folder structure and the ratified Canon worth closing.
