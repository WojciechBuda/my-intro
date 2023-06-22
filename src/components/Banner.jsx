import React from "react";

import Image from "../assets/avatar.png";

import { FaGithub, FaFacebook, FaTwitter } from "react-icons/fa";

import { TypeAnimation } from "react-type-animation";

import { motion } from "framer-motion";

import { fadeIn } from "../variants"

const Banner = () => {
  return (
    <section className="min-h-[85vh] lg:min-h[78vh] flex items-center" id="home">
      <div className="container mx-auto no-select">
        <div className="flex flex-col lg:flex-row gap-y-8 lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left ">
            <h1 className="text-[55px] font-bold leading-[0.8] lg:text-[110px]">
              WOJCIECH <span>BUDA</span>
            </h1>
            <div className="mb-6 text-[60px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]">
              <span className="text-white mr-4">Robię jako ...</span>
              <TypeAnimation
                sequence={["Murarz", 1000, "Tynkarz", 1000, "Akrobata", 1000]}
                speed={50}
                className="text-violet-400"
                wrapper="span"
                repeat={Infinity}
              />
            </div>
            <p className="mb-8 mx-2-lg mx-auto lg:mx-0">
              Litwo! Ojczyzno moja! Ty jesteś jak zdrowie. Ile cię trzeba cenić,
              ten tylko się dowie, kto cię stracił. Dziś piękność twą w całej
              ozdobie, widzę i opisuję, bo tęsknię po tobie.
            </p>
            <div className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0">
              <button className="btn btn-lg mr-2">Napisz do mnie</button>
              <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a>
            </div>
          </div>
          <div className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
            <a href="https://www.facebook.com/wojciech.buda.69">
              <FaFacebook />
            </a>
            <a href="https://twitter.com/WojtaszekB00">
              <FaTwitter />
            </a>
            <a href="https://github.com/WojciechBuda">
              <FaGithub />
            </a>
          </div>
          <div className="hidden lg:flex">
            <img src={Image} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
