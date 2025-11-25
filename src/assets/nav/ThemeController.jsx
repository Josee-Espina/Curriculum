import { useEffect, useState } from "react";
import { CiLight } from "react-icons/ci";
import { MdNightlightRound } from "react-icons/md";
export function ThemeController() {
  //tema en el local storage sino existe
  let [theme, setTheme] = useState(JSON.parse(localStorage.getItem("theme")));

  //efecto que actualiza el tema en el local storage cada vez que se actualiza theme
  useEffect(() => {
    if (theme) {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <label className="swap swap-rotate">
      {/* this hidden checkbox controls the state */}
      <input
        type="checkbox"
        checked={theme}
        className=""
        value="light"
        //al darle click niega el theme
        onChange={() => setTheme(!theme)}
      />

      {/* sun icon */}
      <CiLight className="swap-off " />

      {/* moon icon */}
      <MdNightlightRound className="swap-on" />
    </label>
  );
}
