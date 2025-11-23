'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface Product {
  id: string
  name: string
  category: string
  price: number
  image?: string
  description?: string
}

interface ProductCardProps {
  product: Product
  index: number
}

export default function ProductCard({ product, index }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="glass rounded-xl p-6 hover:border-neon-blue/50 border border-neon-blue/20 transition-all duration-300 group"
    >
      <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-neon-blue/20 to-neon-orange/20">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
            unoptimized
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-6xl">⚡</div>
          </div>
        )}
        <div className="absolute top-2 right-2 px-2 py-1 bg-primary-dark/80 rounded text-xs text-neon-blue">
          {product.category}
        </div>
      </div>
      
      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-neon-blue transition-colors">
        {product.name}
      </h3>
      
      {product.description && (
        <p className="text-gray-400 text-sm line-clamp-2">
          {product.description}
        </p>
      )}
    </motion.div>
  )
}

