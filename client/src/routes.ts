import { RouteObject } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddAnimesPage from "./pages/AddAnimesPage";
import EditAnimePage from "./pages/EditAnimePage";

const routes: RouteObject[] = [
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/add-animes",
    Component: AddAnimesPage,
  },
  {
    path: "/edit-anime/:id",
    Component: EditAnimePage,
  },
];

export default routes;
