<script setup lang="ts">
import { SOZBOG } from '~/utils/site'

const content = useSiteContent()

/**
 * `variant`:
 *  solid   — gradientli, asosiy tugma (mahsulot sahifasida)
 *  outline — chegarali, ikkinchi darajali (yonida boshqa asosiy tugma bo'lsa)
 */
withDefaults(
  defineProps<{
    note?: boolean
    size?: 'md' | 'lg'
    variant?: 'solid' | 'outline'
  }>(),
  { note: true, size: 'md', variant: 'solid' },
)
</script>

<template>
  <div class="flex flex-col items-start gap-2">
    <a
      :href="SOZBOG.playUrl"
      target="_blank"
      rel="noopener"
      class="group inline-flex items-center gap-3 rounded-xl2 font-semibold
             transition-transform duration-200 hover:-translate-y-0.5"
      :class="[
        size === 'lg' ? 'px-6 py-3.5 text-base' : 'px-5 py-3 text-sm',
        variant === 'solid'
          ? 'bg-dawn text-on-accent shadow-dawn'
          : 'border border-border-strong text-fg-body hover:border-accent',
      ]"
    >
      <!-- Google Play uchburchagi -->
      <svg
        :width="size === 'lg' ? 20 : 18"
        :height="size === 'lg' ? 20 : 18"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M3.6 2.3 14 12 3.6 21.7a1.6 1.6 0 0 1-.6-1.3V3.6c0-.5.2-1 .6-1.3Z" />
        <path d="M16.3 9.7 4.6 2.2l11.2 6.4.5 1.1Z" opacity=".85" />
        <path d="M16.3 14.3 4.6 21.8l11.2-6.4.5-1.1Z" opacity=".85" />
        <path d="M20.6 10.8c1.1.6 1.1 1.8 0 2.4l-3 1.7-2.4-2.9 2.4-2.9 3 1.7Z" opacity=".7" />
      </svg>
      {{ content.cta.playStore }}
      <AppIcon
        name="arrow"
        :size="16"
        class="transition-transform duration-200 group-hover:translate-x-1"
      />
    </a>

    <p
      v-if="note"
      class="flex items-center gap-1.5 text-xs font-medium text-accent-soft"
    >
      <span
        class="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent-soft"
      />
      {{ content.cta.playStoreNote }}
    </p>
  </div>
</template>
