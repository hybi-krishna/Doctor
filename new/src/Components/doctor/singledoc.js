import React,{useState,useEffect} from "react";
import "./singledoc.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import p1 from "../assets/p1.png";
import p7 from "../assets/p7.png";
import p13 from "../assets/p13.png";
import vtick from "../assets/v-tick.svg";
import i from "../assets/i.svg";


const Singledoc = () =>{
    const { id } = useParams();
    const [doctor, setDoctor] = useState(null);
        
        useEffect(() => {
            axios.get(`${process.env.REACT_APP_BASE_URL}/api/doctors/${id}`)
              .then((res) => {
                setDoctor(res.data);
              })
              .catch((err) => {
                console.error("Error fetching doctors:", err);
              });
          }, [id]);

    const[activeDay,setActiveDay]=useState("mon");
    const[selectTime,setSelectTime]=useState("");

    const days=["mon","tue","wed","thu","fry","sat","sun"]
    const timeSlot =["9:00 AM","10:00 AM","11:00 AM","12:00 PM","1:00 PM","2:00 PM","3:00 PM","4:00 PM","5:00 PM"];
    const handleDayclick = (day) =>{
        setActiveDay(day);
        setSelectTime(""); //reset time when day change
    }
    const handleTimeClick = (time) => {
        setSelectTime(time)
    }
    
    if (!doctor) return <p>Loading doctor info</p>
    return(
        <header>
            <div className="single-main">
                
                <div className="sin-main-top">
                    <div className="sin-left">
                        <img 
                        src={
                            doctor.photo
                            ? `http://localhost:5000/${doctor.photo.replace(/\\/g, "/")}`
                            : "https://via.placeholder.com/100"
                        }
                        alt={doctor.name}>

                        </img>
                    </div>
                    <div className="sin-right">
                        <div className="single-box">
                            <div className="s-richard ">
                                <h1>Dr.{doctor.name}</h1>
                                <img src={vtick}alt=""></img>
                            </div>
                            <div className="s-mbbs">
                                <p>MBBS - General physician</p>
                                <div className="s-year">
                                    <p>4 Years</p>
                                </div>
                                
                            </div>
                            <div className="s-ab">
                                <p>About</p>
                                <img src={i}alt=""></img>
                            </div>
                            <p className="davis">Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine,<br/>
                            early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering<br/>
                            comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment<br/>strategies.</p>
                            <p className="a-fee50">Appointment fee:<span> $50</span></p>
                        </div>
                    
                    <div className="booking-slot">
                        <p className="b-slot">Booking slots</p>
                        <div className="weeks">

                            {days.map((day)=>(
                                <div
                                    key={day}
                                    className={`daybut ${activeDay === day ? 'day-clicked' : ''}`}
                                    onClick={() => handleDayclick(day)}
                                    >
                                        <p>{day}</p>
                                </div>

                            ))}
                        </div>

                    {/* monday */}
                        
                        <div className="times">
                            {timeSlot.map((time)=>(
                                <div
                                    key={time}
                                    className={`time1 ${selectTime === time ? 'day-clicked' : ''}`}
                                    onClick={() => handleTimeClick(time)}
                                    >
                                        <p>{time}</p>
                                </div>
                            ))}
                            
                        </div>
                        


                        </div>
                    <div className="b-app">
                        <p>Book an appointment</p>   
                    </div>    
                    </div>
                    </div>

                    
                </div>
                {/* <div className="related-doc">
                        <h1>Related Doctors</h1>
                        <p>Simply browse through our extensive list of trusted doctors.</p>
                        <div className="rel-doc">
                            <div className="related-row-1">
                                <img src={p7} alt="" />
                                <div>
                                    <h4><span>.....</span> Available</h4>
                                    <h3>Dr. Christopher Davis</h3>
                                    <p>General physician</p>
                                </div>
                            </div>
                            <div className="related-row-1">
                                <img src={p13} alt="" />
                                <div>
                                    <h4><span>.....</span> Available</h4>
                                    <h3>Dr. Chloe Evans</h3>
                                    <p>General physician</p>
                                </div>
                            </div>            
                        </div>
                </div> */}
                
            
        </header>
    )
}
export default Singledoc