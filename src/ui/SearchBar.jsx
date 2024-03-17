import SearchIcon from "@mui/icons-material/Search";
function SearchBar() {
  return (
    <div className="relative">
      <SearchIcon
        color="disabled"
        fontSize="large"
        className="absolute left-4 top-3"
      />
      <input
        type="text"
        placeholder="Search"
        aria-label="Search"
        className="bg-white rounded-[10px] py-4 px-20 border-none placeholder: font-poppins text-[12px]
         focus:outline-1 outline-offset-0 focus:outline-[#2185D5] max-[375px]:width-[80%]"
      />
    </div>
  );
}

export default SearchBar;
