import React, { useRef, useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";


const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  const scrollToSection = (data) => {
    const element = document.getElementById(data)
    if(element){
      element.scrollIntoView({behavior : 'smooth'})
      setMenu(false)
    }
  }


  return (
    <Wrapper className="relative duration-200">
      <div className="flex justify-between items-center">
        <motion.h2
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="font-bold text-xl min-sm:text-xl min-md:text-3xl"
        >
          Daksh <span className="font-normal">Sathwara</span>
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="items-center gap-10 hidden min-sm:hidden min-md:flex *:cursor-pointer myul"
        >
          <li onClick={() => scrollToSection('home')}>Home</li>
          <li onClick={() => scrollToSection('about')}>About Us</li>
          <li onClick={() => scrollToSection('skills')}>Skills</li>
          <li onClick={() => scrollToSection('work-experience')}>Work Experience</li>
          <li onClick={() => scrollToSection('project')}>Project</li>
          <li onClick={() => scrollToSection('contact')}>Contact</li>
        </motion.ul>

        <motion.div
          className="menu block min-sm:block min-md:hidden"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {menu ? (
            <IoClose
              size={60}
              onClick={handleMenu}
              className="cursor-pointer"
            />
          ) : (
            <CiMenuFries
              onClick={handleMenu}
              size={50}
              className="cursor-pointer border p-3 rounded-full"
            />
          )}
        </motion.div>
      </div>

      {/* Responsive Menu with AnimatePresence */}
      <AnimatePresence>
        {!menu ? null : (
          <motion.ul
            key="responsive-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="text-white bg-black space-y-3 absolute top-16 left-0 w-full z-200 p-5"
          >
            <li onClick={() => scrollToSection('home')}>Home</li>
            <li onClick={() => scrollToSection('about')}>About Us</li>
            <li onClick={() => scrollToSection('skills')}>Skills</li>
            <li onClick={() => scrollToSection('work-experience')}>Work Experience</li>
            <li onClick={() => scrollToSection('project')}>Project</li> 
            <li onClick={() => scrollToSection('contact')}>Contact</li>
          </motion.ul>
        )}
      </AnimatePresence>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.nav`
    
  .myul li::after{
    content : "";
    display : block;
    width : 0%;
    height : 2px;
    background : #000;
    transition : width .3s;
  }

  .myul li:hover::after{
    width : 100%;
  }
`