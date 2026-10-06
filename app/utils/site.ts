/**
 * Butun sayt bo'ylab ishlatiladigan o'zgarmas ma'lumotlar.
 * Bir joyda tursa — o'zgartirish ham bir joyda bo'ladi.
 */

export const SITE = {
  company: 'TONG INC',
  brand: 'TONG GAMES',
  founder: 'Tolibjon Fayzullayev',
  coFounder: 'Sardor Ikhtiyorov',
  /**
   * Jamoa — "Biz haqimizda" sahifasi va JSON-LD shu ro'yxatdan oladi.
   * Lavozim va bio matni tarjima qilinadi: `about.team` (shu tartibda).
   */
  team: [
    { name: 'Tolibjon Fayzullayev', initials: 'TF' },
    { name: 'Sardor Ikhtiyorov', initials: 'SI' },
  ],
  email: 'tolibjonfayz@gmail.com',
  telegram: 'tolibjon_fayz',
  telegramUrl: 'https://t.me/tolibjon_fayz',
  city: 'Tashkent',
  cityUz: 'Toshkent',
  country: 'Uzbekistan',
  countryCode: 'UZ',
  region: 'Tashkent',
  /** Studiyaning rasmiy sahifalari — Google buni "bitta brend" deb bog'laydi */
  social: {
    tiktok: 'https://www.tiktok.com/@tong.games',
    instagram: 'https://www.instagram.com/tong.games/',
    googlePlay: 'https://play.google.com/store/apps/developer?id=Tong+Inc.',
  },
} as const

export const SOZBOG = {
  name: 'Soʻzbogʻ',
  packageName: 'uz.sozbog.sozbog',
  playUrl: 'https://play.google.com/store/apps/details?id=uz.sozbog.sozbog',
  privacyUrl: 'https://tolibjonfayz.github.io/sozbog/privacy.html',
  platform: 'Android',
  genre: 'Word puzzle',
  words: 2363,
  themes: 145,
  levels: '1300+',
} as const

export const mailto = (subject?: string, body?: string) => {
  const params = new URLSearchParams()
  if (subject) params.set('subject', subject)
  if (body) params.set('body', body)
  const query = params.toString()
  return `mailto:${SITE.email}${query ? `?${query}` : ''}`
}
