import { ThemeController } from "./ThemeController";
export function PcNav() {
  return (
    <div className="max-[600px]:hidden flex justify-center ">
      <ThemeController />

      <a href="#Start" className="btn btn-ghost">
        Inicio
      </a>
      <a href="#About" className="btn btn-ghost">
        Sobre Mi
      </a>
      <a href="#Projects" className="btn btn-ghost">
        Proyectos
      </a>
      <a href="#Skills" className="btn btn-ghost">
        Habilidades
      </a>
    </div>
  );
}
