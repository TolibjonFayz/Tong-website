/**
 * Mahsulotlarning TILGA BOG'LIQ BO'LMAGAN ma'lumoti.
 *
 * Nomi, tavsifi va boshqa matnlar `content/en.ts` / `uz.ts` / `ru.ts` da —
 * chunki ular tarjima qilinadi. Havola, holat, tayyorlik foizi esa hamma
 * tilda bir xil, shuning uchun faqat shu yerda turadi.
 *
 * Yangi mahsulot qo'shish: shu ro'yxatga bitta band qo'sh, keyin uchala
 * content faylida `products` ichiga o'sha `slug` bilan matn yoz.
 * Tip tekshiruvi biror til unutilsa darrov aytadi.
 */

export type ProductKind = 'game' | 'app'

/**
 * live     — chiqqan, hamma o'ynay/ishlata oladi
 * testing  — yopiq testda, faqat taklif qilinganlar uchun
 * building — hali ishlab chiqilmoqda, tashqariga chiqmagan
 */
export type ProductStatus = 'live' | 'testing' | 'building'

export interface Product {
  slug: string
  kind: ProductKind
  status: ProductStatus
  /** Tashqi havola — faqat haqiqatan ochiq bo'lsa */
  url?: string
  /** Saytdagi to'liq sahifasi bormi */
  hasPage?: boolean
  /** Taxminiy tayyorlik (%) — faqat `building` uchun */
  progress?: number
  /** public/screenshots/ dagi fayl nomlari (kengaytmasiz) */
  shots?: string[]
  /** public/images/ dagi ikonka nomi (kengaytmasiz, -256/-512 qo'shiladi) */
  icon?: string
  /** Karta ustidagi bezak gradienti */
  hue: [string, string]
}

export const PRODUCTS: Product[] = [
  {
    slug: 'sozbog',
    kind: 'game',
    status: 'testing',
    url: 'https://play.google.com/store/apps/details?id=uz.sozbog.sozbog',
    hasPage: true,
    shots: ['01_home', '02_game', '03_map', '04_shop'],
    icon: 'sozbog-icon',
    hue: ['#6f9c6a', '#3f7f6f'],
  },
  {
    slug: 'tashkent-city',
    kind: 'game',
    status: 'live',
    url: 'https://uzbek-gta.vercel.app/',
    hasPage: true,
    shots: ['tashkent-city-3', 'tashkent-city-1', 'tashkent-city-2'],
    hue: ['#3f8fd0', '#7c5cd6'],
  },
  {
    slug: 'block-combo',
    kind: 'game',
    status: 'building',
    progress: 90,
    shots: ['block-combo-1', 'block-combo-2', 'block-combo-3'],
    icon: 'block-combo-icon',
    hue: ['#ff5a5a', '#4cc9f0'],
  },
  {
    // bilimmanba.uz — o'zbek tilidagi bilim/maqola platformasi (Nuxt + NestJS).
    // Ikonka saytdagi logodan yasalgan: public/images/bilim-manba-icon-*.webp
    slug: 'bilim-manba',
    kind: 'app',
    status: 'live',
    url: 'https://bilimmanba.uz',
    icon: 'bilim-manba-icon',
    hue: ['#5850ec', '#ff6584'],
  },
  {
    slug: 'ombor',
    kind: 'app',
    status: 'building',
    hue: ['#4c6fff', '#25c2a0'],
  },
]

export const productBySlug = (slug: string) =>
  PRODUCTS.find(p => p.slug === slug)

export const gamesOf = () => PRODUCTS.filter(p => p.kind === 'game')
export const appsOf = () => PRODUCTS.filter(p => p.kind === 'app')
