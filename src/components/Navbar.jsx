import { NavLink } from "react-router-dom";

function Navbar() {

  const navLinkStyles = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold"
      : "text-gray-700 hover:text-blue-600 transition";

  return (
    <header className="sticky top-0 z-50 border-b border-white/20 bg-white/60 backdrop-blur-xl">
      
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        
        <h1 className="text-2xl font-bold text-blue-600">
          Washim.dev
        </h1>

        <ul className="flex gap-6 text-sm md:text-base">
          
          <li>
            <NavLink to="/" className={navLinkStyles}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" className={navLinkStyles}>
              About
            </NavLink>
          </li>

          <li>
            <NavLink to="/projects" className={navLinkStyles}>
              Projects
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" className={navLinkStyles}>
              Contact
            </NavLink>
          </li>

        </ul>

      </nav>

    </header>
  );
}

export default Navbar;