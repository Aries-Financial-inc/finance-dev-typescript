import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['src/__tests__/**/*.test.ts', 'tests/generated/**/*.test.ts'],
    globalSetup: ['./tests/generated/setup.mjs'],
    testTimeout: 15_000,
    maxWorkers: 4,
  },
});
