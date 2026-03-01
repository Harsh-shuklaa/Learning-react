import React from "react";

import Logo from "./Logo";
import NavTag from "./NavTag";
import NavButton from "./NavButton";
const Navbar = () => {
  return (
    <div className="flex justify-between p-10 text-m  ">
      <Logo/>
     <NavTag/>
     <NavButton/>
      
    
    </div>
  );
};

export default Navbar;
