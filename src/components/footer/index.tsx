import React from "react";
import instagram from "../../assets/icons/streamline_instagram-solid.png";
import linkedin from "../../assets/icons/mdi_linkedin.png";
import { FaLinkedin, FaSquareInstagram } from "react-icons/fa6";


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

      <div className="flex text-bege">
        <a href="https://www.instagram.com/turmalinastech" target="_black">
        <FaSquareInstagram  className="text-4xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/turmalinastechuniesp/"
          target="_blanck"
        >
          <FaLinkedin className="text-4xl" />
        </a>
      </div>
    </section>
  );
};

export { Footer };
