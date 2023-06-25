import { FaGithub, FaFacebook, FaTwitter } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import Image from "../assets/avatar.png";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto no-select">
        <div className="flex flex-col lg:flex-row gap-y-8 lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left ">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px]"
            >
              WOJTEK <span>BUDA</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[60px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="text-white mr-4">Robię jako</span>
              <TypeAnimation
                className="text-gradient"
                sequence={["Murarz", 2000, "Tynkarz", 2000, "Akrobata", 2000]}
                speed={50}
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 mx-2-lg mx-auto lg:mx-0"
            >
              Litwo! Ojczyzno moja! Ty jesteś jak zdrowie. Ile cię trzeba cenić,
              ten tylko się dowie, kto cię stracił. Dziś piękność twą w całej
              ozdobie, widzę i opisuję, bo tęsknię po tobie.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <button className="btn btn-lg mr-2">Napisz do mnie</button>
              <a
                href="https://linktr.ee/wojtek00?utm_source=linktree_admin_share"
                className="text-gradient btn-link"
              >
                My Portfolio
              </a>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 lg:ml-9 lg:scale-150 "
            >
              <a href="https://www.facebook.com/wojciech.buda.69">
                <FaFacebook />
              </a>
              <a href="https://twitter.com/WojtaszekB00">
                <FaTwitter />
              </a>
              <a href="https://github.com/WojciechBuda">
                <FaGithub />
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="hidden lg:flex flex-1 max-w[320px] lg:max-w-[482px]"
          >
            <img src={Image} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
