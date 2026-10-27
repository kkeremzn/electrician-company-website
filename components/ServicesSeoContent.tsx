import Link from 'next/link'
import { RIZE_DISTRICTS } from '@/lib/seo'

const details = [
  {
    title: "Rize'de Kompanzasyon Panosu Kurulumu ve Bakımı",
    text: "Reaktif enerji bedeli ödeyen fabrika, otel, çay fabrikası ve iş yerleri için kompanzasyon panosu projelendirme, montaj ve devreye alma hizmeti veriyoruz. Mevcut panolarınızda kondansatör, reaktör ve röle değişimi ile periyodik bakım yaparak reaktif güç cezalarının önüne geçiyoruz.",
  },
  {
    title: 'Elektrik Arıza Tespiti ve Onarımı',
    text: "Sigorta atması, kaçak akım, kısa devre, priz ve aydınlatma arızaları gibi sorunlarda arızanın kaynağını ölçüm cihazlarıyla tespit edip kalıcı olarak onarıyoruz. Konut, dükkan ve ofislerde güvenlik açısından riskli tesisatları raporlayıp yenilenmesi gereken noktaları belirliyoruz.",
  },
  {
    title: 'Elektrik Tesisatı Kurulumu ve Yenileme',
    text: "Yeni yapılar ve tadilat projeleri için standartlara uygun elektrik tesisatı çekiyoruz. Eski binalarda tesisat yenileme, sigorta kutusu ve dağıtım panosu değişimi, topraklama ve kaçak akım rölesi montajı yapıyoruz.",
  },
  {
    title: 'LED Aydınlatma ve Dış Mekan Aydınlatması',
    text: "Ev, mağaza, ofis ve dış cepheler için enerji verimli LED aydınlatma çözümleri sunuyoruz. Aydınlatma armatürlerini mağazamızdan temin edip kurulumunu aynı ekiple yaptığımız için malzeme ve işçiliği tek yerden çözebilirsiniz.",
  },
  {
    title: 'Endüstriyel Elektrik Çözümleri',
    text: "Fabrika ve üretim tesislerinde üç fazlı sistemler, motor kontrol panoları, güç dağıtımı ve otomasyon altyapısı kuruyoruz. Çaykur, Recep Tayyip Erdoğan Üniversitesi ve Rize İl Özel İdaresi gibi kurumlar için yürüttüğümüz projelerle büyük ölçekli işlerde deneyim sahibiyiz.",
  },
]

export default function ServicesSeoContent() {
  return (
    <section className="mt-20 glass rounded-2xl p-8 md:p-10 border border-neon-blue/20">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-neon-blue to-neon-orange bg-clip-text text-transparent">
        Rize&apos;de Profesyonel Elektrikçi Hizmetleri
      </h2>
      <p className="text-gray-300 leading-relaxed mb-8">
        <strong className="text-white">Temizler Elektrik</strong>, 1990&apos;dan bu yana Rize&apos;de hem
        elektrik malzemeleri mağazası hem de sahada çalışan elektrikçi ekibiyle hizmet veriyor. Malzemeyi{' '}
        <Link href="/products" className="text-neon-blue hover:underline">kendi mağazamızdan</Link>{' '}
        temin ettiğimiz için işler hızlı ilerler; Siemens, Schneider, Legrand, Viko, Philips ve
        Prysmian gibi bilinen markaların ürünleriyle çalışırız.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {details.map((d) => (
          <div key={d.title}>
            <h3 className="text-lg font-semibold text-white mb-2">{d.title}</h3>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">{d.text}</p>
          </div>
        ))}
      </div>

      <h3 className="text-lg font-semibold text-white mt-10 mb-4">Hizmet Verdiğimiz İlçeler</h3>
      <p className="text-gray-400 leading-relaxed">
        {RIZE_DISTRICTS.join(', ')} başta olmak üzere Rize&apos;nin tüm ilçelerinde elektrikçi hizmeti
        veriyoruz. Keşif ve fiyat bilgisi için{' '}
        <a href="tel:05368108553" className="text-neon-blue hover:underline">0 536 810 85 53</a>{' '}
        numarasını arayabilir ya da{' '}
        <Link href="/contact" className="text-neon-blue hover:underline">iletişim sayfamızdan</Link>{' '}
        bize ulaşabilirsiniz.
      </p>
    </section>
  )
}
