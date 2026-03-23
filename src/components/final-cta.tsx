"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { LetterTile } from "./letter-tile"
import { ArrowRight, Briefcase, UserPlus, X } from "lucide-react"
import { createPortal } from "react-dom"

// --- MODAL FORM BİLEŞENİ (Aşama 5'te Strapi API'ye bağlanacak) ---
function FormModal({ type, onClose }: { type: "contestant" | "sponsor" | null, onClose: () => void }) {
  // Modal açıkken arka plan kaymasını engelle
  useEffect(() => {
    if (type) document.body.style.overflow = "hidden"
    else document.body.style.overflow = "unset"
    return () => { document.body.style.overflow = "unset" }
  }, [type])

  if (!type) return null

  const isContestant = type === "contestant"

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 bg-background/95 backdrop-blur-xl animate-in fade-in duration-300" onClick={onClose} />
      
      <div className="relative w-full max-w-2xl bg-card border border-primary/20 rounded-[2.5rem] shadow-[0_0_50px_rgba(212,175,55,0.1)] overflow-hidden animate-in zoom-in-95 duration-300 p-8 md:p-12">
        <button onClick={onClose} className="absolute top-6 right-6 p-2 bg-background/80 hover:bg-destructive text-foreground hover:text-destructive-foreground rounded-full transition-colors border border-border/50">
          <X size={20} />
        </button>
        
        <div className="mb-10 text-center mt-2">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 text-primary mb-6 shadow-inner border border-primary/30">
            {isContestant ? <UserPlus size={36} /> : <Briefcase size={36} />}
          </div>
          <h3 className="text-3xl md:text-4xl font-black mb-3 tracking-tight">
            <span className="gold-text">{isContestant ? "Sahneye Çıkma Vakti!" : "Formata Ortak Olun"}</span>
          </h3>
          <p className="text-muted-foreground text-lg font-medium">
            {isContestant
              ? "Bilgilerini doldur, ilk sezon seçmeleri için VIP listeye adını yazdır."
              : "Yatırım, sponsorluk ve yayın hakları için kurucu ekibimize doğrudan ulaşın."}
          </p>
        </div>

        {/* Form Alanı */}
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest ml-1">Adınız Soyadınız</label>
              <input type="text" className="w-full bg-background border border-border/80 rounded-xl px-5 py-4 focus:border-primary focus:ring-0 outline-none transition-all duration-300 focus:shadow-[0_0_20px_rgba(212,175,55,0.15)] font-medium" placeholder="Örn: Ali Yılmaz" required />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest ml-1">{isContestant ? "Telefon Numaranız" : "Kurumsal E-posta"}</label>
              <input type={isContestant ? "tel" : "email"} className="w-full bg-background border border-border/80 rounded-xl px-5 py-4 focus:border-primary focus:ring-0 outline-none transition-all duration-300 focus:shadow-[0_0_20px_rgba(212,175,55,0.15)] font-medium" placeholder={isContestant ? "05XX XXX XX XX" : "isim@sirket.com"} required />
            </div>
          </div>
          
          {isContestant && (
            <div className="space-y-2">
              <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest ml-1">Neden Altın Kelime?</label>
              <textarea className="w-full bg-background border border-border/80 rounded-xl px-5 py-4 min-h-[120px] focus:border-primary focus:ring-0 outline-none transition-all duration-300 focus:shadow-[0_0_20px_rgba(212,175,55,0.15)] font-medium resize-none" placeholder="Kelime bilgine neden güveniyorsun? Bize kısaca bahset..." required />
            </div>
          )}
          
          {!isContestant && (
            <div className="space-y-2">
              <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest ml-1">Mesajınız / Teklifiniz</label>
              <textarea className="w-full bg-background border border-border/80 rounded-xl px-5 py-4 min-h-[120px] focus:border-primary focus:ring-0 outline-none transition-all duration-300 focus:shadow-[0_0_20px_rgba(212,175,55,0.15)] font-medium resize-none" placeholder="Sponsorluk, TV yayın hakları veya dijital entegrasyon taleplerinizi belirtin..." required />
            </div>
          )}
          
          <Button type="submit" className="w-full py-7 text-lg font-bold mt-8 bg-gradient-to-r from-primary to-accent text-primary-foreground hover:from-primary/90 hover:to-accent/90 shadow-xl shadow-primary/20 rounded-xl transition-transform hover:-translate-y-1">
            {isContestant ? "Başvurumu Tamamla" : "Mesajı Gönder"}
          </Button>
        </form>
      </div>
    </div>,
    document.body
  )
}

// --- ANA BİLEŞEN ---
export function FinalCTA() {
  const [modalType, setModalType] = useState<"contestant" | "sponsor" | null>(null)

  return (
    <>
      <section id="apply" className="py-24 lg:py-32 relative overflow-hidden border-t border-border/30">
        {/* Background image & Gradients */}
        <div className="absolute inset-0">
          <Image
            src="/images/cta-background.jpg"
            alt="TV Studio Stage"
            fill
            className="object-cover opacity-40 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-background/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-transparent to-background/90" />
        </div>

        {/* Spotlight effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.12)_0%,transparent_60%)] pointer-events-none" />

        {/* Floating letters (Dekoratif Harfler) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-[10%] opacity-30 animate-float hidden lg:block"><LetterTile letter="Y" size="lg" variant="gold" /></div>
          <div className="absolute bottom-1/4 right-[10%] opacity-30 animate-float-slow hidden lg:block"><LetterTile letter="A" size="lg" /></div>
          <div className="absolute top-1/3 right-[20%] opacity-20 animate-float hidden lg:block"><LetterTile letter="R" size="md" variant="accent" /></div>
          <div className="absolute bottom-1/3 left-[20%] opacity-20 animate-float-slow hidden lg:block"><LetterTile letter="I" size="md" /></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* FOMO (Aciliyet) Badge'i */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-destructive/10 border border-destructive/20 mb-8 backdrop-blur-sm shadow-lg">
              <span className="w-2.5 h-2.5 rounded-full bg-destructive animate-pulse" />
              <span className="text-destructive font-black text-xs md:text-sm tracking-widest uppercase">İlk Sezon Seçmeleri Başladı</span>
            </div>

            {/* Title */}
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-balance tracking-tight">
              Altın Kelime Ekosisteminde <br/>
              <span className="gold-text inline-block mt-2">Yerinizi Alın</span>
            </h2>

            {/* Description */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-14 leading-relaxed text-pretty max-w-2xl mx-auto font-medium">
              Büyük ödül için yarışan ilk şampiyonlardan biri olun veya bu benzersiz formatın global büyümesine marka olarak ortak olun.
            </p>

            {/* Dual CTA Buttons (Split Dönüşüm) */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button
                onClick={() => setModalType("contestant")}
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent text-primary-foreground hover:from-primary/90 hover:to-accent/90 font-bold text-lg px-10 py-8 shadow-2xl shadow-primary/30 group rounded-2xl transition-all hover:-translate-y-1 hover:shadow-primary/40"
              >
                <span className="flex items-center gap-3">
                  <UserPlus className="w-6 h-6" />
                  Yarışmacı Başvurusu
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>

              <Button
                onClick={() => setModalType("sponsor")}
                size="lg"
                variant="outline"
                className="w-full sm:w-auto font-bold text-lg px-10 py-8 shadow-xl group rounded-2xl transition-all hover:-translate-y-1 border-primary/30 hover:bg-primary/10 hover:border-primary hover:text-primary backdrop-blur-sm"
              >
                <span className="flex items-center gap-3">
                  <Briefcase className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
                  Sponsor / Yapımcı Ol
                </span>
              </Button>
            </div>

            {/* Dekoratif Alt Kısım */}
            <div className="mt-24 pt-10 border-t border-border/30 flex flex-col items-center">
              <div className="flex items-center justify-center gap-2 md:gap-3 mb-6">
                {["B", "A", "Ş", "V", "U", "R"].map((letter, i) => (
                  <LetterTile key={i} letter={letter} size="sm" variant={i === 0 || i === 5 ? "gold" : "default"} className="opacity-60 hover:opacity-100 hover:-translate-y-2 transition-all cursor-default shadow-md" />
                ))}
              </div>
              <p className="text-xs md:text-sm font-bold text-muted-foreground uppercase tracking-[0.2em]">
                18 yaş ve üzeri herkesin katılımına açıktır
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Bileşeni Buradan Çağrılıyor */}
      <FormModal type={modalType} onClose={() => setModalType(null)} />
    </>
  )
}