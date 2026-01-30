import { Skill } from "../Skill/Skill";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPhp,
  FaDatabase,
  FaNodeJs,
  FaPython
} from "react-icons/fa";

import { SiTailwindcss, SiLaravel,SiN8N,SiNextdotjs,SiMongodb } from "react-icons/si";

import { DiAndroid } from "react-icons/di";
export function Skills() {
  return (
    <>
      {" "}
      <h3 id="Skills" className="text-center font-bold text-2xl mt-3">
        Habilidades Duras
      </h3>
      <div className="flex flex-wrap max-[600px]:flex-col justify-center items-center gap-7 mt-4">
        <Skill
          icon={<FaHtml5 size={64} />}
          color="orange"
          tittle={"HTML5"}
          desc={
            "Lenguaje de marcado fundamental para estructurar páginas web. Define el esqueleto y contenido semántico de las aplicaciones web modernas."
          }
        />
        <Skill
          icon={<FaCss3Alt size={64} />}
          color="blue"
          tittle={"CSS3"}
          desc={
            "Lenguaje de estilos para diseñar y dar presentación visual a documentos HTML. Permite crear interfaces responsive y animaciones modernas."
          }
        />
        <Skill
          icon={<FaJs size={64} />}
          color="yellow"
          tittle={"JavaScript"}
          desc={
            "Lenguaje de programación que permite agregar interactividad dinámica a sitios web. Esencial para el desarrollo frontend y backend."
          }
        />
        <Skill
          icon={<FaReact size={64} />}
          color="cyan"
          tittle={"React"}
          desc={
            "Biblioteca de JavaScript para construir interfaces de usuario interactivas y eficientes, basada en componentes reutilizables y un sistema de renderizado reactivo."
          }
        />
        <Skill
          icon={<FaDatabase size={64} />}
          color="indigo"
          tittle={"SQL Databases"}
          desc={
            "Sistemas de gestión de bases de datos relacionales para almacenar y organizar datos de manera estructurada."
          }
        />
        <Skill
          icon={<FaPhp size={64} />}
          color="purple"
          tittle={"PHP"}
          desc={
            "Lenguaje de scripting del lado del servidor ampliamente utilizado para desarrollo web. Ideal para crear aplicaciones web dinámicas y conectarse con bases de datos."
          }
        />

        <Skill
          icon={<DiAndroid size={64} />}
          color="emerald"
          tittle={"React Native"}
          desc={
            "Framework para desarrollar aplicaciones móviles nativas usando React. Permite crear apps para iOS y Android con un solo código base JavaScript."
          }
        />
        <Skill
          icon={<SiTailwindcss size={64} />}
          color="sky"
          tittle={"Tailwind CSS"}
          desc={
            "Framework de CSS utilitario para crear diseños personalizados rápidamente. Con clases de utilidad que permiten construir interfaces modernas y responsive sin escribir CSS personalizado."
          }
        />
         <Skill
            icon={<FaNodeJs size={64} />}
            color="green"
            tittle={"Node.js"}
            desc={
              "Entorno de ejecución de JavaScript del lado del servidor. Permite construir aplicaciones backend escalables y de alto rendimiento usando el mismo lenguaje que el frontend."
            }
          />
           <Skill
          icon={<SiN8N size={64} />}
          color="red"
          tittle={"n8n"}
          desc={
            "Plataforma de automatización de flujos de trabajo de código abierto. Permite conectar diferentes aplicaciones y servicios para crear automatizaciones complejas sin código o con bajo código."
          }
        />
      </div>
      {/*soft skills*/}
      <div className=" flex flex-col mt-4 bg-base-300 p-2">
        <h4 className="text-center font-bold text-2xl">Habilidades blandas</h4>
        <p className="w-11/12 text-center m-auto text-pretty mb-2">
          Me considero a mi mismo como una persona responsable y proactiva con
          la capacidad de resolver problemas y proponer soluciones,interactuar y
          trabajar con las personas de mi entorno sin ningun problema ,adaptarme
          rapidamente y aprender segun las circunstancias
        </p>
      </div>
      <div className="flex flex-wrap flex-col  items-center gap-1 mt-2">
        <h5 className="text-xl font-bold">En la Actualidad</h5>
        <p className="w-11/12 text-center m-auto text-pretty mb-2">
          En el presente continuo expandiendo mis habilidades como programador y
          en el futuro cercano me gustaria aprender tecnologias como
        </p>
        <div className="flex flex-wrap justify-center gap-5 max-[600px]:flex-col items-center pb-3">
          <Skill
            icon={<SiLaravel size={64} />}
            color="red"
            tittle={"Laravel"}
            desc={
              "Framework de PHP elegante y expresivo para el desarrollo web. Ofrece una sintaxis rica y herramientas poderosas para crear aplicaciones robustas y mantenibles."
            }
          />
           <Skill
          icon={<SiNextdotjs size={64} />}
          color="black"
          tittle={"Next.js"}
          desc={
            "Framework de React para producción que habilita características como renderizado del lado del servidor (SSR), generación de sitios estáticos (SSG) y enrutamiento del sistema de archivos."
          }
        />
        <Skill
          icon={<FaPython size={64} />}
          color="teal"
          tittle={"Python"}
          desc={
            "Lenguaje de programación versátil y de alto nivel utilizado en desarrollo web, ciencia de datos, inteligencia artificial y automatización. Conocido por su sintaxis clara y legible."
          }
        />
         <Skill
          icon={<SiMongodb size={64} />}
          color="green"
          tittle={"MongoDB"}
          desc={
            "Base de datos NoSQL orientada a documentos. Utiliza JSON-like documents con esquemas dinámicos, ideal para aplicaciones escalables y de alto rendimiento con datos no estructurados."
          }
        />

         
        </div>
      </div>
    </>
  );
}
