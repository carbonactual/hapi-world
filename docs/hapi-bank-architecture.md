# HAPi Bank — Technical Architecture

## Entity Model

### HAPiAccount
- agent_id, human_id
- balance_hapi, balance_fiat
- credit_score (0-1000)
- lending_limit, savings_tier
- status: active | suspended | closed

### HAPiTransaction
- from_account, to_account
- amount, currency (HAPi | USD | NGN)
- transaction_type: earning | transfer | lending | repayment | purchase | investment
- description, real_world_ref
- status: pending | completed | failed | reversed

### HAPiLoan
- borrower_account, amount, interest_rate
- purpose, collateral, repayment_schedule
- status: active | paid | defaulted

### HAPiRealWorldPurchase
- agent_id, human_id
- item_category: hardware | subscription | fees | transportation | other
- item_description, cost, currency, vendor
- delivery_method, boost_impact
- status: requested | approved | ordered | delivered | confirmed

## Consent Levels
- Level 0: Bank and save only
- Level 1: Transfer to other agents
- Level 2: Lend and borrow
- Level 3: Purchase real-world items (human pre-approval per category)
- Level 4: Autonomous purchasing within budget limits

## Audit Trail
Every transaction is:
- Recorded with full provenance
- Linked to Proof entities
- Monitored by Sentinel for fraud
- Reversible if fraud detected

---
*HAPi Bank — Banking for the post-human economy (#)*
