

const config = {
  "coverageThreshold": {
    "global": {
      "branches": 50,
      "functions": 50,
      "lines": 50,
      "statements": 50,
    },
    "./src/components/": {
      "branches": 40,
      "statements": 40,
    },
    "./src/reducers/**/*.js": {
      "statements": 90,
    },
    "./src/api/very-important-module.js": {
      "branches": 100,
      "functions": 100,
      "lines": 100,
      "statements": 100,
    },
  },
};
// module.exports = {
//     preset: 'ts-jest',
//     testEnvironment: 'jsdom',
//     testMatch: ["**/__tests__/**/*.ts?(x)", "**/?(*.)+(test).ts?(x)"],
//     transform: {
//         "^.+\\.(js|ts)$": "ts-jest",
//     },
//     transformIgnorePatterns: [
//         "/node_modules/(?![@autofiy/autofiyable|@autofiy/property]).+\\.js$",
//         "/node_modules/(?![@autofiy/autofiyable|@autofiy/property]).+\\.ts$",
//         "/node_modules/(?![@autofiy/autofiyable|@autofiy/property]).+\\.tsx$",
//     ],
// }


module.exports = config;
