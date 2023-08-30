import React, { ChangeEvent, useEffect, useState } from "react";
import AnimeType from "../types/anime";
import { useParams } from "react-router-dom";
import SelectStatus from "./SelectStatus";
import ListCategories from "./ListCategories";
import { callAPI } from "../utils/callAPI";
import Status from "../types/status";
import Category from "../types/category";

export default function Anime(anime: AnimeType) {
  const [isLoading, setIsLoading] = useState(true);
  const [animeData, setAnimeData] = useState<AnimeType | null>(null);
  const [selectOptions, setSelectOptions] = useState<Status[]>([]);
  const [categories, setCategories] = useState<Category[]>();
  const [selectValue, setSelectValue] = useState<number>(0);

  const { id } = useParams();

  useEffect(() => {
    const callback = async () => {
      const animeJSON: AnimeType = await callAPI("/animes/", id, "GET", {});
      const statusJSON: Status[] = await callAPI("/status/", null, "GET", {});

      if (animeJSON != null) {
        setAnimeData(animeJSON);
      }
      if (animeJSON.status != null) {
        setSelectValue(animeJSON.status);
      }
      if (statusJSON != null) {
        setSelectOptions(statusJSON);
      }

      const fetchCategory = async (id: number) => {
        const categoriesJSON = await callAPI("/categories/", id, "GET", {});
        return categoriesJSON;
      };

      const callbackCategories = async () => {
        const categoriesPromises = animeJSON.categories.map((id: number) =>
          fetchCategory(id)
        );
        const categories = await Promise.all(categoriesPromises);
        setCategories(categories);
      };

      callbackCategories();
    };
    callback();

    setIsLoading(false);
  }, []);

  const onSelectChange = (value: number) => {
    console.log("se llamo al onSelectChange del padre, el value es: " + value);
    setSelectValue(value);
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
              <div className="font-bold text-xl mb-2">
                {animeData != null ? animeData.name : null}
              </div>
              <div className="text-xl">
                Status:{" "}
                <SelectStatus
                  currentValue={Number(selectValue)}
                  options={selectOptions}
                  onChange={onSelectChange}
                />
              </div>
              <div className="text-xl mt-2 flex-wrap">
                Synopsis:{" "}
                <p className="text-sm flex-wrap pl-2 mt-2">
                  {animeData != null ? animeData.description : null}
                </p>
              </div>
              <div className="mt-2">
                <p className="text-xl">Categories:</p>
                <ListCategories categories={categories!} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
