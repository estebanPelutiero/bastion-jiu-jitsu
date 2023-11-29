import React from 'react'
import Layout from './Layout'
import CardClasses from './material-tailwind/CardClasses'
import blob from '../assets/svgs/blob.svg'
import Princi from '../assets/images/princi.jpg'
import Intermedio from '../assets/images/intermedio.jpg'
import Avanzado from '../assets/images/avanzado.jpg'

const Classes = () => {
  return (
    <div id='clases' className='relative'>
        <img className='z-0 absolute bottom-1/2 lg:top-48 w-64 h-64' src={blob} alt="" />
        <div className='z-10 absolute h-full w-full bg-black/5 backdrop-blur-[30rem]'></div>
        <Layout className={"py-20"}>
          <div className='z-20 relative text-gray text-6xl md:text-8xl font-medium lg:text-center pb-12 lg:pb-20'>
            <h2>
              Clases
            </h2>
          </div>
          <section className="z-20 relative flex flex-col lg:flex-row items-center justify-between gap-12 h-fit">
            <CardClasses 
              img={Princi}
              title={"Principiantes"}
              description={"Destinado a aquellos que quieran empezar sin experiencia previa"}/>
            <CardClasses 
              img={Intermedio}
              title={"Intermedio"}
              description={"Programa enfocado a solidificar los fundamentos"}/>
            <CardClasses 
              img={Avanzado}
              title={"Avanzado"}
              description={"Programa preparativo para competiciones"}/>
          </section>
        </Layout>
    </div>
  )
}

export default Classes