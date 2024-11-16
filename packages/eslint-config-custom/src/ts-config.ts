// @ts-check
import { FlatConfig } from "@typescript-eslint/utils/ts-eslint"
import tsEslint from "typescript-eslint"
// @ts-expect-error -- 型定義が提供されていない
import importPlugin from "eslint-plugin-import"

export const tsConfig = (
  rootDir: string,
  tsconfigFiles: ReadonlyArray<string> = ["tsconfig.json"]
): FlatConfig.ConfigArray =>
  tsEslint.config(
    // Config
    ...tsEslint.configs.strictTypeChecked,
    {
      files: ["**/*.?(c|m)ts?(x)"],
      plugins: {
        import: importPlugin,
      },
      settings: {
        /**
         * @see https://github.com/import-js/eslint-plugin-import/issues/2556#issuecomment-1419518561
         */
        "import/parsers": {
          "@typescript-eslint/parser": [".ts", ".tsx"],
        },
        "import/resolver": {
          typescript: {
            project: [...tsconfigFiles],
            alwaysTryTypes: true,
          },
        },
      },
      languageOptions: {
        parserOptions: {
          project: [...tsconfigFiles],
          tsconfigRootDir: rootDir,
        },
      },
    },

    // Rules
    {
      files: ["**/*.?(c|m)ts?(x)"],
      rules: {
        "@typescript-eslint/no-unused-expressions": "off", // なんかこいついると動かないので off る
        "@typescript-eslint/no-floating-promises": [
          "error",
          { ignoreIIFE: true },
        ],
        "@typescript-eslint/no-misused-promises": "error",
        "@typescript-eslint/consistent-type-imports": "error",
        "@typescript-eslint/consistent-type-assertions": [
          "error",
          {
            assertionStyle: "never",
          },
        ],
        "@typescript-eslint/no-unused-vars": [
          "warn",
          {
            varsIgnorePattern: "^_",
            argsIgnorePattern: "^_",
            args: "after-used",
          },
        ],
        "@typescript-eslint/ban-ts-comment": [
          "error",
          {
            "ts-expect-error": "allow-with-description",
            "ts-ignore": true,
            "ts-nocheck": true,
            "ts-check": false,
            minimumDescriptionLength: 1,
          },
        ],
        "@typescript-eslint/prefer-ts-expect-error": "error",
        "@typescript-eslint/no-non-null-assertion": "error",
        "@typescript-eslint/prefer-nullish-coalescing": "error",
        "@typescript-eslint/no-explicit-any": ["error"],
        "@typescript-eslint/consistent-type-definitions": ["error", "type"],
        "@typescript-eslint/method-signature-style": ["error", "property"],
        "@typescript-eslint/prefer-for-of": "error",
        "@typescript-eslint/no-unnecessary-condition": "error",
        "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
      },
    }
  )
