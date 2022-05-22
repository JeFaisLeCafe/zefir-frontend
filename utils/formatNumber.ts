export const formatNumber = (number: number, currency: string) => {
  return Intl.NumberFormat('en-US', { style: 'currency', currency: currency, minimumFractionDigits: 0, }).format(number)
}