import React from "react";


export default function About() {
  return (
    
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center snap-mandatory">
        
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-15 md:mb-0 items-center text-center">

          <h1 className="title-font sm:text-7xl text-5xl mb-4 font-medium text-white">
            Hey, I'm Danny
          </h1>
          
          <h1 className="lg:inline-block sm:text-4xl text-2xl mb-4 font-medium">I am a Network Engineer</h1>


          <div className="flex justify-center py-10">
            <a
              href="#work"
              className="inline-flex text-white bg-green-700 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg scroll-smooth">
              Learn more
            </a>

            <a
              href="https://github.com"
              target="_blank"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              Download my Resume
            </a>

          </div>

        </div>
        
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded-full"
            alt="hero"
            src="profile.jpg"
          />
        </div>
        
      </div>
    </section>
  );
}