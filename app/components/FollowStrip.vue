<script setup lang="ts">
import { SITE } from '~/utils/site'

/** "TONG GAMES'ni kuzating" — TikTok va Instagram havolalari. */
const content = useSiteContent()

const links = [
  { href: SITE.social.tiktok, icon: 'tiktok', label: 'TikTok' },
  { href: SITE.social.instagram, icon: 'instagram', label: 'Instagram' },
]
</script>

<template>
  <div
    class="flex flex-col gap-6 rounded-3xl border border-border bg-surface/60
           p-8 backdrop-blur-sm sm:p-10 lg:flex-row lg:items-center
           lg:justify-between"
  >
    <div class="min-w-0">
      <h2 class="text-xl font-bold sm:text-2xl">
        {{ content.news.followHeading }}
      </h2>
      <p class="mt-2 text-sm leading-relaxed text-fg-muted">
        {{ content.news.followBody }}
      </p>
    </div>

    <div class="flex shrink-0 flex-wrap gap-3">
      <a
        v-for="l in links"
        :key="l.label"
        :href="l.href"
        target="_blank"
        rel="noopener me"
        class="inline-flex items-center gap-2.5 rounded-xl border
               border-border-strong px-4 py-2.5 text-sm font-semibold
               text-fg-body transition-colors hover:border-accent"
      >
        <AppIcon :name="l.icon" :size="17" />
        {{ l.label }} · @tong.games
      </a>
    </div>
  </div>
</template>
