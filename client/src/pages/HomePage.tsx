import React from "react";
import AnimeList from "../components/AnimeList.tsx";
import NavBar from "../components/NavBar.tsx";
import Search from "../components/Search.tsx";

export default function Home() {
  return (
    <>
      <NavBar pageSelected={"anime-list"} />
      <div className="bg-neutral-800 flex justify-center items-center w-full h-full mb-10 mt-10">
        <div className="flex w-4/5 p-2 justify-center flex-col bg-neutral-700 pb-10 rounded-lg">
          <div className="flex justify-center items-center flex-col w-full h-full pb-4">
            Agregar Nuevos Animes
          </div>
          <Search />
        </div>
      </div>
      <div className="rounded-lg flex justify-center items-center w-full h-full">
        <div className="flex w-4/5 p-2 justify-center bg-neutral-700 rounded-lg">
          <AnimeList />
        </div>
      </div>
    </>
  );
}
