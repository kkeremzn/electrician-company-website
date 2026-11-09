'use client'

import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import SectionTitle from '@/components/SectionTitle'
import ReferenceCard from '@/components/ReferenceCard'
import referencesData from '@/data/references.json'

export default function ReferencesPage() {
  return (
    <main className="min-h-screen pt-20">
      <Navbar />

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            as="h1"
            title="Referanslarımız"
            subtitle="Yıllardır güvenle çalıştığımız markalar ve iş ortaklarımız"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {referencesData.map((reference, index) => (
              <ReferenceCard key={reference.id} reference={reference} index={index} />
            ))}
          </div>

          <p className="text-gray-400 text-lg text-center max-w-3xl mx-auto mt-12 leading-relaxed">
            Bu kurumlar için yürüttüğümüz işlerde kazandığımız deneyimi ev ve iş yerlerine de taşıyoruz.{' '}
            <Link href="/services" className="text-neon-blue hover:underline">Elektrik tesisatı ve bakım hizmetlerimizi</Link>{' '}
            inceleyebilirsiniz.
          </p>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
