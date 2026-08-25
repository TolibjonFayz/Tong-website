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
 * Ishlatish: node scripts/write-404.mjs
 */

import { readFile, writeFile, access } from 'node:fs/promises'

const SRC = '.output/public/not-found/index.html'
const DEST = '.output/public/404.html'

async function exists(p) {
  try { await access(p); return true }
  catch { return false }
}

async function main() {
  if (!(await exists(SRC))) {
    console.error(`✗ ${SRC} topilmadi — avval "npm run generate" ishlating.`)
    process.exit(1)
  }

  const html = await readFile(SRC, 'utf8')
  await writeFile(DEST, html, 'utf8')

  const kb = (Buffer.byteLength(html) / 1024).toFixed(1)
  console.log(`✔ 404.html yozildi (${kb} KB, haqiqiy HTML)`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
