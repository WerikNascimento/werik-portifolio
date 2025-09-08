/**
 * Junta múltiplas classes CSS em uma única string, ignorando valores falsy.
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Formata uma data para o padrão brasileiro (dd/mm/yyyy).
 */
export function formatDate(date: Date | string): string {
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toLocaleDateString("pt-BR");
}

// Adicione outras funções utilitárias conforme necessário