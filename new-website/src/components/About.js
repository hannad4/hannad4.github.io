import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

// link to create download for google drive resume: https://pbkvoeoo.paperform.co/   //

export default function About() {
  return (
    <section id="about">
      <div className="container sm:mx-auto md:mx-auto lg:mx-auto flex px-10 py-10 md:py-20 md:flex-row flex-col items-center snap-mandatory">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-15 md:mb-0 items-center text-center">
          <h1 className="title-font w-full flex sm:text-7xl text-5xl mb-4 font-medium text-white">
            Hey, I'm Danny
          </h1>

          <TypeAnimation
            speed={25}
            deletionSpeed={35}
            repeat={Infinity}
            className="lg:inline-block inline-block sm:text-4xl text-2xl mb-4 font-medium"
            sequence={[
              // Same String at the start will only be typed once, initially
              "I solve complex problems",
              3000,
              "I conceptualize innovative solutions",
              3000,
              "I plan strategically for success",
              3000,
              "I think critically & creatively",
              3000,
              "I collaborate to acheive results",
              3000,
              "I am committed to excellence",
              15000,
            ]}
          />

          <div className="flex justify-center py-10">
            <a
              href="#ethics"
              className="inline-flex text-white bg-green-700 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg scroll-smooth"
            >
              Learn more
            </a>

            <a
              href="https://drive.google.com/uc?export=download&id=1HSFN9c_fe18j6O5Nt9TMOay3iVQ_4u6Q"
              target="_blank"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              Download my Resume
            </a>
          </div>
        </div>

        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded-full lg:max-w-lg lg:w-full"
            alt="hero"
            src="profile.webp"
          />
        </div>
      </div>

      <a href="#ethics">
        <FontAwesomeIcon
          icon={faAngleDown}
          className="container mx-auto flex py-10 md:flex-row items-center sm:text-7xl text-5xl font-medium title-font text-white fa-bounce sm:w-full md:w-full"
        />
      </a>
    </section>
  );
}
