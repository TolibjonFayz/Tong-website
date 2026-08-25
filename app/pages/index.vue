<script setup lang="ts">
import { productBySlug } from '~/utils/products'

const content = useSiteContent()
const localePath = useLocalePath()

const tashkentCity = productBySlug('tashkent-city')!

usePageSeo('home', { ogTitle: 'TONG INC' })
</script>

<template>
  <div>
    <!-- ================= HERO ================= -->
    <section class="mx-auto max-w-6xl px-5 pb-16 pt-20 sm:px-8 sm:pb-24 sm:pt-28">
      <p
        class="animate-rise font-display text-xs font-bold uppercase
               tracking-[0.18em] text-accent"
      >
        {{ content.home.eyebrow }}
      </p>

      <h1
        class="animate-rise mt-5 max-w-4xl text-5xl font-bold leading-[1.05]
               sm:text-6xl lg:text-7xl"
        style="animation-delay: 60ms"
      >
        {{ content.home.titleLead }}
        <span class="text-dawn">{{ content.home.titleAccent }}</span>
      </h1>

      <p
        class="animate-rise mt-7 max-w-2xl text-lg leading-relaxed text-fg-muted
               sm:text-xl"
        style="animation-delay: 120ms"
      >
        {{ content.home.lead }}
      </p>

      <div
        class="animate-rise mt-10 flex flex-wrap items-center gap-4"
        style="animation-delay: 180ms"
      >
        <NuxtLink
          :to="localePath('/work')"
          class="group inline-flex items-center gap-2.5 rounded-xl2 bg-dawn
                 px-6 py-3.5 font-semibold text-on-accent shadow-dawn
                 transition-transform duration-200 hover:-translate-y-0.5"
        >
          {{ content.cta.allWork }}
          <AppIcon
            name="arrow"
            :size="17"
            class="transition-transform duration-200 group-hover:translate-x-1"
          />
        </NuxtLink>

        <NuxtLink
          :to="localePath('/about')"
          class="inline-flex items-center gap-2 rounded-xl2 border
                 border-border-strong px-6 py-3.5 font-semibold text-fg-body
                 transition-colors hover:border-fg-subtle hover:text-fg"
        >
          {{ content.nav.about }}
        </NuxtLink>
      </div>
    </section>

    <!-- ================= RAQAMLAR ================= -->
    <section
      class="mx-auto max-w-6xl px-5 sm:px-8"
      :aria-label="content.home.craft.heading"
    >
      <dl
        class="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border
               border-border bg-border sm:grid-cols-4"
      >
        <div
          v-for="stat in content.home.stats"
          :key="stat.label"
          class="bg-surface/90 px-5 py-7 backdrop-blur-sm"
        >
          <dt class="sr-only">
            {{ stat.label }}
          </dt>
          <dd>
            <span
              class="block font-display text-3xl font-bold text-dawn sm:text-4xl"
            >{{ stat.value }}</span>
            <span
              class="mt-1.5 block text-xs leading-snug text-fg-subtle sm:text-sm"
            >{{ stat.label }}</span>
          </dd>
        </div>
      </dl>
    </section>

    <!-- ================= ASOSIY MAHSULOT: SOʻZBOGʻ ================= -->
    <section class="mx-auto max-w-6xl px-5 pt-24 sm:px-8">
      <div class="card-edge overflow-hidden rounded-3xl backdrop-blur-sm">
        <div
          class="grid gap-10 p-8 sm:p-12 lg:grid-cols-[1fr_auto] lg:items-center"
        >
          <div class="min-w-0">
            <p
              class="font-display text-xs font-bold uppercase tracking-[0.18em]
                     text-accent"
            >
              {{ content.home.featured.eyebrow }}
            </p>

            <div class="mt-4 flex flex-wrap items-center gap-4">
              <img
                src="/images/sozbog-icon-256.webp"
                alt=""
                width="64"
                height="64"
                class="h-14 w-14 rounded-2xl border border-border sm:h-16 sm:w-16"
                loading="lazy"
                decoding="async"
              >
              <h2 class="text-4xl font-bold sm:text-5xl">
                {{ content.home.featured.heading }}
              </h2>
              <span
                class="inline-flex items-center gap-1.5 rounded-full border
                       border-accent-soft/40 px-3 py-1 text-xs font-semibold
                       text-accent-soft"
              >
                <span class="h-1.5 w-1.5 rounded-full bg-current" />
                {{ content.status.testing }}
              </span>
            </div>

            <p class="mt-5 max-w-xl leading-relaxed text-fg-muted">
              {{ content.home.featured.lead }}
            </p>

            <ul class="mt-7 space-y-3">
              <li
                v-for="b in content.home.featured.bullets"
                :key="b"
                class="flex gap-3 text-sm leading-relaxed text-fg-body"
              >
                <AppIcon
                  name="check"
                  :size="17"
                  class="mt-0.5 shrink-0 text-accent"
                />
                <span>{{ b }}</span>
              </li>
            </ul>

            <div class="mt-9 flex flex-wrap items-start gap-4">
              <NuxtLink
                :to="localePath('/work/sozbog')"
                class="group inline-flex items-center gap-2.5 rounded-xl2
                       bg-dawn px-5 py-3 text-sm font-semibold text-on-accent
                       shadow-dawn transition-transform duration-200
                       hover:-translate-y-0.5"
              >
                {{ content.cta.seeProduct }}
                <AppIcon
                  name="arrow"
                  :size="15"
                  class="transition-transform duration-200
                         group-hover:translate-x-1"
                />
              </NuxtLink>

              <PlayStoreLink variant="outline" />
            </div>
          </div>

          <div class="mx-auto w-52 shrink-0 sm:w-60 lg:w-64">
            <ShotImage
              name="01_home"
              :alt="content.sozbog.shots[0]?.alt ?? ''"
              sizes="(min-width: 1024px) 256px, (min-width: 640px) 240px, 208px"
              priority
            />
          </div>
        </div>
      </div>
    </section>

    <!-- ============ HOZIR OʻYNASH MUMKIN: TASHKENT CITY ============ -->
    <section class="mx-auto max-w-6xl px-5 pt-6 sm:px-8">
      <div class="card-edge overflow-hidden rounded-3xl backdrop-blur-sm">
        <div class="grid gap-8 p-7 sm:p-9 lg:grid-cols-[1fr_20rem] lg:items-center">
          <div class="min-w-0">
            <p
              class="flex items-center gap-2 font-display text-xs font-bold
                     uppercase tracking-[0.18em] text-ok"
            >
              <span class="h-1.5 w-1.5 animate-pulse rounded-full bg-current" />
              {{ content.home.alsoLive.eyebrow }}
            </p>

            <h2 class="mt-3 text-2xl font-bold sm:text-3xl">
              {{ content.home.alsoLive.heading }}
            </h2>

            <p class="mt-4 max-w-xl text-sm leading-relaxed text-fg-muted">
              {{ content.home.alsoLive.lead }}
            </p>

            <div class="mt-6 flex flex-wrap items-center gap-4">
              <a
                :href="tashkentCity.url"
                target="_blank"
                rel="noopener"
                class="inline-flex items-center gap-2.5 rounded-xl border
                       border-border-strong px-4 py-2.5 text-sm font-semibold
                       text-fg-body transition-colors hover:border-accent"
              >
                <AppIcon name="play" :size="14" />
                {{ content.cta.openGame }}
              </a>

              <NuxtLink
                :to="localePath('/work/tashkent-city')"
                class="group inline-flex items-center gap-2 text-sm
                       font-semibold text-accent"
              >
                {{ content.cta.seeProduct }}
                <AppIcon
                  name="arrow"
                  :size="15"
                  class="transition-transform duration-200
                         group-hover:translate-x-1"
                />
              </NuxtLink>
            </div>
          </div>

          <div class="min-w-0">
            <ShotImage
              name="tashkent-city-3"
              :alt="content.tashkentCity.shots[0]?.alt ?? ''"
              sizes="(min-width: 1024px) 320px, 88vw"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- ================= QANDAY ISHLAYMIZ ================= -->
    <section class="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <h2 class="text-3xl font-bold sm:text-4xl">
        {{ content.home.craft.heading }}
      </h2>
      <p class="mt-4 max-w-2xl leading-relaxed text-fg-muted">
        {{ content.home.craft.lead }}
      </p>

      <div class="mt-12 grid gap-5 sm:grid-cols-2">
        <article
          v-for="item in content.home.craft.items"
          :key="item.title"
          class="card-edge rounded-3xl p-7 backdrop-blur-sm transition-colors
                 duration-300 hover:border-accent/40"
        >
          <span
            class="inline-flex h-11 w-11 items-center justify-center
                   rounded-xl bg-dawn text-on-accent"
          >
            <AppIcon :name="item.icon" :size="21" />
          </span>
          <h3 class="mt-5 text-lg font-bold">
            {{ item.title }}
          </h3>
          <p class="mt-3 text-sm leading-relaxed text-fg-muted">
            {{ item.body }}
          </p>
        </article>
      </div>
    </section>

    <!-- ================= YAKUNIY CHAQIRIQ ================= -->
    <section class="mx-auto max-w-6xl px-5 pb-8 sm:px-8">
      <div
        class="rounded-3xl border border-border bg-surface/60 p-10 text-center
               backdrop-blur-sm sm:p-14"
      >
        <h2 class="text-2xl font-bold sm:text-3xl">
          {{ content.home.closing.heading }}
        </h2>
        <p class="mx-auto mt-4 max-w-xl leading-relaxed text-fg-muted">
          {{ content.home.closing.body }}
        </p>
        <NuxtLink
          :to="localePath('/contact')"
          class="mt-8 inline-flex items-center gap-2.5 rounded-xl2 bg-dawn
                 px-6 py-3.5 font-semibold text-on-accent shadow-dawn
                 transition-transform duration-200 hover:-translate-y-0.5"
        >
          <AppIcon name="mail" :size="18" />
          {{ content.cta.contactUs }}
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
