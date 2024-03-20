import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DiscardButton from "../ui/DiscardButton";
import SubmitButtonRed from "../ui/SubmitButtonRed";

function ConfirmDelete({ open, handleClose, children, concern }) {
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
        <h2 className="font-bold text-center font-poppins text-[#303841] text-[2rem] mt-10 mb-6 mx-32">
          Are you sure you want to delete this {concern} ?
        </h2>

        <DialogActions>
          <div className="flex items-center justify-center w-full mb-8">
            <DiscardButton onClick={handleClose} color="#858D9D" bg="white">
              Discard
            </DiscardButton>
            <SubmitButtonRed color="#FF4747">Confirm</SubmitButtonRed>
          </div>
        </DialogActions>
      </Dialog>
      {children}
    </>
  );
}

export default ConfirmDelete;
