import React from "react";
import Animes from "../components/Animes.tsx";
import NavBar from "../components/NavBar.tsx";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="flex justify-center flex-row">
        <h1 className="text-3xl font-bold underline">Este es el home!</h1>
        <Animes />
      </div>
    </>
  );
}
