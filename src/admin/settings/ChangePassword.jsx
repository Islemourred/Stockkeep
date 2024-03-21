import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DiscardButton from "../../ui/DiscardButton";
import SubmitButtonGreen from "../../ui/SubmitButtonGreen";
import DialogContent from "@mui/material/DialogContent";
import Input from "../../ui/Input";


function ChangePassword({ open, handleClose, children }) {
  /*const handleClickOpen = () => {
    setOpen(true);
  };*/

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
        <h2 className="font-bold text-center font-poppins text-[#303841] text-[2rem] mt-10 mb-6">
          Change password
        </h2>
        <DialogContent>
          <form onSubmit={(e) => e.preventDefault}>
            <Input type="password" placeholder="Current password" />
            <Input type="password" placeholder="New password" />
            <Input type="password" placeholder="Confirm password" />            
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

export default ChangePassword;
