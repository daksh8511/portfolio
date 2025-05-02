import React from "react";

import contact from "/assets/contact.jpg";

const Contact = () => {
  return (
    <section className="p-5 bg-white mt-4 rounded-xl">
      <div className="grid grid-cols-2 gap-20">
        <div className="ms-auto">
          <h5>Daksh Sathwara</h5>
          <h2 className="text-6xl">Hire Me</h2>

          <div>
            <span>
              E/2, Ishwarnagar Society, Uttamnagar, Maninagar, Ahmedabad
            </span>
          </div>
        </div>

        {/* right side */}
        <div>
          <img className="w-3/5 rotate-6" src={contact} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
