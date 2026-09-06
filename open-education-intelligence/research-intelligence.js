function buildResearchPathway(topic, learnerContext = {}) {
  if (!topic) throw new TypeError('research topic is required');
  return { topic, learnerId: learnerContext.id || null, steps: [
    { type: 'scope', action: 'define research question' },
    { type: 'discover', action: 'find relevant sources' },
    { type: 'evaluate', action: 'assess provenance and evidence' },
    { type: 'synthesize', action: 'compare findings and identify gaps' },
    { type: 'method', action: 'select an appropriate method' },
    { type: 'document', action: 'record evidence and reasoning' },
  ] };
}

function classifyResearchResource(resource = {}) {
  const type = String(resource.type || '').toLowerCase();
  if (['journal','article','paper'].includes(type)) return 'scholarly-publication';
  if (['dataset','data'].includes(type)) return 'research-data';
  if (['thesis','dissertation'].includes(type)) return 'student-research';
  if (['policy','report','government'].includes(type)) return 'institutional-report';
  if (['book','chapter'].includes(type)) return 'scholarly-book';
  return 'general-source';
}

function buildLiteratureDiscoveryPlan(query) {
  const terms = String(query || '').trim().split(/\s+/).filter(Boolean);
  return { query, concepts: terms, searchPlan: [
    { strategy: 'exact-topic', terms },
    { strategy: 'synonyms', terms: terms.map((term) => `${term} OR related concept`) },
    { strategy: 'evidence-type', terms: [...terms, 'systematic review'] },
  ] };
}

function researchBoundary(action) {
  const blocked = new Set(['submit-research-on-behalf','impersonate-researcher','forge-research-evidence','fabricate-citation']);
  return blocked.has(String(action || '').toLowerCase()) ? { allowed: false, reason: 'research integrity or authority boundary' } : { allowed: true, reason: 'research support' };
}

module.exports = { buildResearchPathway, classifyResearchResource, buildLiteratureDiscoveryPlan, researchBoundary };
