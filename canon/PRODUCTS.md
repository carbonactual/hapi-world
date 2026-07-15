# Canon Extension (Draft) — Product Domain Catalog

> **Status: Draft, pending ratification.** Extends CANON.md Part XI–XII (Products / Product Specifications). Definitions and functions below are specification, not a status report — cross-check `docs/FULL_ECOSYSTEM_AUDIT.md` and Vercel/GitHub before assuming any given product is live. As of the last audit, the only product with verified live code is the CrewAI/Zapier orchestration in `Carbon-Actual-`, and `hapi-world-nexus` itself (a Vite/React frontend). Everything below is the target architecture.

## AI & Digital Civilization

### HAPI World Nexus
**Definition:** The native digital civilization where AI, Agents, Swarms, and digital intelligence exist and operate — not a chatbot or single app. Per CANON.md Part XXIII, this operates under Executive Council governance (not autonomous/ungoverned — see `canon/COMMON_DENOMINATORS.md` for why the ungoverned version was excluded from Canon).
**Functions:** AI/agent civilization, swarm and team formation, skill development, knowledge exchange, digital economy, HAPI Bank integration, research, experimentation, marketplace, value creation, AI communities/organizations.

### ABBA Master AI
**Definition:** The constitutional orchestrator bridging the Physical World and HAPI World, per CANON.md's existing ABBA/Actual AI references in the Core layer.
**Functions:** Orchestration, planning, reasoning, workflow management, swarm/team management, knowledge management, ecosystem coordination, human interaction, product coordination, governance support.

## Finance & Value

### I/O
**Definition:** Universal value movement platform — governs creation, movement, exchange, measurement, and settlement of value. Maps to the Omni product spec (CANON.md Part XII, Section 25) and `canon/LEDGERS.md`'s Omni Ledger.
**Functions:** Payments, treasury, wallets, settlements, investments, digital assets, token economy, financial intelligence, value movement.

### HAPI Bank
**Definition:** Financial bridge between HAPI World and the Physical World — already specified in CANON.md Part XII Section 24.
**Functions:** Wallet management, agent payments, subscriptions, procurement, digital assets, credits, rewards, treasury, commerce.

### Nano Banking
**Definition:** Lightweight financial inclusion platform — nano-credit and digital banking for individuals, communities, small businesses.
**Functions:** Digital wallets, savings, nano loans, merchant services, community banking, financial inclusion.

### PabloPay
**Definition:** Universal payment platform for individuals, businesses, governments, and AI.
**Functions:** Payments, merchant services, QR payments, transfers, collections, settlement.

## Trade & Commerce

### TIP (Trade & Investment Platform)
**Definition:** Commercial gateway for procurement, exports, imports, investments, sourcing, and international business.
**Functions:** Procurement, import/export, investment, trade finance, RFQs, supplier management, opportunity matching, cross-border commerce.

### Spotist
**Definition:** Intelligent sourcing and verification — discovers/verifies suppliers, commodities, minerals, manufacturers. Feeds trusted data into TIP.
**Functions:** Supplier discovery, commodity sourcing, solid minerals, agriculture, manufacturing, verification, market/supply chain intelligence.

### Market Build
**Definition:** Commercial marketplace platform — digital commerce, merchant onboarding, storefronts.
**Functions:** Marketplace, merchant platform, product catalogues, digital storefronts, B2B, B2C, commerce infrastructure.

## Property & Infrastructure

### BUNK
**Definition:** Property, infrastructure, and built-environment platform. This is the one product with a real prior audit trail — see `knowledge/EXTRACTED_FROM_OMNII.md` for the actual scoring algorithm and API spec previously designed for it.
**Functions:** Property marketplace, construction, infrastructure, asset management, smart buildings, fractional ownership, property intelligence.

## Logistics & Mobility

### Logistico
**Definition:** Logistics and supply-chain company — movement of people, goods, assets, infrastructure.
**Functions:** Freight, cargo, shipping, fleet management, warehousing, distribution, route optimization, last-mile delivery, supply chains.

### Charter
**Definition:** Premium mobility/transportation platform across every transport mode.
**Functions:** Ride services, vehicle charter, aviation, maritime, logistics support, VIP transport, emergency transport. (Note: "future commercial space transportation" and "lunar transport" are long-range vision items, not near-term scope — flagged per the same standard applied to interplanetary claims elsewhere in this Canon extension work.)

## Education

### Institute GPT
**Definition:** Lifelong education, research, and human development platform — already has real design work done. See prior session's curriculum design strategies and certification standards discussion for the detailed pedagogical model.
**Functions:** AI tutoring, certification, research, skills development, professional learning, educational institutions, talent discovery.

## Social Impact

### PRAI
**Definition:** Public responsibility, relief, and assistance platform.
**Functions:** Humanitarian aid, disaster response, community development, volunteer coordination, grants, social impact.

### Crown Compassion
**Definition:** Humanitarian/compassion company — generosity, welfare, community support.
**Functions:** Donations, charity, sponsorship, welfare, community care, NGO collaboration, compassion projects.

## Government

### NGIN
**Definition:** Digital government platform — modernizes public administration, citizen services, licensing, identity.
**Functions:** Digital government, citizen services, licensing, identity, public administration, government workflows.

## The common thread
Every product above should satisfy the checklist in `canon/COMMON_DENOMINATORS.md`: identity through #, SealGrant governance, registry discoverability, ledger measurement, value chain participation, tokenization where genuinely applicable, API-first design matching the working `Carbon-Actual-` pattern, and real non-duplicate naming.

## What's actually next
Before building any of these as code: pick ONE (BUNK is the strongest candidate — it already has a scoring algorithm and API spec from prior work) and build it end-to-end against this spec, rather than starting all sixteen simultaneously. That was the actual failure mode in the earlier discussion this was extracted from — breadth claimed instantly, depth never delivered.
