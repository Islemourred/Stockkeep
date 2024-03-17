import SearchBar from "../ui/SearchBar";
import Welcome from "./Welcome";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

function Header({ isOpen, setIsOpen }) {
  return (
    <header
      className="pt-11 px-10 flex items-center justify-between  h-[fit-content] mb-12 max-[770px]:pl-
    max-[600px]:flex-col max-[600px]:gap-8 max-[600px]:pl-6"
    >
      <Welcome isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="flex items-center max-[300px]:flex-col-reverse  max-[300px]:gap-2">
        <NotificationsActiveIcon
          color="primary"
          fontSize="large"
          className="mr-10 max-[375px]:mr-1"
        />
        <SearchBar />
      </div>
    </header>
  );
}

export default Header;
