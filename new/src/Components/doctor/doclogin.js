import React,{useEffect,useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import './doclogin.css';
import { Link } from "react-router-dom";
 
const Adminlogin = (setIsAuthenticated) =>{

useEffect(()=>{
    document.title="Admin panel";

    })

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    const navigate = useNavigate();
      const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post("http://localhost:5000/doctor-login", { email, password });
    alert(res.data.message);

    // ✅ Store token
    localStorage.setItem("token", res.data.token);

    // ✅ Store full user object for future use
    localStorage.setItem("user", JSON.stringify(res.data.user)); // <-- this line is missing in your code

    // ✅ Optional: Still keep userId separately if needed
    // localStorage.setItem("userId", res.data.user._id);

    // ✅ Update authentication state
    setIsAuthenticated(true);

    // ✅ Redirect to home
    navigate("/");
  } catch (err) {
    alert(err.response?.data?.error || "Login failed");
  }
};
    return(
        <header>
            <div className="doc-login">
            <div className="doc-log-form">
                    <h2><span>Doctor</span>  Login</h2>
                    <form onSubmit={handleSubmit}>

                    <div>
                        <p>Email</p>
                        <input 
                            className="doc-log-fill" 
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        ></input>
                        
                    </div>
                    <div> 
                        <p>Password</p>
                        <input 
                            className="doc-log-fill"  
                            type="text"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        ></input>
                    </div>
                    </form>
                    <Link to="/admin"><button  type="submit">Login</button></Link>
                    
                    <p>Admin Login?<Link to="/adminlogin">Click here</Link></p>
                </div>
            </div>
        </header>

    )

}
export default Adminlogin