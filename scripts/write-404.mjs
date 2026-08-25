/**
 * `nuxt generate` dan keyin ishlaydi.
 *
 * Nuxt statik build'da `404.html` ni BO'SH qoldiradi — u faqat JS
 * yuklangach to'ladi. Natijada topilmagan manzilga kirgan odam bir
 * lahza oq ekran ko'radi, sarlavha ham bo'lmaydi.
 *
 * Shuning uchun `/not-found` sahifasining tayyor HTML'ini o'sha joyga
 * ko'chiramiz. Cloudflare Pages va Netlify ikkalasi ham topilmagan
 * manzilga `404.html` ni 404 kodi bilan beradi.
 *
 * ⚠️ Natija papkasi joyi barqaror emas:
 *   - Oddiy kompyuterda ("nuxt generate")           → .output/public
 *   - Cloudflare Pages'ning o'zida (build paytida)  → dist
 * Sababi: Cloudflare build muhitida CF_PAGES degan belgi bo'ladi, Nitro
 * shuni ko'rib "cloudflare-pages-static" nomli boshqa qolipni tanlaydi,
 * u esa natijani "dist" ga yozadi. Shuning uchun bu yerda IKKALASINI HAM
 * tekshiramiz — qaysi biri bor bo'lsa, o'shani ishlatamiz.
 *
 * Ishlatish: node scripts/write-404.mjs
 */

import { readFile, writeFile, access } from 'node:fs/promises'
import { join } from 'node:path'

const CANDIDATES = ['.output/public', 'dist']

async function exists(p) {
  try { await access(p); return true }
  catch { return false }
}

async function findOutDir() {
  for (const dir of CANDIDATES) {
    if (await exists(join(dir, 'not-found', 'index.html'))) return dir
  }
  return null
}

async function main() {
  const outDir = await findOutDir()

  if (!outDir) {
    console.error(
      `✗ not-found/index.html hech qaysi papkada topilmadi `
      + `(tekshirildi: ${CANDIDATES.join(', ')}). `
      + `Avval "npm run generate" ishlating.`,
    )
    process.exit(1)
  }

  const src = join(outDir, 'not-found', 'index.html')
  const dest = join(outDir, '404.html')

  const html = await readFile(src, 'utf8')
  await writeFile(dest, html, 'utf8')

  const kb = (Buffer.byteLength(html) / 1024).toFixed(1)
  console.log(`✔ ${dest} yozildi (${kb} KB, haqiqiy HTML)`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
