import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Referanslar - Temizler Elektrik | İş Ortaklarımız',
  description: 'Temizler Elektrik referansları ve iş ortakları. Siemens, Schneider, Philips ve daha fazlası ile güvenilir elektrik çözümleri.',
  keywords: 'temizler elektrik referanslar, elektrik markaları, iş ortakları rize',
}

export default function ReferencesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
