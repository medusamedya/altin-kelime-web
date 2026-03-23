// "use client" tamamen SİLİNDİ! (Server Component)

// --- STATİK VERİLER VE HESAPLAMALAR (Bileşen dışında 1 kez çalışır, RAM'i yormaz) ---
const goldBandWords = "ALTIN KELİME • 7 HARF • 1 DAKİKA • TEK KAZANAN • BÜYÜK ÖDÜL • "
const darkBandWords = "HEYECAN • STRATEJİ • ZAMAN • ODAK • KELİME DAĞARCIĞI • "

const repeatedGold = goldBandWords.repeat(20)
const repeatedDark = darkBandWords.repeat(20)

export function ScrollingDivider() {
  return (
    // overflow-hidden ile dışarı taşan o çapraz bant uçlarını gizliyoruz
    <div className="relative w-full h-40 lg:h-48 flex items-center justify-center overflow-hidden bg-background pointer-events-none select-none ">
      
      {/* 1. BANT: Arka plandaki Koyu Bant (Sola Doğru Eğimli ve Sağa Akar) */}
      <div className="absolute w-[110%] h-14 md:h-16 bg-background border-y border-primary/20 flex items-center whitespace-nowrap -rotate-3 shadow-lg z-10">
        {/* transform-gpu ve willChange ile animasyon Ekran Kartına devredildi */}
        <div 
          className="animate-marquee-reverse flex text-xl md:text-3xl font-black tracking-widest text-foreground/20 transform-gpu" 
          style={{ willChange: 'transform' }}
        >
          <span>{repeatedDark}</span>
        </div>
      </div>

      
    </div>
  )
}