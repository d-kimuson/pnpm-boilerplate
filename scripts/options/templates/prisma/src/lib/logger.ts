import { AsyncLocalStorage } from "node:async_hooks";
import { ulid } from "ulid";

export type ILogger = {
  log: (code: string, data: Record<string, unknown>) => void;
  warn: (code: string, data: Record<string, unknown> | Error) => void;
  error: (code: string, data: Record<string, unknown> | Error) => void;
};

export const contextIdStorage = new AsyncLocalStorage<string>();

export const runWithContext = (fn: () => Promise<void>) => {
  const contextId = ulid();

  contextIdStorage
    .run(contextId, async (): Promise<void> => {
      await fn();
    })
    .catch((error) => {
      throw error;
    });
};

export const getcontextId = (): string | undefined =>
  contextIdStorage.getStore();

export const createLogger = (name: string): ILogger => {
  return {
    log: (code, data) => {
      console.log({ code, name, contextId: getcontextId(), ...data });
    },
    warn: (code, data) => {
      console.warn({ code, name, contextId: getcontextId(), ...data });
    },
    error: (code, data) => {
      console.error({ code, name, contextId: getcontextId(), ...data });
    },
  };
};

export const enableUnhandledRejectionLogger = (logger: ILogger) => {
  process.on("unhandledRejection", (reason) => {
    logger.error("unhandledRejection", {
      code: "unhandledRejection",
      reason: JSON.parse(
        reason instanceof Error
          ? JSON.stringify(reason, Object.getOwnPropertyNames(reason))
          : "{}"
      ),
    });
  });
};

export const enableUncaughtExceptionLogger = (logger: ILogger) => {
  process.on("uncaughtException", (reason) => {
    logger.error("uncaughtException", {
      code: "uncaughtException",
      reason: JSON.parse(
        JSON.stringify(reason, Object.getOwnPropertyNames(reason))
      ),
    });
    process.abort();
  });
};
