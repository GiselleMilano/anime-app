import React, { ChangeEvent, useEffect, useState } from "react";
import AnimeType from "../types/anime";
import { useParams } from "react-router-dom";
import Category from "../types/category";

export default function Anime(anime: AnimeType) {
  const [isLoading, setIsLoading] = useState(true);
  const [animeData, setAnimeData] = useState<AnimeType | null>(null);
  const [animeStatus, setAnimeStatus] = useState("");

  const { id } = useParams();

  // Eliminar y dejar el fetch del useEffect.
  const animeObj: AnimeType = {
    id: 1,
    name: "Shingeki No Kyojin",
    status: "in progress",
    description:
      "Muchos años atrás, la humanidad estuvo al borde de la extinción con la aparición de unas criaturas gigantes que devoraban a todas las personas. Huyendo, la humanidad consiguió sobrevivir en una ciudad fortificada de altas murallas que se ha convertido en el último reducto de la civilización contra los Titanes que campan a sus anchas por el mundo. Ahora esa paz está a punto de verse interrumpida por una cadena de acontecimientos que llevará a desvelar qué son los Titanes y cómo aparecieron.",
    categories: [
      { id: 1, label: "shonen" },
      { id: 2, label: "mistery" },
    ],
  };

  // sustituir por un fetch a la tabla status.
  const status = ["completed", "in progress", "not started"];

  useEffect(() => {
    // sustituir por un fetch a la tabla de animes agregados.
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((dog) => {
        setAnimeData(animeObj);
        setAnimeStatus(animeObj.status);
        setIsLoading(false);
      });
  }, []);

  const onSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    alert("el select cambio de valor a: " + event.target.value);
    setAnimeStatus(event.target.value);
  };

  if (isLoading) {
    return (
      <div className="w-full h-full flex justify-center items-center bg-neutral-800">
        <div className="flex bg-neutral-700 justify-center items-center">
          <div className="flex flex-row bg-neutral-700 p-4">Loading ...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex justify-center items-center bg-neutral-800">
      <div
        className="flex bg-neutral-700 justify-center items-center"
        style={{ width: "70%" }}
      >
        <div className="flex flex-row w-full bg-neutral-700 p-4">
          <div className="flex flex-row bg-cover rounded-t text-center overflow-hidden">
            <img
              className="w-58"
              src="/img_example.jpg"
              alt="Sunset in the mountains"
            ></img>
          </div>
          <div
            className="bg-neutral-700 p-4 flex flex-col justify-between leading-normal"
            style={{ width: "80%" }}
          >
            <div className="mb-8">
              <div className="font-bold text-xl mb-2">{animeData!.name}</div>
              <div className="text-xl">
                Status:{" "}
                <select
                  className="bg-neutral-600 cursor-pointer"
                  id="selectStatus"
                  onChange={onSelectChange}
                >
                  {status.map((s) =>
                    s == animeStatus ? (
                      <option value={s} selected>
                        <p className="text-sm pl-2">{s}</p>
                      </option>
                    ) : (
                      <option value={s}>
                        <p className="text-sm pl-2">{s}</p>
                      </option>
                    )
                  )}
                </select>
              </div>
              <div className="text-xl mt-2 flex-wrap">
                Synopsis:{" "}
                <p className="text-sm flex-wrap pl-2 mt-2">
                  {animeData!.description}
                </p>
              </div>
              <div className="mt-2">
                <p className="text-xl">Categories:</p>
                <ul className="mt-2 pl-2">
                  {animeData!.categories.map((c: Category) => {
                    return (
                      <li key={c.id} className="inline-block mb-2 mr-2">
                        <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                          {c.label}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
