import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Percursos from "../pages/Percursos";
import Arborismo from "../pages/Arborismo";
import About from "../pages/About";
import Contacts from "../pages/Contacts";
import Birthday from "../pages/Birthday";
import GroupsCompanies from "../pages/Groups&Companies";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/percursos",
        element: <Percursos />,
      },
      {
        path: "/arborismo",
        element: <Arborismo />,
      },
      {
        path: "/sobre",
        element: <About />,
      },
      {
        path: "/contactos",
        element: <Contacts />,
      },
      {
        path: "/aniversarios",
        element: <Birthday />,
      },
      {
        path: "/grupos&empresas",
        element: <GroupsCompanies />,
      },
    ],
  },
]);
