const assert = require('node:assert/strict');
const test = require('node:test');
const { createEducationNode, createEducationRelationship, queryEducationGraph, traceLearningPath } = require('../../open-education-intelligence/education-graph');

test('creates typed education nodes and evidence-aware relationships', () => {
  const learner = createEducationNode('Learner', { id: 'l1' });
  const course = createEducationNode('Course', { id: 'c1' });
  const edge = createEducationRelationship(learner, 'studies', course, { source: 'record-1' });
  assert.equal(edge.relationship, 'studies');
  assert.equal(edge.evidence.source, 'record-1');
});

test('rejects relationship without evidence', () => {
  const learner = createEducationNode('Learner', { id: 'l1' });
  const course = createEducationNode('Course', { id: 'c1' });
  assert.throws(() => createEducationRelationship(learner, 'studies', course), /evidence is required/);
});

test('queries graph deterministically', () => {
  const learner = createEducationNode('Learner', { id: 'l1' });
  const course = createEducationNode('Course', { id: 'c1', subject: 'data' });
  const graph = { nodes: [learner, course], relationships: [] };
  assert.deepEqual(queryEducationGraph(graph, { type: 'Course' }).nodes.map((n) => n.id), ['c1']);
});

test('traces a learner learning path through explicit edges', () => {
  const learner = createEducationNode('Learner', { id: 'l1' });
  const course = createEducationNode('Course', { id: 'c1' });
  const outcome = createEducationNode('LearningOutcome', { id: 'o1' });
  const skill = createEducationNode('Skill', { id: 's1', goal: 'data' });
  const graph = {
    nodes: [learner, course, outcome, skill],
    relationships: [
      createEducationRelationship(learner, 'studies', course, { source: 'r1' }),
      createEducationRelationship(course, 'teaches', outcome, { source: 'r2' }),
      createEducationRelationship(learner, 'develops', skill, { source: 'r3' }),
    ],
  };
  assert.deepEqual(traceLearningPath(graph, 'l1', 'data').map((n) => n.id), ['l1', 'c1', 'o1', 's1']);
});

test('stops the traversal when an intermediate node satisfies the goal', () => {
  const learner = createEducationNode('Learner', { id: 'l1' });
  const course = createEducationNode('Course', { id: 'c1', goal: 'data' });
  const outcome = createEducationNode('LearningOutcome', { id: 'o1' });
  const graph = {
    nodes: [learner, course, outcome],
    relationships: [
      createEducationRelationship(learner, 'studies', course, { source: 'r1' }),
      createEducationRelationship(course, 'teaches', outcome, { source: 'r2' }),
    ],
  };
  assert.deepEqual(traceLearningPath(graph, 'l1', 'data').map((n) => n.id), ['l1', 'c1']);
});
