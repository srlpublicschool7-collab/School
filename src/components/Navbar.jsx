import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();


export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-zinc-900/95 text-white shadow-md z-50 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-3 px-4">

        {/* Logo + School Name */}
        <div className="flex items-center gap-3">
          <div className="h-16 w-16 overflow-hidden bg-white rounded-full shadow-lg">
            <img
              onClick={()=>navigate("/")}
              className="h-full w-full object-cover"
              src="./src/images/srl-logo.jpeg"
              alt="logo"
            />
          </div>

          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-wide">
            SRL Public School
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-lg font-semibold">
          <Link className="hover:text-yellow-300 transition" to="/">Home</Link>
          <Link className="hover:text-yellow-300 transition" to="/about">About</Link>
          <Link className="hover:text-yellow-300 transition" to="/faculty">Faculty</Link>
          <Link className="hover:text-yellow-300 transition" to="/facilities">Facilities</Link>
          <Link className="hover:text-yellow-300 transition" to="/fees">Fees</Link>
          <Link className="hover:text-yellow-300 transition" to="/enquiry">Enquiry</Link>
          <Link className="hover:text-yellow-300 transition" to="/contact">Contact</Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="text-2xl md:hidden"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {open && (
        <div className="md:hidden bg-zinc-900 text-lg font-semibold flex flex-col items-center space-y-6 py-6 animate-slideDown">
          <Link onClick={() => setOpen(false)} className="hover:text-yellow-300" to="/">Home</Link>
          <Link onClick={() => setOpen(false)} className="hover:text-yellow-300" to="/about">About</Link>
          <Link onClick={() => setOpen(false)} className="hover:text-yellow-300" to="/faculty">Faculty</Link>
          <Link onClick={() => setOpen(false)} className="hover:text-yellow-300" to="/facilities">Facilities</Link>
          <Link onClick={() => setOpen(false)} className="hover:text-yellow-300" to="/fees">Fees</Link>
          <Link onClick={() => setOpen(false)} className="hover:text-yellow-300" to="/enquiry">Enquiry</Link>
          <Link onClick={() => setOpen(false)} className="hover:text-yellow-300" to="/contact">Contact</Link>
        </div>
      )}
    </nav>
  );
}
