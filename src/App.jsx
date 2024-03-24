import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Layout from "./admin/Layout";
import Users from "./admin/users/Users";
import Consumers from "./admin/consumers/Consumers";
import Structures from "./admin/structures/Structures";
import Permissions from "./admin/permissions/Permissions";
import Roles from "./admin/roles/Roles";
import Dashboard from "./admin/dashboard/Dashboard";
import store from "./admin/store";
import SettingsPage from "./admin/settings/SettingsPage";
const router = createBrowserRouter([
  {
    element: <Dashboard />,
    path: "/",
  },
  {
    element: <SettingsPage />,
    path: "/settings",
  },

  {
    element: <Layout search={true} />,
    children: [
      { element: <Users />, path: "/users" },
      { element: <Consumers />, path: "/consumers" },
      { element: <Structures />, path: "/structures" },
      { element: <Roles />, path: "/roles" },
      { element: <Permissions />, path: "/permissions" },
    ],
  },
]);
function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
