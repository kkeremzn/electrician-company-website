import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hizmetlerimiz - Temizler Elektrik | Kompanzasyon Pano Sistemleri Rize',
  description: 'Kompanzasyon pano sistemleri, elektrik arıza tespiti, konut elektrik bakımı, yeni tesisat kurulumu, aydınlatma kurulumu, endüstriyel elektrik çözümleri. Rize\'de profesyonel elektrikçi hizmetleri.',
  keywords: 'kompanzasyon pano rize, elektrikçi rize, elektrik arıza tespiti, elektrik bakım, elektrik tesisat, aydınlatma kurulumu, endüstriyel elektrik',
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

