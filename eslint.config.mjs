// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt()
  .prepend()
  .override('nuxt/vue/rules', {
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/attribute-hyphenation': 'off',
      'vue/first-attribute-linebreak': 'off',
    },
  })
  .override('nuxt/vue/single-root', {
    rules: {
      'vue/no-multiple-template-root': 'off',
    },
  })
  .override('nuxt/typescript/rules', {
    rules: {
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          caughtErrors: 'none',
        },
      ],
    },
  });
