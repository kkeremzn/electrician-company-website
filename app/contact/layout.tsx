import type { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import { breadcrumbJsonLd } from '@/lib/seo'

const title = 'İletişim — Rize Elektrikçi Telefon ve Adres'
const description = 'Temizler Elektrik Rize iletişim: Müftü Mahallesi Atatürk Caddesi No: 560, Merkez, Rize. ☎ 0 536 810 85 53 – 0 464 214 06 64. Pzt–Cmt 09:00–19:00. Elektrikçi ve elektrik malzemesi için arayın.'

export const metadata: Metadata = {
  title,
  description,
  keywords: ['temizler elektrik iletişim', 'temizler elektrik telefon', 'rize elektrikçi telefon', 'rize elektrikçi adres', 'rize elektrik mağazası adres'],
  alternates: { canonical: '/contact' },
  openGraph: { title, description, url: '/contact' },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd('İletişim', '/contact')} />
      {children}
    </>
  )
}
