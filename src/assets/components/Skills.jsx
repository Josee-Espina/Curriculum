import { Skill } from "../Skill/Skill";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPhp,
  FaDatabase,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

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
          icon={<FaPhp size={64} />}
          color="purple"
          tittle={"PHP"}
          desc={
            "Lenguaje de scripting del lado del servidor ampliamente utilizado para desarrollo web. Ideal para crear aplicaciones web dinámicas y conectarse con bases de datos."
          }
        />
        <Skill
          icon={<FaDatabase size={64} />}
          color="indigo"
          tittle={"SQL Databases"}
          desc={
            "Sistemas de gestión de bases de datos relacionales para almacenar y organizar datos de manera estructurada. Incluye MySQL, PostgreSQL y otros sistemas SQL."
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
      </div>
      {/*soft skills*/}
      <div className=" flex flex-col">
        <h4 className="text-center font-bold">Habilidades blandas</h4>
        <p className="w-1/2 text-center m-auto text-pretty">
          Me considero a mi mismo como una persona responsable y proactiva con
          la capacidad de resolver problemas y proponer soluciones,interactuar y
          trabajar con las personas de mi interno sin ningun problema ,adaptarme
          rapidamente y aprender segun las circunstancias
        </p>
      </div>
    </>
  );
}
