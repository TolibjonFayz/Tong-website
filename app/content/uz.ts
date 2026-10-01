import type { SiteContent } from './types'

export const uz: SiteContent = {
  locale: 'uz',

  nav: {
    home: 'Bosh sahifa',
    work: 'Ishlarimiz',
    about: 'Biz haqimizda',
    support: 'Yordam',
    contact: 'Aloqa',
    menu: 'Menyuni ochish',
    close: 'Menyuni yopish',
    theme: 'Yorugʻ / qorongʻi',
    language: 'Til',
  },

  cta: {
    playStore: 'Google Play’da koʻrish',
    playStoreNote: 'Hozircha yopiq testda',
    openGame: 'Brauzerda oʻynash',
    seeProduct: 'Batafsil',
    allWork: 'Barcha ishlarimiz',
    contactUs: 'Bogʻlanish',
    copyEmail: 'Emailni nusxalash',
    copied: 'Nusxalandi',
    openMail: 'Bizga yozing',
    backToWork: 'Barcha ishlarga qaytish',
    readPrivacy: 'Maxfiylik siyosatini oʻqish',
    backHome: 'Bosh sahifaga qaytish',
  },

  status: {
    live: 'Chiqqan',
    testing: 'Yopiq testda',
    building: 'Ishlab chiqilmoqda',
    progress: '{n}% tayyor',
  },

  kind: {
    game: 'Oʻyin',
    games: 'Oʻyinlar',
    app: 'Dastur',
    apps: 'Dasturlar',
  },

  meta: {
    home: {
      title: 'TONG INC — Toshkentdagi oʻyin va dastur studiyasi',
      description:
        'TONG INC — Toshkentdagi mustaqil studiya. Mobil va brauzer oʻyinlari, biznes dasturlari va veb-mahsulotlar yaratamiz: Soʻzbogʻdan TASHKENT CITY gacha.',
    },
    work: {
      title: 'Ishlarimiz — TONG INC oʻyinlari va dasturlari',
      description:
        'TONG INC yaratgan va yaratayotgan hamma narsa: brauzer va mobil oʻyinlar, sotuvchilar uchun ombor dasturi, veb-mahsulotlar. Toshkentda yasalgan.',
    },
    sozbog: {
      title: 'Soʻzbogʻ — oʻzbekcha soʻz jumbogʻi | TONG INC',
      description:
        'Soʻzbogʻ — oʻzbek tilidagi soʻz jumbogʻi. Harflarni bogʻlab soʻz yasang, krossvordni toʻldiring va har bir topilgan soʻzning maʼnosini bilib oling. 2 363 soʻz, 145 mavzu, internetsiz ishlaydi.',
    },
    tashkentCity: {
      title: 'TASHKENT CITY — brauzerdagi ochiq dunyo oʻyini',
      description:
        'Brauzerda qayta qurilgan 5×5 km Toshkent boʻylab haydang: Chorsu, Registon, Teleminora, Magic City. 23 mashina, missiyalar, poygalar va kun/tun sikli. Bepul, oʻrnatish shart emas.',
    },
    about: {
      title: 'TONG INC haqida — Oʻzbekistondagi mustaqil studiya',
      description:
        'TONG INC — Sardor Ikhtiyorov Toshkentda tashkil qilgan kichik mustaqil studiya. Internetsiz ishlaydigan va sizdan roʻyxatdan oʻtishni soʻramaydigan oʻyin, dastur va veb-mahsulotlar yaratamiz.',
    },
    contact: {
      title: 'TONG INC bilan aloqa — Toshkent, Oʻzbekiston',
      description:
        'Hamkorlik, matbuot, nashr yoki yordam boʻyicha TONG INC bilan bogʻlaning. Har bir xatni oʻqiymiz va Toshkentdan javob beramiz.',
    },
    privacy: {
      title: 'Maxfiylik siyosati | TONG INC',
      description:
        'TONG INC sayti, oʻyinlari va dasturlari maʼlumotni qanday boshqaradi: majburiy hisob yoʻq, hech narsa sotilmaydi, va qurilmangizdan nima chiqishi hamda nima uchunligi ochiq yozilgan.',
    },
    terms: {
      title: 'Foydalanish shartlari | TONG INC',
      description:
        'TONG INC saytlari, oʻyinlari va ilovalaridan foydalanish shartlari: ilova ichidagi xaridlar, reklama va intellektual mulk masalalari.',
    },
    support: {
      title: 'Yordam va savol-javob | TONG INC',
      description:
        'TONG INC oʻyinlari va dasturlari boʻyicha yordam. Soʻzbogʻ, TASHKENT CITY, xaridlar va maxfiylik haqida koʻp beriladigan savollar.',
    },
    notFound: {
      title: 'Sahifa topilmadi | TONG INC',
      description: 'Bu sahifa mavjud emas. Orqaga qaytish yoʻli shu yerda.',
    },
  },

  home: {
    eyebrow: 'Oʻyin va dastur studiyasi · Toshkent, Oʻzbekiston',
    titleLead: 'Biz',
    titleAccent: 'tong bilan boshlaymiz',
    lead:
      '“Tong” — quyosh ufqdan chiqishidan oldingi payt. Osmonda rang bor, lekin kun hali boshlanmagan. Biz Toshkentdagi kichik studiyamiz: oʻyin, dastur va veb-mahsulotlarni ana shunday shoshmasdan yasaymiz.',
    stats: [
      { value: '5', label: 'Yasalgan va yasalayotgan mahsulot' },
      { value: '2 363', label: 'Qoʻlda yozilgan oʻzbekcha soʻz' },
      { value: '25 km²', label: '3D da qayta qurilgan Toshkent' },
      { value: '0', label: 'Yaratishingiz kerak boʻlgan hisob' },
    ],
    craft: {
      heading: 'Qanday ishlaymiz',
      lead:
        'Biz kichik studiyamiz — koʻp narsa qilishga ulgurmaymiz. Ana shu cheklov quyidagi hamma narsani belgilab beradi.',
      items: [
        {
          icon: 'offline',
          title: 'Avvalo internetsiz ishlasin',
          body:
            'Ilovalarimizda hamma narsa ichida: lugʻat, ovoz, shrift. Serverdan javob kutib turadigan yuklanish ekrani yoʻq, “internet yoʻq” degan devor yoʻq. Samolyot rejimida ham, metroda ham, bir chiziq signal bor qishloqda ham ishlaydi.',
        },
        {
          icon: 'shield',
          title: 'Roʻyxatdan oʻtish degan narsa yoʻq',
          body:
            'Hisob shart emas, email soʻralmaydi. Progressingiz qurilmangizda qoladi — agar oʻzingiz uni Google bilan saqlab qoʻyishni tanlamasangiz. Bundan tashqari faqat Google oʻzingiz soʻragan reklama yoki qilgan xaridingiz uchun kerak boʻlgani va nomsiz oʻyin statistikasi tashqariga chiqadi.',
        },
        {
          icon: 'language',
          title: 'Shu yer uchun yasalgan, tarjima qilingan emas',
          body:
            'Oʻzbek tilida bitta harfdek ishlaydigan, lekin ikkita belgi bilan yoziladigan harflar bor — oʻ, gʻ, sh, ch. Soʻz oʻyinimiz buni oʻzagida hisobga oladi. Haydash oʻyinimiz esa Toshkentning haqiqiy koʻchalarini qayta quradi. Farq ana shunda.',
        },
        {
          icon: 'craft',
          title: 'Avval tugatamiz, keyin chiqaramiz',
          body:
            'Yarim tayyor narsani chiqargandan koʻra, chiqishni kechiktirganimiz maʼqul. Birinchi oʻyinimizda bitta bosqich paydo boʻlgunicha oylab faqat lugʻat ustida ishlandi.',
        },
      ],
    },
    featured: {
      eyebrow: 'Asosiy mahsulotimiz',
      heading: 'Soʻzbogʻ',
      lead:
        'Oʻzbek tilidagi soʻz jumbogʻi. Harflarni bir-biriga bogʻlab soʻz yasaysiz, krossvordni toʻldirasiz va — biz uchun eng muhimi — soʻzni topgan zahotingiz uning maʼnosini oʻqiysiz.',
      bullets: [
        '145 ta mavzuli boʻlimda 1 300 dan ortiq bosqich',
        'Har soʻz maʼnosi bilan keladi — bosqichni tugatib, bir narsa bilib chiqasiz',
        'Kunlik jumboq va uzoq oʻynagan sari oʻsib boradigan ketma-ketlik',
        'Bonus soʻzlar: javobdan tashqari topgan har bir haqiqiy soʻz ham tanga beradi',
        'Internetsiz toʻliq ishlaydi, hisob ham, roʻyxatdan oʻtish ham shart emas',
      ],
    },
    alsoLive: {
      eyebrow: 'Hozir oʻynash mumkin',
      heading: 'TASHKENT CITY',
      lead:
        'Soʻzbogʻ test bosqichini tugatayotgan payt, erkin haydash oʻyinimiz allaqachon ochiq — brauzer oynasida haydab yuradigan 5×5 km Toshkent, oʻrnatish shart emas.',
    },
    closing: {
      heading: 'Birga ishlaymizmi?',
      body:
        'Nashr, buyurtma ishlari, mahalliylashtirish va matbuot boʻyicha suhbatga ochiqmiz. Studiya shunchalik kichikki, xatingiz toʻgʻridan-toʻgʻri qaror qabul qiladigan odamga boradi.',
    },
  },

  work: {
    heading: 'Ishlarimiz',
    lead:
      'Oʻyinlar, biznes dasturlari va veb-mahsulotlar — TONG INC chiqargan va hozir yasayotgan hamma narsa. Uzun roʻyxatdan koʻra, oʻzimiz faxrlanadigan bir nechta narsa maʼqul, shuning uchun bu sahifa ataylab sekin oʻsadi.',
    gamesHeading: 'Oʻyinlar',
    appsHeading: 'Dasturlar',
    moreHeading: 'Saytlar va buyurtma ishlari',
    moreBody:
      'Oʻz mahsulotlarimiz bilan bir qatorda saytlar va maxsus dasturlar ham yasaymiz. Biror narsa kerak boʻlsa — mahsulot sayti, ochilish sahifasi, ichki dastur — yozing va nima qilishi kerakligini ayting.',
  },

  products: {
    'sozbog': {
      name: 'Soʻzbogʻ',
      tagline: 'Oʻynayotganda oʻrgatadigan oʻzbekcha soʻz jumbogʻi',
      blurb:
        'Harflarni bogʻlab soʻz yasaysiz, krossvordni toʻldirasiz va soʻzni topgan zahotingiz uning maʼnosini oʻqiysiz. 145 mavzuli boʻlimda qoʻlda tekshirilgan 2 363 oʻzbekcha soʻz — hammasi internetsiz ishlaydi.',
      meta: [
        { label: 'Platforma', value: 'Android' },
        { label: 'Til', value: 'Oʻzbekcha' },
        { label: 'Narx', value: 'Bepul, ixtiyoriy xarid bilan' },
      ],
    },
    'tashkent-city': {
      name: 'TASHKENT CITY',
      tagline: 'Brauzer oynasida haydab yuradigan oʻzbekona ochiq dunyo',
      blurb:
        '5×5 km qayta qurilgan Toshkent: 23 xil mashina, taksi va yetkazish topshiriqlari, poygalar, avtosalonlar, kun/tun sikli va sekund hisoblagichli svetaforlar. Oʻrnatish ham, hisob ham kerak emas.',
      meta: [
        { label: 'Platforma', value: 'Brauzer (kompyuter va telefon)' },
        { label: 'Nimada yozilgan', value: 'three.js' },
        { label: 'Narx', value: 'Bepul' },
      ],
    },
    'block-combo': {
      name: 'Block Combo',
      tagline: 'Bloklarni tashla, qatorni toʻldir, kombo yigʻ',
      blurb:
        'Boʻlaklarni 8×8 taxtaga tashlaysiz, butun qator yoki ustunni toʻldirsangiz — u tozalanadi. Taymer yoʻq, hech narsa oʻzi tushmaydi: bir vaqtda uchta boʻlak beriladi va ularni joylashtira olishingiz kerak. Ketma-ket tozalasangiz kombo chizigʻi toʻladi — katta ochko oʻsha yerdan keladi.',
      meta: [
        { label: 'Platforma', value: 'Android' },
        { label: 'Bosqich', value: 'Bitgan, sinovda' },
      ],
    },
    'shelf-sort': {
      name: 'Shelf Sort',
      tagline: 'Javon-javon qilib tartibga sol',
      blurb:
        'Buyumlar birma-bir keladi, siz har birini qaysi javonga qoʻyishni hal qilasiz. Bir xilidan uchtasi yigʻilsa — yoʻqoladi. Javonda joy tor, shuning uchun bu aslida qaysi qarorga sodiq qolish haqidagi oʻyin. Xato qilsangiz: orqaga qaytarish, aralashtirish va yordam tugmalari bor.',
      meta: [
        { label: 'Platforma', value: 'Android' },
        { label: 'Bosqich', value: 'Ishlab chiqilmoqda' },
      ],
    },
    'ombor': {
      name: 'Ombor dasturi',
      tagline: 'Qoldiq, kirim-chiqim va qarzlar bitta joyda',
      blurb:
        'Doʻkon uchun dastur: istalgan paytda uchta narsani koʻrsatadi — qaysi mahsulotdan qancha qolgani, nima kirdi va nima chiqdi, hamda qarzlar. Ham mijozlar doʻkonga qancha qarzdorligi, ham doʻkon yetkazib beruvchilarga qancha qarzdorligi. Hozir ishlab chiqilmoqda, nomi hali aniqlanmagan.',
      meta: [
        { label: 'Kimga', value: 'Doʻkon va sotuvchilarga' },
        { label: 'Bosqich', value: 'Ishlab chiqilmoqda' },
      ],
    },
  },

  sozbog: {
    status: 'Yopiq testda',
    statusExplain:
      'Soʻzbogʻ hozir Google Play’da yopiq testda (closed testing). Yaʼni doʻkondagi sahifa faqat taklif qilingan sinovchilarga koʻrinadi — oʻyin hali ommaviy chiqmagan. Sinov guruhiga qoʻshilmoqchi boʻlsangiz, bizga yozing, qoʻshib qoʻyamiz.',
    intro: [
      'Soʻzbogʻ — oʻzbek tilidagi soʻz jumbogʻi. Ekranning pastida harflar gʻildiragi turadi; barmogʻingizni bir harfdan ikkinchisiga suryapsiz va yuqorida soʻz hosil boʻladi. Barmoqni koʻtarsangiz, soʻz haqiqiy boʻlsa, krossvord katagiga tushadi.',
      'Bu qismi tanish. Soʻzbogʻni boshqacha qiladigan narsa keyingisi: soʻzning maʼnosi chiqadi. Boshqa joydan koʻchirilgan lugʻat taʼrifi emas, aynan shu oʻyin uchun sodda qilib yozilgan izoh. Ziravorlar haqidagi bosqichni tugatsangiz, zira bilan murch nimaligini bilib chiqasiz.',
      'Butun lugʻat — 145 ta mavzuli boʻlimdagi 2 363 soʻz — qoʻlda yigʻilgan va qoʻlda tekshirilgan. Avtomatik yasalgan soʻz roʻyxati yoʻq, chunki oʻzbek tilida avtomatik roʻyxat behuda narsa chiqaradi.',
    ],
    featuresHeading: 'Oʻyinda nimalar bor',
    features: [
      {
        icon: 'levels',
        title: '1 300 dan ortiq bosqich',
        body:
          'Bosqichlar mavzuli boʻlimlarga jamlangan, nomlari esa shu yerda maʼnosi bor joy va tasvirlardan olingan — Chorbogʻ, Registon, Yulduzli tun. Har biri oʻzaro bogʻliq soʻzlar toʻplami.',
      },
      {
        icon: 'meaning',
        title: 'Har soʻzning maʼnosi',
        body:
          'Soʻz katakka tushgan zahoti maʼnosi chiqadi. Oʻyin aslida shuning uchun yaratilgan — uni til oʻrganayotgan bolaga ham, oʻzbekchasini qaytarmoqchi boʻlgan kattaga ham berish mumkin.',
      },
      {
        icon: 'calendar',
        title: 'Kunlik jumboq va ketma-ketlik',
        body:
          'Har kuni bitta yangi jumboq, hamma uchun bir xil. Ketma-ket kunlarda oʻynasangiz, ketma-ketligingiz oʻsadi; mukofot ham u bilan birga oʻsadi.',
      },
      {
        icon: 'bonus',
        title: 'Bonus soʻzlar',
        body:
          'Harflardan odatda bosqich soʻraganidan koʻproq haqiqiy soʻz chiqadi. Baribir toping — har biri bitta tanga beradi.',
      },
      {
        icon: 'trophy',
        title: 'Yutuqlar',
        body:
          'Qay darajaga yetganingizni koʻrsatib turadigan tinch maqsadlar. “Qaytib kel” deb turadigan bildirishnomalarsiz.',
      },
      {
        icon: 'offline',
        title: 'Internetsiz ishlaydi',
        body:
          'Lugʻat, ovozlar, musiqa va shriftlar — hammasi ilovaning ichida. Samolyot rejimi, tunnel, qamrov yoʻq qishloq — oʻyin uchun farqi yoʻq.',
      },
    ],
    howHeading: 'Qanday oʻynaladi',
    howBody: [
      'Harflar ekranning pastidagi gʻildirakda turadi. Birdan ikkinchisiga suring — soʻz barmogʻingiz ustida yigʻilib boradi. Qoʻyib yuborsangiz, soʻz tekshiriladi.',
      'Ikki lotin belgisi bilan yoziladigan oʻzbek harflari — oʻ, gʻ, sh, ch — gʻildirakda ham, katakda ham bitta harf sifatida hisoblanadi. Bu kichik tafsilotdek koʻrinadi. Aslida bu oʻzbek tili uchun yasalgandek his qilinadigan oʻyin bilan ingliz tili uchun yasalib, keyin yorligʻi almashtirilgan oʻyin oʻrtasidagi farq.',
      'Qotib qoldingizmi? Yordam tugmasi tanga evaziga bitta harfni ochib beradi. Tanga bosqichlarni tugatgandan, bonus soʻzlardan, kunlik ketma-ketlikdan yoki — xohlasangiz — ixtiyoriy reklamani koʻrishdan keladi. Butun oʻyinni bir tiyin sarflamasdan tugatsa boʻladi.',
    ],
    shotsHeading: 'Skrinshotlar',
    shots: [
      {
        src: '01_home',
        alt: 'Soʻzbogʻ bosh ekrani: joriy bosqich, tanga hisobi va kunlik ketma-ketlik, orqa fonda tong otayotgan qir manzarasi',
        caption: 'Bosh ekran — bosqichingiz, tangangiz, ketma-ketligingiz.',
      },
      {
        src: '02_game',
        alt: 'Soʻzbogʻ oʻyin ekrani: boʻsh krossvord kataklari va pastda oʻzbekcha harflar gʻildiragi',
        caption: 'Bosqich jarayonda. Harflar ustidan suring va soʻz yasang.',
      },
      {
        src: '03_map',
        alt: 'Soʻzbogʻ bosqichlar xaritasi: raqamlangan bosqichlar orasidan oʻtgan egri yoʻl',
        caption: 'Xarita — bosqichlar yoʻl boʻylab ketma-ket ochiladi.',
      },
      {
        src: '04_shop',
        alt: 'Soʻzbogʻ doʻkon ekrani: tanga ishlash yoki sotib olish mumkin',
        caption: 'Doʻkon. Bu yerdagi hamma narsa ixtiyoriy.',
      },
    ],
    detailsHeading: 'Maʼlumotlar',
    privacyHeading: 'Soʻzbogʻda maxfiylik',
    privacyBody:
      'Soʻzbogʻ sizdan telefon raqami, joylashuv, kontakt yoki rasm soʻramaydi va uni hech qanday hisobsiz oʻynasa boʻladi. Progressingiz telefoningizda yashaydi. Google bilan bir necha narsa bogʻlanadi: ixtiyoriy “reklama koʻrish” tugmasini bossangiz, Google AdMob mos reklama tanlash uchun qurilmangizning reklama identifikatorini oladi; tanga sotib olsangiz, toʻlovni boshidan oxirigacha Google Play boshqaradi; nomsiz oʻyin statistikasi bosqichlarni muvozanatlashga yordam beradi; Google bilan kirishni tanlasangiz esa progressingiz saqlanib, yangi telefonda davom ettirasiz. Karta maʼlumotingizni biz hech qachon koʻrmaymiz, reklama identifikatorini esa Android sozlamalaridan istalgan vaqtda tozalash mumkin.',
  },

  tashkentCity: {
    statusNote:
      'Bepul va hozir ochiq — brauzer oynasida, kompyuterda ham, telefonda ham ishlaydi. Oʻrnatish ham, hisob ham, toʻlov ham kerak emas.',
    intro: [
      'TASHKENT CITY — 5×5 kilometrlik qayta qurilgan Toshkent ustiga qurilgan erkin haydash oʻyini. Yurasiz, haydaysiz, topshiriq olasiz va pul ishlaysiz — joylarini esa tanib turasiz, chunki ular haqiqiy.',
      'Oʻyin butunlay brauzerda, three.js orqali ishlaydi. Yuklab olish ham, hisob yaratish ham shart emas: oynani ochasiz va shahardasiz. Kompyuterda klaviatura bilan, telefonda esa ekrandagi tugmalar bilan oʻynaladi.',
      'Shahar oddiy toʻrga oʻzbekcha nom yopishtirilgani emas. Chorsu bozori, Teleminora, Hazrati Imom, Kukeldash madrasasi, Magic City, aeroport, vokzal, Bunyodkor stadioni va Olimpiya shaharchasi — hammasi hayotdagiga yaqin joyda turadi va halqa yoʻl bilan bogʻlangan.',
    ],
    featuresHeading: 'Oʻyinda nimalar bor',
    features: [
      {
        icon: 'car',
        title: '23 mashina, haqiqiy oʻlchamda',
        body:
          'Har bir mashina oʻz uzunligi, quvvati va maksimal tezligi bilan yasalgan — Matiz Tahoedek yurmaydi. Old gʻildiraklar rulga qarab buriladi, premium avtosalonlarda yaxshirogʻini sotib olsa boʻladi.',
      },
      {
        icon: 'levels',
        title: 'Topshiriqlar va pul',
        body:
          'Shahar boʻylab taksi va yetkazish belgilari chiqadi. Belgiga yeting, yoʻlovchi yoki qutini oling, manzilga eltib bering — masofa uzoq boʻlsa, pul koʻp. Pulga ovqat, yoqilgʻi, tuzatish va mashina olinadi.',
      },
      {
        icon: 'trophy',
        title: 'Poygalar',
        body:
          'Xaritada belgilangan poyga yoʻnalishlari — Markaz aylanasi, Olimpiya ringi, Sergeli sprinti — vaqtingiz bilan.',
      },
      {
        icon: 'calendar',
        title: 'Kun va tun',
        body:
          'Toʻliq sutka taxminan olti daqiqada oʻtadi. Quyosh sharqdan chiqib gʻarbga botadi, osmon rangi oʻzgaradi, tunda yulduz va oy chiqadi. Koʻcha chiroqlari va faralar yoʻlni rostdan yoritadi.',
      },
      {
        icon: 'craft',
        title: 'Shahar oʻzini tutadi',
        body:
          'Svetaforlar mustaqil sikl bilan, sekund hisoblagichi bilan ishlaydi — haqiqiy Toshkentdagidek. Yaqinidan tez oʻtsangiz piyodalar qoʻrqadi. Mashina urilganda shikastlanadi — bamper tushadi, kuzov pachoq boʻladi — lekin portlamaydi.',
      },
      {
        icon: 'meaning',
        title: 'Ovqat, yoqilgʻi va tuzatish',
        body:
          'Shahar boʻylab ellikka yaqin tanish doʻkon — Evos, Oqtepa Lavash, Havas, Korzinka — osh, lagʻmon, somsa va shashlik sotadi, energiyangizni tiklaydi. Benzokolonka va avtoservislar mashinani yurgizib turadi.',
      },
    ],
    placesHeading: 'Tanish joylar',
    placesLead:
      'Xarita Toshkentning haqiqiy joylari va tumanlaridan qurilgan, joylashuvi hayotdagiga yaqin.',
    places: [
      'Chorsu bozori',
      'Toshkent teleminorasi',
      'Hazrati Imom majmuasi',
      'Kukeldash madrasasi',
      'Minor masjidi',
      'Navoiy teatri',
      'Mustaqillik maydoni',
      'Magic City',
      'Mega Planet',
      'Humo Arena',
      'Bunyodkor stadioni',
      'Olimpiya shaharchasi va Muz saroyi',
      'Yangi Oʻzbekiston bogʻi',
      'Botanika bogʻi',
      'Toshkent vokzali',
      'Toshkent aeroporti',
    ],
    controlsHeading: 'Boshqaruv',
    controlsLead:
      'Telefonda chap tomonda joystik, oʻngda esa holatga qarab oʻzgaradigan tugmalar bor — klaviatura kerak emas.',
    controls: [
      { key: 'W A S D', action: 'Yurish / haydash' },
      { key: 'Enter', action: 'Mashinaga minish yoki tushish' },
      { key: 'Space', action: 'Sakrash — mashinada qoʻl tormozi' },
      { key: 'Shift', action: 'Yugurish' },
      { key: 'E', action: 'Ovqat olish · mashinada yoqilgʻi va tuzatish' },
      { key: 'F', action: 'Musht urish' },
      { key: 'V', action: 'Salon kamerasi' },
      { key: 'X', action: 'Shahar xaritasini ochish' },
      { key: 'M', action: 'Radioda keyingi qoʻshiq' },
      { key: 'T', action: 'Vaqtni tez oʻtkazish' },
    ],
    shotsHeading: 'Skrinshotlar',
    shots: [
      {
        src: 'tashkent-city-3',
        alt: 'TASHKENT CITY oʻyinida oq sedanda Toshkent koʻchasi boʻylab haydash: oʻzbek bayrogʻi, svetaforlar va past-polygonli binolar',
        caption: 'Markaz boʻylab haydash. Bayroq ham, gumbaz ham oʻz joyida.',
      },
      {
        src: 'tashkent-city-1',
        alt: 'Oʻyinchi yoʻlda turgan mashinalar yonida, orqa fonda daraxtlar va shahar binolari',
        caption: 'Piyoda. Istalgan mashinaga yeting va Enter bosing.',
      },
      {
        src: 'tashkent-city-2',
        alt: 'Oʻyinchi Chevrolet Cobalt yonida, minish taklifi, burchakda minimap va pastda topshiriqlar roʻyxati',
        caption: 'Topshiriqlar va minimap ekran chetlarida turadi.',
      },
      {
        src: 'tashkent-city-map',
        alt: 'Oʻyin ichidagi Toshkent xaritasi: Chorsu, Teleminora, Magic City, aeroport va Olimpiya shaharchasi nomlari bilan',
        caption: 'Toʻliq xarita — har bir joy nomi bilan.',
      },
    ],
    detailsHeading: 'Maʼlumotlar',
  },

  about: {
    heading: 'Toshkentdagi studiya',
    lead:
      'TONG INC — Toshkent, Oʻzbekistonda joylashgan mustaqil studiya. Oʻyin, biznes dasturlari va veb-mahsulotlar yasaymiz — oʻzimiznikini ham, buyurtma ham.',
    story: [
      {
        heading: 'Nega “TONG”',
        paragraphs: [
          '“Tong” — ertalabning quyosh toʻliq koʻtarilishidan oldingi qismi: osmonda rang bor, lekin kun hali boshlanmagan. Oʻz boshlanishida turgan studiya uchun yaxshi soʻz. Va biz yasamoqchi boʻlgan narsalar uchun ham toʻgʻri kayfiyat: shoshmasdan, iliq, adrenalin bilan emas, choy bilan ishlatiladigan.',
          'Logotip ham shuning uchun shunday koʻrinadi. Undagi ranglar — tungi osmon ustidagi tong ranglari.',
        ],
      },
      {
        heading: 'Nimaga urinyapmiz',
        paragraphs: [
          'Bizni bezovta qiladigan bir boʻshliq bor. Toshkentdagi bola mingta pishiq mobil oʻyindan tanlashi mumkin, lekin ularning deyarli hech biri uning oʻz tilida ham, oʻz shahrida ham emas. Bor boʻlganlari esa koʻpincha shosha-pisha tarjima.',
          'Shuning uchun soʻz oʻyinimiz — “oʻzbekchasi ham bor” oʻyin emas: jumboq mexanikasining oʻzi oʻzbek imlosiga bogʻliq. Haydash oʻyinimiz ham oddiy shaharga oʻzbekcha yoʻl belgisi osilgani emas — u Toshkent, kvartal-kvartal qayta qurilgan.',
          'Dasturlar tomonida ham shu tuygʻu. Toshkentdagi sotuvchi uchun ombor dasturi oʻsha doʻkon aslida qanday ishlashiga qarab yasalishi kerak, boshqa yerda oʻylab topilgan narsadan tarjima qilinishi emas.',
        ],
      },
      {
        heading: 'Qanday ishlaymiz',
        paragraphs: [
          'Biz kichikmiz va oʻz hisobimizdan ishlaymiz. Muddat belgilaydigan nashriyot ham, “engagement” koʻrsatkichini soʻraydigan investor ham yoʻq — aynan shuning uchun oʻyinlarimizda ushlab turish mexanikasi yoʻq. Qaytishingizni yalinadigan bildirishnoma yoʻq. Energiya taymeri yoʻq. Hisob yoʻq.',
          'Bu bir kichik jamoa tezligida yurishimizni ham anglatadi. Uyaladigan narsani chiqargandan koʻra, chiqishni kechiktirganimiz maʼqul.',
        ],
      },
    ],
    founderHeading: 'Asoschi',
    founderName: 'Sardor Ikhtiyorov',
    founderRole: 'Asoschi, TONG INC',
    founderBio:
      'Sardor TONG INC ni Toshkentda tashkil qildi — oʻzi shu yerda yasalishini istagan oʻyin va dasturlarni yasash uchun. Dizayn, dasturlash va Soʻzbogʻ ortidagi lugʻat ishi — hammasida ishlaydi. Oʻsha oʻyindagi 2 363 soʻz bittalab yigʻilgan va bittalab tekshirilgan.',
    valuesHeading: 'Nimaga amal qilamiz',
    values: [
      {
        icon: 'shield',
        title: 'Maʼlumotingiz bizga kerak emas',
        body:
          'Qonun talab qilgani uchun emas — shunday qilib loyihalaganimiz uchun. Siz haqingizda profil tuzmaymiz va hisob talab qilmaymiz. Yigʻadiganimiz faqat oʻyinning oʻzi haqidagi nomsiz statistika — masalan, qaysi bosqich juda qiyin — chunki yaxshi narsa yasash uchun shuning oʻzi yetarli.',
      },
      {
        icon: 'offline',
        title: 'Signalsiz ham ishlashi kerak',
        body:
          'Internet qamrovi Oʻzbekiston boʻylab ham, dunyoning koʻp joyida ham bir tekis emas. Metroda ishlamay qoladigan oʻyin — buzuq oʻyin.',
      },
      {
        icon: 'coin',
        title: 'Toʻlash ixtiyoriy va ixtiyoriyligicha qoladi',
        body:
          'Oʻyinlarimizni bir tiyin sarflamasdan tugatsa boʻladi. Reklama faqat siz ataylab tugma bosganingizda chiqadi. Toʻlab oʻtish kerak boʻlgan devor ortida hech narsa yopilmagan.',
      },
      {
        icon: 'language',
        title: 'Joy mehnatga arziydi',
        body:
          'oʻ, gʻ, sh va ch ni toʻgʻri ishlatish oʻyin dvigatelida rostakam mehnat talab qildi. Chorsuni Chorsu turgan joyga qoʻyish ham. Ikkalasiga eʼtibor bermaslik osonroq boʻlardi.',
      },
    ],
  },

  contact: {
    heading: 'Aloqa',
    lead:
      'Hamkorlik, nashr, buyurtma ishi, matbuot yoki kunni buzayotgan xatolik — hammasi bitta pochtaga tushadi va uni studiyani yasayotgan odamlarning oʻzi oʻqiydi.',
    emailHeading: 'Toʻgʻridan-toʻgʻri yozing',
    emailNote: 'Bizga yetib borishning eng tez yoʻli. Hammasini oʻqiymiz.',
    formHeading: 'Yoki shu yerda yozing',
    formNote:
      'Toʻldiring — xabar toʻgʻridan-toʻgʻri Telegramimizga tushadi, pochta ilovasi kerak emas. Faqat shu yerga yozganingiz yuboriladi, siz haqingizda boshqa hech narsa yigʻilmaydi.',
    fields: {
      name: 'Ismingiz',
      email: 'Emailingiz',
      subject: 'Mavzu',
      message: 'Xat matni',
    },
    placeholders: {
      name: 'Anvar Karimov',
      email: 'siz@misol.uz',
      subject: 'Nima haqida?',
      message: 'Nima kerakligini yozing…',
    },
    send: 'Xabarni yuborish',
    sending: 'Yuborilmoqda…',
    sentHeading: 'Yuborildi — rahmat',
    sentBody: 'Xabaringiz bizga yetib keldi. Bir-uch ish kunida javob beramiz, odatda siz yozgan email manzilingizga.',
    sendAnother: 'Yana xabar yuborish',
    errorHeading: 'Yuborilmadi',
    errorBody: 'Bizning tomonda nimadir ishlamadi. Xabaringiz yoʻqolgani yoʻq — oʻshani email bilan yuborsangiz yoki Telegramga yozsangiz ham boʻladi.',
    fallbackCta: 'Pochta ilovamda ochish',
    telegramHeading: 'Telegramga yozing',
    telegramNote: 'Odatda eng tez javob shu yerdan.',
    locationHeading: 'Qayerdamiz',
    locationBody: 'Toshkent, Oʻzbekiston',
    responseHeading: 'Javob muddati',
    responseBody:
      'Jamoamiz kichik, shuning uchun javob odatda bir-uch ish kunida keladi. Yordam savollari birinchi navbatda koʻriladi.',
  },

  legal: {
    updated: 'Oxirgi yangilanish',
    updatedDate: '2026-yil 25-avgust',
    privacyUpdatedDate: '2026-yil 1-oktabr',
    tocHeading: 'Shu sahifada',
  },

  privacy: {
    heading: 'Maxfiylik siyosati',
    lead:
      'Bu siyosat shu saytga va TONG INC chiqargan har bir oʻyin va ilovaga tegishli. U oʻqilishi uchun yozilgan, oʻqib chidash uchun emas.',
    sections: [
      {
        heading: 'Qisqasi',
        paragraphs: [
          'Biz sizdan telefon raqami yoki manzil soʻramaymiz va oʻyinlarimiz hech qanday hisobsiz ishlaydi. Progressingiz qurilmangizda turadi.',
          'Qurilmangizdan tashqariga bir necha narsa chiqadi va bu sahifa har birini aniq tushuntiradi: ixtiyoriy mukofotli reklama va ilova ichidagi xaridlar (ikkalasini Google boshqaradi), soʻz oʻyinlarimizdagi nomsiz oʻyin statistikasi va progressni saqlab qoʻyadigan ixtiyoriy Google bilan kirish.',
        ],
      },
      {
        heading: 'Biz kimmiz',
        paragraphs: [
          'TONG INC — Toshkent, Oʻzbekistonda joylashgan oʻyin va dastur studiyasi. Bu siyosat yoki maʼlumotingiz boʻyicha har qanday savolga: tolibjonfayz@gmail.com.',
        ],
      },
      {
        heading: 'Nima yigʻilmaydi',
        paragraphs: [
          'Ilovalarimiz quyidagilarni hech qachon soʻramaydi va yigʻmaydi:',
        ],
        bullets: [
          'Telefon raqamingiz yoki pochta manzilingiz',
          'Aniq joylashuvingiz',
          'Kontaktlaringiz, rasmlaringiz, fayllaringiz yoki mikrofoningiz',
          'Boshqa ilova va saytlarda nima qilayotganingiz',
          'Ismingiz va email manzilingiz — agar oʻzingiz Google bilan kirmasangiz (pastda yozilgan)',
        ],
      },
      {
        heading: 'Qurilmangizda nima saqlanadi',
        paragraphs: [
          'Oʻyinlarimiz faqat ishlashi uchun kerak boʻlgan narsani saqlaydi, va uni sizning qurilmangizda saqlaydi:',
        ],
        bullets: [
          'Qaysi bosqichdasiz va qaysilari ochilgan',
          'Tanga yoki pul hisobingiz va oʻyin ichida olgan narsalaringiz',
          'Kunlik jumboq natijalari va joriy ketma-ketligingiz',
          'Ovoz, musiqa va koʻrinish sozlamalari',
        ],
      },
      {
        heading: 'Ixtiyoriy kirish va bulutda saqlash',
        paragraphs: [
          'Soʻzbogʻ va Wordio sozlamalarida Google hisobingiz bilan kirish mumkin — telefon almashtirsangiz ham progress yoʻqolmaydi. Bu ixtiyoriy: ikkala oʻyin ham kirishsiz toʻliq ishlaydi.',
          'Kirganingizda Google Firebase Authentication Google hisobingizdagi ism, email manzil va hisob identifikatorini oladi, oʻyin progressingiz (bosqich, tanga, sozlamalar va kunlik ketma-ketlik) esa shu identifikator ostida Google Firebase Cloud Firestore’da saqlanadi. Bu nusxani faqat oʻzingizning hisobingiz oʻqiy va oʻzgartira oladi.',
          'Bu maʼlumotdan faqat progressni sinxronlash uchun foydalanamiz. Uni hech qachon sotmaymiz, reklamachilarga bermaymiz va siz bilan bogʻlanish uchun ishlatmaymiz.',
        ],
      },
      {
        heading: 'Oʻyin statistikasi',
        paragraphs: [
          'Soʻzbogʻ va Wordio nomsiz oʻyin voqealarini Google Analytics for Firebase’ga yuboradi — qaysi bosqichlar juda qiyin yoki juda oson ekanini koʻrib, tuzatish uchun. Masalan: bosqich boshlandi yoki tugadi, qancha vaqt ketdi, yordam ishlatildi, doʻkondan narsa olindi.',
          'Bu voqealarda ism, email yoki hisob IDsi yoʻq. Google Analytics ularni tasodifiy ilova identifikatoriga bogʻlaydi va IP manzilingizdan taxminiy, davlat darajasidagi joylashuvni aniqlashi mumkin.',
        ],
      },
      {
        heading: 'Hammasini qanday oʻchirish mumkin',
        paragraphs: [
          'Qurilmadagi progress: Soʻzbogʻ yoki Wordio’da sozlamalarni ochib progressni tozalang — telefondagi hamma narsa darhol oʻchadi. Ilovani oʻchirish ham xuddi shunday natija beradi. Brauzer oʻyinimiz uchun oʻsha sahifaning brauzerdagi maʼlumotini tozalash yetarli.',
          'Kirish hisobi va bulutdagi nusxa: agar Google bilan kirgan boʻlsangiz, oʻsha Google hisobidan tolibjonfayz@gmail.com manziliga yozib, hisobingizni oʻchirishni soʻrang. Saqlangan progressingiz va kirish yozuvingizni 30 kun ichida oʻchiramiz va email orqali tasdiqlaymiz.',
          'Oʻyin statistikasini Google Analytics saqlash muddati tugagach oʻzi avtomatik oʻchiradi.',
        ],
      },
      {
        heading: 'Reklama',
        paragraphs: [
          'Reklama faqat Soʻzbogʻ va Wordio’da bor, u ixtiyoriy va hech qachon oʻz-oʻzidan chiqmaydi. Reklama bosqichlar orasida ham, gʻalaba oynasida ham, boshqa hech qayerda ham oʻzi ochilmaydi. U faqat siz doʻkonda tanga ishlash uchun “reklama koʻrish” tugmasini bosganingizda koʻrsatiladi.',
          'Tugmani bosganingizda Google AdMob qurilmangizning reklama identifikatorini va taxminiy, davlat darajasidagi joylashuvingizni oladi — mos reklama tanlash uchun. Buni Google oʻz shartlari asosida boshqaradi; biz undan faqat “reklama koʻrildi” degan tasdiqni olamiz.',
          'Reklama identifikatorini istalgan vaqtda Android sozlamalarida tiklash yoki oʻchirish mumkin: Maxfiylik → Reklamalar.',
        ],
      },
      {
        heading: 'Xaridlar',
        paragraphs: [
          'Soʻzbogʻ va Wordio’da tangani haqiqiy pulga sotib olish mumkin. Bu butunlay ixtiyoriy — oʻyinlarni hech narsa sarflamasdan tugatsa boʻladi.',
          'Toʻlovni boshidan oxirigacha Google Play boshqaradi. Karta raqami, ism va toʻlov manzili Google’ga boradi, bizga emas. Biz hech qanday toʻlov maʼlumotini na koʻramiz, na saqlaymiz, na uzatamiz.',
          'Xarid tarixi ilovada emas, Google Play hisobingizda turadi.',
        ],
      },
      {
        heading: 'Shu sayt haqida',
        paragraphs: [
          'Bu sayt — statik sahifalar toʻplami. U kuzatuv cookie’lari qoʻymaydi, tahlil tizimi ishlatmaydi, ijtimoiy tarmoq kuzatuvchilarini joylamaydi va reklama koʻrsatmaydi.',
          'Aloqa formasini yuborganingizda siz yozgan narsa — ism, email, mavzu va xat matni — hosting provayderimizga oʻtadi va toʻgʻridan-toʻgʻri bizning Telegramimizga yetkaziladi, yoqib qoʻyilgan boʻlsa email bilan ham. Bunga boshqa hech narsa qoʻshilmaydi va u maʼlumotlar bazasida saqlanmaydi. Formani ishlatishni istamasangiz, oʻsha sahifada email manzilimiz va Telegramimiz turibdi — toʻgʻridan-toʻgʻri yozsangiz ham boʻladi.',
          'Yorugʻ yoki qorongʻi rejim tanlovingiz faqat brauzeringizda saqlanadi, shuning uchun sayt uni keyingi safar eslaydi. U hech qayerga yuborilmaydi.',
          'Hosting provayderimiz xavfsizlik uchun oddiy server jurnallarini — IP manzil va soʻralgan sahifalarni — saqlashi mumkin. Biz ulardan hech qanday profil tuzmaymiz.',
        ],
      },
      {
        heading: 'Bolalar',
        paragraphs: [
          'Oʻyinlarimizda chat ham, foydalanuvchi yaratgan kontent ham, ochiq internetga chiqadigan havola ham yoʻq. Reklama faqat ataylab tugma bosilgandan keyin chiqadi, shuning uchun tasodifan ochilib ketmaydi.',
          'Bola tasodifan sotib olmasligi uchun Google Play sozlamalarida xaridga parol qoʻyish mumkin.',
        ],
      },
      {
        heading: 'Uchinchi tomonlar',
        paragraphs: [
          'Android ilovalarimizda Google xizmatlari ishtirok etadi: ixtiyoriy mukofotli reklama uchun Google AdMob, ixtiyoriy xaridlar uchun Google Play Billing va yuqorida yozilgan oʻyin statistikasi hamda ixtiyoriy bulutda saqlash uchun Google Firebase (Analytics, Authentication va Cloud Firestore). Hammasi Google’ning oʻz maxfiylik shartlari asosida ishlaydi.',
          'Brauzer oʻyinimiz three.js grafika kutubxonasini ochiq kod tarmogʻidan (cdnjs) yuklaydi. Bu soʻrov, har qanday veb-soʻrov kabi, IP manzilingizni oʻsha tarmoqqa koʻrsatadi; boshqa hech qanday maʼlumot yuborilmaydi.',
          'TASHKENT CITY ni Telegram ichida ham ochish mumkin. Shunda oʻyin progressingiz nusxasini Telegramning oʻz bulut xotirasida, sizning hisobingizda saqlaydi — qurilma almashsa ham progress qoladi. U Telegram profilingizni oʻqimaydi va bu maʼlumot bizga kelmaydi. Oddiy brauzerda ochilsa, bunday nusxa umuman yasalmaydi.',
        ],
      },
      {
        heading: 'Sizning huquqlaringiz',
        paragraphs: [
          'Maʼlumotlarni himoya qilish qonunchiligi odamlarga oʻzi haqidagi shaxsiy maʼlumotni koʻrish, tuzatish va oʻchirish huquqini beradi. Bizda siz haqingizda boʻlishi mumkin boʻlgan yagona shaxsiy maʼlumot — ixtiyoriy Google bilan kirishga bogʻlangan ism, email va oʻyin progressi. Uni koʻrish, tuzatish yoki oʻchirish uchun tolibjonfayz@gmail.com manziliga yozing.',
        ],
      },
      {
        heading: 'Oʻzgarishlar',
        paragraphs: [
          'Bu siyosat oʻzgarsa, sahifaning yuqorisidagi sana ham u bilan birga oʻzgaradi. Ilovalarimiz maʼlumot bilan qanday ishlashiga tegishli jiddiy oʻzgarishlar ilova yangilanish izohlarida ham koʻrsatiladi.',
        ],
      },
      {
        heading: 'Aloqa',
        paragraphs: [
          'Maxfiylik yoki boshqa savollar boʻyicha: tolibjonfayz@gmail.com. Biz Toshkent, Oʻzbekistondamiz.',
        ],
      },
    ],
  },

  terms: {
    heading: 'Foydalanish shartlari',
    lead:
      'Bu shartlar shu saytga va TONG INC chiqargan har bir oʻyin va ilovaga tegishli.',
    sections: [
      {
        heading: 'Kelishuv',
        paragraphs: [
          'TONG INC ilovasini oʻrnatish, ochish yoki ishlatish, shuningdek shu saytdan foydalanish orqali siz ushbu shartlarga rozi boʻlasiz. Rozi boʻlmasangiz, iltimos, ilovalarimizdan va shu saytdan foydalanmang.',
        ],
      },
      {
        heading: 'Kim foydalanishi mumkin',
        paragraphs: [
          'Oʻyinlarimiz keng auditoriya uchun moʻljallangan va ularda jinsiy mazmun yoki qimor yoʻq. Bolalar foydalanishi mumkin. Agar oʻz mamlakatingizda shartlarga mustaqil rozilik berish yoshiga yetmagan boʻlsangiz, sizga masʼul katta odam bu shartlarga siz nomingizdan rozilik bildirishi kerak.',
        ],
      },
      {
        heading: 'Foydalanish litsenziyasi',
        paragraphs: [
          'Biz sizga ilovalarimizni oʻzingiz nazorat qiladigan qurilmalarga oʻrnatish va shaxsiy, notijorat maqsadda ishlatish uchun shaxsiy, eksklyuziv boʻlmagan, boshqaga oʻtkazilmaydigan va bekor qilinishi mumkin boʻlgan litsenziya beramiz.',
          'Bu — dasturdan foydalanish litsenziyasi, uni sotish emas. Ilovalar va ularning ichidagi hamma narsa bizning mulkimiz boʻlib qoladi.',
        ],
      },
      {
        heading: 'Nima qilish mumkin emas',
        paragraphs: ['Siz quyidagilarni qilmaslikka rozisiz:'],
        bullets: [
          'Ilovalarimizdan nusxa koʻchirish, ularni oʻzgartirish, tarjima qilish yoki ular asosida hosila asar yaratish',
          'Teskari muhandislik qilish, dekompilyatsiya yoki disassembler qilish — qonun boʻyicha cheklab boʻlmaydigan hollar bundan mustasno',
          'Ilovalarimizni yoki ulardagi kontentni tarqatish, sotish, ijaraga berish yoki nashr etish',
          'Xatti-harakat, progress yoki valyutani oʻzgartirish uchun avtomatik vositalar yoki ekspluatatsiyalardan foydalanish',
          'Mualliflik huquqi, savdo belgisi yoki boshqa mulkiy belgilarni olib tashlash yoki yashirish',
        ],
      },
      {
        heading: 'Virtual buyumlar va xaridlar',
        paragraphs: [
          'Oʻyinlarimizda virtual valyuta (masalan, tanga) va virtual buyumlar (masalan, yordamlar) boʻlishi mumkin. Ularning pul qiymati yoʻq, haqiqiy pulga almashtirilmaydi va oʻyindan tashqariga oʻtkazilmaydi.',
          'Virtual buyumlar oʻyin ichida ishlatish uchun litsenziyalanadi, sizning mulkingiz emas. Agar oʻyin toʻxtatilsa yoki progressingiz qurilmangizdan oʻchirilsa, virtual buyumlar ham u bilan birga ketadi.',
          'Barcha xaridlarni Google Play amalga oshiradi va ular Google’ning toʻlov shartlari hamda pul qaytarish siyosatiga boʻysunadi. Biz pulni toʻgʻridan-toʻgʻri qaytara olmaymiz.',
        ],
      },
      {
        heading: 'Reklama',
        paragraphs: [
          'Oʻyinlarimizda ixtiyoriy mukofotli reklama boʻlishi mumkin — u faqat siz oʻyin ichidagi valyuta evaziga reklama koʻrishni tanlaganingizda koʻrsatiladi. Bu reklamalarning mazmunini biz emas, Google AdMob va uning reklama beruvchilari taqdim etadi.',
        ],
      },
      {
        heading: 'Sinov versiyalari va mavjudlik',
        paragraphs: [
          'Baʼzi ilovalarimiz, jumladan shu matn yozilgan paytdagi Soʻzbogʻ, Google Play’da yopiq test orqali tarqatiladi. Sinov versiyalari qanday boʻlsa shundayligicha beriladi, kamchiliklari boʻlishi mumkin va ogohlantirishsiz oʻzgarishi mumkin.',
          'Shu saytda “ishlab chiqilmoqda” deb koʻrsatilgan mahsulotlar chiqmagan, butunlay oʻzgarishi mumkin va umuman chiqmasligi ham mumkin. Bu sahifadagi hech narsa ular chiqishiga vaʼda emas.',
          'Ilovalarimiz yoki shu sayt uzluksiz ishlashini, yoxud har bir qurilma va brauzer versiyasiga mos kelishda davom etishini kafolatlamaymiz.',
        ],
      },
      {
        heading: 'Haqiqiy joylar va begona nomlar',
        paragraphs: [
          'TASHKENT CITY da Toshkentdagi haqiqiy joylarning uslublashtirilgan tasviri bor, doʻkon peshtaxtalari va taom menyularida esa haqiqiy korxona nomlari uchraydi. Ular shaharni tanib boʻladigan qilish uchun, tavsifiy maʼnoda ishlatilgan. Bu hech qanday homiylik yoki hamkorlikni anglatmaydi va bu korxonalarning hech biri TONG INC bilan bogʻliq emas. Agar siz ulardan birining vakili boʻlsangiz va tasvirni oʻzgartirish yoki olib tashlashni istasangiz — yozing, qilamiz.',
        ],
      },
      {
        heading: 'Intellektual mulk',
        paragraphs: [
          'TONG INC va TONG GAMES nomlari va logotiplari, mahsulotlarimiz nomlari, hamda ilovalarimizning dizayni, kodi, tasvirlari, ovozi va lugʻat kontenti TONG INC ga tegishli va mualliflik huquqi hamda savdo belgisi qonunchiligi bilan himoyalangan.',
          'Nomimiz va logotipimizdan mahsulotlarimiz haqida xabar berish yoki taqriz yozish maqsadida foydalanishingiz mumkin. Boshqa har qanday foydalanish uchun yozma ruxsatimiz kerak.',
        ],
      },
      {
        heading: 'Uchinchi tomon xizmatlari',
        paragraphs: [
          'Ilovalarimiz Google Play xizmatlari, Google Play Billing va Google AdMob’dan foydalanadi. Brauzer oʻyinimiz three.js kutubxonasini ochiq kod tarmogʻidan yuklaydi. Ulardan foydalanishingiz oʻsha xizmatlarning shartlariga ham boʻysunadi.',
        ],
      },
      {
        heading: 'Kafolat yoʻqligi',
        paragraphs: [
          'Ilovalarimiz va shu sayt qonun ruxsat bergan eng toʻliq darajada “qanday boʻlsa shundayligicha” va “mavjud holida” taqdim etiladi — oshkora yoki nazarda tutilgan hech qanday kafolatsiz.',
        ],
      },
      {
        heading: 'Javobgarlik chegarasi',
        paragraphs: [
          'Qonun ruxsat bergan eng toʻliq darajada, TONG INC ilovalarimizdan yoki shu saytdan foydalanish natijasida kelib chiqadigan bilvosita, tasodifiy, maxsus yoki oqibatli zararlar uchun javobgar emas.',
          'Bu shartlardagi hech narsa qonun boʻyicha cheklab boʻlmaydigan javobgarlikni cheklamaydi.',
        ],
      },
      {
        heading: 'Amaldagi qonun',
        paragraphs: [
          'Bu shartlar Oʻzbekiston Respublikasi qonunchiligiga boʻysunadi. Bu yerdagi hech narsa siz yashayotgan mamlakat qonuni bergan majburiy isteʼmolchi huquqlarini bekor qilmaydi.',
        ],
      },
      {
        heading: 'Shartlardagi oʻzgarishlar',
        paragraphs: [
          'Bu shartlarni yangilashimiz mumkin. Sahifaning yuqorisidagi sana ular oxirgi marta qachon oʻzgarganini koʻrsatadi.',
        ],
      },
      {
        heading: 'Aloqa',
        paragraphs: [
          'Bu shartlar boʻyicha savollar: tolibjonfayz@gmail.com — TONG INC, Toshkent, Oʻzbekiston.',
        ],
      },
    ],
  },

  support: {
    heading: 'Yordam',
    lead:
      'Biror narsa ishlamayaptimi, tushunarsizmi yoki koʻrishni istagan narsangiz bormi? Bu sahifada eng koʻp beriladigan savollar va tirik odam bilan bogʻlanish yoʻli bor.',
    contactHeading: 'Biz bilan gaplashing',
    contactBody:
      'Yordam uchun email — uni studiyaning oʻzi oʻqiydi. Bir-uch ish kunida javob berishga harakat qilamiz.',
    faqHeading: 'Koʻp beriladigan savollar',
    faq: [
      {
        q: 'Oʻyinlaringiz bepulmi?',
        a: 'Ha. TASHKENT CITY brauzerda butunlay bepul. Soʻzbogʻ ham bepul va uni birinchi bosqichdan oxirgisigacha hech narsa sarflamasdan tugatsa boʻladi — tanga sotib olish mumkin, lekin hech qachon shart emas.',
      },
      {
        q: 'Internet kerakmi?',
        a: 'Soʻzbogʻ toʻliq internetsiz ishlaydi; lugʻat, ovozlar, musiqa va shriftlar ilovaning ichida. TASHKENT CITY brauzerda ishlagani uchun sahifani yuklashga internet kerak, lekin yuklangandan keyin oʻynash uchun emas.',
      },
      {
        q: 'Roʻyxatdan oʻtish kerakmi?',
        a: 'Yoʻq. Mahsulotlarimizning hammasi hisobsiz ishlaydi. Soʻzbogʻ va Wordio’da progressni saqlab qoʻyish uchun Google bilan kirish mumkin, lekin bu doim ixtiyoriy.',
      },
      {
        q: 'Qaysi qurilmalarda ishlaydi?',
        a: 'Soʻzbogʻ — Google Play orqali tarqatiladigan Android oʻyini; hozircha iOS versiyasi yoʻq. TASHKENT CITY kompyuter yoki telefondagi istalgan zamonaviy brauzerda ishlaydi.',
      },
      {
        q: 'Nega Soʻzbogʻni Google Play’dan topolmayapman?',
        a: 'Oʻyin hozir yopiq testda — yaʼni Play Store’dagi sahifa faqat taklif qilingan sinovchilarga koʻrinadi. Sinov guruhiga qoʻshilmoqchi boʻlsangiz, bizga yozing.',
      },
      {
        q: 'TASHKENT CITY qurilmamda sekin ishlayapti. Nima qilay?',
        a: 'Bu brauzerda ishlaydigan 3D oʻyin, shuning uchun eski telefon va kompyuterlardan koʻp narsa talab qiladi. Eng koʻp yordam beradigan narsa — boshqa oynalarni yopish. Telefonda quvvatga ulab qoʻysangiz, tizim tezlikni pasaytirmay qoʻyadi.',
      },
      {
        q: 'Progressim qayerda saqlanadi va qurilmani almashtirsam nima boʻladi?',
        a: 'Soʻzbogʻda progress faqat qurilmangizda saqlanadi — serverga hech narsa yuborilmaydi, aynan shuning uchun sizdan hisob soʻramaymiz. TASHKENT CITY oddiy brauzerda ham xuddi shunday ishlaydi. Yagona istisno: TASHKENT CITY ni Telegram ichida ochsangiz, u nusxani Telegram bulut xotirangizda ham saqlaydi — shunda qurilma almashsa ham progress qoladi. Boshqa hollarda ilovani oʻchirish, brauzer maʼlumotini tozalash yoki qurilma almashtirish progressni boshidan boshlashni anglatadi.',
      },
      {
        q: 'Maʼlumotimni qanday oʻchiraman?',
        a: 'Soʻzbogʻda: Sozlamalar → Boshqarish → Progressni tozalash. Ilovani oʻchirish ham shunday natija beradi. TASHKENT CITY uchun brauzerdagi oʻsha sahifa maʼlumotini tozalang.',
      },
      {
        q: 'Tanga sotib oldim, lekin kelmadi.',
        a: 'Avval internetga ulangan holda oʻyinni qayta oching — kutib turgan xaridlar odatda oʻzi yakunlanadi. Shundan keyin ham kelmasa, xarid sanasi va Google Play buyurtma raqamini yozib yuboring.',
      },
      {
        q: 'Pulni qanday qaytaraman?',
        a: 'Pul qaytarishni biz emas, Google Play boshqaradi, shuning uchun soʻrov Google Play hisobingiz orqali yuborilishi kerak. Agar Google rad etsa va sizningcha rostdan xatolik boʻlgan boʻlsa, baribir bizga yozing.',
      },
      {
        q: 'Tushib qolgan soʻz yoki notoʻgʻri maʼno topdim.',
        a: 'Iltimos, ayting — bu rostdan foydali. Lugʻat qoʻlda yigʻilgan, demak xatolar bizniki va ularni tuzatmoqchimiz. Soʻzni va u chiqqan bosqichni yuboring.',
      },
      {
        q: 'Sizga biror narsa yasatsam boʻladimi?',
        a: 'Ehtimol, ha. Oʻz mahsulotlarimiz bilan bir qatorda saytlar va maxsus dasturlar ham qilamiz. Nima qilishi kerakligini va taxminan qachon kerakligini yozing.',
      },
    ],
    reportHeading: 'Xatolik haqida xabar berish',
    reportBody:
      'Biror narsa qulasa yoki gʻalati ishlasa, quyidagilardan qanchasini yoza olsangiz, shunchalik tez tuzatamiz:',
    reportBullets: [
      'Qurilmangiz va uning Android yoki brauzer versiyasi',
      'Qaysi mahsulot va qaysi ekran yoki bosqichda edingiz',
      'Shu voqeadan oldin nima qilgandingiz',
      'Imkoni boʻlsa — skrinshot yoki qisqa ekran yozuvi',
    ],
  },

  notFound: {
    code: '404',
    heading: 'Bu sahifada hali tong otmagan',
    lead:
      'Siz bosgan manzil bu saytda yoʻq. Balki koʻchirilgandir, balki havolaning oʻzi notoʻgʻridir. Qaytish yoʻli quyida.',
    linksHeading: 'Shulardan birini sinang',
  },

  footer: {
    tagline:
      'Toshkent, Oʻzbekistondagi oʻyin va dastur studiyasi. Oʻyinlar TONG GAMES nomi ostida.',
    studioHeading: 'Studiya',
    legalHeading: 'Huquqiy',
    connectHeading: 'Aloqa',
    privacy: 'Maxfiylik siyosati',
    terms: 'Foydalanish shartlari',
    support: 'Yordam',
    rights: 'Barcha huquqlar himoyalangan.',
    builtIn: 'Toshkentda yasaldi',
  },
}
