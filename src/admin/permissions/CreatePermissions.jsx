import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DiscardButton from "../../ui/DiscardButton";
import SubmitButton from "../../ui/SubmitButton";
import DialogContent from "@mui/material/DialogContent";
import Input from "../../ui/Input";
import { useFormik } from "formik";
import toast, { Toaster } from "react-hot-toast";
import axiosInstance from "../../Services/AxiosInstance";

function CreatePermission({ open, handleClose, setOpen, children }) {
  /*const handleClickOpen = () => {
    setOpen(true);
  };*/

  const formik = useFormik({
    initialValues: {
      name: "",
    },
    onSubmit: (values, { resetForm }) => {
      handleAddPermission();
      setOpen(false);
      resetForm();
    },
    validate: (values) => {
      const errors = {};
      if (!values.name) errors.name = "Name required.";
      else if (!/^[a-zA-Z]{1,15}$/.test(values.name))
        errors.name =
          "Name of permission must contain only letters (Maximum 30)";
      return errors;
    },
  });

  function handleAddPermission() {
    axiosInstance
      .post("/permission/listcreate/", {
        name: formik.values.name,
      })
      .then((res) => {
        console.log(res);
        if (res.status === 201)
          toast.success("Permission added successfully", {
            className: "font-poppins text-[1.3rem] font-medium",
          });
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status === 400)
          toast.error("Permission already exists", {
            className: "font-poppins text-[1.3rem] font-medium",
          });
      });
  }

  return (
    <>
      <Toaster />
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "div",
        }}
        maxWidth="sm"
      >
        <h2 className="font-bold text-center font-poppins text-[#303841] text-[2rem] mt-10 mb-6">
          Create new permission
        </h2>
        <form onSubmit={formik.handleSubmit}>
          <DialogContent>
            <Input type="text" placeholder="Name" />
            <DialogActions>
              <div className="flex items-center justify-center w-full mb-8">
                <DiscardButton
                  onClick={handleClose}
                  color="#858D9D"
                  onDiscard={formik.resetForm}
                  bg="white"
                >
                  Discard
                </DiscardButton>
                <SubmitButton>Add permission</SubmitButton>
              </div>
            </DialogActions>
          </DialogContent>
        </form>
      </Dialog>
      {children}
    </>
  );
}

export default CreatePermission;
