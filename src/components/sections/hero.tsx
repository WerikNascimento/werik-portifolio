"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background com gradiente animado */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900" />
      
      {/* Elementos decorativos */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container relative z-10 flex max-w-6xl flex-col items-center gap-8 text-center">
        <div className="space-y-6 fade-in">
          <div className="inline-flex items-center rounded-full border px-4 py-2 text-sm backdrop-blur-sm bg-white/10 border-white/20">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
            <span className="text-white">Disponível para novos projetos</span>
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="block">Olá, eu sou</span>
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Wérik Prado Nascimento
            </span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300 sm:text-xl leading-relaxed">
            Desenvolvedor formado pela FATEC de São José do Rio Preto, com experiência em suporte, desenvolvimento e infraestrutura. 
            Busco oportunidades para aplicar minhas habilidades, crescer profissionalmente e contribuir para resultados sólidos.
            <br />
            <span className="font-semibold block mt-4">Araraquara - SP | (17) 98204-8682 | w10p01n04@gmail.com</span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-center slide-in-up" style={{ animationDelay: '0.2s' }}>
          <a href="#projects">
            <Button size="lg" className="px-8 py-3 text-lg font-semibold rounded-full bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
              <span className="text-gray-100">Ver Meus Projetos</span>
            </Button>
          </a>
          
          <a href="#contact">
            <Button variant="outline" size="lg" className="px-8 py-3 text-lg font-semibold rounded-full border-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300">
              <Mail className="w-5 h-5 mr-2 text-gray-100" />
              <span className="text-gray-100">Entrar em Contato</span>
            </Button>
          </a>
        </div>

        {/* Redes sociais */}
        <div className="flex gap-6 pt-8 slide-in-up" style={{ animationDelay: '0.4s' }}>
          <a href="https://github.com/werik-nascimento" className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-110">
            <Github className="w-6 h-6 text-gray-100" />
          </a>
          <a href="https://linkedin.com/in/werik-nascimento" className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-110">
            <Linkedin className="w-6 h-6 text-gray-100" />
          </a>
          <a href="mailto:contato.atlas.dev@gmail.com" className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-110">
            <Mail className="w-6 h-6 text-gray-100" />
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="flex flex-col items-center text-gray-500 dark:text-gray-400 animate-bounce">
            <span className="text-sm mb-2">Role para baixo</span>
            <ArrowDown className="w-5 h-5" />
          </div>
        </div>
      </div>
    </section>
  );
}
