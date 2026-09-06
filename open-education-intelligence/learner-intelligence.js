const { OEI_ENTITIES } = require('./domain-contract');

const clone = (value) => JSON.parse(JSON.stringify(value));

function buildLearnerProfile(input = {}) {
  if (!input.id) throw new TypeError('learner id is required');
  return {
    entityType: 'Learner',
    id: String(input.id),
    identity: clone(input.identity || {}),
    goals: clone(input.goals || []),
    preferences: clone(input.preferences || {}),
    learningHistory: clone(input.learningHistory || []),
    relationships: clone(input.relationships || []),
    achievements: clone(input.achievements || []),
  };
}

function addLearnerRelationship(profile, relationship) {
  if (!profile || profile.entityType !== 'Learner') throw new TypeError('valid learner profile required');
  if (!relationship || !relationship.type || !relationship.targetId) throw new TypeError('relationship type and targetId are required');
  const next = clone(profile);
  next.relationships.push({ ...clone(relationship) });
  return next;
}

function deriveLearnerContext(profile, events = []) {
  if (!profile || profile.entityType !== 'Learner') throw new TypeError('valid learner profile required');
  const context = {
    learnerId: profile.id,
    goals: clone(profile.goals),
    learningStage: null,
    needs: [],
    activePathways: [],
    opportunities: [],
  };
  const sorted = [...events].sort((a, b) => String(a.occurredAt || '').localeCompare(String(b.occurredAt || '')));
  for (const event of sorted) {
    if (event.type === 'learning-stage' && event.stage) context.learningStage = event.stage;
    if (event.type === 'need' && event.need) context.needs.push(event.need);
    if (event.type === 'pathway' && event.pathwayId) context.activePathways.push(event.pathwayId);
    if (event.type === 'opportunity' && event.opportunityId) context.opportunities.push(event.opportunityId);
  }
  return context;
}

module.exports = { buildLearnerProfile, addLearnerRelationship, deriveLearnerContext, OEI_ENTITIES };
