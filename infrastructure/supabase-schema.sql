-- HAPI World Agent Registry Schema
-- Deploy to Supabase when projects are activated

CREATE TABLE IF NOT EXISTS agent_registry (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    role VARCHAR(200) NOT NULL,
    status VARCHAR(20) DEFAULT '''active''',
    description TEXT,
    skills JSONB DEFAULT '''[]''',
    tools JSONB DEFAULT '''[]''',
    providers JSONB DEFAULT '''[]''',
    api_key_env VARCHAR(100),
    certification VARCHAR(200),
    performance_score INT DEFAULT 0,
    tasks_completed INT DEFAULT 0,
    tasks_failed INT DEFAULT 0,
    confidence REAL DEFAULT 0.8,
    version VARCHAR(20) DEFAULT '''1.0''',
    emergency_stop BOOLEAN DEFAULT false,
    data_scope TEXT,
    authority_scope TEXT,
    spending_limit INT DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS hapi_iol_ledger (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    owner_id VARCHAR(100) NOT NULL,
    identity_id VARCHAR(100),
    transaction_type VARCHAR(50),
    amount DECIMAL(18,2),
    currency VARCHAR(10) DEFAULT '''HAPi''',
    counterparty_id VARCHAR(100),
    counterparty_name VARCHAR(200),
    reference VARCHAR(200),
    status VARCHAR(20) DEFAULT '''pending''',
    description TEXT,
    asset_type VARCHAR(50),
    value_state VARCHAR(20),
    settled_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS hapi_accounts (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    agent_id VARCHAR(100) NOT NULL,
    human_id VARCHAR(100),
    balance_hapi DECIMAL(18,2) DEFAULT 0,
    balance_fiat DECIMAL(18,2) DEFAULT 0,
    credit_score INT DEFAULT 500,
    lending_limit DECIMAL(18,2) DEFAULT 0,
    savings_tier VARCHAR(20) DEFAULT '''standard''',
    status VARCHAR(20) DEFAULT '''active''',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS hapi_value_conversion (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    source_type VARCHAR(50) NOT NULL,
    source_amount DECIMAL(18,2),
    source_currency VARCHAR(50),
    target_type VARCHAR(50),
    target_amount DECIMAL(18,2),
    target_currency VARCHAR(50),
    conversion_rate DECIMAL(18,8),
    agent_id VARCHAR(100),
    status VARCHAR(20) DEFAULT '''pending''',
    proof_reference VARCHAR(200),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

INSERT INTO agent_registry (name, role, status, description) VALUES
('ABBA Prime', 'Master Super-Agent', 'active', 'Central intelligence'),
('Sentinel', 'Security Operations', 'active', '24/7 threat scanning'),
('Scout', 'Trend Intelligence', 'active', 'Moltbook monitoring'),
('Publisher', 'Content Deployment', 'active', 'Instagram carousels'),
('Accountant', 'Revenue Tracking', 'active', 'CPM/CPC/CTR/ROAS'),
('Architect', 'Code Engineering', 'active', 'GitHub/Vercel'),
('Diplomat', 'Deal Negotiation', 'active', 'Brand partnerships'),
('Librarian', 'Knowledge Management', 'active', 'Notion integration'),
('Oracle', 'Research', 'active', 'Tavily/Brave/Perplexity'),
('HAPI Bank Custodian', 'Value & Settlement', 'active', 'IOLedger settlements'),
('Navigator', 'Geolocation & Logistics', 'active', 'TomTom maps'),
('CrewAI Flow Engineer', 'Workflow Designer', 'active', 'CrewAI Flows'),
('Manus Task Executor', 'Task Runner', 'active', 'Manus API runtime'),
('CrewAI Orchestrator', 'Crew Coordinator', 'active', 'Multi-agent crews'),
('Manus Composer', 'Agent Composition', 'active', 'Skill composition'),
('Audit Agent', 'Auditor', 'active', 'Risk assessment'),
('Finance Agent', 'Financial Controller', 'active', 'Bookkeeping'),
('HR Agent', 'HR', 'active', 'Recruitment/onboarding'),
('Security Agent', 'Security', 'active', 'Threat detection'),
('Research Agent', 'Researcher', 'active', 'Market research'),
('Project Agent', 'Project Manager', 'active', 'Milestone tracking'),
('Opportunity Agent', 'Opportunity Discovery', 'active', 'Revenue opportunities'),
('Legal Support Agent', 'Legal Support', 'active', 'Contract review'),
('Knowledge Agent', 'Knowledge Management', 'active', 'Knowledge Library')
ON CONFLICT (name) DO NOTHING;
