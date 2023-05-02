import React, { useState, useEffect } from "react";

export default function Animes() {
  const [isLoading, setIsLoading] = useState(true);
  const [animes, setAnimes] = useState([{}]);
  const message = "Hello, world!";

  const animeArray = [{ name: "Naruto", status: "En curso" }];

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
            return (
              <div>
                <div>Name: {e.name}</div>
                <div>Status: {e.status}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
