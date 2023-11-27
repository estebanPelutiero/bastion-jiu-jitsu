import React from 'react';
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div id='home' className="bg-[url('./assets/images/heroPic.webp')] bg-cover bg-center z-[-1] h-[100vh]">
      <div className="overflow-x-hidden absolute z-0 w-full h-[100vh] backdrop-brightness-[.6]"></div>
      <section className="relative z-10 h-full flex items-center mx-auto pt-24 px-4 md:px-8 lg:px-0 lg:max-w-[1120px]">
          <div className="md:w-[65%] lg:w-[56%]">
            <div className="mb-6">
              <h1 className="text-orange text-6xl md:text-7xl font-semibold">
                Bastión <br /> <span className="text-white">Jiu Jitsu</span>
              </h1>
            </div>

            <div>
              <p className="text-white text-lg mb-10">
                Más de <span className='text-orange'> 10 años</span> forjando un <br /> espacio que promueve el <br />
                crecimiento a través del Jiu Jitsu. <br />
              </p>
              <Link
              smooth={true}
              to="servicios"
              offset={-100}
              duration={1300}>
                <button className="text-base tracking-wide font-semibold text-white bg-orange px-8 py-2 lg:px-9 lg:py-[10px] rounded-lg shadow-lg">
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