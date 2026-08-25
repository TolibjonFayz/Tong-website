<script setup lang="ts">
/**
 * Kichik SVG ikonkalar to'plami.
 *
 * Nega alohida ikonka kutubxonasi emas? Chunki bizga 12 tacha ikonka
 * kerak — butun kutubxona uchun qo'shimcha paket va so'rov ortiqcha.
 * Bular to'g'ridan-to'g'ri HTML ichiga tushadi, ya'ni 0 ta so'rov.
 */
const props = defineProps<{
  name: string
  size?: number | string
}>()

const box = computed(() => props.size ?? 24)

const PATHS: Record<string, string> = {
  offline:
    'M5 12.5a7 7 0 0 1 11.9-5M19 11.5a7 7 0 0 1-11.9 5M3 3l18 18',
  shield:
    'M12 3 4.5 6v5.5c0 4.4 3.1 8.4 7.5 9.5 4.4-1.1 7.5-5.1 7.5-9.5V6L12 3Z',
  language:
    'M4 6h11M9 4v2c0 4.5-2 8-5 10M7.5 11c1.5 3 3.8 5.2 6.5 6M13 21l4-10 4 10M14.6 18h5',
  craft:
    'M12 3v4M12 17v4M5.6 5.6l2.9 2.9M15.5 15.5l2.9 2.9M3 12h4M17 12h4M5.6 18.4l2.9-2.9M15.5 8.5l2.9-2.9',
  levels:
    'M4 20V10M10 20V4M16 20v-8M22 20H2',
  meaning:
    'M4 5h16v11H9l-5 4V5ZM8 9.5h8M8 12.5h5',
  calendar:
    'M4 6h16v14H4zM4 10h16M8 3v4M16 3v4M9 15h2',
  bonus:
    'M12 3.5 14.4 9l6 .5-4.6 3.9 1.4 5.9-5.2-3.2L6.8 19.3l1.4-5.9L3.6 9.5l6-.5L12 3.5Z',
  trophy:
    'M7 4h10v5a5 5 0 0 1-10 0V4ZM7 6H4v1.5A3.5 3.5 0 0 0 7.5 11M17 6h3v1.5A3.5 3.5 0 0 1 16.5 11M10 14h4v3h-4zM8 20h8',
  coin:
    'M12 21c4.97 0 9-1.79 9-4V7c0-2.21-4.03-4-9-4S3 4.79 3 7v10c0 2.21 4.03 4 9 4Z M21 7c0 2.21-4.03 4-9 4S3 9.21 3 7 M21 12c0 2.21-4.03 4-9 4s-9-1.79-9-4',
  mail:
    'M3 6h18v12H3zM3 7l9 6 9-6',
  arrow:
    'M5 12h13M13 6l6 6-6 6',
  external:
    'M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5',
  check:
    'M4.5 12.5 9.5 17.5 19.5 6.5',
  copy:
    'M9 9h10v12H9zM5 15V3h10v2',
  menu:
    'M4 7h16M4 12h16M4 17h16',
  close:
    'M6 6l12 12M18 6 6 18',
  pin:
    'M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11ZM12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z',
  clock:
    'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM12 7v5.2l3.2 2',
  bug:
    'M8 8a4 4 0 0 1 8 0v5a4 4 0 0 1-8 0V8ZM4 11h4M16 11h4M5 6l2.5 2M19 6l-2.5 2M5 17l2.5-2M19 17l-2.5-2M12 21v-2',
  play:
    'M6 3.5 20 12 6 20.5V3.5Z',
  telegram:
    'M21.4 3.6 2.3 10.9a.6.6 0 0 0 0 1.1l4.8 1.6 1.9 5.9a.6.6 0 0 0 1 .2l2.7-2.7 4.7 3.4a.6.6 0 0 0 1-.3l3.6-15.7a.6.6 0 0 0-.6-.8ZM7.1 13.6 18.9 6',
  send:
    'M22 2 11 13M22 2l-7 20-4-9-9-4 20-7Z',
  car:
    'M4 14.5h16M5.5 14.5 7 8.6A2 2 0 0 1 8.9 7h6.2a2 2 0 0 1 1.9 1.6l1.5 5.9M4 14.5V19h3v-1.6h10V19h3v-4.5M7 17.4h.01M17 17.4h.01',
}

const d = computed(() => PATHS[props.name] ?? PATHS.check!)
const filled = computed(() => props.name === 'play')
</script>

<template>
  <svg
    :width="box"
    :height="box"
    viewBox="0 0 24 24"
    :fill="filled ? 'currentColor' : 'none'"
    :stroke="filled ? 'none' : 'currentColor'"
    stroke-width="1.6"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    <path :d="d" />
  </svg>
</template>
