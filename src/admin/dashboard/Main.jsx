import Stats from "./Stats";
import GroupIcon from "@mui/icons-material/Group";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import HubOutlinedIcon from "@mui/icons-material/HubOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import Profile from "./Profile";
import Entreprise from "./Entreprise";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#ffff",
    },
  },
});

function Main() {
  return (
    <ThemeProvider theme={theme}>
      <main className="flex gap-32 max-[600px]:flex-col-reverse">
        <div className=" max-w-[fit-content] pl-10 flex flex-col gap-6 max-[600px]:max-w-full max-[600px]:w-full max-[600px]:pr-4">
          <Stats
            critere="Users"
            stat="147"
            icon={<GroupIcon fontSize="large" color="secondary" />}
          />

          <Stats
            critere="Consumers"
            stat="149"
            icon={
              <LocalGroceryStoreOutlinedIcon
                fontSize="large"
                color="secondary"
              />
            }
          />

          <Stats
            critere="Structures"
            stat="7"
            icon={
              <AccountTreeOutlinedIcon fontSize="large" color="secondary" />
            }
          />

          <Stats
            critere="Roles"
            stat="6"
            icon={<HubOutlinedIcon fontSize="large" color="secondary" />}
          />

          <Stats
            critere="Permissions"
            stat="12"
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
