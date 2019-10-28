const OFF = 0; // "off" or 0 - turn the rule off
const WARN = 1; // "warn" or 1 - turn the rule on as a warning (doesn’t affect exit code)
const ERROR = 2; // "error" or 2 - turn the rule on as an error (exit code is 1 when triggered)

module.exports = {
  root: true,
  extends: ['react-app', 'airbnb', 'prettier', 'prettier/react'],
  settings: {
    react: {
      pragma: 'React', // Pragma to use, default to "React"
      version: '16.11', // React version, default to the latest React stable release
    },
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    jest: true,
    browser: true,
    node: true,
  },
  plugins: ['react', 'jsx-a11y', 'prettier', 'react-hooks'],
  rules: {
    'prettier/prettier': [
      ERROR,
      {
        bracketSpacing: true,
        printWidth: 100,
        semi: true,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'all',
      },
    ],
    'function-paren-newline': OFF,
    'global-require': OFF,
    'import/no-unresolved': [ERROR, { caseSensitive: true }],
    'jsx-a11y/anchor-has-content': ERROR,
    'jsx-a11y/anchor-is-valid': [ERROR, { components: [] }],
    'jsx-a11y/aria-props': ERROR,
    'jsx-a11y/aria-proptypes': ERROR,
    'jsx-a11y/aria-role': ERROR,
    'jsx-a11y/aria-unsupported-elements': ERROR,
    'jsx-a11y/click-events-have-key-events': ERROR,
    'jsx-a11y/heading-has-content': ERROR,
    'jsx-a11y/img-redundant-alt': ERROR,
    'jsx-a11y/label-has-for': ERROR,
    'jsx-a11y/lang': ERROR,
    'jsx-a11y/no-onchange': ERROR,
    'jsx-a11y/no-static-element-interactions': ERROR,
    'jsx-a11y/role-has-required-aria-props': ERROR,
    'jsx-a11y/role-supports-aria-props': ERROR,
    'max-len': ERROR,
    'no-debugger': WARN,
    'no-unused-vars': [ERROR, { ignoreRestSiblings: true }],
    'react-hooks/exhaustive-deps': ERROR,
    'react-hooks/rules-of-hooks': ERROR,
    'react/destructuring-assignment': OFF,
    'react/jsx-filename-extension': [WARN, { extensions: ['.js', '.jsx'] }],
    'react/jsx-props-no-spreading': OFF,
  },
  overrides: [
    {
      files: ['setupProxy.js'],
      rules: {
        'func-names': OFF,
      },
    },
  ],
  globals: {
    expect: true,
    PRODUCTION: true,
    VERSION: true,
  },
};
