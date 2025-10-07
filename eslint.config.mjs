import eslintConfigPrettier from "eslint-config-prettier";

export default [
  {
    files: ["*.js", "*.jsx"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    env: {
      node: true,
      es2021: true,
      browser: true,
    },
    plugins: {
      prettier: "eslint-plugin-prettier",
    },
    extends: ["airbnb-base", "plugin:prettier/recommended"],
    rules: {
      "prettier/prettier": [
        "error",
        {
          semi: true,
          singleQuote: true,
          trailingComma: "all",
          printWidth: 80,
          tabWidth: 2,
          arrowParens: "always"
        }
      ],
      "no-console": "off"
    }
  },
];
