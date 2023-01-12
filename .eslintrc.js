module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    indent: [
      "error",
      2
    ],
    eqeqeq: 1,
    'no-unused-vars': 'warn',
    'no-useless-escape': 'warn',
    'no-trailing-spaces': 0,
    'no-multiple-empty-lines': 1,
    'prefer-const': 'warn',
    'multiline-ternary': 0,
    semi: 0,
    quotes: 0,
    'object-curly-spacing': 'always',
    'space-before-function-paren': 1,
    'comma-dangle': 0,
    camelcase: 'warn',
    'eol-last': 0,
    'no-extra-semi': 'warn',
    curly: 'warn',
    indent: 0,
    'handle-callback-err': ['warn'],
  },
}
