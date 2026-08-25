<script setup lang="ts">
import { SITE } from '~/utils/site'

const content = useSiteContent()
const localePath = useLocalePath()

usePageSeo('about', { ogTitle: content.value.about.heading })

useSchemaOrg([
  defineBreadcrumb({
    itemListElement: [
      { name: content.value.nav.home, item: localePath('/') },
      { name: content.value.nav.about, item: localePath('/about') },
    ],
  }),
  definePerson({
    name: SITE.founder,
    jobTitle: content.value.about.founderRole,
    worksFor: { '@type': 'Organization', name: SITE.company },
    description: content.value.about.founderBio,
  }),
])
</script>

<template>
  <div>
    <PageHero
      :eyebrow="content.home.eyebrow"
      :title="content.about.heading"
      :lead="content.about.lead"
    />

    <!-- ================= HIKOYA ================= -->
    <section class="mx-auto max-w-6xl px-5 py-16 sm:px-8">
      <div class="max-w-3xl">
        <article
          v-for="s in content.about.story"
          :key="s.heading"
          class="border-b border-border py-10 first:pt-0 last:border-0"
        >
          <h2 class="text-2xl font-bold sm:text-3xl">
            {{ s.heading }}
          </h2>
          <p
            v-for="(p, i) in s.paragraphs ?? []"
            :key="i"
            class="mt-5 leading-relaxed text-fg-muted"
          >
            {{ p }}
          </p>
        </article>
      </div>
    </section>

    <!-- ================= ASOSCHI ================= -->
    <section class="mx-auto max-w-6xl px-5 pb-16 sm:px-8">
      <div class="card-edge rounded-3xl p-8 backdrop-blur-sm sm:p-12">
        <p
          class="font-display text-xs font-bold uppercase tracking-[0.18em]
                 text-accent"
        >
          {{ content.about.founderHeading }}
        </p>

        <div class="mt-6 flex flex-wrap items-center gap-5">
          <!-- Asoschining surati yo'q, shuning uchun bosh harflar -->
          <span
            class="flex h-16 w-16 shrink-0 items-center justify-center
                   rounded-2xl bg-dawn font-display text-2xl font-bold
                   text-on-accent"
            aria-hidden="true"
          >SI</span>
          <div>
            <h2 class="text-2xl font-bold">
              {{ content.about.founderName }}
            </h2>
            <p class="mt-1 text-sm text-fg0">
              {{ content.about.founderRole }}
            </p>
          </div>
        </div>

        <p class="mt-7 max-w-2xl leading-relaxed text-fg-muted">
          {{ content.about.founderBio }}
        </p>
      </div>
    </section>

    <!-- ================= QADRIYATLAR ================= -->
    <section class="mx-auto max-w-6xl px-5 pb-16 sm:px-8">
      <h2 class="text-3xl font-bold sm:text-4xl">
        {{ content.about.valuesHeading }}
      </h2>

      <div class="mt-10 grid gap-5 sm:grid-cols-2">
        <article
          v-for="v in content.about.values"
          :key="v.title"
          class="card-edge rounded-3xl p-7 backdrop-blur-sm transition-colors
                 duration-300 hover:border-accent/40"
        >
          <span
            class="inline-flex h-11 w-11 items-center justify-center
                   rounded-xl bg-dawn text-on-accent"
          >
            <AppIcon :name="v.icon" :size="21" />
          </span>
          <h3 class="mt-5 text-lg font-bold">
            {{ v.title }}
          </h3>
          <p class="mt-3 text-sm leading-relaxed text-fg-muted">
            {{ v.body }}
          </p>
        </article>
      </div>
    </section>

    <!-- ================= CHAQIRIQ ================= -->
    <section class="mx-auto max-w-6xl px-5 pb-8 sm:px-8">
      <div
        class="rounded-3xl border border-border bg-surface/60 p-10
               text-center backdrop-blur-sm sm:p-14"
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
                 px-6 py-3.5 font-semibold text-on-accent shadow-lg
                 shadow-dawn transition-transform duration-200
                 hover:-translate-y-0.5"
        >
          <AppIcon name="mail" :size="18" />
          {{ content.cta.contactUs }}
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
