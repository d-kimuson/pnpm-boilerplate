import { jsConfig } from "eslint-config/js-config"
import { tsConfig } from "eslint-config/ts-config"
import type { FlatConfig } from "@typescript-eslint/utils/ts-eslint"

const eslintConfig: FlatConfig.ConfigArray = [
  {
    ignores: ["**/*.?(c|m)js?(x)"],
  },
  ...jsConfig,
  ...tsConfig(import.meta.dirname, [
    "tsconfig.src.json",
    "tsconfig.config.json",
  ]),
]

export default eslintConfig
