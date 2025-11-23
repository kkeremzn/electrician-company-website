import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Temizler Elektrik - Profesyonel Elektrik Çözümleri | Rize',
  description: 'Rize\'de elektrik malzemeleri mağazası ve elektrikçi saha hizmetleri. Kompanzasyon pano sistemleri, kablolar, LED ürünler, aydınlatma, anahtarlar ve profesyonel elektrik bakımı. 35+ yıllık deneyim.',
  keywords: 'elektrikçi rize, elektrik malzemeleri rize, kompanzasyon pano, elektrik bakım, elektrik tesisat, led aydınlatma, elektrik arıza tespiti, temizler elektrik',
  authors: [{ name: 'Temizler Elektrik' }],
  creator: 'Temizler Elektrik',
  publisher: 'Temizler Elektrik',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://temizlerelektrik.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Temizler Elektrik - Profesyonel Elektrik Çözümleri | Rize',
    description: 'Rize\'de elektrik malzemeleri mağazası ve elektrikçi saha hizmetleri. Kompanzasyon pano sistemleri, kablolar, LED ürünler ve profesyonel elektrik bakımı.',
    url: 'https://temizlerelektrik.com',
    siteName: 'Temizler Elektrik',
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Temizler Elektrik - Profesyonel Elektrik Çözümleri',
    description: 'Rize\'de elektrik malzemeleri ve elektrikçi hizmetleri. 35+ yıllık deneyim.',
  },
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className="dark">
      <body>{children}</body>
    </html>
  )
}

