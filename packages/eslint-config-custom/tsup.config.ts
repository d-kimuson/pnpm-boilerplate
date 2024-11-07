import { defineConfig } from "tsup"

export default defineConfig({
  entry: ["src/js-config.ts", "src/ts-config.ts"],
  dts: true,
  sourcemap: "inline",
  target: "esnext",
  format: ["esm", "cjs"],
  tsconfig: "tsconfig.json",
  bundle: false,
  external: [],
})
