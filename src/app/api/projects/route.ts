import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { z } from "zod";

const projectSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  url: z.string().url().optional(),
  githubUrl: z.string().url().optional(),
  image: z.string().url().optional(),
  technologies: z.array(z.string()).optional(),
});

// GET: Listar todos os projetos
export async function GET() {
  const projects = await prisma.project.findMany({
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(projects);
}

// POST: Criar um novo projeto
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = projectSchema.parse(body);

    const project = await prisma.project.create({
      data,
    });

    return NextResponse.json(project, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Dados inválidos" },
      { status: 400 }
    );
  }
}
