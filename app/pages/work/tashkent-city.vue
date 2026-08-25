<script setup lang="ts">
import { SITE } from '~/utils/site'
import { productBySlug } from '~/utils/products'

const content = useSiteContent()
const localePath = useLocalePath()

const product = productBySlug('tashkent-city')!
const text = computed(() => content.value.products['tashkent-city']!)
const tc = computed(() => content.value.tashkentCity)

usePageSeo('tashkentCity', {
  ogTitle: 'TASHKENT CITY',
  label: content.value.status.live,
})

/**
 * O'yin chiqqan va bepul, shuning uchun `Offer` narxi 0 va
 * `availability` — InStock. Reyting yo'q: haqiqiy baholar yig'ilmagan,
 * yo'q reytingni yozish Google qoidalarini buzadi.
 */
useSchemaOrg([
  defineBreadcrumb({
    itemListElement: [
      { name: content.value.nav.home, item: localePath('/') },
      { name: content.value.nav.work, item: localePath('/work') },
      { name: 'TASHKENT CITY', item: localePath('/work/tashkent-city') },
    ],
  }),
  {
    '@type': ['VideoGame', 'WebApplication'],
    'name': 'TASHKENT CITY',
    'description': content.value.meta.tashkentCity.description,
    'url': product.url,
    'installUrl': product.url,
    'image': '/screenshots/tashkent-city-3-1280.webp',
    'applicationCategory': 'GameApplication',
    'applicationSubCategory': 'Open-world driving',
    'genre': ['Open world', 'Driving', 'Adventure'],
    'operatingSystem': 'Web browser',
    'gamePlatform': 'Web browser',
    'playMode': 'SinglePlayer',
    'browserRequirements': 'Requires WebGL',
    'inLanguage': 'uz',
    'author': { '@type': 'Organization', 'name': SITE.company },
    'publisher': { '@type': 'Organization', 'name': SITE.company },
    'contentLocation': {
      '@type': 'Place',
      'name': 'Tashkent, Uzbekistan',
    },
    'offers': {
      '@type': 'Offer',
      'price': '0',
      'priceCurrency': 'USD',
      'availability': 'https://schema.org/InStock',
    },
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

      <div class="mt-8 flex flex-wrap items-center gap-4">
        <h1 class="text-4xl font-bold sm:text-5xl lg:text-6xl">
          TASHKENT CITY
        </h1>
        <span
          class="inline-flex items-center gap-1.5 rounded-full border
                 border-ok/40 px-3 py-1 text-xs font-semibold text-ok"
        >
          <span class="h-1.5 w-1.5 animate-pulse rounded-full bg-current" />
          {{ content.status.live }}
        </span>
      </div>

      <p class="mt-3 text-lg text-fg-muted">
        {{ text.tagline }}
      </p>

      <p class="mt-6 max-w-2xl leading-relaxed text-fg-body">
        {{ tc.statusNote }}
      </p>

      <a
        :href="product.url"
        target="_blank"
        rel="noopener"
        class="group mt-8 inline-flex items-center gap-3 rounded-xl2 bg-dawn
               px-6 py-3.5 text-base font-semibold text-on-accent shadow-dawn
               transition-transform duration-200 hover:-translate-y-0.5"
      >
        <AppIcon name="play" :size="18" />
        {{ content.cta.openGame }}
        <AppIcon
          name="arrow"
          :size="16"
          class="transition-transform duration-200 group-hover:translate-x-1"
        />
      </a>
    </section>

    <!-- ================= KATTA SKRINSHOT ================= -->
    <section class="mx-auto max-w-6xl px-5 pt-12 sm:px-8">
      <ShotImage
        name="tashkent-city-3"
        :alt="tc.shots[0]?.alt ?? ''"
        sizes="(min-width: 1152px) 1088px, 92vw"
        rounded="rounded-3xl"
        priority
      />
    </section>

    <!-- ================= TANISHTIRUV ================= -->
    <section class="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <div class="max-w-3xl">
        <p
          v-for="(p, i) in tc.intro"
          :key="i"
          class="mt-5 text-lg leading-relaxed text-fg-body first:mt-0"
        >
          {{ p }}
        </p>
      </div>
    </section>

    <!-- ================= XUSUSIYATLAR ================= -->
    <section class="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
      <h2 class="text-3xl font-bold sm:text-4xl">
        {{ tc.featuresHeading }}
      </h2>

      <div class="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="f in tc.features"
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

    <!-- ================= JOYLAR + XARITA ================= -->
    <section class="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
      <div class="card-edge rounded-3xl p-8 backdrop-blur-sm sm:p-12">
        <div class="grid gap-12 lg:grid-cols-[1fr_auto]">
          <div class="max-w-xl">
            <h2 class="text-3xl font-bold sm:text-4xl">
              {{ tc.placesHeading }}
            </h2>
            <p class="mt-4 leading-relaxed text-fg-muted">
              {{ tc.placesLead }}
            </p>

            <ul class="mt-7 flex flex-wrap gap-2">
              <li
                v-for="place in tc.places"
                :key="place"
                class="rounded-full border border-border bg-surface-2/60 px-3.5
                       py-1.5 text-sm text-fg-body"
              >
                {{ place }}
              </li>
            </ul>
          </div>

          <div class="mx-auto w-full max-w-sm shrink-0 lg:w-80">
            <figure>
              <ShotImage
                name="tashkent-city-map"
                :alt="tc.shots[3]?.alt ?? ''"
                sizes="(min-width: 1024px) 320px, 90vw"
              />
              <figcaption class="mt-3 text-xs leading-relaxed text-fg-subtle">
                {{ tc.shots[3]?.caption }}
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>

    <!-- ================= BOSHQARUV ================= -->
    <section class="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
      <div class="grid gap-10 lg:grid-cols-[1fr_1fr]">
        <div>
          <h2 class="text-3xl font-bold sm:text-4xl">
            {{ tc.controlsHeading }}
          </h2>
          <p class="mt-4 max-w-md leading-relaxed text-fg-muted">
            {{ tc.controlsLead }}
          </p>

          <dl class="mt-8 divide-y divide-border">
            <div
              v-for="c in tc.controls"
              :key="c.key"
              class="flex items-baseline gap-5 py-2.5 text-sm"
            >
              <dt class="w-28 shrink-0">
                <kbd
                  class="rounded-md border border-border bg-surface-2 px-2
                         py-1 font-display text-xs font-bold text-fg"
                >{{ c.key }}</kbd>
              </dt>
              <dd class="text-fg-muted">
                {{ c.action }}
              </dd>
            </div>
          </dl>
        </div>

        <div class="space-y-6">
          <figure v-for="shot in tc.shots.slice(1, 3)" :key="shot.src">
            <ShotImage
              :name="shot.src"
              :alt="shot.alt"
              sizes="(min-width: 1024px) 520px, 92vw"
            />
            <figcaption class="mt-3 text-xs leading-relaxed text-fg-subtle">
              {{ shot.caption }}
            </figcaption>
          </figure>
        </div>
      </div>
    </section>

    <!-- ================= MA'LUMOTLAR ================= -->
    <section class="mx-auto max-w-6xl px-5 pb-8 sm:px-8">
      <div class="card-edge rounded-3xl p-8 backdrop-blur-sm">
        <h2 class="text-xl font-bold sm:text-2xl">
          {{ tc.detailsHeading }}
        </h2>
        <dl class="mt-6 divide-y divide-border">
          <div
            v-for="m in text.meta"
            :key="m.label"
            class="flex items-baseline justify-between gap-4 py-3 text-sm"
          >
            <dt class="text-fg-subtle">
              {{ m.label }}
            </dt>
            <dd class="text-right font-medium text-fg">
              {{ m.value }}
            </dd>
          </div>
        </dl>
      </div>
    </section>
  </div>
</template>
