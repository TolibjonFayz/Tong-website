/**
 * Saytdagi BARCHA matn shu tuzilma bo'yicha yoziladi.
 * `en.ts`, `uz.ts` va `ru.ts` — uchalasi ham aynan shu shaklda bo'lishi
 * shart, shuning uchun bir tilda bor matn boshqasida tushib qolmaydi.
 * Tushib qolsa — `npm run typecheck` darrov aytadi.
 */

export interface Stat {
  value: string
  label: string
}

export interface Feature {
  icon: string
  title: string
  body: string
}

export interface FaqItem {
  q: string
  a: string
}

export interface PageMeta {
  title: string
  description: string
}

export interface Shot {
  src: string
  alt: string
  caption: string
}

export interface Section {
  heading: string
  paragraphs?: string[]
  bullets?: string[]
}

/** Bitta mahsulotning tarjima qilinadigan qismi. */
export interface ProductText {
  name: string
  tagline: string
  blurb: string
  meta: { label: string, value: string }[]
}

export interface SiteContent {
  locale: 'en' | 'uz' | 'ru'

  nav: {
    home: string
    work: string
    about: string
    support: string
    contact: string
    menu: string
    close: string
    theme: string
    language: string
  }

  cta: {
    playStore: string
    playStoreNote: string
    openGame: string
    /** Veb-platforma / dastur uchun tashqi havola tugmasi */
    openSite: string
    seeProduct: string
    allWork: string
    contactUs: string
    copyEmail: string
    copied: string
    openMail: string
    backToWork: string
    readPrivacy: string
    backHome: string
  }

  status: {
    live: string
    testing: string
    building: string
    /** "90% tayyor" kabi matn — {n} o'rniga foiz qo'yiladi */
    progress: string
  }

  kind: {
    game: string
    games: string
    app: string
    apps: string
  }

  meta: {
    home: PageMeta
    work: PageMeta
    sozbog: PageMeta
    tashkentCity: PageMeta
    about: PageMeta
    contact: PageMeta
    privacy: PageMeta
    deleteAccount: PageMeta
    terms: PageMeta
    support: PageMeta
    notFound: PageMeta
  }

  home: {
    eyebrow: string
    titleLead: string
    titleAccent: string
    lead: string
    stats: Stat[]
    craft: {
      heading: string
      lead: string
      items: Feature[]
    }
    featured: {
      eyebrow: string
      heading: string
      lead: string
      bullets: string[]
    }
    /** Asosiy mahsulotdan keyingi kichik blok — hozir o'ynash mumkin bo'lgani */
    alsoLive: {
      eyebrow: string
      heading: string
      lead: string
    }
    closing: {
      heading: string
      body: string
    }
  }

  work: {
    heading: string
    lead: string
    gamesHeading: string
    appsHeading: string
    moreHeading: string
    moreBody: string
  }

  /** Kalit — `utils/products.ts` dagi `slug` */
  products: Record<string, ProductText>

  sozbog: {
    status: string
    statusExplain: string
    intro: string[]
    featuresHeading: string
    features: Feature[]
    howHeading: string
    howBody: string[]
    shotsHeading: string
    shots: Shot[]
    detailsHeading: string
    privacyHeading: string
    privacyBody: string
  }

  tashkentCity: {
    statusNote: string
    intro: string[]
    featuresHeading: string
    features: Feature[]
    placesHeading: string
    placesLead: string
    places: string[]
    controlsHeading: string
    controlsLead: string
    controls: { key: string, action: string }[]
    shotsHeading: string
    shots: Shot[]
    detailsHeading: string
  }

  about: {
    heading: string
    lead: string
    story: Section[]
    founderHeading: string
    founderName: string
    founderRole: string
    founderBio: string
    valuesHeading: string
    values: Feature[]
  }

  contact: {
    heading: string
    lead: string
    emailHeading: string
    emailNote: string
    formHeading: string
    formNote: string
    fields: { name: string, email: string, subject: string, message: string }
    placeholders: { name: string, email: string, subject: string, message: string }
    send: string
    sending: string
    sentHeading: string
    sentBody: string
    sendAnother: string
    errorHeading: string
    errorBody: string
    fallbackCta: string
    telegramHeading: string
    telegramNote: string
    locationHeading: string
    locationBody: string
    responseHeading: string
    responseBody: string
  }

  legal: {
    updated: string
    updatedDate: string
    /** Maxfiylik siyosati alohida yangilanadi — Terms sanasi bilan aralashmasin. */
    privacyUpdatedDate: string
    tocHeading: string
  }

  privacy: {
    heading: string
    lead: string
    sections: Section[]
  }

  /** Google Play talabi: hisobni oʻchirish yoʻlini koʻrsatadigan sahifa. */
  deleteAccount: {
    heading: string
    lead: string
    sections: Section[]
  }

  terms: {
    heading: string
    lead: string
    sections: Section[]
  }

  support: {
    heading: string
    lead: string
    contactHeading: string
    contactBody: string
    faqHeading: string
    faq: FaqItem[]
    reportHeading: string
    reportBody: string
    reportBullets: string[]
  }

  notFound: {
    code: string
    heading: string
    lead: string
    linksHeading: string
  }

  footer: {
    tagline: string
    studioHeading: string
    legalHeading: string
    connectHeading: string
    privacy: string
    deleteAccount: string
    terms: string
    support: string
    rights: string
    builtIn: string
  }
}
