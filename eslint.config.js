import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  { ignores: ["dist"] }, 
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020, 
      globals: globals.browser, 
      parserOptions: {
        ecmaVersion: "latest", 
        ecmaFeatures: { jsx: true },
        sourceType: "module", 
      },
    },
    settings: {
      react: { version: "detect" }, 
    },
    plugins: {
      react, 
      "react-hooks": reactHooks, 
      "react-refresh": reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules, // Base recommended JS rules
      ...react.configs.recommended.rules, // Base recommended React rules
      ...react.configs["jsx-runtime"].rules, // Recommended JSX runtime rules
      ...reactHooks.configs.recommended.rules, // Recommended React hooks rules
      "react/jsx-no-target-blank": "off", // Allow links with target="_blank" without rel="noreferrer"
      "react-refresh/only-export-components": [
        "warn", // Warn if non-components are exported
        { allowConstantExport: true }, // Allow constant exports
      ],
    },
  },
];
