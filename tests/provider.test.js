import test from 'node:test';
import assert from 'node:assert/strict';

test('exports vite provider', async () => {
  const module = await import('../dist/index.js');
  assert.ok(module.default);
  assert.ok(module.viteProvider);
  assert.equal(module.default, module.viteProvider);
  assert.equal(module.viteProvider?.metadata?.kind, 'frontend');
});
