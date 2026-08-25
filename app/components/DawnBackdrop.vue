<script setup lang="ts">
/**
 * Sahifa ortidagi "tong otishi" fon nuri.
 *
 * Bu rasm emas — sof CSS gradient. Sababi tezlik: rasm bo'lsa yana bitta
 * so'rov va bir necha yuz kilobayt bo'lardi, gradient esa 0 bayt.
 *
 * Ranglar `--t-grad-*` dan olinadi, shuning uchun yorug' rejimda o'zi
 * yumshoq pushti-sariq tongga aylanadi. Kuchi `--t-glow` bilan boshqariladi.
 */
</script>

<template>
  <div
    aria-hidden="true"
    class="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
  >
    <!-- Asosiy fon -->
    <div class="absolute inset-0 bg-bg" />

    <!-- Ufqdan ko'tarilayotgan issiq nur -->
    <div
      class="animate-drift absolute left-1/2 top-[-18rem] h-[46rem] w-[70rem]
             -translate-x-1/2 rounded-full blur-[110px]"
      style="
        opacity: var(--t-glow);
        background: radial-gradient(
          closest-side,
          var(--t-grad-2) 0%,
          var(--t-grad-3) 45%,
          transparent 78%
        );
      "
    />

    <!-- Chapdagi binafsha soya — chuqurlik beradi -->
    <div
      class="absolute left-[-14rem] top-[14rem] h-[34rem] w-[34rem]
             rounded-full blur-[120px]"
      style="
        opacity: calc(var(--t-glow) * 0.72);
        background: radial-gradient(
          closest-side,
          var(--t-grad-4) 0%,
          transparent 72%
        );
      "
    />

    <!-- O'ngdagi ko'k nur -->
    <div
      class="absolute right-[-12rem] top-[36rem] h-[30rem] w-[30rem]
             rounded-full blur-[120px]"
      style="
        opacity: calc(var(--t-glow) * 0.58);
        background: radial-gradient(
          closest-side,
          #4c6fff 0%,
          transparent 72%
        );
      "
    />

    <!-- Yengil "shovqin" — gradientdagi halqalarni yashiradi -->
    <div
      class="absolute inset-0 opacity-[0.035] mix-blend-overlay"
      style="
        background-image: url('data:image/svg+xml;utf8,\
<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22140%22 height=%22140%22>\
<filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 \
numOctaves=%223%22/></filter>\
<rect width=%22140%22 height=%22140%22 filter=%22url(%23n)%22/></svg>');
      "
    />
  </div>
</template>
