import React from "react";
import { Cards } from "./Cards";
import { Content } from "../../content/pageContent";
import people from "../../assets/icons/ic_baseline-diversity-1.png"
import geometry from "../../assets/icons/ic_baseline-interests.png"
import hand from "../../assets/icons/ic_baseline-volunteer-activism.png"

const Values: React.FC = () => {
  const valores = Object.values(Content.valores);
  const img = [
    <img src={people} alt="Ícone de Diversidade" className="md:h-4 md:w-4 lg:h-6 lg:w-6" />,
    <img src={geometry} alt="Ícone de Geometria" className="md:h-4 md:w-4  lg:h-6 lg:w-6" />,
    <img src={hand} alt="Ícone de Voluntariado" className="md:h-4 md:w-4  lg:h-6 lg:w-6" />
  ]
  return (
    <section className="flex flex-col  justify-center items-center">
      <h1 className="font-bold text-blue text-xl">Aqui você encontra</h1>

      <div className="flex flex-col md:flex-row">
        {valores.map((valor, index) => (
          <Cards key={index} title={valor.title} frase={valor.frase} icons={img[index]} />
        ))}
      </div>
    </section>
  );
};

export { Values };
