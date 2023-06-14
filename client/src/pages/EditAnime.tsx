import React from "react";
import Anime from "../components/Anime";
import NavBar from "../components/NavBar";

export default function EditAnime() {
  return (
    <>
      <NavBar pageSelected={"none"} />
      <Anime />
    </>
  );
}
