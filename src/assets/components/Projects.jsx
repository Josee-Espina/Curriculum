import { Project } from "./../Project/project";
export function Projects() {
  return (
    <div className="flex bg-base-300 justify-center">
      <Project
        URLcontent="https://www.youtube.com/embed/VIKwJvxfAgk"
        title="Sistema de Inventario"
        desc="Sistema de Inventarios con las funciones de control de usuarios, reportes, historial, control de usuarios y respaldo. Realizado con javascript vanilla para las funcionalidades,PHP para el lado del servidor y Bootstrap para los componentes"
        codeURL="https://github.com/Josee-Espina/Inv-system"
        video={true}
      />
    </div>
  );
}
