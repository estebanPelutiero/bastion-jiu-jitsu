import React from "react";
import Layout from "./Layout";
import Header from "./header/Header";
import CardClasses from "./material-tailwind/CardClasses";
import Principiante from "../assets/images/principiante.jpg";
import Intermedio from "../assets/images/intermedio.jpg";
import Avanzado from "../assets/images/avanzado.jpg";

const Classes = () => {
  return (
    <Layout id={'clases'} className={"flex flex-col items-start justify-center"}>
        <Header title={'Clases'}/>
        <section className="z-20 relative flex flex-col lg:flex-row items-center justify-between gap-12 h-fit">
          <CardClasses
            img={Principiante}
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
    </Layout>
  );
};

export default Classes;
