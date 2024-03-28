import { useState } from "react";
import Logo from "../ui/Logo";
import Lien from "./dashboard/Lien";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HubOutlinedIcon from "@mui/icons-material/HubOutlined";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";

function SideBar({ isOpen, initialIndex }) {
  const [index, setIndex] = useState(initialIndex);

  const handleLinkClick = (clickedIndex) => {
    setIndex(clickedIndex);
  };

  return (
    <aside
      className={`w-[18%] h-screen z-[2] bg-white bottom-0 pt-10  max-[770px]:absolute max-[770px]:w-[35%] 
     ${!isOpen && "hidden"} md:block`}
    >
      <Logo />
      <Lien
        Icon={
          <DashboardIcon
            color={index === 0 ? "primary" : "disabled"}
            fontSize="large"
          />
        }
        isActive={index === 0}
        linkTo="/"
        onClick={() => handleLinkClick(0)}
      >
        Dashboard
      </Lien>

      <Lien
        Icon={
          <GroupIcon
            color={index === 1 ? "primary" : "disabled"}
            fontSize="large"
          />
        }
        isActive={index === 1}
        linkTo="/users"
        onClick={() => handleLinkClick(1)}
      >
        Users
      </Lien>

      <Lien
        Icon={
          <LocalGroceryStoreOutlinedIcon
            color={index === 2 ? "primary" : "disabled"}
            fontSize="large"
          />
        }
        isActive={index === 2}
        linkTo="/consumers"
        onClick={() => handleLinkClick(2)}
      >
        Consumers
      </Lien>

      <Lien
        Icon={
          <AccountTreeOutlinedIcon
            color={index === 3 ? "primary" : "disabled"}
            fontSize="large"
          />
        }
        isActive={index === 3}
        linkTo="/structures"
        index={3}
        onClick={() => handleLinkClick(3)}
      >
        Structures
      </Lien>

      <Lien
        Icon={
          <HubOutlinedIcon
            color={index === 4 ? "primary" : "disabled"}
            fontSize="large"
          />
        }
        isActive={index === 4}
        linkTo="/roles"
        onClick={() => handleLinkClick(4)}
      >
        Roles
      </Lien>

      <Lien
        Icon={
          <VerifiedOutlinedIcon
            color={index === 5 ? "primary" : "disabled"}
            fontSize="large"
          />
        }
        isActive={index === 5}
        linkTo="/permissions"
        onClick={() => handleLinkClick(5)}
      >
        Permissions
      </Lien>

      <Lien
        Icon={
          <SettingsOutlinedIcon
            color={index === 6 ? "primary" : "disabled"}
            fontSize="large"
          />
        }
        isActive={index === 6}
        linkTo="/settings"
        onClick={() => handleLinkClick(6)}
      >
        Settings
      </Lien>

      <div
        className={`flex items-center ${
          index === 7 ? "border-r-[#2185D5] border-r-4" : ""
        }  pl-2 cursor-pointer absolute bottom-5`}
      >
        <ExitToAppOutlinedIcon
          color={index === 7 ? "primary" : "disabled"}
          fontSize="large"
        />
        <span
          className={`font-poppins text-[1.6rem] ${
            index === 7 ? "text-[#303841]" : "text-[#888]"
          } ml-3 ${index === 7 ? "font-bold" : "font-medium"}`}
        >
          Log out
        </span>
      </div>
    </aside>
  );
}

export default SideBar;
