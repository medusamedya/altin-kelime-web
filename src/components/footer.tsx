import Link from "next/link"
import Image from "next/image" // Image import edildi
import { 
  Instagram, 
  Youtube, 
  Twitter, 
  ChevronRight, 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Sparkles, 
  Award, 
  Trophy, 
  Clock, 
  Star 
} from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-background border-t border-border/40 mt-auto">
      
      {/* 1. Arka Plan: SVG Grid Desen */}
      <div className="absolute inset-0 pointer-events-none opacity-50">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="footerGrid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M60 0 L0 0 0 60" fill="none" stroke="currentColor" className="text-primary/5" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footerGrid)" />
        </svg>
      </div>

      {/* 2. Üst Gold Çizgi (Gradyan) */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />

      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-10 z-10">
        
        {/* 3. Ana Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Kolon 1 — Marka & Sosyal */}
          <div className="lg:col-span-1">
            <div className="mb-6 flex items-center gap-3">
              {/* Logo Alanı */}
              <div className="relative w-24 h-24 shrink-0">
                <Image 
                  src="/Logo2.png" 
                  alt="Altın Kelime Logo" 
                  fill 
                  className="object-contain"
                />
              </div>
             
            </div>
            <div className="h-px w-12 mb-6 bg-gradient-to-r from-primary to-transparent" />
            <p className="text-muted-foreground text-sm leading-relaxed mb-8 max-w-xs font-medium">
              Kelime bilgisi, anlık strateji ve rekabetin birleştiği yeni nesil omnichannel televizyon yarışması.
            </p>
            {/* Sosyal Medya İkonları */}
            <div className="flex gap-3">
              {[
                { icon: Instagram, label: "Instagram", href: "#" },
                { icon: Youtube, label: "YouTube", href: "#" },
                { icon: Twitter, label: "Twitter", href: "#" },
              ].map(({ icon: Icon, label, href }) => (
                <a key={label} href={href} aria-label={label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center border border-primary/20 text-muted-foreground hover:border-primary hover:text-primary hover:bg-primary/10 transition-all duration-300 shadow-sm">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Kolon 2 — Hızlı Bağlantılar */}
          <div>
            <h4 className="text-primary text-[11px] font-black tracking-[0.3em] uppercase mb-8 flex items-center gap-2">
              <div className="h-px w-4 bg-primary" /> Sayfalar
            </h4>
            <ul className="space-y-4">
            {[
                { label: "Ana Sayfa", href: "/" },
                { label: "Altın Kelime Nedir?", href: "/about" },
                { label: "Nasıl Oynanır?", href: "/how-to-play" },
                { label: "Yarışmacı Ol", href: "/apply" },
                { label: "Format", href: "/format" },
                { label: "İletişim", href: "/#contact" },
              ].map(link => (
                <li key={link.label}>
                  <Link href={link.href}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors flex items-center gap-2 group font-medium">
                    <ChevronRight className="w-3 h-3 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all text-primary" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolon 3 — Yarışma Dünyası */}
          <div>
            <h4 className="text-primary text-[11px] font-black tracking-[0.3em] uppercase mb-8 flex items-center gap-2">
              <div className="h-px w-4 bg-primary" /> Yarışma
            </h4>
            <ul className="space-y-4">
              {[
                { icon: Award, label: "Günlük Challenge" },
                { icon: Trophy, label: "Şampiyonlar" },
                { icon: Clock, label: "Yayın Takvimi" },
                { icon: Star, label: "TDK Kelime Bankası" },
              ].map(({ icon: Icon, label }) => (
                <li key={label}>
                  <a href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors flex items-center gap-3 group font-medium">
                    <Icon size={14} className="text-primary/40 group-hover:text-primary transition-colors shrink-0" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolon 4 — İletişim & Yapım */}
          <div>
            <h4 className="text-primary text-[11px] font-black tracking-[0.3em] uppercase mb-8 flex items-center gap-2">
              <div className="h-px w-4 bg-primary" /> İletişim
            </h4>
            <ul className="space-y-5">
              {[
                { icon: Globe, text: "www.medusaglobal.com.tr", href: "https://www.medusaglobal.com.tr" },
                { icon: Mail, text: "hello@medusaglobal.com.tr", href: "mailto:hello@medusaglobal.com.tr" },
                { icon: Phone, text: "0 553 735 35 00", href: "tel:+905537353500" },
                { icon: MapPin, text: "Medusa Global Medya Yatırım A.Ş.", href: "#" },
              ].map(({ icon: Icon, text, href }) => (
                <li key={text}>
                  <a href={href} className="flex items-start gap-4 group">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors">
                      <Icon size={14} className="text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="text-muted-foreground text-sm leading-tight group-hover:text-foreground transition-colors font-medium">{text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 4. Newsletter (Bülten) Şeridi */}
        <div className="rounded-3xl border border-primary/10 bg-card/40 backdrop-blur-md p-8 md:p-10 mb-16 flex flex-col md:row lg:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-5 h-5 text-primary animate-pulse" />
              <span className="text-primary text-xs font-black tracking-widest uppercase">VIP Bülten</span>
            </div>
            <h5 className="text-foreground font-black text-2xl mb-2 tracking-tight">İlk sezondan siz haberdar olun</h5>
            <p className="text-muted-foreground text-sm font-medium leading-relaxed">Yayın tarihleri, yarışmacı seçmeleri ve stüdyodan özel kesintiler e-postanıza gelsin.</p>
          </div>
          <div className="flex gap-3 w-full lg:w-auto shrink-0">
            <input 
              type="email" 
              placeholder="E-posta adresiniz"
              className="flex-1 lg:w-64 px-5 py-4 rounded-2xl bg-background border border-border focus:border-primary focus:ring-0 outline-none transition-all text-sm font-medium" 
            />
            <button className="gold-bg px-8 py-4 rounded-2xl font-black text-sm text-[#1A1A2E] shadow-xl shadow-primary/20 hover:scale-105 transition-transform">
              Kayıt Ol
            </button>
          </div>
        </div>

        {/* 5. Alt Bilgi & Copyright */}
        <div className="pt-10 border-t border-border/60 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <p className="text-muted-foreground text-[13px] font-bold">© {new Date().getFullYear()} Altın Kelime Ekosistemi. Tüm hakları saklıdır.</p>
          </div>
          <div className="flex gap-8 text-muted-foreground text-xs font-black tracking-widest uppercase">
            <Link href="/gizlilik" className="hover:text-primary transition-colors">Gizlilik</Link>
            <Link href="/sartlar" className="hover:text-primary transition-colors">Şartlar</Link>
            <Link href="/kvkk" className="hover:text-primary transition-colors">KVKK</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}