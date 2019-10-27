const ERROR = true;
const OFF = null;

module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-idiomatic-order'],
  plugins: ['stylelint-scss'],
  rules: {
    indentation: 2,
    'string-quotes': 'single',
    'block-no-empty': OFF,
    'at-rule-no-unknown': OFF,
    'scss/at-rule-no-unknown': ERROR,
    'no-descending-specificity': OFF,
    'selector-pseudo-class-no-unknown': [
      ERROR,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
    'property-no-unknown': [
      ERROR,
      {
        ignoreProperties: ['composes'],
      },
    ],
  },
};
