import { Prisma } from "@prisma/client";
import { prisma } from "~/lib/prisma/client";

const skipForeignKeyChecks = async (callback: () => Promise<void>) => {
  await prisma.$executeRaw`SET FOREIGN_KEY_CHECKS = 0;`;
  await callback();
  await prisma.$executeRaw`SET FOREIGN_KEY_CHECKS = 1;`;
};

const resetTable = async () => {
  await skipForeignKeyChecks(async () => {
    const tableNames = Prisma.dmmf.datamodel.models.map(({ name }) => name);

    for (const tableName of tableNames) {
      await prisma.$executeRawUnsafe(`TRUNCATE ${tableName};`);
    }
  });
};

beforeEach(async () => {
  await resetTable();
});
