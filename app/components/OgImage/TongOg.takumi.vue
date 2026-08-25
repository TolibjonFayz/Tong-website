<script setup lang="ts">
/**
 * Har sahifa uchun build paytida chiziladigan 1200x630 OG rasmi.
 *
 * ⚠️ Bu shablonni Satori chizadi — u brauzer emas. Shuning uchun:
 *  - faqat flexbox ishlaydi (grid, float yo'q)
 *  - har bir element uchun display: flex ko'rsatilgan bo'lishi kerak
 *  - background-clip: text ishlamaydi, shuning uchun gradient matn yo'q
 * Shu sababli bu yerda oddiy inline stillar ishlatilgan.
 */
withDefaults(
  defineProps<{
    title?: string
    description?: string
    label?: string
  }>(),
  {
    title: 'TONG INC',
    description: 'Mobile game & app studio in Tashkent, Uzbekistan',
    label: '',
  },
)
</script>

<template>
  <div
    style="
      width: 1200px;
      height: 630px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background-color: #070c22;
      padding: 70px;
      font-family: Inter, sans-serif;
      position: relative;
    "
  >
    <!-- Tong nuri: yuqori o'ng burchakdan tushadigan issiq gradient -->
    <div
      style="
        position: absolute;
        top: -340px;
        right: -240px;
        width: 900px;
        height: 900px;
        display: flex;
        border-radius: 450px;
        background-image: radial-gradient(
          circle,
          rgba(255, 122, 47, 0.55) 0%,
          rgba(255, 61, 119, 0.28) 42%,
          rgba(7, 12, 34, 0) 70%
        );
      "
    />
    <div
      style="
        position: absolute;
        bottom: -300px;
        left: -220px;
        width: 760px;
        height: 760px;
        display: flex;
        border-radius: 380px;
        background-image: radial-gradient(
          circle,
          rgba(168, 85, 247, 0.35) 0%,
          rgba(7, 12, 34, 0) 68%
        );
      "
    />

    <!-- Yuqori qator: brend -->
    <div style="display: flex; align-items: center;">
      <div
        style="
          display: flex;
          width: 62px;
          height: 62px;
          border-radius: 16px;
          background-image: linear-gradient(
            120deg,
            #ffb347 0%,
            #ff7a2f 35%,
            #ff3d77 70%,
            #a855f7 100%
          );
        "
      />
      <div
        style="
          display: flex;
          margin-left: 20px;
          font-size: 30px;
          font-weight: 700;
          color: #f4f6fd;
          letter-spacing: -0.5px;
        "
      >
        TONG INC
      </div>
      <div
        v-if="label"
        style="
          display: flex;
          margin-left: 20px;
          padding: 7px 16px;
          border-radius: 999px;
          border: 1px solid rgba(255, 179, 71, 0.45);
          font-size: 20px;
          font-weight: 600;
          color: #ffb347;
        "
      >
        {{ label }}
      </div>
    </div>

    <!-- Asosiy matn -->
    <div style="display: flex; flex-direction: column;">
      <div
        style="
          display: flex;
          font-size: 62px;
          font-weight: 700;
          line-height: 1.12;
          color: #ffffff;
          letter-spacing: -1.6px;
          max-width: 1000px;
        "
      >
        {{ title }}
      </div>
      <div
        v-if="description"
        style="
          display: flex;
          margin-top: 26px;
          font-size: 28px;
          line-height: 1.4;
          color: #9aa5c8;
          max-width: 900px;
        "
      >
        {{ description }}
      </div>
    </div>

    <!-- Pastki chiziq -->
    <div style="display: flex; align-items: center;">
      <div
        style="
          display: flex;
          width: 120px;
          height: 6px;
          border-radius: 3px;
          background-image: linear-gradient(90deg, #ffb347 0%, #ff3d77 100%);
        "
      />
      <div
        style="
          display: flex;
          margin-left: 24px;
          font-size: 24px;
          color: #7b87ab;
        "
      >
        Tashkent, Uzbekistan
      </div>
    </div>
  </div>
</template>
