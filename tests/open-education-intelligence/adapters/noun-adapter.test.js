const assert = require('node:assert/strict');
const test = require('node:test');
const { createNounAdapter } = require('../../../open-education-intelligence/adapters/noun-adapter');
const { resolveInstitutionWorkflow, getInstitutionContext } = require('../../../open-education-intelligence/institution-adapter');

const adapter = createNounAdapter();

test('creates a NOUN-specific institutional adapter without redefining OEI', () => {
  assert.equal(adapter.id, 'noun');
  assert.equal(adapter.name, 'National Open University of Nigeria');
  assert.ok(adapter.sources.some((source) => source.authority === 'NOUN'));
  assert.ok(adapter.rules.some((rule) => rule.domain === 'assessment'));
  assert.ok(adapter.rules.some((rule) => rule.domain === 'representation'));
  assert.ok(adapter.rules.some((rule) => rule.domain === 'finance-education'));
});

test('resolves only explicitly registered institutional workflows', () => {
  assert.deepEqual(resolveInstitutionWorkflow(adapter, { type: 'form_request' }), {
    found: true,
    workflow: { domain: 'services', action: 'request-form' },
  });
  assert.equal(resolveInstitutionWorkflow(adapter, { type: 'unknown_request' }).found, false);
});

test('requires learner authorization before exposing institutional context', () => {
  assert.equal(getInstitutionContext(adapter, 'learner-1', { granted: false }).authorized, false);
  const context = getInstitutionContext(adapter, 'learner-1', { granted: true });
  assert.equal(context.authorized, true);
  assert.equal(context.institutionId, 'noun');
  assert.equal(context.learnerId, 'learner-1');
});
