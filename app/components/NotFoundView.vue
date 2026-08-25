<script setup lang="ts">
import { en } from '~/content/en'
import { uz } from '~/content/uz'
import { ru } from '~/content/ru'
import type { SiteContent } from '~/content/types'

/**
 * 404 sahifasining ko'rinishi.
 *
 * Ikki joyda ishlatiladi:
 *  1. `error.vue` — Nuxt xato ushlaganda (til manzildan aniqlanadi)
 *  2. `pages/not-found.vue` — build paytida haqiqiy HTML yasash uchun
 *
 * Shuning uchun bu yerda i18n composable'lari ishlatilmaydi — til
 * `locale` prop orqali keladi.
 */
const props = withDefaults(
  defineProps<{
    locale?: 'en' | 'uz' | 'ru'
    code?: string
  }>(),
  { locale: 'en', code: '' },
)

const content = computed<SiteContent>(() => ({ en, uz, ru }[props.locale]))

/** Til prefiksi bilan manzil yasaydi: en → /work, uz → /uz/work */
function path(to: string, loc: 'en' | 'uz' | 'ru' = props.locale) {
  const prefix = loc === 'en' ? '' : `/${loc}`
  return to === '/' ? (prefix || '/') : `${prefix}${to}`
}

const links = computed(() => [
  { to: path('/'), label: content.value.nav.home, icon: 'arrow' },
  { to: path('/work'), label: content.value.nav.work, icon: 'levels' },
  { to: path('/about'), label: content.value.nav.about, icon: 'craft' },
  { to: path('/support'), label: content.value.nav.support, icon: 'shield' },
  { to: path('/contact'), label: content.value.nav.contact, icon: 'mail' },
])

// Uchala tilga ham yo'l qoldiramiz: statik 404 fayli bitta tilda
// yasaladi, shuning uchun boshqa tildagi mehmon ham chiqib keta olsin.
const langs = (['en', 'uz', 'ru'] as const).map(l => ({
  code: l,
  label: l.toUpperCase(),
  to: path('/', l),
}))
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <DawnBackdrop />

    <header class="border-b border-border">
      <div
        class="mx-auto flex h-16 max-w-6xl items-center justify-between px-5
               sm:px-8"
      >
        <a :href="path('/')" class="flex items-center gap-2.5">
          <img
            src="/images/mark-64.webp"
            alt=""
            width="32"
            height="32"
            class="h-8 w-8 rounded-lg"
          >
          <span class="font-display text-lg font-bold tracking-tight text-fg">
            TONG<span class="text-fg-muted"> INC</span>
          </span>
        </a>

        <nav
          class="flex items-center rounded-lg border border-border p-0.5"
          :aria-label="content.nav.language"
        >
          <a
            v-for="l in langs"
            :key="l.code"
            :href="l.to"
            class="rounded-md px-2 py-1 text-xs font-bold transition-colors"
            :class="l.code === locale
              ? 'bg-surface-2 text-fg'
              : 'text-fg-subtle hover:text-fg'"
          >{{ l.label }}</a>
        </nav>
      </div>
    </header>

    <main class="grow">
      <section
        class="mx-auto flex max-w-3xl flex-col items-center px-5 py-24
               text-center sm:px-8 sm:py-32"
      >
        <!--
          Ufqdan ko'tarilayotgan quyosh.
          Doirani past konteynerga solib `overflow-hidden` qilamiz —
          shunda ortidagi fon ko'rinib turadi.
        -->
        <div class="mb-10 flex w-56 flex-col items-center" aria-hidden="true">
          <div class="h-12 w-24 overflow-hidden">
            <div class="h-24 w-24 rounded-full bg-dawn opacity-90" />
          </div>
          <div class="h-px w-full bg-border-strong" />
        </div>

        <p
          class="font-display text-7xl font-bold leading-none text-dawn
                 sm:text-8xl"
        >
          {{ code || content.notFound.code }}
        </p>

        <h1 class="mt-6 text-3xl font-bold sm:text-4xl">
          {{ content.notFound.heading }}
        </h1>

        <p class="mt-5 max-w-xl leading-relaxed text-fg-muted">
          {{ content.notFound.lead }}
        </p>

        <a
          :href="path('/')"
          class="mt-9 inline-flex items-center gap-2.5 rounded-xl2 bg-dawn
                 px-6 py-3.5 font-semibold text-on-accent shadow-dawn
                 transition-transform duration-200 hover:-translate-y-0.5"
        >
          {{ content.cta.backHome }}
        </a>

        <!-- Boshqa yo'llar -->
        <div class="mt-16 w-full">
          <h2
            class="font-display text-xs font-bold uppercase tracking-[0.14em]
                   text-fg-subtle"
          >
            {{ content.notFound.linksHeading }}
          </h2>

          <ul class="mt-5 flex flex-wrap justify-center gap-3">
            <li v-for="link in links" :key="link.to">
              <a
                :href="link.to"
                class="inline-flex items-center gap-2 rounded-xl border
                       border-border px-4 py-2.5 text-sm font-medium
                       text-fg-body transition-colors hover:border-accent
                       hover:text-fg"
              >
                <AppIcon :name="link.icon" :size="15" class="text-accent" />
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>

    <footer class="border-t border-border py-8">
      <p class="text-center text-xs text-fg-subtle">
        &copy; {{ new Date().getFullYear() }} TONG INC ·
        {{ content.contact.locationBody }}
      </p>
    </footer>
  </div>
</template>
