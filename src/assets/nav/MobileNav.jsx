import { IoIosMenu } from "react-icons/io";

import { ThemeController } from "./ThemeController";
export function MobileNav() {
  return (
    <div className="max-[600px]:flex hidden  items-center animate-ping animate-once animate-ease-in animate-reverse ">
      <ThemeController />
      <div className="dropdown dropdown-center m-auto">
        <div tabIndex={0} role="button" className="btn m-1">
          <IoIosMenu />
        </div>
        <ul
          tabIndex="-1"
          className=" dropdown-content menu bg-base-100 rounded-box z-1  p-2 shadow-sm"
        >
          <li>
            <a href="#Start" className="btn btn-ghost">
              Inicio
            </a>
          </li>
          <li>
            <a href="#About" className="btn btn-ghost">
              Sobre Mi
            </a>
          </li>
          <li>
            <a href="#Projects" className="btn btn-ghost">
              Proyectos
            </a>
          </li>
          <li>
            <a href="#Skills" className="btn btn-ghost">
              Habilidades
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
