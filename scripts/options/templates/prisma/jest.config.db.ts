import type { Config } from "jest";
import { baseConfig } from "./jest.config.base";

const config = {
  ...baseConfig,
  testMatch: [
    "**/repositories/**/*.spec.ts",
    // FIXME
  ],
  setupFilesAfterEnv: [
    ...baseConfig.setupFilesAfterEnv,
    "./src/test/setup/separate-db-per-worker.ts",
    "./src/test/setup/prisma.ts",
    "./src/test/setup/reset-table.ts",
  ],
} satisfies Config;

export default config;
