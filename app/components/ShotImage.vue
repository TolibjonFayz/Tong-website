<script setup lang="ts">
import { SHOTS } from '~/utils/shots.generated'

/**
 * Skrinshot.
 *
 * O'lchamlar `shots.generated.ts` dan olinadi — u `prepare-assets.mjs`
 * tomonidan rasm fayllarining o'zidan yasaladi. Shuning uchun rasm
 * almashsa ham width/height to'g'ri qoladi va sahifa sakramaydi (CLS = 0).
 */
const props = withDefaults(
  defineProps<{
    /** Fayl nomi kengaytmasiz, masalan "01_home" */
    name: string
    alt: string
    /** Ekranda taxminan qancha joy egallaydi */
    sizes?: string
    priority?: boolean
    rounded?: string
  }>(),
  {
    sizes: '(min-width: 640px) 320px, 70vw',
    priority: false,
    rounded: 'rounded-2xl',
  },
)

const meta = computed(() => SHOTS[props.name])
const base = computed(() => `/screenshots/${props.name}`)

const srcset = computed(() =>
  (meta.value?.widths ?? [])
    .map(w => `${base.value}-${w}.webp ${w}w`)
    .join(', '),
)

const src = computed(() => {
  const widths = meta.value?.widths ?? []
  return `${base.value}-${widths[widths.length - 1] ?? 720}.webp`
})
</script>

<template>
  <img
    v-if="meta"
    :src="src"
    :srcset="srcset"
    :sizes="sizes"
    :alt="alt"
    :width="meta.w"
    :height="meta.h"
    :loading="priority ? 'eager' : 'lazy'"
    :fetchpriority="priority ? 'high' : 'auto'"
    decoding="async"
    class="h-auto w-full border border-border shadow-2xl shadow-black/20"
    :class="rounded"
  >
</template>
