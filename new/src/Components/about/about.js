import React from "react";
import './about.css'
import doc3 from "../assets/doc3.png"

const About = () =>{
    return(
        <header>
            <div className="aboutus">
                <div className="us">
                    <h2><span>ABOUT</span> US</h2>
                </div>
                <div className="a-first">
                    <div>
                        <img src={doc3} alt=""/>
                    </div>
                    <div className="a-para">
                        <p>Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and<br/>
                        efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling<br/>
                        doctor appointments and managing their health records.
                        </p>
                        <p>Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance<br/>
                        our platform, integrating the latest advancements to improve user experience and deliver superior<br/>
                        service. Whether you're booking your first appointment or managing ongoing care, Prescripto is<br/>
                        here to support you every step of the way.
                        </p>
                        <h5>Our Vision</h5>
                        <p>Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to<br/>
                        bridge the gap between patients and healthcare providers, making it easier for you to access the<br/>
                        care you need, when you need it.
                        </p>
                    </div>
                </div>
                <div className="choose">
                    <p>WHY <span>CHOOSE US</span></p>
                </div>
                <div className="a-three">
                    <div>
                        <span>EFFICIENCY:</span>
                        <p>Streamlined appointment scheduling
                        that fits into your busy lifestyle.
                        </p>
                    </div>
                    <div>
                        <span>CONVENIENCE:</span>
                        <p>Access to a network of trusted
                        healthcare professionals in your area.
                        </p>
                    </div>
                    <div>
                        <span>PERSONALIZATION:</span>
                        <p>Tailored recommendations and reminders to
                        help you stay on top of your health.
                        </p>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default About