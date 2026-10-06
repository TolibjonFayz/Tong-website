<script setup lang="ts">
import { NEWS, newsBySlug } from '~/content/news'
import { productBySlug } from '~/utils/products'
import { SITE, SOZBOG } from '~/utils/site'
import { formatDate } from '~/utils/date'

const route = useRoute()
const content = useSiteContent()
const localePath = useLocalePath()
const abs = useAbsoluteUrl()

const post = newsBySlug(String(route.params.slug))
if (!post) {
  throw createError({ statusCode: 404, statusMessage: 'Not found', fatal: true })
}

const text = computed(() => post.text[content.value.locale])
const product = post.product ? productBySlug(post.product) : undefined
/** Maqola muallifi — studiya asoschisi */
const author = computed(() => content.value.about.team[0]!)
const others = NEWS.filter(n => n.slug !== post.slug).slice(0, 2)

useSeoMeta({
  title: () => `${text.value.title} | ${SITE.brand}`,
  description: () => text.value.description,
  ogTitle: () => text.value.title,
  ogDescription: () => text.value.description,
  ogType: 'article',
  ogSiteName: SITE.company,
  articlePublishedTime: post.date,
  articleAuthor: [SITE.founder],
  twitterCard: 'summary_large_image',
  twitterTitle: () => text.value.title,
  twitterDescription: () => text.value.description,
})

defineOgImageComponent('TongOg', {
  title: text.value.title,
  description: text.value.description,
  label: content.value.news.tags[post.tag],
})

/**
 * BlogPosting — Google maqolani sana, muallif va nashriyot bilan
 * tushunadi. Rasm sifatida muqova skrinshoti yoki mahsulot ikonkasi.
 */
useSchemaOrg([
  defineBreadcrumb({
    itemListElement: [
      { name: content.value.nav.home, item: localePath('/') },
      { name: content.value.nav.news, item: localePath('/news') },
      { name: text.value.title, item: localePath(`/news/${post.slug}`) },
    ],
  }),
  {
    '@type': 'BlogPosting',
    'headline': text.value.title,
    'description': text.value.description,
    'datePublished': post.date,
    'dateModified': post.date,
    'inLanguage': content.value.locale,
    'url': abs(localePath(`/news/${post.slug}`)),
    'mainEntityOfPage': abs(localePath(`/news/${post.slug}`)),
    'image': abs(post.cover
      ? `/screenshots/${post.cover}-720.webp`
      : '/images/og-default.png'),
    'author': {
      '@type': 'Person',
      'name': SITE.founder,
      'jobTitle': author.value.role,
      'url': abs(localePath('/about')),
    },
    'publisher': {
      '@type': 'Organization',
      'name': SITE.company,
      'alternateName': SITE.brand,
      'logo': abs('/icon-512.png'),
    },
    ...(post.product === 'sozbog'
      ? { about: { '@type': 'VideoGame', 'name': SOZBOG.name, 'url': SOZBOG.playUrl } }
      : {}),
  },
])
</script>

<template>
  <div>
    <article>
      <!-- ================= SARLAVHA ================= -->
      <header class="mx-auto max-w-6xl px-5 pt-16 sm:px-8 sm:pt-24">
        <NuxtLink
          :to="localePath('/news')"
          class="group inline-flex items-center gap-2 text-sm text-fg-subtle
                 transition-colors hover:text-fg-body"
        >
          <AppIcon
            name="arrow"
            :size="15"
            class="rotate-180 transition-transform duration-200
                   group-hover:-translate-x-1"
          />
          {{ content.news.allNews }}
        </NuxtLink>

        <p class="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
          <span
            class="rounded-full border border-accent/40 px-3 py-0.5 text-xs
                   font-semibold text-accent"
          >{{ content.news.tags[post.tag] }}</span>
          <span class="text-fg-subtle">
            {{ content.news.publishedOn }}
            <time :datetime="post.date">{{ formatDate(post.date, content.locale) }}</time>
          </span>
        </p>

        <h1
          class="mt-5 max-w-4xl text-4xl font-bold leading-[1.08] sm:text-5xl
                 lg:text-6xl"
        >
          {{ text.title }}
        </h1>

        <p class="mt-6 max-w-2xl text-lg leading-relaxed text-fg-muted">
          {{ text.excerpt }}
        </p>

        <p class="mt-6 flex items-center gap-3 text-sm">
          <span
            class="flex h-9 w-9 items-center justify-center rounded-xl bg-dawn
                   font-display text-xs font-bold text-on-accent"
            aria-hidden="true"
          >{{ SITE.team[0].initials }}</span>
          <span>
            <span class="text-fg-subtle">{{ content.news.by }}</span>
            <NuxtLink
              :to="localePath('/about')"
              class="ml-1 font-semibold text-fg transition-colors
                     hover:text-accent"
            >{{ author.name }}</NuxtLink>
            <span class="text-fg-subtle"> · {{ author.role }}, {{ SITE.company }}</span>
          </span>
        </p>
      </header>

      <!-- ================= MATN ================= -->
      <div
        class="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8
               lg:grid-cols-[1fr_17rem]"
      >
        <div class="max-w-2xl">
          <section
            v-for="s in text.body"
            :key="s.heading"
            class="mt-12 first:mt-0"
          >
            <h2 class="text-2xl font-bold sm:text-3xl">
              {{ s.heading }}
            </h2>
            <p
              v-for="(p, i) in s.paragraphs ?? []"
              :key="i"
              class="mt-5 text-lg leading-relaxed text-fg-body"
            >
              {{ p }}
            </p>
            <ul v-if="s.bullets?.length" class="mt-5 space-y-3">
              <li
                v-for="b in s.bullets"
                :key="b"
                class="flex gap-3 leading-relaxed text-fg-body"
              >
                <AppIcon
                  name="check"
                  :size="18"
                  class="mt-1 shrink-0 text-accent"
                />
                <span>{{ b }}</span>
              </li>
            </ul>
          </section>
        </div>

        <!-- Yon tomonda: muqova va yuklab olish -->
        <aside class="lg:sticky lg:top-24 lg:self-start">
          <div class="mx-auto w-56 lg:w-full">
            <ShotImage
              v-if="post.cover"
              :name="post.cover"
              :alt="text.title"
              sizes="(min-width: 1024px) 272px, 224px"
              priority
            />
          </div>

          <div
            v-if="product?.slug === 'sozbog'"
            class="mt-6 flex flex-col items-center lg:items-start"
          >
            <PlayStoreLink />
            <NuxtLink
              :to="localePath('/work/sozbog')"
              class="group mt-4 inline-flex items-center gap-2 text-sm
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
        </aside>
      </div>
    </article>

    <section class="mx-auto max-w-6xl px-5 sm:px-8">
      <FollowStrip />
    </section>

    <section v-if="others.length" class="mx-auto max-w-6xl px-5 pt-16 sm:px-8">
      <h2 class="text-2xl font-bold sm:text-3xl">
        {{ content.news.allNews }}
      </h2>
      <div class="mt-8 grid gap-5 lg:grid-cols-2">
        <NewsCard v-for="n in others" :key="n.slug" :post="n" />
      </div>
    </section>
  </div>
</template>
