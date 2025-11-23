'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import SectionTitle from '@/components/SectionTitle'
import ServiceCard from '@/components/ServiceCard'
import { Wrench, Zap, Home, Factory, Lightbulb, Settings, Gauge } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Hizmetlerimiz - Temizler Elektrik | Kompanzasyon Pano Sistemleri Rize',
  description: 'Kompanzasyon pano sistemleri, elektrik arıza tespiti, konut elektrik bakımı, yeni tesisat kurulumu, aydınlatma kurulumu, endüstriyel elektrik çözümleri. Rize\'de profesyonel elektrikçi hizmetleri.',
  keywords: 'kompanzasyon pano rize, elektrikçi rize, elektrik arıza tespiti, elektrik bakım, elektrik tesisat, aydınlatma kurulumu, endüstriyel elektrik',
}

const services = [
  {
    icon: Wrench,
    title: 'Elektrik Arıza Tespiti',
    description: 'Konutlar ve ticari mekanlarda elektrik sorunlarının hızlı teşhisi ve onarımı.',
    features: [
      'Devre arıza tespiti',
      'Kablo sorunu teşhisi',
      'Panel kontrolü',
      'Acil onarım hizmetleri',
    ],
  },
  {
    icon: Home,
    title: 'Konut Elektrik Bakımı',
    description: 'Konutlar için kapsamlı elektrik bakım hizmetleri.',
    features: [
      'Düzenli güvenlik kontrolleri',
      'Önleyici bakım',
      'Priz ve anahtar yenileme',
      'GFCI kurulumu',
    ],
  },
  {
    icon: Zap,
    title: 'Yeni Tesisat Kurulumu',
    description: 'Yeni yapılar ve renovasyonlar için profesyonel tesisat kurulumu.',
    features: [
      'Tam yeniden tesisat',
      'Standartlara uygun kurulum',
      'Panel yükseltmeleri',
      'Topraklama sistemleri',
    ],
  },
  {
    icon: Lightbulb,
    title: 'Aydınlatma Kurulumu',
    description: 'Her türlü aydınlatma çözümünün uzman kurulumu.',
    features: [
      'LED aydınlatma sistemleri',
      'Dış mekan aydınlatması',
      'Akıllı aydınlatma entegrasyonu',
      'Enerji verimli çözümler',
    ],
  },
  {
    icon: Factory,
    title: 'Endüstriyel Elektrik Çözümleri',
    description: 'Fabrikalar ve endüstriyel tesisler için özel elektrik hizmetleri.',
    features: [
      'Üç fazlı sistemler',
      'Motor kontrol panelleri',
      'Endüstriyel otomasyon',
      'Güç dağıtımı',
    ],
  },
  {
    icon: Settings,
    title: 'Panel Kurulumu & Yükseltme',
    description: 'Elektrik paneli kurulumu, yükseltme ve bakım hizmetleri.',
    features: [
      'Ana panel kurulumu',
      'Alt panel kurulumu',
      'Devre kesici yükseltmeleri',
      'Yük hesaplamaları',
    ],
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-20">
      <Navbar />
      
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Hizmetlerimiz"
            subtitle="İhtiyaçlarınıza özel profesyonel elektrik çözümleri"
          />

          {/* Featured Service - Kompanzasyon */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="glass rounded-2xl p-8 md:p-12 border-2 border-neon-orange/50 hover:border-neon-orange transition-all duration-300 relative overflow-hidden group">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-neon-orange/10 via-transparent to-neon-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-6">
                  <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-neon-orange to-neon-blue group-hover:scale-110 transition-transform duration-300">
                    <Gauge className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-3xl md:text-4xl font-bold text-white">
                        Kompanzasyon Pano Sistemleri
                      </h3>
                      <span className="px-3 py-1 bg-neon-orange text-white text-sm font-bold rounded-full">
                        ANA HİZMET
                      </span>
                    </div>
                    <p className="text-gray-300 text-lg">
                      Endüstriyel ve ticari tesisler için profesyonel kompanzasyon panosu tasarımı, kurulumu ve bakım hizmetleri. Enerji verimliliğini artırın, reaktif güç cezalarından kurtulun.
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                  {[
                    'Reaktif güç kompanzasyonu',
                    'Otomatik kompanzasyon sistemleri',
                    'Kondansatör bank kurulumu',
                    'Panel tasarım ve montaj',
                    'Bakım ve onarım hizmetleri',
                    'Enerji analizi ve ölçüm',
                    'CE belgeli ekipmanlar',
                    '7/24 teknik destek'
                  ].map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex items-start space-x-2"
                    >
                      <span className="text-neon-orange mt-1">✓</span>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Other Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                index={index}
              />
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20 text-center glass rounded-2xl p-12 border border-neon-blue/20"
          >
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-neon-blue to-neon-orange bg-clip-text text-transparent">
              Profesyonel Elektrik Hizmetlerine mi İhtiyacınız Var?
            </h3>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Ücretsiz danışmanlık ve teklif için bugün bizimle iletişime geçin. Uzman ekibimiz tüm elektrik ihtiyaçlarınızda yardımcı olmaya hazır.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-orange text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-neon-blue/50 transition-all duration-300 hover:scale-105"
            >
              <span>Teklif Al</span>
              <Zap className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}

