import {} from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Hobby = () => {
  return (
    <section className="section" id="services">
      <div className="mt-16 container ml-44 mx-auto flex-1 justify-center items-center lg:flex-row lg:items-start lg:justify-start h-screen">
        <div className="mx-auto text-left">
          <h2 className="h2 text-gradient">My Hobby</h2>
          <h3 className="h3">These are activities I am a huge fan of...</h3>
        </div>
        <div className="flex flex-col h-auto w-auto justify-items-center lg:flex-row lg:items-center">
          <div className="flex-1">
            <motion.div
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
            ></motion.div>
          </div>
          <div className="flex-1 rounded-lg overflow-hidden">
            <motion.div
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
            ></motion.div>
          </div>
          <div className="flex-1 transition ease-in-out">
            <motion.div
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
            ></motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hobby;
