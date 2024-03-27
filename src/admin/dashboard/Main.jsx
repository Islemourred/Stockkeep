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
import axiosInstance from "../../Services/AxiosInstance";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#ffff",
    },
  },
});

function Main() {
  const [NumberOfUsers, setNumber0fUsers] = useState(0);
  const [NumberOfConsumers, setNumber0fConsumers] = useState(0);
  const [NumberOfStructures, setNumber0fStructures] = useState(0);
  const [NumberOfRoles, setNumber0fRoles] = useState(0);
  const [NumberOfPermissions, setNumber0fPermissions] = useState(0);

  useEffect(() => {
    axiosInstance.get("/user/listcreate/").then((response) => {
      setNumber0fUsers(response.data.length);
    });

    axiosInstance
      .get("/consom/listcreate/")
      .then((response) => setNumber0fConsumers(response.data.length));

    axiosInstance.get("/role/listcreate/").then((response) => {
      setNumber0fRoles(response.data.length);
    });

    axiosInstance.get("/structure/listcreate/").then((response) => {
      setNumber0fStructures(response.data.length);
    });

    axiosInstance.get("/role/listcreatep/").then((response) => {
      setNumber0fPermissions(response.data.length);
    });
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
