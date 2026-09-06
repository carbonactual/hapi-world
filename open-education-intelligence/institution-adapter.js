function createInstitutionAdapter(config = {}) {
  if (!config.id || !config.name) throw new TypeError('adapter id and name are required');
  return { id: String(config.id), name: config.name, sources: [], rules: [], workflows: config.workflows || {}, authority: config.authority || null };
}

function registerInstitutionSource(adapter, source = {}) {
  if (!source.id || !source.url) throw new TypeError('source id and url are required');
  return { ...adapter, sources: [...adapter.sources, { ...source, verification: source.verification || 'unverified' }] };
}

function registerInstitutionRule(adapter, rule = {}) {
  if (!rule.id || !rule.domain) throw new TypeError('rule id and domain are required');
  return { ...adapter, rules: [...adapter.rules, rule] };
}

function resolveInstitutionWorkflow(adapter, request = {}) {
  const workflow = adapter.workflows[request.type] || null;
  return workflow ? { found: true, workflow, adapterId: adapter.id } : { found: false, workflow: null, adapterId: adapter.id };
}

function getInstitutionContext(adapter, learnerId, authorization = {}) {
  if (!learnerId) throw new TypeError('learnerId is required');
  if (authorization.granted !== true) return { authorized: false, learnerId, institutionId: adapter.id, context: null };
  return { authorized: true, learnerId, institutionId: adapter.id, context: authorization.context || null };
}

module.exports = { createInstitutionAdapter, registerInstitutionSource, registerInstitutionRule, resolveInstitutionWorkflow, getInstitutionContext };
