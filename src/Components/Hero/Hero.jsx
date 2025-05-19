import React from "react";
import { motion } from "motion/react";
import hero from "/assets/hero.jpg";

import Navbar from "../Navbar/Navbar";
import styled from "styled-components";

const Hero = () => {
  return (
    <Wrapper id="home" className="p-5 text-center overflow-hidden bg-white rounded-xl">
      <Navbar />
      <motion.h2
        initial={{ opacity: 0, x: -500 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-7xl z-100 myname relative top-3 mt-5"
      >
        Daksh Sathwara
      </motion.h2>
      <motion.img
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        src={hero}
        className="w-90 m-auto -rotate-7"
        alt=""
      />
      <motion.h2
        initial={{ opacity: 0, x: 500 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-4xl min-sm:text-5xl min-md:text-9xl relative -right-10 z-100 bottom-3 overflow-hidden"
      >
        PORTFOLIO
      </motion.h2>

      <motion.span
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay: 1 }}
        className="text-3xl"
      >
        Front-End Web Developer
      </motion.span>
    </Wrapper>
  );
};

export default Hero;


const Wrapper = styled.section`
.myname{
    font-family: "Dancing Script";
}

`