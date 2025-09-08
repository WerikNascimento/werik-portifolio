import { MessageCircle } from "lucide-react";

export default function ContactPage() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-100 dark:from-gray-900 dark:via-purple-900 dark:to-pink-900"
    >
      <div className="max-w-lg w-full mx-auto bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-10 text-center border border-blue-100 dark:border-purple-900">
        <div className="flex flex-col items-center gap-4 mb-8">
          <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 text-green-600 dark:text-green-400">
            <MessageCircle className="w-10 h-10" />
          </span>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
            Entre em contato
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Fique à vontade para me chamar no WhatsApp!
          </p>
        </div>
        <a
          href="https://wa.me/5511999999999" // Troque pelo seu número
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-semibold shadow-lg hover:scale-105 hover:from-green-600 hover:to-green-700 transition-all text-lg"
        >
          <MessageCircle className="w-6 h-6" />
          Falar no WhatsApp
        </a>
        <div className="mt-10 text-sm text-gray-400 dark:text-gray-500">
          Ou envie um e-mail para <span className="font-medium text-blue-600 dark:text-blue-400">contato.atlas.dev@gmail.com</span>
        </div>
      </div>
    </section>
  );
}