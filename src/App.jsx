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
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzExNDc5NzU4LCJpYXQiOjE3MTE0NzI1NTgsImp0aSI6IjAzM2I0MjQ1YmNlNDQ2NzZiOTVmOWU2MTlkMTQ3NmU4IiwidXNlcl9pZCI6Nn0.muM8YZVGfawiuwJXHzRo4v2Sl04RdloDb8Vnjgfa3ms"
);
localStorage.setItem(
  "refreshToken",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcxMTU1ODk1OCwiaWF0IjoxNzExNDcyNTU4LCJqdGkiOiI2YTc3OGM2OTgxNjM0YWMwOWM5NjIzZTBlMzcwMTQwOCIsInVzZXJfaWQiOjZ9.U5778EZ65-YFX7pmGawWDgD0DX6PhBA460x9aTO0ax0"
);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
