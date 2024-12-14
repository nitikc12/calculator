import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function RegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    DOB: "",
    province: "",
    address: "",
    number: "",
    gender: "",
  });
  const [errors, setErrors] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
  });
  const navigate = useNavigate(); // Initialize useNavigate hook
  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    if (formData.firstName.trim() === "") {
      newErrors.firstName = "First name is required"; // Correct the property name
      isValid = false;
    } else {
      newErrors.firstName = ""; // Clear error if valid
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form submitted with data:", formData);

      // Redirect to /users after successful form submission
      navigate("/Users");
    } else {
      console.log("Form has validation errors");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target; // Destructure 'name' and 'value' from the event target
    setFormData({ ...formData, [name]: value }); // Update formData with the correct field
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form">
        <div className="form-1">
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
          <span className="error">{errors.firstName}</span>{" "}
          {/* Corrected error field */}
          {/* </div>
      <div > */}
          <label>Middle Name:</label>
          <input
            type="text"
            name="middleName"
            value={formData.middleName}
            onChange={handleInputChange}
          />
          {/* </div>
      <div> */}
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-2">
          <label>DOB :</label>
          <input
            type="date"
            name="DOB"
            value={formData.DOB}
            onChange={handleInputChange}
          />

          <label>Province:</label>
          <select
            name="province"
            value={formData.province}
            onChange={handleInputChange}
          >
            <option value="">Select a Province</option>
            <option value="Bagmati">Bagmati</option>
            <option value="Lumbini">Lumbini</option>
          </select>

          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-3">
          <label>Ph.Number:</label>
          <input
            type="number"
            name="number"
            value={formData.number}
            onChange={handleInputChange}
          />
          <label>District:</label>
          <select
            name="district"
            value={formData.district}
            onChange={handleInputChange}
          >
            <option value="">Select a District</option>
            <option value="Bagmati">Kathmandu</option>
            <option value="Lumbini">Lalitpur</option>
          </select>

          <label>Gender:</label>

          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === "male"}
              onChange={handleInputChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === "female"}
              onChange={handleInputChange}
            />
            Female
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="other"
              checked={formData.gender === "other"}
              onChange={handleInputChange}
            />
            Other
          </label>
        </div>
      </div>
      <button type="submit">Save</button>
    </form>
  );
}

export default RegistrationForm;
