import { Button } from '@material-tailwind/react';
import React from 'react';
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div id='home' className="bg-[url('./assets/images/heroPic.webp')] bg-cover bg-center z-[-1] h-[100vh]">
      <div className="overflow-x-hidden absolute z-0 w-full h-[100vh] backdrop-brightness-[.5]"></div>
      <section className="relative z-10 h-full flex items-center mx-auto pt-24 px-4 md:px-8 lg:px-0 lg:max-w-[1120px]">
          <div className="w-[90%] md:w-[60%] lg:w-[40%]">
            <div className="mb-6">
              <h1 className="text-orange text-6xl md:text-8xl font-semibold">
                Bastión <br /> <span className="text-white">Jiu Jitsu</span>
              </h1>
            </div>

            <div className='w-full'>
              <p className="text-white text-lg mb-10">
                Más de <span className='text-orange'> 10 años</span> forjando un espacio que promueve el
                crecimiento a través del Jiu Jitsu. <br />
                Te invitamos a participar de nuestras clases con profesores expertos.
              </p>
              <Link
              smooth={true}
              to="servicios"
              offset={-100}
              duration={1300}>
                <Button className="text-base font-poppins capitalize font-semibold tracking-wider text-white bg-orange px-8 py-2 lg:px-9 lg:py-[10px] rounded-lg shadow-lg">
                  <Link
                    smooth={true}
                    spy={true}
                    to="clases"
                    duration={1300}>
                    Más info
                  </Link>
                </Button>
              </Link>
            </div>
          </div>
      </section>
    </div>
  )
}

export default Hero