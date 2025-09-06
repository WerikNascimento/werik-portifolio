"use client";

import { Code, Database, Palette, Smartphone, Globe, Zap } from "lucide-react";

const skills = [
  { name: "Frontend", icon: Palette, technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { name: "Backend", icon: Database, technologies: ["Node.js", "Express", "Prisma", "PostgreSQL", "MongoDB"] },
  { name: "Mobile", icon: Smartphone, technologies: ["React Native", "Expo", "Flutter", "Swift"] },
  { name: "DevOps", icon: Globe, technologies: ["Docker", "AWS", "Vercel", "GitHub Actions", "CI/CD"] },
  { name: "Tools", icon: Code, technologies: ["Git", "Figma", "VS Code", "Postman", "Jest"] },
  { name: "Performance", icon: Zap, technologies: ["Webpack", "Vite", "Lighthouse", "Core Web Vitals"] }
];

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Sobre Mim
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Desenvolvedor apaixonado por tecnologia com mais de 3 anos de experiência criando 
            soluções digitais inovadoras e escaláveis.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Texto sobre mim */}
          <div className="space-y-6 slide-in-up">
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Sou um desenvolvedor full-stack especializado em criar experiências digitais excepcionais. 
                Minha paixão é transformar ideias complexas em soluções elegantes e funcionais.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Com expertise em tecnologias modernas como React, Next.js, Node.js e bancos de dados, 
                trabalho para entregar produtos que não apenas funcionam perfeitamente, mas também 
                proporcionam uma experiência de usuário memorável.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="text-center p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">50+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Projetos Concluídos</div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">3+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Anos de Experiência</div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-6 slide-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold text-center mb-8">Minhas Especialidades</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="p-6 rounded-2xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-white/20 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300 group scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white mr-3 group-hover:scale-110 transition-transform duration-300">
                      <skill.icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">{skill.name}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 rounded-full border border-blue-200 dark:border-blue-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
