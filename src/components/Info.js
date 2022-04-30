import React from "react";
import {
  BadgeCheckIcon,
  ChipIcon,
  InformationCircleIcon,
} from "@heroicons/react/solid";

export default function Info() {
  return (
    <section id="info">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <InformationCircleIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Mes Infos
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Vous retrouverez ici mon CV et mon portfeuille de compétences.
          </p>
        </div>
        <div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 justify-evenly">
          <a href="/Compétence.pptx">
            <button type="button" class="btn btn-success hover:scale-105">
              Mon portefeuille de compétences
            </button>
        </a>
            <a href="/JimmyCv.pptx">
              <button type="button" class="btn btn-warning hover:scale-105">
                Mon CV
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
