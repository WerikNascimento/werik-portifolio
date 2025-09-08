import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import Link from "next/link"; // Corrigido: importação correta do Link

export default function Home() {
  return (
    <>
      <div>
        <Link href="/hero">Hero</Link>
      </div>
      <div>
        <Link href="/about">About</Link>
      </div>
      <div>
        <Link href="/projects">projects</Link>
      </div>
      {/* Renderizando as seções na página principal */}
      <Hero />
      <About />
      <Projects />
    </>
  );
}