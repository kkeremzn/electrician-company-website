import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import Hero from '@/components/Hero'
import FeatureCards from '@/components/FeatureCards'
import SeoContent from '@/components/SeoContent'
import JsonLd from '@/components/JsonLd'
import { faqJsonLd } from '@/lib/seo'

export default function Home() {
  return (
    <main className="min-h-screen">
      <JsonLd data={faqJsonLd()} />
      <Navbar />
      <Hero />
      <FeatureCards />
      <SeoContent />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
