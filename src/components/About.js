import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Import Linkedin icon
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
// Import Github icon
import { faGithub } from "@fortawesome/free-brands-svg-icons";
// Import Twitter icon
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Bonjour, Je suis Jimmy.
            <br className="hidden lg:inline-block" />Développeur web .
          </h1>
          <p className="mb-8 leading-relaxed">
            Je me présente je m'appelle jimmy doussain je suis Développeur web. J'aime créer
            de nouvelles applications web et je suis passionné par le développement web.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Me contacter
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              Voir mes projets
            </a>
          </div>
          <div className="mt-2 ">
            <a href="https://www.linkedin.com/in/jimmy-doussain-a19b66201/" target="_blank" className="mr-4">
              <FontAwesomeIcon icon={faLinkedin} size="2x" className="mt-2 text-blue-500 hover:scale-125"/>
            </a>
            <a href="https://github.com/Doxteur" target="_blank" className="mr-4">
              <FontAwesomeIcon icon={faGithub} size="2x" className="mt-2 text-white hover:scale-125"/>
            </a>
            <a href="https://www.linkedin.com/in/jimmy-doussain-a19b66201/" target="_blank" className="mr-4">
              <FontAwesomeIcon icon={faTwitter} size="2x" className="mt-2 text-blue-400 hover:scale-125"/>
            </a>


          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.png"
          />
        </div>
      </div>
    </section>
  );
}