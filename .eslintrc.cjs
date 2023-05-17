module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    "plugin:react/recommended",
    'plugin:react-hooks/recommended'
  ],
  ignorePatterns: ["/**/*.html"],
  overrides: [
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['@typescript-eslint', 'react'],
  rules: {
    semi: 'off',
    "react/jsx-filename-extension": [1, { "extensions": [".tsx", ".ts"] }],
    "react/react-in-jsx-scope": "off"
  },
  root: true,
  settings: {
    react: {
      pragma: "React",
      version: "detect"
    }
  }
};
