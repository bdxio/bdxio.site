module.exports = {
  root: true,
  extends: ["@nuxt/eslint-config"],
  rules: {
    "quotes": ["error", "double"],
    "comma-dangle": ["error", "always-multiline"],
    "vue/multi-word-component-names": "off",
  },
};
