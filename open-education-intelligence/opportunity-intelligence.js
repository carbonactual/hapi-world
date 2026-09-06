function registerOpportunity(opportunity = {}) {
  if (!opportunity.id || !opportunity.title) throw new TypeError('opportunity id and title are required');
  return Object.freeze({ ...opportunity, id: String(opportunity.id), skills: opportunity.skills || [], eligibility: opportunity.eligibility || [], source: opportunity.source || null, verification: opportunity.verification || { status: 'unverified' } });
}

function matchOpportunities(learnerContext = {}, opportunities = []) {
  const skills = new Set(learnerContext.skills || []);
  const goals = new Set(learnerContext.goals || []);
  return opportunities.map((opportunity) => {
    const skillMatches = opportunity.skills.filter((skill) => skills.has(skill));
    const goalMatch = opportunity.goal && goals.has(opportunity.goal);
    const eligible = (opportunity.eligibility || []).every((rule) => !(rule.field in learnerContext) || learnerContext[rule.field] === rule.value);
    return { opportunity, eligible, score: skillMatches.length * 3 + (goalMatch ? 3 : 0) + (opportunity.verification?.status === 'verified' ? 2 : 0), reasons: { skillMatches, goalMatch, eligibility: eligible } };
  }).filter((item) => item.eligible).sort((a, b) => b.score - a.score || a.opportunity.id.localeCompare(b.opportunity.id));
}

function buildSkillToOpportunityPath(skill, learnerContext = {}) {
  return { skill, learnerId: learnerContext.id || null, steps: [
    { type: 'skill', value: skill },
    { type: 'evidence', action: 'build demonstrable evidence or portfolio work' },
    { type: 'opportunity', action: 'discover aligned internship, apprenticeship, research, mentorship, enterprise or employment opportunities' },
  ] };
}

module.exports = { registerOpportunity, matchOpportunities, buildSkillToOpportunityPath };
