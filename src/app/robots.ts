import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*', // Bütün arama motorlarına izin ver (Google, Yandex, Bing)
      allow: '/',     // Sitenin her yerine girebilirler
      disallow: '/api/', // Sadece arka plan kodlarının olduğu API klasörüne girmesinler
    },
    sitemap: 'https://altinkelime.com/sitemap.xml', // Haritamızın adresini de verelim ki kolay bulsunlar
  }
}