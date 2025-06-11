import React from "react";
import coffeeCode from "/assets/project/coffeeCode.png";
import horizonui from "/assets/project/horizonui.png";
import weather from "/assets/project/weather.png";
import star_movies from "/assets/project/star-movies.png";
import commingSoon from "/assets/project/comingSoon.png";

import styled from "styled-components";

import { motion } from "motion/react";

const Project = () => {
  return (
    <section id="project" className="p-5 bg-white mt-4 rounded-xl">
      <h2 className="text-center text-6xl my-20">Projects</h2>

      <div className="space-y-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          <BoxWrapper className="grid grid-cols-1 min-md:grid-cols-2 min-lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="title   text-3xl font-semibold mb-2">
                Star Movies - API Based Website
              </h2>
              <p className="text-gray-500 my-10">
                Star Movies is a movie-based web application built using React,
                Tailwind CSS, and JavaScript. It features a smooth and
                responsive UI, allowing users to easily explore movie content.
                The app includes login and sign-up functionality, with user data
                securely stored in localStorage for a seamless experience. One
                of the key highlights of Star Movies is the integrated chatbot,
                developed using the Gemini API, which provides instant
                assistance and enhances user interaction throughout the
                platform.
              </p>
              <a
                href="https://star-movies-app.vercel.app/"
                target="_blank"
                className="border px-10 py-3 rounded-full cursor-pointer hover:bg-black hover:text-white duration-300"
              >
                Preview
              </a>
            </div>
            <img src={star_movies} alt="" />
          </BoxWrapper>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          <BoxWrapper className="grid grid-cols-1 min-md:grid-cols-2 min-lg:grid-cols-2 gap-20 items-center">
            <img src={weather} alt="" />
            <div>
              <h2 className="text-3xl font-semibold mb-2">Weather App</h2>
              <p className="text-gray-500 my-10">
                Weather App is a responsive and interactive weather forecasting
                app built using React and OpenWeatherMap API. It allows users to
                search by city, view current conditions, and see temperature,
                humidity, and wind details—all wrapped in a modern and
                user-friendly interface.
              </p>
              <a
                href="https://ds-live-weather.vercel.app"
                target="_blank"
                className="border px-10 py-3 rounded-full cursor-pointer hover:bg-black hover:text-white duration-300"
              >
                Preview
              </a>
            </div>
          </BoxWrapper>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          <BoxWrapper className="grid grid-cols-1 min-md:grid-cols-2 min-lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-2">
                HorizonUI - React Multipage Application
              </h2>
              <p className="text-gray-500 my-10">
                HorizonUI Dashboard is a clean and customizable React admin
                dashboard template powered by Horizon UI. It includes pre-built
                components, responsive layouts, and dynamic theming, making it
                ideal for modern web applications.
              </p>
              <a
                href="https://horizonui.vercel.app"
                target="_blank"
                className="border px-10 py-3 rounded-full cursor-pointer hover:bg-black hover:text-white duration-300"
              >
                Preview
              </a>
            </div>

            <img src={horizonui} alt="" />
          </BoxWrapper>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          <BoxWrapper className="grid grid-cols-1 min-md:grid-cols-2 min-lg:grid-cols-2 gap-20 items-center">
            <img src={coffeeCode} alt="" />
            <div>
              <h2 className="title   text-3xl font-semibold mb-2">
                CoffeeCode - Simple Animated React Website
              </h2>
              <p className="text-gray-500 my-10">
                CoffeeCode is a sleek and responsive animated website built
                using React, Tailwind CSS, and Framer Motion. The site features
                smooth scroll effects, engaging animations, and a minimal design
                inspired by coffee culture. It demonstrates my front-end skills
                and creative approach to building interactive web experiences.
              </p>
              <a
                href="https://ds-coffee-code.vercel.app"
                target="_blank"
                className="border px-10 py-3 rounded-full cursor-pointer hover:bg-black hover:text-white duration-300"
              >
                Preview
              </a>
            </div>
          </BoxWrapper>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          <BoxWrapper className="grid grid-cols-1 min-md:grid-cols-2 min-lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="title   text-3xl font-semibold mb-2">
                MiniMog - MERN Ecommerce Website
              </h2>
              <p className="text-gray-500 my-10">
                Minimog is a modern and responsive eCommerce platform built
                using the MERN stack (MongoDB, Express, React, and Node.js),
                designed to offer a smooth and high-performance shopping
                experience. It specializes in a wide range of watches for both
                men and women, featuring categories such as luxury, sport, and
                regular timepieces. Whether you're looking for an elegant
                accessory, a durable sport companion, or a stylish everyday
                watch, Minimog has it all. With a sleek UI, fast loading times,
                and secure backend integration, the platform combines style and
                technology to deliver a seamless user experience. Minimog isn't
                just about selling watches—it's about helping users find the
                perfect timepiece that matches their lifestyle.
              </p>
              <a
                href=""
                target="_blank"
                className="border px-10 py-3 rounded-full cursor-pointer hover:bg-black hover:text-white duration-300"
              >
                Preview
              </a>
            </div>
            <img src={commingSoon} alt="" />
          </BoxWrapper>
        </motion.div>
      </div>
    </section>
  );
};

export default Project;

const BoxWrapper = styled.div`
  &:hover img {
    transform: scale(1.05);
    filter: brightness(0.8);
    transition: all 0.3s ease-in-out;
  }
`;
