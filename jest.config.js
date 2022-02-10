module.exports = {
  testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
  transform: {
    '^.+\\.(ts|js|html)$': 'ts-jest',
  },
  resolver: '@nrwl/jest/plugins/resolver',
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageReporters: ['html'],
  passWithNoTests: true,
  projects: [
    '<rootDir>/libs/rad-pixi',
    '<rootDir>/libs/rl-applib',
    '<rootDir>/libs/rl-ecs',
    '<rootDir>/libs/rl-procgen',
    '<rootDir>/libs/rl-ui',
    '<rootDir>/libs/rl-utils',
    '<rootDir>/',
  ],
};
