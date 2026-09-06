function classifySupportNeed(input = {}) {
  const text = `${input.type || ''} ${input.description || ''}`.toLowerCase();
  if (input.accessibility || /accessible|screen reader|caption|transcript|disability/.test(text)) return { category: 'accessibility', priority: input.priority || 'normal' };
  if (/career|job|internship|skill/.test(text)) return { category: 'career', priority: input.priority || 'normal' };
  if (/register|form|transcript|id card|administrative/.test(text)) return { category: 'administrative', priority: input.priority || 'normal' };
  if (/login|internet|device|technical|password/.test(text)) return { category: 'technical', priority: input.priority || 'normal' };
  if (/wellbeing|distress|unsafe|urgent/.test(text)) return { category: 'wellbeing', priority: 'high', escalate: true };
  return { category: 'academic', priority: input.priority || 'normal' };
}

function buildSupportPlan(need, availableServices = []) {
  const matches = availableServices.filter((service) => service.category === need.category || service.category === 'general');
  return { need, routes: matches.map((service) => ({ service, reason: service.category === need.category ? 'category match' : 'general support' })), escalate: Boolean(need.escalate || matches.length === 0) };
}

function checkAccessibility(resource = {}, learnerContext = {}) {
  const requested = learnerContext.accessibilityNeeds || [];
  const provided = resource.accessibility || {};
  return { compatible: requested.every((need) => Boolean(provided[need])), gaps: requested.filter((need) => !provided[need]) };
}

module.exports = { classifySupportNeed, buildSupportPlan, checkAccessibility };
