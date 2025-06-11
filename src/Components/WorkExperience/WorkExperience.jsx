import React from "react";
import { motion } from "motion/react";
import experience from '/assets/experience.jpg'

const WorkExperience = () => {
  return (
    <div id="work-experience" className="p-5 py-15 grid grid-cols-1 min-md:grid-cols-2">
      <motion.div initial={{opacity: 0, x : -100}} whileInView={{opacity:1, x : 0}} transition={{delay: 0.4, duration : 0.4}}>
        <h2 className="text-6xl text-center min-lg:text-left mb-6 w-full min-md:w-5">Work Experience</h2>
        <h2 className="mb-3 text-2xl min-lg:text-3xl">Astute Infosoft Solution</h2>
        <p>
          I worked as a frontend intern for 4 months, where I helped build web
          pages using HTML, CSS, JavaScript, and React. I create and improved
          designs, and worked with a team using Git and GitHub. This internship
          helped me learn how real projects are done in a team.
        </p>
      </motion.div>
      <motion.div initial={{opacity: 0, x : 100}} whileInView={{opacity:1, x : 0}} transition={{delay: 0.4, duration : 0.4}}>
        <img src={experience} className="m-auto w-100" alt="" />
      </motion.div>
    </div>
  );
};

export default WorkExperience;
