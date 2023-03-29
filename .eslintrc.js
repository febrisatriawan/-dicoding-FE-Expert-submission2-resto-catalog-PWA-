
module.exports = {
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  extends: "airbnb-base",
  parserOptions: {
    ecmaVersion: 13,
    sourceType: "module",
  },
  rules: {
    "no-console": "off",
  },
};