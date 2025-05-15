import React,{useEffect,useState} from "react";
import axios from "axios";
import './adminlogin.css';
import { Link, useNavigate } from "react-router-dom";
 
const Adminlogin = ({ setIsAuthenticated }) =>{

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await axios.post("http://localhost:5000/adminlogin", { email, password });
        alert(res.data.message);
        localStorage.setItem("token", res.data.token);
        
        // ✅ Update authentication state
        setIsAuthenticated(true);
  
        // ✅ Redirect to home page
        navigate("/admin");
      } catch (err) {
        alert(err.response?.data?.error || "Login failed");
      }
    };

useEffect(()=>{
    document.title="Admin panel";

    })
    return(
        <header>
            <div className="ad-login">
            <div className="ad-log-form">
                    <h2><span>Admin</span>  Login</h2>
                    <form onSubmit={handleSubmit}>
                    <div>
                        <p>Email</p>
                        <input 
                            className="ad-log-fill"
                            type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        ></input>
                    </div>
                    <div> 
                        <p>Password</p>
                        <input 
                            className="ad-log-fill"  
                            type="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        ></input>
                    </div>
                    
                     <button type=" submit">Login</button>
                    {/* <Link to="/admin"><button>Login</button></Link> */}
                    </form>




                    <p>Doctor Login?<Link to="/doclogin">Click here</Link></p>
                </div>
            </div>
        </header>

    )

}
export default Adminlogin