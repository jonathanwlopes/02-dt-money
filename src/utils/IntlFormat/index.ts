export const FormatCurrency = (format: number) => {
  const result = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(format)

  return result
}
