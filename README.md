# Temizler Elektrik - Kurumsal Web Sitesi

Elektrik malzemeleri mağazası ve elektrikçi hizmetleri şirketi için modern, tamamen duyarlı kurumsal web sitesi. Next.js, TailwindCSS ve Framer Motion ile geliştirilmiştir.

## Özellikler

- 🎨 **Modern Tasarım**: Neon mavi/turuncu vurgularla karanlık mod
- 📱 **Tamamen Duyarlı**: Masaüstü, tablet ve mobilde mükemmel görüntüleme
- ✨ **Akıcı Animasyonlar**: Framer Motion animasyonları
- ⚡ **Hızlı Performans**: App Router ile Next.js 14
- 🎯 **SEO Optimize**: Yerleşik metadata ve semantik HTML
- 💬 **WhatsApp Entegrasyonu**: Hızlı iletişim için yüzen CTA butonu
- 🗺️ **Google Maps Entegrasyonu**: İletişim sayfasında interaktif harita

## Teknoloji Yığını

- **Next.js 14** - App Router ile React framework
- **TypeScript** - Tip güvenli geliştirme
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Animasyon kütüphanesi
- **Lucide React** - İkon kütüphanesi

## Başlangıç

### Gereksinimler

- Node.js 18+ yüklü
- npm veya yarn paket yöneticisi

### Kurulum

1. Bağımlılıkları yükleyin:
```bash
npm install
```

2. Geliştirme sunucusunu çalıştırın:
```bash
npm run dev
```

**Not:** npm cache hatası alırsanız, `sudo chown -R $(whoami) ~/.npm` komutunu çalıştırın.

3. Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açın

## Proje Yapısı

```
├── app/
│   ├── about/          # Hakkımızda sayfası
│   ├── contact/        # İletişim sayfası
│   ├── products/       # Ürünler sayfası
│   ├── services/       # Hizmetler sayfası
│   ├── globals.css     # Global stiller
│   ├── layout.tsx      # Kök layout
│   └── page.tsx        # Ana sayfa
├── components/         # Yeniden kullanılabilir bileşenler
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── ProductCard.tsx
│   ├── ServiceCard.tsx
│   └── ...
├── data/
│   └── products.json   # Örnek ürün verileri
└── public/             # Statik dosyalar
```

## Özelleştirme

### İletişim Bilgilerini Güncelleme

- **Footer:** `components/Footer.tsx`
- **İletişim Sayfası:** `app/contact/page.tsx`
- **WhatsApp:** `components/WhatsAppButton.tsx`

### Ürün Yönetimi

Ürün eklemek veya değiştirmek için `data/products.json` dosyasını düzenleyin. Sayfada ilk 10 ürün gösterilir.

### Tasarım Özelleştirme

- **Renkler:** `tailwind.config.ts`
- **Global Stiller:** `app/globals.css`

## Production için Derleme

```bash
npm run build
npm start
```

## Sayfalar

- **Ana Sayfa** (`/`) - Hero bölümü ve özellik kartları
- **Ürünler** (`/products`) - Ürün kataloğu (10 ürün)
- **Hizmetler** (`/services`) - Hizmet teklifleri ve kompanzasyon panosu
- **Hakkımızda** (`/about`) - Şirket bilgileri ve zaman çizelgesi
- **İletişim** (`/contact`) - İletişim formu ve Google Maps entegrasyonu

## Lisans

Bu proje Temizler Elektrik için oluşturulmuştur.
