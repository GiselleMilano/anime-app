import React, { useState, useEffect } from "react";
import Anime from "../types/anime";

export default function AnimeCard(props: any) {
  const element: Anime = props.data;

  return (
    <div
      className="max-w-sm rounded flex flex-col overflow-hidden shadow-lg bg-neutral-600"
      onClick={props.onClick}
    >
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
        <div className="pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #photography
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #travel
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #winter
          </span>
        </div>
      </div>
    </div>
  );
}
