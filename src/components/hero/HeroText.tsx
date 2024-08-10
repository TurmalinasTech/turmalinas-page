import React from "react";

interface Content{
  title: string
  frase: string
  botao: string
  voluntaria: string
}

const HeroText: React.FC<Content> = ({title, frase, botao, voluntaria}) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="flex pb-6 my-10 md:my-0 ">
      <div className="gap-6 xl:m-14 sm:text-center md:text-start sm:items-center md:items-start flex justify-center flex-col">
        <h1 className="text-blue font-extrabold text-4xl">
          {title}
        </h1>
        <h3 className="text-blue_dark">{frase}</h3>
        <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-4">
        <button 
        onClick={() => scrollToSection("contato")}
        className="bg-blue_dark w-full sm:w-44 hover:bg-blue transition-all text-white font-semibold text-xs rounded-3xl py-2">
          {botao}
        </button>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeiq3EYUmOHEO5kIPLKei98_OnepnIy8gJwF4hUyLHoC3taZg/viewform?usp=sf_link" target="_blanck">
        <button className="bg-blue_ w-full sm:w-44 hover:bg-blue transition-all text-white font-semibold text-xs rounded-3xl py-2">
         
          {voluntaria}
        </button>
        </a>
        </div>
      </div>
    </section>
  );
};

export { HeroText };
