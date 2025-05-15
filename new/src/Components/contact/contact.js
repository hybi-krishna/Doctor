import React from "react";
import './contact.css'
import doc4 from "../assets/doc4.png"

const Contact = () =>{
    return(
        <header>
            <div className="contactus">
                <div className="cont">
                    <h2><span>CONTACT</span> US</h2>
                </div>
                <div className="c-mid">
                    <div>
                        <img src={doc4}alt=""/>
                    </div>
                    <div className="c-right">
                        <h4>OUR OFFICE</h4>
                        <p>00000 Willms Station<br/>
                        Suite 000, Washington, USA</p>
                        <p>Tel: (000) 000-0000<br/>
                        Email: greatstackdev@gmail.com</p>
                        <h4>CAREERS AT PRESCRIPTO</h4>
                        <p>Learn more about our teams and job openings.</p>
                        <button>Explore Jobs</button>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Contact