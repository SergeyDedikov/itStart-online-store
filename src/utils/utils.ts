// делаем пробелы через 3 разряда
export function formatAmount(amount: number): string {
  return amount
    ? new Intl.NumberFormat('ru-RU', { minimumFractionDigits: 2 }).format(amount)
    : '';
}
