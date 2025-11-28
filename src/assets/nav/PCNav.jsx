import { ThemeController } from "./ThemeController";
export function PcNav() {
  return (
    <div className="max-[600px]:hidden flex justify-center animate-ping animate-once animate-ease-in animate-reverse ">
      <ThemeController />

      <a href="#Start" className="btn btn-md btn-ghost">
        Inicio
      </a>
      <a href="#About" className="btn btn-md btn-ghost">
        Sobre Mi
      </a>
      <a href="#Projects" className="btn btn-md  btn-ghost">
        Proyectos
      </a>
      <a href="#Skills" className="btn btn-md  btn-ghost">
        Habilidades
      </a>
    </div>
  );
}
