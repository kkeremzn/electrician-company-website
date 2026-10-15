import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Temizler Elektrik | Rize Elektrik',
    short_name: 'Temizler Elektrik',
    description: "Rize elektrik malzemeleri ve elektrikçi hizmetleri",
    start_url: '/',
    display: 'standalone',
    background_color: '#050710',
    theme_color: '#050710',
    lang: 'tr',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-96.png', sizes: '96x96', type: 'image/png' },
    ],
  }
}
