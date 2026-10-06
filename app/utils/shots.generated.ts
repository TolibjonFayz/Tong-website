/**
 * ⚠️ AVTOMATIK YASALGAN FAYL — QO'LDA TAHRIRLAMA.
 * Yangilash: node scripts/prepare-assets.mjs
 */

export interface ShotMeta {
  widths: number[]
  w: number
  h: number
}

export const SHOTS: Record<string, ShotMeta> = {
  '01_home': { widths: [360, 720], w: 720, h: 1592 },
  '02_game': { widths: [360, 720], w: 720, h: 1592 },
  '03_map': { widths: [360, 720], w: 720, h: 1592 },
  '04_shop': { widths: [360, 720], w: 720, h: 1592 },
  'bilim-manba-1': { widths: [640, 1280], w: 1280, h: 800 },
  'block-combo-1': { widths: [360, 720], w: 720, h: 1599 },
  'block-combo-2': { widths: [360, 720], w: 720, h: 1599 },
  'block-combo-3': { widths: [360, 720], w: 720, h: 1599 },
  'tashkent-city-1': { widths: [640, 1280], w: 1280, h: 1230 },
  'tashkent-city-2': { widths: [640, 1280], w: 1280, h: 1230 },
  'tashkent-city-3': { widths: [640, 1280], w: 1280, h: 730 },
  'tashkent-city-map': { widths: [640, 1248], w: 1248, h: 1248 },
}
