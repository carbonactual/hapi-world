const assert = require('assert');
const fs = require('fs');
const sql = fs.readFileSync(require('path').join(__dirname, '../../open-education-intelligence/supabase-oei.sql'), 'utf8');
for (const table of ['oei_learner_profiles','oei_institution_relationships','oei_graph_nodes','oei_graph_edges','oei_sources','oei_resources','oei_credentials','oei_opportunities','oei_services','oei_events','oei_consents']) assert.ok(sql.includes(`create table if not exists ${table}`), `missing ${table}`);
assert.ok((sql.match(/enable row level security/g) || []).length >= 11);
console.log('OEI persistence contract tests passed');
