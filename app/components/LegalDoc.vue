<script setup lang="ts">
import type { Section } from '~/content/types'

/**
 * Maxfiylik va Shartlar sahifalarining umumiy ko'rinishi.
 * Yon tomonda mundarija, o'ngda matn.
 */
const props = defineProps<{
  sections: Section[]
}>()

const content = useSiteContent()

/**
 * Sarlavhadan havola uchun id yasaydi.
 * O'zbekcha ʻ, ʼ va tirnoq belgilari olib tashlanadi; agar natija bo'sh
 * qolsa (masalan sarlavha butunlay boshqa alifboda bo'lsa), tartib raqam
 * ishlatiladi — shunda havola baribir ishlaydi.
 */
function slugify(text: string, index: number) {
  const slug = text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[ʻʼ‘’'"]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
  return slug || `section-${index + 1}`
}

const items = computed(() =>
  props.sections.map((s, i) => ({ ...s, id: slugify(s.heading, i) })),
)
</script>

<template>
  <div
    class="mx-auto grid max-w-6xl gap-12 px-5 pb-8 sm:px-8 lg:grid-cols-[16rem_1fr]"
  >
    <!-- Mundarija -->
    <nav
      class="lg:sticky lg:top-24 lg:self-start"
      :aria-label="content.legal.tocHeading"
    >
      <h2
        class="font-display text-xs font-bold uppercase tracking-[0.14em]
               text-fg0"
      >
        {{ content.legal.tocHeading }}
      </h2>
      <ol class="mt-4 space-y-1.5 text-sm">
        <li v-for="(s, i) in items" :key="s.id">
          <a
            :href="`#${s.id}`"
            class="block rounded-md px-2 py-1 text-fg-muted transition-colors
                   hover:bg-surface-2 hover:text-accent"
          >
            <span class="tabular-nums text-fg0">{{ i + 1 }}.</span>
            {{ s.heading }}
          </a>
        </li>
      </ol>
    </nav>

    <!-- Matn -->
    <div class="min-w-0">
      <article
        v-for="s in items"
        :id="s.id"
        :key="s.id"
        class="scroll-mt-24 border-b border-border py-8 first:pt-0
               last:border-0"
      >
        <h2 class="text-xl font-bold sm:text-2xl">
          {{ s.heading }}
        </h2>

        <p
          v-for="(p, i) in s.paragraphs ?? []"
          :key="`p-${i}`"
          class="mt-4 leading-relaxed text-fg-muted"
        >
          {{ p }}
        </p>

        <ul
          v-if="s.bullets?.length"
          class="mt-4 space-y-2.5"
        >
          <li
            v-for="(b, i) in s.bullets"
            :key="`b-${i}`"
            class="flex gap-3 leading-relaxed text-fg-muted"
          >
            <AppIcon
              name="check"
              :size="17"
              class="mt-1 shrink-0 text-accent"
            />
            <span>{{ b }}</span>
          </li>
        </ul>
      </article>
    </div>
  </div>
</template>
