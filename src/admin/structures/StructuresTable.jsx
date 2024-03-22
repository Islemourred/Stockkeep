import { Card, Typography, Button } from "@material-tailwind/react";
import { UserPlusIcon } from "@heroicons/react/24/solid";
import modifyIcon from "../../assets/modifyIcon.png";
import deleteIcon from "../../assets/deleteIcon.png";
import Filters from "../../assets/Filters.png";
import { useState } from "react";
import CreateStructure from "./CreateStructure";
import ConfirmDelete from "../../ui/ConfirmDelete";

const TABLE_HEAD = ["ID", "Abreviation", "Name", "Responsable", "More"];

const TABLE_ROWS = [
  // hedo bilama ma linkina m3a lback
  {
    id: "1",
    abreviation: "DG",
    name: "General direction",
    responsable: "aced",
  },
  {
    id: "2",
    abreviation: "SG",
    name: "General secreteriat",
    responsable: "bensaber",
  },
  {
    id: "3",
    abreviation: "CP",
    name: "Cycle prepa",
    responsable: "aced",
  },
  {
    id: "4",
    abreviation: "CS",
    name: "Second Cycle Department",
    responsable: "Amrane Abdelkader",
  },
  {
    id: "5",
    abreviation: "CP",
    name: "Department of Education and Diploma",
    responsable: "Amar Bensaber Djamel",
  },
  {
    id: "6",
    abreviation: "CP",
    name: "Externel relations Department",
    responsable: "Bedjaoui Mohamed",
  },
  {
    id: "7",
    abreviation: "CP",
    name: "Department of Doctoral Training",
    responsable: "Malki Mimoun",
  },
];

function StructuresTable() {
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
        className="h-full w-full overflow-auto rounded-[11px]"
        style={{ borderRadius: "20px !important" }}
      >
        <div className="ml-8 mr-12 mt-4 mb-8 flex items-center justify-between gap-8 ">
          <Typography
            color="blue-gray"
            style={{
              fontSize: "24px",
              color: "#444",
              fontFamily: "Poppins",
              fontWeight: 600,
            }}
          >
            Structures
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
              <CreateStructure
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
                  Add structure
                </Button>
              </CreateStructure>
            </div>
          </div>
        </div>
        <table
          className="w-full ml-6 min-w-max table-auto text-left"
          style={{ fontSize: "14px", fontFamily: "Poppins", fontWeight: 100 }}
        >
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
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
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(({ id, abreviation, name, responsable }, index) => {
              const isLast = index === TABLE_ROWS.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={name}>
                  <td className={`${classes} w-[160px]`}>
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
                  <td className={`${classes} w-[160px]`}>
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
                      {abreviation}
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
                      {responsable}
                    </Typography>
                  </td>
                  <td className={classes}>
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

export default StructuresTable;
