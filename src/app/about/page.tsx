import Link from "next/link"
import { 
  Brain, 
  Target, 
  Eye, 
  MonitorPlay, 
  Play, 
  CheckCircle2, 
  ArrowRight,
  ShieldAlert,
  Zap,
  Users
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { LetterTile } from "@/components/letter-tile"
import { FinalCTA } from "@/components/final-cta"

// Meta etiketleri (SEO İçin)
export const metadata = {
  title: "Altın Kelime Nedir? | Program Konsepti",
  description: "Kelime bilgisi, stratejik düşünme ve hızlı karar alma becerilerini bir araya getiren yeni nesil televizyon yarışması.",
}

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen pt-20">
      
      {/* 1️⃣ ÜST TANITIM BLOĞU (HERO) */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.1)_0%,transparent_70%)] pointer-events-none" />
        
        {/* Dekoratif Harfler */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
          <div className="absolute top-10 left-[10%] animate-float"><LetterTile letter="S" size="lg" variant="gold" /></div>
          <div className="absolute bottom-20 right-[15%] animate-float-slow"><LetterTile letter="R" size="md" /></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight">
              ALTIN KELİME <br className="hidden md:block"/>
              <span className="gold-text">NEDİR?</span>
            </h1>
            <p className="text-xl md:text-2xl font-bold text-foreground mb-6">
              Kelime Bilgisi ve Stratejinin Buluştuğu Yarışma
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto font-medium">
              Altın Kelime’de yarışmacılar verilen harflerle en uzun ve geçerli Türkçe kelimeyi üretmeye çalışır. Ancak bu yalnızca bir kelime oyunu değildir. Yarışmacılar aynı zamanda:
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <div className="flex items-center gap-2 bg-card/50 px-4 py-2 rounded-xl border border-border/50">
                <ShieldAlert className="w-5 h-5 text-primary" />
                <span className="font-bold text-sm">Doğru Zamanda Risk Alır</span>
              </div>
              <div className="flex items-center gap-2 bg-card/50 px-4 py-2 rounded-xl border border-border/50">
                <Users className="w-5 h-5 text-primary" />
                <span className="font-bold text-sm">Rakiplerini Analiz Eder</span>
              </div>
              <div className="flex items-center gap-2 bg-card/50 px-4 py-2 rounded-xl border border-border/50">
                <Target className="w-5 h-5 text-primary" />
                <span className="font-bold text-sm">Stratejik Karar Verir</span>
              </div>
            </div>

            <p className="text-xl font-black text-primary mb-10 tracking-wide uppercase">
              Her harf açıldığında oyunun dengesi değişir.
            </p>

            <Button size="lg" className="gold-bg text-[#1A1A2E] font-black px-10 py-7 rounded-2xl shadow-xl hover:scale-105 transition-transform" asChild>
              <Link href="/#how-to-play">Nasıl Oynanır <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 2️⃣ PROGRAM KONSEPTİ (4 KARTLIK BLOK) */}
      <section id="program-konsepti" className="py-24 bg-secondary/30 border-y border-border/50 relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              PROGRAM <span className="gold-text underline decoration-primary/30">KONSEPTİ</span>
            </h2>
            <p className="text-lg text-muted-foreground font-medium mb-4">
              Kelime bilgisinin, stratejinin ve rekabetin birleştiği yeni nesil yarışma formatı.
            </p>
            <p className="text-muted-foreground">
              Altın Kelime, yalnızca doğru kelimeyi bulmaya dayalı klasik bir yarışma değildir. Her turda yarışmacılar yalnızca en uzun kelimeyi üretmeye değil, aynı zamanda doğru anda risk almaya, rakiplerini okumaya ve oyunda kalmaya çalışır.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Bilgi", icon: Brain, desc: "Yarışmacılar verilen harflerle en uzun ve geçerli Türkçe kelimeyi üretmeye çalışır. Oyunun temelinde güçlü bir dil hâkimiyeti bulunur." },
              { title: "Strateji", icon: Target, desc: "Oyuncular yalnızca kelime üretmez; puan ekleyerek oyunda kalır, doğru anda çekilir ve rakiplerinin kararlarına göre hamle yapar." },
              { title: "Psikoloji", icon: Eye, desc: "Bazen bir yarışmacı gerçekten kelime bulmuş olabilir, bazen ise yalnızca blöf yapıyordur. Bu belirsizlik oyunun gerilimini artırır." },
              { title: "Seyir Deneyimi", icon: MonitorPlay, desc: "İzleyici harfleri takip ederek yarışmaya zihinsel olarak dahil olur. Program yalnızca izlenen değil, birlikte oynanan bir deneyime dönüşür." }
            ].map((item, i) => (
              <div key={i} className="bg-card p-8 rounded-3xl border border-border/50 hover:border-primary/50 transition-colors shadow-sm group">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-500">
                  <item.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-black mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3️⃣ PROGRAMIN YAPISI (TIMELINE / 3 ADIM) - Dark Mode İyileştirmesi Yapıldı */}
<section className="py-24 bg-background relative overflow-hidden">
  <div className="container mx-auto px-4 relative z-10">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-black mb-4 tracking-tight">Programın Yapısı</h2>
      <div className="w-24 h-1.5 bg-primary mx-auto rounded-full" />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
      {/* Masaüstü için bağlantı çizgisi */}
      <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-border/50 z-0" />
      
      {[
        { step: "01", title: "Başlangıç Aşaması", desc: "Her yarışmacıya iki harf verilir. Ortaya ise beş harf kapalı olarak yerleştirilir. Yarışmacılar ellerindeki potansiyeli değerlendirerek oyuna nasıl yaklaşacaklarına karar verir." },
        { step: "02", title: "Karar ve Rekabet", desc: "Harfler sırayla açıldıkça yarışmacılar puan artırabilir, oyunda kalabilir ya da turdan çekilebilir. Bu aşama stratejik ve psikolojik boyutu belirler." },
        { step: "03", title: "Kelime ve Sonuç", desc: "TDK’da yer alan en uzun kelimeyi üreten turu kazanır ve puanları toplar." }
      ].map((phase, i) => (
        <div key={i} className="relative z-10 flex flex-col items-center text-center group">
          {/* Yuvarlak Adım Kutusu - Belirginleştirildi */}
          <div className="w-24 h-24 rounded-full flex items-center justify-center mb-6 z-10 relative
            {/* Hafif Altın Neon Parıltısı (Glow) */}
            shadow-[0_0_30px_rgba(212,175,55,0.1)] 
            
            {/* Işık ve Renk Ayarları */}
            bg-background           /* Light temada beyaz kalır */
            dark:bg-card           /* Dark temada koyu gri olur (Arka plandan ayrılır) */
            
            border-4               /* Kenarlık kalınlığı */
            border-card            /* Light temada ince gri */
            dark:border-primary/20 /* Dark temada sönük altın neon */
            
            {/* Hover Efektleri */}
            group-hover:scale-110 group-hover:border-primary dark:group-hover:border-primary transition-all duration-500 hover:shadow-primary/30
          ">
            <span className="text-4xl font-black gold-text transition-transform duration-500 group-hover:scale-110">{phase.step}</span>
          </div>
          
          <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{phase.title}</h3>
          <p className="text-muted-foreground text-sm font-medium leading-relaxed max-w-xs">{phase.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* 4️⃣ FORMATIN FARKI BLOĞU */}
      <section className="py-24 bg-card border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Sol Taraf: Açıklama */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-primary font-bold text-xs tracking-widest uppercase">Formatın Gücü</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
                Altın Kelime'yi <br/>
                <span className="gold-text">Farklı Yapan Nedir?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 font-medium leading-relaxed">
                Altın Kelime’yi klasik kelime yarışmalarından ayıran en önemli unsur, bilgi ile stratejiyi aynı yapıda buluşturmasıdır. Yarışmacılar sadece doğru cevabı bilerek değil, doğru zamanda doğru kararı vererek de avantaj kazanır.
              </p>
              <p className="text-lg text-muted-foreground font-medium leading-relaxed">
                Oyunun ritmi; harflerin kademeli açılması, puanların yükselmesi ve blöf ihtimalinin her an masada olmasıyla sürekli diri kalır.
              </p>
            </div>

            {/* Sağ Taraf: Vurgu Kutuları */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "7 Harf", desc: "Her tur yepyeni bir kombinasyon" },
                { title: "1 Dakika", desc: "Yüksek tempo, hızlı karar mekanizması" },
                { title: "5 Yarışmacı", desc: "Çok yönlü ve dinamik rekabet" },
                { title: "Tek Kazanan", desc: "Sona yaklaştıkça artan psikolojik baskı" }
              ].map((box, i) => (
                <div key={i} className="bg-background p-6 rounded-2xl border border-border/80 hover:border-primary/50 transition-colors shadow-sm">
                  <h4 className="text-2xl font-black text-foreground mb-2">{box.title}</h4>
                  <p className="text-sm text-muted-foreground font-medium">{box.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 5️⃣ KELİME EVRENİ (MARQUEE) */}
      <section className="py-12 overflow-hidden bg-primary/5 border-b border-border/40">
        <div className="flex whitespace-nowrap animate-marquee">
          {["Kelime", "Strateji", "Rekabet", "Bilgi", "Türkçe", "Eğlence", "Heyecan"].map((word, i) => (
            <span key={i} className="text-4xl md:text-6xl font-black text-foreground/10 uppercase tracking-widest mx-8">
              {word} • 
            </span>
          ))}
          {["Kelime", "Strateji", "Rekabet", "Bilgi", "Türkçe", "Eğlence", "Heyecan"].map((word, i) => (
            <span key={i} className="text-4xl md:text-6xl font-black text-foreground/10 uppercase tracking-widest mx-8">
              {word} • 
            </span>
          ))}
        </div>
      </section>

      {/* 6️⃣ KAPANIŞ METNİ */}
      <section className="py-32 bg-background text-center px-4 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tighter">Bir Kelimeden Fazlası</h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-12 font-medium text-balance">
            Altın Kelime, Türkçenin zenginliğini ekran heyecanıyla buluşturan; bilgiyi, stratejiyi ve rekabeti aynı anda yaşatan güçlü bir yarışma formatıdır. Her tur yeni bir gerilim, her karar yeni bir ihtimal ve her kelime oyunun kaderini değiştirebilecek bir hamledir.
          </p>
          <div className="inline-flex items-center gap-4 bg-card/50 border border-primary/20 px-8 py-4 rounded-full shadow-lg">
            <span className="text-primary font-black tracking-[0.2em] uppercase">7 Harf</span>
            <span className="w-1.5 h-1.5 rounded-full bg-foreground/30" />
            <span className="text-primary font-black tracking-[0.2em] uppercase">1 Dakika</span>
            <span className="w-1.5 h-1.5 rounded-full bg-foreground/30" />
            <span className="text-primary font-black tracking-[0.2em] uppercase">1 Kazanan</span>
          </div>
        </div>
      </section>

      {/* 7️⃣ CTA BLOĞU (Ana Sayfadaki Bileşen) */}
      <FinalCTA />

    </main>
  )
}