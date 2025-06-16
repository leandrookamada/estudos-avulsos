import { createBrowserRouter } from "react-router-dom";

import { Home } from "./pages/home/home";
import { Admin } from "./pages/admin/admin";
import { Login } from "./pages/login/login";
import { RedesSociais } from "./pages/redesSociais/redesSociais";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/:admin",
    element: <Admin />,
  },
  {
    path: "/:admin/redessociais",
    element: <RedesSociais />,
  },
]);

export { Router };
