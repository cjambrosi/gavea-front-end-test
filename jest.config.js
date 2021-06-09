module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)'],
  setupFiles: ['<rootDir>/.jest/env-setup.js'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
}
