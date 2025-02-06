import React from "react";
import { Outlet, Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="fixed top-0 flex items-center justify-between w-full p-4 bg-white">
      <p>
        <a href="https://kopikenangan.com/">
          <img className="h-12" src={`${process.env.PUBLIC_URL}/Source/assets career/logo.png`} alt="Logo Kopi Kenangan" />
        </a>
      </p>
      <div className="flex space-x-6">
        <ul className="flex items-center space-x-6">
          <li>
            <Link to="/vip" className="text-gray-700 hover:text-gray-900 hover:font-semibold">
              VIP
            </Link>
          </li>
          <div className="relative group">
            <li className="text-gray-700 cursor-pointer hover:text-gray-900 hover:font-semibold">
              <Link to="/order">Order</Link>
            </li>
            <div className="absolute hidden h-auto p-4 mt-0 space-y-0 bg-slate-50 text-[14px] -ml-40 w-52 group-hover:block">
              <a href="#" className="block text-right text-gray-700 hover:text-gray-900 hover:font-semibold">
                Blewah Mewah Series
              </a>
              <a href="#" className="block text-right text-gray-700 hover:text-gray-900 hover:font-semibold">
                KISS & Food Selection
              </a>
              <a href="#" className="block text-right text-gray-700 hover:text-gray-900 hover:font-semibold">
                Dreamy Choco Series
              </a>
              <a href="#" className="block text-right text-gray-700 hover:text-gray-900 hover:font-semibold">
                Gebyar Kenangan
              </a>
              <a href="#" className="block text-right text-gray-700 hover:text-gray-900 hover:font-semibold">
                Pasangan Ideal
              </a>
              <a href="#" className="block text-right text-gray-700 hover:text-gray-900 hover:font-semibold">
                Pesta Cashback
              </a>
              <a href="#" className="block text-right text-gray-700 hover:text-gray-900 hover:font-semibold">
                Outlets
              </a>
              <a href="#" className="block text-right text-gray-700 hover:text-gray-900 hover:font-semibold">
                Big Order
              </a>
            </div>
          </div>
          <div className="relative group">
            <li className=" text-gray-700 cursor-pointer hover:text-gray-900 hover:font-semibold">
              <Link to="/about">About</Link>
            </li>
            <div className="absolute hidden -ml-40 p-2 mt-0 space-y-0 text-[14px] bg-white w-52 group-hover:block">
              <a href="#" className="block text-right text-gray-700 hover:text-gray-900 hover:font-semibold">
                News
              </a>
              <a href="#" className="block text-right text-gray-700 hover:text-gray-900 hover:font-semibold">
                Kenangan Academy
              </a>
            </div>
          </div>
          <li>
            <Link to="/career" className="text-gray-700 hover:text-gray-900 hover:font-semibold">
              Career
            </Link>
          </li>
          <li>
            <Link to="/download" className="text-gray-700 hover:text-gray-900 hover:font-semibold">
              DownloadApp
            </Link>
          </li>
          <li>
            <a href="https://kopikenangan.com/hanya-untukmu">
              <img className="h-12" src={`${process.env.PUBLIC_URL}/Source/assets career/hanya untukmu.png`} alt="hanya untukmu" />
            </a>
          </li>
        </ul>
      </div>
      <Outlet />
    </nav>
  );
};

export default Nav;
