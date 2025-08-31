import js from "@eslint/js"
import globals from "globals"

export default [
  js.configs.recommended,

  {
    files: ["**/*.js"],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.es2021,
      },
    },
    rules: {
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "no-undef": "error",
    },
  },

  // 👇 aturan khusus untuk test file (Jest)
  {
    files: ["tests/**/*.js"],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
  },

  // 👇 aturan khusus untuk loadtest file (k6)
  {
    files: ["loadtest/**/*.js"],
    languageOptions: {
      globals: {
        __ENV: true,
      },
    },
  },
]

