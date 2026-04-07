import { useState } from "react";
import { Link } from "react-router-dom";
import { Laptop } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md z-50">
      <div className="w-full px-3 py-4 flex justify-center gap-5 items-center">
        {/* Logo */}
        <div className="flex">
          <Laptop />
          <h1 className="text-xl font-bold">Riccardo Dev</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 items-center text-mauve-700">
          <li>
            <Link to="/" className="hover:text-blue-500">
              Home
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-500">
              Contatti
            </Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-blue-500">
              Progetti
            </Link>
          </li>
          <li className="hover:text-blue-500">
            <Link to="/delivery-system">PizzaTrack</Link>
          </li>
        </ul>

        {/* Hamburger Button */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 pb-6">
          <ul className="flex flex-col space-y-4">
            <li>
              <Link to="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                Contatti
              </Link>
            </li>
            <li>
              <Link to="/projects" onClick={() => setIsOpen(false)}>
                Progetti
              </Link>
            </li>
            <li onClick={() => setIsOpen(false)}>
              <Link to="/delivery-system">PizzaTrack</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
