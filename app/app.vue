<script setup lang="ts">
import { withTrailingSlash } from 'ufo'
import { SITE, SOZBOG } from '~/utils/site'

const { locale } = useI18n()

// i18n moduli hreflang havolalarini va <html lang> ni o'zi qo'yadi.
const localeHead = useLocaleHead({ dir: true, lang: true, seo: true })

// Cloudflare Pages `/news` ni `/news/` ga yo'naltiradi, sitemap ham `/` bilan
// (nuxt.config: site.trailingSlash). canonical, hreflang va og:url ham shunday
// bo'lsin — aks holda Google yo'naltiriladigan manzilni "asosiy" deb oladi.
useHead(() => ({
  ...localeHead.value,
  link: localeHead.value.link?.map(l =>
    l.href ? { ...l, href: withTrailingSlash(l.href) } : l),
  meta: localeHead.value.meta?.map(m =>
    m.property === 'og:url' && m.content
      ? { ...m, content: withTrailingSlash(String(m.content)) }
      : m),
}))

// Butun saytga tegishli JSON-LD: kompaniya + sayt.
// Bu Google'ga "bu bitta tashkilotning rasmiy sayti" deb tushuntiradi.
useSchemaOrg([
  defineOrganization({
    'name': SITE.company,
    'alternateName': SITE.brand,
    'url': '/',
    'logo': '/icon-512.png',
    'email': SITE.email,
    'founder': SITE.team.map(m => ({ '@type': 'Person', 'name': m.name })),
    'brand': { '@type': 'Brand', 'name': SITE.brand },
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': SITE.city,
      'addressRegion': SITE.region,
      'addressCountry': SITE.countryCode,
    },
    'description':
      'Independent game and app studio in Tashkent, Uzbekistan, founded by Tolibjon Fayzullayev. Publishes Android games under the TONG GAMES label (Soʻzbogʻ) and runs the Bilim Manba knowledge platform.',
    // Rasmiy sahifalar — Google shular orqali "TONG GAMES" so'rovini
    // shu saytga bog'laydi.
    'sameAs': [
      SITE.social.googlePlay,
      SITE.social.tiktok,
      SITE.social.instagram,
      SOZBOG.playUrl,
      'https://bilimmanba.uz',
    ],
  }),
  defineWebSite({
    name: SITE.company,
    alternateName: SITE.brand,
    inLanguage: ({ en: 'en-US', uz: 'uz-UZ', ru: 'ru-RU' } as Record<string, string>)[locale.value] ?? 'en-US',
  }),
  defineWebPage(),
])
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
