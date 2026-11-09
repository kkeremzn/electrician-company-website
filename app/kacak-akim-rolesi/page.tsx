import type { Metadata } from 'next'
import Link from 'next/link'
import GuidePage from '@/components/GuidePage'
import { SITE_URL } from '@/lib/seo'

const title = "Kaçak Akım Rölesi Neden Atar? Rize'de Ev Elektrik Güvenliği"
const description =
  "Kaçak akım rölesi ne işe yarar, neden sık atar, nasıl test edilir? Rize'nin nemli ikliminde evlerde elektrik güvenliği için bilmeniz gerekenler. Temizler Elektrik."

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  keywords: ['kaçak akım rölesi', 'kaçak akım rölesi atıyor', 'rize elektrikçi', 'rize elektrik arıza', 'sigorta atıyor rize'],
  alternates: { canonical: '/kacak-akim-rolesi' },
  openGraph: { title, description, url: '/kacak-akim-rolesi', type: 'article' },
}

const faqs = [
  {
    q: 'Kaçak akım rölesi sürekli atıyor, iptal edebilir miyim?',
    a: 'Hayır. Röle bir kaçağı fark ettiği için atıyordur; iptal etmek, elektrik çarpması ve yangın riskini ortadan kaldırmaz, sadece görünmez hâle getirir. Kaçağın kaynağı bulunup giderilmelidir.',
  },
  {
    q: 'Rölenin hangi cihazdan attığını nasıl anlarım?',
    a: 'Röle attığında tüm sigortaları kapatıp röleyi kaldırın, ardından sigortaları tek tek açın. Röle hangi sigortayı açınca atıyorsa kaçak o hattadır. O hattaki cihazların fişlerini çekip tekrar denerseniz cihazı da bulabilirsiniz. Sonuç alamazsanız ölçümle tespit ediyoruz.',
  },
  {
    q: 'Eski evime kaçak akım rölesi taktırabilir miyim?',
    a: 'Evet. Eski binalarda sigorta kutusu ve dağıtım panosu değişimi, topraklama ve kaçak akım rölesi montajı yapıyoruz. Önce tesisatın ve topraklamanın durumunu kontrol ediyoruz.',
  },
]

const related = [
  { href: '/services#troubleshooting', label: 'Elektrik arıza tespiti', text: 'Sigorta atması, kaçak akım, kısa devre' },
  { href: '/services#wiring', label: 'Tesisat yenileme', text: 'Topraklama, pano ve röle montajı' },
  { href: '/kompanzasyon', label: 'Kompanzasyon panosu', text: 'İşletmeler için reaktif ceza rehberi' },
]

export default function KacakAkimPage() {
  return (
    <GuidePage
      path="/kacak-akim-rolesi"
      crumb="Kaçak akım rölesi"
      title="Kaçak Akım Rölesi: Rize'de Evler İçin Elektrik Güvenliği"
      intro="Kaçak akım rölesi, evinizdeki en önemli elektrik güvenlik cihazıdır. Ne işe yaradığını, neden attığını ve Rize gibi nemli bir ilde neden daha da önemli olduğunu anlattık."
      faqs={faqs}
      related={related}
      schema={{
        '@type': 'Article',
        headline: "Kaçak Akım Rölesi: Rize'de Evler İçin Elektrik Güvenliği",
        description,
        inLanguage: 'tr-TR',
        image: `${SITE_URL}/logo.png`,
        author: { '@id': `${SITE_URL}/#business` },
        publisher: { '@id': `${SITE_URL}/#business` },
        datePublished: '2026-11-09',
        dateModified: '2026-11-09',
      }}
    >
      <h2>Kaçak akım rölesi ne işe yarar?</h2>
      <p>
        Normalde bir cihaza giden akımın tamamı aynı hattan geri döner. Akımın bir kısmı insan vücudu, ıslak bir duvar ya
        da yalıtımı bozulmuş bir kablo üzerinden toprağa kaçarsa, kaçak akım rölesi bu farkı algılar ve devreyi çok kısa
        sürede keser.
      </p>
      <p>
        Konutlarda hayat koruması için <strong>30 mA</strong>&apos;lik röleler kullanılır. Bu röle, elektrik çarpmasının
        ölümcül olmasını önlemek için tasarlanmıştır. Sigorta ise sadece aşırı akıma ve kısa devreye karşı korur; insanı
        elektrik çarpmasına karşı korumaz.
      </p>

      <h2>Rize&apos;de neden daha önemli?</h2>
      <p>
        Rize yılın büyük bölümünde yağışlı ve nemlidir. Nem, elektrik tesisatının en büyük düşmanıdır:
      </p>
      <ul>
        <li>Rutubetli duvarlardaki buat ve prizlerde zamanla kaçak oluşur,</li>
        <li>Bodrum, banyo ve dış mekân prizleri suyla temas riski taşır,</li>
        <li>Eski binalarda yalıtımı zayıflamış kablolar nemle birlikte kaçak yapar.</li>
      </ul>
      <p>Bu yüzden Rize&apos;de kaçak akım rölesi olmayan bir ev, gereksiz bir risk taşır.</p>

      <h2>Röle sık atıyorsa ne yapmalı?</h2>
      <p>Rölenin atması bir arıza değil, bir uyarıdır. En sık sebepler:</p>
      <ul>
        <li>Nem almış priz, buat ya da dış mekân aydınlatması,</li>
        <li>Rezistansı arızalanmış çamaşır makinesi, bulaşık makinesi ya da termosifon,</li>
        <li>Yalıtımı bozulmuş ya da ezilmiş kablo,</li>
        <li>Topraklama hattındaki sorunlar.</li>
      </ul>
      <p>
        Kaçağın kaynağını ölçüm cihazlarıyla bulup kalıcı olarak gideriyoruz. Ayrıntılar{' '}
        <Link href="/services#troubleshooting">elektrik arıza tespiti</Link> hizmetimizde.
      </p>

      <h2>Röleyi düzenli test edin</h2>
      <p>
        Kaçak akım rölelerinin üzerinde <strong>T</strong> harfiyle gösterilen bir test butonu bulunur. Butona bastığınızda
        röle atmalıdır. Atmıyorsa röle görevini yapmıyor demektir ve değiştirilmelidir. Bu testi birkaç ayda bir yapmanız
        yeterlidir.
      </p>

      <h2>Eski binalarda tesisat yenileme</h2>
      <p>
        Eski binalarda çoğu zaman ne kaçak akım rölesi ne de düzgün bir topraklama vardır. Bu binalarda tesisat yenileme,
        sigorta kutusu ve dağıtım panosu değişimi, topraklama ve kaçak akım rölesi montajı yapıyoruz. Röle, kablo ve pano
        malzemeleri <Link href="/products">mağazamızda</Link> mevcuttur. Tüm hizmetlerimiz için{' '}
        <Link href="/services">Rize elektrikçi hizmetleri</Link> sayfamıza bakabilirsiniz.
      </p>
    </GuidePage>
  )
}
