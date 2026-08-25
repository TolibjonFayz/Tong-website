<script setup lang="ts">
import { SITE, SOZBOG } from '~/utils/site'

const content = useSiteContent()
const localePath = useLocalePath()

const text = computed(() => content.value.products.sozbog!)
const sb = computed(() => content.value.sozbog)

usePageSeo('sozbog', {
  ogTitle: SOZBOG.name,
  label: content.value.status.testing,
})

/**
 * O'yin sahifasi uchun JSON-LD.
 *
 * VideoGame + SoftwareApplication ikkalasi ham beriladi: Google
 * o'yinlarni VideoGame sifatida tushunadi, ilova do'koni ma'lumotini
 * esa SoftwareApplication'dan oladi.
 *
 * ⚠️ aggregateRating ATAYLAB yo'q — o'yin yopiq testda, haqiqiy reyting
 * yo'q. Bo'lmagan reytingni yozish Google qoidalarini buzadi.
 */
useSchemaOrg([
  defineBreadcrumb({
    itemListElement: [
      { name: content.value.nav.home, item: localePath('/') },
      { name: content.value.nav.work, item: localePath('/work') },
      { name: SOZBOG.name, item: localePath('/work/sozbog') },
    ],
  }),
  {
    '@type': ['VideoGame', 'SoftwareApplication'],
    'name': SOZBOG.name,
    'alternateName': 'Sozbog',
    'description': content.value.meta.sozbog.description,
    'url': SOZBOG.playUrl,
    'installUrl': SOZBOG.playUrl,
    'image': '/images/sozbog-icon.png',
    'applicationCategory': 'GameApplication',
    'applicationSubCategory': 'Word puzzle',
    'genre': ['Puzzle', 'Word game', 'Educational'],
    'operatingSystem': 'Android',
    'gamePlatform': 'Android',
    'playMode': 'SinglePlayer',
    'inLanguage': 'uz',
    'contentRating': 'Everyone',
    'author': { '@type': 'Organization', 'name': SITE.company },
    'publisher': { '@type': 'Organization', 'name': SITE.company },
    'offers': {
      '@type': 'Offer',
      'price': '0',
      'priceCurrency': 'USD',
      'availability': 'https://schema.org/PreOrder',
    },
    'privacyPolicy': SOZBOG.privacyUrl,
  },
])
</script>

<template>
  <div>
    <!-- ================= SARLAVHA ================= -->
    <section class="mx-auto max-w-6xl px-5 pt-16 sm:px-8 sm:pt-24">
      <NuxtLink
        :to="localePath('/work')"
        class="group inline-flex items-center gap-2 text-sm text-fg-subtle
               transition-colors hover:text-fg-body"
      >
        <AppIcon
          name="arrow"
          :size="15"
          class="rotate-180 transition-transform duration-200
                 group-hover:-translate-x-1"
        />
        {{ content.cta.backToWork }}
      </NuxtLink>

      <div class="mt-8 flex flex-wrap items-center gap-6">
        <img
          src="/images/sozbog-icon-256.webp"
          :alt="`${SOZBOG.name} — app icon`"
          width="96"
          height="96"
          class="h-20 w-20 rounded-2xl border border-border sm:h-24 sm:w-24"
          fetchpriority="high"
          decoding="async"
        >
        <div>
          <h1 class="text-4xl font-bold sm:text-5xl lg:text-6xl">
            {{ text.name }}
          </h1>
          <p class="mt-2 text-lg text-fg-muted">
            {{ text.tagline }}
          </p>
        </div>
      </div>

      <!-- Yopiq test haqida ochiq ogohlantirish -->
      <aside
        class="mt-9 flex gap-4 rounded-3xl border border-accent-soft/35
               bg-accent-soft/10 p-6"
      >
        <span class="mt-0.5 shrink-0 text-accent-soft">
          <AppIcon name="clock" :size="20" />
        </span>
        <div>
          <p class="font-semibold text-accent-soft">
            {{ sb.status }}
          </p>
          <p class="mt-2 text-sm leading-relaxed text-fg-body">
            {{ sb.statusExplain }}
          </p>
        </div>
      </aside>

      <div class="mt-8">
        <PlayStoreLink size="lg" />
      </div>
    </section>

    <!-- ================= TANISHTIRUV ================= -->
    <section class="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <div class="grid gap-12 lg:grid-cols-[1fr_auto]">
        <div class="max-w-2xl">
          <p
            v-for="(p, i) in sb.intro"
            :key="i"
            class="mt-5 text-lg leading-relaxed text-fg-body first:mt-0"
          >
            {{ p }}
          </p>
        </div>

        <div class="mx-auto w-56 shrink-0 sm:w-64">
          <ShotImage
            name="02_game"
            :alt="sb.shots[1]?.alt ?? ''"
            sizes="(min-width: 640px) 256px, 224px"
          />
        </div>
      </div>
    </section>

    <!-- ================= XUSUSIYATLAR ================= -->
    <section class="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
      <h2 class="text-3xl font-bold sm:text-4xl">
        {{ sb.featuresHeading }}
      </h2>

      <div class="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="f in sb.features"
          :key="f.title"
          class="card-edge rounded-3xl p-7 backdrop-blur-sm transition-colors
                 duration-300 hover:border-accent/40"
        >
          <span
            class="inline-flex h-11 w-11 items-center justify-center
                   rounded-xl bg-dawn text-on-accent"
          >
            <AppIcon :name="f.icon" :size="21" />
          </span>
          <h3 class="mt-5 text-lg font-bold">
            {{ f.title }}
          </h3>
          <p class="mt-3 text-sm leading-relaxed text-fg-muted">
            {{ f.body }}
          </p>
        </article>
      </div>
    </section>

    <!-- ================= QANDAY O'YNALADI ================= -->
    <section class="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
      <div class="card-edge rounded-3xl p-8 backdrop-blur-sm sm:p-12">
        <div class="grid gap-12 lg:grid-cols-[auto_1fr]">
          <div class="order-2 mx-auto w-56 shrink-0 sm:w-64 lg:order-1">
            <ShotImage
              name="03_map"
              :alt="sb.shots[2]?.alt ?? ''"
              sizes="(min-width: 640px) 256px, 224px"
            />
          </div>

          <div class="order-1 max-w-2xl lg:order-2">
            <h2 class="text-3xl font-bold sm:text-4xl">
              {{ sb.howHeading }}
            </h2>
            <p
              v-for="(p, i) in sb.howBody"
              :key="i"
              class="mt-5 leading-relaxed text-fg-muted"
            >
              {{ p }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ================= SKRINSHOTLAR ================= -->
    <section class="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
      <h2 class="text-3xl font-bold sm:text-4xl">
        {{ sb.shotsHeading }}
      </h2>

      <ul class="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
        <li v-for="shot in sb.shots" :key="shot.src">
          <figure>
            <ShotImage
              :name="shot.src"
              :alt="shot.alt"
              sizes="(min-width: 640px) 240px, 44vw"
            />
            <figcaption class="mt-3 text-xs leading-relaxed text-fg-subtle">
              {{ shot.caption }}
            </figcaption>
          </figure>
        </li>
      </ul>
    </section>

    <!-- ================= MA'LUMOTLAR + MAXFIYLIK ================= -->
    <section class="mx-auto max-w-6xl px-5 pb-16 sm:px-8">
      <div class="grid gap-8 lg:grid-cols-2">
        <div class="card-edge rounded-3xl p-8 backdrop-blur-sm">
          <h2 class="text-xl font-bold sm:text-2xl">
            {{ sb.detailsHeading }}
          </h2>
          <dl class="mt-6 divide-y divide-border">
            <div
              v-for="d in text.meta"
              :key="d.label"
              class="flex items-baseline justify-between gap-4 py-3 text-sm"
            >
              <dt class="text-fg-subtle">
                {{ d.label }}
              </dt>
              <dd class="text-right font-medium text-fg">
                {{ d.value }}
              </dd>
            </div>
            <div class="flex items-baseline justify-between gap-4 py-3 text-sm">
              <dt class="text-fg-subtle">
                Package
              </dt>
              <dd class="text-right font-medium text-fg">
                {{ SOZBOG.packageName }}
              </dd>
            </div>
          </dl>
        </div>

        <div class="card-edge rounded-3xl p-8 backdrop-blur-sm">
          <span
            class="inline-flex h-11 w-11 items-center justify-center
                   rounded-xl bg-dawn text-on-accent"
          >
            <AppIcon name="shield" :size="21" />
          </span>
          <h2 class="mt-5 text-xl font-bold sm:text-2xl">
            {{ sb.privacyHeading }}
          </h2>
          <p class="mt-4 leading-relaxed text-fg-muted">
            {{ sb.privacyBody }}
          </p>
          <div class="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold">
            <NuxtLink
              :to="localePath('/privacy')"
              class="group inline-flex items-center gap-2 text-accent"
            >
              {{ content.cta.readPrivacy }}
              <AppIcon
                name="arrow"
                :size="15"
                class="transition-transform duration-200
                       group-hover:translate-x-1"
              />
            </NuxtLink>
            <a
              :href="SOZBOG.privacyUrl"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center gap-2 text-fg-muted
                     transition-colors hover:text-fg"
            >
              {{ text.name }}
              <AppIcon name="external" :size="15" />
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
