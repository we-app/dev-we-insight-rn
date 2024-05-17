module.exports = {
  ignorePatterns: ['node_modules/', 'lib/'],
  env: {
    es2021: true,
    node: true,
    browser: true,
  },
  globals: {
    React: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint'],
  settings: {
    react: { version: 'detect' }
  },
  rules: {
    'linebreak-style': 0,
    'object-curly-spacing': [1, 'always'],
    'react/jsx-boolean-value': [2, 'always'],
    'semi': [1, 'never'],
    'react/jsx-max-props-per-line': [0, { maximum: 3 }],
    'react/jsx-no-literals': 0,
    'react/sort-comp': 2,
    'react/self-closing-comp': 2,
    'react/sort-prop-types': ['warn'],
    'react/react-in-jsx-scope': 1,
    'react/default-props-match-prop-types': ['warn'],
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'react/jsx-key': [0, { checkFragmentShorthand: true }],
    'react-hooks/exhaustive-deps': 0, //TODO: Make this an error
    '@typescript-eslint/no-empty-interface': 'off',
    'react/prop-types': 'off',
    'no-unused-vars': [
      1,
      {
        args: 'after-used',
        argsIgnorePattern: '^_'
      }
    ],
    'react/require-default-props': [
      0,
      {
        forbidDefaultForRequired: false

        // @deprecated Use `functions` option instead.
      }
    ],
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }]
  }
}
