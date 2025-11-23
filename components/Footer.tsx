'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Zap, Mail, Phone, MapPin, Instagram } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    quick: [
      { href: '/', label: 'Ana Sayfa' },
      { href: '/products', label: 'Ürünler' },
      { href: '/services', label: 'Hizmetler' },
      { href: '/about', label: 'Hakkımızda' },
    ],
    services: [
      { href: '/services', label: 'Kompanzasyon Pano Sistemleri' },
      { href: '/services#troubleshooting', label: 'Arıza Tespiti' },
      { href: '/services#wiring', label: 'Kablo Tesisatı' },
      { href: '/services#lighting', label: 'Aydınlatma Kurulumu' },
      { href: '/services#industrial', label: 'Endüstriyel Çözümler' },
    ],
  }

  return (
    <footer className="bg-primary-darker border-t border-neon-blue/20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <Zap className="w-6 h-6 text-neon-blue" />
              <span className="text-xl font-bold bg-gradient-to-r from-neon-blue to-neon-orange bg-clip-text text-transparent">
                Temizler Elektrik
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Konutlar ve endüstriler için profesyonel elektrik çözümleri. Kaliteli malzemeler ve uzman hizmetler.
            </p>
            <div className="flex space-x-4">
              <a href="mailto:temizler_elektrik@hotmail.com" className="text-gray-400 hover:text-neon-blue transition-colors" aria-label="E-posta">
                <Mail size={20} />
              </a>
              <a href="https://www.instagram.com/temizlerelektrik" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-blue transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-white font-semibold mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-2">
              {footerLinks.quick.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-neon-blue transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-white font-semibold mb-4">Hizmetler</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-neon-blue transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-white font-semibold mb-4">İletişim</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-neon-blue mt-0.5 flex-shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:05368108553" className="text-gray-400 hover:text-neon-blue transition-colors text-sm">
                    0 536 810 85 53
                  </a>
                  <a href="tel:04642140664" className="text-gray-400 hover:text-neon-blue transition-colors text-sm">
                    0 464 214 06 64
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-neon-blue mt-0.5 flex-shrink-0" />
                <a href="mailto:temizler_elektrik@hotmail.com" className="text-gray-400 hover:text-neon-blue transition-colors text-sm">
                  temizler_elektrik@hotmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-neon-blue mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">Müftü Mahallesi Atatürk Caddesi No: 560, Merkez, Rize</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-neon-blue/20 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Temizler Elektrik. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  )
}

