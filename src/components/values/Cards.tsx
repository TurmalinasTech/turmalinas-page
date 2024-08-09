import React from 'react'

interface Values{
    title: string,
    frase: string,
    icons: JSX.Element
}
const Cards: React.FC<Values> = ({title, frase, icons}) => {
  return (
    <section className='drop-shadow-md rounded-xl bg-white w-80 md:w-60 lg:w-72 xl:w-80 m-4 p-4'>
        <div>
            <div className='p-4 flex items-center justify-around'>
                <div className='p-4 rounded-full bg-blue_dark'>{icons}</div>
                <h1 className='text-blue font-semibold text-lg md:text-xs lg:text-sm '>{title}</h1>
            </div>
            <p className='p-4 text-justify text-blue_dark text-xs'>{frase}</p>
        </div>
    </section>
  )
}

export { Cards }
