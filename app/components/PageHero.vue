<script setup lang="ts">
/** Ichki sahifalarning yuqori qismi — bir xil ko'rinish uchun. */
defineProps<{
  eyebrow?: string
  title: string
  lead?: string
}>()
</script>

<template>
  <section class="mx-auto max-w-6xl px-5 pb-4 pt-16 sm:px-8 sm:pt-24">
    <p
      v-if="eyebrow"
      class="font-display text-xs font-bold uppercase tracking-[0.18em]
             text-accent"
    >
      {{ eyebrow }}
    </p>

    <h1
      class="mt-3 max-w-3xl text-4xl font-bold leading-[1.08] sm:text-5xl
             lg:text-6xl"
    >
      {{ title }}
    </h1>

    <p
      v-if="lead"
      class="mt-6 max-w-2xl text-lg leading-relaxed text-fg-muted"
    >
      {{ lead }}
    </p>

    <slot />
  </section>
</template>
