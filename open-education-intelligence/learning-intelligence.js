function buildLearningPath(goal, learnerContext = {}, graph = {}) {
  const nodes = graph.nodes || [];
  const edges = graph.relationships || [];
  const learnerId = learnerContext.id;
  const related = edges.filter((e) => e.from === learnerId || e.to === learnerId);
  const courseIds = related.filter((e) => e.from === learnerId && e.relationship === 'studies').map((e) => e.to);
  const courses = nodes.filter((n) => courseIds.includes(n.id));
  const targets = nodes.filter((n) => ['Skill','LearningOutcome','Course'].includes(n.type) && (n.attributes?.goal === goal || n.attributes?.name === goal || n.attributes?.title === goal));
  const steps = [...courses, ...targets.filter((n) => !courses.some((c) => c.id === n.id))];
  return { goal, learnerId, steps, evidence: related.slice(0, 20) };
}

function recommendNextLearningAction(context = {}) {
  const actions = [];
  if ((context.missingPrerequisites || []).length) actions.push(...context.missingPrerequisites.map((item) => ({ type: 'study-prerequisite', target: item, reason: 'missing prerequisite' })));
  if (context.nextResource) actions.push({ type: 'learn-from-resource', target: context.nextResource.id, reason: 'next resource in pathway' });
  if (context.practiceNeeded) actions.push({ type: 'practice', target: context.practiceNeeded, reason: 'practice identified as next step' });
  if (context.opportunity) actions.push({ type: 'explore-opportunity', target: context.opportunity.id, reason: 'opportunity aligned with current pathway' });
  return actions;
}

function mapPrerequisites(pathway = {}) {
  return (pathway.steps || []).flatMap((step) => step.prerequisites || []).filter((value, index, all) => all.indexOf(value) === index);
}

module.exports = { buildLearningPath, recommendNextLearningAction, mapPrerequisites };
