import { PrismaClient } from "@prisma/client";
import Category from "../types/category";
const prisma = new PrismaClient();

export async function getCategories() {
  const categories = await prisma.category.findMany();
  return categories;
}

export async function createCategory(categoryData: Category) {
  await prisma.category.create({
    data: {
      label: categoryData.label,
    },
  });
}

export async function getCategoryById(id: number) {
  const result = await prisma.category.findUnique({
    where: {
      id: id,
    },
  });
  return result;
}
