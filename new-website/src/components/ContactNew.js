import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  SiLinkedin,
  SiHandshake,
  SiTelegram,
  SiWhatsapp,
} from "react-icons/si";

export default function ContactNew() {
  function showErrorPopup() {
    // Create the popup element
    const popup = document.createElement("div");
    popup.classList.add(
      "fixed",
      "top-5",
      "right-5",
      "p-4",
      "bg-red-200",
      "text-red-900",
      "rounded",
      "shadow-md",
      "animate-slide-in"
    );

    const errorMessage = document.createElement("span");
    errorMessage.innerHTML =
      "<strong>Uh-oh...something went wrong.</strong> Give it another try";
    popup.appendChild(errorMessage);

    // Append the popup to the document body
    document.body.appendChild(popup);

    // Automatically remove the popup after 3 seconds
    setTimeout(() => {
      popup.classList.add("animate-slide-out");
      setTimeout(() => {
        popup.remove();
      }, 500);
    }, 6000);
  }

  function showGoodConfirmationPopup() {
    // Create the popup element
    const popup = document.createElement("div");
    popup.classList.add(
      "fixed",
      "top-5",
      "right-5",
      "p-4",
      "bg-green-200",
      "text-green-900",
      "rounded",
      "shadow-md",
      "animate-slide-in"
    );

    const successMessage = document.createElement("span");
    successMessage.innerHTML =
      "<strong>Email successfully sent!</strong> I'll be in touch soon";
    popup.appendChild(successMessage);

    // Append the popup to the document body
    document.body.appendChild(popup);

    setTimeout(() => {
      popup.classList.add("animate-slide-out");
      setTimeout(() => {
        popup.remove();
      }, 500);
    }, 6000);
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7uh2h2d",
        "template_75gr00i",
        form.current,
        "BxEQeqvUUw1nO4ukQ"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          showGoodConfirmationPopup();
        },
        (error) => {
          console.log(error.text);
          showErrorPopup();
        }
      );
  };

  return (
    <section id="contact" className="relative">
      <div className="relative flex items-top justify-center bg-white dark:bg-gray-900 sm:items-center p-10 w-full">
        <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
          <div className="mt-8 overflow-hidden">
            <div className="grid grid-cols-1 p-5 md:grid-cols-2 lg:grid-cols-2 bg-gray-800 rounded-xl">
              <div className="p-4">
                <h1 className="text-4xl sm:text-4xl dark:text-white font-bold tracking-tight">
                  Want to find out more?
                </h1>
                <p className="font-normal text-md sm:text-2xl text-gray-400 mt-8 mb-12 mr-8">
                  Tap the icons below, or better yet, fill in the form
                </p>

                <a href="tel:609-495-4291">
                  <div className="flex items-center mb-8 text-gray-400">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      className="w-8 h-8 text-gray-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <div className="ml-3 text-sm md:text-md lg:text-md tracking-narrow font-semibold w-40">
                      609-495-4291
                    </div>
                  </div>
                </a>

                <a href="mailto:hello@dannyhanna.com">
                  <div className="flex items-center text-gray-400 mb-12">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      className="w-8 h-8 text-gray-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <div className="ml-3 text-sm lg:text-md md:text-md tracking-narrow font-semibold w-40">
                      hello@dannyhanna.com
                    </div>
                  </div>
                </a>
                <dl className="flex grid w-full md:p-5 lg:p-5 grid-cols-4 lg:grid-cols-4 sm:place-items-center md:place-items-start lg:place-items-start">
                  <div>
                    <a
                      href="https://www.linkedin.com/in/danielhanna15"
                      target="_blank"
                    >
                      <SiLinkedin size={40} color="#0077B5"></SiLinkedin>
                    </a>
                  </div>

                  <div>
                    <a
                      href="https://app.joinhandshake.com/stu/users/6257428"
                      target="_blank"
                    >
                      <SiHandshake size={40} color="#D0F94A"></SiHandshake>
                    </a>
                  </div>

                  <div>
                    <a href="https://t.me/anyotherdude" target="_blank">
                      <SiTelegram size={40} color="#28A7E8"></SiTelegram>
                    </a>
                  </div>

                  <div>
                    <a href="https://wa.me/qr/QVK7NMYARFRKH1" target="_blank">
                      <SiWhatsapp size={40} color="#25D366"></SiWhatsapp>
                    </a>
                  </div>
                </dl>
              </div>

              <div className="p-5 w-full items-center sm:rounded-lg">
                {/* <form method="POST" action="https://herotofu.com/start"> */}
                <form ref={form} onSubmit={sendEmail}>
                  <label className="block mb-6">
                    <span className="text-gray-300">Your Name</span>
                    <input
                      name="contacter_name"
                      type="text"
                      className="block w-full mt-1 border-gray-600 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-transparent placeholder-gray-600 text-gray-300"
                      placeholder="Jordan Smith"
                      required
                    />
                  </label>
                  <label className="block mb-6">
                    <span className="text-gray-300">Email Address</span>
                    <input
                      name="contacter_email"
                      type="email"
                      className="block w-full mt-1 border-gray-600 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-transparent placeholder-gray-600 text-gray-300"
                      placeholder="jordan.smith@example.com"
                      required
                    />
                  </label>
                  <label className="block mb-6">
                    <span className="text-gray-300">Subject</span>
                    <input
                      name="contacter_subject"
                      type="text"
                      className="block w-full mt-1 border-gray-600 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-transparent placeholder-gray-600 text-gray-300"
                      placeholder="I want to chat!"
                      required
                    />
                  </label>
                  <label className="block mb-6">
                    <span className="text-gray-300">Message</span>
                    <textarea
                      name="contacter_message"
                      className="block w-full mt-1 border-gray-600 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-transparent placeholder-gray-600 text-gray-300"
                      rows="3"
                      placeholder="Drop your thoughts here..."
                      required
                    ></textarea>
                  </label>
                  <div className="mb-6">
                    <button
                      type="submit"
                      value="Send"
                      className="h-10 px-5 text-white bg-fuchsia-500 rounded-lg transition-colors duration-150 focus:shadow-outline hover:bg-fuchsia-800"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
