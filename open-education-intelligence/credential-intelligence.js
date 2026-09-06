function registerCredential(credential = {}) {
  if (!credential.id || !credential.issuer) throw new TypeError('credential id and issuer are required');
  return Object.freeze({ ...credential, id: String(credential.id), verification: credential.verification || { status: 'unverified' }, evidence: credential.evidence || [] });
}

function mapCredentialToSkills(credential = {}, evidence = []) {
  const supported = evidence.filter((item) => item.credentialId === credential.id && item.skill).map((item) => ({ skill: item.skill, evidenceId: item.id || null, confidence: item.confidence || 'stated' }));
  return supported.filter((item, index, all) => all.findIndex((x) => x.skill === item.skill) === index);
}

function buildLifelongLearningProfile(learner = {}) {
  return { learnerId: learner.id, credentials: learner.credentials || [], skills: learner.skills || [], learningHistory: learner.learningHistory || [], nextLearningGoals: learner.goals || [] };
}

function compareLearningRecognition(a = {}, b = {}) {
  return { equivalent: Boolean(a.recognitionEvidence && b.recognitionEvidence && a.recognitionEvidence.issuer === b.recognitionEvidence.issuer), evidenceA: a.recognitionEvidence || null, evidenceB: b.recognitionEvidence || null, conclusion: 'recognition must be supported by issuer or regulatory evidence' };
}

module.exports = { registerCredential, mapCredentialToSkills, buildLifelongLearningProfile, compareLearningRecognition };
