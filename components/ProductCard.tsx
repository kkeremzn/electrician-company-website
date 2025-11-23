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
  // İlk 4 kart için priority, diğerleri için lazy loading
  const isPriority = index < 4

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3) }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="glass rounded-xl p-6 hover:border-neon-blue/50 border border-neon-blue/20 transition-all duration-300 group"
      style={{ willChange: 'transform, opacity' }}
    >
      <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-neon-blue/20 to-neon-orange/20">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
            className="object-cover group-hover:scale-110 transition-transform duration-300"
            priority={isPriority}
            loading={isPriority ? undefined : 'lazy'}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
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

