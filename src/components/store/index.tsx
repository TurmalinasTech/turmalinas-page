import React from "react";
import { Content } from "../../content/pageContent";
import img from "../../assets/imagens/sacola.webp";

const Store: React.FC = () => {
    return (
        <section className="flex flex-col  sm:flex-row bg-blue_light">
          <div className="flex-1 order-2 sm:order-1">
            <img
              src={img}
              alt="Imagem do evento"
              className="w-full h-full object-cover"
            />
          </div>
          <div className=" flex-1 flex flex-col justify-center items-center sm:items-start text-center sm:text-left order-1 sm:order-2">
            <h1 className="p-4 text-xl font-bold">{Content.nossaLoja.titulo}</h1>
            <h3 className="px-4 text-sm mt-2">{Content.nossaLoja.frase}</h3>
            <a href="https://turmalinastech.offstore.me/shop?tagId=606829" target="_blank" >
            <button className="m-4 px-4 py-2 md:w-80 transition-all hover:bg-blue bg-blue_dark text-white rounded-full">
              {Content.nossaLoja.botao}
            </button>
            </a>
          </div>
        </section>
      );
      
};

export { Store };
