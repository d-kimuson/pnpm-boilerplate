import { defineConfig } from "tsup"

export default defineConfig({
  entry: ["src/index.ts"],
  dts: true,
  sourcemap: true,
  target: "esnext",
  format: ["esm", "cjs"],
  tsconfig: "tsconfig.build.json",
  external: [],
})
