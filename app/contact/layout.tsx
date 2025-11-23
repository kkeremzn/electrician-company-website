import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'İletişim - Temizler Elektrik | Rize Elektrikçi',
  description: 'Temizler Elektrik iletişim bilgileri. Rize, Müftü Mahallesi Atatürk Caddesi. Telefon: 0 536 810 85 53, 0 464 214 06 64. Elektrik hizmetleri için bizimle iletişime geçin.',
  keywords: 'temizler elektrik iletişim, rize elektrikçi telefon, elektrikçi rize adres, rize elektrik malzemeleri',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

