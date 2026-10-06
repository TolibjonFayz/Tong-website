import tailwindcss from '@tailwindcss/vite'

// Saytning asosiy manzili. Domen olinganda FAQAT shu qatorni o'zgartirasan.
const SITE_URL = 'https://tong-inc.pages.dev'

export default defineNuxtConfig({
  compatibilityDate: '2025-08-25',
  devtools: { enabled: false },

  modules: ['@nuxtjs/seo', '@nuxtjs/i18n', '@nuxt/fonts'],

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  // --- Sayt darajasidagi SEO asoslari -------------------------------------
  site: {
    url: SITE_URL,
    name: 'TONG INC',
    description:
      'TONG INC (TONG GAMES) is a game and app studio in Tashkent, Uzbekistan: the Soʻzbogʻ word puzzle on Google Play and the Bilim Manba knowledge platform.',
    defaultLocale: 'en',
    // Cloudflare Pages `/news` ni `/news/` ga 308 bilan yo'naltiradi.
    // Canonical va sitemap ham `/` bilan tugasa, Google yo'naltirilgan
    // manzilni "asosiy" deb ko'rmaydi.
    trailingSlash: true,
  },

  // --- Ikki til: ingliz `/`, o'zbek `/uz` ---------------------------------
  i18n: {
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    baseUrl: SITE_URL,
    locales: [
      { code: 'en', language: 'en-US', name: 'English', dir: 'ltr', file: 'en.json' },
      { code: 'uz', language: 'uz-UZ', name: 'Oʻzbekcha', dir: 'ltr', file: 'uz.json' },
      { code: 'ru', language: 'ru-RU', name: 'Русский', dir: 'ltr', file: 'ru.json' },
    ],
    // Statik saytda brauzer tiliga qarab yo'naltirish ishlamaydi — o'chirdik.
    detectBrowserLanguage: false,
  },

  // --- Robots -------------------------------------------------------------
  // Hech narsani bloklamaymiz: Google sahifani chizish uchun CSS va JS ni
  // ham yuklashi kerak. /_nuxt/ ni yopsak — sayt buzuq ko'rinadi.
  robots: {
    allow: ['/'],
  },

  // --- Sitemap ------------------------------------------------------------
  sitemap: {
    autoLastmod: true,
    // `/not-found` faqat 404.html yasash uchun bor — u haqiqiy sahifa
    // emas, shuning uchun sitemap'ga tushmasligi kerak.
    exclude: ['/not-found', '/*/not-found'],
    xslColumns: [
      { label: 'URL', width: '60%' },
      { label: 'Last modified', select: 'sitemap:lastmod', width: '40%' },
    ],
  },

  // --- OG rasmlari build paytida chiziladi --------------------------------
  // OG rasmlari build paytida chiziladi. Komponent har sahifada
  // `usePageSeo` ichida aniq ko'rsatiladi (TongOg), shuning uchun bu yerda
  // faqat o'lcham va shrift turadi.
  ogImage: {
    defaults: {
      width: 1200,
      height: 630,
    },
  },

  // --- Shriftlar sayt ichiga yuklanadi (Google CDN'ga bog'lanmaydi) -------
  fonts: {
    defaults: {
      weights: [400, 500, 600, 700],
      styles: ['normal'],
      subsets: ['latin', 'latin-ext'],
    },
  },

  app: {
    head: {
      // Sahifa sarlavhalarimizda brend allaqachon yozilgan, shuning uchun
      // @nuxtjs/seo avtomatik qo'shadigan "| TONG INC" ni o'chiramiz —
      // aks holda "TONG INC ... | TONG INC" bo'lib qoladi.
      titleTemplate: '%s',
      htmlAttrs: { lang: 'en' },
      link: [
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
      // Sahifa chizilishidan OLDIN ishlaydi: foydalanuvchi tanlagan rejimni
      // <html> ga qo'yadi. Bo'lmasa, qorong'i tanlagan odam har safar
      // bir lahza oq ekranni ko'rardi.
      script: [
        {
          innerHTML:
            'try{var t=localStorage.getItem("tong-theme");'
            + 'if(t==="dark"||t==="light")'
            + 'document.documentElement.setAttribute("data-theme",t)}catch(e){}',
          tagPosition: 'head',
        },
      ],
      meta: [
        { name: 'theme-color', content: '#fbfaf7', media: '(prefers-color-scheme: light)' },
        { name: 'theme-color', content: '#060912', media: '(prefers-color-scheme: dark)' },
        { name: 'format-detection', content: 'telephone=no' },
        // Google Search Console — sayt egaligini tasdiqlash
        { name: 'google-site-verification', content: 'c51qlw4d85UoT3hc_2Z5Hh8dpoXHGnMQSENIK52qJOQ' },
      ],
    },
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/uz', '/robots.txt', '/sitemap.xml'],
      failOnError: false,
    },
  },

  typescript: {
    strict: true,
  },
})
