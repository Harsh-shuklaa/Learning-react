import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navItems = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/dashBoard", name: "DashBoard" },
    { path: "/course", name: "Course" },
    { path: "/contact", name: "Contact" }
  ];
  return (
    <div>
      <div className="nav">
        <div className="logo">
          <h3>H</h3>
        </div>
        <div className="list">
          {navItems.map((elem)=>{
            return (
            
              <Link key={elem.path} to={elem.path}>{elem.name}</Link>
              
            )
          })}
          {/* <NavLink to="/about">About</NavLink>
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/contact">Contact</Link> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
