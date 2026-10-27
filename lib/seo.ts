export const SITE_URL = 'https://temizlerelektrik.com'

export const BUSINESS = {
  name: 'Temizler Elektrik',
  phone: '+90-536-810-85-53',
  phoneLandline: '+90-464-214-06-64',
  email: 'temizler_elektrik@hotmail.com',
  street: 'Müftü Mahallesi Atatürk Caddesi No: 560',
  district: 'Merkez',
  city: 'Rize',
  postalCode: '53950',
  lat: 41.02449423956182,
  lng: 40.53419301759395,
  foundingYear: '1990',
  instagram: 'https://www.instagram.com/temizlerelektrik',
}

export const RIZE_DISTRICTS = [
  'Rize Merkez',
  'Çayeli',
  'Pazar',
  'Ardeşen',
  'Fındıklı',
  'Güneysu',
  'İyidere',
  'Derepazarı',
  'Kalkandere',
  'İkizdere',
  'Çamlıhemşin',
  'Hemşin',
]

export const FAQS = [
  {
    q: "Rize'de elektrikçi hizmeti veriyor musunuz?",
    a: "Evet. Temizler Elektrik olarak 1990'dan bu yana Rize Merkez ve tüm ilçelerde konut, iş yeri ve endüstriyel tesislere elektrik tesisatı, arıza tespiti, bakım ve onarım hizmeti veriyoruz.",
  },
  {
    q: "Rize'de elektrik malzemesi nereden alınır?",
    a: "Müftü Mahallesi Atatürk Caddesi No: 560, Rize Merkez adresindeki mağazamızda kablo, sigorta, pano, anahtar, priz, LED aydınlatma ve kompanzasyon malzemeleri dahil geniş bir elektrik malzemesi yelpazesi bulunur.",
  },
  {
    q: 'Kompanzasyon panosu kurulumu yapıyor musunuz?',
    a: 'Evet. Reaktif güç cezalarından kurtulmak isteyen işletmeler için kompanzasyon panosu tasarımı, kurulumu, kondansatör ve reaktör değişimi ile periyodik bakım hizmeti sunuyoruz.',
  },
  {
    q: 'Hangi ilçelere hizmet veriyorsunuz?',
    a: 'Rize Merkez başta olmak üzere Çayeli, Pazar, Ardeşen, Fındıklı, Güneysu, İyidere, Derepazarı, Kalkandere, İkizdere, Çamlıhemşin ve Hemşin ilçelerine hizmet veriyoruz.',
  },
  {
    q: 'Çalışma saatleriniz nedir?',
    a: 'Mağazamız Pazartesi–Cumartesi 09:00–19:00 saatleri arasında açıktır. Bize 0 536 810 85 53 veya 0 464 214 06 64 numaralarından ulaşabilirsiniz.',
  },
]

export function localBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': ['Electrician', 'HardwareStore'],
    '@id': `${SITE_URL}/#business`,
    name: BUSINESS.name,
    alternateName: ['Temizler Elektrik Rize', 'Rize Temizler Elektrik'],
    description:
      "Rize'de 1990'dan beri elektrik malzemeleri mağazası ve elektrikçi hizmetleri: elektrik tesisatı, arıza tespiti, kompanzasyon panosu, LED aydınlatma ve endüstriyel elektrik çözümleri.",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: [`${SITE_URL}/images/magaza.jpg`, `${SITE_URL}/logo.png`],
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    foundingDate: BUSINESS.foundingYear,
    priceRange: '₺₺',
    currenciesAccepted: 'TRY',
    paymentAccepted: 'Nakit, Kredi Kartı',
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.street,
      addressLocality: BUSINESS.district,
      addressRegion: BUSINESS.city,
      postalCode: BUSINESS.postalCode,
      addressCountry: 'TR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS.lat,
      longitude: BUSINESS.lng,
    },
    hasMap: `https://www.google.com/maps?q=${BUSINESS.lat},${BUSINESS.lng}`,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '19:00',
      },
    ],
    contactPoint: [
      { '@type': 'ContactPoint', telephone: BUSINESS.phone, contactType: 'customer service', areaServed: 'TR', availableLanguage: 'Turkish' },
      { '@type': 'ContactPoint', telephone: BUSINESS.phoneLandline, contactType: 'sales', areaServed: 'TR', availableLanguage: 'Turkish' },
    ],
    areaServed: [
      { '@type': 'City', name: 'Rize' },
      ...RIZE_DISTRICTS.filter((d) => d !== 'Rize Merkez').map((name) => ({ '@type': 'City', name })),
    ],
    sameAs: [BUSINESS.instagram],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Elektrik Hizmetleri ve Malzemeleri',
      itemListElement: [
        'Kompanzasyon Pano Sistemleri',
        'Elektrik Arıza Tespiti ve Onarımı',
        'Elektrik Tesisatı Kurulumu',
        'Konut Elektrik Bakımı',
        'LED Aydınlatma Kurulumu',
        'Endüstriyel Elektrik Çözümleri',
        'Elektrik Panosu Kurulumu',
        'Elektrik Malzemeleri Satışı',
      ].map((name) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name, areaServed: 'Rize' } })),
    },
  }
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: BUSINESS.name,
    inLanguage: 'tr-TR',
    publisher: { '@id': `${SITE_URL}/#business` },
  }
}

export function faqJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }
}

export function breadcrumbJsonLd(name: string, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name, item: `${SITE_URL}${path}` },
    ],
  }
}

export function servicesJsonLd() {
  const services = [
    ['Kompanzasyon Pano Sistemleri', 'Reaktif güç kompanzasyonu için pano tasarımı, kurulumu ve bakımı.'],
    ['Elektrik Arıza Tespiti ve Onarımı', 'Konut ve iş yerlerinde elektrik arızalarının tespiti ve onarımı.'],
    ['Elektrik Tesisatı Kurulumu', 'Yeni yapı ve tadilatlarda standartlara uygun tesisat kurulumu ve yenileme.'],
    ['Konut Elektrik Bakımı', 'Evler için güvenlik kontrolü, priz ve anahtar yenileme, önleyici bakım.'],
    ['LED Aydınlatma Kurulumu', 'İç ve dış mekan LED aydınlatma sistemlerinin kurulumu.'],
    ['Endüstriyel Elektrik Çözümleri', 'Üç fazlı sistemler, motor kontrol panoları ve güç dağıtımı.'],
    ['Elektrik Panosu Kurulumu', 'Ana ve alt dağıtım panosu kurulumu ve yükseltmesi.'],
  ]
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Temizler Elektrik Rize Elektrikçi Hizmetleri',
    itemListElement: services.map(([name, description], i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Service',
        name,
        description,
        serviceType: name,
        provider: { '@id': `${SITE_URL}/#business` },
        areaServed: { '@type': 'City', name: 'Rize' },
        url: `${SITE_URL}/services`,
      },
    })),
  }
}
