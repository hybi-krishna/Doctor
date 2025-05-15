import React,{ useState} from "react";
import './create.css';
import { Link } from "react-router-dom";
import axios from "axios";


const Create = () =>{
    const [fullname, setFull_name] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [setLoading] = useState(false); // Add loading state

    const handleSubmit = async (e) => {
    e.preventDefault();
    // setLoading(false);

    try {
      const res = await axios.post("http://localhost:5000/create", { 
        fullname, 
        email, 
        password 
      });

      // ✅ Check if response contains data
      if (res && res.data) {
        alert(res.data.message || "User registered successfully!");
      } else {
        alert("Unexpected response from server.");
      }

      // ✅ Clear input fields after successful registration
      setFull_name("");
      setEmail("");
      setPassword("");
    } catch (err) {
      console.error("Error:", err);
      alert(err.response?.data?.error || "Registration failed. Please try again.");
    } //finally {
    //   setLoading(false);
    // }
  };

    return(
        <header>
            <div className="create-account">
                <div className="ca-form">
                    <h2>Create Account</h2>
                    <p>Please sign up to book appointment</p>
                    <form onSubmit={handleSubmit}>
                    <div>
                        <p>Full Name</p>
                        <input className="ca-fill" type="text" value={fullname} onChange={(e) => setFull_name(e.target.value)} required></input>
                    </div>
                    <div> 
                        <p>Email</p>
                        <input className="ca-fill"  type="text" value={email} onChange={(e) => setEmail(e.target.value)} required></input>
                    </div>
                    <div>
                        <p>Password</p>
                        <input className="ca-fill" type="text" value={password} onChange={(e) => setPassword(e.target.value)} required></input>
                    </div>
                    <button type="submit">Create account</button>
                    
                    {/* {loading ? "Registering..." : "Register"} */}
                    <p>Already have an account? <Link to="/login">Login here</Link></p>
                    </form>
                </div>
            </div>
        </header>
    )
}
export default Create