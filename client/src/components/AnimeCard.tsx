import React, { useState, useEffect } from "react";
import Anime from "../types/anime";
import Category from "../types/category";
import { Link } from "react-router-dom";

export default function AnimeCard(props: any) {
  const element: Anime = props.data;

  return (
    <Link to={"/edit-anime/" + element.id}>
      <li className="max-w-sm rounded flex flex-col overflow-hidden shadow-lg bg-neutral-600 cursor-pointer">
        <div className="flex flex-row bg-neutral-700 w-full justify-center">
          <img
            className="w-48"
            src="/img_example.jpg"
            alt="Sunset in the mountains"
          ></img>
        </div>
        <div className="px-6 space-y-4">
          <div className="pt-4">
            <div className="font-bold text-xl">{element.name}</div>
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
