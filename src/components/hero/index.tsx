import React from "react";
import { Content } from "../../content/pageContent";
import { HeroImg } from "./HeroImg";
import { HeroText } from "./HeroText";

const Hero: React.FC = () => {
  return (
    <section id="hero" className="flex justify-center items-center">
      <div className="flex flex-col items-start sm:items-center md:flex-row w-4/5 lg:w-7/12 ">
      <HeroText
        title={Content.slogan.titulo}
        frase={Content.slogan.frase}
        botao={Content.slogan.botao}
        voluntaria={Content.slogan.voluntarias}
      />
       <HeroImg/>
       </div>
    </section>
  );
};

export { Hero };
