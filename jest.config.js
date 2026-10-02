/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  // Replaces styled-components' generated class hashes with stable c0/c1/... names
  // in snapshots, so adding or removing a styled component anywhere no longer
  // renumbers the global counter and churns every unrelated snapshot. See CORE-2924.
  setupFilesAfterEnv: ["jest-styled-components"],
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
};
