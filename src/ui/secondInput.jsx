import React from "react";
import PropTypes from "prop-types";

function InputTwo({ type, placeholder, onClick }) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <input
      type={type}
      placeholder={placeholder}
      autoComplete="off"
      className="bg-[#2185D5] placeholder:text-white text-white text-center font-poppins text-[1.1rem] py-8 sm:min-w-[28rem] w-full px-6
      font-normal outline-none rounded-[8px] focus:outline-[2px] focus:outline-[#2185D5] focus:outline-offset-0 mb-4"
      onClick={handleClick} // Click handler for InputTwo component
    />
  );
}

InputTwo.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onClick: PropTypes.func, // Optional property to handle click
};

export default InputTwo;
