import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBookSkull} from '@fortawesome/free-solid-svg-icons'
import React from "react";
import { projects } from "../listOfProjects";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-5 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-10">
        <a href="#projects" >
          <FontAwesomeIcon icon={faBookSkull} className="container mx-auto flex py-10 md:flex-row items-center sm:text-7xl text-5xl font-medium title-font text-white"/>
        </a>
          <h1 id="typewriter" className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Some Side Hustles 😉
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Done for either educational or personal growth (and fun).
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              target="_blank"
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="flex justify-center py-10">
          
          <a
            href="https://github.com/hannad4?tab=repositories"
            target="_blank"
            className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg scroll-smooth">              
            &nbsp;View more on GitHub
          </a>
        </div>  
        {/* <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            View more on GitHub
        </button> */}
      </div>
    </section>
  );
}