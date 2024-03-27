import { useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DiscardButton from "../../ui/DiscardButton";
import SubmitButton from "../../ui/SubmitButton";
import DialogContent from "@mui/material/DialogContent";
import Input from "../../ui/Input";
import axiosInstance from "../../Services/AxiosInstance";
import { useFormik } from "formik";
import toast, { Toaster } from "react-hot-toast";
import { Password } from "@mui/icons-material";

let structures = [];
function CreateConsumer({ open, handleClose, setOpen, children }) {
  /*const handleClickOpen = () => {
    setOpen(true);
  };*/
  useEffect(() => {
    axiosInstance.get("/structure/listcreate/").then((res) => {
      structures = res.data;
    });
  }, []);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      email: "",
      firstName: "",
      lastName: "",
      confirmPassword: "",
      structure: "structure",
    },
    onSubmit: (values, { resetForm }) => {
      handleAddConsumer();
      setOpen(false);
      resetForm();
    },
    validate: (values) => {
      const errors = {};

      if (!values.firstName) errors.firstName = "First name required";
      else if (
        !/^(?=(?:[^ ]* ){0,2}[^ ]*$)[a-zA-Z\s]{1,30}$/.test(values.firstName)
      )
        errors.firstName =
          "First name can contain only letters and maximum of two spaces (max 30 caracters).";

      if (!values.email) errors.email = "Email required.";
      else if (!/^\w+([.-]?\w+)*@esi-sba\.dz$/.test(values.email))
        errors.email = "Invalid email.";

      if (!values.lastName) errors.lastName = "Last name required.";
      else if (!/^[a-zA-Z]{1,15}$/.test(values.lastName))
        errors.lastName = "Last name must contain only letters (maximum 15).";

      if (!values.username) errors.username = "Username required.";
      else if (
        !/^(?=(?:[^ ]* ){0,2}[^ ]*$)[^\n\r\t\v\f ]{0,30}$/.test(values.username)
      )
        errors.username =
          "Username must contain maximum 30 carcters and maximum two spaces.";
      if (!values.password) errors.password = "password required";
      else if (
        !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(
          values.password
        )
      )
        errors.password =
          "Password must contain at least 6 caracters which include one special caracter, one digit and one  uppercase letter.";

      if (!values.confirmPassword)
        errors.confirmPassword = "Please confirm the password.";
      else if (!(values.password === values.confirmPassword))
        errors.confirmPassword =
          "Confirmation does not match with the password.";

      if (values.structure === "structure")
        errors.structure = "Structure required";

      return errors;
    },
  });

  function handleAddConsumer() {
    axiosInstance
      .post("/consom/listcreate/", {
        username: formik.values.username,
        password: formik.values.password,
        email: formik.values.email,
        first_name: formik.values.firstName,
        last_name: formik.values.lastName,
        is_active: true,
        structure: formik.values.structure,
      })
      .then((res) => {
        console.log(res);
        if (res.status === 201)
          toast.success("Consumer added successfully", {
            className: "font-poppins text-[1.3rem] font-medium",
          });
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status === 400)
          toast.error("Consumer already exists", {
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
          Create new consumer
        </h2>
        <form onSubmit={formik.handleSubmit}>
          <DialogContent>
            <Input
              type="text"
              placeholder="First name"
              name="firstName"
              id="firstName"
              value={formik.values.firstName}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <p className="font-poppins font-bold text-red-700 ml-[5px]  mt-[-7px] mb-[12px]">
                {formik.errors.firstName}
              </p>
            ) : null}
            <Input
              type="text"
              placeholder="Last name"
              name="lastName"
              id="lastName"
              value={formik.values.lastName}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <p className="font-poppins font-bold text-red-700 ml-[5px]  mt-[-7px] mb-[12px]">
                {formik.errors.lastName}
              </p>
            ) : null}
            <Input
              type="text"
              placeholder="Username"
              name="username"
              id="username"
              value={formik.values.username}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.username && formik.errors.username ? (
              <p className="font-poppins font-bold text-red-700 ml-[5px]  mt-[-7px] mb-[12px]">
                {formik.errors.username}
              </p>
            ) : null}
            <Input
              type="email"
              placeholder="Email"
              name="email"
              id="email"
              value={formik.values.email}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.email && formik.errors.email ? (
              <p className="font-poppins font-bold text-red-700 ml-[5px]  mt-[-7px] mb-[12px]">
                {formik.errors.email}
              </p>
            ) : null}
            <Input
              type="password"
              placeholder="Password"
              name="password"
              id="password"
              value={formik.values.password}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.password && formik.errors.password ? (
              <p className="font-poppins font-bold text-red-700 ml-[5px]  mt-[-7px] mb-[12px]">
                {formik.errors.password}
              </p>
            ) : null}
            <Input
              type="password"
              placeholder="Confirm password"
              name="confirmPassword"
              id="confirmPassword"
              value={formik.values.confirmPassword}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <p className="font-poppins font-bold text-red-700 ml-[5px]  mt-[-7px] mb-[12px]">
                {formik.errors.confirmPassword}
              </p>
            ) : null}
            <select
              className="font-poppins outline-none px-6 py-6 rounded-[8px] w-full
            text-white text-[1.1rem] bg-[#2185D5]"
              name="structure"
              id="structure"
              value={formik.values.structure}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            >
              <option value="structure" disabled selected>
                Structure
              </option>
              {structures.map((structure) => (
                <option value={structure.name} key={structure.id}>
                  {structure.name}
                </option>
              ))}
            </select>
            {formik.touched.structure && formik.errors.structure ? (
              <p className="font-poppins font-bold text-red-700 ml-[5px] mt-[2px] mb-[12px]">
                {formik.errors.structure}
              </p>
            ) : null}

            <DialogActions>
              <div className="flex items-center justify-center w-full mb-8 pt-[15px]">
                <DiscardButton
                  onClick={handleClose}
                  color="#858D9D"
                  onDiscard={formik.resetForm}
                  bg="white"
                >
                  Discard
                </DiscardButton>
                <SubmitButton color="#2185D5">Add consumer</SubmitButton>
              </div>
            </DialogActions>
          </DialogContent>
        </form>
      </Dialog>

      {children}
    </>
  );
}

export default CreateConsumer;
