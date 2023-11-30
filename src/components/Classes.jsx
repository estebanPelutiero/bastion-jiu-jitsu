import React from "react";
import Layout from "./Layout";
import CardClasses from "./material-tailwind/CardClasses";
import blob from "../assets/svgs/blob.svg";
import Princi from "../assets/images/princi.jpg";
import Intermedio from "../assets/images/intermedio.jpg";
import Avanzado from "../assets/images/avanzado.jpg";

const Classes = () => {
  return (
    <Layout className={"flex items-center justify-center"}>
      <div id="clases" className="relative w-full">
        <div className="z-20 relative text-gray text-6xl md:text-8xl font-medium pb-12 lg:pb-20">
          <h2>Clases</h2>
        </div>
        <section className="z-20 relative flex flex-col lg:flex-row items-center justify-between gap-12 h-fit">
          <CardClasses
            img={Princi}
            title={"Principiantes"}
            description={
              "Destinado a aquellos que quieran empezar sin experiencia previa"
            }
          />
          <CardClasses
            img={Intermedio}
            title={"Intermedio"}
            description={"Programa enfocado a solidificar los fundamentos"}
          />
          <CardClasses
            img={Avanzado}
            title={"Avanzado"}
            description={"Programa preparativo para competiciones"}
          />
        </section>
      </div>
    </Layout>
  );
};

export default Classes;
