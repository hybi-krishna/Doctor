
import React, { useEffect, useState } from "react";
import axios from "axios";

const Myappointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const currentUser = storedUser ? JSON.parse(storedUser) : null;

    if (!currentUser) {
      console.warn("No user found in localStorage.");
      return;
    }

    axios
      .get(`http://localhost:5000/api/appointments?userId=${currentUser._id}`)
      .then((res) => {
        setAppointments(res.data);
        console.log("Fetching appointments for user:", currentUser._id);

      })
      .catch((err) => {
        console.error("Error fetching appointments:", err);
      });
  }, []); //  add empty dependency array to avoid multiple re-renders

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

  return (
    <div style={{paddingLeft: "150px",paddingRight: "150px"}}>
      <h2>My Appointments</h2>
      {appointments.length === 0 ? (
        <p>No appointments found.</p>
      ) : (
        appointments.map((appt) => (
          <div
            class="row g-0"
            key={appt._id}
            style={{ border: "1px solid #ccc",borderRadius:"15px", margin: "10px", padding: "10px" }}
          >
            <div class="col-md-3">
              <img 
                class="img-fluid" alt=""
                style={{ width:"220px",borderRadius:"15px" }}
                src={
                appt.doctorId?.photo
                ? `http://localhost:5000/${appt.doctorId.photo.replace(/\\/g, "/")}`
                : "https://via.placeholder.com/100"
              }/>
            </div>
            <div class="col-md-8 card-body">
              <p><strong>Doctor:</strong> {appt.doctorId?.name}</p>
              <p><strong>Speciality:</strong> {appt.doctorId?.speciality}</p>
              <p><strong>Day:</strong> {appt.day}</p>
              <p><strong>Time:</strong> {appt.time}</p>
              <button class="btn btn-danger" onClick={() => cancelClick (appt._id)}>Cancel Appointment</button>
            </div>
            
          </div>
        ))
      )}
    </div>
  );
};

export default Myappointments;

