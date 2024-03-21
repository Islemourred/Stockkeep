import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DiscardButton from "../../ui/DiscardButton";
import SubmitButtonGreen from "../../ui/SubmitButtonGreen";
import DialogContent from "@mui/material/DialogContent";
import Input from "../../ui/Input";
import InputTwo from "../../ui/secondInput";
import ProfileImage from "../../assets/profil.png";
import ChangePassword from "./ChangePassword"; // Importez le composant ChangePassword

function EditProfile({ open, handleClose, children }) {
  const [image, setImage] = useState(ProfileImage);
  const [openChangePassword, setOpenChangePassword] = useState(false); // État pour ouvrir la fenêtre de changement de mot de passe

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

  // Fonction pour ouvrir la fenêtre de changement de mot de passe
  const handleOpenChangePassword = () => {
    setOpenChangePassword(true);
  };

  // Fonction pour fermer la fenêtre de changement de mot de passe
  const handleCloseChangePassword = () => {
    setOpenChangePassword(false);
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
          Edit profile
        </h2>
        <DialogContent>
          <div className="flex items-center justify-center mb-4">
            <div className="relative">
              <img
                src={image}
                alt="profile"
                className="rounded-full border-2 border-dashed border-gray-500 w-32 h-32 object-cover"
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
            {/* Bouton "Change password" pour ouvrir la fenêtre de changement de mot de passe */}
            <InputTwo
              type="button"
              placeholder="Change password"
              onClick={handleOpenChangePassword}
            />
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
      {/* Fenêtre de changement de mot de passe */}
      <ChangePassword
        open={openChangePassword}
        handleClose={handleCloseChangePassword}
      />
      {children}
    </>
  );
}

export default EditProfile;
