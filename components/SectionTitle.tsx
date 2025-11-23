'use client'

import { motion } from 'framer-motion'

interface SectionTitleProps {
  title: string
  subtitle?: string
  className?: string
}

export default function SectionTitle({ title, subtitle, className = '' }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`text-center mb-12 ${className}`}
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
        <span className="bg-gradient-to-r from-neon-blue via-neon-orange to-neon-blue bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
      {subtitle && (
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}

