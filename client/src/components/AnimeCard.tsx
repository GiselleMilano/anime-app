import React, { useState, useEffect } from "react";
import Anime from "../types/anime";
import Category from "../types/category";
import { Link } from "react-router-dom";

export default function AnimeCard(props: any) {
  const element: Anime = props.data;

  return (
    <Link to={"/edit-anime/" + element.id}>
      <li
        className="max-w-sm rounded flex flex-col overflow-hidden shadow-lg bg-neutral-500 cursor-pointer"
        style={{ width: "230px" }}
      >
        <div className="flex flex-row bg-neutral-600 w-full justify-center">
          <img
            className="w-48"
            src="/img_example.jpg"
            alt="Sunset in the mountains"
          ></img>
        </div>
        <div className="px-6 space-y-4">
          <div className="pt-4 font-bold text-xl whitespace-nowrap overflow-hidden">
            {element.name}
          </div>
          <ul className="pb-2">
            {element.categories.map((c: Category) => {
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
      </li>
    </Link>
  );
}
