import React  from "react";
import { Link, Route, Routes, NavLink, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Setting from "./pages/Setting";
import Navbar from "./components/Navbar";
import Course from "./pages/Course";
import CourseDetail from "./pages/CourseDetail";
import Theme from "./Theme";
import { useState } from "react";

const App = () => {
 const [theme, setTheme] = useState("light")
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />

      <h2>Theme is {theme} </h2>
      <Theme theme={theme}  setTheme={setTheme}/>


      

      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Return to Home
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button>
      <Routes>
        <Route path="/" element={<Home />} />
       
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="setting" element={<Setting />} />
        </Route>
        <Route path="/course" element={<Course />} />
        <Route path="course/:id" element={<CourseDetail />} />
        
      </Routes>

      <div className="footer">This is footer </div>
    </div>
  );
};

export default App;
