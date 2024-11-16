import { jsConfig } from "eslint-config-custom/js-config"
import { tsConfig } from "eslint-config-custom/ts-config"
import type { FlatConfig } from "@typescript-eslint/utils/ts-eslint"

const eslintConfig: FlatConfig.ConfigArray = [
  {
    ignores: ["**/*.?(c|m)js?(x)", "dist", "tsup.config.ts"],
  },
  ...jsConfig,
  ...tsConfig(import.meta.dirname, [
    "tsconfig.src.json",
    "tsconfig.config.json",
  ]),
  {
    files: ["**/*.test.ts"],
    rules: {
      "@typescript-eslint/consistent-type-assertions": ["off"],
      "@typescript-eslint/no-unsafe-call": ["off"],
      "@typescript-eslint/no-unsafe-member-access": ["off"],
    },
  },
]

export default eslintConfig
