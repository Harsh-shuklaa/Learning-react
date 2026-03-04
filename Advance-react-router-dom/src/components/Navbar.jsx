import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Bell, Search, User, Menu, X } from "lucide-react";
import Logo from "./Logo";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { path: "/", name: "Home", private: false },
    { path: "/arena", name: "Arena", private: false },
    { path: "/leaderboard", name: "Leaderboard", private: false },
    { path: "/battles", name: "Battles", private: true },
    { path: "/practice", name: "Practice", private: true },
    { path: "/stats", name: "Stats", private: true },
  ];

  const handleNavigation = (item, e) => {
    if (item.private && !isLoggedIn) {
      e.preventDefault();
      navigate("/login");
    }
    setMobileOpen(false);
  };

  return (
    <div className="w-full bg-black/80 backdrop-blur-md border-b border-gray-800 fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-10">
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              onClick={(e) => handleNavigation(item, e)}
              className={({ isActive }) =>
                isActive
                  ? "text-white font-semibold border-b-2 border-blue-500 pb-1"
                  : "text-gray-400 hover:text-white transition"
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Desktop Right Section */}
        <div className="hidden md:flex items-center gap-6">
          {isLoggedIn ? (
            <>
              {/* Search */}
              <div className="relative">
                <Search
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="text"
                  placeholder="Search battles..."
                  className="pl-10 pr-4 py-2 rounded-md 
                             bg-zink-900 border border-gray-700 
                             text-sm text-white
                             focus:outline-none focus:border-blue-500
                             transition"
                />
              </div>

              {/* Notifications */}
              <div className="relative cursor-pointer hover:text-blue-400 transition">
                <Bell size={22} />
                <span className="absolute -top-2 -right-2 bg-blue-600 text-xs px-1.5 rounded-full">
                  3
                </span>
              </div>

              {/* Profile */}
              <div className="relative">
                <button
                  onClick={() => setOpen(!open)}
                  className="hover:text-blue-400 transition"
                >
                  <User size={22} />
                </button>

                {open && (
                  <div className="absolute right-0 mt-3 w-44 bg-gray-900 text-white 
                                  rounded-lg shadow-xl border border-gray-800 p-2">
                    <p className="hover:bg-gray-800 p-2 rounded cursor-pointer">
                      My Profile
                    </p>
                    <p className="hover:bg-gray-800 p-2 rounded cursor-pointer">
                      My Stats
                    </p>
                    <p className="hover:bg-gray-800 p-2 rounded cursor-pointer">
                      Settings
                    </p>
                    <p
                      onClick={() => setIsLoggedIn(false)}
                      className="hover:bg-gray-800 p-2 rounded cursor-pointer text-red-400"
                    >
                      Logout
                    </p>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <button
                onClick={() => navigate("/login")}
                className="px-4 py-1.5 border border-gray-600 rounded-md hover:border-blue-500 transition"
              >
                Login
              </button>
              <button
                onClick={() => navigate("/signup")}
                className="px-4 py-1.5 bg-blue-600 hover:bg-blue-700 rounded-md font-semibold transition"
              >
                Sign Up
              </button>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-black border-t border-gray-800 px-6 py-6 space-y-6">

          {/* Search */}
          {isLoggedIn && (
            <div className="relative">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="Search battles..."
                className="w-full pl-10 pr-4 py-2 rounded-md 
                           bg-gray-900 border border-gray-700 
                           text-sm text-white
                           focus:outline-none focus:border-blue-500
                           transition"
              />
            </div>
          )}

          {/* Navigation Links */}
          <div className="space-y-4">
            {navItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                onClick={(e) => handleNavigation(item, e)}
                className="block text-gray-300 hover:text-white transition"
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Logged In Section */}
          {isLoggedIn ? (
            <div className="pt-4 border-t border-gray-800 space-y-4">

              {/* Notifications */}
              <div className="flex items-center justify-between text-gray-300">
                <span>Notifications</span>
                <div className="relative">
                  <Bell size={20} />
                  <span className="absolute -top-2 -right-2 bg-blue-600 text-xs px-1.5 rounded-full">
                    3
                  </span>
                </div>
              </div>

              {/* Profile Dropdown */}
              <div>
                <button
                  onClick={() => setOpen(!open)}
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition"
                >
                  <User size={20} />
                  <span>Account</span>
                </button>

                {open && (
                  <div className="mt-3 bg-gray-900 border border-gray-800 rounded-lg p-2 space-y-2">
                    <p className="hover:bg-gray-800 p-2 rounded cursor-pointer">
                      My Profile
                    </p>
                    <p className="hover:bg-gray-800 p-2 rounded cursor-pointer">
                      My Stats
                    </p>
                    <p className="hover:bg-gray-800 p-2 rounded cursor-pointer">
                      Settings
                    </p>
                    <p
                      onClick={() => setIsLoggedIn(false)}
                      className="hover:bg-gray-800 p-2 rounded cursor-pointer text-red-400"
                    >
                      Logout
                    </p>
                  </div>
                )}
              </div>

            </div>
          ) : (
            <div className="pt-4 border-t border-gray-800 space-y-3">
              <button
                onClick={() => navigate("/login")}
                className="w-full py-2 border border-gray-600 rounded-md"
              >
                Login
              </button>
              <button
                onClick={() => navigate("/signup")}
                className="w-full py-2 bg-blue-600 rounded-md"
              >
                Sign Up
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;