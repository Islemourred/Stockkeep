import { Card, Typography, Button } from "@material-tailwind/react";
import { UserPlusIcon } from "@heroicons/react/24/solid";
import MyToggle from '../../Components/Users/MyToggle'; 
import modifyIcon from '../../assets/modifyIcon.png';
import deleteIcon from '../../assets/deleteIcon.png';
import Filters from '../../assets/Filters.png';
import RoleCombobox from '../../Components/Users/RoleCombobox'; 


const TABLE_HEAD = ["First Name", "Last Name", "Email", "Role", "Activity", "More"];

const TABLE_ROWS = [
  // hedo bilama ma linkina m3a lback
  {
    name: "Meriem",
    lastName: "Mokhtari",
    email: "hm.mokhtari@esi-sba.dz",
    role: "stockkeeper",
    activity: true,
  },
  {
    name: "Islem",
    lastName: "Ourred",
    email: "ic.ourred@esi-sba.dz",
    role: "stockkeeper",
    activity: false,
  },
  {
    name: "abderrahmane",
    lastName: "guerrinik",
    email: "ac.gurrinik@esi-sba.dz",
    role: "stockkeeper",
    activity: true,
  },
];



function Users() {
  const handleModify = (index) => {
    // dk nzid fonctionnalite ta3ha hna ki nzid hedok les fenetres 
    console.log("Modify clicked for index", index);
  };

  const handleDelete = (index) => {
    // hna tani
    console.log("Delete clicked for index", index);
  };

  return (
    <div className="table-container m-4 h-full" style={{ borderRadius: '20px !important', backgroundColor: '#ffffff' }}>
      <Card className="h-full w-full overflow-scroll" style={{ borderRadius: '20px !important'}}>
        <div className="ml-8 mr-12 mt-4 mb-8 flex items-center justify-between gap-8">
          <Typography color="blue-gray" style={{ fontSize: '24px', color: '#444444', fontFamily: 'Poppins' , fontWeight:600 }}>
            Users
          </Typography>
          <div className="flex items-center">
            <div style={{ backgroundColor: '#FFFFFF', borderRadius: '10px', padding: '8px', marginLeft: '8px', display: 'flex', alignItems: 'center' }}>
              <div style={{ borderRadius: '10px', border: '1px solid #D0D3D9', padding: '8px' }}>
                <Button className="flex items-center gap-3" style={{ color: '#5D6679', fontFamily: 'Poppins', fontSize: '12px' }}>
                  <img src={Filters} alt="FilterIcon" className="h-6 w-6" />
                  Filters
                </Button>
              </div>
            </div>
            <div style={{ backgroundColor: '#2185D5', borderRadius: '10px', padding: '8px', marginLeft: '8px', display: 'flex', alignItems: 'center' }}>
              <Button className="flex items-center gap-3" style={{ color: 'white', fontFamily: 'Poppins', fontSize: '12px' }}>
                <UserPlusIcon strokeWidth={2} className="h-6 w-6" />
                Add user
              </Button>
            </div>
          </div>
        </div>
        <table className="w-full ml-6 min-w-max table-auto text-left" style={{ fontSize: '14px',fontFamily: 'Poppins',fontWeight:100 }}>
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
                    style={{ fontFamily: 'Poppins' , fontWeight: 600 }}
                  
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(({ name, lastName, email, role, activity }, index) => {
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
                      
                      style={{ fontFamily: 'Poppins' ,fontWeight:100}}
                    >
                      {name}
                    </Typography>
                  </td>
                  <td className={`${classes} w-[160px]`}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                      style={{ fontFamily: 'Poppins' }}
                    >
                      {lastName}
                    </Typography>
                  </td>
                  <td className={`${classes} w-[200px],mr-2`} >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                      style={{ fontFamily: 'Poppins' }}
                    >
                      {email}
                    </Typography>
                  </td>
                  <td className={`${classes} w-[170px]`}  >
                    <RoleCombobox />
                  </td>
                  <td className={`${classes} `}>
                    <MyToggle enabled={activity} />
                  </td>
                  <td className={classes}>
                    <div className="flex justify-start">
                      <div className="bg-white border border-blue-500 rounded-[6px] w-10 h-10 flex items-center justify-center mr-[1px]"
                        style={{ borderColor: '#D0D3D9' }}>
                        <img src={modifyIcon} alt="Modify" className="h-5 w-5" />
                      </div>
                      <div className="bg-white border border-blue-500 rounded-[6px] w-10 h-10 flex items-center justify-center "
                        style={{ borderColor: '#D0D3D9' }}>
                        <img src={deleteIcon} alt="Delete" className="h-5 w-5" />
                      </div>
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





export default Users;
