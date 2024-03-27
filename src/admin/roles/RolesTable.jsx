import { Card, Typography, Button } from "@material-tailwind/react";
import { UserPlusIcon } from "@heroicons/react/24/solid";
import modifyIcon from "../../assets/modifyIcon.png";
import deleteIcon from "../../assets/deleteIcon.png";
import ApprovalIcon from "../../assets/ApprovalIcon.png";
import Filters from "../../assets/Filters.png";
import { useState } from "react";
import CreateRole from "./CreateRole";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { useSelector } from "react-redux";

const TABLE_HEAD = ["ID", "Name", "More"];

const TABLE_ROWS = [
  // hedo bilama ma linkina m3a lback
  {
    id: "1",
    name: "Admin",
  },
  {
    id: "2",
    name: " Purshasing department agen",
  },
  {
    id: "3",
    name: "Stockkeeper",
  },
  {
    id: "4",
    name: "Consumer",
  },
  {
    id: "5",
    name: "Responsable for the reporting structure",
  },
  {
    id: "6",
    name: "Director",
  },
];

function RolesTbale() {
  const admin = useSelector((state) => state.admin);
  const searchQuery = admin.searchQuery;
  /*const handleModify = (index) => {
    // dk nzid fonctionnalite ta3ha hna ki nzid hedok les fenetres
    console.log("Modify clicked for index", index);
  };

  const handleDelete = (index) => {
    // hna tani
    console.log("Delete clicked for index", index);
  };*/

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [openD, setOpenD] = useState(false);

  const handleClickOpenD = () => {
    setOpenD(true);
  };

  const handleCloseD = () => {
    setOpenD(false);
  };

  return (
    <main
      className="table-container m-4 h-full rounded-[11px]"
      style={{
        borderRadius: "20px !important",
        backgroundColor: "#ffffff",
      }}
    >
      <Card
        className="h-full w-full overflow-auto  rounded-[11px]"
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
            Roles
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
                style={{
                  borderRadius: "10px",
                  border: "1px solid #D0D3D9",
                }}
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
              <CreateRole
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
                  Add role
                </Button>
              </CreateRole>
            </div>
          </div>
        </div>
        <table
          className="w-full ml-6 min-w-max table-auto text-left"
          style={{ fontSize: "14px", fontFamily: "Poppins", fontWeight: 100 }}
        >
          <thead>
            <tr>
              {TABLE_HEAD.map((head, index) => {
                const isLast = index === TABLE_HEAD.length - 1;
                return (
                  <th
                    key={head}
                    className={`border-b border-blue-gray-100 bg-blue-gray-50 p-4 ${
                      isLast ? "flex justify-end pr-28" : ""
                    }`}
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                      style={{ fontFamily: "Poppins", fontWeight: 500 }}
                    >
                      {head}
                    </Typography>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.filter(
              (role) =>
                role.id.toLowerCase().startsWith(searchQuery.toLowerCase()) ||
                role.name.toLowerCase().startsWith(searchQuery.toLowerCase())
            ).map(({ id, name }, index) => {
              const isLast = index === TABLE_ROWS.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={id}>
                  <td className={`${classes} w-[200px]`}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      style={{
                        fontFamily: "Poppins",
                        fontWeight: 500,
                        color: "#48505E",
                      }}
                    >
                      {id}
                    </Typography>
                  </td>

                  <td className={`${classes} w-[200px],mr-2`}>
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
                      {name}
                    </Typography>
                  </td>

                  <td className={classes}>
                    <div className="flex justify-end pr-10">
                      <div
                        className="bg-white border border-blue-500 rounded-[6px] w-10 h-10 flex items-center justify-center mr-[4px]"
                        style={{ borderColor: "#D0D3D9" }}
                      >
                        <img
                          src={ApprovalIcon}
                          alt="approval"
                          className="h-5 w-5"
                        />
                      </div>
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
                          className="bg-white border border-blue-500 rounded-[6px] w-10 h-10 flex items-center justify-center "
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
              );
            })}
          </tbody>
        </table>
      </Card>
    </main>
  );
}

export default RolesTbale;
