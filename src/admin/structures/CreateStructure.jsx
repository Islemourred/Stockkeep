import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DiscardButton from "../../ui/DiscardButton";
import SubmitButton from "../../ui/SubmitButton";
import DialogContent from "@mui/material/DialogContent";
import Input from "../../ui/Input";
import { useFormik } from "formik";
import toast, { Toaster } from "react-hot-toast";
import axiosInstance from "../../Services/AxiosInstance";

function CreateStructure({ open, handleClose, setOpen, children }) {
  /*const handleClickOpen = () => {
    setOpen(true);
  };*/

  const formik = useFormik({
    initialValues: {
      name: "",
      abbreviation: "",
      responsible: "",
    },
    onSubmit: (values, { resetForm }) => {
      handleAddStructure();
      setOpen(false);
      resetForm();
    },
    validate: (values) => {
      const errors = {};
      if (!values.name) errors.name = "Name required.";
      else if (!/^(?=(?:[^ ]* ){0,3}[^ ]*$)[a-zA-Z ]{1,15}$/.test(values.name))
        errors.name =
          "Name of role must contains only letters and maximum three spaces (Maximum 30 caracters).";

      if (!values.abbreviation) errors.abbreviation = "Abbreviation required.";
      else if (!/^[a-zA-Z]{1,5}$/.test(values.abbreviation))
        errors.abbreviation =
          "Abbreviation must contains only letters (Maximum 5).";

      if (!values.responsible) errors.responsible = "Responsible required.";
      else if (
        !/^(?=(?:[^ ]* ){0,3}[^ ]*$)[a-zA-Z ]{1,40}$/.test(values.responsible)
      )
        errors.responsible =
          "Responsible field must contains only letters and maximum 3 spaces (Maximum 40 caracters).";

      return errors;
    },
  });

  function handleAddStructure() {
    axiosInstance
      .post("/structure/listcreate/", {
        name: formik.values.name,
        abbreviation: formik.values.abbreviation,
        responsible: formik.values.responsible,
      })
      .then((res) => {
        console.log(res);
        if (res.status === 201)
          toast.success("Structure added successfully", {
            className: "font-poppins text-[1.3rem] font-medium",
          });
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status === 400)
          toast.error("Structure already exists", {
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
        fullWidth
        PaperProps={{
          component: "div",
        }}
        maxWidth="xs"
      >
        <h2 className="font-bold text-center font-poppins text-[#303841] text-[2rem] mt-10 mb-6">
          Create new structure
        </h2>
        <DialogContent>
          <form onSubmit={formik.handleSubmit}>
            <Input
              type="text"
              placeholder="Wording"
              name="name"
              id="name"
              value={formik.values.name}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.name && formik.errors.name ? (
              <p className="font-poppins font-bold text-red-700 ml-[5px]  mt-[-7px] mb-[12px]">
                {formik.errors.name}
              </p>
            ) : null}
            <Input
              type="text"
              placeholder="Abreviation"
              value={formik.values.abbreviation}
              name="abbreviation"
              id="abbreviation"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.abbreviation && formik.errors.abbreviation ? (
              <p className="font-poppins font-bold text-red-700 ml-[5px]  mt-[-7px] mb-[12px]">
                {formik.errors.abbreviation}
              </p>
            ) : null}
            <Input
              type="text"
              placeholder="Responsible"
              value={formik.values.responsible}
              name="responsible"
              id="responsible"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.responsible && formik.errors.responsible ? (
              <p className="font-poppins font-bold text-red-700 ml-[5px]  mt-[-7px] mb-[12px]">
                {formik.errors.responsible}
              </p>
            ) : null}
            <DialogActions>
              <div className="flex items-center justify-center w-full mb-8 pt-[10px]">
                <DiscardButton
                  onClick={handleClose}
                  color="#858D9D"
                  onDiscard={formik.resetForm}
                  bg="white"
                >
                  Discard
                </DiscardButton>
                <SubmitButton>Add structure</SubmitButton>
              </div>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
      {children}
    </>
  );
}

export default CreateStructure;
