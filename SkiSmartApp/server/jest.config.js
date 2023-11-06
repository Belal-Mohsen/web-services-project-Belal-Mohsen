export default {
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  clearMocks: true,
  coverageDirectory: "coverage",
  testEnvironment: "node",
};
