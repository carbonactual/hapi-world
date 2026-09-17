# Repo Hygiene Audit — all 24 carbonactual repos
Audited 2026-07-14 against docs/ECOSYSTEM_STANDARDS.md.

## Needs fixing (real gaps)
| Repo | Issue |
|---|---|
| `abba-mas` | No `.gitignore` at all. 3 zip files + 1 CSV committed directly to root (`Kimi_Agent_...zip`, `abba-mas-health.zip`, `base44-to-supabase-sdk-main.zip`, `export-carbonactual-*.csv`). Has a `swirms/` dir (naming typo, should likely be `swarms/`). |
| `Grok-Api` | No `.gitignore`. Python repo with `requirements.txt` — real risk of accidentally committing a venv or `.env`. |
| `omni` | No `.gitignore`, no `README.md`. |
| `omnii` | No `.gitignore`. 5 docs loose at root instead of `docs/` (`API_GATEWAY.md`, `CLEANUP_CHECKLIST.md`, `ECOSYSTEM_ARCHITECTURE.md`, `OSS_INTEGRATION_GUIDE.md`, `SWIRM_SELECTION.md`). |
| `Shadow` | No `.gitignore`. `README.md` is 16 bytes (effectively empty). |
| `omni` vs `omnii` | Two separate, near-identically-named repos — the exact "scattered naming" problem the standards doc targets. Needs a decision: rename one, merge them, or document why both exist. |
| `hapi-world` | Three separate constitution-type docs at root (`CANON.md`, `CARBON_ACTUAL_CONSTITUTION.md`, `CONSTITUTION.md`) — possible redundancy, worth a look. |
| `abba` | Minor: stray 2-byte file literally named "abba api" at root. |

## Clean / no action needed
`ABDUHABU` (minimal), `direct-bank-app`, `Carbon-Actual-`, `hapi-world-nexus`, `open-ballot`, `eve-slack-agent`, `mcp-remote`, `universal-mcp`, `skills-from-google` — all have proper `.gitignore` + `README.md`, docs correctly placed.

## Forked / vendor repos (not yours to standardize, upstream conventions apply)
`baserow` (Baserow OSS), `Botpress`, `caveman`, `ECC`, `PraisonAI`, `openclaw`, `crewAI`, `thunderbolt` — forks of existing open-source projects with their own established structure. Left as-is.

## Recommended next actions, in priority order
1. Add `.gitignore` to: `abba-mas`, `Grok-Api`, `omni`, `omnii`, `Shadow`
2. Move `abba-mas`'s committed zip/CSV files out of git (shouldn't be tracked; move to release assets or external storage)
3. Decide `omni` vs `omnii`: rename, merge, or document the distinction
4. Move `omnii`'s 5 root-level docs into `docs/`
