import React from "react";
import { RouteProps } from "react-router-dom";
import Home from "./pages/Home";
import AddAnimes from "./pages/AddAnimes";

const routes: RouteProps[] = [
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/add-animes",
    Component: AddAnimes,
  },
];

export default routes;
