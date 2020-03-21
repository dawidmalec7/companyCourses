module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
   // "prettier",
    //"prettier/react"
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
   // "prettier"
  ],
  rules: {
    "linebreak-style": ["error", "windows"],
    "semi": 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    'react/jsx-props-no-spreading': 0,
    "react/forbid-prop-types": 0
    // "prettier/prettier": [
    //   "error", {
    //     "semi": false
    //   }
    // ]
  },
  parser: "babel-eslint"
};
