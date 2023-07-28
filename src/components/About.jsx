import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  const [ref, InView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="hue-rotate-180 flex-1 bg-about w-1/2 h-1/2 bg-contain bg-no-repeat mix-blend-lighten bg-top hidden lg:block"
          ></motion.div>
          <div className="flex-1 no-select">
            <motion.div
              className="h2 text-gradient"
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              About me
            </motion.div>
            <motion.h3
              className="h3 mb-4"
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              23 years young, brave and handsome student!
            </motion.h3>
            <motion.p
              className="mb-6"
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              voluptatem, ex, veritatis soluta sequi hic ipsam consequuntur
              vitae voluptates veniam maxime recusandae doloremque magnam
              reiciendis inventore excepturi corrupti, laborum fuga?
            </motion.p>
            <motion.div
              className="flex gap-x-6 lg:gap-x-10 mb-12"
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              <div>
                <div className="text-[40px] font-teritary text-gradient mb-2">
                  {InView ? <CountUp start={0} end={12} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Months of <br />
                  Experiance
                </div>
              </div>
              <div>
                <div className="text-[40px] font-teritary text-gradient mb-2">
                  {InView ? <CountUp start={0} end={4} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br />
                  Completed
                </div>
              </div>
              <div>
                <div className="text-[40px] font-teritary text-gradient mb-2">
                  {InView ? <CountUp start={0} end={23} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years from <br />
                  '00
                </div>
              </div>
            </motion.div>
            <motion.div
              className="flex gap-x-8 items-center"
              variants={fadeIn("up", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              <button className="btn btn-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
                Contact me
              </button>
              <a
                href=""
                className="text-gradient btn-link transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
              >
                My Portfolio
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
