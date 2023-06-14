import React, { useState, useEffect } from "react";
import AnimeCard from "./AnimeCard";
import Anime from "../types/anime";

export default function AnimeList() {
  const [isLoading, setIsLoading] = useState(true);
  const [animes, setAnimes] = useState<Anime[] | null>(null);

  // Eliminar cuando este pronto el fetch a la tabla de animes.
  const animeArray: Anime[] = [
    {
      id: 0,
      name: "Naruto",
      status: "sin comenzar",
      description: null,
      categories: [
        { id: 1, label: "shonen" },
        { id: 2, label: "comedy" },
      ],
    },
    {
      id: 1,
      name: "Shingeki No Kyojin",
      status: "en curso",
      description: null,
      categories: [
        { id: 1, label: "shonen" },
        { id: 2, label: "mistery" },
      ],
    },
    {
      id: 2,
      name: "Bleach",
      status: "completado",
      description: null,
      categories: [
        { id: 1, label: "shonen" },
        { id: 2, label: "adventure" },
      ],
    },
    {
      id: 3,
      name: "Kimetsu No Yaiba",
      status: "en curso",
      description: null,
      categories: [
        { id: 1, label: "shonen" },
        { id: 2, label: "drama" },
      ],
    },
  ];

  useEffect(() => {
    // sustituir por fetch a la tabla de animes agregados.
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((dog) => {
        setAnimes(animeArray);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center w-full h-full mt-4">
        <h3>Loading...</h3>
      </div>
    );
  } else {
    return (
      <div className="flex justify-center items-center w-full h-full mt-4">
        <ul
          className="flex flex-row gap-2 justify-start flex-wrap"
          style={{ width: "70%" }}
        >
          {animes.map((e: Anime) => {
            return <AnimeCard key={e.id} data={e} />;
          })}
        </ul>
      </div>
    );
  }
}
