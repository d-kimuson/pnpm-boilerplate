import { pathsToModuleNameMapper } from "ts-jest";
import { readConfigFile, parseJsonConfigFileContent, sys } from "typescript";
import type { Config } from "jest";

const configFile = readConfigFile("./tsconfig.src.json", sys.readFile);
if (typeof configFile.error !== "undefined") {
  throw new Error(`Failed to load tsconfig: ${configFile.error}`);
}

const { options } = parseJsonConfigFileContent(
  configFile.config,
  {
    fileExists: sys.fileExists,
    readFile: sys.readFile,
    readDirectory: sys.readDirectory,
    useCaseSensitiveFileNames: true,
  },
  __dirname
);

export const baseConfig = {
  verbose: true,
  roots: ["<rootDir>"],
  transform: {
    "^.+\\.(ts|tsx)$": ["@swc/jest", {}],
  },
  moduleNameMapper: pathsToModuleNameMapper(options.paths ?? {}, {
    prefix: "<rootDir>",
  }),
  setupFilesAfterEnv: ["jest-extended/all", "./src/test/setup/retry.ts"],
} satisfies Config;
