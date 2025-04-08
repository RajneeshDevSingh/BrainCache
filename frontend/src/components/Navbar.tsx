import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaPlus, FaRegUser } from "react-icons/fa";
import { RiShareFill } from "react-icons/ri";
import { MdLogout } from "react-icons/md";
import { LuBrain } from "react-icons/lu";

import Button from "./ui/Button";
import SidebarItems from "./ui/SidebarItems";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogOut = () => {
    localStorage.removeItem("token"); 
    setIsOpen(false);
    navigate("/auth", { replace: true }); 

  };

  return (
    <div className="flex justify-between items-center my-4 mx-10 relative">
      <div className="font-bold flex items-center gap-x-4">
        <Link to="/AllContent">
          <SidebarItems icon={<LuBrain />} title="Second Brain" noAnimation />
        </Link>
      </div>

      <div className="flex justify-center gap-2">
        <Button variant="primary" size="sm" text="Share Brain" startIcon={<RiShareFill />} fullWidth={true} />
        <Button variant="secondary" size="sm" text="Content" startIcon={<FaPlus />} fullWidth={true} />
      </div>

      <div className="relative" ref={dropdownRef}>
        <button className="text-2xl text-white p-2 rounded-full hover:bg-gray-700" onClick={() => setIsOpen(!isOpen)}>
          <FaRegUser />
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-2 w-32 bg-white text-black rounded-lg shadow-lg">
            <ul className="py-1">
              <Link to="/UserProfile">
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer flex items-center gap-2">
                  <FaRegUser /> Profile
                </li>
              </Link>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer flex items-center gap-2" onClick={handleLogOut}>
                <MdLogout /> Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
