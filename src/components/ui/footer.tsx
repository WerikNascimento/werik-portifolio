"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4 fade-in">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Wérik Nascimento
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Desenvolvedor Full-Stack apaixonado por criar experiências digitais excepcionais
              e soluções inovadoras.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/WerikNascimento"
                className="p-2 rounded-full bg-gray-700 hover:bg-blue-600 transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/werik-nascimento-141898259"
                className="p-2 rounded-full bg-gray-700 hover:bg-blue-600 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:contato.atlas.dev@gmail.com"
                className="p-2 rounded-full bg-gray-700 hover:bg-blue-600 transition-colors duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 fade-in" style={{ animationDelay: '0.1s' }}>
            <h4 className="text-lg font-semibold">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/sobre" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  Sobre Mim
                </Link>
              </li>
              <li>
                <Link href="/projetos" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  Projetos
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 fade-in" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-lg font-semibold">Contato</h4>
            <div className="space-y-2 text-gray-300">
              <p>contato.atlas.dev@gmail.com</p>
              <p>+55 (17) 98204-8682</p>
              <p>São Paulo, SP - Brasil</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center fade-in" style={{ animationDelay: '0.3s' }}>
          <p className="text-gray-400 flex items-center justify-center">
            Feito por Wérik Nascimento • © 2025 Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}