import React, { useState } from "react";
import './adddoctor.css';
import upload from "../assets/upload.svg"
import axios from "axios"; 

const Adddoctor = () => {
    const [doctor, setDoctor] = useState({
        name: "",
        email: "",
        password: "",
        experience: "1 Year",
        fees: "",
        speciality: "General physician",
        degree: "",
        address1: "",
        address2: "",
        about: ""
    });
    const [photo, setPhoto] = useState(null);

    const handleChange = (e) => {
        setDoctor({ ...doctor, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setPhoto(e.target.files[0]);
      };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        Object.entries(doctor).forEach(([key, value]) => {
        formData.append(key, value);
        });
    if (photo) formData.append("photo", photo);
        try {
            const response = await axios.post("http://localhost:5000/api/add-doctor", 
                formData,
            {
                headers: { "Content-Type": "multipart/form-data" },
            }
            );
            alert(response.data.message);
            setDoctor({
                name: "",
                email: "",
                password: "",
                experience: "1 Year",
                fees: "",
                speciality: "General physician",
                degree: "",
                address1: "",
                address2: "",
                about: ""
            });
        } catch (error) {
            alert("Error adding doctor: " + error.response?.data.message || error.message);
        }
    };

    return (
        <div className="ap-dash">
            <div>
                
                <h3>Add Doctor</h3>
                <form onSubmit={handleSubmit} className="add-up">
                    <div className="add-up2">
                        <div>
                            <img src={upload}alt="Click to upload"onClick={() => window.fileInput.click()}></img>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                required
                            />
                            <p>Upload doctor<br/>picture</p>
                        </div>
                        <div className="add-form">
                            <div className="form-left">
                                <div>
                                    <label>Your name</label>
                                    <input type="text" name="name" className="form-box" placeholder="Name" value={doctor.name} onChange={handleChange} required />
                                </div>
                                <div>
                                    <label>Doctor Email</label>
                                    <input type="email" name="email" className="form-box" placeholder="Email" value={doctor.email} onChange={handleChange} required />
                                </div>
                                <div>
                                    <label>Set Password</label>
                                    <input type="password" name="password" className="form-box" placeholder="Password" value={doctor.password} onChange={handleChange} required />
                                </div>
                                <div>
                                    <label>Experience</label>
                                    <select name="experience" className="form-box" value={doctor.experience} onChange={handleChange}>
                                        {[...Array(10)].map((_, i) => (
                                            <option key={i} value={`${i + 1} Years`}>{i + 1} Years</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label>Fees</label>
                                    <input type="text" name="fees" className="form-box" placeholder="Doctor Fees" value={doctor.fees} onChange={handleChange} required />
                                </div>
                            </div>
                            <div className="form-right">
                                <div>
                                    <label>Speciality</label>
                                    <select name="speciality" className="form-box" value={doctor.speciality} onChange={handleChange}>
                                        {["General physician", "Gynecologist", "Dermatologist", "Pediatricians", "Neurologist", "Gastroenterologist"].map(spec => (
                                            <option key={spec} value={spec}>{spec}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label>Degree</label>
                                    <input type="text" name="degree" className="form-box" placeholder="Degree" value={doctor.degree} onChange={handleChange} required />
                                </div>
                                <div>
                                    <label>Address</label>
                                    <input type="text" name="address1" className="form-box" placeholder="Address 1" value={doctor.address1} onChange={handleChange} required />
                                    <input type="text" name="address2" className="form-box" placeholder="Address 2" value={doctor.address2} onChange={handleChange} />
                                </div>
                            </div>
                        </div>
                        <div>
                            <h5>About Doctor</h5>
                            <textarea name="about" className="about-form" rows="5" placeholder="Write about Doctor" value={doctor.about} onChange={handleChange} required></textarea>
                        </div>
                        
                        <button type="submit" className="ad-but">Add Doctor</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Adddoctor;



