/**
 * Canonical, institution-neutral OEI domain contract.
 *
 * The learner is the primary participant. Institutional specialization belongs
 * in adapters; the universal core must not depend on NOUN or any institution.
 */

const freezeRecord = (value) => Object.freeze({ ...value });

const OEI_DOMAINS = Object.freeze([
  'learner', 'institution', 'educator', 'knowledge', 'curriculum', 'learning',
  'assessment', 'research', 'support', 'credential', 'skills', 'opportunity',
  'services', 'community', 'enterprise', 'finance-education', 'governance',
  'lifecycle', 'evidence', 'orchestration',
]);

const OEI_ENTITIES = Object.freeze([
  'Human', 'Learner', 'Institution', 'InstitutionalUnit', 'Educator', 'Tutor',
  'Mentor', 'Community', 'Programme', 'Curriculum', 'Course', 'Module',
  'LearningOutcome', 'LearningActivity', 'Resource', 'OER', 'Media', 'Assessment',
  'Question', 'Attempt', 'Evidence', 'Project', 'ResearchTopic', 'ResearchOutput',
  'Service', 'Form', 'Request', 'Case', 'Opportunity', 'Employer', 'Skill',
  'Portfolio', 'Credential', 'Qualification', 'Event', 'Club', 'Association',
  'Team', 'Competition', 'Scholarship', 'Grant', 'FinancialAidInformation',
  'InstitutionPolicy', 'Authority', 'Consent', 'Relationship', 'Outcome',
]);

const OEI_RELATIONSHIPS = Object.freeze([
  freezeRecord({ name: 'enrols-in', from: 'Learner', to: 'Programme' }),
  freezeRecord({ name: 'belongs-to', from: 'Learner', to: 'Institution' }),
  freezeRecord({ name: 'learns-from', from: 'Learner', to: 'Resource' }),
  freezeRecord({ name: 'studies', from: 'Learner', to: 'Course' }),
  freezeRecord({ name: 'supported-by', from: 'Learner', to: 'Educator' }),
  freezeRecord({ name: 'attempts', from: 'Learner', to: 'Assessment' }),
  freezeRecord({ name: 'earns', from: 'Learner', to: 'Credential' }),
  freezeRecord({ name: 'develops', from: 'Learner', to: 'Skill' }),
  freezeRecord({ name: 'matches', from: 'Learner', to: 'Opportunity' }),
  freezeRecord({ name: 'requests', from: 'Learner', to: 'Service' }),
  freezeRecord({ name: 'participates-in', from: 'Learner', to: 'Community' }),
  freezeRecord({ name: 'participates-in-event', from: 'Learner', to: 'Event' }),
  freezeRecord({ name: 'contains', from: 'Programme', to: 'Course' }),
  freezeRecord({ name: 'teaches', from: 'Course', to: 'LearningOutcome' }),
  freezeRecord({ name: 'supports', from: 'Resource', to: 'LearningOutcome' }),
  freezeRecord({ name: 'develops-skill', from: 'LearningOutcome', to: 'Skill' }),
  freezeRecord({ name: 'produces', from: 'Attempt', to: 'Evidence' }),
  freezeRecord({ name: 'supports-evidence', from: 'Evidence', to: 'Skill' }),
  freezeRecord({ name: 'institution-offers', from: 'Institution', to: 'Programme' }),
  freezeRecord({ name: 'institution-provides', from: 'Institution', to: 'Service' }),
  freezeRecord({ name: 'institution-publishes', from: 'Institution', to: 'InstitutionPolicy' }),
  freezeRecord({ name: 'authorizes', from: 'Authority', to: 'Relationship' }),
  freezeRecord({ name: 'constrains', from: 'Consent', to: 'Relationship' }),
  freezeRecord({ name: 'results-in', from: 'Relationship', to: 'Outcome' }),
]);

const OEI_CAPABILITIES = Object.freeze([
  'read', 'analyze', 'classify', 'organize', 'monitor', 'recommend', 'explain',
  'match', 'notify', 'report', 'escalate',
]);

module.exports = { OEI_DOMAINS, OEI_ENTITIES, OEI_RELATIONSHIPS, OEI_CAPABILITIES };
