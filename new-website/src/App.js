import "./App.css";

import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Stats from "./components/Stats";
import Work from "./components/Work";
import Projects from "./components/Projects";
// import Contact from "./components/Contact";
import ContactNew from "./components/ContactNew";
import Footer from "./components/Footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import PageScrollProgressBar from "react-page-scroll-progress-bar";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font snap-mandatory snap-y snap-z">
      <PageScrollProgressBar
        color="#22C55E"
        bgColor="transparent"
        height="6px"
        className="z-50"
      />

      {/* <Navbar />        Decided to not include this because it looks ugly imo */}
      <About />

      <Stats />

      <Work />
      {/* <Projects />      Decomissioning project page to remove impressions of "seeking coding position" */}
      <ContactNew />
      <Footer />
    </main>
  );
}
