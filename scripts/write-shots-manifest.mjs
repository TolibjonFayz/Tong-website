/**
 * public/screenshots/ ni skanerlab, har bir rasmning haqiqiy o'lchamini
 * TypeScript fayliga yozadi.
 *
 * Nega kerak: <img> ga width/height yozilmasa, sahifa yuklanayotganda
 * matn sakraydi (CLS). O'lchamlarni qo'lda yozsak — rasm almashganda
 * eskirib qoladi. Shuning uchun har safar shu skriptdan yasaladi.
 *
 * Ishlatish:  node scripts/write-shots-manifest.mjs
 * (prepare-assets.mjs ham oxirida shuni chaqiradi)
 */

import { readdir, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import sharp from 'sharp'

const DIR = 'public/screenshots'
const OUT = 'app/utils/shots.generated.ts'

export async function writeShotsManifest() {
  const files = (await readdir(DIR)).filter(f => f.endsWith('.webp'))

  const groups = new Map()
  for (const f of files) {
    const m = f.match(/^(.+)-(\d+)\.webp$/)
    if (!m) continue
    const base = m[1]
    if (!groups.has(base)) groups.set(base, [])
    groups.get(base).push(Number(m[2]))
  }

  const lines = []
  for (const [base, widths] of [...groups].sort((a, b) => a[0].localeCompare(b[0]))) {
    widths.sort((a, b) => a - b)
    const biggest = widths[widths.length - 1]
    const meta = await sharp(join(DIR, `${base}-${biggest}.webp`)).metadata()
    lines.push(
      `  '${base}': { widths: [${widths.join(', ')}], `
      + `w: ${meta.width}, h: ${meta.height} },`,
    )
  }

  const body = [
    '/**',
    " * ⚠️ AVTOMATIK YASALGAN FAYL — QO'LDA TAHRIRLAMA.",
    ' * Yangilash: node scripts/prepare-assets.mjs',
    ' */',
    '',
    'export interface ShotMeta {',
    '  widths: number[]',
    '  w: number',
    '  h: number',
    '}',
    '',
    'export const SHOTS: Record<string, ShotMeta> = {',
    ...lines,
    '}',
    '',
  ].join('\n')

  await writeFile(OUT, body, 'utf8')
  console.log(`  manifest  ${OUT}  (${lines.length} ta rasm)`)
}

// To'g'ridan-to'g'ri ishga tushirilsa (import qilinganda emas)
if (process.argv[1]?.endsWith('write-shots-manifest.mjs')) {
  writeShotsManifest().catch((e) => {
    console.error(e)
    process.exit(1)
  })
}
