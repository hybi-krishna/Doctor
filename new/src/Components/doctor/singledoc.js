import React,{useState} from "react";
import "./singledoc.css";
import p1 from "../assets/p1.png";
import p7 from "../assets/p7.png";
import p13 from "../assets/p13.png";
import vtick from "../assets/v-tick.svg";
import i from "../assets/i.svg";


const Singledoc = () =>{

    const[activeDay,setActiveDay]=useState("mon");
    const[selectTime,setSelectTime]=useState("");

    const days=["mon","tue","wed","thu","fry","sat","sun"]
    const timeSlot =["9:00 AM","10:00 AM","11:00 AM","12:00 PM,1:00 PM","2:00 PM","3:00 PM","4:00 PM","5:00 PM"];
    const handleDayclick = (day) =>{
        setActiveDay(day);
        setSelectTime(""); //reset time when day change
    }
    const handleTimeClick = (time) => {
        setSelectTime(time)
    }
    

    return(
        <header>
            <div className="single-main">
                <div className="sin-main-top">
                    <div className="sin-left">
                        <img src={p1}alt=""></img>
                    </div>
                    <div className="sin-right">
                        <div className="single-box">
                            <div className="s-richard ">
                                <h1>Dr. Richard James</h1>
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
                                
                            ))}



                            <div onClick={handleMonClick} className={`daybut ${monButtonClicked ? 'day-clicked' : ''}`}>
                                <p>TUE</p>
                                <p>28</p>
                            </div>
                            <div onClick={handleTueClick} className={`daybut ${tueButtonClicked ? 'day-clicked' : ''}`}>
                                <p>WED</p>
                                <p>29</p>
                            </div>
                            <div onClick={handleWedClick} className={`daybut ${wedButtonClicked ? 'day-clicked' : ''}`}>
                                <p>THU</p>
                                <p>30</p>
                            </div>
                            <div onClick={handleThuClick} className={`daybut ${thuButtonClicked ? 'day-clicked' : ''}`}>
                                <p>FRI</p>
                                <p>31</p>
                            </div>
                            <div onClick={handleFryClick} className={`daybut ${fryButtonClicked ? 'day-clicked' : ''}`}>
                                <p>SAT</p>
                                <p>1</p>
                            </div>
                            <div onClick={handleSatClick} className={`daybut ${satButtonClicked ? 'day-clicked' : ''}`}>
                                <p>SUN</p>
                                <p>2</p>
                            </div>
                            <div onClick={handleSunClick} className={`daybut ${sunButtonClicked ? 'day-clicked' : ''}`}>
                                <p>MON</p>
                                <p>3</p>
                            </div>
                        </div>
                        <div className={`times-1 ${isMonVisible || isTueVisible || isWedVisible || isThuVisible || isFryVisible || isSatVisible || isSunVisible ? "hidden" : ""}`}>

                    {/* monday */}
                        {isMonVisible &&(
                        <div className="times">
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                        </div>
                        )}
                        {/* tuesday */}
                        {isTueVisible &&(
                        <div className="times">
                            <div>
                                <p>10:00 am</p>
                            </div>
                            <div>
                                <p>10:00 am</p>
                            </div>
                            <div>
                                <p>10:00 am</p>
                            </div>
                            <div>
                                <p>10:00 am</p>
                            </div>
                            <div>
                                <p>10:00 am</p>
                            </div>
                            <div>
                                <p>10:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                        </div>
                        )}
                        {/* wednesday */}
                        {isWedVisible &&(
                        <div className="times">
                            <div>
                                <p>12:00 am</p>
                            </div>
                            <div>
                                <p>12:00 am</p>
                            </div>
                            <div>
                                <p>12:00 am</p>
                            </div>
                            <div>
                                <p>12:00 am</p>
                            </div>
                            <div>
                                <p>12:00 am</p>
                            </div>
                            <div>
                                <p>12:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                        </div>
                        )}
                        {/* thursday */}
                        {isThuVisible &&(
                        <div className="times">
                            <div>
                                <p>1:00 am</p>
                            </div>
                            <div>
                                <p>1:00 am</p>
                            </div>
                            <div>
                                <p>1:00 am</p>
                            </div>
                            <div>
                                <p>1:00 am</p>
                            </div>
                            <div>
                                <p>1:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                        </div>
                        )}
                        {/* friday */}
                        {isFryVisible &&(
                        <div className="times">
                            <div>
                                <p>2:00 am</p>
                            </div>
                            <div>
                                <p>2:00 am</p>
                            </div>
                            <div>
                                <p>2:00 am</p>
                            </div>
                            <div>
                                <p>2:00 am</p>
                            </div>
                            <div>
                                <p>2:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                        </div>
                        )}
                        {/* saturday */}
                        {isSatVisible &&(
                        <div className="times">
                            <div>
                                <p>3:00 am</p>
                            </div>
                            <div>
                                <p>3:00 am</p>
                            </div>
                            <div>
                                <p>3:00 am</p>
                            </div>
                            <div>
                                <p>3:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                        </div>
                        )}
                        {/* sunday */}
                        {isSunVisible &&(
                        <div className="times">
                            <div>
                                <p>4:00 am</p>
                            </div>
                            <div>
                                <p>4:00 am</p>
                            </div>
                            <div>
                                <p>4:00 am</p>
                            </div>
                            <div>
                                <p>4:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                            <div>
                                <p>11:00 am</p>
                            </div>
                        </div>
                        )}


                        </div>
                    <div className="b-app">
                        <p>Book an appointment</p>   
                    </div>    
                    </div>
                    </div>
                    
                </div>
                <div className="related-doc">
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
                </div>
                
            </div>
        </header>
    )
}
export default Singledoc