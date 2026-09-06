const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');

const sql = fs.readFileSync(path.join(__dirname, '../../open-education-intelligence/supabase-oei.sql'), 'utf8');
const tables = [
  'oei_learner_profiles',
  'oei_institution_relationships',
  'oei_graph_nodes',
  'oei_graph_edges',
  'oei_sources',
  'oei_resources',
  'oei_credentials',
  'oei_opportunities',
  'oei_services',
  'oei_events',
  'oei_consents',
];

test('enables RLS for every OEI persistence table', () => {
  for (const table of tables) {
    assert.match(sql, new RegExp(`alter table ${table} enable row level security;`));
  }
});

test('defines tenant-scoped policies for every OEI persistence table', () => {
  for (const table of tables) {
    assert.match(sql, new RegExp(`${table}_tenant_policy`));
  }
  assert.match(sql, /tenant_id = auth\.jwt\(\) ->> 'tenant_id'/);
});
