import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {

  const [myType, setmyType] = React.useState('Web');
  const [myColor,setmyColor] = React.useState()

  
  const changeType = (e,z) =>{
    // Remove other red background
    document.querySelectorAll('.selector').forEach(element => {
      element.style.backgroundColor = "initial";
      element.style.color = "inherit";
    });
    // Set clicked to bkacground
    z.target.style.color = "#101827";
    z.target.style.backgroundColor = "#c7c7c7";
    setmyType(e);
  }
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg">
        <div className="flex flex-col w-full mb-14">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Mes applications
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Voici une liste d'applications web , de jeux vidéo et de logiciels
            que j'ai pu développé lors de mes missions, formations ou bien par
            passe temps.
          </p>
        </div>
        <div className="mb-14">
          {/* On click set variable type to web */}
          <button onClick={changeType.bind(this,'Web')} className="selector rounded p-4 text-black" style={{backgroundColor: '#c7c7c7'}}>Web</button>
          <button onClick={changeType.bind(this,'Game')} className="selector rounded p-4">Game</button>
          <button onClick={changeType.bind(this,'App')} className="selector rounded p-4">App</button>
        </div>
        <div className="flex flex-wrap -m-4 scale-90">
          {projects.filter(project => project.type == myType).map((project) => (
            // Setup Key
            <h1 key={project.image} className="lg:w-1/3  w-100 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center brightness-50 "
                  src={project.image}
                />
                <div className="absolute w-80 align-middle top-1/2 text-white font-bold text-lg scale-150">
                  {project.name}
                </div>
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                  <div className="mt-4">
                    {/* If refcode is disabled set a to disabled */}
                    {project.refcode == "private" ? (
                      <a name="" id="" className="btn btn-error mx-2 font-bold text-base disabled hover:scale-105">Privée</a>
                    ) : (
                      <a name="" id="" className="btn btn-success  mx-2 font-bold text-base hover:scale-105" href={project.refcode} role="button" target="_blank">Code</a>
                    )}
                    <a name="" id="" className="btn btn-warning mx-2 font-bold text-base hover:scale-105" href={project.reflive} role="button" target="_blank">Live</a>
                  </div>
                </div>
              </div>
            </h1>
          ))}
        </div>
      </div>
      
    </section>
  );
}

