<script setup lang="ts">
import { PRODUCTS, gamesOf, appsOf } from '~/utils/products'

const content = useSiteContent()
const localePath = useLocalePath()

usePageSeo('work', { ogTitle: content.value.work.heading })

const games = gamesOf()
const apps = appsOf()

useSchemaOrg([
  defineBreadcrumb({
    itemListElement: [
      { name: content.value.nav.home, item: localePath('/') },
      { name: content.value.nav.work, item: localePath('/work') },
    ],
  }),
  {
    '@type': 'ItemList',
    'name': content.value.work.heading,
    'numberOfItems': PRODUCTS.length,
    'itemListElement': PRODUCTS.map((p, i) => ({
      '@type': 'ListItem',
      'position': i + 1,
      'name': content.value.products[p.slug]?.name,
      'url': p.hasPage ? localePath(`/work/${p.slug}`) : (p.url ?? localePath('/work')),
    })),
  },
])
</script>

<template>
  <div>
    <PageHero
      :title="content.work.heading"
      :lead="content.work.lead"
    />

    <!-- ================= O'YINLAR ================= -->
    <section class="mx-auto max-w-6xl px-5 py-12 sm:px-8">
      <h2
        class="font-display text-xs font-bold uppercase tracking-[0.18em]
               text-accent"
      >
        {{ content.work.gamesHeading }}
      </h2>

      <div class="mt-6 grid gap-6 lg:grid-cols-2">
        <ProductCard
          v-for="p in games"
          :key="p.slug"
          :product="p"
        />
      </div>
    </section>

    <!-- ================= DASTURLAR ================= -->
    <section class="mx-auto max-w-6xl px-5 pb-12 sm:px-8">
      <h2
        class="font-display text-xs font-bold uppercase tracking-[0.18em]
               text-accent"
      >
        {{ content.work.appsHeading }}
      </h2>

      <div class="mt-6 grid gap-6 lg:grid-cols-2">
        <ProductCard
          v-for="p in apps"
          :key="p.slug"
          :product="p"
        />
      </div>
    </section>

    <!-- ================= SAYTLAR / BUYURTMA ================= -->
    <section class="mx-auto max-w-6xl px-5 pb-8 sm:px-8">
      <div
        class="rounded-3xl border border-dashed border-border-strong p-8 sm:p-10"
      >
        <h2 class="text-xl font-bold sm:text-2xl">
          {{ content.work.moreHeading }}
        </h2>
        <p class="mt-4 max-w-2xl leading-relaxed text-fg-muted">
          {{ content.work.moreBody }}
        </p>
        <NuxtLink
          :to="localePath('/contact')"
          class="group mt-6 inline-flex items-center gap-2 text-sm
                 font-semibold text-accent"
        >
          {{ content.cta.contactUs }}
          <AppIcon
            name="arrow"
            :size="16"
            class="transition-transform duration-200 group-hover:translate-x-1"
          />
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
