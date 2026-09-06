const BLOCKED = new Set(['complete-graded-work','submit-graded-work','exam-attendance','impersonate-learner','bypass-assessment-identity']);

function buildPracticeSet(spec = {}) {
  return Object.freeze({ id: spec.id || `practice-${Date.now()}`, graded: false, integrity: 'practice-only', questions: spec.questions || [], subject: spec.subject || null });
}

function scorePracticeAttempt(attempt = {}, rubric = {}) {
  const answers = attempt.answers || {};
  const items = rubric.items || [];
  let score = 0;
  const weakAreas = [];
  for (const item of items) {
    if (answers[item.id] === item.answer) score += item.points || 1;
    else if (item.area) weakAreas.push(item.area);
  }
  const max = items.reduce((n, item) => n + (item.points || 1), 0);
  return { score, max, percentage: max ? score / max * 100 : 0, weakAreas: [...new Set(weakAreas)] };
}

function assessmentBoundary(action) {
  const normalized = String(action || '').toLowerCase();
  return BLOCKED.has(normalized) ? { allowed: false, reason: 'academic-integrity or identity boundary' } : { allowed: true, reason: 'non-consequential learning support' };
}

function buildMockAssessment(spec = {}) {
  return Object.freeze({ id: spec.id || `mock-${Date.now()}`, graded: false, mock: true, integrity: 'practice-only', questions: spec.questions || [], instructions: spec.instructions || null });
}

module.exports = { buildPracticeSet, scorePracticeAttempt, assessmentBoundary, buildMockAssessment };
