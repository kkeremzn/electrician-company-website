'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import SectionTitle from '@/components/SectionTitle'
import { motion } from 'framer-motion'
import { Award, Users, Clock, Target } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Hakkımızda - Temizler Elektrik | 35+ Yıllık Deneyim Rize',
  description: 'Temizler Elektrik - Rize\'de 35+ yıllık deneyimle elektrik malzemeleri ve profesyonel elektrikçi hizmetleri. 30+ uzman ekip üyesi, 1000+ tamamlanan proje.',
  keywords: 'temizler elektrik hakkında, rize elektrikçi, elektrik firması rize, elektrik malzemeleri mağazası rize',
}

const milestones = [
  {
    year: '1990',
    title: 'Şirket Kuruluşu',
    description: 'Kaliteli ürün ve hizmet sunma vizyonuyla küçük bir elektrik malzemeleri mağazası olarak başladık.',
  },
  {
    year: '2005',
    title: 'Hizmet Genişlemesi',
    description: 'Hizmetlerimizi profesyonel saha elektrik işleri ve endüstriyel çözümleri içerecek şekilde genişlettik.',
  },
  {
    year: '2015',
    title: 'Ekip Büyümesi',
    description: 'Sertifikalı elektrikçilerden oluşan bir ekibe dönüştük ve ürün envanterimizi önemli ölçüde genişlettik.',
  },
  {
    year: '2025',
    title: 'Modern Çözümler',
    description: 'Modern talepleri karşılamak için akıllı elektrik çözümleri ve LED teknolojisini tanıttık.',
  },
]

const stats = [
  { icon: Users, value: '30+', label: 'Uzman Ekip Üyesi' },
  { icon: Award, value: '1000+', label: 'Tamamlanan Proje' },
  { icon: Clock, value: '35+', label: 'Yıllık Deneyim' },
  { icon: Target, value: '98%', label: 'Müşteri Memnuniyeti' },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-20">
      <Navbar />
      
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Hakkımızda"
            subtitle="Elektrik çözümlerinde güvenilir ortağınız"
          />

          {/* Company Story */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-8 md:p-12 mb-20 border border-neon-blue/20"
          >
            <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-neon-blue to-neon-orange bg-clip-text text-transparent">
              Hikayemiz
            </h3>
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                Temizler Elektrik, hem konut hem de ticari müşterilere yüksek kaliteli elektrik malzemeleri ve profesyonel hizmetler sunma misyonuyla kuruldu. Küçük bir mağaza olarak başlayan işletmemiz, kapsamlı bir elektrik çözümleri sağlayıcısına dönüştü.
              </p>
              <p>
                Geleneksel zanaatkarlığı modern teknolojiyle birleştirerek, her projenin en yüksek güvenlik ve verimlilik standartlarını karşılamasını sağlıyoruz. Sertifikalı elektrikçilerden oluşan ekibimiz, basit bir onarım olsun veya karmaşık bir endüstriyel kurulum olsun, her işe yılların deneyimini getiriyor.
              </p>
              <p>
                Bugün, kalite, güvenlik ve müşteri memnuniyetine olan bağlılığımızı korurken, elektrik inovasyonunun ön saflarında kalmaya devam ediyoruz.
              </p>
            </div>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass rounded-xl p-6 text-center border border-neon-blue/20 hover:border-neon-orange/50 transition-all duration-300"
              >
                <stat.icon className="w-10 h-10 text-neon-blue mx-auto mb-4" />
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Timeline */}
          <SectionTitle
            title="Yolculuğumuz"
            subtitle="Büyümemizi şekillendiren kilometre taşları"
          />
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-blue via-neon-orange to-neon-blue transform md:-translate-x-1/2" />
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-neon-orange rounded-full border-4 border-primary-dark transform md:-translate-x-1/2 z-10" />
                  
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:ml-auto'
                  }`}>
                    <div className="glass rounded-xl p-6 border border-neon-blue/20 hover:border-neon-orange/50 transition-all duration-300">
                      <div className="text-neon-orange font-bold text-xl mb-2">
                        {milestone.year}
                      </div>
                      <h4 className="text-2xl font-semibold text-white mb-3">
                        {milestone.title}
                      </h4>
                      <p className="text-gray-400">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}

