import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/contact", name: "Contact" },
  ];
  return (
    <div className="flex justify-between items-center  px-10 py-5">
      <div>
        <h1 className="text-black">Logo</h1>
      </div>
      <div className="flex gap-10">
        {navLinks.map((elem, index) => {
          return (
            <NavLink
              key={index}
              to={elem.path}
              className={({ isActive }) =>
                isActive
                  ? " text-black font-bold border-b-2 border-blue-500 pb-1"
                  : "text-gray-700 hover:text-white transition"
              }
            >
              {elem.name}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
