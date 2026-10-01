<script setup lang="ts">
// Google Play talabi: Google bilan kirish bor ilovaning do'kon sahifasida
// hisobni o'chirish yo'lini ko'rsatadigan veb-havola bo'lishi shart —
// ilovani o'chirib yuborgan odam ham hisobini o'chira olishi uchun.
// Play Console → App content → Data safety → "Delete account URL".
const content = useSiteContent()
const localePath = useLocalePath()

usePageSeo('deleteAccount', { ogTitle: content.value.deleteAccount.heading })

useSchemaOrg([
  defineBreadcrumb({
    itemListElement: [
      { name: content.value.nav.home, item: localePath('/') },
      { name: content.value.footer.deleteAccount, item: localePath('/delete-account') },
    ],
  }),
])
</script>

<template>
  <div>
    <PageHero
      :title="content.deleteAccount.heading"
      :lead="content.deleteAccount.lead"
    >
      <p class="mt-6 text-sm text-fg0">
        {{ content.legal.updated }}:
        <time datetime="2026-10-01">{{ content.legal.privacyUpdatedDate }}</time>
      </p>
    </PageHero>

    <section class="py-12">
      <LegalDoc :sections="content.deleteAccount.sections" />
    </section>
  </div>
</template>
