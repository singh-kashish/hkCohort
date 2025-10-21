// jest.config.ts
import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',

  // Allow JS tests to run and import TS files
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],

  // If your tests currently live under a tests or __tests__ dir, adjust this
  testMatch: [
    '**/__tests__/**/*.(ts|tsx|js|jsx)',
    '**/?(*.)+(spec|test).(ts|tsx|js|jsx)'
  ],

  // Optional: map import paths if you use absolute imports
  // moduleNameMapper: {
  //   '^@src/(.*)$': '<rootDir>/src/$1',
  // },

  // ts-jest options
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
      isolatedModules: true
    }
  }
};

export default config;
