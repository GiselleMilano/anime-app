import { RouteObject } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EditAnimePage from "./pages/EditAnimePage";

const routes: RouteObject[] = [
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/edit-anime/:id",
    Component: EditAnimePage,
  },
];

export default routes;
