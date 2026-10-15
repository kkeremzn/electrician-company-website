import type { Metadata, Viewport } from 'next'
import './globals.css'
import JsonLd from '@/components/JsonLd'
import { SITE_URL, localBusinessJsonLd, websiteJsonLd } from '@/lib/seo'

const title = 'Temizler Elektrik | Rize Elektrik Malzemeleri ve Elektrikçi'
const description =
  "Rize elektrik malzemeleri ve elektrikçi hizmetleri — Temizler Elektrik. 1990'dan beri Rize'de elektrik tesisatı, arıza tespiti, kompanzasyon panosu, kablo, LED aydınlatma, priz ve anahtar. ☎ 0 536 810 85 53"

export const viewport: Viewport = {
  themeColor: '#050710',
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: '%s | Temizler Elektrik Rize',
  },
  description,
  keywords: [
    'rize elektrik',
    'elektrik rize',
    'temizler elektrik',
    'temizler elektrik rize',
    'rize elektrikçi',
    'elektrikçi rize',
    'rize elektrik malzemeleri',
    'elektrik malzemeleri rize',
    'rize elektrik mağazası',
    'rize kompanzasyon',
    'kompanzasyon pano rize',
    'rize elektrik tesisatı',
    'rize elektrik arıza',
    'rize led aydınlatma',
    'çayeli elektrikçi',
    'pazar elektrikçi',
    'ardeşen elektrikçi',
  ],
  applicationName: 'Temizler Elektrik',
  authors: [{ name: 'Temizler Elektrik', url: SITE_URL }],
  creator: 'Temizler Elektrik',
  publisher: 'Temizler Elektrik',
  category: 'Elektrik',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title,
    description,
    url: SITE_URL,
    siteName: 'Temizler Elektrik',
    locale: 'tr_TR',
    type: 'website',
    images: [
      {
        url: '/images/magaza.jpg',
        width: 4032,
        height: 3024,
        alt: 'Temizler Elektrik mağazası — Rize',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/images/magaza.jpg'],
  },
  other: {
    'geo.region': 'TR-53',
    'geo.placename': 'Rize',
    'geo.position': '41.024494;40.534193',
    ICBM: '41.024494, 40.534193',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.png', sizes: '48x48', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
    shortcut: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className="dark">
      <body>
        <JsonLd data={localBusinessJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
        {children}
      </body>
    </html>
  )
}
