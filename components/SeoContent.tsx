import Link from 'next/link'
import { FAQS, RIZE_DISTRICTS } from '@/lib/seo'

export default function SeoContent() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="glass rounded-2xl p-8 md:p-10 border border-neon-blue/20">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-neon-blue to-neon-orange bg-clip-text text-transparent">
            Rize Elektrik Malzemeleri ve Elektrikçi Hizmetleri
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              <strong className="text-white">Temizler Elektrik</strong>, 1990 yılından bu yana
              Rize Merkez&apos;de, Müftü Mahallesi Atatürk Caddesi üzerindeki mağazasında elektrik
              malzemeleri satışı ve profesyonel elektrikçi hizmetleri sunmaktadır. Rize elektrik
              ihtiyaçlarınız için kablo, sigorta, elektrik panosu, anahtar, priz, LED ampul,
              LED şerit ve aydınlatma armatürlerinden kompanzasyon ekipmanlarına kadar geniş bir
              ürün yelpazesini tek çatı altında bulabilirsiniz.
            </p>
            <p>
              Sertifikalı elektrikçi ekibimizle Rize&apos;de konut, iş yeri ve endüstriyel
              tesislerde <Link href="/services" className="text-neon-blue hover:underline">elektrik tesisatı kurulumu,
              elektrik arıza tespiti ve onarımı, kompanzasyon pano sistemleri</Link>, pano montajı,
              topraklama ve LED aydınlatma kurulumu yapıyoruz. Çaykur, Recep Tayyip Erdoğan
              Üniversitesi ve Rize İl Özel İdaresi gibi kurumların tercih ettiği{' '}
              <Link href="/references" className="text-neon-blue hover:underline">referanslarımızla</Link>{' '}
              35 yılı aşkın tecrübemizi her projeye taşıyoruz.
            </p>
            <p>
              Rize&apos;de güvenilir bir elektrikçi ya da elektrik malzemesi arıyorsanız{' '}
              <a href="tel:05368108553" className="text-neon-blue hover:underline">0 536 810 85 53</a> veya{' '}
              <a href="tel:04642140664" className="text-neon-blue hover:underline">0 464 214 06 64</a>{' '}
              numaralarından bize ulaşabilir, Pazartesi–Cumartesi 09:00–19:00 arasında mağazamızı
              ziyaret edebilirsiniz.
            </p>
          </div>

          <h3 className="text-xl font-semibold text-white mt-8 mb-4">Hizmet Verdiğimiz Bölgeler</h3>
          <ul className="flex flex-wrap gap-2">
            {RIZE_DISTRICTS.map((d) => (
              <li
                key={d}
                className="px-3 py-1.5 rounded-full text-sm bg-white/5 border border-neon-blue/20 text-gray-300"
              >
                {d} elektrikçi
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center bg-gradient-to-r from-neon-blue to-neon-orange bg-clip-text text-transparent">
            Sıkça Sorulan Sorular
          </h2>
          <div className="space-y-3">
            {FAQS.map(({ q, a }) => (
              <details
                key={q}
                className="glass rounded-xl border border-neon-blue/20 p-5 group open:border-neon-orange/40"
              >
                <summary className="cursor-pointer font-semibold text-white list-none flex justify-between items-center gap-4">
                  <h3 className="text-base md:text-lg">{q}</h3>
                  <span className="text-neon-blue group-open:rotate-45 transition-transform text-2xl leading-none">+</span>
                </summary>
                <p className="text-gray-300 mt-3 leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
