import React, { useState } from 'react';
import './top.css';
import { Link } from 'react-router-dom';
// import { FaUserCircle } from 'react-icons/fa';
import profilepic from '../assets/profilepic.png';
import healthmate from '../assets/healthmate.png';

const Top = ({ isAuthenticated, setIsAuthenticated }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setShowDropdown(false); // Close the dropdown after logout
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleAdminClick = () => {
    window.open("/adminlogin");
  };

  return (
    <header>
      <div className='main'>
        <div className='navbar'>
          <img src={healthmate} alt='' className='pres-logo' />
          <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/alldoc">ALL DOCTORS</Link></li>
            <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="/contact">CONTACT</Link></li>
            <button onClick={handleAdminClick}>Admin panel</button>
          </ul>

          {isAuthenticated ? (
            <div className="user-menu">
              <img src={profilepic}alt='' className="user-icon" title="Profile"  onClick={toggleDropdown}></img>
              {/* <FaUserCircle size={30} title="Profile" onClick={toggleDropdown} className="user-icon" /> */}
              {showDropdown && (
                <div className="dropdown-menu">
                  <div className='myprofile'><Link to="/myprofile">My Profile</Link></div>
                  <div className='myprofile'><Link to="/">My Appointments</Link></div>
                  {/* <p><Link to="/">My Appointments</Link></p> */}
                  <button onClick={handleLogout}>Logout</button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/create"><button className='ca-button'>Create account</button></Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Top;
