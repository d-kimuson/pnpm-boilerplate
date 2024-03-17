// @ts-check
import { context, build } from "esbuild"

/**
 * @type {import('esbuild').BuildOptions}
 */
const config = {
  entryPoints: ["src/index.ts"],
  bundle: true,
  outdir: "dist",
  target: "es2022",
  minify: true,
  sourcemap: true,
}

if (process.env.WATCH === "true") {
  const ctx = await context(config)
  await ctx.watch()
} else {
  await build(config)
}
