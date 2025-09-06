import Link from "next/link";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    url: string;
    githubUrl: string;
  };
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="rounded-lg border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
      <h3 className="text-xl font-bold">{project.title}</h3>
      <p className="mt-2 text-muted-foreground">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-secondary px-2 py-1 text-xs text-secondary-foreground"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-4 flex gap-2">
        <Button asChild variant="outline" size="sm">
          <Link href={project.githubUrl}>Código</Link>
        </Button>
        <Button asChild variant="default" size="sm">
          <Link href={project.url}>Demo</Link>
        </Button>
      </div>
    </div>
  );
}
