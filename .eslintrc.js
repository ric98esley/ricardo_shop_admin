module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
    amd: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'plugin:jsx-a11y/recommended', 'plugin:prettier/recommended', 'next', 'next/core-web-vitals', 'plugin:react/recommended'],
  plugins: ['react', 'prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'react/prop-types': 'off',
    'semi': ['error', 'always'],
    'prettier/prettier': 0,
  },
};
