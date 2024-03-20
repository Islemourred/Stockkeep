function DiscardButton({ children, onClick }) {
  return (
    <button
      className={`text-[#858D9D] bg-white rounded-[10px] py-4 border border-[#F0F1F3] font-poppins w-[9rem] text-center
      hover:bg-[#f3f3f3f3]`}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}

export default DiscardButton;
