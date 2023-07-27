import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Hobby = () => {
  const handleAnswerClick = (answer) => {
    console.log(`Wybrana odpowiedź: ${answer}`);
  };

  return (
    <section className="section" id="services">
      <div className="flex flex-row space-x-6">
        <div className="mx-auto ml-24">
          <h2 className="h2 text-gradient">My Hobby</h2>
          <h3 className="h3">These are activities <br/>I am a huge fan of</h3>
        </div>
        <div className="flex h-auto w-auto justify-items-center lg:flex-row lg:items-center space-x-8">
          <div className="flex-1">
            <motion.button
              onClick={() => handleAnswerClick("winter")}
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              style={{
                backgroundImage: 'url("src/assets/winter.jpg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "50%",
                width: "350px",
                height: "350px",
              }}
            ></motion.button>
          </div>
          <div className="flex-1 rounded-lg overflow-hidden">
            <motion.button
              onClick={() => handleAnswerClick("climb")}
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              style={{
                backgroundImage: 'url("src/assets/climb.jpg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "50%",
                width: "350px",
                height: "350px",
              }}
            ></motion.button>
          </div>
          <div className="flex-1 transition ease-in-out">
            <motion.button
              onClick={() => handleAnswerClick("summit")}
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
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
