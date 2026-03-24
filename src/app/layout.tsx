import type { Metadata, Viewport } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { ThemeProvider } from '@/components/theme-provider'
import { ScrollToTop } from '@/components/scroll-to-top'
import { Footer } from '@/components/footer' 
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
  return (
    <html lang="tr" suppressHydrationWarning>
      {/* flex flex-col min-h-screen ekledik ki Footer hep en altta kalsın */}
      <body className={`${inter.variable} ${montserrat.variable} font-sans antialiased flex flex-col min-h-screen`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navbar />
          {/* İçeriklerin footer'ı aşağı itmesi için flex-grow (flex-1) kullanıyoruz */}
          <main className="flex-1 flex flex-col">
            {children}
          </main>
          <Footer /> {/* 👈 FOOTER ARTIK HER SAYFADA ÇIKACAK */}
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}