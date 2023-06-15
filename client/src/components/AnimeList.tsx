import React, { useState, useEffect } from "react";
import AnimeCard from "./AnimeCard";
import Anime from "../types/anime";

export default function AnimeList() {
  const [isLoading, setIsLoading] = useState(true);
  const [animes, setAnimes] = useState<Anime[]>([]);

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
      <div className="flex justify-center items-center w-full h-full">
        <h3>Loading...</h3>
      </div>
    );
  } else {
    return (
      <div className="flex justify-center items-center w-full h-full">
        <div className="flex w-4/5 p-2 justify-center bg-neutral-700">
          <ul className="grid grid-cols-6 gap-2">
            {animes.map((e: Anime) => {
              return <AnimeCard key={e.id} data={e} />;
            })}
          </ul>
        </div>
      </div>
    );
  }
}
