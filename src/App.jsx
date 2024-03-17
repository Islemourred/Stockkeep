import Layout from "./admin/Layout";
import Main from "./admin/dashboard/Main";
import Users from "./admin/users/Users";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

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
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
