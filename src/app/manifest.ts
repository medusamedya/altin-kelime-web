import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Altın Kelime',
    short_name: 'Altın Kelime',
    description: 'Türkiye\'nin en zorlu kelime arenası.',
    start_url: '/',
    display: 'standalone', // Telefon ekranında tarayıcıyı gizler, uygulama gibi açar
    background_color: '#1a1a1a',
    theme_color: '#C8952A',
    icons: [
      {
        src: '/Logo2.png', // Doğrudan senin logonu kullanıyoruz
        sizes: 'any',      // Boyut takıntısı yapmadan her yere uydurur
        type: 'image/png',
      },
    ],
  }
}