import React from "react";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6">
      <Link href="/">
        <div className="flex items-center cursor-pointer">
          <Image alt="" src="/logo.png" height={40} width={40} />
          <span className="text-xl font-normal text-blue-700">
            terminal<b>State</b>
          </span>
        </div>
      </Link>

      <ul className="flex items-center">
        <li className="mr-6 font-medium text-gray-500">
          <a href="#">About</a>
        </li>
        <li className="mr-6 font-medium text-gray-500">
          <a href="#">Docs</a>
        </li>
        <li className="mr-6 font-medium text-gray-500">
          <a href="#">Forum</a>
        </li>
        <li className="mr-6 font-medium text-gray-500">
          <a href="#">Pricing</a>
        </li>
      </ul>

      <ul className="flex items-center">
        <li className="mr-6 font-medium text-gray-700">
          <a href="#" className="hover:text-black py-2 px-4">
            Login
          </a>
        </li>
        <li className="mr-6 font-medium text-gray-200">
          <a
            href="#"
            className="bg-primary rounded-md hover:text-white hover:bg-primary-dark py-2 px-4 transition-all"
          >
            Register
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
