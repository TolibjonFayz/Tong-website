/**
 * Rasmlarni tayyorlaydi: logotipdan favicon kesib oladi, skrinshotlarni
 * WebP'ga siqadi. Bir marta ishlatiladi, natijasi public/ ga tushadi.
 *
 * Ishlatish:  node scripts/prepare-assets.mjs
 */

import { mkdir, access } from 'node:fs/promises'
import { join } from 'node:path'
import sharp from 'sharp'
import { writeShotsManifest } from './write-shots-manifest.mjs'

const SRC_LOGO = 'C:/Users/Tolibjon/Claude/soz-oyin-app/assets/images/tong_games.png'
const SRC_ICON = 'C:/Users/Tolibjon/Claude/soz-oyin-app/build/store_icon.png'
const SRC_SHOTS = 'C:/Users/Tolibjon/Claude/soz-oyin-app/docs/screenshots'
const SRC_BLOCK = 'C:/Users/Tolibjon/Downloads/Block Combo Mobile UI Kit/exports'

const PUB = 'public'

// Quyosh belgisining aniq chegarasi piksel bo'yicha o'lchandi:
// belgi x 131..375, y 119..345. Undan keyin 20px tirqish, so'ng TONG
// so'zining T harfi boshlanadi (x=396) — uni kesimga qo'shib yubormaymiz.
// Markaz (253, 232), tomoni 260px kvadrat olamiz.
const MARK = { left: 123, top: 102, width: 260, height: 260 }

// Logotipning haqiqiy fon rangi — burchak pikselidan o'qildi (#070c22).
const NIGHT = { r: 7, g: 12, b: 34 }

async function exists(p) {
  try { await access(p); return true } catch { return false }
}

async function ensureDirs() {
  for (const d of ['images', 'screenshots']) {
    await mkdir(join(PUB, d), { recursive: true })
  }
}

async function buildIcons() {
  const mark = sharp(SRC_LOGO).extract(MARK)
  const markPng = await mark.png().toBuffer()

  // Turli o'lchamdagi ikonkalar. Belgi atrofida biroz nafas joyi qoldiramiz.
  const sizes = [
    { name: 'favicon-16.png', size: 16, pad: 0 },
    { name: 'favicon-32.png', size: 32, pad: 1 },
    { name: 'apple-touch-icon.png', size: 180, pad: 14 },
    { name: 'icon-192.png', size: 192, pad: 15 },
    { name: 'icon-512.png', size: 512, pad: 40 },
  ]

  // Sayt ichida ishlatiladigan kichik logo: sarlavhada 32px, futerda 36px
  // ko'rinadi. 192px PNG ni o'sha joyga qo'ysak, 54 KB behuda ketardi.
  for (const size of [64, 96]) {
    await sharp(markPng)
      .resize(size, size, { fit: 'contain', background: NIGHT })
      .webp({ quality: 88 })
      .toFile(join(PUB, `images/mark-${size}.webp`))
    console.log(`  logo    mark-${size}.webp`.padEnd(32) + `${size}x${size}`)
  }

  for (const { name, size, pad } of sizes) {
    const inner = size - pad * 2
    const resized = await sharp(markPng)
      .resize(inner, inner, { fit: 'contain', background: NIGHT })
      .toBuffer()

    await sharp({
      create: { width: size, height: size, channels: 3, background: NIGHT },
    })
      .composite([{ input: resized, top: pad, left: pad }])
      .png({ compressionLevel: 9 })
      .toFile(join(PUB, name))

    console.log(`  ikonka  ${name.padEnd(22)} ${size}x${size}`)
  }
}

async function buildLogos() {
  // To'liq logotip — saytning yuqorisida va OG rasmida ishlatiladi.
  await sharp(SRC_LOGO)
    .resize(900, null, { withoutEnlargement: true })
    .webp({ quality: 90 })
    .toFile(join(PUB, 'images/tong-games-logo.webp'))
  console.log('  logo    tong-games-logo.webp   900w')

  await sharp(SRC_LOGO)
    .resize(1200, 630, { fit: 'contain', background: NIGHT })
    .png({ compressionLevel: 9 })
    .toFile(join(PUB, 'images/og-default.png'))
  console.log('  og      og-default.png         1200x630')

  if (await exists(SRC_ICON)) {
    for (const size of [512, 256]) {
      await sharp(SRC_ICON)
        .resize(size, size)
        .webp({ quality: 90 })
        .toFile(join(PUB, `images/sozbog-icon-${size}.webp`))
      console.log(`  ikonka  sozbog-icon-${size}.webp`.padEnd(32) + `${size}x${size}`)
    }
    await sharp(SRC_ICON)
      .resize(512, 512)
      .png({ compressionLevel: 9 })
      .toFile(join(PUB, 'images/sozbog-icon.png'))
    console.log('  ikonka  sozbog-icon.png        512x512')
  }
}

async function buildShots() {
  const names = ['01_home', '02_game', '03_map', '04_shop']
  for (const n of names) {
    const src = join(SRC_SHOTS, `${n}.png`)
    if (!(await exists(src))) {
      console.log(`  ⚠ topilmadi: ${src}`)
      continue
    }
    // Telefon skrinshoti 1080x2388. Saytda hech qachon 480px dan keng
    // ko'rsatilmaydi, shuning uchun ikki o'lchamdan ortig'i shart emas.
    for (const w of [360, 720]) {
      await sharp(src)
        .resize(w, null, { withoutEnlargement: true })
        .webp({ quality: 82, effort: 6 })
        .toFile(join(PUB, `screenshots/${n}-${w}.webp`))
    }
    console.log(`  shot    ${n}`.padEnd(32) + '360w + 720w webp')
  }
}

/**
 * Block Combo — o'yinning o'z dizayn to'plamidan ekran va ikonka.
 * Fayllar boshqa papkada bo'lsa, bu qadam jimgina o'tkazib yuboriladi.
 */
async function buildBlockCombo() {
  if (!(await exists(SRC_BLOCK))) {
    console.log('  Block Combo dizayn papkasi topilmadi, otkazildi')
    return
  }

  // Ikonka: faylning pastida o'lcham namunalari bor, ularni kesib tashlaymiz.
  const iconSrc = join(SRC_BLOCK, '08-app-icon.png')
  if (await exists(iconSrc)) {
    const square = await sharp(iconSrc)
      .extract({ left: 0, top: 0, width: 1024, height: 1024 })
      .trim({ threshold: 5 })
      .toBuffer()
    for (const size of [256, 512]) {
      await sharp(square).resize(size, size, { fit: 'contain', background: NIGHT })
        .webp({ quality: 90 }).toFile(join(PUB, `images/block-combo-icon-${size}.webp`))
    }
    console.log('  ikonka  block-combo-icon      256 + 512')
  }

  const shots = [
    ['01-gameplay.png', 'block-combo-1'],
    ['03-combo.png', 'block-combo-2'],
    ['07-how-to-play.png', 'block-combo-3'],
  ]
  for (const [file, name] of shots) {
    const src = join(SRC_BLOCK, file)
    if (!(await exists(src))) continue
    for (const w of [360, 720]) {
      await sharp(src).flatten({ background: NIGHT })
        .resize(w, null, { withoutEnlargement: true })
        .webp({ quality: 82, effort: 6 })
        .toFile(join(PUB, `screenshots/${name}-${w}.webp`))
    }
    console.log(`  shot    ${name}`.padEnd(32) + '360w + 720w webp')
  }
}

async function main() {
  console.log('Rasmlar tayyorlanmoqda...\n')
  await ensureDirs()
  await buildIcons()
  await buildLogos()
  await buildShots()
  await buildBlockCombo()
  await writeShotsManifest()
  console.log('\nTayyor.')
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
