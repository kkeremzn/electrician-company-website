import type { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import { breadcrumbJsonLd } from '@/lib/seo'

const title = 'Elektrik Malzemeleri — Rize Elektrik Mağazası'
const description = 'Rize elektrik malzemeleri: kablo, sigorta, elektrik panosu, anahtar, priz, LED ampul, LED şerit, aydınlatma armatürleri ve kompanzasyon ürünleri. Temizler Elektrik Rize mağazasında.'

export const metadata: Metadata = {
  title,
  description,
  keywords: ['rize elektrik malzemeleri', 'elektrik malzemeleri rize', 'rize elektrik mağazası', 'rize kablo', 'rize led', 'rize aydınlatma', 'rize priz anahtar'],
  alternates: { canonical: '/products' },
  openGraph: { title, description, url: '/products' },
}

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd('Ürünler', '/products')} />
      {children}
    </>
  )
}
