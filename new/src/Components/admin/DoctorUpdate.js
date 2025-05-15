import React, { useState } from "react";
import axios from "axios";

const DoctorUpdate = () => {
  const [id, setId] = useState("");
  const [updatedData, setUpdatedData] = useState({
    name: "",
    email: "",
    password: "",
    experience: "",
    fees: "",
    speciality: "",
    degree: "",
    address1: "",
    address2: "",
    about: "",
  });
  const [photo, setPhoto] = useState(null);

  const handleChange = (e) => {
    setUpdatedData({ ...updatedData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(updatedData).forEach(([key, value]) =>
      formData.append(key, value)
    );
    if (photo) formData.append("photo", photo);

    try {
      const res = await axios.put(
        `http://localhost:5000/api/update-doctor/${id}`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      alert("Doctor updated successfully!");
    } catch (err) {
      alert("Error updating doctor: " + err.message);
    }
  };

  return (
    <div>
      <h3>Update Doctor</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Doctor ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          type="text"
          name="password"
          placeholder="New Password"
          onChange={handleChange}
        />
        {/* Add more fields if needed */}
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Update Doctor</button>
      </form>
    </div>
  );
};

export default DoctorUpdate;
