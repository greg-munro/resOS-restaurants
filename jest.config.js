module.exports = {
  "testEnvironment": "jsdom",
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(js|jsx)$',
  moduleFileExtensions: ['js', 'json', 'jsx'],
  "setupFilesAfterEnv": ["./tests/setup.js"]
}
