import { defineConfig } from "tsup"

export default defineConfig({
  entry: ["src/index.ts"],
  dts: {
    compilerOptions: {
      composite: false,
    },
  },
  sourcemap: true,
  target: "esnext",
  format: ["esm", "cjs"],
  tsconfig: "tsconfig.src.json",
  external: [],
  clean: true,
})
