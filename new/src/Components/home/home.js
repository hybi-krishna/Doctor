import React,{useEffect,useState} from "react";
import axios from "axios";
import './home.css';
import { Link } from "react-router-dom";

import doc from '../assets/doc.svg';
import preg from '../assets/preg.svg'
import derma from '../assets/derma.svg'
import pediat from '../assets/pediat.svg'
import neuro from '../assets/neuro.svg'
import gas from '../assets/gas.svg'
import arrow from '../assets/r-arrow.svg'
import g3doc from '../assets/3doc.png'
import g3 from '../assets/g3.png'
import p1 from '../assets/p1.png'
import p2 from '../assets/p2.png'
import p3 from '../assets/p3.png'
import p4 from '../assets/p4.png'
import p5 from '../assets/p5.png'
import p6 from '../assets/p6.png'
import p7 from '../assets/p7.png'
import p8 from '../assets/p8.png'
import p9 from '../assets/p2.png'
import p10 from '../assets/p10.png'
import doc2 from '../assets/doc2.png'

const Home = () =>{

const [setIsGpVisible] = useState(false);

const [setGpButtonClicked] = useState(false);

const handleGpClick = () => {
    setIsGpVisible(true);
    setGpButtonClicked(true);
};

const [doctors, setDoctors] = useState([]);

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
    
      





    return(
        <header>
            <div className="booking">
                <div className="book-left">
                    <h1>Book Appointment<br/>
                    With Trusted Doctors</h1>
                    <div>
                        <img className="group3" src={g3}alt=""/>
                        <p>Simply browse through our extensive list of trusted doctors,<br/>
                        schedule your appointment hassle-free.</p>
                    </div>
                    <a  href="#find"><button>Book appoinment<img className="arrow" src={arrow}alt=""></img></button></a>
                    
                </div>
                <div className="book-right">
                    <img className="pic" src={g3doc}alt=""/>
                </div>
            </div>
            <section id="find">
            <div className="find">
                <h2>Find by Speciality</h2>
                <p>Simply browse through our extensive list of trusted doctors,<br/>
                 schedule your appointment hassle-free.</p>
                <div className="six">
                    <div onClick={handleGpClick}>
                    <img src={doc} alt=""/>
                    <p>General Physician</p>
                    </div>
                    <div>
                    <img src={preg} alt=""/> 
                    <p>Gynecologist</p>
                    </div>
                    <div>
                    <img src={derma} alt=""/>
                    <p>Dermatologist</p>
                    </div>
                    <div>
                    <img src={pediat} alt=""/>
                    <p>Pediatricians</p>
                    </div>
                    <div>
                    <img src={neuro} alt=""/>
                    <p>Neurologist</p>
                    </div>
                    <div>
                    <img src={gas} alt=""/>
                    <p>Gastroenterologist</p>
                    </div>
                    
                </div>

            </div>
            </section>

            <div className="box">
                
                <div className="box-top">
                    <h1>Top Doctors to Book</h1>
                    <p>Simply browse through our extensive list of trusted doctors.</p>
                </div>
                
                <div className="row">
                    <div className="homeall-row">
                                {doctors.map((doctor) => (
                                  <Link  to={`/singledoc/${doctor._id}`}>
                                  <div key={doctor._id} className="homerow-1">
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
                
                <Link to="/alldoc"><button className="more">more</button></Link>
                
            </div>
            <div className="last">
                <div className="last-l">
                    <h1>Book Appointment<br/>
                        With 100+ Trusted Doctors</h1>
                        <Link to="/create"><button>Create account</button></Link>
                        
                </div>
                <div>
                    <img src={doc2}alt=""/>
                </div>

            </div>
        </header>
    )
}
export default Home