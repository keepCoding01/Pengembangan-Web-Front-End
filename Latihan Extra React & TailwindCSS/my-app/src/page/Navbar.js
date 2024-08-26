import React from "react";
import { Outlet, Link } from "react-router-dom";
import Logo from "../Source/Logo.png";

const Navbar = () => {
  return (
    <nav className=" fixed w-full bg-pink-300 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <img className="h-14 rounded-full" src={Logo} alt="Logo Toko PrettyPink" />
        <ul className="  flex space-x-20 mr-20 ">
          <li>
            <Link to="/" className="text-white hover:text-pink-600 font-medium">
              Beranda
            </Link>
          </li>
          <li>
            <Link to="/cart" className="text-white hover:text-pink-600 font-medium">
              Keranjang
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </nav>
  );
};

export default Navbar;
