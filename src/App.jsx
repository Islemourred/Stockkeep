import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./admin/Layout";
import Main from "./admin/dashboard/Main";
import Users from "./admin/users/Users";
import Consumers from "./admin/consumers/Consumers";
import Structures from "./admin/structures/Structures";
import Permissions from "./admin/permissions/Permissions";
import Roles from "./admin/roles/Roles";
import Settings from "./admin/settings/settings";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/consumers",
        element: <Consumers />,
      },
      {
        path: "/structures",
        element: <Structures />,
      },
      {
        path: "/roles",
        element: <Roles />,
      },
      {
        path: "/permissions",
        element: <Permissions />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
