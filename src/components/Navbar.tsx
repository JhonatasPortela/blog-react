import { useState } from "react";
import { menu, close, logo } from "../assets";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => setToggle(!toggle);
  return (
    <div className="w-screen h-[80px] z-10 bg-white fixed drop-shadow-lg">
      <div className="flex justify-between items-center w-full h-full md:max-w-[1240px] m-auto">
        <div className="flex items-center">
          <img
            src={logo}
            alt="logo"
            className="sm:ml-10 ss:ml-10 md:ml-3 opacity-[55%] w-full h-[50px]"
          />
        </div>

        <div className="flex items-center">
          <ul className="hidden md:flex p-0 list-none">
            <li className="p-4">Home</li>
            <li className="p-4">About</li>
            <li className="p-4">Support</li>
            <li className="p-4">Platform</li>
            <li className="p-4">Pricing</li>
          </ul>
        </div>
        <div className="hidden md:flex sm:mr-10 md:mr-10">
          <button className="text-black border-none bg-transparent mr-4 hover:text-indigo-600 rounded-md">
            {" "}
            Login
          </button>
          <button className="px-8 py-3 text-white border bg-indigo-600 border-indigo-600 hover:bg-transparent hover:text-indigo-600 rounded-md">
            {" "}
            Sign Up
          </button>
        </div>
        <div className="md:hidden" onClick={handleClick}>
          <img
            src={!toggle ? menu : close}
            alt="menu"
            className="w-[28px] h-[28px] object-contain mr-10"
          />
        </div>
      </div>
      <ul
        className={
          toggle ? "absolute bg-white w-full px-8 md:hidden" : "hidden"
        }
      >
        <li>Home</li>
        <li>About</li>
        <li>Support</li>
        <li>Platform</li>
        <li>Pricing</li>
        <div className="flex flex-col my-4">
          <button className="w-full text-black border border-indigo-600 bg-transparent mr-4 hover:text-indigo-600 rounded-md mb-4 py-3 px-8">
            {" "}
            Login
          </button>
          <button className=" px-8 py-3 text-white border bg-indigo-600 border-indigo-600 hover:bg-transparent hover:text-indigo-600 rounded-md">
            {" "}
            Sign Up
          </button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
