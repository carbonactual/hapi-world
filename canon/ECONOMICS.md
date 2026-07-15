# Canon Extension (Draft) — Economics

> **Status: Draft, pending ratification.** Extends CANON.md Part VII (Economy). Formalizes the "inverted economics" philosophy referenced throughout prior sessions into a concrete, checkable model.

## Inverted Economics — the core principle
Standard economics: assets generate value, liabilities are a cost to be minimized. Carbon Actual inverts this: **liabilities generate pulse (activity/signal), and assets without pulse are themselves liabilities.** An idle asset — unused code, dormant infrastructure, an unreferenced repo, a stalled Manus task — costs the ecosystem more than an actively-managed liability that's generating learning, signal, or forward motion.

This is not just philosophy — it's directly checkable against real findings from this session's audits:
- `docs/REPO_HYGIENE_AUDIT.md` found repos with no `.gitignore`, stray files, zip bloat — these are idle liabilities generating zero pulse
- `docs/AGENT_INVENTORY.md` found 3 Manus tasks in `error` state and duplicate tasks — idle, no-pulse liabilities
- The `crew-ai` Vercel project (broken FastAPI entrypoint, since deleted) was a pure liability generating no pulse — correctly removed

## No Waste (Common Denominator #9)
Nothing useful should remain idle. This principle now has a concrete enforcement mechanism: anything logged in a Registry (`canon/REGISTRIES.md`) that shows zero Pulse Ledger activity (`canon/LEDGERS.md`) over a defined window is flagged for the same treatment as `crew-ai` — review, fix, or remove.

## Value Chain (concrete, not abstract)
Mint → Ledger record → Value creation (via one of the `value_type`s in CANON.md Part XV) → Registry discoverability → Pulse (ongoing activity) → either sustained value (kept) or liability (flagged per No Waste).

## Asset lifecycle & liability conversion
- **Asset → Liability**: an asset stops generating pulse (goes idle). Per Inverted Economics, this is now a liability, not neutral.
- **Liability → Asset**: a liability (debt, unresolved issue, technical debt, an open PR) generates pulse by being actively worked — e.g., every PR merged in this session converted a liability (undocumented/unsecured state) into logged value.
- **Opportunity recovery**: idle assets identified via the No Waste check are not simply deleted by default — first assessed for whether they can be reactivated (fixed, merged, connected to a real use), matching the actual pattern used this session (extract-then-decide, not delete-first, for `omnii` and `hapi-world-nexus`).

## Relationship to HAPI Bank
HAPI Bank (`canon/PRODUCTS.md`) is the redemption layer for this value model — Pulse Ledger activity is what ultimately becomes redeemable value, not raw asset ownership. An unused asset sitting in a registry has no HAPI Bank value until it demonstrates pulse.

## What this deliberately does not include
No claims about token pricing, exchange rates, or financial instrument mechanics — those require real financial/legal design work (relevant given the ACTUAL bank role at a real microfinance institution) and shouldn't be speculated into a Canon document casually.
