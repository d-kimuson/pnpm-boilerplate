import { execSync } from "child_process";

const dbUrl = process.env["DATABASE_URL"];
const workerId = process.env["JEST_WORKER_ID"];

if (dbUrl === undefined) {
  throw new Error("環境変数 DATABASE_URL を設定してください");
}

if (workerId === undefined) {
  throw new Error("環境変数 JEST_WORKER_ID を設定してください");
}

const DATABASE_URL = `${dbUrl}-test-${workerId}`;
process.env["DATABASE_URL"] = DATABASE_URL;

beforeAll(() => {
  execSync("pnpm prisma migrate reset --force --skip-seed --skip-generate", {
    env: {
      ...process.env,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      DATABASE_URL,
    },
  });
});
