import React,{useEffect,useState} from "react";
import { useNavigate } from 'react-router-dom';
import './admin.css';
import aplogo from  "../assets/admin-logo.svg"
import dash from "../assets/dash.svg"
import appoint from "../assets/appoint.svg"
import adddoc from "../assets/adddoc.svg"
import doclist from "../assets/doclist.svg"
import upload from "../assets/upload.svg"
import healthmate from '../assets/healthmate.png';
import Adddoctor from './adddoctor.js';
import axios from "axios";




const Admin = ({setIsAuthenticated }) =>{




    const[isDashVisible, setIsDashVisible]=useState(false);
    const[isAppoVisible, setIsAppoVisible]=useState(false);
    const[isAddVisible, setIsAddVisible]=useState(false);
    const[isDlistVisible, setIsDlistVisible]=useState(false);


    const[dashButtonClicked,setDashButtonClicked]=useState(false);
    const[appoButtonClicked,setAppoButtonClicked]=useState(false);
    const[addButtonClicked,setAddButtonClicked]=useState(false);
    const[dlistButtonClicked,setDlistButtonClicked]=useState(false);

    //change
    const [doctors, setDoctors] = useState([]);
    const [editDoctorId, setEditDoctorId] = useState(null);
    const [editFormData, setEditFormData] = useState({}); 
    const [editPhoto, setEditPhoto] = useState(null);

    useEffect(() => {
        fetchDoctors();
    }, []);

    const fetchDoctors = () => {
        axios
        .get("http://localhost:5000/api/doctors")
        .then((res) => setDoctors(res.data))
        .catch((err) => console.error("Error fetching doctors:", err));
    };


    const handleDashClicked=()=>{
        setIsDashVisible(true);
        setDashButtonClicked(true);
        setIsAppoVisible(false);
        setAppoButtonClicked(false);
        setIsAddVisible(false);
        setAddButtonClicked(false);
        setIsDlistVisible(false);
        setDlistButtonClicked(false);
    }
    const handleAppoClicked=()=>{
        setIsAppoVisible(true);
        setAppoButtonClicked(true);

        setIsDashVisible(false);
        setDashButtonClicked(false);
        setIsAddVisible(false);
        setAddButtonClicked(false);
        setIsDlistVisible(false);
        setDlistButtonClicked(false);
    }
    const handleAddClicked=()=>{
        setIsAddVisible(true);
        setAddButtonClicked(true);

        setIsAppoVisible(false);
        setAppoButtonClicked(false);
        setIsDashVisible(false);
        setDashButtonClicked(false);
        setIsDlistVisible(false);
        setDlistButtonClicked(false);
    }
    const handleDlistClicked=()=>{
        setIsDlistVisible(true);
        setDlistButtonClicked(true);

        setIsAppoVisible(false);
        setAppoButtonClicked(false);
        setIsDashVisible(false);
        setDashButtonClicked(false);
        setIsAddVisible(false);
        setAddButtonClicked(false);
    }

    //next change
    const handleEditChange = (e) => {
        setEditFormData({ ...editFormData, [e.target.name]: e.target.value });
      };
    
      const handleEditFileChange = (e) => {
        setEditPhoto(e.target.files[0]);
      };
    
      const handleUpdateDoctor = async () => {
        const formData = new FormData();
        Object.entries(editFormData).forEach(([key, value]) =>
          formData.append(key, value)
        );
        if (editPhoto) formData.append("photo", editPhoto);
    
        try {
          await axios.put(
            `http://localhost:5000/api/update-doctor/${editDoctorId}`,
            formData,
            { headers: { "Content-Type": "multipart/form-data" } }
          );
          alert("Doctor updated successfully");
          setEditDoctorId(null);
          fetchDoctors();
        } catch (err) {
          alert("Error updating doctor: " + err.message);
        }
      };
    
      const handleDeleteDoctor = async (id) => {
        if (!window.confirm("Are you sure you want to delete this doctor?")) return;
    
        try {
          await axios.delete(`http://localhost:5000/api/delete-doctor/${id}`);
          alert("Doctor deleted successfully");
          fetchDoctors();
        } catch (err) {
          alert("Error deleting doctor: " + err.message);
        }
      };


      const navigate = useNavigate();

    const handleAdminlogout = () => {
      localStorage.removeItem("token");
      setIsAuthenticated(false); // ✅ no more error here
      navigate("/adminlogin");
    };
      
    const[adappo,setAdappo]=useState([]);
    useEffect(() => {

    axios
      .get("http://localhost:5000/api/adappointments")
      .then((res) => {
        setAdappo(res.data);
        console.log("Fetching appointments for user:");

      })
      .catch((err) => {
        console.error("Error fetching appointments:", err);
      });
  }, []); 

  const cancelClick = async (id) => {
          if (!window.confirm("Are you sure you want to cancel this appointment?")) return;
      
          try {
            await axios.delete(`http://localhost:5000/api/cancel-appointment/${id}`);
            alert("appointment cancelled successfully");
            window.location.reload();
  
            
          } catch (err) {
            alert("Error canceling appointment: " + err.message);
          }
        };


    return(
        <header>
            <div className="ap-nav">
                <div>
                    <img src={healthmate} alt=""></img>
                    <div className="smallad">
                      <p>Admin</p>
                    </div>
                    
                </div>
                <button onClick={handleAdminlogout}>Logout</button>
               
                
            </div>
            <div className="ap-main">
                
                <div className="ap-left">
                    <ul>
                    <div onClick={handleDashClicked} className={`board ${dashButtonClicked ? 'button-clicked1': ''}`}>
                        <img src={dash}alt=""/>
                        <p>Dashboard</p>
                    </div>
                    <div onClick={handleAppoClicked} className={`board ${appoButtonClicked ? 'button-clicked1': ''}`}>
                        <img src={appoint}alt=""/>
                        <p>Appointments</p>
                    </div>
                    <div onClick={handleAddClicked} className={`board ${addButtonClicked ? 'button-clicked1': ''}`}>
                        <img src={adddoc}alt=""/> 
                        <p>Add Doctors</p>
                    </div>
                    <div onClick={handleDlistClicked} className={`board ${dlistButtonClicked ? 'button-clicked1': ''}`}>
                        <img src={doclist}alt=""/>
                        <p>Doctors List</p>
                    </div>
                    </ul>
                </div>
                <div className={`ap-blank ${isDashVisible || isAppoVisible || isAddVisible || isDlistVisible ? "hidden" : ""}`}></div>

                {isDashVisible && (
                    <div className="ap-dash"></div>
                )}
                {isAppoVisible && (
                    <div className="ap-dash">
                        <div>
                            <h3>All Appointments</h3>
                            
                              <table class="table table-striped table-hover">
                                  <thead>
                                    <tr>
                                      <th scope="col">#</th>
                                      <th scope="col">Patient</th>
                                      <th scope="col">Age</th>
                                      <th scope="col">Date & Time</th>
                                      <th scope="col">Doctor</th>
                                      <th scope="col">Fees</th>
                                      <th scope="col">Action</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    
                                  {adappo.map((appt,index) => (
                                    <tr key={appt._id}>
                                      <th scope="row">{index + 1}</th>
                                      <td>{appt.userId?.full_name}</td>
                                      <td>{appt.userId?.birthday}</td>
                                      <td>{appt.day} - {appt.time}</td>
                                      <td>{appt.doctorId?.name}</td>
                                      <td>{appt.doctorId?.fees}</td>
                                      <td>
                                        <i class="fa-solid fa-xmark"onClick={() => cancelClick (appt._id)}></i>
                                        {/* <button onClick={() => cancelClick (appt._id)}>Cancel Appointment</button> */}
                                        </td>
                                    </tr>
            
          
                          ))}
    
                                  </tbody>
                                </table>
                          
                             
                        </div>
                    </div>
                    
                )}
                {isAddVisible && (

                    <Adddoctor/>
                    
                )}
                {isDlistVisible &&(
                    <div className="ap-dash">
                        <div className="ap-rowdoc">
                            <div className="ap-rowdoc2">
                                <h3>All Doctors</h3>
                                <div className="ap-row">



                                    {/* change */}
                                    {doctors.map((doctor) => (
                    <div key={doctor._id} className="ap-row-1">
                      <img
                        className="docpic"
                        src={
                          doctor.photo
                            ? `http://localhost:5000/${doctor.photo.replace(/\\/g, "/")}`
                            : "https://via.placeholder.com/100"
                        }
                        alt={doctor.name}
                      />
                      <div className="doc-data">
                        <h3>Dr. {doctor.name}</h3>
                        <p>{doctor.speciality}</p>
                        <input type="checkbox" defaultChecked />
                        <label>Available</label>

                        <div className="doctor-actions">
                          <button
                            onClick={() => {
                              setEditDoctorId(doctor._id);
                              setEditFormData(doctor);
                            }}
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDeleteDoctor(doctor._id)}
                          >
                            Delete
                          </button>
                        </div>

                        {editDoctorId === doctor._id && (
                          <div className="edit-form">
                            <input
                              type="text"
                              name="name"
                              placeholder="Name"
                              value={editFormData.name || ""}
                              onChange={handleEditChange}
                            />
                            <input
                              type="text"
                              name="email"
                              placeholder="Email"
                              value={editFormData.email || ""}
                              onChange={handleEditChange}
                            />
                            <input
                              type="text"
                              name="experience"
                              placeholder="Experience"
                              value={editFormData.experience || ""}
                              onChange={handleEditChange}
                            />
                            <input
                              type="text"
                              name="fees"
                              placeholder="Fees"
                              value={editFormData.fees || ""}
                              onChange={handleEditChange}
                            />
                            <input
                              type="file"
                              onChange={handleEditFileChange}
                            />
                            <div>
                              <button onClick={handleUpdateDoctor}>Save</button>
                              <button onClick={() => setEditDoctorId(null)}>
                                Cancel
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}

                        
                          </div>
                                       
                                           
                            </div>
                        </div>                                            
                    </div>
                )}

                
            </div>
        </header>

    )
}
export default Admin 