'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import SectionTitle from '@/components/SectionTitle'
import ProductCard from '@/components/ProductCard'
import productsData from '@/data/products.json'

export default function ProductsPage() {
  // Sadece ilk 10 ürünü göster
  const displayedProducts = productsData.slice(0, 10)

  return (
    <main className="min-h-screen pt-20">
      <Navbar />
      
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Bazı Ürünlerimiz"
            subtitle="Geniş ürün yelpazemizden seçilmiş örnekler. Tüm ürünlerimiz için bizimle iletişime geçin."
          />

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
            {displayedProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}

