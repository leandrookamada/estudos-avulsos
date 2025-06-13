import { createBrowserRouter } from "react-router-dom";

import { Layout } from "./components/layout/Layout";
import { NotFound } from "./pages/notfound/nortfound";
import { Home } from "./pages/home/home";
import { Detail } from "./pages/detail/detail";

const Router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/detail/:Cripto",
        element: <Detail />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
export { Router };
