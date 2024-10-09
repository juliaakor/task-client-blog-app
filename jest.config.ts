import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './',
});

const config: Config = {
  collectCoverage: true,
  collectCoverageFrom: [
    'app/**/*.ts',
    'api/**/*.ts',
    'lib/**/*.ts',
    'hooks/**/*.ts',
    'components/**/*.ts',
    '!**/*route.ts',
    '!**/types.ts',
    '!lib/components/**/*.ts',
  ],
  coverageProvider: 'v8',
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },
  moduleNameMapper: {
    '^@api/(.*)$': '<rootDir>/api/$1',
    '^@hooks/(.*)$': '<rootDir>/hooks/$1',
    '^@lib/(.*)$': '<rootDir>/lib/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/playwright/', '/lib/components/'],
};

export default createJestConfig(config);
