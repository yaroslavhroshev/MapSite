module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/recommended',
    'eslint-config-prettier',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  globals: {
    window: true,
  },
  settings: { react: { version: '18.2' } },
  // plugins: ["react-refresh"],
  plugins: [
    'react',
    'react-hooks',
    'prettier',
    'react-refresh',
    'jsx-a11y',
    'import',
  ],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'import/no-unresolved': 'off',
    'no-unused-vars': 'warn',
    'prefer-const': 'error',
    'no-console': 'warn',
    quotes: ['error', 'single'],
    'jsx-quotes': ['error', 'prefer-double'],
    indent: ['error', 2],
    'react/jsx-indent': ['error', 2],
    'max-len': ['error', { code: 125 }],
    'comma-dangle': ['error', 'always-multiline'],
    semi: ['error', 'always'],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
      },
    ],
    'no-trailing-spaces': 'error',
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
      },
    ],
    'arrow-body-style': 'off',
    'no-multi-spaces': 'error',
    'react/jsx-tag-spacing': [
      'error',
      {
        //     closingSlash: 'never',
        //     beforeSelfClosing: 'always',
        //     afterOpening: 'never',
        // beforeClosing: 'never',
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    'no-param-reassign': ['error', { props: false }],
  },
};
