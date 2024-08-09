import React from "react";
import { Project } from "./Project";
import { Content } from "../../content/pageContent";
import turmalinas from "../../assets/imagens/MeninasTurmalinas.jpg";
import turmalinasTechDay from "../../assets/imagens/TurmalinasTechDay.jpg";

const Projects: React.FC = () => {
  const allProjects = Object.values(Content.projetos);
  const imagens = [
    <img
      src={turmalinasTechDay}
      alt="Ícone de Diversidade"
      className="mb-4 relative rounded-t-full object-cover w-full max-h-52"
    />,
    <img
      src={turmalinas}
      alt="Ícone de Diversidade"
      className="mb-4 relative rounded-t-full object-cover w-full max-h-52 "
    />,
  ];

  return (
    <section id="projetos" className="flex flex-col justify-center items-center">
      <h1 className="text-blue_ md:text-xl font-bold py-8 ">Nossos projetos</h1>

      <div className="relative flex flex-col md:flex-row w-4/5 lg:w-7/12">
        <div className="absolute w-20 h-20 overflow-hidden">
          <div className="absolute top-0 left- w-12 h-20 bg-blue_dark rounded-r-full"></div>
        </div>
        {allProjects.map((value, index) => (
          <Project
            key={index}
            img={imagens[index]}
            title={value.titulo}
            frase={value.frase}
          />
        ))}
        <div className="absolute top-[600px] sm:top-[600px] md:top-52 right-[-50px] w-20 h-20 overflow-hidden">
          <div className="absolute w-20 h-12 bg-blue_dark rounded-t-full"></div>
        </div>
      </div>
    </section>
  );
};

export { Projects };
