// @ts-check
import { context, build } from "esbuild"
import { readdirSync } from "node:fs"
import { resolve } from "node:path"

/** @type {(base: string) => Array<string>} */
const getEntryPoints = (base) => {
  const fileOrDirs = readdirSync(base, {
    withFileTypes: true,
  })

  const files = fileOrDirs
    .filter((fileOrDir) => fileOrDir.isFile())
    .map((file) => resolve(base, file.name))
  const dirs = fileOrDirs
    .filter((fileOrDir) => fileOrDir.isDirectory())
    .flatMap((dir) => getEntryPoints(resolve(base, dir.name)))

  return files.concat(dirs)
}

/**
 * @type {import('esbuild').BuildOptions}
 */
const config = {
  entryPoints: getEntryPoints("./src"),
  bundle: false,
  format: "esm",
  outdir: "dist",
  outExtension: { ".js": ".mjs" },
  target: "es2022",
}

if (process.env["WATCH"] === "true") {
  const ctx = await context(config)
  await ctx.watch()
} else {
  await build(config)
}
