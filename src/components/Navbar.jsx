import { NavLink } from "react-router-dom";

function Navbar() {
  return (

    <nav className="sticky top-0 z-50 bg-[#050816]/90 backdrop-blur-lg border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* LOGO */}
        <h1 className="text-3xl font-bold text-blue-500">
          Washim.dev
        </h1>

        {/* NAV LINKS */}
        <div className="flex items-center gap-10 text-lg">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-cyan-400 font-semibold"
                : "text-white hover:text-cyan-400 transition"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-cyan-400 font-semibold"
                : "text-white hover:text-cyan-400 transition"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive
                ? "text-cyan-400 font-semibold"
                : "text-white hover:text-cyan-400 transition"
            }
          >
            Projects
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-cyan-400 font-semibold"
                : "text-white hover:text-cyan-400 transition"
            }
          >
            Contact
          </NavLink>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;