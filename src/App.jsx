import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import PermissionsPage from "./admin/permissions/PermissionsPage";
import Dashboard from "./admin/dashboard/Dashboard";
import store from "./admin/store";
import RolesPage from "./admin/roles/RolesPage";
import SettingsPage from "./admin/settings/SettingsPage";
import UsersPage from "./admin/users/UsersPage";
import ConsumersPage from "./admin/consumers/ConsumersPage";
import StructurePage from "./admin/structures/StructuresPage";

const router = createBrowserRouter([
  {
    element: <Dashboard search={false} index={0} />,
    path: "/",
  },
  {
    path: "/users",
    element: <UsersPage index={1} />,
  },
  {
    path: "/consumers",
    element: <ConsumersPage index={2} />,
  },
  {
    path: "/structures",
    element: <StructurePage index={3} />,
  },
  {
    path: "/roles",
    element: <RolesPage index={4} />,
  },
  {
    path: "/permissions",
    element: <PermissionsPage index={5} />,
  },
  {
    path: "/settings",
    element: <SettingsPage index={6} />,
  },
]);

localStorage.setItem(
  "token",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzExNTg5NDU1LCJpYXQiOjE3MTE1NjA2NTUsImp0aSI6ImRlZDc1YjMzNWI5MTQwOGU4MGUyY2NkMTZlN2YxYWI4IiwidXNlcl9pZCI6MjB9.k8lCS5IbfqOrz6YKFUHp1dOh2wNC4aDwnQZIKo5fBD0"
);
localStorage.setItem(
  "refreshToken",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcxMjA3OTA1NSwiaWF0IjoxNzExNTYwNjU1LCJqdGkiOiI0ODFjNTA4NDNkZGI0OGE2YjJlNWU0NzE0NzhmOGY1YyIsInVzZXJfaWQiOjIwfQ.zvJDaJliYBOwLWhRpD5HordsN0CEWdnzO6z4ljnNTB4"
);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
