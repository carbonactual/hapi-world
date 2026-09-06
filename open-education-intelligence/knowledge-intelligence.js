const LICENCE_RULES = Object.freeze({
  'CC0': { access: true, reuse: true, adaptation: true, redistribution: true },
  'CC BY': { access: true, reuse: true, adaptation: true, redistribution: true, attribution: true },
  'CC BY-SA': { access: true, reuse: true, adaptation: true, redistribution: true, attribution: true, shareAlike: true },
  'CC BY-NC': { access: true, reuse: true, adaptation: true, redistribution: true, attribution: true, nonCommercial: true },
  'CC BY-ND': { access: true, reuse: true, adaptation: false, redistribution: true, attribution: true },
  'CC BY-NC-SA': { access: true, reuse: true, adaptation: true, redistribution: true, attribution: true, nonCommercial: true, shareAlike: true },
  'CC BY-NC-ND': { access: true, reuse: true, adaptation: false, redistribution: true, attribution: true, nonCommercial: true },
  // A resource may be publicly viewable while still retaining all reuse rights.
  'all-rights-reserved': { access: true, reuse: false, adaptation: false, redistribution: false },
  // Unknown licence means the resource can be surfaced for discovery, but its
  // reuse/adaptation rights must not be assumed.
  'unknown': { access: true, reuse: null, adaptation: null, redistribution: null },
});

function registerResource(resource = {}) {
  if (!resource.title) throw new TypeError('resource title is required');
  return Object.freeze({
    id: String(resource.id || resource.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')),
    title: String(resource.title),
    type: resource.type || 'Resource',
    source: resource.source || null,
    licence: resource.licence || 'unknown',
    subject: resource.subject || null,
    audience: resource.audience || null,
    format: resource.format || null,
    freshness: resource.freshness || null,
    accessibility: resource.accessibility || {},
    provenance: resource.provenance || { status: 'unknown' },
    verification: resource.verification || { status: 'unverified' },
  });
}

function verifyResource(resource, evidence = {}) {
  if (!evidence || !evidence.source) throw new TypeError('verification evidence source is required');
  return Object.freeze({ ...resource, verification: { status: evidence.status || 'verified', source: evidence.source, checkedAt: evidence.checkedAt || null, claim: evidence.claim || null } });
}

function classifyReuseRights(licence) {
  return Object.freeze({ licence, ...(LICENCE_RULES[licence] || LICENCE_RULES.unknown) });
}

function findLearningResources(query = {}, context = {}) {
  const resources = context.resources || [];
  const subject = String(query.subject || '').toLowerCase();
  const terms = String(query.text || '').toLowerCase().split(/\s+/).filter(Boolean);
  return resources.map((resource) => {
    const haystack = `${resource.title} ${resource.subject || ''} ${resource.audience || ''}`.toLowerCase();
    const relevance = (subject && String(resource.subject || '').toLowerCase() === subject ? 5 : 0) + terms.reduce((n, term) => n + (haystack.includes(term) ? 1 : 0), 0);
    const provenance = resource.verification?.status === 'verified' ? 3 : resource.provenance?.status === 'official' ? 4 : 0;
    const freshness = resource.freshness ? 1 : 0;
    const accessible = context.accessibility && resource.accessibility?.[context.accessibility] ? 2 : 0;
    const rights = classifyReuseRights(resource.licence);
    const requiresAdaptation = context.requireAdaptation === true;
    const requiresReuse = context.requireReuse === true;
    const rightsCompatible = requiresAdaptation ? rights.adaptation === true : requiresReuse ? rights.reuse === true : rights.access === true;
    return { resource, score: relevance + provenance + freshness + accessible + (rightsCompatible ? 2 : -4), rights };
  }).filter((item) => item.score > -2).sort((a, b) => b.score - a.score || a.resource.id.localeCompare(b.resource.id));
}

module.exports = { registerResource, verifyResource, classifyReuseRights, findLearningResources };
