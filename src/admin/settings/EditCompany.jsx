import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DiscardButton from "../../ui/DiscardButton";
import SubmitButtonGreen from "../../ui/SubmitButtonGreen";
import DialogContent from "@mui/material/DialogContent";
import Input from "../../ui/Input";
import ProfileImage from "../../assets/company.jpg";

function EditCompany({ open, handleClose, children }) {
  const [image, setImage] = useState(ProfileImage);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setImage(URL.createObjectURL(file));
  };

  const handleBrowseClick = () => {
    const inputElement = document.createElement("input");
    inputElement.type = "file";
    inputElement.accept = "image/*";
    inputElement.click();

    inputElement.addEventListener("change", (event) => {
      const file = event.target.files[0];
      if (file) {
        setImage(URL.createObjectURL(file));
      }
    });
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
        }}
        maxWidth="xs"
      >
        <h2 className="font-bold text-center font-poppins text-[#303841] text-[22px] mt-[25px] ">
          Edit company
        </h2>
        <DialogContent>
          <div className="flex items-center justify-center mb-4">
            <div className="relative">
              <img
                src={image}
                alt="profile"
                className="border-2 border-dashed border-gray-500 w-32 h-32 object-cover rounded-[10px]"
              />
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="absolute inset-0 w-full h-full opacity-0"
              />
            </div>
            <div className="ml-8 flex flex-col items-center items-justify text-[22px]">
              <span className="text-base text-gray-500 font-poppins text-[14px] mb-1 ">
                Drag image here
              </span>
              <span className="text-base text-gray-500 font-poppins text-[14px] mb-1">
                or
              </span>
              <span
                className="text-base text-blue-500 cursor-pointer font-poppins text-[14px]"
                onClick={handleBrowseClick}
              >
                Browse image
              </span>
            </div>
          </div>
          <form onSubmit={(e) => e.preventDefault()}>
            <Input type="text" placeholder="First name" />
            <Input type="text" placeholder="Last name" />
          </form>
        </DialogContent>
        <DialogActions>
          <div className="flex items-center justify-center w-full mb-8">
            <DiscardButton onClick={handleClose} color="#858D9D" bg="white">
              Discard
            </DiscardButton>
            <SubmitButtonGreen>Confirm</SubmitButtonGreen>
          </div>
        </DialogActions>
      </Dialog>
      {children}
    </>
  );
}

export default EditCompany;
