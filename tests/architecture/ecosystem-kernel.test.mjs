import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const kernelPath = join(here, '../../architecture/ecosystem-kernel.json');
const projectionPath = join(here, '../../architecture/kernel-projection-map.json');

const loadJson = async (path) => JSON.parse(await readFile(path, 'utf8'));

test('kernel exposes exactly the nine semantic facets in canonical order', async () => {
  const kernel = await loadJson(kernelPath);
  assert.equal(kernel.authority, 'CANON.md');
  assert.equal(kernel.compatibility.mode, 'additive');
  assert.deepEqual(
    kernel.facets.map((facet) => facet.id),
    [
      'identity',
      'authority',
      'intent',
      'capability',
      'relationship',
      'event',
      'evidence',
      'state',
      'value',
    ],
  );
  assert.equal(new Set(kernel.facets.map((facet) => facet.id)).size, 9);
});

test('kernel rules protect the five critical distinctions', async () => {
  const kernel = await loadJson(kernelPath);
  const rules = new Set(kernel.rules.map((rule) => rule.id));

  assert.ok(rules.has('capability-does-not-imply-authority'));
  assert.ok(rules.has('event-does-not-equal-evidence'));
  assert.ok(rules.has('state-is-not-history'));
  assert.ok(rules.has('intent-is-not-execution'));
  assert.ok(rules.has('value-is-not-money-only'));
});

test('kernel remains constitutional-source neutral and non-destructive', async () => {
  const kernel = await loadJson(kernelPath);
  assert.equal(kernel.compatibility.modify_canon, false);
  assert.equal(kernel.compatibility.delete_existing_concepts, false);
  assert.equal(kernel.compatibility.rename_existing_concepts, false);
  assert.equal(kernel.compatibility.infrastructure_neutral, true);
});

test('every projection points to a known facet and preserves its source', async () => {
  const kernel = await loadJson(kernelPath);
  const projectionMap = await loadJson(projectionPath);
  const facets = new Set(kernel.facets.map((facet) => facet.id));

  assert.equal(projectionMap.mode, 'projection-only');
  assert.equal(projectionMap.preserves_source, true);
  assert.ok(projectionMap.projections.length > 0);

  for (const projection of projectionMap.projections) {
    assert.equal(projection.mode, 'projection');
    assert.equal(projection.preserves_source, true);
    assert.ok(facets.has(projection.facet), `unknown kernel facet: ${projection.facet}`);
  }
});
