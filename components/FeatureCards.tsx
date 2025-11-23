'use client'

import { motion } from 'framer-motion'
import { Package, Wrench, Zap, Shield } from 'lucide-react'
import Link from 'next/link'

const features = [
  {
    icon: Package,
    title: 'Kaliteli Ürünler',
    description: 'Geniş yelpazede elektrik malzemeleri ve bileşenler',
    href: '/products',
    color: 'from-neon-blue to-cyan-500',
  },
  {
    icon: Wrench,
    title: 'Uzman Hizmetler',
    description: 'Profesyonel kurulum ve bakım hizmetleri',
    href: '/services',
    color: 'from-neon-orange to-red-500',
  },
  {
    icon: Zap,
    title: 'Hızlı Yanıt',
    description: 'Hızlı arıza tespiti ve acil onarım hizmetleri',
    href: '/services',
    color: 'from-yellow-400 to-neon-orange',
  },
  {
    icon: Shield,
    title: 'Güvenilir',
    description: 'Sertifikalı profesyoneller ve kalite güvencesi',
    href: '/about',
    color: 'from-green-400 to-neon-blue',
  },
]

export default function FeatureCards() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-neon-blue to-neon-orange bg-clip-text text-transparent">
              Neden Bizi Seçmelisiniz
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Her elektrik çözümünde mükemmellik
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.2) }}
              whileHover={{ y: -10, scale: 1.05 }}
              style={{ willChange: 'transform, opacity' }}
            >
              <Link href={feature.href}>
                <div className="glass rounded-xl p-6 border border-neon-blue/20 hover:border-neon-orange/50 transition-all duration-300 h-full group cursor-pointer">
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-neon-blue transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {feature.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

