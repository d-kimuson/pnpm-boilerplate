import { prisma } from "~/lib/prisma/client";
import { initialize } from "../fabbrica/generated/index";

beforeAll(async () => {
  initialize({
    prisma,
  });
});

afterAll(async () => {
  await prisma.$disconnect();
});
