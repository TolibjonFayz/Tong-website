# TONG INC — rasmiy sayt

Nuxt 4 da qurilgan statik sayt. Uch til: ingliz (asosiy, `/`),
oʻzbek (`/uz`), rus (`/ru`). Yorugʻ va qorongʻi rejim bor.

---

## Kundalik ish

```bash
npm run dev
```

Brauzerda `http://localhost:3000` ochiladi. Faylni saqlasang — sahifa
oʻzi yangilanadi.

```bash
npm run generate
```

Butun saytni tayyor HTML qilib `.output/public/` papkasiga chiqaradi.
**Internetga aynan shu papka yuklanadi.**

```bash
npm run typecheck
```

Kodda xato bor-yoʻqligini tekshiradi. Hech narsa chiqmasa — hammasi joyida.

---

## Matnni oʻzgartirish

Saytdagi **hamma matn** uchta faylda:

| Fayl | Til | Manzil |
|---|---|---|
| `app/content/en.ts` | Inglizcha | `/` |
| `app/content/uz.ts` | Oʻzbekcha | `/uz` |
| `app/content/ru.ts` | Ruscha | `/ru` |

Uchalasi bir xil tuzilishda (`app/content/types.ts` belgilaydi). Bir
tilda bor narsa boshqasida ham boʻlishi shart — boʻlmasa
`npm run typecheck` darrov xato beradi va qayerdaligini aytadi.

**Muhim maʼlumotlar** (email, Play Store havolasi, soʻz soni) alohida
turadi: `app/utils/site.ts`.

---

## Yangi mahsulot qoʻshish

Ikki qadam:

1. `app/utils/products.ts` ga band qoʻsh — `slug`, turi (`game`/`app`),
   holati (`live` / `testing` / `building`), havola, tayyorlik foizi,
   karta rangi. Bular tilga bogʻliq emas, shuning uchun bir joyda.
2. Uchala `content/*.ts` faylida `products` ichiga oʻsha `slug` bilan
   matn yoz: nomi, qisqa taʼrifi, xususiyatlari.

Mahsulot `/work` sahifasida oʻzi paydo boʻladi. Agar unga toʻliq sahifa
kerak boʻlsa, `hasPage: true` qoʻy va `app/pages/work/<slug>.vue`
yarat (`sozbog.vue` yoki `tashkent-city.vue` dan nusxa ol).

---

## Yorugʻ / qorongʻi rejim

Standart holat — **telefon sozlamasiga qarab**. Foydalanuvchi
sarlavhadagi tugmani bossa, tanlovi brauzerida saqlanadi va shundan
keyin telefon sozlamasi taʼsir qilmaydi.

Ranglar `app/assets/css/main.css` da, bitta joyda:

- `--l-*` — yorugʻ palitra
- `--d-*` — qorongʻi palitra
- `--t-*` — hozir ishlatilayotgani

Komponentlarda aniq rang emas, **maʼnoviy nom** ishlatiladi:
`bg-bg`, `bg-surface`, `text-fg`, `text-fg-muted`, `border-border`,
`text-accent`. Shuning uchun rangni oʻzgartirish uchun faqat
`main.css` ni tahrirlash yetarli.

---

## 404 sahifasi

Koʻrinishi — `app/components/NotFoundView.vue`. U ikki joyda
ishlatiladi: `app/error.vue` (Nuxt xato ushlaganda) va
`app/pages/not-found.vue` (build paytida haqiqiy HTML yasash uchun).

`npm run generate` oxirida `scripts/write-404.mjs` oʻsha HTML ni
`404.html` ga koʻchiradi — Cloudflare shuni beradi. Bu boʻlmasa 404
sahifasi boʻm-boʻsh chiqib, faqat JS yuklangach paydo boʻlardi.

---

## Aloqa formasi — Telegramga ulash

Saytdagi forma toʻldirilganda xabar **toʻgʻridan-toʻgʻri Telegramingga**
keladi. Buning uchun bir marta sozlash kerak (5 daqiqa).

### 1. Bot yaratish

1. Telegramda **@BotFather** ni och.
2. `/newbot` deb yoz.
3. Botga nom ber (masalan `TONG INC sayt`), keyin username ber
   (masalan `tong_inc_site_bot` — oxiri `_bot` boʻlishi shart).
4. BotFather senga **token** beradi, shunaqa koʻrinishda:
   `8123456789:AAH...`. Uni nusxalab qoʻy — bu **parol kabi narsa**,
   hech kimga koʻrsatma va kodga yozma.

### 2. Oʻz chat raqamingni bilish

1. Telegramda **@userinfobot** ni och va `/start` bos.
2. U senga `Id: 123456789` deb raqam beradi — bu sening **chat ID** ing.
3. Endi oʻzingning yangi botingni ochib, unga bir marta `/start` yoz.
   (Bot senga birinchi boʻlib yoza olmaydi, sen boshlashing kerak.)

### 3. Cloudflare ga qoʻyish

Cloudflare Pages loyihangda:
**Settings → Variables and Secrets → Add**

| Nomi | Qiymati | Turi |
|---|---|---|
| `TELEGRAM_BOT_TOKEN` | BotFather bergan token | **Secret** |
| `TELEGRAM_CHAT_ID` | @userinfobot bergan raqam | Text |

> `TELEGRAM_BOT_TOKEN` ni albatta **Secret** deb belgila — shunda u
> Cloudflare panelida ham koʻrinmay qoladi.

Keyin **Deployments → oxirgisi → Retry deployment** bos. Tamom.

### 4. Emailga ham kelishini xohlasang (ixtiyoriy)

1. `https://web3forms.com` ga kir, emailingni yoz.
2. Ular senga **access key** yuboradi.
3. Cloudflare ga yana bitta oʻzgaruvchi qoʻsh:
   `WEB3FORMS_KEY` = oʻsha kalit (Secret).

Shundan keyin har xabar **ham Telegramga, ham emailga** keladi.

### Ishlayotganini tekshirish

Sayt manziliga `/api/contact` qoʻshib brauzerda och. Shunaqa javob kelsa —
hammasi joyida:

```json
{"ok":true,"telegram":true,"email":false}
```

`telegram: false` boʻlsa — oʻzgaruvchilar notoʻgʻri yoki deploy qaytadan
qilinmagan.

### Agar sozlanmagan boʻlsa nima boʻladi

Sayt **buzilmaydi**. Forma yuborilganda "yuborilmadi" degan xabar
chiqadi va yonida ikkita zaxira yoʻl koʻrsatiladi: pochta ilovasida
ochish (yozgan matni bilan birga) va Telegram havolasi. Yaʼni odam
baribir sen bilan bogʻlana oladi.

---

## Rasmlarni yangilash

Skrinshotlar oʻzgarsa yoki yangisi qoʻshilsa:

```bash
node scripts/prepare-assets.mjs
```

Bu skript oʻyin papkasidan rasmlarni oladi, WebP ga siqadi, logotipdan
favicon kesib oladi va `public/` ga joylaydi. Manba yoʻllari skript
boshida yozilgan.

Oxirida u `app/utils/shots.generated.ts` faylini ham yangilaydi — u
yerda har bir rasmning haqiqiy oʻlchami turadi. Shu tufayli
`<img width height>` doim toʻgʻri boʻladi va sahifa yuklanayotganda
sakramaydi. **Yangi skrinshot qoʻshsang, shu skriptni ishlat.**

---

## Nashr qilish — Cloudflare Pages

Bir marta sozlaysan, keyin har oʻzgarishda faqat `git push` qilasan.

### 1-qadam. Kodni GitHub ga qoʻyish

```bash
git init
git add .
git commit -m "TONG INC sayti"
```

Keyin GitHub da yangi **private** repozitoriy och (`tong-inc-site` deb
atasang boʻladi), va uning sahifasida koʻrsatilgan buyruqlarni nusxala —
odatda shunaqa:

```bash
git remote add origin https://github.com/FOYDALANUVCHI/tong-inc-site.git
git branch -M main
git push -u origin main
```

### 2-qadam. Cloudflare hisobini ochish

1. `https://dash.cloudflare.com/sign-up` — email va parol bilan
   roʻyxatdan oʻt (bepul, karta soʻralmaydi).
2. Emailingga kelgan xatdagi havolani bosib tasdiqla.

### 3-qadam. Loyihani ulash

1. Chap menyuda **Workers & Pages** → **Create** → **Pages** →
   **Connect to Git**.
2. GitHub ni ulashga ruxsat ber, `tong-inc-site` repozitoriysini tanla.
3. Sozlamalar oynasida shularni yoz:

| Maydon | Qiymat |
|---|---|
| Framework preset | `Nuxt.js` (yoki `None`) |
| Build command | `npm run generate` |
| Build output directory | `.output/public` |
| Node version | `22` yoki undan yuqori |

> Node versiyasini `Settings → Environment variables` boʻlimida
> `NODE_VERSION` = `22.19.0` deb qoʻshsang ham boʻladi.

4. **Save and Deploy** ni bos. 2–3 daqiqada sayt tayyor boʻladi va
   `https://tong-inc-site.pages.dev` kabi manzil beradi.

### 4-qadam. Manzilni saytga aytish

Cloudflare bergan manzil `nuxt.config.ts` dagidan farq qilsa, faylning
boshidagi bitta qatorni oʻzgartir:

```ts
const SITE_URL = 'https://tong-inc.pages.dev'
```

Keyin `git add . && git commit -m "manzil" && git push` — Cloudflare
oʻzi qayta yigʻadi.

> ⚠️ Bu qator muhim: sitemap, canonical va OG rasm havolalari shundan
> olinadi. Notoʻgʻri boʻlsa Google saytni indekslamaydi.

---

## Keyinroq: oʻz domeningni ulash

`tonginc.com` yoki `tong.uz` olganingda:

1. Cloudflare Pages loyihasida **Custom domains** → **Set up a domain**.
2. Domenni yoz, Cloudflare koʻrsatgan DNS yozuvlarini domen sotgan
   joyda qoʻsh.
3. `nuxt.config.ts` dagi `SITE_URL` ni yangi domenga oʻzgartir va push qil.

---

## Google ga koʻrsatish

Sayt chiqqandan keyin:

1. `https://search.google.com/search-console` ga kir.
2. **Add property** → **URL prefix** → sayt manzilini yoz.
3. Egaligini tasdiqlash uchun **HTML tag** usulini tanla — Google
   `<meta name="google-site-verification" ...>` beradi. Uni
   `nuxt.config.ts` dagi `app.head.meta` roʻyxatiga qoʻsh, push qil,
   keyin **Verify** bos.
4. **Sitemaps** boʻlimiga oʻt va `sitemap_index.xml` deb yoz.

Shundan keyin Google sahifalarni oʻzi topa boshlaydi. Birinchi
natijalar odatda 1–2 hafta ichida chiqadi.

---

## Nima qayerda

```
functions/
  api/contact.js      ← formani Telegramga yuboradigan server funksiyasi
app/
  content/            ← BUTUN MATN (en.ts, uz.ts, ru.ts + types.ts)
  utils/site.ts       ← email, havolalar, raqamlar
  utils/products.ts   ← mahsulotlar roʻyxati (tilga bogʻliq emas)
  utils/shots.generated.ts  ← ⚠️ avtomatik yasaladi, tegma
  components/         ← qayta ishlatiladigan boʻlaklar
  pages/              ← sahifalar (uchala til uchun bitta fayl)
  error.vue           ← 404 / xato sahifasi
  assets/css/main.css ← RANGLAR va shriftlar
public/               ← rasmlar, favicon, _headers
scripts/              ← rasm tayyorlash va 404 skriptlari
nuxt.config.ts        ← SITE_URL, tillar, modullar
```

Sahifalar bitta nusxada yoziladi — `/uz/...` va `/ru/...` manzillarini
i18n moduli avtomatik yasaydi.

**Sahifalar:** `/`, `/work`, `/work/sozbog`, `/work/tashkent-city`,
`/about`, `/contact`, `/privacy`, `/terms`, `/support` — uch tilda
jami 27 ta sahifa.

---

## Eslatma: `npm install` xatosi

Bu kompyuterdagi npm versiyasida maʼlum kamchilik bor — oddiy
`npm install` `Cannot read properties of null (reading 'edgesOut')`
degan xato beradi. Yechimi:

```bash
npm install --legacy-peer-deps
```
"# Tong-website" 
