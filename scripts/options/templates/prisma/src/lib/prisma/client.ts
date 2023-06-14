import { PrismaClient } from "@prisma/client";
import { createLogger } from "../logger";

const prismaLogger = createLogger("prisma");

const isTest = process.env["JEST_WORKER_ID"] !== undefined;

export const prisma = (() => {
  const client = new PrismaClient({
    log: [
      {
        level: "query",
        emit: "event",
      },
      {
        level: "info",
        emit: "event",
      },
      {
        level: "warn",
        emit: "event",
      },
      {
        level: "error",
        emit: "event",
      },
    ],
  });

  if (!isTest) {
    client.$on("query", (e) => {
      prismaLogger.log("QUERY", e);
    });

    client.$on("info", (e) => {
      prismaLogger.log("INFO", e);
    });

    client.$on("warn", (e) => {
      prismaLogger.warn("WARN", e);
    });

    client.$on("error", (e) => {
      prismaLogger.error("ERROR", e);
    });
  }

  return client;
})();

export type PrismaClient = Omit<
  typeof prisma,
  "$connect" | "$on" | "$disconnect" | "$use"
>;

export type TransactionClient = Parameters<
  IPrismaClient["$transaction"]
>[0] extends (arg: infer I) => unknown
  ? I
  : never;
