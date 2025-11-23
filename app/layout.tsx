import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Temizler Elektrik - Profesyonel Elektrik Çözümleri',
  description: 'Elektrik malzemeleri mağazası ve elektrikçi saha hizmetleri. Kablolar, LED ürünler, aydınlatma, anahtarlar ve profesyonel elektrik bakımı.',
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

