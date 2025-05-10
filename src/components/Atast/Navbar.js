import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, User, Settings, Shield } from "lucide-react";
import FooterIcon from "../../assests/studentsection.png";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { path: "/profile", label: "Profile", icon: <User size={18} /> },
    { path: "/content", label: "Content", icon: <Menu size={18} /> },
    { path: "/chat", label: "Chat", icon: <Menu size={18} /> },
    { path: "/saved", label: "Saved", icon: <Menu size={18} /> },
    { path: "/privacy", label: "Privacy Policy", icon: <Shield size={18} /> },
    { path: "/settings", label: "Settings", icon: <Settings size={18} /> },
  ];

  return (
    <nav className="bg-[#121212] text-white py-4 px-6 shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-11 h-11 rounded-full flex items-center justify-center bg-[#5c030b] hover:bg-[#7a040e] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} className="text-white" />
          </motion.button>
          
          {/* Dropdown Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-16 left-4 bg-[#1a1a1a] rounded-lg shadow-xl py-2 w-48 z-50"
            >
              {menuItems.map((item) => (
                <motion.button
                  key={item.path}
                  whileHover={{ backgroundColor: "#5c030b" }}
                  className={`w-full text-left px-4 py-2 flex items-center space-x-3 ${
                    location.pathname === item.path ? "bg-[#5c030b]" : ""
                  }`}
                  onClick={() => {
                    navigate(item.path);
                    setIsMenuOpen(false);
                  }}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </motion.button>
              ))}
            </motion.div>
          )}
        </div>

        {/* Center Title */}
        <motion.h1 
          className="text-3xl font-semibold font-[montserrat] cursor-pointer"
          whileHover={{ scale: 1.05 }}
          onClick={() => navigate("/atast")}
        >
          Atastians
        </motion.h1>

        {/* Right Icon */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-10 h-10 rounded-full flex items-center justify-center bg-[#5c030b] hover:bg-[#7a040e] transition-colors"
          onClick={() => navigate("/atast")}
        >
          <img
            src={FooterIcon}
            alt="Atastians"
            className="w-7 h-5"
          />
        </motion.button>
      </div>
    </nav>
  );
};

export default Navbar;