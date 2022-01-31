module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  settings: {
    react: {
      "version": "latest",
    },
  },
  rules: {
  },
  overrides: [
    {
      "files": [
        "**/*.spec.js",
        "**/*.spec.tsx",
        "**/**/*.spec.tsx",
        "**/**/*.spec.js"
      ],
      "env": {
        "jest": true
      }
    }
  ]
};
