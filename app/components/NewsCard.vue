<script setup lang="ts">
import type { NewsPost } from '~/content/news'
import { productBySlug } from '~/utils/products'
import { formatDate } from '~/utils/date'

/** Yangiliklar ro'yxatidagi bitta maqola kartasi (bosh sahifa va /news). */
const props = defineProps<{ post: NewsPost }>()

const content = useSiteContent()
const localePath = useLocalePath()

const text = computed(() => props.post.text[content.value.locale])
const icon = computed(() =>
  props.post.product ? productBySlug(props.post.product)?.icon : undefined,
)
const link = computed(() => localePath(`/news/${props.post.slug}`))
</script>

<template>
  <article
    class="card-edge group relative flex gap-5 rounded-3xl p-7 backdrop-blur-sm
           transition-colors duration-300 hover:border-accent/40 sm:p-8"
  >
    <img
      v-if="icon"
      :src="`/images/${icon}-256.webp`"
      alt=""
      width="56"
      height="56"
      class="hidden h-14 w-14 shrink-0 rounded-2xl border border-border sm:block"
      loading="lazy"
      decoding="async"
    >

    <div class="min-w-0">
      <p class="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
        <span
          class="rounded-full border border-accent/40 px-2.5 py-0.5
                 font-semibold text-accent"
        >{{ content.news.tags[post.tag] }}</span>
        <time :datetime="post.date" class="text-fg-subtle">
          {{ formatDate(post.date, content.locale) }}
        </time>
      </p>

      <h3 class="mt-3 text-xl font-bold sm:text-2xl">
        <NuxtLink :to="link" class="transition-colors hover:text-accent">
          {{ text.title }}
          <!-- Butun karta bosiladigan bo'lsin -->
          <span class="absolute inset-0" aria-hidden="true" />
        </NuxtLink>
      </h3>

      <p class="mt-3 text-sm leading-relaxed text-fg-muted">
        {{ text.excerpt }}
      </p>

      <span
        class="mt-5 inline-flex items-center gap-2 text-sm font-semibold
               text-accent"
      >
        {{ content.news.readMore }}
        <AppIcon
          name="arrow"
          :size="15"
          class="transition-transform duration-200 group-hover:translate-x-1"
        />
      </span>
    </div>
  </article>
</template>
