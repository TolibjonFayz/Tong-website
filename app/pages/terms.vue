<script setup lang="ts">
const content = useSiteContent()
const localePath = useLocalePath()

usePageSeo('terms', { ogTitle: content.value.terms.heading })

useSchemaOrg([
  defineBreadcrumb({
    itemListElement: [
      { name: content.value.nav.home, item: localePath('/') },
      { name: content.value.footer.terms, item: localePath('/terms') },
    ],
  }),
])
</script>

<template>
  <div>
    <PageHero
      :title="content.terms.heading"
      :lead="content.terms.lead"
    >
      <p class="mt-6 text-sm text-fg0">
        {{ content.legal.updated }}:
        <time datetime="2026-08-25">{{ content.legal.updatedDate }}</time>
      </p>
    </PageHero>

    <section class="py-12">
      <LegalDoc :sections="content.terms.sections" />
    </section>
  </div>
</template>
