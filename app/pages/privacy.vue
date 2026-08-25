<script setup lang="ts">
const content = useSiteContent()
const localePath = useLocalePath()

usePageSeo('privacy', { ogTitle: content.value.privacy.heading })

useSchemaOrg([
  defineBreadcrumb({
    itemListElement: [
      { name: content.value.nav.home, item: localePath('/') },
      { name: content.value.footer.privacy, item: localePath('/privacy') },
    ],
  }),
])
</script>

<template>
  <div>
    <PageHero
      :title="content.privacy.heading"
      :lead="content.privacy.lead"
    >
      <p class="mt-6 text-sm text-fg0">
        {{ content.legal.updated }}:
        <time datetime="2026-08-25">{{ content.legal.updatedDate }}</time>
      </p>
    </PageHero>

    <section class="py-12">
      <LegalDoc :sections="content.privacy.sections" />
    </section>
  </div>
</template>
