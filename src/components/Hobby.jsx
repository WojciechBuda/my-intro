import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Hobby = () => {
  const handleAnswerClick = (answer) => {
    console.log(`Wybrana odpowiedź: ${answer}`);
  };

  return (
    <section
      className="section min-h-[85vh] lg:min-h[78vh] flex items-center"
      id="services"
    >
      <div className="flex mx-auto shadow-md overflow-hidden">
        <div className="flex md:flex-row">
          <div className="p-8 flex flex-col text-center gap-y-8 lg:items-center lg:gap-x-12">
            <a className="block mt-1 text-lg leading-tight font-extrabold">
              <motion.h2
                variants={fadeIn("right", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
              >
                <h2 className="h2 text-4xl text-gradient top-0 lg:block flex-1 text-center lg:text-left no-select">
                  My Hobby
                </h2>
              </motion.h2>
            </a>
            <span className="mt-2 text-2xl font-bold mb-8 mx-2-lg mx-auto lg:mx-0 no-select">
              <motion.h3
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
              >
                <p>
                  These are activities <br />I am a huge fan of
                </p>
              </motion.h3>
            </span>
          </div>
          <div className="flex-1 lg:space-x-6 hidden lg:block">
            <motion.button
              onClick={() => handleAnswerClick("winter")}
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{
                backgroundImage: 'url("src/assets/winter.jpg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "50%",
                width: "350px",
                height: "350px",
              }}
            ></motion.button>
            <motion.button
              onClick={() => handleAnswerClick("climb")}
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{
                backgroundImage: 'url("src/assets/climb.jpg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "50%",
                width: "350px",
                height: "350px",
              }}
            ></motion.button>
            <motion.button
              onClick={() => handleAnswerClick("summit")}
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{
                backgroundImage: 'url("src/assets/ice_axe.jpg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "50%",
                width: "350px",
                height: "350px",
              }}
            ></motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hobby;
