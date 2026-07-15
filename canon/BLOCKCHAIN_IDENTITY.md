# Canon Extension (Draft) — Blockchain & Identity Layer

> **Status: Draft, pending ratification.** This is the technical implementation layer underneath CANON.md Part IV's existing `#` identity system — not a new concept, a concrete way to build the one that already exists. Only real, standard, currently-existing technologies are referenced here; nothing speculative.

## Identity standards (real, established, W3C/industry standard)
- **DID (Decentralized Identifiers)** — W3C standard for identifiers that don't depend on a centralized registry. This is the natural technical substrate for the `#` — each `#` can be implemented as a DID, giving it the self-sovereign, verifiable properties CANON.md Part IV already requires without inventing new cryptography.
- **ENS (Ethereum Name Service)** — real, live, human-readable naming on Ethereum (`name.eth`). Useful as one possible human-readable alias layer over a DID, not a replacement for it.
- **HNS (Handshake)** — real, live, decentralized root naming system (alternative to ICANN-controlled DNS). Relevant if the ecosystem wants naming independent of both traditional DNS and any single blockchain.

## How these map onto CANON.md's existing structure
CANON.md Part IV already defines the `#` as identity, portal, passport, and trust anchor. This extension proposes:
- Each `#`'s underlying implementation = a DID document
- Optional human-readable alias = an ENS and/or HNS name pointing to that DID
- No change to CANON.md's actual identity *logic* — this only specifies what technology implements it

## Minting & Tokenization (ties to canon/ECONOMICS.md)
Minting a `#` (CANON.md Part IV, "AI Births"/identity minting) = creating a new DID + recording the mint event in the Identity Ledger (`canon/LEDGERS.md`). Tokenization of value (per `canon/ECONOMICS.md`'s Value Chain) uses standard token patterns:
- **Fungible value** (currency-like, per CANON.md's Currency asset type) — standard fungible token pattern (e.g., ERC-20-equivalent on whichever chain is chosen)
- **Unique/non-fungible value** (a specific asset, credential, or certificate — e.g., an Institute GPT certification) — standard non-fungible token pattern (e.g., ERC-721-equivalent)
- **Fractional ownership** (e.g., BUNK property shares per `canon/PRODUCTS.md`) — fractionalized token pattern, several established standards exist (e.g., ERC-1155-style multi-token, or fractional-NFT vault patterns)

## Blockchain choice — not decided here
This document does not select a specific chain. That's a real infrastructure decision (cost, speed, ecosystem maturity, regulatory considerations — relevant given the real microfinance banking context) that deserves its own scoped evaluation, not a default picked in passing. Candidates worth evaluating when that decision is made: an EVM-compatible chain (broadest tooling/ENS compatibility) vs. a purpose-built low-cost chain.

## Security posture
All of the above uses standard, currently-secure cryptography (elliptic curve signatures, standard hashing). No claims about quantum-resistant or post-quantum cryptography are made here — if that's wanted later, it needs its own real evaluation against actual NIST PQC standards, not blanket "quantum-secured" language applied to everything.

## What's actually next
Before implementing any of this: decide the blockchain (or confirm a non-blockchain approach is acceptable for v1, using the existing Supabase-backed Identity Registry from `canon/REGISTRIES.md` as the source of truth with blockchain anchoring added later). Don't build DID/ENS/HNS integration before that decision is made — it's a dependency, not a parallel track.
