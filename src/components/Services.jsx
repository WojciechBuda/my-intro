import {} from "react-icons/bs";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const services = [
  {
    name: "dupa",
    description: "dupa",
    link: "dupa",
  },
  {
    name: "dupa",
    description: "dupa",
    link: "dupa",
  },
  {
    name: "dupa",
    description: "dupa",
    link: "dupa",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div>
          <div className="bg-serv felx-1 lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12">
            <h2 className="h2  mb-6">dupa</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab velit,
              porro veniam non fuga recusandae molestias repudiandae, 
            </h3>
            <button className="btn btn-sm">Look</button>
          </div>

          <div>services</div>
        </div>
      </div>
    </section>
  );
};

export default Services;
