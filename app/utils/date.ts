/**
 * Sanani tilga qarab yozadi: '2026-10-06' → "October 6, 2026",
 * "2026-yil 6-oktabr", "6 октября 2026".
 *
 * Nega `toLocaleDateString` emas? Sayt build paytida Node'da chiziladi,
 * keyin brauzerda qayta "jonlanadi". Node va brauzerning Intl ma'lumoti
 * (ayniqsa o'zbekcha uchun) har xil bo'lishi mumkin — matn mos kelmasa,
 * Vue ogohlantirish beradi. Qo'lda yozilgan oylar har joyda bir xil.
 */
const MONTHS: Record<string, string[]> = {
  en: ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'],
  uz: ['yanvar', 'fevral', 'mart', 'aprel', 'may', 'iyun', 'iyul',
    'avgust', 'sentabr', 'oktabr', 'noyabr', 'dekabr'],
  ru: ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля',
    'августа', 'сентября', 'октября', 'ноября', 'декабря'],
}

export function formatDate(iso: string, locale: string) {
  const [y, m, d] = iso.split('-').map(Number) as [number, number, number]
  const month = (MONTHS[locale] ?? MONTHS.en!)[m - 1]
  if (locale === 'uz') return `${y}-yil ${d}-${month}`
  if (locale === 'ru') return `${d} ${month} ${y}`
  return `${month} ${d}, ${y}`
}
