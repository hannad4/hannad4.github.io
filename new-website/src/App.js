
import './App.css';

import React from "react"; 
import Navbar from "./components/Navbar";
import About from "./components/About"; 
import Stats from "./components/Stats";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer"; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown} from '@fortawesome/free-solid-svg-icons'


export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font snap-mandatory snap-y">
      {/* <Navbar />        Decided to not include this because it looks ugly imo */}
      <About />

      {/* <a href="#stats" >
        <FontAwesomeIcon icon={faAngleDown} className="container mx-auto flex py-10 md:flex-row items-center sm:text-7xl text-5xl font-medium title-font text-white fa-bounce" />  
      </a> */}

      
      <Stats />

      <Work />
      {/* <Projects />      Decomissioning project page to remove impressions of "seeking coding position" */}
      <Contact />
      <Footer />
    </main>
  ); 
}

