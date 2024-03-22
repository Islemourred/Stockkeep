import { Card, Typography, Button } from "@material-tailwind/react";
import { Avatar } from "@material-tailwind/react";
import modifyIcon from "../../assets/Vector.png";
import islemImage from "../../assets/islem.png";
import esiStore from "../../assets/EsiStore.png";
import EditProfile from "./EditProfile";
import EditCompany from "./EditCompany";
import { useState } from "react";

const TABLE_HEAD = ["Type", "Picture", "Name", "Email", "TVA", "More"];

const TABLE_ROWS = [
  {
    Type: "Profile",
    Picture: islemImage,
    Name: "Ourred Islem Charaf Eddine",
    Email: "ic.ourred@esi-sba.dz",
    TVA: "-",
  },
  {
    Type: "Company",
    Picture: esiStore,
    Name: "ESI-STORE",
    Email: "contact@esi-sba.dz",
    TVA: "10%",
  },
];

function Settings() {
  const handleModify = (index) => {
    console.log("Modify clicked for index", index);
  };
  const [open, setOpen] = useState(false);
  const [editType, setEditType] = useState("");

  const handleClickOpen = (index) => {
    setOpen(true);
    if (TABLE_ROWS[index].Type === "Profile") {
      setEditType("profile");
    } else if (TABLE_ROWS[index].Type === "Company") {
      setEditType("company");
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="table-container m-4 h-full" style={{ borderRadius: "20px !important", backgroundColor: "#ffffff" }}>
      <Card className="h-full w-full overflow-scroll" style={{ borderRadius: "20px !important" }}>
        <div className="ml-8 mr-12 mt-4 mb-8 mt-12 flex items-center justify-between gap-8">
          <Typography color="blue-gray" style={{ fontSize: "24px", color: "#444444", fontFamily: "Poppins", fontWeight: 600 }}>
            Settings
          </Typography>
        </div>
        <table className="w-full ml-6 min-w-max table-auto text-left" style={{ fontSize: "14px", fontFamily: "Poppins", fontWeight: 100 }}>
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70" style={{ fontFamily: "Poppins", fontWeight: 600 }}>
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(({ Type, Picture, Name, Email, TVA, More }, index) => {
              const isLast = index === TABLE_ROWS.length - 1;
              const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={Type}>
                  <td className={`${classes} w-[160px]`}>
                    <Typography variant="small" color="blue-gray" style={{ fontFamily: "Poppins", fontWeight: 100 }}>
                      {Type}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Avatar src={Picture} alt={Name} size="md" className="rounded-full" />
                  </td>
                  <td className={`${classes} w-[200px],mr-2`}>
                    <Typography variant="small" color="blue-gray" className="font-normal" style={{ fontFamily: "Poppins" }}>
                      {Name}
                    </Typography>
                  </td>
                  <td className={`${classes} w-[200px],mr-2`}>
                    <Typography variant="small" color="blue-gray" className="font-normal" style={{ fontFamily: "Poppins" }}>
                      {Email}
                    </Typography>
                  </td>
                  <td className={`${classes} w-[200px],mr-2`}>
                    <Typography variant="small" color="blue-gray" className="font-normal" style={{ fontFamily: "Poppins" }}>
                      {TVA}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <div className="bg-white border border-blue-500 rounded-[10px] w-[70px] h-[37px] flex items-center justify-center mr-[1px]" style={{ borderColor: "#D0D3D9" }}>
                      {editType === "profile" && (
                        <EditProfile open={open} handleClose={handleClose} setOpen={setOpen}>
                          <Button className="flex items-center gap-3 p-[8px]" onClick={() => handleClickOpen(index)}>
                            <div className="flex flex-row justify-center items-center">
                              <img src={modifyIcon} alt="Modify" className="h-5 w-5 mr-1.5" />
                              <span className="text-black">Edit</span>
                            </div>
                          </Button>
                        </EditProfile>
                      )}
                      {editType === "company" && (
                        <EditCompany open={open} handleClose={handleClose} setOpen={setOpen}>
                          <Button className="flex items-center gap-3 p-[8px]" onClick={() => handleClickOpen(index)}>
                            <div className="flex flex-row justify-center items-center">
                              <img src={modifyIcon} alt="Modify" className="h-5 w-5 mr-1.5" />
                              <span className="text-black">Edit</span>
                            </div>
                          </Button>
                        </EditCompany>
                      )}
                      {editType !== "profile" && editType !== "company" && (
                        <Button className="flex items-center gap-3 p-[8px]" onClick={() => handleClickOpen(index)}>
                          <div className="flex flex-row justify-center items-center">
                            <img src={modifyIcon} alt="Modify" className="h-5 w-5 mr-1.5" />
                            <span className="text-black">Edit</span>
                          </div>
                        </Button>
                      )}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
    </div>
  );
}

export default Settings;
