<script setup lang="ts">
import { SITE, mailto } from '~/utils/site'

const content = useSiteContent()
const localePath = useLocalePath()

usePageSeo('support', { ogTitle: content.value.support.heading })

/**
 * FAQPage JSON-LD — Google savol-javoblarni qidiruv natijasida
 * kengaytirilgan holda ko'rsatishi mumkin.
 */
useSchemaOrg([
  defineBreadcrumb({
    itemListElement: [
      { name: content.value.nav.home, item: localePath('/') },
      { name: content.value.nav.support, item: localePath('/support') },
    ],
  }),
  {
    '@type': 'FAQPage',
    'mainEntity': content.value.support.faq.map(item => ({
      '@type': 'Question',
      'name': item.q,
      'acceptedAnswer': { '@type': 'Answer', 'text': item.a },
    })),
  },
])

const bugMail = computed(() =>
  mailto(
    `${SITE.company} — bug report`,
    `${content.value.support.reportBody}\n\n`
    + content.value.support.reportBullets.map(b => `- ${b}: `).join('\n')
    + '\n\n',
  ),
)
</script>

<template>
  <div>
    <PageHero
      :title="content.support.heading"
      :lead="content.support.lead"
    />

    <!-- ================= ALOQA ================= -->
    <section class="mx-auto max-w-6xl px-5 py-12 sm:px-8">
      <div class="grid gap-6 sm:grid-cols-2">
        <div class="card-edge rounded-3xl p-8 backdrop-blur-sm">
          <span
            class="inline-flex h-11 w-11 items-center justify-center
                   rounded-xl bg-dawn text-on-accent"
          >
            <AppIcon name="mail" :size="21" />
          </span>
          <h2 class="mt-5 text-xl font-bold">
            {{ content.support.contactHeading }}
          </h2>
          <p class="mt-3 text-sm leading-relaxed text-fg-muted">
            {{ content.support.contactBody }}
          </p>
          <a
            :href="`mailto:${SITE.email}`"
            class="mt-5 inline-block break-all font-display text-lg
                   font-semibold text-accent transition-opacity
                   hover:opacity-80"
          >{{ SITE.email }}</a>

          <a
            :href="SITE.telegramUrl"
            target="_blank"
            rel="noopener"
            class="mt-3 flex items-center gap-2 text-sm font-semibold
                   text-fg-muted transition-colors hover:text-accent"
          >
            <AppIcon name="telegram" :size="16" />
            &commat;{{ SITE.telegram }}
          </a>
        </div>

        <div class="card-edge rounded-3xl p-8 backdrop-blur-sm">
          <span
            class="inline-flex h-11 w-11 items-center justify-center
                   rounded-xl bg-dawn text-on-accent"
          >
            <AppIcon name="bug" :size="21" />
          </span>
          <h2 class="mt-5 text-xl font-bold">
            {{ content.support.reportHeading }}
          </h2>
          <p class="mt-3 text-sm leading-relaxed text-fg-muted">
            {{ content.support.reportBody }}
          </p>
          <ul class="mt-4 space-y-2">
            <li
              v-for="b in content.support.reportBullets"
              :key="b"
              class="flex gap-2.5 text-sm text-fg-body"
            >
              <AppIcon
                name="check"
                :size="16"
                class="mt-0.5 shrink-0 text-accent"
              />
              <span>{{ b }}</span>
            </li>
          </ul>
          <a
            :href="bugMail"
            class="mt-6 inline-flex items-center gap-2 rounded-xl border
                   border-border-strong px-4 py-2.5 text-xs font-semibold
                   text-fg-body transition-colors hover:border-accent
                   hover:text-fg"
          >
            <AppIcon name="mail" :size="15" />
            {{ content.cta.openMail }}
          </a>
        </div>
      </div>
    </section>

    <!-- ================= SAVOL-JAVOB ================= -->
    <section class="mx-auto max-w-4xl px-5 pb-16 sm:px-8">
      <h2 class="text-3xl font-bold sm:text-4xl">
        {{ content.support.faqHeading }}
      </h2>

      <div class="mt-10 divide-y divide-border">
        <details
          v-for="(item, i) in content.support.faq"
          :key="i"
          class="group py-1"
          :open="i === 0"
        >
          <summary
            class="flex cursor-pointer list-none items-start justify-between
                   gap-5 py-5 text-left font-semibold text-fg
                   transition-colors hover:text-accent
                   [&::-webkit-details-marker]:hidden"
          >
            <h3 class="text-base sm:text-lg">
              {{ item.q }}
            </h3>
            <span
              class="mt-1 shrink-0 text-fg0 transition-transform
                     duration-200 group-open:rotate-45"
              aria-hidden="true"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              >
                <path d="M12 5v14M5 12h14" />
              </svg>
            </span>
          </summary>
          <p class="pb-6 pr-8 leading-relaxed text-fg-muted">
            {{ item.a }}
          </p>
        </details>
      </div>
    </section>

    <!-- ================= HUQUQIY HAVOLALAR ================= -->
    <section class="mx-auto max-w-4xl px-5 pb-8 sm:px-8">
      <div
        class="flex flex-wrap items-center justify-center gap-x-8 gap-y-3
               rounded-3xl border border-border bg-surface/50 p-7
               text-sm font-semibold backdrop-blur-sm"
      >
        <NuxtLink
          :to="localePath('/privacy')"
          class="text-fg-body transition-colors hover:text-accent"
        >{{ content.footer.privacy }}</NuxtLink>
        <NuxtLink
          :to="localePath('/terms')"
          class="text-fg-body transition-colors hover:text-accent"
        >{{ content.footer.terms }}</NuxtLink>
        <NuxtLink
          :to="localePath('/work')"
          class="text-fg-body transition-colors hover:text-accent"
        >{{ content.nav.work }}</NuxtLink>
      </div>
    </section>
  </div>
</template>
