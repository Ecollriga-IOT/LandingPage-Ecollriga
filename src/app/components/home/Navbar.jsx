import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sticky top-0 z-50 bg-white">
      <div className="flex justify-between items-center h-12 w-full mx-auto px-8">
        <h1 className="text-3xl font-bold text-[#077eff]">
          <a href="#home">RegadIOT</a>
        </h1>
        <ul className="hidden md:flex">
          <li className="p-4">
            <a className="hover:text-[#077eff]" href="#home">
              Home
            </a>
          </li>
          <li className="p-4">
            <a className="hover:text-[#077eff]" href="#about">
              About
            </a>
          </li>
          <li className="p-4">
            <a className="hover:text-[#077eff]" href="#services">
              Services
            </a>
          </li>
          <li className="p-4">
            <a className="hover:text-[#077eff]" href="#iot">
              IoT
            </a>
          </li>
          <li className="p-4">
            <a className="hover:text-[#077eff]" href="#team">
              Team
            </a>
          </li>
          <li className="p-4">
            <a className="hover:text-[#077eff]" href="#contact">
              Contact
            </a>
          </li>
        </ul>
        <ul className="hidden md:flex items-center">
          <li className="p-4">
            <a href="https://frontend-ecollriga.vercel.app/login">
              <button className="bg-[#00000] border-4 w-[100px] rounded-md font-medium py-1 text-black">
                Log In
              </button>
            </a>
          </li>
          <li className="p-4">
            <a href="https://frontend-ecollriga.vercel.app/signup">
              <button className="bg-[#077eff] w-[100px] rounded-md font-medium py-1 text-black transition duration-300 ease-out hover:bg-[#055de5]">
                Sign Up
              </button>
            </a>
          </li>
        </ul>

        <div onClick={handleMenu} className="block md:hidden">
          {isOpen ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="pt-4 uppercase font-semibold">
            <li className="p-2 flex justify-center border-b">
              <a className="hover:text-[#077eff]" href="#home">
                Home
              </a>
            </li>
            <li className="p-2 flex justify-center border-b">
              <a className="hover:text-[#077eff]" href="#about">
                About
              </a>
            </li>
            <li className="p-2 flex justify-center border-b">
              <a className="hover:text-[#077eff]" href="#services">
                Services
              </a>
            </li>
            <li className="p-2 flex justify-center border-b">
              <a className="hover:text-[#077eff]" href="#iot">
                IoT
              </a>
            </li>
            <li className="p-2 flex justify-center border-b">
              <a className="hover:text-[#077eff]" href="#team">
                Team
              </a>
            </li>
            <li className="p-2 flex justify-center border-b">
              <a className="hover:text-[#077eff]" href="#contact">
                Contact
              </a>
            </li>
            <li className="p-2 flex justify-center border-b">
              <button className="bg-[#00000] border-4 w-[80px] rounded-md font-medium py-1 text-black">
                <a href="https://frontend-ecollriga.vercel.app/login">Login</a>
              </button>
            </li>
            <li className="p-2 flex justify-center">
              <button className="bg-[#077eff] w-[80px] rounded-md font-medium py-1 text-black transition duration-300 ease-out hover:bg-[#055de5]">
                <a href="https://frontend-ecollriga.vercel.app/signup">Sign Up</a>
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
