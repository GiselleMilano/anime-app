import React from "react";
import { RouteProps } from "react-router-dom";
import Home from "./pages/Home";
import AddAnimes from "./pages/AddAnimes";
import EditAnime from "./pages/EditAnime";

const routes: RouteProps[] = [
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/add-animes",
    Component: AddAnimes,
  },
  {
    path: "/edit-anime/:id",
    Component: EditAnime,
  },
];

export default routes;
