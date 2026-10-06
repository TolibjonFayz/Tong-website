<script setup lang="ts">
import { SITE } from '~/utils/site'

const content = useSiteContent()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()
const { locale, locales } = useI18n()
const route = useRoute()

const open = ref(false)

// Sahifa almashsa mobil menyu o'zi yopilsin.
watch(() => route.fullPath, () => { open.value = false })

const links = computed(() => [
  { to: localePath('/'), label: content.value.nav.home },
  { to: localePath('/work'), label: content.value.nav.work },
  { to: localePath('/news'), label: content.value.nav.news },
  { to: localePath('/about'), label: content.value.nav.about },
  { to: localePath('/support'), label: content.value.nav.support },
  { to: localePath('/contact'), label: content.value.nav.contact },
])

/**
 * Tillar ro'yxati. Uchtasi ham havola sifatida turadi — ochiladigan menyu
 * emas. Sababi: qidiruv tizimlari havolani ko'radi, JS kerak emas va
 * bosish uchun bitta harakat yetadi.
 */
const langs = computed(() =>
  (locales.value as Array<{ code: string, language?: string }>).map(l => ({
    code: l.code,
    label: l.code.toUpperCase(),
    to: switchLocalePath(l.code as 'en' | 'uz' | 'ru'),
    hreflang: l.language ?? l.code,
    active: l.code === locale.value,
  })),
)
</script>

<template>
  <header
    class="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur-xl
           backdrop-saturate-150"
  >
    <div class="mx-auto flex h-16 max-w-6xl items-center gap-3 px-5 sm:px-8">
      <!-- Logotip -->
      <NuxtLink
        :to="localePath('/')"
        class="flex shrink-0 items-center gap-2.5"
        :aria-label="SITE.company"
      >
        <img
          src="/images/mark-64.webp"
          alt=""
          width="32"
          height="32"
          class="h-8 w-8 rounded-lg"
          fetchpriority="high"
          decoding="async"
        >
        <span
          class="font-display text-lg font-bold tracking-tight text-fg"
        >TONG<span class="text-fg-muted"> INC</span></span>
      </NuxtLink>

      <div class="grow" />

      <!-- Katta ekran menyusi -->
      <nav class="hidden items-center gap-1 md:flex" aria-label="Main">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="rounded-lg px-3 py-2 text-sm font-medium text-fg-muted
                 transition-colors hover:bg-surface-2 hover:text-fg"
          active-class="!text-fg"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <!-- Til tanlash -->
      <nav
        class="hidden shrink-0 items-center rounded-lg border border-border
               p-0.5 sm:flex"
        :aria-label="content.nav.language"
      >
        <NuxtLink
          v-for="l in langs"
          :key="l.code"
          :to="l.to"
          :hreflang="l.hreflang"
          :aria-current="l.active ? 'true' : undefined"
          class="rounded-md px-2 py-1 text-xs font-bold transition-colors"
          :class="l.active
            ? 'bg-surface-2 text-fg'
            : 'text-fg-subtle hover:text-fg'"
        >{{ l.label }}</NuxtLink>
      </nav>

      <ThemeToggle />

      <!-- Mobil menyu tugmasi -->
      <button
        type="button"
        class="rounded-lg p-2 text-fg-body transition-colors
               hover:bg-surface-2 md:hidden"
        :aria-label="open ? content.nav.close : content.nav.menu"
        :aria-expanded="open"
        aria-controls="mobile-nav"
        @click="open = !open"
      >
        <AppIcon :name="open ? 'close' : 'menu'" :size="22" />
      </button>
    </div>

    <!-- Mobil menyu -->
    <nav
      v-show="open"
      id="mobile-nav"
      class="border-t border-border bg-bg/95 px-5 py-3 md:hidden"
      aria-label="Mobile"
    >
      <NuxtLink
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        class="block rounded-lg px-3 py-2.5 text-sm font-medium text-fg-body
               transition-colors hover:bg-surface-2"
        active-class="!text-accent"
      >
        {{ link.label }}
      </NuxtLink>

      <div class="mt-2 flex gap-1 border-t border-border pt-3">
        <NuxtLink
          v-for="l in langs"
          :key="l.code"
          :to="l.to"
          :hreflang="l.hreflang"
          class="rounded-lg px-3 py-2 text-sm font-bold transition-colors"
          :class="l.active
            ? 'bg-surface-2 text-fg'
            : 'text-fg-subtle hover:text-fg'"
        >{{ l.label }}</NuxtLink>
      </div>
    </nav>
  </header>
</template>
