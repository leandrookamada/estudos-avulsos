import { createBrowserRouter } from "react-router";

import Formulario from "./formulário";
import Cadastro from "./cadastro";

const Router = createBrowserRouter([
  {
    element: <Cadastro />,
    path: "/",
  },
  {
    element: <Formulario />,
    path: "/formulario",
  },
]);
export default Router;
