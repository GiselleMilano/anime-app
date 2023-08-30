import { PrismaClient } from "@prisma/client";
import Status from "../types/status";
const prisma = new PrismaClient();

export async function getStatuses() {
  const statuses = await prisma.status.findMany();
  return statuses;
}

export async function createStatus(statusData: Status) {
  await prisma.status.create({
    data: {
      label: statusData.label,
    },
  });
}

export async function getStatusById(id: number) {
  const result = await prisma.status.findUnique({
    where: {
      id: id,
    },
  });
  return result;
}
