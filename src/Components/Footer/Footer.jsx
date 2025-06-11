import React from 'react'
import { FaLinkedinIn, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

const Footer = () => {
  return (
    <div className="grid grid-cols-1 justify-between items-center border-t pt-4 mt-10 border-gray-400">
        <div className='text-center mb-3'>Copyright © Daksh Sathwara</div>
        <div className="flex items-center gap-5 justify-center">
          <a href="https://www.instagram.com/daksh_sathwara/" target="_blank">
            <FaInstagram
              className="border rounded-full p-4 hover:bg-black hover:text-white duration-150 cursor-pointer"
              size={50}
            />
          </a>
          <a href="https://www.linkedin.com/in/daksh-sathwara-b54136343/" target="_blank">
            <FaLinkedinIn
              className="border rounded-full p-4 hover:bg-black hover:text-white duration-150 cursor-pointer"
              size={50}
            />
          </a>
          <a href="mailto:daxsathwara102@gmail.com">
            <CgMail
              className="border rounded-full p-4 hover:bg-black hover:text-white duration-150 cursor-pointer"
              size={50}
            />
          </a>
        </div>
      </div>
  )
}

export default Footer