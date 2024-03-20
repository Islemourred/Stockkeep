function Input({ type, placeholder }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      autoComplete="off"
      className="bg-[#2185d51a] text-[#2185D5] placeholder:text-[#2185D5] font-poppins placeholder:text-[1.1rem] text-[1.1rem] py-6 sm:min-w-[28rem] w-full px-6
      plaeceholder:font-normal font-normal outline-none rounded-[8px] focus:outline-[2px] focus:outline-[#2185D5] focus:outline-offset-0 mb-4"
    />
  );
}

export default Input;
