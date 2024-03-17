import Hamburger from "hamburger-react";
function Welcome({ setIsOpen }) {
  return (
    <div className="flex">
      <button
        className="hidden max-[770px]:block translate-x-[-1rem] max-[770px]:absolute max-[770px]:top-[-15px]
        max-[770px]:left-[-8px] z-[2]"
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        <Hamburger size={16} color="#2185D5" />
      </button>
      <div>
        <p className="text-[#888] text-2xl font-bold font-poppins">
          Hi Islem Charaf Eddine,
        </p>
        <h1 className="text-4xl text-[#303841] font-bold font-poppins">
          Welcome to Stockkeep!
        </h1>
      </div>
    </div>
  );
}

export default Welcome;
