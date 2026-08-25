<script setup lang="ts">
const content = useSiteContent()
const { toggle } = useTheme()
</script>

<template>
  <button
    type="button"
    class="theme-toggle rounded-lg p-2 text-fg-muted transition-colors
           hover:bg-surface-2 hover:text-fg"
    :aria-label="content.nav.theme"
    :title="content.nav.theme"
    @click="toggle"
  >
    <!--
      Ikkala ikonka ham HTML ga tushadi, qaysi biri ko'rinishini CSS hal
      qiladi. Nega shunday? Chunki sayt statik — server sahifani yasaganda
      foydalanuvchi qaysi rejimda ekanini bilmaydi. JS bilan qilsak,
      sahifa yuklanganda ikonka bir sakrab o'zgarardi.
    -->
    <svg
      class="i-sun"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.7"
      stroke-linecap="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>

    <svg
      class="i-moon"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.7"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z" />
    </svg>
  </button>
</template>

<style>
/* Standart holat — yorug' rejim: "qorong'iga o'tish" tugmasi, ya'ni oy. */
.theme-toggle .i-sun { display: none; }
.theme-toggle .i-moon { display: block; }

/* Telefon qorong'i rejimda va foydalanuvchi yorug'ni tanlamagan */
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) .theme-toggle .i-sun { display: block; }
  :root:not([data-theme="light"]) .theme-toggle .i-moon { display: none; }
}

/* Foydalanuvchi ataylab tanlagan — hamma narsadan ustun */
:root[data-theme="dark"] .theme-toggle .i-sun { display: block; }
:root[data-theme="dark"] .theme-toggle .i-moon { display: none; }
:root[data-theme="light"] .theme-toggle .i-sun { display: none; }
:root[data-theme="light"] .theme-toggle .i-moon { display: block; }
</style>
