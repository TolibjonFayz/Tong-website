<template>
  <div class="flex min-h-screen flex-col">
    <DawnBackdrop />

    <!-- Klaviatura bilan yuradiganlar uchun: menyuni o'tkazib yuborish -->
    <a
      href="#main"
      class="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4
             focus:z-[60] focus:rounded-lg focus:bg-surface-2 focus:px-4
             focus:py-2 focus:text-sm focus:text-fg"
    >Skip to content</a>

    <AppHeader />

    <main id="main" class="grow">
      <slot />
    </main>

    <AppFooter />
  </div>
</template>
