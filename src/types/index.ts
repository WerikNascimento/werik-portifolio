// Tipos globais do projeto
export interface Project {
    id: string;
    title: string;
    description: string;
    url?: string;
    githubUrl?: string;
    image?: string;
    technologies: string[];
    createdAt: Date;
    updatedAt: Date;
  }
  
  export interface User {
    id: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
  }
  