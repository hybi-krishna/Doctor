import React,{useEffect} from "react";
import './doclogin.css';
import { Link } from "react-router-dom";
 
const Adminlogin = () =>{
useEffect(()=>{
    document.title="Admin panel";

    })
    return(
        <header>
            <div className="doc-login">
            <div className="doc-log-form">
                    <h2><span>Doctor</span>  Login</h2>
                    <div>
                        <p>Email</p>
                        <input className="doc-log-fill" type="text"></input>
                    </div>
                    <div> 
                        <p>Password</p>
                        <input className="doc-log-fill"  type="text"></input>
                    </div>
                    <Link to="/admin"><button>Login</button></Link>
                    
                    <p>Admin Login?<Link to="/adminlogin">Click here</Link></p>
                </div>
            </div>
        </header>

    )

}
export default Adminlogin