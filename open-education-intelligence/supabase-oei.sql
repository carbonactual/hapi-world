create table if not exists oei_learner_profiles (
  id text primary key,
  tenant_id text not null,
  identity jsonb not null default '{}'::jsonb,
  goals jsonb not null default '[]'::jsonb,
  preferences jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists oei_institution_relationships (
  id bigserial primary key,
  tenant_id text not null,
  learner_id text not null references oei_learner_profiles(id) on delete cascade,
  institution_id text not null,
  relationship_type text not null,
  status text not null default 'active',
  evidence jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists oei_graph_nodes (
  id text primary key,
  tenant_id text not null,
  type text not null,
  attributes jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists oei_graph_edges (
  id bigserial primary key,
  tenant_id text not null,
  from_id text not null references oei_graph_nodes(id) on delete cascade,
  relationship text not null,
  to_id text not null references oei_graph_nodes(id) on delete cascade,
  evidence jsonb not null,
  created_at timestamptz not null default now()
);

create table if not exists oei_sources (
  id text primary key,
  tenant_id text not null,
  url text,
  authority text,
  verification_status text not null default 'unverified',
  freshness timestamptz,
  metadata jsonb not null default '{}'::jsonb
);

create table if not exists oei_resources (
  id text primary key,
  tenant_id text not null,
  title text not null,
  type text,
  source_id text references oei_sources(id),
  licence text not null default 'unknown',
  subject text,
  audience text,
  format text,
  freshness timestamptz,
  accessibility jsonb not null default '{}'::jsonb,
  verification jsonb not null default '{}'::jsonb
);

create table if not exists oei_credentials (
  id text primary key,
  tenant_id text not null,
  learner_id text references oei_learner_profiles(id),
  issuer text not null,
  credential_type text,
  evidence jsonb not null default '[]'::jsonb,
  verification jsonb not null default '{}'::jsonb
);

create table if not exists oei_opportunities (
  id text primary key,
  tenant_id text not null,
  title text not null,
  source_id text references oei_sources(id),
  skills jsonb not null default '[]'::jsonb,
  eligibility jsonb not null default '[]'::jsonb,
  deadline timestamptz,
  metadata jsonb not null default '{}'::jsonb
);

create table if not exists oei_services (
  id text primary key,
  tenant_id text not null,
  title text not null,
  category text not null default 'general',
  verification jsonb not null default '{}'::jsonb,
  metadata jsonb not null default '{}'::jsonb
);

create table if not exists oei_events (
  id text primary key,
  tenant_id text not null,
  title text not null,
  category text not null default 'community',
  starts_at timestamptz,
  verification jsonb not null default '{}'::jsonb,
  metadata jsonb not null default '{}'::jsonb
);

create table if not exists oei_consents (
  id text primary key,
  tenant_id text not null,
  learner_id text not null references oei_learner_profiles(id) on delete cascade,
  scope text not null,
  granted boolean not null default false,
  evidence jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

alter table oei_learner_profiles enable row level security;
alter table oei_institution_relationships enable row level security;
alter table oei_graph_nodes enable row level security;
alter table oei_graph_edges enable row level security;
alter table oei_sources enable row level security;
alter table oei_resources enable row level security;
alter table oei_credentials enable row level security;
alter table oei_opportunities enable row level security;
alter table oei_services enable row level security;
alter table oei_events enable row level security;
alter table oei_consents enable row level security;

-- Client access is tenant-scoped through the authenticated JWT. The service
-- role remains available to trusted server-side orchestration and bypasses RLS.
create policy if not exists oei_learner_profiles_tenant_policy on oei_learner_profiles
  using (tenant_id = auth.jwt() ->> 'tenant_id')
  with check (tenant_id = auth.jwt() ->> 'tenant_id');
create policy if not exists oei_institution_relationships_tenant_policy on oei_institution_relationships
  using (tenant_id = auth.jwt() ->> 'tenant_id')
  with check (tenant_id = auth.jwt() ->> 'tenant_id');
create policy if not exists oei_graph_nodes_tenant_policy on oei_graph_nodes
  using (tenant_id = auth.jwt() ->> 'tenant_id')
  with check (tenant_id = auth.jwt() ->> 'tenant_id');
create policy if not exists oei_graph_edges_tenant_policy on oei_graph_edges
  using (tenant_id = auth.jwt() ->> 'tenant_id')
  with check (tenant_id = auth.jwt() ->> 'tenant_id');
create policy if not exists oei_sources_tenant_policy on oei_sources
  using (tenant_id = auth.jwt() ->> 'tenant_id')
  with check (tenant_id = auth.jwt() ->> 'tenant_id');
create policy if not exists oei_resources_tenant_policy on oei_resources
  using (tenant_id = auth.jwt() ->> 'tenant_id')
  with check (tenant_id = auth.jwt() ->> 'tenant_id');
create policy if not exists oei_credentials_tenant_policy on oei_credentials
  using (tenant_id = auth.jwt() ->> 'tenant_id')
  with check (tenant_id = auth.jwt() ->> 'tenant_id');
create policy if not exists oei_opportunities_tenant_policy on oei_opportunities
  using (tenant_id = auth.jwt() ->> 'tenant_id')
  with check (tenant_id = auth.jwt() ->> 'tenant_id');
create policy if not exists oei_services_tenant_policy on oei_services
  using (tenant_id = auth.jwt() ->> 'tenant_id')
  with check (tenant_id = auth.jwt() ->> 'tenant_id');
create policy if not exists oei_events_tenant_policy on oei_events
  using (tenant_id = auth.jwt() ->> 'tenant_id')
  with check (tenant_id = auth.jwt() ->> 'tenant_id');
create policy if not exists oei_consents_tenant_policy on oei_consents
  using (tenant_id = auth.jwt() ->> 'tenant_id')
  with check (tenant_id = auth.jwt() ->> 'tenant_id');

create index if not exists oei_graph_nodes_tenant_type_idx on oei_graph_nodes(tenant_id, type);
create index if not exists oei_graph_edges_tenant_from_idx on oei_graph_edges(tenant_id, from_id);
create index if not exists oei_resources_tenant_subject_idx on oei_resources(tenant_id, subject);
create index if not exists oei_opportunities_tenant_deadline_idx on oei_opportunities(tenant_id, deadline);
