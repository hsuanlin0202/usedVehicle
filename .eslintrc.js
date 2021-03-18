module.exports = {
  env: { browser: true, es2021: true },
  extends: ["plugin:react/recommended", "airbnb"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2021,
    //ecmaFeatures: { jsx: true },
    //ecmaVersion: 12,
    //sourceType: "module",
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["react", "@typescript-eslint"],
  rules: {},
};
