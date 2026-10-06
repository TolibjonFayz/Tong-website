<script setup lang="ts">
import { NEWS } from '~/content/news'
import { SITE } from '~/utils/site'

const content = useSiteContent()
const localePath = useLocalePath()
const abs = useAbsoluteUrl()

usePageSeo('news', { ogTitle: content.value.news.heading })

/**
 * Yangiliklar ro'yxati — Google uchun Blog + har maqola BlogPosting
 * sifatida. Maqolaning to'liq JSON-LD'si o'z sahifasida.
 */
useSchemaOrg([
  defineBreadcrumb({
    itemListElement: [
      { name: content.value.nav.home, item: localePath('/') },
      { name: content.value.nav.news, item: localePath('/news') },
    ],
  }),
  {
    '@type': 'Blog',
    'name': `${content.value.news.heading} — ${SITE.brand}`,
    'description': content.value.meta.news.description,
    'url': abs(localePath('/news')),
    'publisher': { '@type': 'Organization', 'name': SITE.company },
    'blogPost': NEWS.map(n => ({
      '@type': 'BlogPosting',
      'headline': n.text[content.value.locale].title,
      'datePublished': n.date,
      'url': abs(localePath(`/news/${n.slug}`)),
    })),
  },
])
</script>

<template>
  <div>
    <PageHero
      :eyebrow="`${SITE.company} · ${SITE.brand}`"
      :title="content.news.heading"
      :lead="content.news.lead"
    />

    <section class="mx-auto max-w-6xl px-5 py-12 sm:px-8">
      <div v-if="NEWS.length" class="grid gap-5 lg:grid-cols-2">
        <NewsCard v-for="post in NEWS" :key="post.slug" :post="post" />
      </div>
      <p v-else class="text-fg-muted">
        {{ content.news.empty }}
      </p>
    </section>

    <section class="mx-auto max-w-6xl px-5 pb-8 sm:px-8">
      <FollowStrip />
    </section>
  </div>
</template>
