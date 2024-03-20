import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DiscardButton from "../../ui/DiscardButton";
import SubmitButton from "../../ui/SubmitButton";
import DialogContent from "@mui/material/DialogContent";
import Input from "../../ui/Input";

function CreateStructure({ open, handleClose, children }) {
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
          Create new structure
        </h2>
        <DialogContent>
          <form onSubmit={(e) => e.preventDefault}>
            <Input type="text" placeholder="Wording" />
            <Input type="text" placeholder="Abreviation" />
            <Input type="text" placeholder="Responsable" />
          </form>
        </DialogContent>
        <DialogActions>
          <div className="flex items-center justify-center w-full mb-8">
            <DiscardButton onClick={handleClose} color="#858D9D" bg="white">
              Discard
            </DiscardButton>
            <SubmitButton>Add structure</SubmitButton>
          </div>
        </DialogActions>
      </Dialog>
      {children}
    </>
  );
}

export default CreateStructure;
