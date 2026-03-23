import type { Metadata, Viewport } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { ThemeProvider } from '@/components/theme-provider' // YENİ EKLENDİ
import { ScrollToTop } from '@/components/scroll-to-top'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: 'Altın Kelime | 7 Harf – 1 Dakika – 1 Kazanan',
  description: 'Kelime bilgisi, strateji ve rekabetin birleştiği yeni nesil televizyon yarışması. Türkiye\'nin en heyecanlı kelime oyunu.',
}

export const viewport: Viewport = {
  themeColor: '#1a1a1a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // body içindeki children ve Navbar'ı ThemeProvider ile sarmaladık.
  // defaultTheme="dark" yaparak sitenin ilk açılışta siyah/altın görünmesini sağladık.
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={`${inter.variable} ${montserrat.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}