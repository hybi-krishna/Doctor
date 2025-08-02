import React, {useEffect, useState } from "react";
import './alldoc.css';
import { Link } from "react-router-dom";
import axios from "axios";

const Alldoc = () => {

    //change
    const [doctors, setDoctors] = useState([]);
    const [selectedSpeciality, setSelectedSpeciality] = useState(null);
    useEffect(() => {
        axios
          .get(`${process.env.REACT_APP_BASE_URL}/api/doctors`)
          .then((res) => {
            setDoctors(res.data);
          })
          .catch((err) => {
            console.error("Error fetching doctors:", err);
          });
      }, []);
    
      const handleSpecialityClick = (speciality) => {
        setSelectedSpeciality(speciality);
      };
    
      const filteredDoctors = selectedSpeciality
        ? doctors.filter((doc) => doc.speciality === selectedSpeciality)
        : doctors;



    

    return (
        <header>
            <div className="bro">
                <p>Browse through the doctors specialist.</p>
            </div>
            <div className="bro-1">
                <div className="option">
                    
                    


                            {/* Show All Button */}
          <div
            onClick={() => setSelectedSpeciality(null)}
            className={`button ${!selectedSpeciality ? "button-clicked" : ""}`}
          >
            <p>Show All</p>
          </div>

          {/* Specialty Buttons */}
          {[
            "General physician",
            "Gynecologist",
            "Dermatologist",
            "Pediatricians",
            "Neurologist",
            "Gastroenterologist",
          ].map((spec) => (
            <div
              key={spec}
              onClick={() => handleSpecialityClick(spec)}
              className={`button ${
                selectedSpeciality === spec ? "button-clicked" : ""
              }`}
            >
              <p>{spec}</p>
            </div>
          ))}


                </div>
                <div className="gp">
          <div className="all-row">
            {filteredDoctors.map((doctor) => (
              <Link  to={`/singledoc/${doctor._id}`} className="link-no-style">
              <div key={doctor._id} className="all-row-1">
                <img
                  src={
                    doctor.photo
                      ? `http://localhost:5000/${doctor.photo.replace(/\\/g, "/")}`
                      : "https://via.placeholder.com/100"
                  }
                  alt={doctor.name}
                />
                <div>
                  <h4>
                    <span>.....</span> Available
                  </h4>
                  <h3>Dr. {doctor.name}</h3>
                  <p>{doctor.speciality}</p>
                </div>
              </div>
              </Link>
            ))}
          </div>
        </div>

                
            </div>
        </header>
    );
};

export default Alldoc;
