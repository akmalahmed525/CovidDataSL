module.exports = {
  root: true,
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module",
    allowImportExportEverywhere: false,
    ecmaFeatures: {
      classes: true,
      jsx: true
    }
  },
  extends: [
    "airbnb",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:jest/recommended",
    "plugin:flowtype/recommended"
  ],
  plugins: ["jsx-a11y", "import", "flowtype"],
  rules: {
    "no-new": "off",
    "no-shadow": "off",
    "global-require": "off",
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": ["off", { devDependencies: true }],
    "react/prefer-stateless-function": "off",
    "react/jsx-filename-extension": ["error", { extensions: [".js", ".jsx"] }],
    "react/jsx-props-no-spreading": "off",
    "react/jsx-closing-bracket-location": "off",
    "jest/expect-expect": "off",
    "no-nested-ternary": "off",
    "react/destructuring-assignment": "off",
    "react/jsx-wrap-multilines": "off"
  }
};