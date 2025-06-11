import { createBrowserRouter } from "react-router-dom";

import { Home } from "./pages/Home/index";
import { Sobre } from "./pages/Sobre/index";
import { NotFound } from "./pages/NotFound";

import { Layout } from "./components/Layout/Layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/sobre",
        element: <Sobre />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export { router };
