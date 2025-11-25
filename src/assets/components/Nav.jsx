import { PcNav } from "../nav/PCNav";
import { MobileNav } from "../nav/MobileNav";
export function Nav() {
  return (
    <header className="max-[600px]:relative top-0 z-10 sticky">
      <nav className=" navbar bg-base-100 shadow-sm block ">
        <PcNav />
        {/*Menu para resoluciones pequenas */}
        <MobileNav />
      </nav>
    </header>
  );
}
