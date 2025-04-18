import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { motion } from "motion/react";

import "./Navbar.css";

const Navbar = () => {
  const [menu, setMenu] = useState(true);

  const variants = {
    open: {
      clipPath: "circle(1200px at 40px 40px)",
    },
    transition: {
      type: "spring",
    },
    closed: {
      clipPath: "circle(25px at 43px 37px)",
      transition: {
        type: "spring",
        duration: 1,
      },
    },
  };

  const handleMenu = () => {
    if (menu) {
      setMenu(false);
    } else {
      setMenu(true);
    }
  };

  return (
    <nav>
      <div className="flex justify-between items-center">
        <motion.h2 initial={{opacity:0, y:-100}} animate={{opacity:1, y:0}} transition={{duration: 0.5, delay:0.3}} className="font-bold text-xl min-sm:text-xl min-md:text-3xl">
          Daksh <span className="font-normal">Sathwara</span>
        </motion.h2>

        <motion.ul initial={{opacity:0, y:-100}} animate={{opacity:1, y:0}} transition={{duration: 0.5, delay:0.3}} className="items-center gap-10 hidden min-sm:hidden min-md:flex">
          <li>Home</li>
          <li>About Us</li>
          <li>Work Experience</li>
          <li>Skills</li>
          <li>Project</li>
          <li>Contact</li>
        </motion.ul>

        <motion.div className="menu block min-sm:block min-md:hidden" initial={{opacity:0, y:-100}} animate={{opacity:1, y:0}} transition={{duration: 0.5, delay:0.3}}>
          {menu ? (
            <CiMenuFries
            
              onClick={handleMenu}
              size={50}
              className="block min-sm:block min-md:hidden border p-3 rounded-full"
            />
          ) : (
            <IoClose size={60} onClick={handleMenu} />
          )}
        </motion.div>
      </div>

      <motion.ul
        initial={{ opacity: 0, x: 100, y: -100 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`responsiveMenu text-white bg-black ${
          menu ? "hidden" : "block"
        }`}
      >
        <li>Home</li>
        <li>About Us</li>
        <li>Work Experience</li>
        <li>Skills</li>
        <li>Project</li>
        <li>Contact</li>
      </motion.ul>
    </nav>
  );
};

export default Navbar;
