'use client';

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Home, Code, Globe, Smartphone } from "lucide-react";

const navLinks = [
  { name: "Início", href: "/" , icon: <Home className="w-4 h-4 mr-1" /> },
  { name: "Sobre", href: "#about", icon: <Globe className="w-4 h-4 mr-1" /> },
  { name: "Projetos", href: "#projects", icon: <Code className="w-4 h-4 mr-1" /> },
  { name: "Contato", href: "/contact", icon: <Smartphone className="w-4 h-4 mr-1" /> },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 ghost backdrop-blur border-b shadow-sm bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <nav className="container mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-blue-600">
            <span className="text-white font-extrabold text-xl">WK</span>
          </span>
          <span className="font-bold text-xl block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Wérik Nascimento
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-2 ml-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              {link.href.startsWith("#") ? (
                <a
                  href={link.href}
                  className="flex items-center px-4 py-2 rounded-lg font-medium text-white hover:bg-blue-50 hover:text-blue-600 transition"
                >
                  {link.icon}
                  {link.name}
                </a>
              ) : (
                <Link
                  href={link.href}
                  className="flex items-center px-4 py-2 rounded-lg font-medium text-white hover:bg-blue-50 hover:text-blue-600 transition"
                >
                  {link.icon}
                  {link.name}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu */}
        {open && (
          <div className="absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-lg md:hidden animate-slide-down">
            <ul className="flex flex-col items-center gap-4 py-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith("#") ? (
                    <a
                      href={link.href}
                      className="flex items-center px-4 py-2 rounded-lg font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                      onClick={() => setOpen(false)}
                    >
                      {link.icon}
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="flex items-center px-4 py-2 rounded-lg font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                      onClick={() => setOpen(false)}
                    >
                      {link.icon}
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}