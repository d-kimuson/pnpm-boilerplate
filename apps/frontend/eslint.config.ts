import { react } from "@pnpm-boilerplate/eslint-config/react"
import { typescript } from "@pnpm-boilerplate/eslint-config/typescript"
import type { FlatConfig } from "@typescript-eslint/utils/ts-eslint"

const eslintConfig: FlatConfig.ConfigArray = [
  ...typescript(import.meta.dirname, {
    tsconfigPaths: ["./tsconfig.src.json", "./tsconfig.config.json"],
  }),
  ...react(),
]

export default eslintConfig
