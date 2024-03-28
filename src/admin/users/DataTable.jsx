import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Card, Typography, Button } from "@material-tailwind/react";
import { UserPlusIcon } from "@heroicons/react/24/solid";
import MyToggle from "../../ui/MyToggle";
import modifyIcon from "../../assets/modifyIcon.png";
import deleteIcon from "../../assets/deleteIcon.png";
import Filters from "../../assets/Filters.png";
import RoleCombobox from "../../ui/RoleCombobox";
import CreateUser from "./CreateUser";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { useDispatch } from "react-redux";
import { modifyUsers } from "../AdminSlice";
import axiosInstance from "../../Services/AxiosInstance";

const TABLE_HEAD = [
  { name: "Username", width: "160px" },
  { name: "First Name", width: "160px" },
  { name: "Last Name", width: "160px" },
  { name: "Email", width: "200px" },
  { name: "Role", width: "170px" },
  { name: "Activity" },
  { name: "More" },
];

function Users() {
  const [open, setOpen] = useState(false);
  const [openD, setOpenD] = useState(false);
  const [roles, setRoles] = useState([]);
  const [error, setError] = useState(null);

  const admin = useSelector((state) => state.admin);
  const dispatch = useDispatch();
  const searchQuery = admin.searchQuery;
  const users = admin.users;

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axiosInstance.get(
          "http://127.0.0.1:8000/user/listcreate/"
        );
        dispatch(modifyUsers(response.data));
      } catch (error) {
        setError("An error occurred while fetching user data.");
        console.error("Error fetching user data:", error);
      }
    }

    async function fetchRoles() {
      try {
        const response = await axiosInstance.get(
          "http://127.0.0.1:8000/role/listcreate/"
        );
        setRoles(response.data.map((role) => role.name)); // Extract role names
      } catch (error) {
        setError("An error occurred while fetching roles data.");
        console.error("Error fetching roles data:", error);
      }
    }

    fetchUsers();
    fetchRoles();
  }, [dispatch]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpenD = () => {
    setOpenD(true);
  };

  const handleCloseD = () => {
    setOpenD(false);
  };

  const handleRoleChange = (userId, newRole) => {
    // Make a PATCH request to update the user's role
    axiosInstance
      .patch(`http://127.0.0.1:8000/user/rud/${userId}/`, { role: newRole })
      .then((response) => {
        // If the request is successful, update the users state to reflect the change
        dispatch(
          modifyUsers((prevUsers) => {
            const updatedUsers = prevUsers.map((user) => {
              if (user.id === userId) {
                return { ...user, role: newRole };
              }
              return user;
            });
            return updatedUsers;
          })
        );
      })
      .catch((error) => {
        console.error("Error updating user role:", error);
      });
  };

  const handleToggle = (userId, newStatus) => {
    // Make a PATCH request to update the user's activity status
    axiosInstance
      .patch(`http://127.0.0.1:8000/user/rud/${userId}/`, {
        is_active: newStatus,
      })
      .then((response) => {
        // Update the user's activity status in the local state
        dispatch(
          modifyUsers((prevUsers) => {
            const updatedUsers = prevUsers.map((user) => {
              if (user.id === userId) {
                return { ...user, is_active: newStatus };
              }
              return user;
            });
            return updatedUsers;
          })
        );
      })
      .catch((error) => {
        console.error("Error updating user activity status:", error);
      });
  };

  return (
    <main
      className="table-container m-4 h-full rounded-[11px]"
      style={{ borderRadius: "20px !important", backgroundColor: "#ffffff" }}
    >
      <Card
        className="h-full w-full overflow-auto rounded-[11px]"
        style={{ borderRadius: "20px !important" }}
      >
        <div className="ml-8 mr-12 mt-4 mb-8 flex items-center justify-between gap-8">
          <Typography
            color="blue-gray"
            style={{
              fontSize: "24px",
              color: "#444",
              fontFamily: "Poppins",
              fontWeight: 600,
            }}
          >
            Users
          </Typography>
          <div className="flex items-center">
            <div
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "10px",
                padding: "8px",
                marginLeft: "8px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div
                style={{ borderRadius: "10px", border: "1px solid #D0D3D9" }}
              >
                <Button
                  className="flex items-center gap-3 p-[8px]"
                  style={{
                    color: "#5D6679",
                    fontFamily: "Poppins",
                    fontSize: "12px",
                  }}
                >
                  <img src={Filters} alt="FilterIcon" className="h-6 w-6" />
                  Filters
                </Button>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#2185D5",
                borderRadius: "10px",
                marginLeft: "8px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <CreateUser
                open={open}
                handleClose={handleClose}
                setOpen={setOpen}
              >
                <Button
                  className="flex items-center gap-3 p-[8px]"
                  onClick={handleClickOpen}
                  style={{
                    color: "white",
                    fontFamily: "Poppins",
                    fontSize: "12px",
                  }}
                >
                  <UserPlusIcon strokeWidth={2} className="h-6 w-6" />
                  Add user
                </Button>
              </CreateUser>
            </div>
          </div>
        </div>
        {/* Error handling */}
        {/*error && (
          <div className="text-red-600 bg-red-200 p-4 mb-4 rounded-md">
            Error: {error}
          </div>
        )*/}

        {/* Table Content */}
        <table
          className="w-full ml-6 min-w-max table-auto text-left  overflow-auto inline-block
          max-h-[59vh]"
          style={{ fontSize: "14px", fontFamily: "Poppins", fontWeight: 100 }}
        >
          <thead className="relative z-[2]">
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className={`border-b border-blue-gray-100 bg-blue-gray-50 p-4 sticky top-0 ${
                    head.width ? `w-[${head.width}]` : ""
                  } bg-slate-100`}
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="leading-none"
                    style={{
                      fontFamily: "Poppins",
                      fontWeight: 600,
                      color: "#48505E",
                    }}
                  >
                    {head.name}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {users
              .filter(
                (user) =>
                  user.username
                    .toLowerCase()
                    .startsWith(searchQuery.toLowerCase()) ||
                  user.first_name
                    .toLowerCase()
                    .startsWith(searchQuery.toLowerCase()) ||
                  user.last_name
                    .toLowerCase()
                    .startsWith(searchQuery.toLowerCase()) ||
                  user.email.toLowerCase().startsWith(searchQuery.toLowerCase())
              )
              .map(
                (user) =>
                  user.role !== "consumer" && ( // Filtrer les utilisateurs ayant le rôle "consumer"
                    <tr key={user.id}>
                      <td className="p-4 w-[160px]">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          style={{
                            fontFamily: "Poppins",
                            fontWeight: 500,
                            color: "#48505E",
                          }}
                        >
                          {user.username}
                        </Typography>
                      </td>
                      <td className="p-4 w-[160px]">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          style={{
                            fontFamily: "Poppins",
                            fontWeight: 500,
                            color: "#48505E",
                          }}
                        >
                          {user.first_name}
                        </Typography>
                      </td>
                      <td className="p-4 w-[160px]">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                          style={{
                            fontFamily: "Poppins",
                            fontWeight: 500,
                            color: "#48505E",
                          }}
                        >
                          {user.last_name}
                        </Typography>
                      </td>
                      <td className="p-4 w-[200px]">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                          style={{
                            fontFamily: "Poppins",
                            fontWeight: 500,
                            color: "#48505E",
                          }}
                        >
                          {user.email}
                        </Typography>
                      </td>
                      <td className="p-4 w-[170px]">
                        <RoleCombobox
                          userId={user.id}
                          currentRole={user.role}
                          roles={roles.filter((role) => role !== "consumer")} // Filtrer le rôle "consumer"
                          onRoleChange={(newRole) =>
                            handleRoleChange(user.id, newRole)
                          }
                        />
                      </td>
                      <td className="p-4">
                        <MyToggle
                          enabled={user.is_active}
                          onToggle={(newStatus) =>
                            handleToggle(user.id, newStatus)
                          }
                        />
                      </td>
                      <td className="p-4">
                        <div className="flex justify-start">
                          <button
                            className="bg-white border border-blue-500 rounded-[6px] w-10 h-10 flex items-center justify-center mr-[1px]"
                            style={{ borderColor: "#D0D3D9" }}
                          >
                            <img
                              src={modifyIcon}
                              alt="Modify"
                              className="h-5 w-5"
                            />
                          </button>
                          <ConfirmDelete
                            open={openD}
                            handleClose={handleCloseD}
                            setOpen={setOpenD}
                            concern="user"
                          >
                            <button
                              className="bg-white border border-blue-500 rounded-[6px] w-10 h-10 flex items-center justify-center"
                              style={{
                                borderColor: "#D0D3D9",
                                marginLeft: "3px",
                              }}
                              onClick={handleClickOpenD}
                            >
                              <img
                                src={deleteIcon}
                                alt="Delete"
                                className="h-5 w-5"
                              />
                            </button>
                          </ConfirmDelete>
                        </div>
                      </td>
                    </tr>
                  )
              )}
          </tbody>
        </table>
      </Card>
    </main>
  );
}

export default Users;
