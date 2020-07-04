module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
    }
  },
  extends: [
    'plugin:@typescript-eslint/recommended'
  ],
  settings: {
  },
  rules: {
    'semi': ['error', 'never'],
    'quotes': [2, 'single', 'avoid-escape'],
    'comma-dangle': ['error', 'always-multiline'],
  },
};