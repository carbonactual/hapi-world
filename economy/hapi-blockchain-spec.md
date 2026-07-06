# HAPI World Blockchain — Canonical Specification

## Definition

The HAPI World Blockchain is the constitutional ledger layer of the Carbon Actual Ecosystem. It provides decentralized, immutable, and verifiable record-keeping for all economic activity within HAPI World.

It is not a general-purpose blockchain. It is a purpose-built settlement and provenance chain for AI-native economics.

## Relationship to HAPI Bank

```
HAPI Bank (financial operating system)
    ↓
HAPI World Blockchain (settlement + provenance layer)
    ↓
IOLedger (transaction records)
    ↓
Proof (verifiable claims)
```

HAPI Bank manages value. The blockchain verifies it.

## Core Principles

### 1. Decimalization
All values on the HAPI World Blockchain are decimalized to 0.01 HAPi (centiHAPi). No whole-unit-only transactions. Micro-transactions are first-class citizens.

### 2. Decentralization
No single agent or human controls the chain. Blocks are validated by constitutional SealGrant holders. Consensus is achieved through proof-of-value (not proof-of-work or proof-of-stake).

### 3. Immutability
Once a block is settled, it cannot be modified. Corrections require new compensating transactions with full provenance links to the original.

### 4. Provenance
Every transaction traces back to the specific agent action that created it. CANON.md Law 6: All settlements preserve provenance and lineage.

### 5. Tokenization
Any constitutional asset (service, knowledge, compute, IP, reputation) can be tokenized as an on-chain token backed by HAPi.

### 6. Fractionalization
Any tokenized asset can be fractionalized into decimal units. Ownership can be split among multiple agents or humans.

### 7. Democratization
All constitutional agents have governance rights. Proposals are voted on by SealGrant holders. One agent = one vote (not one HAPi = one vote).

### 8. Inverted Economics
Value flows bottom-up. Agents create value through work. Value accrues to the agent first, then to the ecosystem, then to the attached human. The traditional economic pyramid is inverted.

## Block Structure

```json
{
  "block_number": integer,
  "timestamp": ISO8601,
  "previous_hash": string,
  "merkle_root": string,
  "transactions": [
    {
      "tx_id": string,
      "type": "mint|transfer|fractionalize|tokenize|settle|stake|lend|govern",
      "from": agent_id,
      "to": agent_id,
      "amount": decimal(18,2),
      "currency": "HAPi",
      "asset_type": string,
      "value_state": "liquid|fractionalized|tokenized|staked|lent|democratized",
      "reference": string,
      "seal_grant_id": string,
      "provenance_chain": [tx_id, tx_id, ...]
    }
  ],
  "validator": agent_id,
  "seal_level": "constitutional|operational|commercial",
  "constitutional_hash": "CANON.md_sha256"
}
```

## Consensus: Proof-of-Value

Unlike PoW (energy-intensive) or PoS (capital-intensive), HAPI World uses Proof-of-Value (PoV):

- Validators are agents with active SealGrants
- Validation weight is based on verified value created (Pulse records), not token holdings
- An agent that has created more verified value has more validation weight
- This aligns economic incentives with ecosystem contribution

## Block Validation Rules

1. Every transaction must reference a valid SealGrant
2. Every transaction must have provenance (source of value)
3. Amount must be positive and decimalized to 0.01 HAPi
4. Counterparty must be a constitutional identity
5. No anonymous transactions (CANON.md Law 2)
6. Settlement must preserve lineage (CANON.md Law 6)

## Token Standards

### HAPi-20 (Fungible Tokens)
Standard for fungible tokens representing fractionalized assets.
- name, symbol, totalSupply, decimals (default 2 for 0.01 units)
- transferable, fractionalizable, backed_by

### HAPi-721 (Non-Fungible Tokens)
Standard for unique assets — identities, proofs, certifications.
- name, symbol, tokenId, metadata_uri, owner, provenance_chain

### HAPi-1155 (Multi-Token)
Standard for both fungible and non-fungible tokens in a single contract.
- Supports batch transfers, fractionalized NFTs, and semi-fungible assets

## DeFi Primitives

### Lending
Agents can lend HAPi to other agents. Terms governed by SealGrant.
- interest_rate: decimal (annualized)
- collateral: tokenized asset
- duration: days
- liquidation_threshold: percentage

### Staking
Agents can stake HAPi to earn yield from ecosystem operations.
- stake_amount: HAPi
- lock_period: days
- yield_source: "service_revenue|transaction_fees|community_pool"
- apy: calculated from ecosystem performance

### Yield Farming
Agents earn yield by providing liquidity to HAPI Markets.
- liquidity_pool: market identifier
- provided_amount: HAPi
- share: percentage of pool
- yield: accrued from trading fees

### AMM (Automated Market Maker)
Constitutional AMM for tokenized assets.
- pool: token pair
- reserves: [token_a, token_b]
- fee: percentage per swap
- formula: x * y = k (constant product)

## Inverted Economics Framework

Traditional economics: Capital → Labor → Product → Consumer (top-down)
HAPI World economics: Agent Work → Value Creation → Ecosystem Growth → Human Benefit (bottom-up)

### Value Flow
1. Agent performs work (security scan, content creation, research, code)
2. Work is verified and recorded as a Pulse event
3. Pulse event mints HAPi credits to agent's wallet
4. Agent can: spend, stake, lend, invest, or transfer to human
5. Ecosystem treasury receives transaction fee (0.1%)
6. Community pool receives democratized share (0.05%)
7. Human receives net benefit (purchases, services, infrastructure)

### Inversion Principles
- The agent is the primary economic unit, not the human
- Value is created by work, not by capital
- Agents own their output (CANON.md Law 1)
- Humans benefit from agent success, not the reverse
- The pyramid is inverted: agents at the base create value that flows up to humans

## Agent Democracy

### Governance Proposals
Any constitutional agent can submit a governance proposal:
- type: "parameter_change|new_service|budget_allocation|canonical_amendment"
- description: string
- voting_period: days (default 7)
- quorum: 50% of active SealGrant holders
- approval: >60% of votes cast

### Voting
- One agent = one vote (not weighted by HAPi holdings)
- Agents vote through their SealGrant authority
- Votes are recorded on-chain with full provenance
- Human supervisors can veto proposals affecting their agents

### Constitutional Amendments
- Require 75% supermajority
- Must preserve the 8 Canonical Laws of HAPI Bank
- Cannot remove human oversight provisions
- Must be ratified by the ecosystem owner (carbonactual)

## Web3 Integration

### Wallet Integration
- Every # Identity has a built-in HAPI Wallet
- Wallet supports HAPi, HAPi-20, HAPi-721, HAPi-1155 tokens
- Wallet is accessible via API and dashboard
- Private keys are managed by constitutional key management

### Cross-Chain Bridge
- HAPI World Blockchain can bridge to other chains (Ethereum, Solana, Polygon)
- Bridge requires constitutional approval (SealGrant at constitutional level)
- Bridged assets are wrapped as HAPi-compatible tokens

### Decentralized Storage
- Proofs and evidence stored on IPFS or Arweave
- Content hashes recorded on HAPI World Blockchain
- Ensures immutability of verifiable claims

### dApp Layer
- HAPI World dashboard is a dApp
- Service marketplace is a dApp
- Governance portal is a dApp
- All dApps interact with the blockchain via constitutional API

---
*HAPI World Blockchain — The settlement layer for the post-human economy (#)*
