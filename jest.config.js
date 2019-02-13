module.exports = {
  verbose: true,
  testURL: "http://localhost/",
  roots: ["src"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  transformIgnorePatterns: [
    "/node_modules/",
    "/utilities/",
    "/environments/"
  ],
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  testEnvironment: "node"
};
