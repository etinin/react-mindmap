module.exports = {
  extends: 'airbnb-base',
  plugins: ['react'],

  env: { browser: true },
  globals: {
    ga: true,
    React: true,
    ReactDOM: true,
  },

  rules: {
    'react/jsx-uses-vars': 'error',
    'react/jsx-uses-react': 'error',
    "linebreak-style": 0
  },

  parserOptions: {
    ecmaFeatures: { jsx: true },
  },
};
