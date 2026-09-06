const { OEI_ENTITIES, OEI_RELATIONSHIPS } = require('./domain-contract');

function createEducationNode(type, attributes = {}) {
  if (!OEI_ENTITIES.includes(type)) throw new TypeError(`unsupported education entity: ${type}`);
  if (!attributes.id) throw new TypeError('node id is required');
  return Object.freeze({ type, id: String(attributes.id), attributes: { ...attributes, id: String(attributes.id) } });
}

function createEducationRelationship(from, relationship, to, evidence = null) {
  const definition = OEI_RELATIONSHIPS.find((item) => item.name === relationship);
  if (!definition) throw new TypeError(`unsupported relationship: ${relationship}`);
  if (from.type !== definition.from || to.type !== definition.to) throw new TypeError('relationship endpoints do not match contract');
  if (!evidence) throw new TypeError('evidence is required for education relationships');
  return Object.freeze({ from: from.id, fromType: from.type, relationship, to: to.id, toType: to.type, evidence: { ...evidence } });
}

function queryEducationGraph(graph, query = {}) {
  const nodes = (graph.nodes || []).filter((node) => Object.entries(query).every(([key, value]) => key === 'type' ? node.type === value : node.attributes?.[key] === value));
  const relationships = (graph.relationships || []).filter((edge) => Object.entries(query).every(([key, value]) => edge[key] === value));
  return { nodes, relationships };
}

function traceLearningPath(graph, learnerId, goal) {
  const nodes = graph.nodes || [];
  const edges = graph.relationships || [];
  const node = (id) => nodes.find((item) => item.id === id);
  const start = nodes.find((item) => item.type === 'Learner' && item.id === learnerId);
  if (!start) return [];
  const path = [start];
  let current = start.id;
  const preferred = ['studies', 'learns-from', 'attempts', 'earns', 'develops', 'matches'];
  for (const relation of preferred) {
    const edge = edges.find((item) => item.from === current && item.relationship === relation);
    if (!edge) continue;
    const next = node(edge.to);
    if (!next) continue;
    path.push(next);
    current = next.id;
    if (goal && next.attributes?.goal === goal) break;
  }
  return path;
}

module.exports = { createEducationNode, createEducationRelationship, queryEducationGraph, traceLearningPath };
