import type { Metadata } from 'next'
import Link from 'next/link'
import GuidePage from '@/components/GuidePage'
import { SITE_URL } from '@/lib/seo'

const title = 'Rize Kompanzasyon Panosu: Kurulum, Bakım ve Reaktif Ceza'
const description =
  "Rize'de kompanzasyon panosu kurulumu ve bakımı. Reaktif enerji bedeli neden gelir, çay fabrikalarında sezon sonu kapasitif ceza riski, kondansatör ve röle değişimi."

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  keywords: ['rize kompanzasyon', 'kompanzasyon pano rize', 'reaktif ceza', 'çay fabrikası kompanzasyon', 'kondansatör değişimi rize'],
  alternates: { canonical: '/kompanzasyon' },
  openGraph: { title, description, url: '/kompanzasyon' },
}

const faqs = [
  {
    q: 'Kompanzasyon panosu her işletmeye gerekir mi?',
    a: 'Motor, pompa, fan, kompresör gibi endüktif yükleri çok olan ve reaktif ölçümü yapılan işletmelerde gerekir. Faturanızda reaktif enerji bedeli görünüyorsa kompanzasyon ihtiyacınız var demektir.',
  },
  {
    q: 'Kompanzasyon panom var ama yine reaktif bedel geliyor, neden?',
    a: 'En sık sebepler bozulmuş ya da gücü düşmüş kondansatörler, yanmış kontaktörler, yanlış ayarlanmış röle ve tesisin yük yapısının değişmiş olmasıdır. Yük azaldığında devrede fazla kondansatör kalırsa bu kez kapasitif bedel ortaya çıkar. Panoyu ölçüp sorunun kaynağını tespit ediyoruz.',
  },
  {
    q: 'Kondansatör ve röle gibi malzemeleri nereden temin ediyorsunuz?',
    a: "Kompanzasyon malzemelerini Rize Merkez'deki kendi mağazamızdan temin ediyoruz. Bu sayede değişim gereken parçalar beklemeden takılabiliyor.",
  },
  {
    q: 'Hangi ilçelerde kompanzasyon hizmeti veriyorsunuz?',
    a: "Rize Merkez başta olmak üzere Çayeli, Pazar, Ardeşen, Fındıklı, Güneysu, İyidere, Derepazarı, Kalkandere, İkizdere, Çamlıhemşin ve Hemşin'de hizmet veriyoruz.",
  },
]

const related = [
  { href: '/services', label: 'Tüm hizmetlerimiz', text: 'Tesisat, arıza tespiti, aydınlatma ve endüstriyel çözümler' },
  { href: '/products', label: 'Elektrik malzemeleri', text: 'Rize mağazamızdaki ürünler' },
  { href: '/kacak-akim-rolesi', label: 'Kaçak akım rölesi', text: 'Evlerde elektrik güvenliği rehberi' },
]

export default function KompanzasyonPage() {
  return (
    <GuidePage
      path="/kompanzasyon"
      crumb="Kompanzasyon"
      title="Rize'de Kompanzasyon Panosu Kurulumu ve Bakımı"
      intro="Reaktif enerji bedeli ödeyen fabrika, otel, çay fabrikası ve iş yerleri için kompanzasyon panosu projelendirme, montaj, devreye alma ve periyodik bakım."
      faqs={faqs}
      related={related}
      schema={{
        '@type': 'Service',
        name: 'Kompanzasyon panosu kurulumu ve bakımı',
        serviceType: 'Kompanzasyon pano sistemleri',
        description,
        provider: { '@id': `${SITE_URL}/#business` },
        areaServed: { '@type': 'AdministrativeArea', name: 'Rize' },
      }}
    >
      <h2>Reaktif enerji nedir, bedel neden gelir?</h2>
      <p>
        Motorlar, pompalar, fanlar, kompresörler ve trafolar şebekeden iş yapan aktif enerjinin yanında, çalışmak için
        reaktif enerji de çeker. Reaktif enerji iş yapmaz ama hatları ve trafoları yükler. Bu yüzden reaktif ölçümü yapılan
        abonelerde, reaktif tüketim aktif tüketime göre mevzuatta belirlenen oranları aştığında faturaya reaktif enerji
        bedeli yansır.
      </p>
      <p>
        Kompanzasyon panosu, ihtiyaç kadar kondansatörü devreye alarak bu reaktif enerjiyi tesisin içinde karşılar.
        Doğru kurulmuş ve bakımlı bir panoyla reaktif bedel ödemezsiniz.
      </p>

      <h2>Çay fabrikalarında sezon sonu tuzağı</h2>
      <p>
        Rize&apos;de yaş çay sezonu boyunca fabrikalarda kıyım ve kurutma makineleri, fanlar ve konveyörler yoğun çalışır;
        endüktif yük yüksektir ve kompanzasyon panosu buna göre kondansatör devreye alır.
      </p>
      <p>
        Sezon bittiğinde ise yük büyük ölçüde düşer. Pano doğru ayarlanmamışsa ya da röle yükü izleyemiyorsa, devrede
        gereğinden fazla kondansatör kalır ve tesis bu kez <strong>kapasitif</strong> tarafa geçer. Sonuç: makineler durduğu
        hâlde kapasitif reaktif bedel. Aynı durum yaz sezonunda dolup kışın boşalan otel ve pansiyonlarda da görülür.
      </p>
      <p>Bunu önlemek için:</p>
      <ul>
        <li>Yükü sürekli izleyen otomatik kompanzasyon rölesi kullanılmalı,</li>
        <li>Kondansatör kademeleri hem sezonun yoğun hem de boş dönemine uygun seçilmeli,</li>
        <li>Gerekiyorsa kapasitif yük için şönt reaktör eklenmeli,</li>
        <li>Pano sezon öncesinde ve sonrasında ölçülüp kontrol edilmeli.</li>
      </ul>

      <h2>Kompanzasyon hizmetlerimiz</h2>
      <ul>
        <li>Reaktif güç kompanzasyonu ve otomatik kompanzasyon sistemleri</li>
        <li>Kondansatör bank kurulumu</li>
        <li>Pano tasarımı, montajı ve devreye alma</li>
        <li>Kondansatör, reaktör ve röle değişimi</li>
        <li>Periyodik bakım, enerji analizi ve ölçüm</li>
      </ul>
      <p>
        Malzemeyi <Link href="/products">kendi mağazamızdan</Link> temin ettiğimiz için değişim gereken parçalar beklemeden
        takılır. Çaykur, Recep Tayyip Erdoğan Üniversitesi ve Rize İl Özel İdaresi gibi kurumlarla çalıştığımız işlerin
        listesi <Link href="/references">referanslar</Link> sayfamızda.
      </p>

      <h2>Panonuzun bakıma ihtiyacı olduğunun işaretleri</h2>
      <ul>
        <li>Faturada endüktif ya da kapasitif reaktif bedel görünmesi</li>
        <li>Kompanzasyon rölesinde alarm ya da hedef değere ulaşamama</li>
        <li>Şişmiş, ısınmış ya da sızdıran kondansatörler</li>
        <li>Kontaktörlerde yanık izi, panoda koku ya da aşırı ısınma</li>
      </ul>

      <h2>Nasıl çalışıyoruz?</h2>
      <ol>
        <li><strong>Ölçüm ve analiz.</strong> Tesisin yükünü, faturalarını ve mevcut panoyu inceliyoruz.</li>
        <li><strong>Proje.</strong> Gereken kondansatör gücünü ve kademeleri belirliyoruz.</li>
        <li><strong>Montaj ve devreye alma.</strong> Panoyu kurup röleyi tesise göre ayarlıyoruz.</li>
        <li><strong>Periyodik kontrol.</strong> Özellikle sezonluk çalışan tesislerde panoyu düzenli kontrol ediyoruz.</li>
      </ol>
      <p>
        Diğer elektrik işleri için <Link href="/services">Rize elektrikçi hizmetlerimize</Link> göz atabilirsiniz.
      </p>
    </GuidePage>
  )
}
