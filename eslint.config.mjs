import globals from "globals";
import pluginJs from "@eslint/js";
import tsEslintPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import pluginReact from "eslint-plugin-react";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      react: pluginReact,
      "@typescript-eslint": tsEslintPlugin,
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...tsEslintPlugin.configs.recommended.rules,
      ...pluginReact.configs.recommended.rules,
    },
  },
];