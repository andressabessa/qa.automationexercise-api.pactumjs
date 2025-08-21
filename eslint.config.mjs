import { defineConfig } from "eslint/config";
import globals from "globals";
import mocha from "eslint-plugin-mocha";
import prettierPlugin from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier/flat";

export default defineConfig([
  {
    files: ["**/*.js"],
    ignores: ["node_modules/**", "coverage/**"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "commonjs",
      globals: {
        ...globals.node,
        ...globals.mocha,
      },
    },
    plugins: {
      mocha,
      prettier: prettierPlugin,
    },
    rules: {
      "no-undef": "error",
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "mocha/no-exclusive-tests": "error",
      "prettier/prettier": "error",
      semi: ["error", "never"],
      "no-extra-semi": "error",
    },
  },
  eslintConfigPrettier,
]);
