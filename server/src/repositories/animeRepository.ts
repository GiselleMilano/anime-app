import { PrismaClient } from "@prisma/client";
import Anime from "../types/anime";
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

export async function getAnimeById(id: number) {
  const anime = await prisma.anime.findUnique({
    where: {
      id: id,
    },
  });
  return anime;
}
