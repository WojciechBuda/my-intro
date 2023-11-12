import { BiUser } from "react-icons/bi";
import { BsHouse, BsEmojiSunglasses } from "react-icons/bs";
import { useState } from "react"; 

import { Link } from "react-scroll";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false); 

  // Function to toggle the navbar
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Navbar Button */}
      <button
        className="fixed bottom-2 lg:bottom-8 right-2 z-40 bg-nav h-[60px] w-[60px] rounded-full flex items-center justify-center text-white/50 text-xl"
        onClick={toggleNavbar}
      >
        {isOpen ? "Menu" : "Menu"}
      </button>

      {/* Hidden Navbar */}
      <nav
        className={`fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-30 ${
          isOpen ? "h-[96px]" : "h-0" // Toggle the height based on isOpen state
        } duration-300 ease-in-out`}
      >
        <div className="container mx-auto">
          <div className="rounded-full w-full bg-nav backdrop-blur-2xl rounder-full max-w-[240px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50">
            <Link
              to="home"
              activeClass="active"
              smooth={true}
              spy={true}
              className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
            >
              <BsHouse />
            </Link>
            <Link
              to="about"
              activeClass="active"
              smooth={true}
              spy={true}
              className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
            >
              <BiUser />
            </Link>
            <Link
              to="services"
              activeClass="active"
              smooth={true}
              spy={true}
              className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
            >
              <BsEmojiSunglasses />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
