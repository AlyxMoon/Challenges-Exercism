
module.exports = {
  moduleFileExtensions: [
    'js',
  ],
  moduleNameMapper: {},
  transform: {
    '^.+\\.js?$': 'babel-jest',
  },
  coverageDirectory: '<rootDir>/_coverage',
  collectCoverageFrom: [
    '!**/node_modules/**',
  ],
}
