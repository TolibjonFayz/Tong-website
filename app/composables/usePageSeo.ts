import type { SiteContent } from '~/content/types'

type MetaKey = keyof SiteContent['meta']

/**
 * Bitta sahifaning butun SEO to'plamini o'rnatadi:
 * title, description, Open Graph, Twitter Card va OG rasmi.
 *
 * Har sahifada shuni chaqirish yetarli — qolgani avtomatik.
 * Canonical va hreflang'ni @nuxtjs/seo bilan i18n moduli o'zi qo'yadi.
 */
export function usePageSeo(key: MetaKey, options?: {
  /** OG rasmidagi kichik yorliq, masalan "Closed testing" */
  label?: string
  /** OG rasmida sahifa sarlavhasi o'rniga boshqa matn kerak bo'lsa */
  ogTitle?: string
}) {
  const content = useSiteContent()
  const meta = computed(() => content.value.meta[key])

  useSeoMeta({
    title: () => meta.value.title,
    description: () => meta.value.description,
    ogTitle: () => meta.value.title,
    ogDescription: () => meta.value.description,
    ogType: 'website',
    ogSiteName: 'TONG INC',
    twitterCard: 'summary_large_image',
    twitterTitle: () => meta.value.title,
    twitterDescription: () => meta.value.description,
  })

  defineOgImageComponent('TongOg', {
    title: options?.ogTitle ?? meta.value.title,
    description: meta.value.description,
    label: options?.label ?? '',
  })

  return meta
}
