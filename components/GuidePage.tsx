import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import JsonLd from '@/components/JsonLd'
import { SITE_URL, breadcrumbJsonLd } from '@/lib/seo'

export type GuideFaq = { q: string; a: string }
export type GuideLink = { href: string; label: string; text: string }

interface GuidePageProps {
  path: string
  crumb: string
  title: string
  intro: string
  faqs: GuideFaq[]
  related: GuideLink[]
  schema: object
  children: React.ReactNode
}

// Shared layout for the long-form service and guide pages.
export default function GuidePage({ path, crumb, title, intro, faqs, related, schema, children }: GuidePageProps) {
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
  }

  return (
    <main className="min-h-screen pt-20">
      <JsonLd data={breadcrumbJsonLd(crumb, path)} />
      <JsonLd data={{ '@context': 'https://schema.org', url: `${SITE_URL}${path}`, ...schema }} />
      <JsonLd data={faqLd} />
      <Navbar />

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Sayfa yolu" className="text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-neon-blue">Ana Sayfa</Link>
            <span className="mx-2 opacity-50">/</span>
            <span>{crumb}</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-neon-blue via-neon-orange to-neon-blue bg-clip-text text-transparent">{title}</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">{intro}</p>
          <div className="flex flex-wrap gap-3 mt-8">
            <a href="tel:05368108553" className="px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-neon-blue to-neon-orange hover:shadow-lg hover:shadow-neon-blue/50 transition-all">0 536 810 85 53</a>
            <Link href="/contact" className="px-6 py-3 rounded-lg font-semibold text-white border border-neon-blue/40 hover:border-neon-orange transition-colors">İletişim ve adres</Link>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8">
        <article className="guide max-w-4xl mx-auto glass rounded-2xl p-6 md:p-10 border border-neon-blue/20 text-gray-300 leading-relaxed">
          {children}
        </article>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-neon-blue to-neon-orange bg-clip-text text-transparent">Sıkça Sorulan Sorular</h2>
          <div className="space-y-3">
            {faqs.map(({ q, a }) => (
              <details key={q} className="glass rounded-xl border border-neon-blue/20 p-5 group open:border-neon-orange/40">
                <summary className="cursor-pointer font-semibold text-white list-none flex justify-between items-center gap-4">
                  <h3 className="text-base md:text-lg">{q}</h3>
                  <span className="text-neon-blue group-open:rotate-45 transition-transform text-2xl leading-none">+</span>
                </summary>
                <p className="text-gray-300 mt-3 leading-relaxed">{a}</p>
              </details>
            ))}
          </div>

          <h2 className="text-xl font-semibold text-white mt-14 mb-4">İlgili sayfalar</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {related.map((r) => (
              <Link key={r.href} href={r.href} className="glass rounded-xl p-5 border border-neon-blue/20 hover:border-neon-orange/50 transition-colors">
                <span className="block font-semibold text-white mb-1">{r.label}</span>
                <span className="block text-sm text-gray-400">{r.text}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
