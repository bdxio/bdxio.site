module.exports = {
  root: true,
  extends: ["@nuxt/eslint-config"],
  rules: {
    "semi": ["error", "always"],
    "quotes": ["error", "double"],
    "comma-dangle": ["error", "always-multiline"],
    "max-len": ["error", { "code": 120, "tabWidth": 2,  "ignoreUrls": true, "ignoreStrings": true, "ignoreTemplateLiterals": true, "ignoreRegExpLiterals": true }],
    "vue/multi-word-component-names": "off",
  },
};
