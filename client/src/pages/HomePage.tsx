import React from "react";
import AnimeList from "../components/AnimeList.tsx";
import NavBar from "../components/NavBar.tsx";

export default function Home() {
  return (
    <>
      <NavBar pageSelected={"anime-list"} />
      <AnimeList />
    </>
  );
}
