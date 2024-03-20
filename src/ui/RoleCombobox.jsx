import React, { useState } from "react";

const roles = ["Storekeeper", "CP respo", "Director"];

function RoleCombobox() {
  const [selectedRole, setSelectedRole] = useState(roles[0]);

  const handleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  return (
    <select
      value={selectedRole}
      onChange={handleChange}
      className="block w-30 p-[3px] outline-none bg-blue-500 border border-blue-500 rounded-[10px] shadow-sm focus:ring-blue-500 focus:border-blue-500"
      style={{
        backgroundColor: "#2185D5",
        borderColor: "#2185D5",
        color: "white",
        fontFamily: "Poppins",
        fontWeight: "200",
      }}
    >
      {roles.map((role, index) => (
        <option key={index} value={role}>
          {role}
        </option>
      ))}
    </select>
  );
}

export default RoleCombobox;
