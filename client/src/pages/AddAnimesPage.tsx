import React from "react";
import AddAnimes from "../components/AddAnimes";
import NavBar from "../components/NavBar";

export default function AddAnimesPage() {
  return (
    <div>
      <NavBar pageSelected={"add-animes"} />
      <AddAnimes />
    </div>
  );
}
