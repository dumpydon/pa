import { Hero } from "./Hero";
import { ProjectStack } from "./ProjectStack";
import { ThemeToggle } from "./ThemeToggle";

export function Portfolio() {
  return (
    <>
      <ThemeToggle />
      <main>
        <Hero />
        <ProjectStack />
      </main>
    </>
  );
}
