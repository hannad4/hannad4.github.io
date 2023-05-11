import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelopeOpenText,
  faPaperPlane,
  faWalkieTalkie,
} from "@fortawesome/free-solid-svg-icons";
import {
  faDiscord,
  faGithub,
  faInstagram,
  faLinkedin,
  faTelegram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-5 mx-auto lg:px-40">
        <div className="container px-5 mx-auto text-center lg:px-40">
          <a href="#contact">
            <FontAwesomeIcon
              icon={faWalkieTalkie}
              className="container mx-auto flex py-10 md:flex-row items-center sm:text-7xl text-5xl font-medium title-font text-white"
            />
          </a>
          <h1
            id="typewriter"
            className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white"
          >
            Connect With Me
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed mb-10 text-base">
            Find me at the following links
          </p>
          <div class="w-full grid grid-cols-3 gap-6 mb-5">
            <a href="https://linkedin.com/in/danielhanna15" target="_blank">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="container mx-auto flex py-5 md:flex-row items-center sm:text-7xl text-5xl font-medium title-font"
              />
            </a>

            <a href="https://github.com/hannad4" target="_blank">
              <FontAwesomeIcon
                icon={faGithub}
                className="container mx-auto flex py-5 md:flex-row items-center sm:text-7xl text-5xl font-medium title-font"
              />
            </a>

            <a
              href="https://tcnj.joinhandshake.com/stu/users/6257428"
              target="_blank"
            >
              <img
                src="handshake.svg"
                width={67}
                height={67}
                className="mx-auto flex py-5 md:flex-row items-center sm:text-7xl text-5xl font-medium title-font"
              ></img>
            </a>

            <a href="https://t.me/anyotherdude" target="_blank">
              <FontAwesomeIcon
                icon={faTelegram}
                className="container mx-auto flex py-5 md:flex-row items-center sm:text-7xl text-5xl font-medium title-font"
              />
            </a>

            <a href="https://wa.me/qr/QVK7NMYARFRKH1" target="_blank">
              <FontAwesomeIcon
                icon={faWhatsapp}
                className="container mx-auto flex py-5 md:flex-row items-center sm:text-7xl text-5xl font-medium title-font"
              />
            </a>

            <a
              href="mailto:daniel.hanna15@gmail.com?subject=Request to Connect via Portfolio Site"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faEnvelopeOpenText}
                className="container mx-auto flex py-5 md:flex-row items-center sm:text-7xl text-5xl font-medium title-font"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
