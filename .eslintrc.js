module.exports = {
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
  ],
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'no-console': 'warn',
    'no-debugger': 'warn',
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-fragments': ['error', 'element'],
    'react/state-in-constructor': ['error', 'always'],
    'react/static-property-placement': 'error',
    'react/react-in-jsx-scope': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['src/**/*.js'],
      env: {
        browser: false,
      },
      rules: {
        'no-console': 'off', // Disable the "no-console" rule
      },
    },
  ],
};
