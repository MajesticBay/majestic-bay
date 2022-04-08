module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    "react/react-in-jsx-scope": 0,
    "react/jsx-filename-extension": [0],
    "import/prefer-default-export": 0,
    "react/jsx-curly-brace-presence": 0,
    "react/jsx-boolean-value:": 0,
    "react/function-component-definition": 0,
    "arrow-body-style": 0,
    "react/no-unescaped-entities": 0,
    "react/prop-types": 0,
    "prefer-template": 0,
    "comma-dangle": 0,
    "react/no-array-index-key": 0,
    "react/jsx-one-expression-per-line": 0,
    "object-curly-newline": 0,
  }
};
