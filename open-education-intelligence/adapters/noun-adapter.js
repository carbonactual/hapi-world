const { createInstitutionAdapter, registerInstitutionSource, registerInstitutionRule } = require('../institution-adapter');

function createNounAdapter() {
  let adapter = createInstitutionAdapter({
    id: 'noun',
    name: 'National Open University of Nigeria',
    authority: 'institution',
    workflows: {
      form_request: { domain: 'services', action: 'request-form' },
      transcript_request: { domain: 'services', action: 'request-transcript' },
      certificate_request: { domain: 'services', action: 'request-certificate' },
      project_support: { domain: 'research', action: 'route-project-support' },
      study_centre_service: { domain: 'services', action: 'route-study-centre-service' },
    },
  });
  adapter = registerInstitutionSource(adapter, { id: 'noun-main', url: 'https://nou.edu.ng/', authority: 'NOUN', verification: 'official', freshness: 'current' });
  adapter = registerInstitutionSource(adapter, { id: 'noun-support', url: 'https://support.nou.edu.ng/', authority: 'NOUN', verification: 'official', freshness: 'current' });
  adapter = registerInstitutionRule(adapter, { id: 'noun-assessment-integrity', domain: 'assessment', rule: 'no exam proxy or graded-work impersonation' });
  adapter = registerInstitutionRule(adapter, { id: 'noun-representation', domain: 'representation', rule: 'explicit authorization required for permitted errands' });
  adapter = registerInstitutionRule(adapter, { id: 'noun-finance-boundary', domain: 'finance-education', rule: 'education/discovery only; execution outside OEI' });
  return adapter;
}

module.exports = { createNounAdapter };
