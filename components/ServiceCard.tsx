'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
  index: number
}

export default function ServiceCard({ icon: Icon, title, description, features, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="glass rounded-xl p-6 md:p-8 border border-neon-blue/20 hover:border-neon-orange/50 transition-all duration-300 group h-full"
    >
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-neon-blue/20 to-neon-orange/20 mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-8 h-8 text-neon-blue group-hover:text-neon-orange transition-colors" />
      </div>
      
      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-neon-blue transition-colors">
        {title}
      </h3>
      
      <p className="text-gray-400 mb-6">
        {description}
      </p>
      
      <ul className="space-y-2">
        {features.map((feature, idx) => (
          <motion.li
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + idx * 0.05 }}
            className="flex items-start space-x-2 text-sm text-gray-300"
          >
            <span className="text-neon-orange mt-1">✓</span>
            <span>{feature}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
}

