import { PrismaClient } from "@prisma/client";
import Anime from "../types/anime";
import Category from "../types/category";
import Status from "../types/status";
const prisma = new PrismaClient();

export async function getAnimes() {
  const animes = await prisma.anime.findMany();
  return animes;
}

export async function createAnime(animeData: Anime) {
  await prisma.anime.create({
    data: {
      name: animeData.name,
      description: animeData.description,
      status: animeData.status,
      categories: animeData.categories,
    },
  });
}

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
