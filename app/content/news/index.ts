/**
 * Yangiliklar / blog.
 *
 * Har bir maqola — alohida fayl, ichida uchala til birga turadi. Shunda
 * yangi maqola qo'shish oson: shu papkaga bitta fayl qo'shasan va
 * pastdagi `NEWS` ro'yxatiga yozasan. Sahifa, sitemap va JSON-LD o'zi
 * yasaladi.
 *
 * Manzil hamma tilda bir xil slug bilan: `/news/<slug>`, `/uz/news/<slug>`,
 * `/ru/news/<slug>`.
 */
import type { Section } from '../types'
import { sozbogRelease } from './sozbog-release'

export type NewsTag = 'release' | 'update' | 'studio'

/** Bitta maqolaning bitta tildagi matni. */
export interface NewsPostText {
  title: string
  /** Qidiruv natijasidagi tavsif (meta description), ~150 belgi */
  description: string
  /** Ro'yxatda va maqola boshida turadigan qisqa kirish */
  excerpt: string
  body: Section[]
}

export interface NewsPost {
  slug: string
  /** Chop etilgan sana, ISO: '2026-10-06' */
  date: string
  tag: NewsTag
  /** `utils/products.ts` dagi slug — maqola qaysi mahsulot haqida */
  product?: string
  /** public/screenshots/ dagi skrinshot nomi — maqola rasmi */
  cover?: string
  text: Record<'en' | 'uz' | 'ru', NewsPostText>
}

/** Yangisi birinchi. */
export const NEWS: NewsPost[] = [sozbogRelease].sort((a, b) =>
  b.date.localeCompare(a.date),
)

export const newsBySlug = (slug: string) => NEWS.find(n => n.slug === slug)
