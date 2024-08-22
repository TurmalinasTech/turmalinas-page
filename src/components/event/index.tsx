import React from 'react'
import { Content } from "../../content/pageContent";
import img from "../../assets/imagens/slide.jpg"

const Event: React.FC = () => {
  return (
    <section className='flex flex-col  md:flex-row mt-4 bg-blue_light'>
  <div className='flex-1 flex flex-col justify-center items-center sm:items-end text-center sm:text-right '>
    <h1 className='text-xl p-4 font-bold'>{Content.proxioEvento.titulo}</h1>
    <h3 className='text-sm px-4 mt-2 md:w-96'>{Content.proxioEvento.frase}</h3>
    <a href="https://www.sympla.com.br/turmalinas-tech-day---2-edicao__2588247" target="_blank" rel="noopener noreferrer">
    <button className='m-4 px-4 py-2 md:w-80 bg-blue_dark transition-all hover:bg-blue text-white rounded-full '>
      {Content.proxioEvento.botao}
    </button>
    </a>
  </div>
  <div className='flex-1'>
    <img src={img} alt="Imagem do evento" className='w-full h-full object-cover'/>
  </div>
</section>

  )
}

export { Event }