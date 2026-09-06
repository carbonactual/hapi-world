function registerEducationService(service = {}) {
  if (!service.id || !service.title) throw new TypeError('service id and title are required');
  return Object.freeze({ ...service, id: String(service.id), verification: service.verification || { status: 'unverified' }, category: service.category || 'general' });
}

function createServiceRequest(request = {}) {
  if (!request.learnerId || !request.need) throw new TypeError('learnerId and need are required');
  return Object.freeze({ ...request, id: String(request.id || `request-${Date.now()}`), status: 'open', private: request.private !== false });
}

function matchService(request, services = []) {
  return services.map((service) => ({ service, score: (service.category === request.category ? 4 : 0) + (service.location && request.location && service.location === request.location ? 2 : 0) + (service.verification?.status === 'verified' ? 2 : 0) })).sort((a, b) => b.score - a.score || a.service.id.localeCompare(b.service.id));
}

function publishStudentOffering(offering = {}, consent = {}) {
  if (consent.granted !== true || consent.scope !== 'marketplace') throw new Error('deliberate marketplace publication consent is required');
  return Object.freeze({ ...offering, publication: { status: 'published', consentScope: consent.scope, consentAt: consent.at || null } });
}

module.exports = { registerEducationService, createServiceRequest, matchService, publishStudentOffering };
