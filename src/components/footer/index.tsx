import React from "react";
import instagram from "../../assets/icons/streamline_instagram-solid.png";
import linkedin from "../../assets/icons/mdi_linkedin.png";

const Footer = () => {
  return (
    <section className="p-4 h-32 bg-blue flex flex-col sm:flex-row justify-around items-center">
      <h1 className="text-bege font-bold">Turmalinas Tech</h1>

      <div className="text-bege flex sm:flex-col gap-4 sm:gap-0 justify-center ">
        <h1 className="text-sm font-bold" id="contato">
          Contato
        </h1>
        <p className="text-xs">turmalinastech@gmail.com</p>
      </div>

      <div className="flex">
        <a href="https://www.instagram.com/turmalinastech" target="_black">
          <img
            className="w-10 h-10"
            src={instagram}
            alt="Link para o instagram"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/turmalinastechuniesp/"
          target="_blanck"
        >
          <img
            className="w-10 h-10"
            src={linkedin}
            alt="Link para o instagram"
          />
        </a>
      </div>
    </section>
  );
};

export { Footer };
