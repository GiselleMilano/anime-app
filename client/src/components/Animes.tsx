import React, { useState, useEffect } from "react";
import Anime from "./Anime";

export default function Animes() {
  const [isLoading, setIsLoading] = useState(true);
  const [animes, setAnimes] = useState([{}]);
  const animeArray = [
    { name: "Naruto", status: "En curso" },
    { name: "Shingeki No Kyojin", status: "En curso" },
  ];

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((dog) => {
        setAnimes(animeArray);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div>
        <h3>Cargando...</h3>
      </div>
    );
  } else {
    return (
      <div>
        <p>Componente Listado De Animes</p>
        <div>
          {animes.map((e) => {
            return <Anime data={e} />;
          })}
        </div>
      </div>
    );
  }
}
