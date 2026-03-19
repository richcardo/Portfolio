import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-8 py-4 shadow-md bg-white z-50">
      <h1 className="text-xl font-bold">Riccardo Dev</h1>

      <ul className="hidden md:flex space-x-8">
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
      </ul>
    </nav>
  );
}

export default Navbar;
