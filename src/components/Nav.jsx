import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";

import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../assets/svgs/Logo.svg";

const NavList = () => {
  return (
    <ul className="z-10 mt-6 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex justify-end lg:px-4 py-3 border-b-[1px] border-gray/30 lg:border-none"
      >
        <Link
          activeClass="active"
          smooth={true}
          spy={true}
          to="home"
          duration={1300}
          offset={-80}
          className="cursor-pointer flex items-center font-poppins text-gray font-normal text-base transition-colors"
        >
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex justify-end lg:px-4 py-3 border-b-[1px] border-gray/30 lg:border-none"
      >
        <Link
          activeClass="active"
          smooth={true}
          spy={true}
          to="servicios"
          duration={1300}
          offset={-100}
          className="cursor-pointer flex items-center font-poppins text-gray font-normal text-base transition-colors"
        >
          Nosotros
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex justify-end lg:px-4 py-3 border-b-[1px] border-gray/30 lg:border-none"
      >
        <Link
          activeClass="active"
          smooth={true}
          spy={true}
          to="nosotros"
          duration={1300}
          offset={-100}
          className="cursor-pointer flex items-center font-poppins text-gray font-normal text-base transition-colors"
        >
          Clases
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex justify-end lg:px-4 py-3 border-b-[1px] border-gray/30 lg:border-none"
      >
        <Link
          activeClass="active"
          smooth={true}
          spy={true}
          to="profesores"
          duration={1300}
          offset={-100}
          className="cursor-pointer flex items-center font-poppins text-gray font-normal text-base transition-colors"
        >
          Profesores
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex justify-end lg:px-4 py-3 border-b-[1px] border-gray/30 lg:border-none"
      >
        <Link
          activeClass="active"
          smooth={true}
          spy={true}
          to="torneos"
          duration={1300}
          offset={-100}
          className="cursor-pointer flex items-center font-poppins text-gray font-normal text-base transition-colors"
        >
          Torneos
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex justify-end lg:pl-4 lg:py-3 pt-3 pb-4"
      >
        <Link
          activeClass="active"
          smooth={true}
          spy={true}
          to="contacto"
          duration={1300}
          offset={-100}
          className="cursor-pointer flex items-center font-poppins text-gray font-normal text-base transition-colors"
        >
          Contacto
        </Link>
      </Typography>
    </ul>
  );
};

const Nav = () => {
  const [openNav, setOpenNav] = useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="z-50 fixed top-0 w-full bg-black/30 backdrop-blur-lg">
      <nav className="mx-auto max-w-[1120px] shadow-none px-4 md:px-8 py-0 lg:px-0 border-none">
        <div className="flex items-center justify-between py-2">
          <Typography
            as="a"
            href="#"
            variant="h6"
            className="mr-4 cursor-pointer"
          >
            <div>
              <Link
              to="home"
              smooth={true}
              offset={-80}
              className="cursor-pointer"
              duration={1300}
              >
                <img
                  className="w-16"
                  src={Logo}
                  loading="lazy"
                  alt="Bastión Jiu Jitsu"
                />
              </Link>
            </div>
          </Typography>
          <div className="hidden lg:block">
            <NavList />
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="w-7 text-gray" strokeWidth={1.5} />
            ) : (
              <Bars3Icon className="w-7 text-gray" strokeWidth={1.5} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
        </Collapse>
      </nav>
    </div>
  );
};

export default Nav;
