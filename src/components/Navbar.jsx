import { useState } from "react";

import { Link } from "react-router-dom";

import {
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <nav className="fixed top-0 left-0 w-full z-50 bg-[#111827]/95 backdrop-blur-lg border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* LOGO */}
        <Link
          to="/"
          className="text-4xl font-bold text-blue-500"
        >
          Washim.dev
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-12 text-white text-xl font-medium">

          <Link
            to="/"
            className="hover:text-cyan-400 transition"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="hover:text-cyan-400 transition"
          >
            About
          </Link>

          <Link
            to="/projects"
            className="hover:text-cyan-400 transition"
          >
            Projects
          </Link>

          <Link
            to="/contact"
            className="hover:text-cyan-400 transition"
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

        <div className="md:hidden bg-[#111827] border-t border-white/10 px-6 py-6 flex flex-col gap-6 text-white text-xl font-medium">

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