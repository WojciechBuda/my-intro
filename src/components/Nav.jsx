import { BiUser } from "react-icons/bi";
import { BsBriefcaseFill, BsChatSquareDots, BsHouse } from "react-icons/bs";
import { MdOutlineDesignServices } from "react-icons/md";
import { useState } from "react";

import { Link } from "react-scroll";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);

    return (
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-gray-800 text-white transition-all duration-300 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="flex fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
          <div className="container mx-auto">
            <div className=" rounded-full w-full bg-black/20  h-[96px] backdrop-blur-2xl rounder-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50">
              <Link
                to="home"
                activeClass="active"
                smooth={true}
                spy={true}
                offset={-200}
                className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
              >
                <BsHouse />
              </Link>
              <Link
                to="about"
                activeClass="active"
                smooth={true}
                spy={true}
                className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
              >
                <BiUser />
              </Link>
              <Link
                to="services"
                activeClass="active"
                smooth={true}
                spy={true}
                className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
              >
                <MdOutlineDesignServices />
              </Link>
              <Link
                to="work"
                activeClass="active"
                smooth={true}
                spy={true}
                className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
              >
                <BsBriefcaseFill />
              </Link>
              <Link
                to="contact"
                activeClass="active"
                smooth={true}
                spy={true}
                className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
              >
                <BsChatSquareDots />
              </Link>
            </div>
          </div>
        </nav>
        <button onClick={toggleNav}>Menu</button>
      </div>
    );
  };
};
export default Nav;
