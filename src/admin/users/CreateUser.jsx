import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DiscardButton from "../../ui/DiscardButton";
import SubmitButton from "../../ui/SubmitButton";
import DialogContent from "@mui/material/DialogContent";
import Input from "../../ui/Input";
import { useFormik } from "formik";
import axiosInstance from "../../Services/AxiosInstance";
import toast, { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { modifyUsers } from "../AdminSlice";

let roles = [];
function CreateUser({ open, handleClose, setOpen, children }) {
  /*const handleClickOpen = () => {
    setOpen(true);
  };*/
  useEffect(() => {
    axiosInstance.get("/role/listcreate/").then((res) => {
      roles = res.data;
    });
  }, []);
  const admin = useSelector((state) => state.admin);
  const dispatch = useDispatch();
  const users = admin.users;

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: "role",
    },
    onSubmit: (values, { resetForm }) => {
      handleAddUser();
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

      if (!values.lastName) errors.lastName = "Last name required.";
      else if (!/^[a-zA-Z]{1,15}$/.test(values.lastName))
        errors.lastName = "Last name must contain only letters (maximum 15).";

      if (!values.username) errors.username = "Username required.";
      else if (
        !/^(?=(?:[^ ]* ){0,2}[^ ]*$)[^\n\r\t\v\f ]{0,30}$/.test(values.username)
      )
        errors.username =
          "Username must contain maximum 30 carcters and maximum two spaces.";

      if (!values.email) errors.email = "Email required.";
      else if (!/^\w+([.-]?\w+)*@esi-sba\.dz$/.test(values.email))
        errors.email = "Invalid email.";

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

      if (values.role === "role") errors.role = "Please select a role";

      return errors;
    },
  });

  function handleAddUser() {
    axiosInstance
      .post("/user/listcreate/", {
        username: formik.values.username,
        password: formik.values.password,
        email: formik.values.email,
        first_name: formik.values.firstName,
        last_name: formik.values.lastName,
        is_active: true,
        role: formik.values.role,
      })
      .then((res) => {
        console.log(res);
        console.log(res.status);
        if (res.status === 201)
          toast.success("User created successfully", {
            className: "font-poppins text-[1.3rem] font-medium",
          });
        dispatch(
          modifyUsers([
            ...users,
            {
              username: formik.values.username,
              password: formik.values.password,
              email: formik.values.email,
              first_name: formik.values.firstName,
              last_name: formik.values.lastName,
              is_active: true,
              role: formik.values.role,
            },
          ])
        );
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status === 400)
          toast.error("User already exists", {
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
          Create new user
        </h2>

        <DialogContent>
          <form onSubmit={formik.handleSubmit}>
            <Input
              type="text"
              id="firstName"
              placeholder="First name"
              name="firstName"
              onChange={formik.handleChange}
              value={formik.values.firstName}
              onBlur={formik.handleBlur}
            />

            {formik.touched.firstName && formik.errors.firstName ? (
              <p className="font-poppins font-bold text-red-700 ml-[5px]  mt-[-7px] mb-[12px]">
                {formik.errors.firstName}
              </p>
            ) : null}
            <Input
              type="text"
              id="lastName"
              placeholder="Last name"
              name="lastName"
              onChange={formik.handleChange}
              value={formik.values.lastName}
              onBlur={formik.handleBlur}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <p className="font-poppins font-bold text-red-700 ml-[5px]  mt-[-7px] mb-[12px]">
                {formik.errors.lastName}
              </p>
            ) : null}

            <Input
              type="text"
              id="username"
              placeholder="Username"
              name="username"
              onChange={formik.handleChange}
              value={formik.values.username}
              onBlur={formik.handleBlur}
            />
            {formik.touched.username && formik.errors.username ? (
              <p className="font-poppins font-bold text-red-700 ml-[5px]  mt-[-7px] mb-[12px]">
                {formik.errors.username}
              </p>
            ) : null}

            <Input
              type="email"
              id="email"
              placeholder="Email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <p className="font-poppins font-bold text-red-700 ml-[5px]  mt-[-7px] mb-[12px]">
                {formik.errors.email}
              </p>
            ) : null}
            <Input
              type="password"
              id="password"
              placeholder="Password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password ? (
              <p className="font-poppins font-bold text-red-700 ml-[5px]  mt-[-7px] mb-[12px]">
                {formik.errors.password}
              </p>
            ) : null}
            <Input
              type="password"
              id="confirmPassword"
              placeholder="Confirm password"
              name="confirmPassword"
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
              onBlur={formik.handleBlur}
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <p className="font-poppins font-bold text-red-700 ml-[5px]  mt-[-7px] mb-[12px]">
                {formik.errors.confirmPassword}
              </p>
            ) : null}
            <select
              name="role"
              id="role"
              onBlur={formik.onBlur}
              value={formik.values.role}
              onChange={formik.handleChange}
              className="font-poppins outline-none px-6 py-6 rounded-[8px] w-full
            text-white text-[1.1rem] bg-[#2185D5]"
            >
              <option value="role" disabled selected>
                role
              </option>
              {roles.map((role) => (
                <option value={role.name} key={role.id}>
                  {role.name}
                </option>
              ))}
            </select>
            <p className="font-poppins font-bold text-red-700 ml-[5px]  mt-1 mb-[12px]">
              {formik.touched.role && formik.errors.role}
            </p>

            <DialogActions>
              <div className="flex items-center justify-center w-full mt-8">
                <DiscardButton
                  onClick={handleClose}
                  onDiscard={formik.resetForm}
                  color="#858D9D"
                  bg="white"
                >
                  Discard
                </DiscardButton>
                <SubmitButton>Add user</SubmitButton>
              </div>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>

      {children}
    </>
  );
}

export default CreateUser;
