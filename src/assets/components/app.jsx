import { Nav } from "./Nav";
import { Me } from "./Me";
import { AboutMe } from "./AboutMe";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
//npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch

export function App() {
  return (
    <>
      <Nav />
      <Me />
      <AboutMe />
      <Projects />
      <Skills />
    </>
  );
}
