const assert = require('assert');
const { createNounAdapter } = require('../../../open-education-intelligence/adapters/noun-adapter');
const adapter = createNounAdapter();
assert.equal(adapter.id, 'noun');
assert.ok(adapter.sources.some((source) => source.authority === 'NOUN'));
assert.ok(adapter.rules.some((rule) => rule.domain === 'assessment'));
assert.equal(adapter.workflows.form_request.domain, 'services');
console.log('NOUN adapter tests passed');
