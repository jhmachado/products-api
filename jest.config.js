module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  "transform": {
    "^.+\\.ts$": "ts-jest" // [A]
  },
  "testRegex": "\\.test\\.ts", // [B]
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node" // [C]
  ]
};
