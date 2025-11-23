import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hakkımızda - Temizler Elektrik | 35+ Yıllık Deneyim Rize',
  description: 'Temizler Elektrik - Rize\'de 35+ yıllık deneyimle elektrik malzemeleri ve profesyonel elektrikçi hizmetleri. 30+ uzman ekip üyesi, 1000+ tamamlanan proje.',
  keywords: 'temizler elektrik hakkında, rize elektrikçi, elektrik firması rize, elektrik malzemeleri mağazası rize',
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

