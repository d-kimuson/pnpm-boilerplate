// @ts-check
import eslint from "@eslint/js"
import tsEslint from "typescript-eslint"

// @ts-expect-error -- 型定義が提供されていない
import importPlugin from "eslint-plugin-import"
import ununsedImports from "eslint-plugin-unused-imports"
import { FlatConfig } from "@typescript-eslint/utils/ts-eslint"

export const jsConfig: FlatConfig.ConfigArray = tsEslint.config(
  // Shared Config
  {
    files: ["**/*.?(c|m)js?(x)", "**/*.?(c|m)ts?(x)"],
    plugins: {
      "unused-imports": ununsedImports,
      import: importPlugin,
    },
    extends: [eslint.configs.recommended],
  },

  // JavaScript Only Config
  {
    files: ["**/*.?(c|m)js?(x)"],
    settings: {
      /**
       * @see https://github.com/import-js/eslint-plugin-import/issues/2556#issuecomment-1419518561
       */
      "import/parsers": {
        espree: [".js", ".cjs", ".mjs", ".jsx"],
      },
    },
  },

  // Rules
  {
    files: ["**/*.?(c|m)js?(x)", "**/*.?(c|m)ts?(x)"],
    rules: {
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "type",
            "internal",
            "parent",
            "index",
            "sibling",
            "object",
            "unknown",
          ],
          pathGroups: [
            {
              pattern: "~/**",
              group: "internal",
              position: "before",
            },
          ],
          alphabetize: {
            order: "asc",
          },
          "newlines-between": "never",
        },
      ],
    },
  }
)
