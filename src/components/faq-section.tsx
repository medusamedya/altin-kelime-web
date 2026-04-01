import { RuleAccordion } from "./rule-accordion" // Yolunu kontrol et
const FAQ_DATA = [
  {
    num: "?",
    title: "Kelimeler nereden kontrol ediliyor?",
    desc: "Altın Kelime'de üretilen tüm kelimeler, güncel TDK (Türk Dil Kurumu) sözlüğü ve yarışma jürisinin onayladığı kapsamlı bir kelime veritabanı üzerinden gerçek zamanlı olarak kontrol edilir."
  },
  {
    num: "?",
    title: "Özel isimler kullanılabilir mi?",
    desc: "Hayır, yarışma kuralları gereği özel isimler, kısaltmalar ve ek almış kelimeler geçerli sayılmaz. Sadece sözlükte yer alan yalın haldeki kelimeler kabul edilir."
  },
  {
    num: "!",
    title: "Joker kartı nasıl kullanılır?",
    desc: "Joker kartı, Türk alfabesindeki herhangi bir harfin yerine kullanılabilir. 63 kartlık destede toplam 5 adet joker bulunur. Joker çekmek tamamen şansa bağlıdır."
  },
  {
    num: "?",
    title: "Eşitlik durumunda ne olur?",
    desc: "Eğer tur sonunda puanlar eşitse, kelimeyi daha kısa sürede (milisaniye farkıyla) sisteme giren yarışmacı tura avantajlı başlar veya beraberlik turları devreye girer."
  },
  {
    num: "?",
    title: "Yarışmaya kimler başvurabilir?",
    desc: "18 yaşını doldurmuş, Türkçe dil bilgisine güvenen ve stratejik düşünme yeteneği olan herkes web sitemizdeki başvuru formunu doldurarak şansını deneyebilir."
  }
]
export function FAQSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-background border-t border-border/50">
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        
        {/* Üst Başlık Alanı */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black tracking-[0.2em] uppercase mb-6 shadow-[0_0_20px_rgba(212,175,55,0.1)]">
            SSS
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-foreground">
            Sıkça Sorulan <span className="gold-text">Sorular</span>
          </h2>
          <p className="text-lg text-muted-foreground font-medium max-w-xl mx-auto">
            Merak ettiğin her şeyin cevabı burada. Yarışma kuralları ve ödül sistemi hakkında detaylı bilgi al.
          </p>
        </div>

        {/* Senin Mevcut Akordeon Bileşenin */}
        <RuleAccordion rules={FAQ_DATA} />

        {/* Alt Bilgi Notu */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground font-medium">
            Başka bir sorun mu var? <a href="#contact" className="text-primary hover:underline underline-offset-4">Bize ulaşmaktan çekinme.</a>
          </p>
        </div>

      </div>
    </section>
  )
}