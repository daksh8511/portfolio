import React from "react";

import first from "/assets/project/first.jpg";
import second from "/assets/project/second.jpg";
import third from "/assets/project/third.jpg";

const Project = () => {
  return (
    <section className="p-5">
      <h2 className="text-center text-6xl my-20">Projects</h2>

      <div className="space-y-20">

      <div className="grid grid-cols-2 gap-20 items-center">
        <img src={first} alt="" />
        <div>
          <h2 className="title   text-3xl font-semibold mb-2">Title</h2>
          <p className="text-gray-500 my-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            iusto magnam adipisci fuga debitis totam voluptatum distinctio quas
            autem quaerat. Vero ullam perferendis nostrum iste!
          </p>
          <button className="border px-10 py-3 rounded-full cursor-pointer hover:bg-black hover:text-white duration-300">Preview</button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-20 items-center">
        
        <div>
          <h2 className="text-3xl font-semibold mb-2">Title</h2>
          <p className="text-gray-500 my-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            iusto magnam adipisci fuga debitis totam voluptatum distinctio quas
            autem quaerat. Vero ullam perferendis nostrum iste!
          </p>
          <button className="border px-10 py-3 rounded-full cursor-pointer hover:bg-black hover:text-white duration-300">Preview</button>
        </div>

        <img src={second} alt="" />
      </div>

      <div className="grid grid-cols-2 gap-20 items-center">
        <img src={third} alt="" />
        <div>
          <h2 className="text-3xl font-semibold mb-2">Title</h2>
          <p className="text-gray-500 my-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            iusto magnam adipisci fuga debitis totam voluptatum distinctio quas
            autem quaerat. Vero ullam perferendis nostrum iste!
          </p>
          <button className="border px-10 py-3 rounded-full cursor-pointer hover:bg-black hover:text-white duration-300">Preview</button>
        </div>
      </div>

      </div>
    </section>
  );
};

export default Project;
