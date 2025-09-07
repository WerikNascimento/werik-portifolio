import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { Link } fron "next/link"

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
    </>
  );
}
