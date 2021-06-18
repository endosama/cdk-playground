module.exports = {
  plugins: [
    "json",
    "@typescript-eslint",
    "eslint-comments",
    "jest",
    "promise",
    "prettier",
  ],
  extends: [
    "airbnb-typescript/base",
    "plugin:@typescript-eslint/recommended",
    "plugin:eslint-comments/recommended",
    "plugin:promise/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
    "plugin:jest/recommended",
    "plugin:@btransport/recommended",
  ],
};