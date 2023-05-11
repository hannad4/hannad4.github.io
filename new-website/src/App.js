import "./App.css";

import React from "react";
import PageScrollProgressBar from "react-page-scroll-progress-bar";
import About from "./components/About";
import Ethics from "./components/Ethics";
import Work from "./components/Work";
import ContactNew from "./components/ContactNew";
import Footer from "./components/Footer";
// import Navbar from "./components/Navbar";
// import Projects from "./components/Projects";
// import Cloud from "./components/wordCloud";
// import Contact from "./components/Contact";

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
      <Ethics />
      <Work />
      {/* <Projects />      Decomissioning project page to remove impressions of "seeking coding position" */}
      <ContactNew />
      <Footer />
    </main>
  );
}
