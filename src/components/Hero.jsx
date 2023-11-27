import React from 'react';
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div id='home' className="bg-[url('./assets/images/heroPic.webp')] bg-cover bg-center z-[-1] h-[100vh]">
      <div className="overflow-x-hidden absolute z-0 w-full h-[100vh] backdrop-brightness-[.4]"></div>
      <section className="relative z-10 h-full flex items-center justify-center mx-auto pt-24 px-4 md:px-8 lg:px-0 lg:max-w-[1120px]">
          <div className="w-[80%] lg:w-full text-center">
            <div className="mb-6">
              <h1 className="text-orange text-6xl md:text-8xl font-semibold">
                Bastión <span className="text-white">Jiu Jitsu</span>
              </h1>
            </div>

            <div className='w-full'>
              <p className="text-white text-lg mb-10">
                Más de <span className='text-orange'> 10 años</span> forjando un espacio que promueve el
                crecimiento a través del Jiu Jitsu.
              </p>
              <Link
              smooth={true}
              to="servicios"
              offset={-100}
              duration={1300}>
                <button className="text-base tracking-wide font-medium text-white bg-orange px-8 py-2 lg:px-9 lg:py-[10px] rounded-lg shadow-lg">
                  Más info
                </button>
              </Link>
            </div>
          </div>
      </section>
    </div>
  )
}

export default Hero