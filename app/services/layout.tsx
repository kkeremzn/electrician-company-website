import type { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import { breadcrumbJsonLd } from '@/lib/seo'

const title = 'Rize Elektrikçi Hizmetleri — Kompanzasyon, Tesisat, Arıza'
const description = 'Rize elektrikçi hizmetleri: kompanzasyon pano sistemleri, elektrik arıza tespiti, elektrik tesisatı, konut elektrik bakımı, LED aydınlatma kurulumu ve endüstriyel elektrik çözümleri. Rize ve tüm ilçeler.'

export const metadata: Metadata = {
  title,
  description,
  keywords: ['rize elektrikçi', 'elektrikçi rize', 'rize kompanzasyon', 'kompanzasyon pano rize', 'rize elektrik arıza', 'rize elektrik tesisatı', 'rize acil elektrikçi', 'çayeli elektrikçi', 'pazar elektrikçi', 'ardeşen elektrikçi'],
  alternates: { canonical: '/services' },
  openGraph: { title, description, url: '/services' },
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd('Hizmetler', '/services')} />
      {children}
    </>
  )
}
