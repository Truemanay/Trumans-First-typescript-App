module.exports = {
  ignorePatterns: ["src/components/generated", "**/__mocks__/*"],
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  extends: [
    "plugin:@typescript-eslint/recommended", // uses typescript-specific linting rules
    "plugin:react/recommended", // uses react-specific linting rules
    "plugin:prettier/recommended", // enables eslint-plugin-prettier and eslint-config-prettier
    "prettier/react", // disables react-specific linting rules that conflict with prettier
    // local added
    "eslint:recommended",
    "@react-native-community",
    "airbnb",
    "prettier",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
    "prettier/babel",
    "prettier/react",
    "prettier/standard",
    "plugin:react-native/all",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
    project: "./tsconfig.json",
    tsconfigRootDir: "./",
  },
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    "no-use-before-define": "off",
    "react/forbid-prop-types": "error",
    "@typescript-eslint/indent": ["error", 2],
    "@typescript-eslint/no-explicit-any": 1,
    // added
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
    "prefer-destructuring": [
      2,
      {
        array: false,
        object: true,
      },
    ],
    "import/prefer-default-export": 0,
    "react/jsx-props-no-spreading": 0,
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", ".tsx"] },
    ],
    "import/extensions": 0,
    "import/no-unresolved": 0,
    camelcase: "off",
    "@typescript-eslint/no-var-requires": 0,
    "react-native/no-unused-styles": 1,
    "@typescript-eslint/no-unused-vars": 1,
    "react/proptypes": 0,
    "react/prop-types": 0,
    "typescript-eslint/ban-types": 0,
    "react-native/split-platform-components": 2,
    "react-native/no-inline-styles": 2,
    "react-native/no-color-literals": 2,
    "react-native/no-raw-text": 2,
    "react-native/no-single-element-style-arrays": 2,
    "react-native/sort-styles": 2,
    "sort-imports": [
      "error",
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
      },
    ],
    "prettier/prettier": "error",
  },
  plugins: [
    "react",
    "react-native",
    // added
    "@typescript-eslint",
    "prettier",
    "babel",
    "standard",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    "react-native/react-native": true,
    browser: true,
    es6: true,
  },
};
