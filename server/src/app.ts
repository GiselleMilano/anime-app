import express from "express";
import cors from "cors";
import Anime from "./types/anime";
import {
  getAnimes,
  createAnime,
  createCategory,
  getCategories,
  createStatus,
  getStatuses,
} from "./repositories/myAnimeDB";
import { Category } from "@prisma/client";
import Status from "./types/status";
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server running");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

app.get("/animes", async (req, res) => {
  const animes: Anime[] = await getAnimes();
  res.json(animes).status(200);
});

app.post("/animes", async (req, res) => {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.sendStatus(500);
  } else {
    const animeData: Anime = req.body;
    createAnime(animeData);
    const animes: Anime[] = await getAnimes();
    res.status(200).json(animes);
  }
});

app.get("/categories", async (req, res) => {
  const categories: Category[] = await getCategories();
  res.json(categories).status(200);
});

app.post("/categories", async (req, res) => {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.sendStatus(500);
  } else {
    const categoryData: Category = req.body;
    createCategory(categoryData);
    const categories: Category[] = await getCategories();
    res.status(200).json(categories);
  }
});

app.get("/status", async (req, res) => {
  const status: Status[] = await getStatuses();
  res.json(status).status(200);
});

app.post("/status", async (req, res) => {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.sendStatus(500);
  } else {
    const statusData: Status = req.body;
    createStatus(statusData);
    const statuses: Status[] = await getStatuses();
    res.status(200).json(statuses);
  }
});
