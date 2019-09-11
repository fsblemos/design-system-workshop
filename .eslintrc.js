// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
  },
  env: {
    browser: true,
    jest: true,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.vue'],
      },
      webpack: {
        config: 'node_modules/@vue/cli-service/webpack.config.js',
      },
    },
  },
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  extends: ['contaazul', 'plugin:vue/strongly-recommended'],
  // required to lint *.vue files
  plugins: ['vue'],
  // add your custom rules here
  rules: {
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/html-closing-bracket-newline': ['error', {
      'multiline': 'never',
    }],
    'vue/max-attributes-per-line': ['error', {
      'singleline': 2,
      'multiline': {
        'max': 1,
        'allowFirstLine': false
      }
    }],
    'vue/html-self-closing': 'off',
    'vue/require-default-prop': 'off',
    'arrow-body-style': 'off',
    'implicit-arrow-linebreak': 'off',
  },
};
