<script setup lang="ts">
/**
 * Bu sahifa faqat BITTA narsa uchun bor: build paytida 404 ko'rinishini
 * haqiqiy HTML qilib chizish.
 *
 * Keyin `scripts/write-404.mjs` uni `.output/public/404.html` ga
 * ko'chiradi — Cloudflare Pages topilmagan manzillarga o'shani beradi.
 * Bo'lmasa 404 sahifasi bo'm-bo'sh HTML bo'lib, faqat JS yuklangach
 * paydo bo'lardi.
 *
 * Qidiruv tizimlaridan yashiramiz: bu haqiqiy sahifa emas.
 */
// Bu sahifa o'z sarlavha va futerini chizadi, shuning uchun umumiy
// tartib (layout) kerak emas.
definePageMeta({ layout: false })

const { locale } = useI18n()
const content = useSiteContent()

defineOgImageComponent('TongOg', {
  title: content.value.notFound.code,
  description: content.value.notFound.heading,
})

useHead(() => ({
  title: content.value.meta.notFound.title,
  meta: [
    { name: 'description', content: content.value.meta.notFound.description },
    { name: 'robots', content: 'noindex, follow' },
  ],
}))
</script>

<template>
  <NotFoundView :locale="(locale as 'en' | 'uz' | 'ru')" />
</template>
