/**
 * '/news/...' → 'https://tong-inc.pages.dev/news/...'.
 *
 * `define*()` yordamchilari manzilni o'zi to'liq qiladi, lekin qo'lda
 * yozilgan JSON-LD obyektlarida (BlogPosting, Blog) bunday qilmaydi —
 * Google esa to'liq manzilni kutadi.
 */
export function useAbsoluteUrl() {
  const site = useSiteConfig()
  return (path: string) => new URL(path, site.url).href
}
