import React,{useState,useEffect} from "react";
import './myprofile.css';
import axios from "axios";
import profilepic from '../assets/profilepic.png';
import { useNavigate } from "react-router-dom";


const Myprofile=()=>{
    
    const [form, setForm] = useState({
           full_name: "",
           email: "",
           phone: "",
           address: "",
           gender: "",
           birthday: "",
         });
    const [editMode, setEditMode] = useState(false);
    const navigate = useNavigate();
    const userId = localStorage.getItem("userId"); 

    console.log("userId:", userId);

    useEffect(() => {
        const token = localStorage.getItem("token");  // Get token from localStorage
        const userId = localStorage.getItem("userId");  // Get userId from localStorage
        if (!userId || !token) {
            navigate("/login");
        return;
        }
        console.log("userId from localStorage:", userId);
        axios
        .get(`http://localhost:5000/api/users/${userId}`,{
            headers: {
                Authorization: `Bearer ${token}`  // Include token in headers
              }
        })
        .then((res) => {
            console.log("Fetched data:", res.data);
            setForm(res.data);
        })
        .catch((err) => console.log(err));
    }, [userId,navigate]);

    const handleChange = (e) => {
         setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios
          .put(`http://localhost:5000/api/users/${userId}`, form)
          .then(() => {
            alert("Profile updated successfully");
            setEditMode(false);
          })
          .catch((err) => console.log(err));
    };
    
    
    
    
    return(
        <header>
            
            {/* <form onSubmit={handleSubmit}> */}
             
            <div className="mypro">
                <img src={profilepic}alt=""></img>
                {editMode ?(
                    <input 
                        type="text"
                        name="full_name"
                        value={form.full_name}
                        onChange={handleChange}
                        placeholder="fullname"
                />
                ) : (
                    <h2>{form.full_name || "Name"}</h2> 
                )}
                <hr></hr>
                <h4>CONTACT INFORMATION</h4>
                <div>
                    

                        <div className="profilegrid">
                            <label className="pg1">Email id : </label>

                            {editMode ?(
                                <input 
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="email"
                                />
                            ) :(
                                <p className="pg2">{form.email}</p>
                            )}

                            <label className="pg1">Phone : </label>
                            {editMode ?(
                                <input 
                                    type="number"
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                    placeholder="000000000"
                                />
                            ) :(
                                <p className="pg2">{form.phone}</p>
                            )}
                            
                            <label className="pg1">Address : </label>
                            {editMode ?(
                                <input 
                                    type="text"
                                    name="address"
                                    value={form.address}
                                    onChange={handleChange}
                                    placeholder="address"
                                />
                            ) :(
                                <p className="pg2">{form.address}</p>

                            )}
                        </div>

                        <h4>BASIC INFORMATION</h4>

                        <div className="profilegrid">
                            <label className="pg1">Gender : </label>
                            {editMode ?(
                                <input 
                                    type="text"
                                    name="gender"
                                    value={form.gender}
                                    onChange={handleChange}
                                    placeholder="gender"
                                />
                            ) :(
                                <p className="pg2">{form.gender}</p>

                            )}
                            <label className="pg1">Birthday : </label>
                            {editMode ?(
                                <input 
                                    type="date"
                                    name="birthday"
                                    value={form.birthday}
                                    onChange={handleChange}
                                    placeholder="birthday"
                                />
                            ) :(
                                <p className="pg2">{form.birthday}</p>


                            )}
                        </div>

                        {editMode ?(
                            <button type="submit" onClick={handleSubmit }>save</button>
                            
                        ) : (
                            <button className="edit" type="button" onClick={() => setEditMode(true)}>Edit</button>

                        )}

                        
                    

                </div>
                
            </div>
            {/* </form>        */}
                   
        </header>
    )
};
export default Myprofile