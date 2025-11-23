'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import SectionTitle from '@/components/SectionTitle'
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Form verilerini e-posta olarak gönder
    const mailtoLink = `mailto:temizler_elektrik@hotmail.com?subject=${encodeURIComponent(
      `İletişim Formu: ${formData.subject || 'Genel Sorgu'}`
    )}&body=${encodeURIComponent(
      `Ad Soyad: ${formData.name}\n` +
      `E-posta: ${formData.email}\n` +
      `Telefon: ${formData.phone || 'Belirtilmemiş'}\n` +
      `Konu: ${formData.subject}\n\n` +
      `Mesaj:\n${formData.message}`
    )}`
    
    // E-posta istemcisini aç
    window.location.href = mailtoLink
    
    // Kullanıcıya bilgi ver
    alert('Mesajınız için teşekkürler! E-posta istemciniz açılacak. Mesajınızı göndermek için "Gönder" butonuna tıklayın.')
    
    // Formu temizle
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefon',
      content: '',
      link: 'tel:05368108553',
    },
    {
      icon: Mail,
      title: 'E-posta',
      content: 'temizler_elektrik@hotmail.com',
      link: 'mailto:temizler_elektrik@hotmail.com',
    },
    {
      icon: MapPin,
      title: 'Adres',
      content: 'Müftü Mahallesi Atatürk Caddesi No: 560, Merkez, Rize',
      link: 'https://www.google.com/maps?q=41.02449423956182,40.53419301759395',
    },
  ]

  return (
    <main className="min-h-screen pt-20">
      <Navbar />
      
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="İletişime Geçin"
            subtitle="Tüm elektrik ihtiyaçlarınızda yardımcı olmak için buradayız"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.link}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass rounded-xl p-6 border border-neon-blue/20 hover:border-neon-orange/50 transition-all duration-300 group"
              >
                <info.icon className="w-10 h-10 text-neon-blue mb-4 group-hover:text-neon-orange transition-colors" />
                <h3 className="text-xl font-semibold text-white mb-2">{info.title}</h3>
                {info.title === 'Telefon' ? (
                  <div className="flex flex-col space-y-1">
                    <a href="tel:05368108553" className="text-gray-400 hover:text-neon-blue transition-colors">
                      0 536 810 85 53
                    </a>
                    <a href="tel:04642140664" className="text-gray-400 hover:text-neon-blue transition-colors">
                      0 464 214 06 64
                    </a>
                  </div>
                ) : (
                  <p className="text-gray-400">{info.content}</p>
                )}
              </motion.a>
            ))}
          </div>

          {/* Çalışma Saatleri - Ortalanmış */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.15 }}
            className="flex justify-center mb-12"
          >
            <div className="glass rounded-xl p-6 border border-neon-blue/20 hover:border-neon-orange/50 transition-all duration-300 group inline-flex items-center space-x-4">
              <Clock className="w-10 h-10 text-neon-blue group-hover:text-neon-orange transition-colors" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">Çalışma Saatleri</h3>
                <p className="text-gray-400">Pzt - Cmt: 09:00 - 19:00</p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass rounded-2xl p-8 border border-neon-blue/20"
            >
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-neon-blue to-neon-orange bg-clip-text text-transparent">
                Bize Mesaj Gönderin
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">
                    Ad Soyad
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-primary-dark border border-neon-blue/20 rounded-lg text-white focus:outline-none focus:border-neon-blue transition-colors"
                    placeholder="Adınız Soyadınız"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">
                    E-posta
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-primary-dark border border-neon-blue/20 rounded-lg text-white focus:outline-none focus:border-neon-blue transition-colors"
                    placeholder="ornek@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-300 mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-primary-dark border border-neon-blue/20 rounded-lg text-white focus:outline-none focus:border-neon-blue transition-colors"
                    placeholder="0 XXX XXX XX XX"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-300 mb-2">
                    Konu
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-primary-dark border border-neon-blue/20 rounded-lg text-white focus:outline-none focus:border-neon-blue transition-colors"
                  >
                    <option value="">Bir konu seçin</option>
                    <option value="service">Hizmet Talebi</option>
                    <option value="product">Ürün Sorgusu</option>
                    <option value="quote">Teklif İsteği</option>
                    <option value="other">Diğer</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">
                    Mesaj
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-primary-dark border border-neon-blue/20 rounded-lg text-white focus:outline-none focus:border-neon-blue transition-colors resize-none"
                    placeholder="Elektrik ihtiyaçlarınız hakkında bize bilgi verin..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-6 py-4 bg-gradient-to-r from-neon-blue to-neon-orange text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-neon-blue/50 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Mesaj Gönder</span>
                  <Send className="w-5 h-5" />
                </motion.button>
              </form>
            </motion.div>

            {/* Google Maps */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass rounded-2xl p-8 border border-neon-blue/20"
            >
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-neon-blue to-neon-orange bg-clip-text text-transparent">
                Bizi Bulun
              </h3>
              <div className="w-full h-96 rounded-lg overflow-hidden border border-neon-blue/20">
                <iframe
                  src="https://www.google.com/maps?q=41.02449423956182,40.53419301759395&output=embed&hl=tr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
              <p className="text-gray-400 text-sm mt-4 text-center">
                Müftü Mahallesi Atatürk Caddesi No: 560, Merkez, Rize
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}

