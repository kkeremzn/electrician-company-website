import type { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import { breadcrumbJsonLd } from '@/lib/seo'

const title = "Hakkımızda — 1990'dan Beri Rize'nin Elektrikçisi"
const description = "Temizler Elektrik, 1990'dan bu yana Rize'de elektrik malzemeleri mağazası ve elektrikçi hizmetleri sunan köklü bir aile firmasıdır. 35+ yıllık deneyim, 1000+ tamamlanan proje."

export const metadata: Metadata = {
  title,
  description,
  keywords: ['temizler elektrik', 'temizler elektrik hakkında', 'rize elektrikçi', 'rize elektrik firması', 'rize elektrik malzemeleri mağazası'],
  alternates: { canonical: '/about' },
  openGraph: { title, description, url: '/about' },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd('Hakkımızda', '/about')} />
      {children}
    </>
  )
}
