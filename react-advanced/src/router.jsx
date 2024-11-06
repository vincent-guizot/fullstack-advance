import { createBrowserRouter } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Bookmark from "./pages/Bookmark";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/", // http://localhost:5173/
        element: <Home />,
      },
      {
        path: "/recipes", // http://localhost:5173/about
        element: <Recipes />,
      },
      {
        path: "/bookmarks/:id", // http://localhost:5173/people
        element: <Bookmark />,
      },
    ],
  },
]);

export default router;
