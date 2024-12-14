import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Users() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "nitee",
      mobileNo: "9886262891",
      age: 20,
    },
  ]);

  const handleEdit = (userId) => {
    // Find the user to edit by ID
    const userToEdit = users.find((user) => user.id === userId);
    // Navigate to RegistrationForm and pass user data via state
    navigate("/RegistrationForm", { state: { user: userToEdit } });
  };

  return (
    <div>
      <button
        className="your-class-name"
        id="myButton"
        onClick="alert('Button clicked!')"
      >
        Add
      </button>

      <table>
        <tr>
          <th>Name</th>
          <th>Mobile No.</th>
          <th>Age</th>
          <th>Action</th>
        </tr>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.mobileNo}</td>
              <td>{user.age}</td>
              <td>
                <button onClick={() => handleEdit(user.id)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
