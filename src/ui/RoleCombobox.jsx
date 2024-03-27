// RoleCombobox.js
import React from "react";
import axios from "axios";

function RoleCombobox({ userId, currentRole, roles, onRoleChange }) {
  const handleChange = async (event) => {
    const newRole = event.target.value;
    try {
      // Send PATCH request to update user's role
      await axios.patch(`http://127.0.0.1:8000/user/rud/${userId}/`, { role: newRole });
      // Update the role in the parent component
      onRoleChange(newRole);
      console.log(`User's role updated to ${newRole}`);
    } catch (error) {
      console.error("Error updating user's role:", error);
    }
  };

  return (
    <select
      value={currentRole} // Use the currentRole prop for the selected value
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
      {roles.map((role) => (
        <option key={role} value={role}>{role}</option>
      ))}
    </select>
  );
}

export default RoleCombobox;
