import React, { useState, useEffect } from "react";
import AnimeCard from "./AnimeCard";
import Anime from "../types/anime";

export default function AnimeList() {
  const [isLoading, setIsLoading] = useState(true);
  const [animes, setAnimes] = useState<Anime[]>([]);

  const animeArray: Anime[] = [
    { id: 0, name: "Naruto", status: "En curso" },
    { id: 1, name: "Shingeki No Kyojin", status: "En curso" },
    { id: 2, name: "Bleach", status: "En curso" },
    { id: 3, name: "Kimetsu No Yaiba", status: "En curso" },
    { id: 4, name: "Boruto", status: "En curso" },
    { id: 5, name: "One Pice", status: "En curso" },
    { id: 6, name: "Kimi Ni Todoke", status: "En curso" },
    { id: 7, name: "Death Note", status: "En curso" },
    { id: 8, name: "Naruto Shippuden", status: "En curso" },
    { id: 9, name: "Inuyasha", status: "En curso" },
    { id: 10, name: "Kanikaku Kawaii", status: "En curso" },
    { id: 11, name: "Spy X Family", status: "En curso" },
    { id: 12, name: "One Puch Man", status: "En curso" },
  ];

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((dog) => {
        setAnimes(animeArray);
        console.log("cargado!");
        setIsLoading(false);
      });
  }, []);

  const handleClick = (id: number) => {
    console.log(
      "Se hizo clic en el componente padre, el id del item es: " + id
    );
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center w-full h-full">
        <h3>Loading...</h3>
      </div>
    );
  } else {
    return (
      <div className="flex justify-center items-center w-full h-full">
        <div
          className="flex flex-row gap-2 justify-start flex-wrap"
          style={{ width: "70%" }}
        >
          {animes.map((e: Anime) => {
            return <AnimeCard onClick={handleClick(e.id)} data={e} />;
          })}
        </div>
      </div>
    );
  }
}
