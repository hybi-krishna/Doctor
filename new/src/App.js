import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Top from "./Components/top/top";
import Home from "./Components/home/home";
import Foot from "./Components/doctor/foot";
import Alldoc from "./Components/alldoc/alldoc";
import About from "./Components/about/about";
import Contact from "./Components/contact/contact";
import Create from "./Components/create/create";
import Login from "./Components/doctor/login";
import Admin from "./Components/admin/admin";
import Singledoc from "./Components/doctor/singledoc";
import Adminlogin from "./Components/admin/adminlogin";
import Doclogin from "./Components/doctor/doclogin";
import Myprofile from "./Components/profile/myprofile";

function Appad() {
  const location = useLocation();
  const hideNavbarFooter = ["/admin", "/adminlogin", "/doclogin"].includes(location.pathname);

  // ✅ Store authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // ✅ Check if user is logged in
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  return (
    <>
      {/* ✅ Pass authentication state to Navbar */}
      {!hideNavbarFooter && <Top isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alldoc" element={<Alldoc />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/create" element={<Create />} />
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/singledoc/:id" element={<Singledoc />} />
        <Route path="/admin" element={<Admin setIsAuthenticated={setIsAuthenticated}/>} />
        <Route path="/adminlogin" element={<Adminlogin setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/doclogin" element={<Doclogin />} />
        <Route path="/myprofile" element={<Myprofile />} />
      </Routes>

      {!hideNavbarFooter && <Foot />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Appad />
    </BrowserRouter>
  );
}

export default App;
