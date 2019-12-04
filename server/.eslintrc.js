module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
    "jest/globals": true
  },
  extends: [
    'airbnb-base', 'plugin:jest/all'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  "rules": {
    semi: ["warn", "never"],
    "no-console": 0,
    indent: ["warn", 4],
    'no-undef': 0,
    'no-plusplus': 0
  },
  "plugins": ["jest"]
};