module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', '@typescript-eslint'],
  rules: {
    'prettier/prettier': [
      'error',
      { endOfLine: 'auto', singleQuote: true },
    ],
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.tsx', '.ts'] },
    ],
    'react/react-in-jsx-scope': false,
  },
}
