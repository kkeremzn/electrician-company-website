'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import CTAButton from './CTAButton'
import Logo from './Logo'
import { ArrowDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col">
      <div className="relative w-full pt-20 bg-primary-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40"
          >
            <Image
              src="/images/magaza.jpg"
              alt="Temizler Elektrik mağaza ön cephe — Rize"
              width={4032}
              height={3024}
              priority
              className="w-full h-auto block"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          </motion.div>
        </div>
      </div>

      <div className="relative flex-1 flex items-center justify-center overflow-hidden py-12 sm:py-16">
        <motion.div
          animate={{ opacity: [0.1, 0.18, 0.1] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-neon-blue rounded-full blur-3xl pointer-events-none"
        />
        <motion.div
          animate={{ opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-neon-orange rounded-full blur-3xl pointer-events-none"
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-6"
          >
            <Logo size={148} priority />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full text-sm font-medium tracking-wide uppercase bg-white/5 border border-neon-blue/30 text-gray-300"
          >
            Rize&apos;nin Güvenilir Elektrikçisi
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="block mb-2">Profesyonel</span>
            <span className="bg-gradient-to-r from-neon-blue via-neon-orange to-neon-blue bg-clip-text text-transparent">
              Elektrik Çözümleri
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Konutlar ve endüstriler için kaliteli elektrik malzemeleri ve uzman saha hizmetleri
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <CTAButton href="/products" text="Ürünleri Keşfet" />
            <CTAButton href="/services" text="Hizmetlerimiz" variant="secondary" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="w-8 h-8 text-neon-blue" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
