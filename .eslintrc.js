const OFF = 0;
const ERROR = 2;

module.exports = {
  root: true,
  extends: ["@nuxt/eslint-config"],
  rules: {
    "semi": [ERROR, "always"],
    "quotes": [ERROR, "double"],
    "indent": [ERROR, 2, {
      "SwitchCase": 1,
    }],
    "comma-dangle": [ERROR, "always-multiline"],
    "max-len": [ERROR, { "code": 120, "tabWidth": 2, "ignoreUrls": true, "ignoreStrings": true, "ignoreTemplateLiterals": true, "ignoreRegExpLiterals": true }],
    "keyword-spacing": [ERROR, { "before": true, "after": true }],
    "space-before-function-paren": [ERROR, {"anonymous": "always", "named": "never"}],
    "no-multi-spaces": [ERROR, { "ignoreEOLComments": true }],
    "no-multiple-empty-lines": [ERROR, { "max": 1, "maxEOF": 1 }],
    "no-trailing-spaces": [ERROR, { "skipBlankLines": true }],
    "space-before-blocks": [ERROR, "always"],
    "vue/multi-word-component-names": OFF,
    "vue/no-multiple-template-root": OFF,
    "vue/attribute-hyphenation": OFF,
  },
};
