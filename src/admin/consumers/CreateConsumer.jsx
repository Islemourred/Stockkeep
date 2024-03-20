import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DiscardButton from "../../ui/DiscardButton";
import SubmitButton from "../../ui/SubmitButton";
import DialogContent from "@mui/material/DialogContent";
import Input from "../../ui/Input";

const structures = [
  { name: "Cycle préparatoire" },
  { name: "Cycle supérieure" },
];

function CreateConsumer({ open, handleClose, children }) {
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
          Create new consumer
        </h2>
        <DialogContent>
          <form onSubmit={(e) => e.preventDefault}>
            <Input type="text" placeholder="First name" />
            <Input type="text" placeholder="Last name" />
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <Input
              type="password"
              placeholder="Confirm password"
              autofocus={false}
            />
            <select
              className="font-poppins outline-none px-6 py-6 rounded-[8px] w-full
            text-white text-[1.1rem] bg-[#2185D5]"
            >
              <option disabled selected>
                Structure
              </option>
              {structures.map((structure) => (
                <option value={structure.name}>{structure.name}</option>
              ))}
            </select>
          </form>
        </DialogContent>
        <DialogActions>
          <div className="flex items-center justify-center w-full mb-8">
            <DiscardButton onClick={handleClose} color="#858D9D" bg="white">
              Discard
            </DiscardButton>
            <SubmitButton color="#2185D5">Add consumer</SubmitButton>
          </div>
        </DialogActions>
      </Dialog>
      {children}
    </>
  );
}

export default CreateConsumer;
