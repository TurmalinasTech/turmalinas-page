import React from 'react'
import { Content } from '../../content/pageContent'

const AboutUs: React.FC = () => {

  return (
    <section id='sobreNos' className='flex flex-col items-center justify-center my-6 p-6 bg-blue_light'>
        <div className='py-4 w-4/5 lg:w-7/12 flex flex-col items-center justify-center'>
        <h1 className='font-bold p-4 text-blue_dark lg:text-2xl'>Sobre nós</h1>
        <p className='text-center p-4 font-light lg:text-2xl'>{Content.sobreNos}</p>
        </div>
    </section>
  )
}

export { AboutUs }
