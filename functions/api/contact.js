/**
 * Aloqa formasini qabul qilib, xabarni Telegramga (va xohlasang emailga)
 * yuboradi.
 *
 * ⚠️ NEGA SERVERDA, BRAUZERDA EMAS?
 * Telegram boti kaliti (token) — parol kabi narsa. Uni brauzerdagi
 * JavaScript ichiga yozsak, saytni ochgan HAR KIM uni ko'radi va sening
 * boting bilan istagan narsa qila oladi. Shuning uchun kalit faqat shu
 * yerda — Cloudflare serverida — turadi va tashqariga chiqmaydi.
 *
 * Bu fayl Cloudflare Pages Functions. Sayt chiqarilganda Cloudflare uni
 * o'zi topib, `/api/contact` manziliga ulaydi. Alohida server kerak emas.
 *
 * KERAKLI SOZLAMALAR (Cloudflare Pages → Settings → Variables and Secrets):
 *   TELEGRAM_BOT_TOKEN  — @BotFather bergan token
 *   TELEGRAM_CHAT_ID    — sening Telegram chat raqaming
 *   WEB3FORMS_KEY       — (ixtiyoriy) email ham kelishi uchun
 *
 * Hech qaysi qo'yilmagan bo'lsa, funksiya 503 qaytaradi va sayt avtomatik
 * eski usulga — pochta ilovasini ochishga — qaytadi. Ya'ni sayt hech
 * qachon "buzuq" bo'lib qolmaydi.
 */

const LIMITS = {
  name: 100,
  email: 200,
  subject: 200,
  message: 5000,
}

function clean(value, max) {
  if (typeof value !== 'string') return ''
  return value.trim().slice(0, max)
}

/** Telegram HTML rejimida bu uchta belgi maxsus — ularni zararsizlantiramiz */
function esc(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
    },
  })
}

async function sendTelegram(env, form) {
  const token = env.TELEGRAM_BOT_TOKEN
  const chatId = env.TELEGRAM_CHAT_ID
  if (!token || !chatId) return { ok: false, skipped: true }

  const lines = [
    '<b>🌅 TONG INC — saytdan yangi xabar</b>',
    '',
    `<b>Kimdan:</b> ${esc(form.name || '—')}`,
    `<b>Email:</b> ${esc(form.email || '—')}`,
    `<b>Mavzu:</b> ${esc(form.subject || '—')}`,
    '',
    esc(form.message),
  ]

  const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text: lines.join('\n'),
      parse_mode: 'HTML',
      disable_web_page_preview: true,
    }),
  })

  return { ok: res.ok, skipped: false }
}

async function sendEmail(env, form) {
  const key = env.WEB3FORMS_KEY
  if (!key) return { ok: false, skipped: true }

  const res = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: JSON.stringify({
      access_key: key,
      subject: `TONG INC sayt: ${form.subject || 'xabar'}`,
      from_name: form.name || 'Sayt mehmoni',
      email: form.email || 'noreply@tong-inc.pages.dev',
      message: form.message,
    }),
  })

  return { ok: res.ok, skipped: false }
}

export async function onRequestPost(context) {
  const { request, env } = context

  let body
  try {
    body = await request.json()
  }
  catch {
    return json({ ok: false, error: 'bad_json' }, 400)
  }

  // Bot tuzogʻi: bu maydon foydalanuvchiga koʻrinmaydi. Toʻldirilgan boʻlsa —
  // demak uni robot toʻldirgan. Robotga "yubordik" deb javob beramiz,
  // lekin hech narsa yubormaymiz.
  if (clean(body.company, 100)) {
    return json({ ok: true, delivered: [] })
  }

  const form = {
    name: clean(body.name, LIMITS.name),
    email: clean(body.email, LIMITS.email),
    subject: clean(body.subject, LIMITS.subject),
    message: clean(body.message, LIMITS.message),
  }

  if (form.message.length < 2) {
    return json({ ok: false, error: 'empty_message' }, 400)
  }

  const [tg, mail] = await Promise.all([
    sendTelegram(env, form).catch(() => ({ ok: false, skipped: false })),
    sendEmail(env, form).catch(() => ({ ok: false, skipped: false })),
  ])

  const delivered = []
  if (tg.ok) delivered.push('telegram')
  if (mail.ok) delivered.push('email')

  // Ikkalasi ham sozlanmagan — sayt eski usulga qaytsin
  if (tg.skipped && mail.skipped) {
    return json({ ok: false, error: 'not_configured' }, 503)
  }

  if (delivered.length === 0) {
    return json({ ok: false, error: 'delivery_failed' }, 502)
  }

  return json({ ok: true, delivered })
}

/** GET bilan kirilsa — sozlanganini tekshirish uchun qisqa javob */
export async function onRequestGet(context) {
  const { env } = context
  return json({
    ok: true,
    telegram: Boolean(env.TELEGRAM_BOT_TOKEN && env.TELEGRAM_CHAT_ID),
    email: Boolean(env.WEB3FORMS_KEY),
  })
}
