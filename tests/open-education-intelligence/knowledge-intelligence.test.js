const assert = require('node:assert/strict');
const test = require('node:test');
const { registerResource, verifyResource, classifyReuseRights, findLearningResources } = require('../../open-education-intelligence/knowledge-intelligence');

test('classifies open licences and preserves unknown rights as unknown', () => {
  assert.equal(classifyReuseRights('CC BY').adaptation, true);
  assert.equal(classifyReuseRights('unknown').adaptation, null);
  assert.equal(classifyReuseRights('unknown').reuse, null);
});

test('distinguishes public access from reuse rights', () => {
  assert.equal(classifyReuseRights('all-rights-reserved').access, true);
  assert.equal(classifyReuseRights('all-rights-reserved').reuse, false);
});

test('verifies a resource from explicit evidence', () => {
  const open = registerResource({ title: 'Open Algebra', licence: 'CC BY', subject: 'math', provenance: { status: 'official' }, accessibility: { text: true } });
  assert.equal(verifyResource(open, { source: 'catalogue', status: 'verified' }).verification.status, 'verified');
});

test('surfaces accessible resources without assuming reuse permission', () => {
  const reserved = registerResource({ title: 'Public Algebra', licence: 'all-rights-reserved', subject: 'math' });
  assert.ok(findLearningResources({ subject: 'math' }, { resources: [reserved] }).length > 0);
  assert.equal(findLearningResources({ subject: 'math' }, { resources: [reserved], requireReuse: true }).length, 0);
});

test('requires explicit reuse rights for adaptation workflows', () => {
  const open = registerResource({ title: 'Open Algebra', licence: 'CC BY', subject: 'math' });
  const noDerivatives = registerResource({ title: 'No Derivatives Algebra', licence: 'CC BY-ND', subject: 'math' });
  assert.equal(findLearningResources({ subject: 'math' }, { resources: [open], requireAdaptation: true }).length, 1);
  assert.equal(findLearningResources({ subject: 'math' }, { resources: [noDerivatives], requireAdaptation: true }).length, 0);
});
