function registerEducationEvent(event = {}) {
  if (!event.id || !event.title) throw new TypeError('event id and title are required');
  return Object.freeze({ ...event, id: String(event.id), category: event.category || 'community', verification: event.verification || { status: 'unverified' } });
}

function matchLearnerToCommunities(learnerContext = {}, communities = []) {
  const interests = new Set(learnerContext.interests || []);
  return communities.map((community) => {
    const matches = (community.interests || []).filter((interest) => interests.has(interest));
    return { community, score: matches.length + (community.verification?.status === 'verified' ? 1 : 0), reasons: matches };
  }).sort((a, b) => b.score - a.score || a.community.id.localeCompare(b.community.id));
}

function governanceBoundary(action) {
  const blocked = new Set(['cast-official-ballot','submit-official-vote','change-institution-record','approve-governance-action']);
  return blocked.has(String(action || '').toLowerCase()) ? { allowed: false, reason: 'institutional authority contract required' } : { allowed: true, reason: 'information, education or consultation' };
}

module.exports = { registerEducationEvent, matchLearnerToCommunities, governanceBoundary };
