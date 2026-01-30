import { Project } from "./../Project/project";
export function Projects() {
  return (
    <>
      <h2 className="text-center text-3xl bg-base-300 font-bold mt-2">
        Proyectos
      </h2>

      <div
        id="Projects"
        className=" pt-1 flex bg-base-300 justify-center max-[600px]:flex-col flex-wrap overflow-hidden"
      >
        <Project
          URLcontent="https://www.youtube.com/embed/VIKwJvxfAgk"
          title="Sistema de Inventario"
          desc="Sistema de Inventarios con las funciones de control de usuarios, reportes, historial, control de usuarios y respaldo. Realizado con javascript vanilla para las funcionalidades,PHP para el lado del servidor y Bootstrap para los componentes"
          codeURL="https://github.com/Josee-Espina/Inv-system"
          video={true}
        />
        <Project
          URLcontent={0}
          title="Curriculum Digital"
          desc="La pagina actual creada con react y Tailwindcss"
          codeURL="https://github.com/Josee-Espina/Curriculum"
          video={false}
        />
        <Project
          URLcontent="https://www.youtube.com/embed/BXere_uENkE"
          title="Minijuego de tocar la pantalla"
          desc="Juego sencillo creado para dispositivos moviles en React Native"
          codeURL="https://github.com/Josee-Espina/Tap-game"
          video={true}
        />
         <Project
          URLcontent="https://www.youtube.com/embed/xV__rBf5m-E"
          title="Modificar Excel con IA"
          desc="Aplicacion web creada con React y NodeJS para el lado del servidor para modificar archivos de excel con la IA de gemini"
          codeURL="https://github.com/Josee-Espina/XLSX-AI"
          video={true}
        />
      </div>
    </>
  );
}
