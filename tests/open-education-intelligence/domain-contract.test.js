const assert = require('node:assert/strict');
const test = require('node:test');
const {
  OEI_DOMAINS,
  OEI_ENTITIES,
  OEI_RELATIONSHIPS,
  OEI_CAPABILITIES,
} = require('../../open-education-intelligence/domain-contract');

test('OEI exposes the universal education domains', () => {
  const required = [
    'learner', 'institution', 'educator', 'knowledge', 'curriculum',
    'learning', 'assessment', 'research', 'support', 'credential', 'skills',
    'opportunity', 'services', 'community', 'enterprise', 'finance-education',
    'governance', 'lifecycle', 'evidence', 'orchestration',
  ];
  assert.deepEqual(required.filter((domain) => !OEI_DOMAINS.includes(domain)), []);
});

test('OEI has a learner-first relationship vocabulary', () => {
  const names = OEI_RELATIONSHIPS.map(({ name }) => name);
  for (const relationship of ['belongs-to', 'studies', 'learns-from', 'supported-by', 'attempts', 'earns', 'develops', 'matches']) {
    assert.ok(names.includes(relationship), `missing relationship: ${relationship}`);
  }
});

test('OEI contract is institution-neutral and does not require NOUN', () => {
  assert.ok(OEI_ENTITIES.includes('Learner'));
  assert.ok(OEI_ENTITIES.includes('Institution'));
  assert.equal(OEI_DOMAINS.includes('noun'), false);
  assert.equal(OEI_ENTITIES.includes('NOUN'), false);
});

test('OEI capabilities are bounded to intelligence functions', () => {
  assert.deepEqual(OEI_CAPABILITIES, [
    'read', 'analyze', 'classify', 'organize', 'monitor', 'recommend',
    'explain', 'match', 'notify', 'report', 'escalate',
  ]);
});
