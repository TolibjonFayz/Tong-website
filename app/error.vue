<script setup lang="ts">
import type { NuxtError } from '#app'
import { en } from '~/content/en'
import { uz } from '~/content/uz'
import { ru } from '~/content/ru'

const props = defineProps<{ error: NuxtError }>()

/**
 * ⚠️ Bu sahifa router va i18n moduli to'liq ishga tushmasdan ham
 * chizilishi mumkin. Shuning uchun bu yerda `useI18n()` yoki
 * `localePath()` ishlatilmaydi — til manzilning o'zidan aniqlanadi.
 */
const route = useRoute()

const locale = computed<'en' | 'uz' | 'ru'>(() => {
  const p = route.path || '/'
  if (p === '/uz' || p.startsWith('/uz/')) return 'uz'
  if (p === '/ru' || p.startsWith('/ru/')) return 'ru'
  return 'en'
})

const content = computed(() => ({ en, uz, ru }[locale.value]))
const is404 = computed(() => props.error?.statusCode === 404)

useHead(() => ({
  title: content.value.meta.notFound.title,
  meta: [
    { name: 'description', content: content.value.meta.notFound.description },
    // Xato sahifasi qidiruvda chiqmasligi kerak
    { name: 'robots', content: 'noindex, follow' },
  ],
  htmlAttrs: { lang: locale.value },
}))
</script>

<template>
  <NotFoundView
    :locale="locale"
    :code="is404 ? '' : String(error?.statusCode ?? 500)"
  />
</template>
