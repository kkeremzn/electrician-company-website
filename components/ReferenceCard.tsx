'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Building2 } from 'lucide-react'

export interface Reference {
  id: string
  name: string
  logo?: string
}

interface ReferenceCardProps {
  reference: Reference
  index: number
}

export default function ReferenceCard({ reference, index }: ReferenceCardProps) {
  const [imageError, setImageError] = useState(false)
  const showLogo = reference.logo && !imageError

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.06, 0.3) }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="glass rounded-xl p-8 border border-neon-blue/20 hover:border-neon-orange/40 transition-all duration-300 group flex flex-col items-center justify-center text-center min-h-[180px]"
    >
      <div className="relative w-full flex-1 flex items-center justify-center mb-4">
        {showLogo ? (
          <Image
            src={reference.logo!}
            alt={`${reference.name} logosu`}
            width={200}
            height={80}
            className="max-h-16 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
            onError={() => setImageError(true)}
          />
        ) : (
          <Building2 className="w-10 h-10 text-neon-blue/50" />
        )}
      </div>

      <h3 className="text-base font-semibold text-white group-hover:text-neon-blue transition-colors">
        {reference.name}
      </h3>
    </motion.div>
  )
}
