import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpenText, faPaperPlane, faWalkieTalkie } from '@fortawesome/free-solid-svg-icons';
import { faDiscord, faGithub, faInstagram, faLinkedin, faTelegram, faWhatsapp, } from "@fortawesome/free-brands-svg-icons";


export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");


  // Functions for embedding static form into netlify and handling - debating whether to deploy via netlify or no
  // function encode(data) {
  //   return Object.keys(data)
  //     .map(
  //       (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
  //     )
  //     .join("&");
  // }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   fetch("/", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //     body: encode({ "form-name": "contact", name, email, message }),
  //   })
  //     .then(() => alert("Message sent!"))
  //     .catch((error) => alert(error));
  // }



  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-5 mx-auto lg:px-40">
        <div className="container px-5 mx-auto text-center lg:px-40">
          <a href="#contact" >
            <FontAwesomeIcon icon={faWalkieTalkie} className="container mx-auto flex py-10 md:flex-row items-center sm:text-7xl text-5xl font-medium title-font text-white" />
          </a>
          <h1 id="typewriter" className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Connect With Me
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed mb-10 text-base">
            Find me at the following links
          </p>
          <div class="w-full grid grid-cols-3 gap-6 mb-5">

            <a
              href="https://linkedin.com/in/danielhanna15"
              target="_blank">
              <FontAwesomeIcon icon={faLinkedin} className="container mx-auto flex py-5 md:flex-row items-center sm:text-7xl text-5xl font-medium title-font" />
            </a>

            <a
              href="https://github.com/hannad4"
              target="_blank">
              <FontAwesomeIcon icon={faGithub} className="container mx-auto flex py-5 md:flex-row items-center sm:text-7xl text-5xl font-medium title-font" />
            </a>

            <a
              href="https://tcnj.joinhandshake.com/stu/users/6257428"
              target="_blank">
                <img src="handshake.svg" width={67} height={67} className="mx-auto flex py-5 md:flex-row items-center sm:text-7xl text-5xl font-medium title-font"></img>
            </a>

            {/* <a
              href="https://www.instagram.com/anyotherdude/"
              target="_blank">
              <FontAwesomeIcon icon={faInstagram} className="container mx-auto flex py-5 md:flex-row items-center sm:text-7xl text-5xl font-medium title-font" />
            </a> */}

            <a
              href="https://t.me/anyotherdude"
              target="_blank">
              <FontAwesomeIcon icon={faTelegram} className="container mx-auto flex py-5 md:flex-row items-center sm:text-7xl text-5xl font-medium title-font" />
            </a>

            <a
              href="https://wa.me/qr/QVK7NMYARFRKH1"
              target="_blank">
              <FontAwesomeIcon icon={faWhatsapp} className="container mx-auto flex py-5 md:flex-row items-center sm:text-7xl text-5xl font-medium title-font" />
            </a>

            <a
              href="mailto:daniel.hanna15@gmail.com?subject=Request to Connect via Portfolio Site"
              target="_blank">
              <FontAwesomeIcon icon={faEnvelopeOpenText} className="container mx-auto flex py-5 md:flex-row items-center sm:text-7xl text-5xl font-medium title-font" />
            </a>


          </div>
        </div>


        {/* Manual contact form - debating whether to include or not */}
        {/* <form
          netlify
          name="contact"
          onSubmit={handleSubmit}>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-y leading-6 transition-colors duration-200 ease-in-out"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Submit
          </button>
        </form> */}
      </div>
    </section>
  );
}