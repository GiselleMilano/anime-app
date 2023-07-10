import React, { useState, useEffect } from "react";
import AnimeCard from "./AnimeCard";
import Anime from "../types/anime";

export default function AnimeList() {
  const [isLoading, setIsLoading] = useState(true);
  const [animes, setAnimes] = useState<Anime[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/animes")
      .then((response) => response.json())
      .then((animesArray) => {
        setAnimes(animesArray);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <h3>Loading...</h3>;
  } else {
    return (
      <ul className="grid grid-cols-6 gap-2">
        {animes.map((e: Anime) => {
          return <AnimeCard key={e.id} data={e} />;
        })}
      </ul>
    );
  }
}
