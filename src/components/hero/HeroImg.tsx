import React from "react";
import imagem from "../../assets/imagens/ImgCafe.jpg";

const HeroImg: React.FC = () => {
  return (
    <section className="m-[-65px] sm:ml-[-150px] md:m-4 xl:m-14 p-14 relative">
      <div className="rounded-t-full top-18 left-24 z-0 absolute bg-blue_light w-60 h-80"></div>
      <div className="relative w-20 h-20 overflow-hidden">
        <div className="absolute top-0 left- w-12 h-20 bg-blue_dark rounded-r-full"></div>
      </div>
      <img
        className="relative top-[-40px] z-10 rounded-t-full w-[240px] h-[auto] max-w-none max-h-[480px]"
        src={imagem}
        alt="Um grupo de meninas que fazem parte do turmalinas tech"
      />
      <div className="hidden sm:flex absolute top-[368px] left-80 w-20 h-20 overflow-hidden">
        <div className="absolute left-0 w-20 h-12 bg-blue_dark rounded-t-full"></div>
      </div>
    </section>
  );
};

export { HeroImg };
