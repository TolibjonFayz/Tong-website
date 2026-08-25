<script setup lang="ts">
import { SITE, SOZBOG } from '~/utils/site'

const { locale } = useI18n()

// i18n moduli hreflang havolalarini va <html lang> ni o'zi qo'yadi.
const localeHead = useLocaleHead({ dir: true, lang: true, seo: true })
useHead(() => localeHead.value)

// Butun saytga tegishli JSON-LD: kompaniya + sayt.
// Bu Google'ga "bu bitta tashkilotning rasmiy sayti" deb tushuntiradi.
useSchemaOrg([
  defineOrganization({
    'name': SITE.company,
    'alternateName': SITE.brand,
    'url': '/',
    'logo': '/icon-512.png',
    'email': SITE.email,
    'founder': {
      '@type': 'Person',
      'name': SITE.founder,
    },
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': SITE.city,
      'addressRegion': SITE.region,
      'addressCountry': SITE.countryCode,
    },
    'description':
      'Independent mobile game and app studio in Tashkent, Uzbekistan, publishing Android games under the TONG GAMES label.',
    'sameAs': [SOZBOG.playUrl],
  }),
  defineWebSite({
    name: SITE.company,
    inLanguage: locale.value === 'uz' ? 'uz-UZ' : 'en-US',
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
