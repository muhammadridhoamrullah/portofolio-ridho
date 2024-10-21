import { FaAngry } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between p-5 bg-indigo-800 text-white">
      <div className="flex items-center font-righteous ">
        <FaAngry className="mr-2" /> Portofolio
      </div>
      <div className="flex space-x-4">
        <Link to="#home" className="font-righteous">
          Home
        </Link>
        <Link to="#portofolio" className="font-righteous">
          Portofolio
        </Link>
        <Link to="#contact" className="font-righteous hover:text-red-500">
          Contact
        </Link>
      </div>
      <div></div>
    </div>
  );
}
