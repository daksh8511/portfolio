import React from "react";

import { motion } from "motion/react";

import skills from "/assets/skills.jpg";

import html from "/assets/skills/html.svg";
import css from "/assets/skills/css.svg";
import javascript from "/assets/skills/javascript.svg";
import react from "/assets/skills/react.svg";
import bootstrap from "/assets/skills/bootstrap.svg";
import tailwind from "/assets/skills/tailwind.svg";
import github from "/assets/skills/github.svg";
import mui from '/assets/skills/mui.png'
import { easeInOut } from "motion";
import styled from "styled-components";

const Skill = () => {
  const data = [html, css, javascript, react, bootstrap, tailwind, github, mui];

  const mainContainer = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        type: "spring",
        damping: 10,
        stiffness: 150,
        ease: easeInOut,
      },
    },
  };

  const skillContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
        staggerChildren: 0.3,
      },
    },
  };
  return (
    <Wrapper id="skills" className="p-5 bg-white mt-4 rounded-xl">
      <div className="grid gap-20 grid-cols-1 min-sm:grid-cols-1 min-md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <h2 className="text-center myh2 uppercase translate-y-3 min-sm:translate-y-3 min-md:translate-y-5 min-lg:translate-y-9 text-3xl min-sm:text-3xl min-md:text-5xl min-lg:text-8xl">
            skills & expertise
          </h2>
          <img src={skills} alt="" />
        </motion.div>
        <div>
          <div>
            <h2 className="mytitle mb-8  text-3xl border-b">Web Development</h2>

            <motion.ul
              variants={skillContainer}
              initial="hidden"
              whileInView={"visible"}
              className="grid grid-cols-3 gap-7"
            >
              {data.map((item, i) => {
                return (
                  <motion.li variants={mainContainer}>
                    <img src={item} alt={item} className="w-10" />
                  </motion.li>
                );
              })}
            </motion.ul>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Skill;


const Wrapper = styled.section`
  .mytitle{
    font-family: "Dancing Script";

    .responsiveMenu li{
    text-align: center;
    padding: 25px 10px;
    font-size: 30px;
}
}
`
