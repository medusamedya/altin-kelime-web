import Link from "next/link"
import { Instagram, Youtube, Twitter, Linkedin, Mail } from "lucide-react"

const footerLinks = [
  { href: "#", label: "Ana Sayfa" },
  { href: "#about", label: "Format Nedir?" },
  { href: "#how-to-play", label: "Nasıl Oynanır?" },
  { href: "#video", label: "Stüdyo Kesitleri" },
  { href: "#apply", label: "Yarışmacı Başvurusu" },
]

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Twitter, href: "#", label: "X (Twitter)" },
]

export function Footer() {
  return (
    <footer id="contact" className="bg-background relative overflow-hidden border-t border-border/40 mt-auto">
      {/* İnce Premium Üst Işık (Glow) Efekti */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-[100px] bg-primary/10 blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Marka & Vizyon (Geniş Alan) */}
          <div className="lg:col-span-5">
            <h3 className="text-3xl font-black mb-4 tracking-tighter">
              ALTIN <span className="gold-text">KELİME</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed max-w-sm mb-8">
              Kelime bilgisi, anlık strateji ve psikolojik rekabetin birleştiği yeni nesil omnichannel televizyon yarışması.
            </p>
            {/* Sosyal Medya İkonları */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all hover:-translate-y-1"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Hızlı Menü */}
          <div className="lg:col-span-3 lg:col-start-7">
            <h4 className="text-foreground font-bold mb-6 tracking-wide uppercase text-sm">Hızlı Bağlantılar</h4>
            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-primary transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim & Yapım */}
          <div className="lg:col-span-3">
            <h4 className="text-foreground font-bold mb-6 tracking-wide uppercase text-sm">Yapım & Yönetim</h4>
            <div className="space-y-4 text-sm text-muted-foreground">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail size={16} className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Medusa Global Medya Yatırım A.Ş.</p>
                  <a href="mailto:info@medusaglobal.com.tr" className="hover:text-primary transition-colors block mb-1">
                    info@medusaglobal.com.tr
                  </a>
                  <a
                    href="https://www.medusaglobal.com.tr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-medium"
                  >
                    www.medusaglobal.com.tr
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Alt Çizgi ve Yasal Metinler */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Altın Kelime Ekosistemi. Tüm format ve yayın hakları saklıdır.
          </p>
          <div className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <Link href="#" className="hover:text-primary transition-colors">Gizlilik Politikası</Link>
            <Link href="#" className="hover:text-primary transition-colors">Kullanım Şartları</Link>
            <Link href="#" className="hover:text-primary transition-colors">KVKK Aydınlatma Metni</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}