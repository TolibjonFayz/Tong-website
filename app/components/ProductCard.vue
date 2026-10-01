<script setup lang="ts">
import type { Product } from '~/utils/products'

const props = defineProps<{ product: Product }>()

const content = useSiteContent()
const localePath = useLocalePath()

const text = computed(() => content.value.products[props.product.slug])

const statusLabel = computed(() => content.value.status[props.product.status])

const progressLabel = computed(() =>
  props.product.progress
    ? content.value.status.progress.replace('{n}', String(props.product.progress))
    : null,
)

const pageLink = computed(() =>
  props.product.hasPage ? localePath(`/work/${props.product.slug}`) : null,
)

/** Kartaning yuqorisidagi ingichka rangli chiziq — har mahsulotga o'ziniki */
const stripe = computed(
  () => `linear-gradient(100deg, ${props.product.hue[0]}, ${props.product.hue[1]})`,
)

const statusTone = computed(() => ({
  live: 'border-ok/40 text-ok',
  testing: 'border-accent-soft/40 text-accent-soft',
  building: 'border-border-strong text-fg-subtle',
}[props.product.status]))
</script>

<template>
  <article
    class="card-edge group relative flex flex-col overflow-hidden rounded-3xl
           backdrop-blur-sm transition-colors duration-300
           hover:border-accent/40"
  >
    <!-- Rangli chiziq -->
    <div class="h-1 w-full shrink-0" :style="{ backgroundImage: stripe }" />

    <div class="flex grow flex-col p-7 sm:p-8">
      <div class="flex flex-wrap items-center gap-3">
        <img
          v-if="product.icon"
          :src="`/images/${product.icon}-256.webp`"
          alt=""
          width="48"
          height="48"
          class="h-12 w-12 shrink-0 rounded-xl border border-border"
          loading="lazy"
          decoding="async"
        >
        <h3 class="text-2xl font-bold">
          <NuxtLink
            v-if="pageLink"
            :to="pageLink"
            class="transition-colors hover:text-accent"
          >
            {{ text?.name }}
            <!-- Butun karta bosiladigan bo'lsin -->
            <span class="absolute inset-0" aria-hidden="true" />
          </NuxtLink>
          <span v-else>{{ text?.name }}</span>
        </h3>

        <span
          class="inline-flex items-center gap-1.5 rounded-full border px-3
                 py-1 text-xs font-semibold"
          :class="statusTone"
        >
          <span
            class="h-1.5 w-1.5 rounded-full bg-current"
            :class="product.status === 'live' ? 'animate-pulse' : ''"
          />
          {{ statusLabel }}
        </span>
      </div>

      <p class="mt-2 text-sm font-medium text-fg-muted">
        {{ text?.tagline }}
      </p>

      <p class="mt-4 grow text-sm leading-relaxed text-fg-muted">
        {{ text?.blurb }}
      </p>

      <!-- Tayyorlik chizig'i -->
      <div v-if="progressLabel" class="mt-6">
        <div class="flex items-center justify-between text-xs text-fg-subtle">
          <span>{{ progressLabel }}</span>
        </div>
        <div
          class="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-surface-2"
          role="progressbar"
          :aria-valuenow="product.progress"
          aria-valuemin="0"
          aria-valuemax="100"
          :aria-label="text?.name"
        >
          <div
            class="h-full rounded-full"
            :style="{ width: `${product.progress}%`, backgroundImage: stripe }"
          />
        </div>
      </div>

      <!-- Xususiyatlar -->
      <dl
        v-if="text?.meta?.length"
        class="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs"
      >
        <div v-for="m in text.meta" :key="m.label">
          <dt class="text-fg-subtle">
            {{ m.label }}
          </dt>
          <dd class="mt-0.5 font-semibold text-fg-body">
            {{ m.value }}
          </dd>
        </div>
      </dl>

      <!-- Havolalar. `relative z-10` — karta ustidagi katta havola ostida
           qolib ketmasligi uchun. -->
      <div class="relative z-10 mt-7 flex flex-wrap items-center gap-4">
        <NuxtLink
          v-if="pageLink"
          :to="pageLink"
          class="inline-flex items-center gap-2 text-sm font-semibold
                 text-accent"
        >
          {{ content.cta.seeProduct }}
          <AppIcon
            name="arrow"
            :size="15"
            class="transition-transform duration-200 group-hover:translate-x-1"
          />
        </NuxtLink>

        <a
          v-if="product.url && product.status === 'live'"
          :href="product.url"
          target="_blank"
          rel="noopener"
          class="inline-flex items-center gap-2 rounded-xl border
                 border-border-strong px-4 py-2 text-xs font-semibold
                 text-fg-body transition-colors hover:border-accent"
        >
          <AppIcon
            :name="product.kind === 'game' ? 'play' : 'external'"
            :size="13"
          />
          {{ product.kind === 'game' ? content.cta.openGame : content.cta.openSite }}
        </a>
      </div>
    </div>

    <!-- Skrinshotlar tasmasi (bori bo'lsa) -->
    <div
      v-if="product.shots?.length"
      class="flex gap-3 overflow-x-auto border-t border-border px-7 py-6 sm:px-8"
    >
      <div
        v-for="shot in product.shots.slice(0, 4)"
        :key="shot"
        class="w-20 shrink-0 sm:w-24"
      >
        <ShotImage
          :name="shot"
          :alt="`${text?.name} — screenshot`"
          sizes="96px"
          rounded="rounded-xl"
        />
      </div>
    </div>
  </article>
</template>
