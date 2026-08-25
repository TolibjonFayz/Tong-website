export type Theme = 'light' | 'dark'

const STORAGE_KEY = 'tong-theme'

/**
 * Yorug'/qorong'i rejimni boshqaradi.
 *
 * Qoida:
 *  - Foydalanuvchi hech narsa tanlamagan bo'lsa — telefon sozlamasiga
 *    ergashadi (buni CSS `prefers-color-scheme` orqali o'zi qiladi).
 *  - Tugma bosilgach — tanlov `localStorage` ga yoziladi va `<html>` ga
 *    `data-theme` qo'yiladi. Shundan keyin telefon sozlamasi ta'sir qilmaydi.
 *
 * Miltillash (flash) bo'lmasligi uchun `data-theme` sahifa chizilishidan
 * OLDIN qo'yiladi — buni `nuxt.config.ts` dagi kichik skript bajaradi.
 */
export function useTheme() {
  /** Hozir ekranda qaysi rejim turganini DOM dan o'qiydi. */
  function current(): Theme {
    if (import.meta.server) return 'light'
    const explicit = document.documentElement.getAttribute('data-theme')
    if (explicit === 'dark' || explicit === 'light') return explicit
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  }

  function apply(theme: Theme) {
    document.documentElement.setAttribute('data-theme', theme)
    try {
      localStorage.setItem(STORAGE_KEY, theme)
    }
    catch {
      // Maxfiy rejimda localStorage yopiq bo'lishi mumkin — muhim emas,
      // rejim shu sahifa ochiq turguncha baribir ishlaydi.
    }
  }

  function toggle() {
    apply(current() === 'dark' ? 'light' : 'dark')
  }

  return { current, apply, toggle }
}
