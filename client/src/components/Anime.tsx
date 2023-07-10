import React, { ChangeEvent, useEffect, useState } from "react";
import AnimeType from "../types/anime";
import { useParams } from "react-router-dom";
import Category from "../types/category";
import Status from "../types/status";

export default function Anime(anime: AnimeType) {
  const [isLoading, setIsLoading] = useState(true);
  const [animeData, setAnimeData] = useState<AnimeType | null>(null);
  const [options, setOptions] = useState<Status[] | null>(null);
  const [value, setValue] = useState<number>(0);

  const { id } = useParams();

  useEffect(() => {
    Promise.all([
      fetch("http://localhost:3000/animes/" + id),
      fetch("http://localhost:3000/status"),
    ])
      .then(([resAnime, resStatus]) =>
        Promise.all([resAnime.json(), resStatus.json()])
      )
      .then(([animeObject, statusArray]) => {
        setAnimeData(animeObject);
        setOptions(statusArray);
        setValue(animeObject.status);
        setIsLoading(false);
      });
  }, []);

  const onSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setValue(Number(event.target.value));
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
                  value={value}
                  onChange={onSelectChange}
                >
                  <option value={0}>Select</option>
                  {options!.map((option) => (
                    <option value={option.id}>{option.label}</option>
                  ))}
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
