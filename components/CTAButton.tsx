'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

interface CTAButtonProps {
  href: string
  text: string
  variant?: 'primary' | 'secondary'
  className?: string
}

export default function CTAButton({ 
  href, 
  text, 
  variant = 'primary',
  className = '' 
}: CTAButtonProps) {
  const baseClasses = 'inline-flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300'
  
  const variantClasses = variant === 'primary'
    ? 'bg-gradient-to-r from-neon-blue to-neon-orange text-white hover:shadow-lg hover:shadow-neon-blue/50 hover:scale-105'
    : 'border-2 border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-white'

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        href={href}
        className={`${baseClasses} ${variantClasses} ${className}`}
      >
        <span>{text}</span>
        <ArrowRight className="w-5 h-5" />
      </Link>
    </motion.div>
  )
}

