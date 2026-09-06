const { buildLearningPath, recommendNextLearningAction } = require('./learning-intelligence');
const { classifySupportNeed } = require('./support-intelligence');

function buildOpenStudentEnvironment(learnerContext = {}, graph = {}, adapters = []) {
  return { learner: learnerContext, graph, adapters, institutionIds: adapters.map((adapter) => adapter.id), pathways: [], support: [], opportunities: [] };
}

function recommendEnvironmentActions(environment = {}) {
  const actions = [];
  const context = environment.learner || {};
  if (context.goal) actions.push(...recommendNextLearningAction({ ...context, nextResource: context.nextResource, opportunity: context.opportunity }));
  if (context.supportNeed) actions.push({ type: 'support', need: classifySupportNeed(context.supportNeed) });
  if (context.opportunity) actions.push({ type: 'opportunity', target: context.opportunity.id, reason: 'learner-context opportunity' });
  return actions;
}

function routeInstitutionRequest(environment, institutionId, request = {}) {
  const adapter = (environment.adapters || []).find((item) => item.id === institutionId);
  if (!adapter) return { routed: false, reason: 'institution adapter not connected' };
  const workflow = adapter.workflows?.[request.type] || null;
  return workflow ? { routed: true, adapterId: institutionId, workflow } : { routed: false, reason: 'workflow not defined by institution adapter' };
}

module.exports = { buildOpenStudentEnvironment, recommendEnvironmentActions, routeInstitutionRequest };
