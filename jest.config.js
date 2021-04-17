const mainTestOptions = {
  testURL: 'http://localhost',
  moduleNameMapper: {
    '^lib/(.*)': '<rootDir>/src/lib/$1', // Fix aliased imports
    '\\.((?:sa|sc|le|c)ss)$': 'identity-obj-proxy', // for css modules
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/scripts/fileMock.js', // for all other files (from jest docs)
  },
  // This next block works around a bug with using `moduleName/index.js` in a lot of places.
  modulePathIgnorePatterns: ['<rootDir>/src/.*/__mocks__'],
  modulePaths: ['<rootDir>/src/apps'],
  displayName: 'test',
  runner: 'jest-runner',
  setupFilesAfterEnv: ['./scripts/setupTestFramework.js'],
  collectCoverage: process.env.COVERAGE === 'run',
  collectCoverageFrom: [
    '<rootDir>/**/*.js',
    '!<rootDir>/src/lib/types/*.js',
  ],
  coverageReporters: [
    'json',
    ['lcov', { projectRoot: '/' }],
    'text-summary',
  ],
  testResultsProcessor: 'jest-sonar-reporter',
  // Because this runner is always enabled, if we don't want to run tests, just tell it to
  // run only tests in a folder that doesn't have any...
  roots: [
    process.env.UNIT === 'run'
      ? '<rootDir>/src'
      : '<rootDir>/.circleci',
  ],
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
}

const projects = [mainTestOptions]

if (process.env.ESLINT === 'run') {
  projects.push({
    displayName: 'eslint',
    runner: 'jest-runner-eslint',
    roots: ['<rootDir>/src'],
    testMatch: ['**/*.(js|ts|tsx)'],
  })
}

if (process.env.STYLELINT === 'run') {
  projects.push({
    displayName: 'stylelint',
    runner: 'jest-runner-stylelint',
    roots: ['<rootDir>/src'],
    testMatch: ['**/*.css'],
    moduleFileExtensions: ['css'],
  })
}

module.exports = {
  ...mainTestOptions,
  projects,
}
