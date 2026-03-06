const nxPreset = require('@nx/jest/preset').default;

// Remove coverageReporters from preset to avoid warning
const { coverageReporters, ...preset } = nxPreset;

module.exports = {
  ...preset,
  testEnvironment: 'node',
  testMatch: ['**/**/*.test.(js|ts)?(x)'],
  testPathIgnorePatterns: ['/node_modules/', '/lib/', '/dist/'],
  modulePathIgnorePatterns: ['/lib/', '/build/', '/dist/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { 
      presets: ['@babel/preset-env'],
    }],
  },
  transformIgnorePatterns: ['/node_modules/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
};
