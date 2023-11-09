import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "work",
    },
    {
      id: 3,
      link: "devblog",
    },
    {
      id: 4,
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 fixed z-50 bg-gray-500 bg-opacity-50">
      <a
        href="#home"
        rel="noopener noreferrer"
        className="select-none text-4xl m-6 font-bold text-white"
      >
        <span className="text-[#fca311]">T</span>S
      </a>
      <div
        onClick={() => setNav(!nav)}
        className="text-white cursor-pointer m-3.5 z-10 md:hidden hover:text-[#e5e5e5] ease-out duration-75"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      <ul
        className={`-z-10 flex flex-row justify-center items-center absolute w-full top-0 transition-all duration-300 bg-gray-500 bg-opacity-50 md:opacity-0 ${
          nav ? "top-20 opacity-100" : "top-0"
        } opacity-0`}
      >
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="text-white select-none cursor-pointer uppercase py-4 px-2 font-bold text-xl hover:text-[#e5e5e5] ease-out duration-100"
          >
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
