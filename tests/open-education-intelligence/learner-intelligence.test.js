const assert = require('node:assert/strict');
const test = require('node:test');
const { buildLearnerProfile, addLearnerRelationship, deriveLearnerContext } = require('../../open-education-intelligence/learner-intelligence');

test('build learner profile without a school relationship', () => {
  const profile = buildLearnerProfile({ id: 'learner-1', goals: ['learn-data'] });
  assert.equal(profile.entityType, 'Learner');
  assert.equal(profile.id, 'learner-1');
  assert.deepEqual(profile.goals, ['learn-data']);
});

test('learner identity persists as institution relationships change', () => {
  const base = buildLearnerProfile({ id: 'learner-1' });
  const first = addLearnerRelationship(base, { type: 'institution', targetId: 'institution-1' });
  const second = addLearnerRelationship(first, { type: 'institution', targetId: 'institution-2' });
  assert.equal(second.id, 'learner-1');
  assert.deepEqual(second.relationships.map((r) => r.targetId), ['institution-1', 'institution-2']);
});

test('derive learner context only from explicit events', () => {
  const profile = buildLearnerProfile({ id: 'learner-1', goals: ['research'] });
  const context = deriveLearnerContext(profile, [
    { type: 'need', need: 'literature-search', occurredAt: '2026-01-01' },
    { type: 'learning-stage', stage: 'postgraduate', occurredAt: '2026-01-02' },
    { type: 'pathway', pathwayId: 'research-path', occurredAt: '2026-01-03' },
  ]);
  assert.equal(context.learningStage, 'postgraduate');
  assert.deepEqual(context.needs, ['literature-search']);
  assert.deepEqual(context.activePathways, ['research-path']);
  assert.deepEqual(context.opportunities, []);
});
