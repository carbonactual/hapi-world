const assert = require('node:assert/strict');
const test = require('node:test');
const {
  createInstitutionAdapter,
  registerInstitutionSource,
  registerInstitutionRule,
  resolveInstitutionWorkflow,
  getInstitutionContext,
} = require('../../open-education-intelligence/institution-adapter');

test('requires stable institution identity and name', () => {
  assert.throws(() => createInstitutionAdapter({}), /institution id and name are required/);
});

test('keeps institutional workflows, sources, and rules explicit', () => {
  let adapter = createInstitutionAdapter({
    id: 'example',
    name: 'Example Institution',
    workflows: { transcript: { domain: 'services', action: 'request-transcript' } },
  });
  adapter = registerInstitutionSource(adapter, { id: 'main', url: 'https://example.edu', authority: 'Example' });
  adapter = registerInstitutionRule(adapter, { id: 'integrity', domain: 'assessment', rule: 'no impersonation' });

  assert.equal(resolveInstitutionWorkflow(adapter, { type: 'transcript' }).found, true);
  assert.equal(resolveInstitutionWorkflow(adapter, { type: 'unknown' }).found, false);
  assert.equal(adapter.sources[0].verification, 'unverified');
  assert.equal(adapter.rules[0].domain, 'assessment');
});

test('does not expose institutional context without authorization', () => {
  const adapter = createInstitutionAdapter({ id: 'example', name: 'Example Institution' });
  const denied = getInstitutionContext(adapter, 'learner-1', { granted: false });
  assert.deepEqual(denied, { authorized: false, reason: 'authorization-required' });

  const allowed = getInstitutionContext(adapter, 'learner-1', { granted: true });
  assert.deepEqual(allowed, {
    authorized: true,
    institutionId: 'example',
    learnerId: 'learner-1',
    workflows: {},
    sources: [],
    rules: [],
  });
});
