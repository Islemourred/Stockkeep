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

function SideBar({ isOpen }) {
  const [index, setIndex] = useState(0);

  return (
    <aside
      className={`w-[18%] h-screen z-[2] bg-white bottom-0 pt-10  max-[770px]:absolute max-[770px]:w-[35%] 
     ${!isOpen ? "hidden" : ""} md:block`}
    >
      <Logo />
      <Lien
        Icon={
          <DashboardIcon
            color={`${Number(index) === 0 ? "primary" : "disabled"}`}
            fontSize="large"
          />
        }
        isActive={Number(index) === 0}
        linkTo="/"
        index="0"
        setIndex={setIndex}
      >
        Dashboard
      </Lien>

      <Lien
        Icon={
          <GroupIcon
            color={`${Number(index) === 1 ? "primary" : "disabled"}`}
            fontSize="large"
          />
        }
        isActive={Number(index) === 1}
        linkTo="/users"
        index="1"
        setIndex={setIndex}
      >
        Users
      </Lien>

      <Lien
        Icon={
          <LocalGroceryStoreOutlinedIcon
            color={`${Number(index) === 2 ? "primary" : "disabled"}`}
            fontSize="large"
          />
        }
        linkTo="/consumers"
        isActive={Number(index) === 2}
        index="2"
        setIndex={setIndex}
      >
        Consumers
      </Lien>

      <Lien
        Icon={
          <AccountTreeOutlinedIcon
            color={`${Number(index) === 3 ? "primary" : "disabled"}`}
            fontSize="large"
          />
        }
        linkTo="/structures"
        isActive={Number(index) === 3}
        index="3"
        setIndex={setIndex}
      >
        Structures
      </Lien>

      <Lien
        Icon={
          <HubOutlinedIcon
            color={`${Number(index) === 4 ? "primary" : "disabled"}`}
            fontSize="large"
          />
        }
        isActive={Number(index) === 4}
        index="4"
        setIndex={setIndex}
        linkTo="/roles"
      >
        Roles
      </Lien>

      <Lien
        Icon={
          <VerifiedOutlinedIcon
            color={`${Number(index) === 5 ? "primary" : "disabled"}`}
            fontSize="large"
          />
        }
        isActive={index === 5}
        index="5"
        setIndex={setIndex}
        linkTo="/permissions"
      >
        Permissions
      </Lien>

      <Lien
        Icon={
          <SettingsOutlinedIcon
            color={`${Number(index) === 6 ? "primary" : "disabled"}`}
            fontSize="large"
          />
        }
        isActive={Number(index) === 6}
        index="6"
        setIndex={setIndex}
      >
        Settings
      </Lien>

      <div
        className={`flex items-center ${
          Number(index) === 7 ? "border-r-[#2185D5] border-r-4" : ""
        }  pl-2 cursor-pointer absolute bottom-5`}
      >
        <ExitToAppOutlinedIcon
          color={`${Number(index) === 7 ? "primary" : "disabled"}`}
          fontSize="large"
        />
        <span
          className={`font-poppins text-[1.6rem] ${
            Number(index) === 7 ? "text-[#303841]" : "text-[#888]"
          } ml-3 ${Number(index) === 7 ? "font-bold" : "font-medium"} `}
        >
          Log out
        </span>
      </div>
    </aside>
  );
}

export default SideBar;
