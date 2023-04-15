const OFF = 0;
const ERROR = 2;

module.exports = {
  root: true,
  extends: ["@nuxt/eslint-config", "plugin:import/recommended", "plugin:import/typescript"],
  settings: {
    "import/resolver": {
      "alias": {
        map: [
          ["#imports", ".nuxt/imports.d.ts"],
          ["#components", ".nuxt/components.d.ts"],
          ["~/services", "./services"],
        ],
        "extensions": [".ts"],
      },
    },
  },
  rules: {
    /* General */
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
    "no-multiple-empty-lines": [ERROR, { "max": 1, "maxBOF": 0, "maxEOF": 0 }],
    "no-trailing-spaces": [ERROR, { "skipBlankLines": true }],
    "space-before-blocks": [ERROR, "always"],
    "import/order": [
      "error",
      {
        "groups": [
          ["builtin", "external"],
          ["internal", "parent","sibling"],
          "index",
          "type",
        ],
      },
    ],
    "import/newline-after-import": [ERROR, { "count": 1 }],
    "semi-spacing": ERROR,
    /* TypeScript*/
    "@typescript-eslint/consistent-type-imports": [ERROR, { "prefer": "type-imports" }],
    /* Vue */
    "vue/multi-word-component-names": OFF,
    "vue/no-multiple-template-root": OFF,
    "vue/attribute-hyphenation": OFF,
  },
};
