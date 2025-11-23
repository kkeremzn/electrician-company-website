import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ürünler - Temizler Elektrik | Elektrik Malzemeleri Rize',
  description: 'Geniş ürün yelpazemizden elektrik malzemeleri: Kablolar, LED ürünler, lambalar, anahtarlar, prizler, paneller, aletler ve daha fazlası. Rize\'de kaliteli elektrik malzemeleri.',
  keywords: 'elektrik malzemeleri rize, kablo, led ürünler, elektrik aletleri, priz, anahtar, elektrik panosu',
}

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

