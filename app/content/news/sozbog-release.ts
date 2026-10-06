import type { NewsPost } from './index'

/**
 * Soʻzbogʻ Google Play'da hammaga ochiq chiqdi (2026-10).
 *
 * ⚠️ Faktlar tekshirilgan: 1 300+ bosqich (LUGAT.md: 1345), 2 363 soʻz,
 * 145 mavzu, 1.5.0 dagi yangiliklar (ulashish, Google bilan kirish, nomsiz
 * statistika). Soʻz topilganda uning MAVZUSI chiqadi, lugʻaviy maʼnosi
 * emas — "maʼnosini koʻrsatadi" deb yozma.
 */
export const sozbogRelease: NewsPost = {
  slug: 'sozbog-out-on-google-play',
  date: '2026-10-06',
  tag: 'release',
  product: 'sozbog',
  cover: '01_home',
  text: {
    en: {
      title: 'Soʻzbogʻ is out on Google Play',
      description:
        'Soʻzbogʻ, the Uzbek word puzzle from TONG GAMES, is now open to everyone on Google Play. Free, works offline, 1,300+ levels and 2,363 Uzbek words.',
      excerpt:
        'Our Uzbek word puzzle has left closed testing. Anyone with an Android phone can now install it for free — here is what is inside and what is new.',
      body: [
        {
          heading: 'Open to everyone',
          paragraphs: [
            'Soʻzbogʻ, the Uzbek-language word puzzle we have been building at TONG GAMES, is now publicly available on Google Play. Until now it was in closed testing, so only invited testers could install it. That stage is over: anyone with an Android phone can find it on Google Play and install it for free.',
            'It is the first TONG GAMES title to reach a public release, and the one we have put the most care into.',
          ],
        },
        {
          heading: 'What kind of game it is',
          paragraphs: [
            'A wheel of letters sits at the bottom of the screen. Drag your finger from letter to letter and a word forms; if it is a real word, it drops into the crossword above. Fill the whole grid and the level is done.',
            'Uzbek letters written with two characters — oʻ, gʻ, sh, ch — are a single tile on the wheel and a single cell in the grid, the way they should be. Every word you find also shows the topic it belongs to, so each level quietly builds a small vocabulary around one theme.',
          ],
        },
        {
          heading: 'What is inside',
          bullets: [
            '1,300+ levels built from 2,363 hand-checked Uzbek words in 145 topics',
            'A daily puzzle, the same for everyone, with a streak that grows the longer you keep coming back',
            'Bonus words: every extra real word you find earns a coin',
            'Achievements that track your progress without nagging notifications',
            'Works fully offline, with no account needed',
            'Free to play: coins can be bought but never have to be, and ads appear only when you press the button to watch one',
          ],
        },
        {
          heading: 'New in this version',
          paragraphs: ['The public release comes with three additions:'],
          bullets: [
            'A Share button, so you can send a level or daily puzzle result to friends',
            'Optional Google sign-in that backs up your progress to the cloud, so you can carry on after changing phones',
            'Anonymous gameplay statistics that show us which levels are too hard, so we can fix them',
          ],
        },
        {
          heading: 'Tell us what you think',
          paragraphs: [
            'If you enjoy Soʻzbogʻ, a rating or a short review on Google Play helps other people find it more than anything else. If you spot a missing word or a mistake, write to us — the dictionary was compiled by hand, so we fix it by hand too.',
          ],
        },
      ],
    },

    uz: {
      title: 'Soʻzbogʻ Google Play’da chiqdi',
      description:
        'TONG GAMES’ning oʻzbekcha soʻz jumbogʻi Soʻzbogʻ endi Google Play’da hamma uchun ochiq. Bepul, internetsiz ishlaydi, 1 300+ bosqich va 2 363 oʻzbekcha soʻz.',
      excerpt:
        'Oʻzbekcha soʻz jumbogʻimiz yopiq testdan chiqdi. Endi Android telefoni bor har kim uni bepul oʻrnata oladi — ichida nimalar borligi va nima yangiligi haqida.',
      body: [
        {
          heading: 'Endi hamma uchun ochiq',
          paragraphs: [
            'TONG GAMES’da yasayotgan oʻzbek tilidagi soʻz jumbogʻimiz — Soʻzbogʻ — endi Google Play’da rasman chiqdi. Shu paytgacha u yopiq testda edi va faqat taklif qilingan sinovchilar oʻrnata olardi. Bu bosqich tugadi: Android telefoni bor har kim uni Google Play’dan topib, bepul oʻrnatishi mumkin.',
            'Bu — TONG GAMES’ning ommaga chiqqan birinchi oʻyini va biz eng koʻp mehnat qilgan oʻyin.',
          ],
        },
        {
          heading: 'Bu qanday oʻyin',
          paragraphs: [
            'Ekranning pastida harflar gʻildiragi turadi. Barmogʻingizni harfdan harfga suring — soʻz hosil boʻladi; agar u haqiqiy soʻz boʻlsa, yuqoridagi krossvordga tushadi. Butun katakni toʻldirsangiz, bosqich tugaydi.',
            'Ikki belgi bilan yoziladigan oʻzbek harflari — oʻ, gʻ, sh, ch — gʻildirakda ham, katakda ham bitta harf boʻlib turadi, xuddi boʻlishi kerakdek. Topgan har bir soʻzingiz qaysi mavzuga tegishli ekani ham koʻrsatiladi, shuning uchun har bosqich bitta mavzu atrofida kichik soʻz boyligini yigʻib beradi.',
          ],
        },
        {
          heading: 'Ichida nimalar bor',
          bullets: [
            '145 mavzudagi qoʻlda tekshirilgan 2 363 oʻzbekcha soʻzdan yasalgan 1 300 dan ortiq bosqich',
            'Kunlik jumboq — hamma uchun bir xil, ketma-ket oʻynagan sari mukofot oʻsib boradi',
            'Bonus soʻzlar: qoʻshimcha topgan har bir haqiqiy soʻz tanga beradi',
            'Yutuqlar — “qaytib kel” degan bildirishnomalarsiz, qay darajaga yetganingizni koʻrsatadi',
            'Internetsiz toʻliq ishlaydi, hisob ochish shart emas',
            'Bepul: tangani sotib olsa boʻladi, lekin shart emas; reklama esa faqat uni koʻrish tugmasini bossangiz chiqadi',
          ],
        },
        {
          heading: 'Bu versiyada nima yangi',
          paragraphs: ['Ommaviy chiqish bilan birga uchta yangilik keldi:'],
          bullets: [
            '«Ulashish» tugmasi — bosqich yoki kunlik jumboq natijangizni doʻstlaringizga yuboring',
            'Ixtiyoriy Google bilan kirish — progressingiz bulutda saqlanadi, telefon almashtirsangiz ham davom etasiz',
            'Nomsiz oʻyin statistikasi — qaysi bosqichlar juda qiyinligini koʻrib, tuzatamiz',
          ],
        },
        {
          heading: 'Fikringizni ayting',
          paragraphs: [
            'Soʻzbogʻ yoqqan boʻlsa, Google Play’da baho yoki qisqa sharh qoldiring — bu oʻyinni boshqalar topishiga hammasidan koʻproq yordam beradi. Yetishmayotgan soʻz yoki xato koʻrsangiz, bizga yozing: lugʻat qoʻlda yigʻilgan, xatolarni ham qoʻlda tuzatamiz.',
          ],
        },
      ],
    },

    ru: {
      title: 'Soʻzbogʻ вышел в Google Play',
      description:
        'Soʻzbogʻ — словесная головоломка на узбекском языке от TONG GAMES — теперь доступна всем в Google Play. Бесплатно, без интернета, 1300+ уровней и 2363 слова.',
      excerpt:
        'Наша головоломка на узбекском языке вышла из закрытого тестирования. Теперь её может бесплатно установить любой владелец Android-телефона — рассказываем, что внутри и что нового.',
      body: [
        {
          heading: 'Теперь для всех',
          paragraphs: [
            'Soʻzbogʻ — словесная головоломка на узбекском языке, которую мы делаем в TONG GAMES, — официально вышла в Google Play. До сих пор игра была в закрытом тестировании, и установить её могли только приглашённые тестировщики. Этот этап позади: любой владелец Android-телефона может найти её в Google Play и установить бесплатно.',
            'Это первая игра TONG GAMES, вышедшая в публичный релиз, и та, в которую мы вложили больше всего труда.',
          ],
        },
        {
          heading: 'Что это за игра',
          paragraphs: [
            'Внизу экрана — колесо с буквами. Ведите пальцем от буквы к букве, и складывается слово; если оно настоящее, то попадает в кроссворд сверху. Заполните всю сетку — и уровень пройден.',
            'Узбекские буквы, которые пишутся двумя символами, — oʻ, gʻ, sh, ch — занимают одну плитку на колесе и одну клетку в сетке, как и должно быть. А для каждого найденного слова показывается тема, к которой оно относится, так что каждый уровень незаметно собирает небольшой словарь вокруг одной темы.',
          ],
        },
        {
          heading: 'Что внутри',
          bullets: [
            'Более 1300 уровней из 2363 проверенных вручную узбекских слов в 145 темах',
            'Ежедневная головоломка — одна для всех, и награда растёт, если играть несколько дней подряд',
            'Бонусные слова: каждое найденное сверх задания настоящее слово приносит монету',
            'Достижения, которые показывают прогресс без назойливых уведомлений',
            'Полностью работает без интернета, аккаунт не нужен',
            'Бесплатно: монеты можно купить, но это не обязательно, а реклама появляется только по нажатию кнопки',
          ],
        },
        {
          heading: 'Что нового в этой версии',
          paragraphs: ['Вместе с публичным релизом пришли три новшества:'],
          bullets: [
            'Кнопка «Поделиться» — отправьте результат уровня или ежедневной головоломки друзьям',
            'Необязательный вход через Google — прогресс сохраняется в облаке, и после смены телефона можно продолжить',
            'Анонимная игровая статистика — видим, какие уровни слишком сложные, и исправляем их',
          ],
        },
        {
          heading: 'Расскажите, что думаете',
          paragraphs: [
            'Если Soʻzbogʻ вам понравился, оценка или короткий отзыв в Google Play помогут другим найти игру лучше всего остального. Заметили пропущенное слово или ошибку — напишите нам: словарь собран вручную, и исправляем мы его тоже вручную.',
          ],
        },
      ],
    },
  },
}
