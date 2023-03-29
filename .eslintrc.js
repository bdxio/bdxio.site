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
    "vue/multi-word-component-names": OFF,
    "keyword-spacing": [2, { "before": true, "after": true }],
  },
};
