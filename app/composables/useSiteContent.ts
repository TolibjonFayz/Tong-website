import { en } from '~/content/en'
import { uz } from '~/content/uz'
import { ru } from '~/content/ru'
import type { SiteContent } from '~/content/types'

const BY_LOCALE: Record<string, SiteContent> = { en, uz, ru }

/**
 * Joriy tildagi butun sayt matnini qaytaradi.
 *
 * Nega vue-i18n xabarlari emas? Chunki bizda uzun matnlar, ro'yxatlar va
 * ichma-ich obyektlar bor (huquqiy sahifalar, FAQ, mahsulotlar). Oddiy
 * TypeScript obyekti bo'lsa — tahrirlash oson, biror tilda matn tushib
 * qolsa tip tekshiruvi darrov ushlaydi.
 *
 * i18n moduli esa o'z ishini qiladi: `/`, `/uz`, `/ru` manzillari va
 * hreflang teglari.
 */
export function useSiteContent() {
  const { locale } = useI18n()
  return computed<SiteContent>(() => BY_LOCALE[locale.value] ?? en)
}
