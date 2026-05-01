import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt([
  {
    files: ['**/*.vue'],
    rules: {
      'vue/no-multiple-template-root': 'off',
      'vue/html-self-closing': 'off',
      'vue/no-mutating-props': 'warn',
      'vue/multi-word-component-names': 'warn'
    }
  }
])
