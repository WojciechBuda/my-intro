import { BiUser } from "react-icons/bi";
import { BsHouse, BsEmojiSunglasses } from "react-icons/bs";

import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-30">
      <div className="container mx-auto">
        <div className="rounded-full w-full bg-nav h-[96px] backdrop-blur-2xl rounder-full max-w-[240px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50">
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
  );
};

export default Nav;
