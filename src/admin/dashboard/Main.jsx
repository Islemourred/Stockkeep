import Stats from "./Stats";
import GroupIcon from "@mui/icons-material/Group";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import HubOutlinedIcon from "@mui/icons-material/HubOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import Profile from "./Profile";
import Entreprise from "./Entreprise";
import { useEffect, useState } from "react";
import axios from "axios";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#ffff",
    },
  },
});

const accessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzExMDQ4MDI5LCJpYXQiOjE3MTEwNDA4MjksImp0aSI6IjA1ZjQ1ZjVjYTY2NDQ1NzdiZDUxODU3NDNiYzlkM2I5IiwidXNlcl9pZCI6MX0.DjopTwJSQHyw5k74xUMx7SkiMuh9tmq2JAdRn24__4o";
const refreshToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcxMTEyNzIyOSwiaWF0IjoxNzExMDQwODI5LCJqdGkiOiI3ZjY0MzA2NGJiNmU0Mzk5OWE4YTU1ODgxMGEzZWM3ZSIsInVzZXJfaWQiOjF9.cCqspQ5-dj6yJtyXaVvjwPepT-3CXQXGpJba7YmO1K8";

const config = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzExMTIzNDUyLCJpYXQiOjE3MTExMTYyNTIsImp0aSI6ImVmNTVmNTBlNmVlMTQ1NjA5NTBjNzU0NTdkNjRiYjIyIiwidXNlcl9pZCI6NH0.WZwYoUFVl0azwEQZG1EQfLDzbLiXwtqPutGLifHqmAM",
  },
};

function Main() {
  const [NumberOfUsers, setNumber0fUsers] = useState(0);
  const [NumberOfConsumers, setNumber0fConsumers] = useState(0);
  const [NumberOfStructures, setNumber0fStructures] = useState(0);
  const [NumberOfRoles, setNumber0fRoles] = useState(0);
  const [NumberOfPermissions, setNumber0fPermissions] = useState(0);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/user/listcreate/", config)
      .then((response) => {
        setNumber0fUsers(response.data.length);
      })
      .catch((error) => console.log(error));

    axios
      .get("http://127.0.0.1:8000/consom/listcreate/", config)
      .then((response) => setNumber0fConsumers(response.data.length))
      .catch((error) => console.log(error));

    axios
      .get("http://127.0.0.1:8000/role/listcreate/", config)
      .then((response) => {
        setNumber0fRoles(response.data.length);
      })
      .catch((error) => console.log(error));

    axios
      .get("http://127.0.0.1:8000/structure/listcreate/", config)
      .then((response) => {
        setNumber0fStructures(response.data.length);
      })
      .catch((error) => console.log(error));

    axios
      .get("http://127.0.0.1:8000/role/listcreatep/", config)
      .then((response) => {
        setNumber0fPermissions(response.data.length);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <main className="flex gap-32 max-[600px]:flex-col-reverse">
        <div className=" rounded-[11px] max-w-[fit-content] pl-10 flex flex-col gap-6 max-[600px]:max-w-full max-[600px]:w-full max-[600px]:pr-4">
          <Stats
            critere="Users"
            stat={NumberOfUsers}
            icon={<GroupIcon fontSize="large" color="secondary" />}
          />

          <Stats
            critere="Consumers"
            stat={NumberOfConsumers}
            icon={
              <LocalGroceryStoreOutlinedIcon
                fontSize="large"
                color="secondary"
              />
            }
          />

          <Stats
            critere="Structures"
            stat={NumberOfStructures}
            icon={
              <AccountTreeOutlinedIcon fontSize="large" color="secondary" />
            }
          />

          <Stats
            critere="Roles"
            stat={NumberOfRoles}
            icon={<HubOutlinedIcon fontSize="large" color="secondary" />}
          />

          <Stats
            critere="Permissions"
            stat={NumberOfPermissions}
            icon={<VerifiedOutlinedIcon fontSize="large" color="secondary" />}
          />
        </div>

        <div className="flex flex-col gap-3 pr-6">
          <Profile />
          <Entreprise />
        </div>
      </main>
    </ThemeProvider>
  );
}

export default Main;
