import type { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import { breadcrumbJsonLd } from '@/lib/seo'

const title = "Referanslarımız — Rize'de Tamamlanan Elektrik Projeleri"
const description = 'Temizler Elektrik referansları: Çaykur, Çaykur Rizespor, Recep Tayyip Erdoğan Üniversitesi, Rize İl Özel İdaresi, Sağlık Bakanlığı ve daha fazlası için elektrik tesisatı ve malzeme tedariki.'

export const metadata: Metadata = {
  title,
  description,
  keywords: ['temizler elektrik referanslar', 'rize elektrik projeleri', 'rize elektrik taahhüt', 'rize elektrik müteahhit'],
  alternates: { canonical: '/references' },
  openGraph: { title, description, url: '/references' },
}

export default function ReferencesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd('Referanslar', '/references')} />
      {children}
    </>
  )
}
