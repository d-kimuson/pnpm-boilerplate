import type { Config } from "jest";
import { baseConfig } from "./jest.config.base";

const config = {
  ...baseConfig,
  testMatch: [
    // FIXME
  ],
} satisfies Config;

export default config;
