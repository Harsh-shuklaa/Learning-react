import React from "react"


const Navbar = () => {
  const links = [
    { path: "menu", name: "Menu" },
    { path: "location", name: "Location" },
    { path: "about", name: "About" },
    { path: "contact", name: "Contact" },
  ];
  return (
    <div className="flex justify-between items-center   ">
      <div className="text-lg  active:scale-95"><img src="/images/brand_logo.png" alt="" /></div>
      <div className="flex gap-5">
        {links.map((elem) => {
          return <h1  className="text-lg  active:scale-95 cursor-pointer">{elem.name}</h1>;
        })}
      </div>
      <div className="text-lg  active:scale-95"><button className="bg-red-600  px-4 text-white cursor-pointer">Login</button></div>
    </div>
  );
};

export default Navbar;
