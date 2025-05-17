import React from "react";
import { motion } from "motion/react";


import about from "/assets/about.jpg";
import about2 from "/assets/about2.png";

const About = () => {
  return (
    <section id="about" className="p-5 py-15 grid grid-cols-1 space-y-20 bg-white mt-4 rounded-xl">
      <motion.div 
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.4, duration: 0.4 }}
      className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 h-full">
        <h2
          className="uppercase text-6xl w-full min-sm:w-full min-md:w-[400px] tracking-wider ms-auto"
        >
         about us
        </h2>
        <img
         src={about} className="rotate-y-180 h-[250px]" alt="" />
      </motion.div>
      <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.6, duration: 0.4 }}
      className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 h-full">
        <h2 className="w-full min-sm:w-full min-md:w-2/4 ms-auto text-xl">
          I am a digital nomad currently based in Ahmedabad, Gujarat. I've been
          working in front-end web development for the past six month. It was
          only in the past three that I decided to focus full-time on
          illustrating.{" "}
        </h2>
        <img src={about2} alt="about2" className="m-auto -rotate-10 mt-10 min-sm:mt-10 min-md:mt-0" />
      </motion.div>
    </section>
  );
};

export default About;
