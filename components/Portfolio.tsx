import { Hero } from "./Hero";
import { ProjectStack } from "./ProjectStack";
import { ThemeToggle } from "./ThemeToggle";
import { Footer } from "./Footer";

export function Portfolio() {
  return (
    <>
      <ThemeToggle />
      <main id="top">
        <Hero />
        <ProjectStack />
      </main>
      <Footer />
    </>
  );
}
