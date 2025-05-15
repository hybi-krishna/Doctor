import React from "react";
import './foot.css'
import healthmate from '../assets/healthmate.png';
import logo from '../assets/logo.svg';

const Foot = () =>{
    return(
        <header>
            <div className="pres">
                <div className="pres-l">
                    <img src={healthmate} alt=""></img>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting<br/>
                    industry. Lorem Ipsum has been the industry's standard dummy<br/>
                    text ever since the 1500s, when an unknown printer took a galley of<br/>
                    type and scrambled it to make a type specimen book.</p>
                </div>
                <div>
                    <h2>COMPANY</h2>
                    <p>Home</p>
                    <p>About us</p>
                    <p>Delivery</p>
                    <p>Privacy policy</p>
                </div>
                <div>
                    <h2>GET IN TOUCH</h2>
                    <p>+0-000-000-000</p>
                    <p>greatstackdev@gmail.com</p>
                </div>
            </div>
            <div className="end">
                <p>Copyright 2024 @ Greatstack.dev - All Right Reserved.</p>
            </div>
        </header>
    )
}
export default Foot