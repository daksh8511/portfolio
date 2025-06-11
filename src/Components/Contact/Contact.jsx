import React from "react";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import contact from "/assets/contact.jpg";

import { motion } from "motion/react";

const Contact = () => {
  return (
    <section id="contact" className="p-5 bg-white mt-8 rounded-xl">
      <div className="grid grid-cols-1 min-md:grid-cols-2 gap-20">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="ms-auto space-y-2"
        >
          <h5>Daksh Sathwara</h5>
          <h2 className="text-3xl min-lg:text-6xl">Ready to Join</h2>

          <p className="text-sm text-gray-600 mb-10">
            I’m currently open to job opportunities, freelance projects, or
            professional collaboration. Let’s connect!
          </p>

          <div className="flex flex-col min-md:flex-row gap-4">
            <div className="border px-4 py-2">
              <a
                href="https://www.linkedin.com/in/daksh-sathwara-b54136343/"
                target="_blank"
                className="flex items-center gap-2"
              >
                <FaLinkedinIn size={30} />
                <button className="cursor-pointer">Daksh Sathwara</button>
              </a>
            </div>
            <div className="border px-4 py-2">
              <a
                href="https://wa.me/+918511893083"
                target="_blank"
                className="flex items-center gap-2"
              >
                <FaWhatsapp size={30} />
                <button className="cursor-pointer">+91 8511893083</button>
              </a>
            </div>
          </div>

          <div>
            <span className="flex justify-center text-sm font-bold">OR</span>
          </div>

          <form
            action="https://formspree.io/f/mqaqjkgn"
            className=" space-y-2"
            method="POST"
          >
            <input
              type="email"
              name="email"
              placeholder="Email"
              autoComplete="off"
              required
              className="border outline-0 p-2 block w-full"
            />
            <input
              type="text"
              name="name"
              placeholder="Name"
              autoComplete="off"
              required
              className="border outline-0 p-2 block w-full"
            />
            <textarea
              placeholder="Message"
              name="message"
              required
              className="border outline-0 p-2 w-full"
              rows={5}
            ></textarea>
            <button className="border px-6 py-2 rounded cursor-pointer">
              Submit
            </button>
          </form>
        </motion.div>

        {/* right side */}
        <motion.div
          className="hidden min-md:block m-auto"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          <img className="w-3/5 rotate-6" src={contact} alt="" />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
