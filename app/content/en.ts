import type { SiteContent } from './types'

export const en: SiteContent = {
  locale: 'en',

  nav: {
    home: 'Home',
    work: 'Work',
    about: 'About',
    support: 'Support',
    contact: 'Contact',
    menu: 'Open menu',
    close: 'Close menu',
    theme: 'Switch light / dark',
    language: 'Language',
  },

  cta: {
    playStore: 'View on Google Play',
    playStoreNote: 'Currently in closed testing',
    openGame: 'Play in your browser',
    seeProduct: 'Read more',
    allWork: 'See all our work',
    contactUs: 'Get in touch',
    copyEmail: 'Copy email',
    copied: 'Copied',
    openMail: 'Write to us',
    backToWork: 'Back to all work',
    readPrivacy: 'Read the privacy policy',
    backHome: 'Back to the home page',
  },

  status: {
    live: 'Live',
    testing: 'Closed testing',
    building: 'In development',
    progress: '{n}% complete',
  },

  kind: {
    game: 'Game',
    games: 'Games',
    app: 'Software',
    apps: 'Apps & software',
  },

  meta: {
    home: {
      title: 'TONG INC — Game & Software Studio in Tashkent',
      description:
        'TONG INC is an independent studio in Tashkent, Uzbekistan. We build mobile and browser games, business software and web products — from Soʻzbogʻ to TASHKENT CITY.',
    },
    work: {
      title: 'Our Work — Games & Software by TONG INC',
      description:
        'Everything TONG INC has built and is building: browser and mobile games, warehouse software for sellers, and web products. Made in Tashkent, Uzbekistan.',
    },
    sozbog: {
      title: 'Soʻzbogʻ — Uzbek Word Puzzle Game | TONG INC',
      description:
        'Soʻzbogʻ is a word puzzle in the Uzbek language: swipe letters to build words, fill the crossword, and learn what every word you find means. 2,363 words, 145 themes, fully offline.',
    },
    tashkentCity: {
      title: 'TASHKENT CITY — Open-World Driving Game in the Browser',
      description:
        'Drive across a 5×5 km Tashkent rebuilt in your browser: Chorsu, Registon, the TV tower, Magic City. 23 cars, missions, races and a day/night cycle. Free, no install.',
    },
    about: {
      title: 'About TONG INC — Independent Studio in Uzbekistan',
      description:
        'TONG INC is a small independent studio founded by Sardor Ikhtiyorov in Tashkent, building games, apps and web products that work offline and never ask you to sign up.',
    },
    contact: {
      title: 'Contact TONG INC — Tashkent, Uzbekistan',
      description:
        'Reach TONG INC about partnerships, press, publishing or support. We read every message and reply from Tashkent, Uzbekistan.',
    },
    privacy: {
      title: 'Privacy Policy | TONG INC',
      description:
        'How TONG INC handles data across its website, games and software: no accounts, no sign-ups, and a plain account of exactly what Google sees when you watch an ad or buy something.',
    },
    terms: {
      title: 'Terms of Use | TONG INC',
      description:
        'The terms that govern the use of TONG INC websites, games and applications, including in-app purchases, advertising and intellectual property.',
    },
    support: {
      title: 'Support & FAQ | TONG INC',
      description:
        'Get help with TONG INC games and software. Frequently asked questions about Soʻzbogʻ, TASHKENT CITY, purchases and privacy — plus a direct line to the studio.',
    },
    notFound: {
      title: 'Page not found | TONG INC',
      description: 'This page does not exist. Here is the way back.',
    },
  },

  home: {
    eyebrow: 'Game & software studio · Tashkent, Uzbekistan',
    titleLead: 'We build at',
    titleAccent: 'first light',
    lead:
      '“Tong” is the Uzbek word for dawn — the moment right before the sun clears the horizon. We are a small studio in Tashkent making games, apps and web products with that same unhurried care.',
    stats: [
      { value: '5', label: 'Products built or building' },
      { value: '2,363', label: 'Uzbek words written by hand' },
      { value: '25 km²', label: 'Of Tashkent rebuilt in 3D' },
      { value: '0', label: 'Accounts you have to create' },
    ],
    craft: {
      heading: 'How we build',
      lead:
        'We are a small studio, so we only get to make a few things. That constraint shapes everything below.',
      items: [
        {
          icon: 'offline',
          title: 'Offline first, always',
          body:
            'Our apps ship with everything inside them — dictionaries, audio, fonts. No loading screen waiting on a server, no “you are offline” wall. They work in airplane mode, on the metro, in a village with one bar of signal.',
        },
        {
          icon: 'shield',
          title: 'Nothing to sign up for',
          body:
            'No accounts, no sign-ups, no email address to hand over. Your progress stays on your device. The only thing that ever leaves it is what Google needs to show an ad you asked for, or to process a purchase you made.',
        },
        {
          icon: 'language',
          title: 'Built for a place, not localised into it',
          body:
            'Uzbek has letters written with two characters that behave as one — oʻ, gʻ, sh, ch. Our word game handles that in its core logic. Our driving game rebuilds real Tashkent streets. That is the difference between made-for and translated-into.',
        },
        {
          icon: 'craft',
          title: 'Finished, then shipped',
          body:
            'We would rather hold a release than push a half-built one. Our first game spent months in the dictionary alone before a single level existed.',
        },
      ],
    },
    featured: {
      eyebrow: 'Our main product',
      heading: 'Soʻzbogʻ',
      lead:
        'A word puzzle in the Uzbek language. Swipe letters together to form a word, fill the crossword, and — the part we care most about — read what the word actually means the moment you find it.',
      bullets: [
        '1,300+ levels across 145 themed collections',
        'Every word comes with its meaning, so you finish a level knowing something new',
        'A daily puzzle with a streak that grows the longer you keep coming back',
        'Bonus words: anything valid you find beyond the answer still pays out',
        'Completely playable offline, with no account and no sign-up',
      ],
    },
    alsoLive: {
      eyebrow: 'Playable right now',
      heading: 'TASHKENT CITY',
      lead:
        'While Soʻzbogʻ finishes testing, our open-world driving game is already live — a 5×5 km Tashkent you can drive through in a browser tab, with nothing to install.',
    },
    closing: {
      heading: 'Working on something together?',
      body:
        'We are open to publishing conversations, contract work, localisation and press. The studio is small enough that your message reaches the person who actually makes the decisions.',
    },
  },

  work: {
    heading: 'Our work',
    lead:
      'Games, business software and web products — everything TONG INC has shipped or is building right now. We would rather have a few things we are proud of than a long list, so this page grows slowly on purpose.',
    gamesHeading: 'Games',
    appsHeading: 'Apps & software',
    moreHeading: 'Websites and contract work',
    moreBody:
      'Alongside our own products we build websites and custom software. If you need something made — a product site, a landing page, an internal tool — write to us and tell us what it has to do.',
  },

  products: {
    'sozbog': {
      name: 'Soʻzbogʻ',
      tagline: 'An Uzbek word puzzle that teaches you as you play',
      blurb:
        'Swipe letters together to form a word, fill the crossword, and read what the word actually means the moment you find it. 2,363 hand-checked Uzbek words across 145 themed collections, and it all works offline.',
      meta: [
        { label: 'Platform', value: 'Android' },
        { label: 'Language', value: 'Uzbek' },
        { label: 'Price', value: 'Free, optional in-app purchases' },
      ],
    },
    'tashkent-city': {
      name: 'TASHKENT CITY',
      tagline: 'An Uzbek open world you can drive through in a browser tab',
      blurb:
        'A 5×5 km reconstruction of Tashkent with 23 drivable cars, taxi and delivery missions, races, car dealerships, a day/night cycle and traffic lights that count down. No install, no account — it opens in a tab.',
      meta: [
        { label: 'Platform', value: 'Browser (desktop & mobile)' },
        { label: 'Built with', value: 'three.js' },
        { label: 'Price', value: 'Free' },
      ],
    },
    'block-combo': {
      name: 'Block Combo',
      tagline: 'Drop blocks, clear lines, chain the combo',
      blurb:
        'Drag pieces onto an 8×8 board and fill a whole row or column to clear it. There is no timer and nothing falls on its own — you get three pieces at a time and have to make them fit. Clear lines back to back and the combo meter fills, which is where the big scores come from.',
      meta: [
        { label: 'Platform', value: 'Android' },
        { label: 'Stage', value: 'Finished, in testing' },
      ],
    },
    'shelf-sort': {
      name: 'Shelf Sort',
      tagline: 'Sort it out, shelf by shelf',
      blurb:
        'Items arrive one at a time and you choose which shelf each one goes on. Get three of a kind together and they clear. Shelf space is tight, so it is really a game about what you are willing to commit to — with undo, shuffle and a hint on hand for when you get it wrong.',
      meta: [
        { label: 'Platform', value: 'Android' },
        { label: 'Stage', value: 'In development' },
      ],
    },
    'ombor': {
      name: 'Warehouse app',
      tagline: 'Stock, movement and debts in one place',
      blurb:
        'Software for shops that need to know three things at any moment: how much of each product is actually left, what came in and what went out, and who owes money — both the customers who owe the shop and the suppliers the shop owes. Currently in development; the final name is not decided yet.',
      meta: [
        { label: 'For', value: 'Shops and sellers' },
        { label: 'Stage', value: 'In development' },
      ],
    },
  },

  sozbog: {
    status: 'Closed testing',
    statusExplain:
      'Soʻzbogʻ is currently in closed testing on Google Play, which means the store listing is only reachable by invited testers. It has not been publicly released yet. If you would like to join the test group, write to us and we will add you.',
    intro: [
      'Soʻzbogʻ is a word puzzle in the Uzbek language. A wheel of letters sits at the bottom of the screen; you drag your finger from one letter to the next and a word forms above. Lift your finger and, if the word is real, it drops into the crossword grid.',
      'That part is familiar. What makes Soʻzbogʻ different is what happens next: the meaning of the word appears. Not a dictionary definition dropped in from somewhere else, but a short, plain explanation written for the game. Finish a level about spices and you leave knowing what zira and murch actually are.',
      'The whole dictionary — 2,363 words across 145 themed collections — was assembled and checked by hand. There is no automatically generated word list, because automatically generated word lists in Uzbek produce nonsense.',
    ],
    featuresHeading: 'What is in the game',
    features: [
      {
        icon: 'levels',
        title: '1,300+ levels',
        body:
          'Levels are grouped into themed collections named after places and images that mean something here — Chorbogʻ, Registon, Yulduzli tun. Each is a set of related words, so you learn a small field at a time.',
      },
      {
        icon: 'meaning',
        title: 'The meaning of every word',
        body:
          'The moment a word lands in the grid, its meaning appears. This is the reason the game exists — it is a puzzle you can hand to a child learning the language, or to an adult who wants their Uzbek back.',
      },
      {
        icon: 'calendar',
        title: 'A daily puzzle and a streak',
        body:
          'One new puzzle every day, the same one for everybody. Play on consecutive days and your streak grows; the reward grows with it.',
      },
      {
        icon: 'bonus',
        title: 'Bonus words',
        body:
          'The letters usually make more real words than the level asks for. Find them anyway and each one pays a coin — a small reward for being curious.',
      },
      {
        icon: 'trophy',
        title: 'Achievements',
        body:
          'Quiet, non-intrusive goals that track how far you have come, without notifications nagging you to come back.',
      },
      {
        icon: 'offline',
        title: 'Works with no internet',
        body:
          'The dictionary, sounds, music and fonts all ship inside the app. Airplane mode, a tunnel, a village with no coverage — the game does not care.',
      },
    ],
    howHeading: 'How it plays',
    howBody: [
      'Letters sit on a wheel at the bottom of the screen. Drag from one to the next; the word builds above your finger as you go. Release to submit it.',
      'Uzbek letters written with two Latin characters — oʻ, gʻ, sh, ch — are treated as a single letter, both on the wheel and in the grid. This sounds like a small detail. It is the difference between a game that feels like it was made for Uzbek and one that feels like it was made for English and then relabelled.',
      'Stuck? A hint reveals a letter in exchange for coins. Coins come from finishing levels, from bonus words, from the daily streak, or — if you want — from watching an optional ad. You can finish the entire game without spending anything.',
    ],
    shotsHeading: 'Screenshots',
    shots: [
      {
        src: '01_home',
        alt: 'Soʻzbogʻ home screen showing the current level, coin balance and daily streak over an illustrated hillside at sunrise',
        caption: 'Home — your level, your coins, your streak.',
      },
      {
        src: '02_game',
        alt: 'Soʻzbogʻ gameplay screen with an empty crossword grid and a wheel of Uzbek letters at the bottom',
        caption: 'A level in progress. Drag across the letters to build a word.',
      },
      {
        src: '03_map',
        alt: 'Soʻzbogʻ level map showing a winding path through numbered level nodes, with the first level unlocked',
        caption: 'The map — levels unlock along a path as you go.',
      },
      {
        src: '04_shop',
        alt: 'Soʻzbogʻ shop screen where coins can be earned or purchased',
        caption: 'The shop. Everything here is optional.',
      },
    ],
    detailsHeading: 'Details',
    privacyHeading: 'Privacy in Soʻzbogʻ',
    privacyBody:
      'Soʻzbogʻ asks you for nothing: no name, no email, no phone number, no location, no contacts, no photos. There is no account to create and we add no analytics of our own. Your progress lives on your phone and is deleted with the app. Two things do reach Google: press the optional “watch an ad” button and Google AdMob receives your device advertising ID so it can pick an ad; buy coins and Google Play handles the payment end to end. We never see your card details, and you can reset that advertising ID at any time in Android settings.',
  },

  tashkentCity: {
    statusNote:
      'Free and playable right now — it opens in a browser tab, on a laptop or a phone. No install, no account, no payment.',
    intro: [
      'TASHKENT CITY is an open-world driving game built around a 5×5 kilometre reconstruction of Tashkent. You walk, drive, take jobs and earn money in a city whose landmarks you will recognise — because they are the real ones.',
      'It runs entirely in the browser using three.js. There is nothing to download and no account to make: you open a tab and you are in the city. It works with a keyboard on a laptop and with on-screen controls on a phone.',
      'The city is not a generic grid with Uzbek names pasted on. Chorsu bazaar, the TV tower, Hazrati Imom, Kukeldash madrasa, Magic City, the airport, the railway station, Bunyodkor stadium and the Olympic quarter all sit roughly where they sit in life, joined by a ring road.',
    ],
    featuresHeading: 'What is in the game',
    features: [
      {
        icon: 'car',
        title: '23 cars, real proportions',
        body:
          'Each car is modelled at its actual length with its own power and top speed — a Matiz does not drive like a Tahoe. Front wheels turn with the steering, and there are premium dealerships where you can buy better ones.',
      },
      {
        icon: 'levels',
        title: 'Missions and money',
        body:
          'Taxi fares and parcel deliveries appear across the city. Get to the marker, pick up, drive to the destination — the further it is, the more you earn. Money buys food, fuel, repairs and cars.',
      },
      {
        icon: 'trophy',
        title: 'Races',
        body:
          'Marked race routes across the map — the central loop, the Olympic ring, the Sergeli sprint — with your times tracked.',
      },
      {
        icon: 'calendar',
        title: 'Day and night',
        body:
          'A full day passes in about six minutes. The sun rises in the east and sets in the west, the sky changes colour, and at night stars and the moon come out. Street lights and headlights actually cast light on the road.',
      },
      {
        icon: 'craft',
        title: 'A city that behaves',
        body:
          'Traffic lights run independent cycles with a second counter, like real Tashkent ones. Pedestrians react if you drive too close. Cars take real damage — bumpers fall off, panels crumple — but never explode.',
      },
      {
        icon: 'meaning',
        title: 'Food, fuel and repairs',
        body:
          'Around fifty food shops with names you know — Evos, Oqtepa Lavash, Havas, Korzinka — sell osh, lagʻmon, somsa and shashlik to refill your energy. Petrol stations and garages keep your car running.',
      },
    ],
    placesHeading: 'Places you will recognise',
    placesLead:
      'The map is built from real Tashkent landmarks and districts, laid out roughly as they are in life.',
    places: [
      'Chorsu bazaar',
      'Tashkent TV tower',
      'Hazrati Imom complex',
      'Kukeldash madrasa',
      'Minor mosque',
      'Navoiy theatre',
      'Mustaqillik square',
      'Magic City',
      'Mega Planet',
      'Humo Arena',
      'Bunyodkor stadium',
      'Olympic quarter and Ice Palace',
      'Yangi Oʻzbekiston park',
      'Botanical garden',
      'Tashkent railway station',
      'Tashkent airport',
    ],
    controlsHeading: 'Controls',
    controlsLead:
      'On a phone there is a joystick on the left and context buttons on the right, so you do not need a keyboard.',
    controls: [
      { key: 'W A S D', action: 'Walk / drive' },
      { key: 'Enter', action: 'Get in or out of a car' },
      { key: 'Space', action: 'Jump — handbrake while driving' },
      { key: 'Shift', action: 'Run' },
      { key: 'E', action: 'Buy food · fuel and repairs while driving' },
      { key: 'F', action: 'Punch' },
      { key: 'V', action: 'Interior camera' },
      { key: 'X', action: 'Open the city map' },
      { key: 'M', action: 'Next song on the radio' },
      { key: 'T', action: 'Fast-forward time' },
    ],
    shotsHeading: 'Screenshots',
    shots: [
      {
        src: 'tashkent-city-3',
        alt: 'Driving a white sedan down a Tashkent street in TASHKENT CITY, with an Uzbek flag, traffic lights and low-poly buildings ahead',
        caption: 'Driving through the centre. The flag and the domes are where you expect them.',
      },
      {
        src: 'tashkent-city-1',
        alt: 'The player character standing on a road beside parked cars, with trees and city buildings in the background',
        caption: 'On foot. Walk up to any car and press Enter.',
      },
      {
        src: 'tashkent-city-2',
        alt: 'The player standing next to a Chevrolet Cobalt with a prompt to get in, minimap in the corner and mission legend below',
        caption: 'Missions and the minimap sit on the edges of the screen.',
      },
      {
        src: 'tashkent-city-map',
        alt: 'The in-game city map of Tashkent showing named landmarks including Chorsu, the TV tower, Magic City, the airport and the Olympic quarter',
        caption: 'The full map, with every landmark named.',
      },
    ],
    detailsHeading: 'Details',
  },

  about: {
    heading: 'A studio in Tashkent',
    lead:
      'TONG INC is an independent studio based in Tashkent, Uzbekistan. We build games, business software and web products — our own, and sometimes other people’s.',
    story: [
      {
        heading: 'Why “TONG”',
        paragraphs: [
          '“Tong” means dawn in Uzbek — specifically the part of the morning before the sun is fully up, when the sky has colour but the day has not started yet. It is a good word for a studio that is at its own beginning, and a good mood for the kind of things we want to make: unhurried, warm, something you use with tea rather than adrenaline.',
          'It is also why the logo looks the way it does. Those are sunrise colours over a night sky.',
        ],
      },
      {
        heading: 'What we are trying to do',
        paragraphs: [
          'There is a gap that bothers us. A child in Tashkent can pick from a thousand polished mobile games, and almost none of them are in their own language or their own city. The few that are tend to be quick translations, where the interface fits but the writing does not.',
          'So our word game is not a game that happens to be available in Uzbek — the puzzle mechanic itself depends on how Uzbek spelling works. And our driving game is not a generic city with Uzbek street signs; it is Tashkent, rebuilt block by block.',
          'The same instinct applies to the software side. A warehouse app for a seller in Tashkent should be built for how that shop actually works, not translated from something designed elsewhere.',
        ],
      },
      {
        heading: 'How we operate',
        paragraphs: [
          'We are small and self-funded. There is no publisher setting our deadlines and no investor asking for engagement metrics, which is precisely why our games do not have engagement mechanics. No push notifications begging you to return. No energy timer. No account.',
          'It also means we move at the speed of one small team. We would rather delay a launch than ship something we would be embarrassed by.',
        ],
      },
    ],
    founderHeading: 'Founder',
    founderName: 'Sardor Ikhtiyorov',
    founderRole: 'Founder, TONG INC',
    founderBio:
      'Sardor founded TONG INC in Tashkent to build the games and tools he wanted to see made here. He works across design, development and the dictionary work behind Soʻzbogʻ — the 2,363 words in that game were assembled and checked entry by entry.',
    valuesHeading: 'What we hold to',
    values: [
      {
        icon: 'shield',
        title: 'We do not want your data',
        body:
          'Not as a compliance position — as a design choice. We build no profile of you, add no analytics of our own and require no account, because we do not need to know anything about you to make something good.',
      },
      {
        icon: 'offline',
        title: 'It should work without signal',
        body:
          'Connectivity is not even across Uzbekistan, or across most of the world. A game that stops working on the metro is a game that is broken.',
      },
      {
        icon: 'coin',
        title: 'Paying is optional, and stays optional',
        body:
          'You can finish our games without spending a coin. Ads only appear when you deliberately press a button asking for one. Nothing is locked behind a wall you have to pay through.',
      },
      {
        icon: 'language',
        title: 'Place deserves the effort',
        body:
          'Handling oʻ, gʻ, sh and ch correctly took real work in the game engine. So did putting Chorsu where Chorsu is. It would have been easier to ignore both. Doing it properly is the whole point.',
      },
    ],
  },

  contact: {
    heading: 'Contact',
    lead:
      'Partnerships, publishing, contract work, press, or a bug that is ruining your afternoon — it all comes to the same inbox, and it is read by the people who make the studio.',
    emailHeading: 'Email us directly',
    emailNote: 'The fastest way to reach us. We read everything.',
    formHeading: 'Or write it here',
    formNote:
      'Fill this in and it lands straight in our Telegram — no email app needed. Only what you type here is sent; nothing else about you is collected.',
    fields: {
      name: 'Your name',
      email: 'Your email',
      subject: 'Subject',
      message: 'Message',
    },
    placeholders: {
      name: 'Anvar Karimov',
      email: 'you@example.com',
      subject: 'What is this about?',
      message: 'Tell us what you need…',
    },
    send: 'Send message',
    sending: 'Sending…',
    sentHeading: 'Sent — thank you',
    sentBody: 'Your message reached us. We reply within one to three working days, usually to the email address you gave.',
    sendAnother: 'Send another message',
    errorHeading: 'That did not go through',
    errorBody: 'Something on our side failed. Nothing was lost — you can send the same message by email instead, or write on Telegram.',
    fallbackCta: 'Open in my email app',
    telegramHeading: 'Message us on Telegram',
    telegramNote: 'Usually the fastest reply.',
    locationHeading: 'Where we are',
    locationBody: 'Tashkent, Uzbekistan',
    responseHeading: 'Response time',
    responseBody:
      'We are a small team, so replies usually take one to three working days. Support questions get priority.',
  },

  legal: {
    updated: 'Last updated',
    updatedDate: 'August 25, 2026',
    tocHeading: 'On this page',
  },

  privacy: {
    heading: 'Privacy Policy',
    lead:
      'This policy covers this website and every game and application published by TONG INC. It is written to be read, not to be survived.',
    sections: [
      {
        heading: 'The short version',
        paragraphs: [
          'We do not ask for your personal information and we do not collect it. There is no account to create, we add no analytics of our own, and there is no profile of you anywhere on our side.',
          'Two things do involve Google, and both are your choice: the optional rewarded ads in Soʻzbogʻ, which run only when you press the button asking for one, and in-app purchases, which Google Play handles from start to finish. Everything below explains exactly what each one sees.',
        ],
      },
      {
        heading: 'Who we are',
        paragraphs: [
          'TONG INC is a game and software studio based in Tashkent, Uzbekistan. For any question about this policy or about your data, write to tolibjonfayz@gmail.com.',
        ],
      },
      {
        heading: 'What we do not collect',
        paragraphs: ['Our applications never ask for and never collect:'],
        bullets: [
          'Your name, phone number or email address',
          'Your location',
          'Your contacts, photos, files or microphone',
          'Any account or login credentials — there is no account system at all',
          'Analytics about how you play — we add no analytics SDK of our own (Google’s ad service is covered separately below)',
        ],
      },
      {
        heading: 'What is stored on your device',
        paragraphs: [
          'Our games save what they need to work, and they save it on your own device:',
        ],
        bullets: [
          'Which level you are on and which levels you have unlocked',
          'Your coin or money balance and anything you have bought in-game',
          'Daily puzzle results and your current streak',
          'Sound, music and display preferences',
        ],
      },
      {
        heading: 'How to delete everything',
        paragraphs: [
          'Because nothing is stored on our servers, deleting your data does not require asking us. In Soʻzbogʻ, open Settings → Manage → Clear progress, and everything saved is erased immediately.',
          'Uninstalling the app has exactly the same effect. For our browser game, clearing your browser’s site data for that page does the same. There is no copy of it anywhere else.',
        ],
      },
      {
        heading: 'Advertising',
        paragraphs: [
          'Advertising appears in Soʻzbogʻ only, it is optional, and it is never automatic. Ads do not appear between levels, on the win screen, or anywhere else on their own. They appear only when you press the “watch an ad” button in the shop to earn coins.',
          'When you press it, Google AdMob receives your device advertising identifier and an approximate, country-level location so it can select an ad. This is handled by Google under Google’s own terms; we receive nothing from it except a confirmation that the ad was watched, which is what adds coins to your balance.',
          'You can reset or delete your advertising identifier at any time in your Android settings, under Privacy → Ads.',
        ],
      },
      {
        heading: 'Purchases',
        paragraphs: [
          'Coins can be bought with real money in Soʻzbogʻ. This is entirely optional — the game can be completed without spending anything.',
          'Payments are handled end to end by Google Play. Card numbers, names and billing addresses go to Google, never to us. We do not see, store or transmit any payment information; we only receive a confirmation that a purchase completed.',
          'Purchase history lives in your Google Play account rather than in the app.',
        ],
      },
      {
        heading: 'This website',
        paragraphs: [
          'This website is a set of static pages. It sets no tracking cookies, runs no analytics, embeds no social media trackers, and carries no advertising.',
          'When you send the contact form, what you typed — your name, email address, subject and message — goes to our hosting provider and is forwarded straight to us on Telegram, and by email if we have that turned on. Nothing else is attached to it and it is not kept in a database. If you would rather not use the form, the same page shows our email address and Telegram handle so you can write directly.',
          'Your light or dark mode preference is stored in your browser only, so the site remembers it next time. It is never sent anywhere.',
          'Our hosting provider may keep standard server logs, such as IP addresses and requested pages, for security and reliability. We do not use those logs to build any profile of visitors.',
        ],
      },
      {
        heading: 'Children',
        paragraphs: [
          'Our games contain no chat, no user-generated content and no links out to the open web. Advertising only ever appears after a deliberate button press, so it cannot open by accident.',
          'If you want to prevent accidental purchases by a child, you can require a password for purchases in your Google Play settings.',
        ],
      },
      {
        heading: 'Third parties',
        paragraphs: [
          'Two Google services are involved in our Android apps: Google AdMob, for the optional rewarded ads described above, and Google Play Billing, for optional purchases. Both are governed by Google’s own privacy terms.',
          'Our browser game loads the three.js graphics library from a public code network (cdnjs). That request reveals your IP address to that network, as any web request does; no other information is sent and we receive nothing from it.',
          'TASHKENT CITY can also be opened inside Telegram. When it is, the game keeps a copy of your progress in Telegram’s own cloud storage for your account, so it survives a change of device. It does not read your Telegram profile, and none of it reaches us. Opened in an ordinary browser, no such copy is made.',
        ],
      },
      {
        heading: 'Your rights',
        paragraphs: [
          'Data protection law gives people rights to access, correct and delete personal data held about them. Because we hold no personal data about you, there is nothing for us to produce, correct or erase — but if you believe otherwise, write to us and we will look into it properly.',
        ],
      },
      {
        heading: 'Changes to this policy',
        paragraphs: [
          'If this policy changes, the date at the top of this page changes with it. Material changes to how our apps handle data will also be noted in the app release notes.',
        ],
      },
      {
        heading: 'Contact',
        paragraphs: [
          'Questions about privacy, or anything else: tolibjonfayz@gmail.com. We are in Tashkent, Uzbekistan.',
        ],
      },
    ],
  },

  terms: {
    heading: 'Terms of Use',
    lead:
      'These terms apply to this website and to every game and application published by TONG INC.',
    sections: [
      {
        heading: 'Agreement',
        paragraphs: [
          'By installing, opening or using a TONG INC application, or by using this website, you agree to these terms. If you do not agree with them, please do not use our applications or this site.',
        ],
      },
      {
        heading: 'Who may use our apps',
        paragraphs: [
          'Our games are rated for general audiences and contain no sexual or gambling content. Children may use them. If you are under the age at which you can agree to terms on your own in your country, an adult responsible for you should agree to these terms on your behalf.',
        ],
      },
      {
        heading: 'Your licence to use our apps',
        paragraphs: [
          'We grant you a personal, non-exclusive, non-transferable, revocable licence to install and use our applications on devices you control, for your own non-commercial use.',
          'This is a licence to use the software, not a sale of it. We keep ownership of the applications and everything in them.',
        ],
      },
      {
        heading: 'What you may not do',
        paragraphs: ['You agree not to:'],
        bullets: [
          'Copy, modify, translate or create derivative works from our applications',
          'Reverse engineer, decompile or disassemble them, except where that right cannot lawfully be excluded',
          'Redistribute, sell, rent, sublicense or publish our applications or their content',
          'Use automated tools, modified clients or exploits to alter behaviour, progress or currency',
          'Remove or obscure any copyright, trademark or other proprietary notice',
        ],
      },
      {
        heading: 'Virtual items and purchases',
        paragraphs: [
          'Our games may contain virtual currency, such as coins, and virtual items, such as hints. These have no monetary value, cannot be exchanged for real money, and cannot be transferred outside the game.',
          'Virtual items are licensed for use inside the game, not owned by you. If a game is discontinued, or if your progress is deleted from your device, any virtual items go with it.',
          'All purchases are processed by Google Play and are subject to Google’s payment terms and refund policy. Refund requests should be made through Google Play. We are not able to process refunds directly.',
        ],
      },
      {
        heading: 'Advertising',
        paragraphs: [
          'Our games may offer optional rewarded advertising, shown only when you choose to watch an ad in exchange for in-game currency. The content of those advertisements is supplied by Google AdMob and its advertisers, not by us, and we do not control or endorse it.',
        ],
      },
      {
        heading: 'Testing releases and availability',
        paragraphs: [
          'Some of our applications, including Soʻzbogʻ at the time of writing, are distributed through closed testing on Google Play. Testing releases are provided as they are, may contain defects, and may change or be withdrawn without notice. Progress made during a testing period may not carry over to a public release.',
          'Products described on this site as “in development” are not released, may change completely, and may never be released at all. Nothing on this page is a promise that they will be.',
          'We do not guarantee that our applications or this website will be available without interruption, or that they will remain compatible with every device or browser version.',
        ],
      },
      {
        heading: 'Real places and third-party names',
        paragraphs: [
          'TASHKENT CITY contains stylised depictions of real places in Tashkent, and mentions the names of real businesses in its shop signage and food menus. These are used descriptively, to make a recognisable city. They do not imply any sponsorship, endorsement or affiliation, and none of those businesses is connected to TONG INC. If you represent one of them and would like a depiction changed or removed, write to us and we will do it.',
        ],
      },
      {
        heading: 'Intellectual property',
        paragraphs: [
          'The TONG INC and TONG GAMES names and logos, the names of our products, and the design, code, artwork, audio and dictionary content of our applications are owned by TONG INC and protected by copyright and trademark law.',
          'You may use our name and logo for the purpose of reporting on or reviewing our products. Any other use requires our written permission.',
        ],
      },
      {
        heading: 'Third-party services',
        paragraphs: [
          'Our applications use Google Play services, Google Play Billing and Google AdMob. Our browser game loads the three.js library from a public code network. Your use of those services is also governed by their own terms. We are not responsible for the operation of third-party services.',
        ],
      },
      {
        heading: 'No warranty',
        paragraphs: [
          'Our applications and this website are provided “as is” and “as available”, without warranties of any kind, whether express or implied, including implied warranties of merchantability, fitness for a particular purpose and non-infringement, to the fullest extent permitted by law.',
        ],
      },
      {
        heading: 'Limitation of liability',
        paragraphs: [
          'To the fullest extent permitted by law, TONG INC is not liable for indirect, incidental, special or consequential damages, or for loss of data, profits or goodwill, arising from your use of our applications or this website.',
          'Nothing in these terms limits liability that cannot lawfully be limited, including liability for death or personal injury caused by negligence, or for fraud.',
        ],
      },
      {
        heading: 'Governing law',
        paragraphs: [
          'These terms are governed by the laws of the Republic of Uzbekistan. Nothing here removes any mandatory consumer protection right you have under the law of the country where you live.',
        ],
      },
      {
        heading: 'Changes to these terms',
        paragraphs: [
          'We may update these terms. The date at the top of this page shows when they were last changed. Continuing to use our applications after a change means you accept the updated terms.',
        ],
      },
      {
        heading: 'Contact',
        paragraphs: [
          'Questions about these terms: tolibjonfayz@gmail.com — TONG INC, Tashkent, Uzbekistan.',
        ],
      },
    ],
  },

  support: {
    heading: 'Support',
    lead:
      'Something broken, something confusing, or something you would like to see? This page covers the questions we get most, and how to reach a human for everything else.',
    contactHeading: 'Talk to us',
    contactBody:
      'Support email, read by the studio directly. We aim to reply within one to three working days.',
    faqHeading: 'Frequently asked questions',
    faq: [
      {
        q: 'Are your games free?',
        a: 'Yes. TASHKENT CITY is completely free in the browser. Soʻzbogʻ is free to play and can be finished from the first level to the last without spending anything — coins can optionally be bought, but they are never required.',
      },
      {
        q: 'Do I need an internet connection?',
        a: 'Soʻzbogʻ works fully offline; the dictionary, sounds, music and fonts are all inside the app. TASHKENT CITY runs in the browser, so it needs a connection to load the page, but not to keep playing once it has.',
      },
      {
        q: 'Do I need to create an account?',
        a: 'No. None of our products has an account system, a sign-up or a login. You open them and use them.',
      },
      {
        q: 'Which devices do they run on?',
        a: 'Soʻzbogʻ is an Android game distributed through Google Play; there is no iOS version at the moment. TASHKENT CITY runs in any modern browser on a laptop or a phone.',
      },
      {
        q: 'Why can I not find Soʻzbogʻ on Google Play?',
        a: 'The game is currently in closed testing, which means the Play Store listing is only visible to invited testers. It has not been publicly released yet. Write to us if you would like to join the test group.',
      },
      {
        q: 'TASHKENT CITY runs slowly on my device. What can I do?',
        a: 'It is a 3D game running in a browser, so it asks a lot of older phones and laptops. Closing other tabs helps most. On a phone, plugging in to charge often stops the system from throttling performance.',
      },
      {
        q: 'Where is my progress saved, and what happens if I change devices?',
        a: 'In Soʻzbogʻ progress is saved on your device only — nothing goes to a server, which is exactly why we never ask for an account. TASHKENT CITY behaves the same way in an ordinary browser. The one exception: open TASHKENT CITY inside Telegram and it also keeps a copy in your Telegram cloud storage, so that progress does survive a change of device. Otherwise, uninstalling the app, clearing browser data or switching devices means starting fresh.',
      },
      {
        q: 'How do I delete my data?',
        a: 'In Soʻzbogʻ: Settings → Manage → Clear progress. Uninstalling the app does the same. For TASHKENT CITY, clear your browser’s site data for the game page. There is no copy anywhere else.',
      },
      {
        q: 'I bought coins and they did not arrive.',
        a: 'First, reopen the game while connected to the internet — pending purchases usually complete on their own. If the coins still do not appear, email us with the date of the purchase and the Google Play order number, and we will sort it out.',
      },
      {
        q: 'How do I get a refund?',
        a: 'Refunds are handled by Google Play, not by us, so requests need to go through your Google Play account or Google Play support. If Google declines and you think something has genuinely gone wrong, write to us anyway and we will look at it.',
      },
      {
        q: 'I found a word that is missing, or a meaning that is wrong.',
        a: 'Please tell us — this is genuinely useful. The dictionary was compiled by hand, so mistakes are ours and we want to fix them. Send the word and the level it appeared in.',
      },
      {
        q: 'Can I hire you to build something?',
        a: 'Possibly, yes. We take on websites and custom software alongside our own products. Write to us describing what it needs to do and roughly when you need it.',
      },
    ],
    reportHeading: 'Reporting a bug',
    reportBody:
      'If something crashes or behaves strangely, the more of the following you can include, the faster we can fix it:',
    reportBullets: [
      'Your device and its Android or browser version',
      'Which product, and which screen or level you were on',
      'What you did just before it happened',
      'A screenshot or short screen recording, if you can',
    ],
  },

  notFound: {
    code: '404',
    heading: 'This page has not risen yet',
    lead:
      'The address you followed does not exist on this site. It may have been moved, or the link may simply be wrong. Here is the way back.',
    linksHeading: 'Try one of these',
  },

  footer: {
    tagline:
      'Game and software studio in Tashkent, Uzbekistan. Games under the TONG GAMES label.',
    studioHeading: 'Studio',
    legalHeading: 'Legal',
    connectHeading: 'Contact',
    privacy: 'Privacy Policy',
    terms: 'Terms of Use',
    support: 'Support',
    rights: 'All rights reserved.',
    builtIn: 'Made in Tashkent',
  },
}
