import SideBar from "../SideBar";
import Header from "../Header";
import { useState } from "react";
import Settings from "./Settings";

function SettingsPage({ index }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <SideBar isOpen={isOpen} initialIndex={index} />
      <div className="flex flex-col w-[82%] max-[770px]:w-full">
        <Header isOpen={isOpen} setIsOpen={setIsOpen} search={false} />
        <Settings />
      </div>
    </>
  );
}

export default SettingsPage;
