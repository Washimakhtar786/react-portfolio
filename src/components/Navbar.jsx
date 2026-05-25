import { useState } from "react";
import profileImage from "../assets/my pic.jpeg";

import { Link } from "react-router-dom";

import {
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0B1120]/95 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.35)]">

      {/* MAIN NAVBAR */}
      <div className="max-w-7xl mx-auto px-8 h-[78px] flex items-center justify-between">

        {/* LOGO */}
        <Link
          to="/"
          className="flex items-center gap-3"
        >

          <img
            src={profileImage}
            alt="Washim Akhtar"
            className="w-12 h-12 rounded-full object-cover border-2 border-blue-500 shadow-lg"
          />

          <div className="flex flex-col leading-none">

            <span className="text-[32px] font-black tracking-tight text-blue-500">

              Washim

            </span>

            <span className="text-[11px] text-gray-400 font-medium mt-1">

              Frontend Developer

            </span>

          </div>

        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-12 text-white text-[18px] font-semibold">

          <Link
            to="/"
            className="hover:text-cyan-400 transition duration-300"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="hover:text-cyan-400 transition duration-300"
          >
            About
          </Link>

          <Link
            to="/projects"
            className="hover:text-cyan-400 transition duration-300"
          >
            Projects
          </Link>

          <Link
            to="/contact"
            className="hover:text-cyan-400 transition duration-300"
          >
            Contact
          </Link>

        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-3xl"
        >

          {menuOpen ? <FaTimes /> : <FaBars />}

        </button>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (

        <div className="md:hidden bg-[#0B1120] border-t border-white/10 px-8 py-6 flex flex-col gap-6 text-white text-xl font-semibold">

          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="hover:text-cyan-400 transition"
          >
            Home
          </Link>

          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="hover:text-cyan-400 transition"
          >
            About
          </Link>

          <Link
            to="/projects"
            onClick={() => setMenuOpen(false)}
            className="hover:text-cyan-400 transition"
          >
            Projects
          </Link>

          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="hover:text-cyan-400 transition"
          >
            Contact
          </Link>

        </div>

      )}

    </nav>
  );
}

export default Navbar;