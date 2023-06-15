import React, { useState, useEffect } from "react";
import Anime from "../types/anime";
import { Link } from "react-router-dom";

export default function AnimeCard(props: any) {
  const element: Anime = props.data;

  return (
    <Link to={"/edit-anime/" + element.id}>
      <li className="rounded flex flex-col overflow-hidden shadow-lg bg-neutral-500 cursor-pointer">
        <div className="flex flex-row bg-neutral-600 w-full justify-center">
          <img
            className="w-4/5"
            src="/img_example.jpg"
            alt="Sunset in the mountains"
          ></img>
        </div>
        <div className="px-6 pb-4 space-y-4">
          <div className="pt-4 font-bold text-xl whitespace-nowrap overflow-hidden">
            {element.name}
          </div>
        </div>
      </li>
    </Link>
  );
}
