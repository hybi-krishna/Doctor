import React, {useEffect, useState } from "react";
import './alldoc.css';
import axios from "axios";
import p1 from '../assets/p1.png';
import p2 from '../assets/p2.png';
import p3 from '../assets/p3.png';
import p4 from '../assets/p4.png';
import p5 from '../assets/p5.png';
import p6 from '../assets/p6.png';
import p7 from '../assets/p7.png';
import p8 from '../assets/p8.png';
import p9 from '../assets/p2.png';
import p10 from '../assets/p10.png';
import p11 from '../assets/p11.png';
import p12 from '../assets/p12.png';
import p13 from '../assets/p13.png';
import p14 from '../assets/p14.png';
import p15 from '../assets/p15.png';

const Alldoc = () => {

    //change
    const [doctors, setDoctors] = useState([]);
    const [selectedSpeciality, setSelectedSpeciality] = useState(null);
    useEffect(() => {
        axios
          .get("http://localhost:5000/api/doctors")
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


    const [isGpVisible, setIsGpVisible] = useState(false);
    const [isGyVisible, setIsGyVisible] = useState(false);
    const [isDeVisible, setIsDeVisible] = useState(false);
    const [isPeVisible, setIsPeVisible] = useState(false);
    const [isNeVisible, setIsNeVisible] = useState(false);
    const [isGaVisible, setIsGaVisible] = useState(false);

    const [gpButtonClicked, setGpButtonClicked] = useState(false);
    const [gyButtonClicked, setGyButtonClicked] = useState(false);
    const [deButtonClicked, setDeButtonClicked] = useState(false);
    const [peButtonClicked, setPeButtonClicked] = useState(false);
    const [neButtonClicked, setNeButtonClicked] = useState(false);
    const [gaButtonClicked, setGaButtonClicked] = useState(false);

    const handleGpClick = () => {
        setIsGpVisible(true);
        setGpButtonClicked(true);
        setIsGyVisible(false); 
        setGyButtonClicked(false);
        setIsDeVisible(false);
        setDeButtonClicked(false);
        setIsPeVisible(false);
        setPeButtonClicked(false); 
        setIsGaVisible(false);
        setGaButtonClicked(false);
        setIsNeVisible(false);
        setNeButtonClicked(false);
    };

    const handleGyClick = () => {
        setIsGyVisible(true);
        setGyButtonClicked(true);
        setIsGpVisible(false);
        setGpButtonClicked(false);
        setIsDeVisible(false);
        setDeButtonClicked(false);
        setIsPeVisible(false);
        setPeButtonClicked(false);
        setIsGaVisible(false);
        setGaButtonClicked(false);
        setIsNeVisible(false);
        setNeButtonClicked(false);
    };
    const handleDeClick = () => {
        setIsDeVisible(true);
        setDeButtonClicked(true);
        setIsGyVisible(false);
        setGyButtonClicked(false);
        setIsGpVisible(false);
        setGpButtonClicked(false);
        setIsPeVisible(false);
        setPeButtonClicked(false);
        setIsGaVisible(false);
        setGaButtonClicked(false);
        setIsNeVisible(false);
        setNeButtonClicked(false);
    };
    const handlePeClick = () => {
        setIsPeVisible(true);
        setPeButtonClicked(true);
        setIsDeVisible(false);
        setDeButtonClicked(false);
        setIsGyVisible(false);
        setGyButtonClicked(false);
        setIsGpVisible(false);
        setGpButtonClicked(false);
        setIsGaVisible(false);
        setGaButtonClicked(false);
        setIsNeVisible(false);
        setNeButtonClicked(false);
    };
    const handleNeClick = () => {
        
        setIsNeVisible(true);
        setNeButtonClicked(true);
        setIsPeVisible(false);
        setPeButtonClicked(false);
        setIsDeVisible(false);
        setDeButtonClicked(false);
        setIsGyVisible(false);
        setGyButtonClicked(false);
        setIsGpVisible(false);
        setGpButtonClicked(false);
        setIsGaVisible(false);
        setGaButtonClicked(false);
    };
    const handleGaClick = () => {
        setIsGaVisible(true);
        setGaButtonClicked(true);
        setIsNeVisible(false);
        setNeButtonClicked(false);
        setIsPeVisible(false);
        setPeButtonClicked(false);
        setIsDeVisible(false);
        setDeButtonClicked(false);
        setIsGyVisible(false);
        setGyButtonClicked(false);
        setIsGpVisible(false);
        setGpButtonClicked(false);
    };

    return (
        <header>
            <div className="bro">
                <p>Browse through the doctors specialist.</p>
            </div>
            <div className="bro-1">
                <div className="option">
                    {/* <div onClick={handleGpClick} className={`button ${gpButtonClicked ? 'button-clicked' : ''}`}>
                        <p>General physician</p>
                    </div>
                    <div onClick={handleGyClick} className={`button ${gyButtonClicked ? 'button-clicked' : ''}`}>
                        <p>Gynecologist</p>
                    </div>
                    <div onClick={handleDeClick} className={`button ${deButtonClicked ? 'button-clicked' : ''}`}>
                        <p>Dermatologist</p>
                    </div>
                    <div onClick={handlePeClick} className={`button ${peButtonClicked ? 'button-clicked' : ''}`}>
                        <p>Pediatricians</p>
                    </div>
                    <div onClick={handleNeClick} className={`button ${neButtonClicked ? 'button-clicked' : ''}`}>
                        <p>Neurologist</p>
                    </div>
                    <div onClick={handleGaClick} className={`button ${gaButtonClicked ? 'button-clicked' : ''}`}>
                        <p>Gastroenterologist</p>
                    </div> */}
                    


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
            ))}
          </div>
        </div>

                {/* General Physician Section */}
                {/* {isGpVisible && (
                    <div className="gp">
                        <div className="all-row"> 
                            <div className="all-row-1">
                                <img src={p1} alt=" " />
                                <div>
                                    <h4><span>.....</span> Available</h4>
                                    <h3>Dr. Richard James</h3>
                                    <p>General physician</p>
                                </div>
                            </div>
                            <div className="all-row-1">
                                <img src={p7} alt="" />
                                <div>
                                    <h4><span>.....</span> Available</h4>
                                    <h3>Dr. Christopher Davis</h3>
                                    <p>General physician</p>
                                </div>
                            </div>
                            <div className="all-row-1">
                                <img src={p13} alt="" />
                                <div>
                                    <h4><span>.....</span> Available</h4>
                                    <h3>Dr. Chloe Evans</h3>
                                    <p>General physician</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )} */}

                {/* Gynecologist Section */}
                {/* {isGyVisible && (
                    <div className="gy">
                        <div className="all-row">
                            <div className="all-row-1">
                                <img src={p2} alt="" />
                                <div>
                                    <h4><span>.....</span> Available</h4>
                                    <h3>Dr. Emily Larson</h3>
                                    <p>Gynecologist</p>
                                </div>
                            </div>
                            <div className="all-row-1">
                                <img src={p8} alt="" />
                                <div>
                                    <h4><span>.....</span> Available</h4>
                                    <h3>Dr. Timothy White</h3>
                                    <p>Gynecologist</p>
                                </div>
                            </div>
                            <div className="all-row-1">
                                <img src={p14} alt="" />
                                <div>
                                    <h4><span>.....</span> Available</h4>
                                    <h3>Dr. Ryan Martinez</h3>
                                    <p>Gynecologist</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )} */}

                {/* Dermatologist */}

                {/* {isDeVisible && (
                    <div className="gp">
                        <div className="all-row">
                            <div className="all-row-1">
                            <img src={p3}alt=""/>
                            <div>
                            <h4><span>.....</span>     Available</h4>
                            <h3>Dr. Sarah Patel</h3>
                            <p>Dermatologist</p>
                            </div>
                            </div>
                            <div className="all-row-1">
                            <img src={p9}alt=""/>
                            <div>
                            <h4><span>.....</span>     Available</h4>
                            <h3>Dr. Ava Mitchell</h3>
                            <p>Dermatologist</p>
                            </div>
                            </div>
                            <div className="all-row-1">
                            <img src={p15} alt=""/>
                            <div>
                            <h4><span>.....</span>     Available</h4>
                            <h3>Dr. Amelia Hill</h3>
                            <p>Dermatologist</p>
                            </div>
                            </div>
                        </div>
                    </div>
                )} */}

                {/* Pediatricians */}

                {/* {isPeVisible && (
                    <div className="gp">
                        <div className="all-row">
                        <div className="all-row-1">
                            <img src={p4}alt=""/>
                            <div>
                            <h4><span>.....</span>     Available</h4>
                            <h3>Dr. Christopher Lee</h3>
                            <p>Pediatricians</p>
                            </div>
                        </div>
                        <div className="all-row-1">
                            <img src={p10}alt=""/>
                            <div>
                            <h4><span>.....</span>     Available</h4>
                            <h3>Dr. Jeffrey King</h3>
                            <p>Pediatricians</p>
                            </div>
                        </div>
                        </div>
                    </div>
                )} */}

                {/* Neurologist */}

                {/* {isNeVisible && (
                    <div className="gp">
                        <div className="all-row">
                            <div className="all-row-1">
                                <img src={p5}alt=""/>
                                <div>
                                <h4><span>.....</span>     Available</h4>
                                <h3>Dr. Jennifer Garcia</h3>
                                <p>Neurologist</p>
                                </div>
                            </div>
                            <div className="all-row-1">
                            <img src={p11}alt=""/>
                            <div>
                            <h4><span>.....</span>     Available</h4>
                            <h3>Dr. Zoe Kelly</h3>
                            <p>Neurologist</p>
                            </div>
                        </div>
                        </div>
                    </div>
                )} */}

                {/* Gastroenterologist */}

                {/* {isGaVisible && (
                    <div className="gp">
                        <div className="all-row">
                        <div className="all-row-1">
                            <img src={p6}alt=""/>
                            <div>
                            <h4><span>.....</span>    Available</h4>
                            <h3>Dr. Andrew Williams</h3>
                            <p>Gastroenterologist</p>
                            </div>
                        </div>
                        <div className="all-row-1">
                            <img src={p12}alt=""/>
                            <div>
                            <h4><span>.....</span>     Available</h4>
                            <h3>Dr. Patrick Harris</h3>
                            <p>Gastroenterologist</p>
                            </div>
                        </div>
                        </div>
                    </div>
                )} */}

                {/* Hide this div when either General Physician or Gynecologist section is visible */}
                {/* <div className={`main-pic ${isGpVisible || isGyVisible || isDeVisible || isPeVisible || isNeVisible || isGaVisible ? "hidden" : ""}`}>
                <div className="all-row">
                        <div className="all-row-1">
                            <img src={p1}alt=" "/>
                            <div>
                            <h4><span>.....</span>    Available</h4>
                            <h3>Dr. Richard James</h3>
                            <p>General physician</p>
                            </div>
                        </div>
                        <div className="all-row-1">
                            <img src={p2}alt=""/>
                            <div>
                            <h4><span>.....</span>    Available</h4>
                            <h3>Dr. Emily Larson</h3>
                            <p>Gynecologist</p>
                            </div>
                        </div>
                        <div className="all-row-1">
                            <img src={p3}alt=""/>
                            <div>
                            <h4><span>.....</span>     Available</h4>
                            <h3>Dr. Sarah Patel</h3>
                            <p>Dermatologist</p>
                            </div>
                        </div>
                        <div className="all-row-1">
                            <img src={p4}alt=""/>
                            <div>
                            <h4><span>.....</span>     Available</h4>
                            <h3>Dr. Christopher Lee</h3>
                            <p>Pediatricians</p>
                            </div>
                        </div>
    
                    </div> 
                    <div className="all-row">
                            <div className="all-row-1">
                                <img src={p5}alt=""/>
                                <div>
                                <h4><span>.....</span>     Available</h4>
                                <h3>Dr. Jennifer Garcia</h3>
                                <p>Neurologist</p>
                                </div>
                            </div>
                        <div className="all-row-1">
                            <img src={p6}alt=""/>
                            <div>
                            <h4><span>.....</span>    Available</h4>
                            <h3>Dr. Andrew Williams</h3>
                            <p>Gastroenterologist</p>
                            </div>
                        </div>
                        <div className="all-row-1">
                            <img src={p7}alt=""/>
                            <div>
                            <h4><span>.....</span>    Available</h4>
                            <h3>Dr. Christopher Davis</h3>
                            <p>General physician</p>
                            </div>
                        </div>
                        <div className="all-row-1">
                            <img src={p8}alt=""/>
                            <div>
                            <h4><span>.....</span>     Available</h4>
                            <h3>Dr. Timothy White</h3>
                            <p>Gynecologist</p>
                            </div>
                        </div>
                        
    
                    </div>   
                    <div className="all-row">
                        <div className="all-row-1">
                            <img src={p9}alt=""/>
                            <div>
                            <h4><span>.....</span>     Available</h4>
                            <h3>Dr. Ava Mitchell</h3>
                            <p>Dermatologist</p>
                            </div>
                        </div>
                        <div className="all-row-1">
                            <img src={p10}alt=""/>
                            <div>
                            <h4><span>.....</span>     Available</h4>
                            <h3>Dr. Jeffrey King</h3>
                            <p>Pediatricians</p>
                            </div>
                        </div>
                        <div className="all-row-1">
                            <img src={p11}alt=""/>
                            <div>
                            <h4><span>.....</span>     Available</h4>
                            <h3>Dr. Zoe Kelly</h3>
                            <p>Neurologist</p>
                            </div>
                        </div>
                        <div className="all-row-1">
                            <img src={p12}alt=""/>
                            <div>
                            <h4><span>.....</span>     Available</h4>
                            <h3>Dr. Patrick Harris</h3>
                            <p>Gastroenterologist</p>
                            </div>
                        </div>
                    </div>
                    <div className="all-row">
                        <div className="all-row-1">
                            <img src={p13}alt=""/>
                            <div>
                            <h4><span>.....</span>     Available</h4>
                            <h3>Dr. Chloe Evans</h3>
                            <p>General physician</p>
                            </div>
                        </div>
                        <div className="all-row-1">
                            <img src={p14}alt=""/>
                            <div>
                            <h4><span>.....</span>     Available</h4>
                            <h3>Dr. Ryan Martinez</h3>
                            <p>Gynecologist</p>
                            </div>
                        </div>
                        <div className="all-row-1">
                            <img src={p15} alt=""/>
                            <div>
                            <h4><span>.....</span>     Available</h4>
                            <h3>Dr. Amelia Hill</h3>
                            <p>Dermatologist</p>
                            </div>
                        </div>
                        
                    </div>        



                </div> */}
            </div>
        </header>
    );
};

export default Alldoc;
