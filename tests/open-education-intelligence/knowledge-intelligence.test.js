const assert = require('assert');
const { registerResource, verifyResource, classifyReuseRights, findLearningResources } = require('../../open-education-intelligence/knowledge-intelligence');
const open = registerResource({ title: 'Open Algebra', licence: 'CC BY', subject: 'math', provenance: { status: 'official' }, accessibility: { text: true } });
assert.equal(classifyReuseRights('CC BY').adaptation, true);
assert.equal(classifyReuseRights('unknown').adaptation, null);
assert.equal(verifyResource(open, { source: 'catalogue', status: 'verified' }).verification.status, 'verified');
assert.ok(findLearningResources({ subject: 'math' }, { resources: [open] })[0].score > 0);
console.log('knowledge intelligence tests passed');
