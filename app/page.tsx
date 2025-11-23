import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import Hero from '@/components/Hero'
import FeatureCards from '@/components/FeatureCards'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <FeatureCards />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}

