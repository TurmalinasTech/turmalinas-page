import React from 'react'

interface IProjetos {
  title: string,
  frase: string,
  img: JSX.Element
}

const Project: React.FC<IProjetos> = ({ title, frase, img }) => {
  return (
    <section className='relative p-4 flex flex-col justify-center items-center'>
      <div className='bg-blue_light rounded-t-full absolute right-0 top-0 w-72 h-52 rounded-lg z-0'></div>
      <div className='relative z-10'>
        {img}
      </div>
      <h1 className='text-blue text-sm pb-4 font-bold z-20'>{title}</h1>
      <p className='text-blue_dark font-light text-xs text-blue-500 text-justify z-20'>{frase}</p>
    
    </section>
  )
}

export { Project }
