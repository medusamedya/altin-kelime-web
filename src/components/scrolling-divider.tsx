"use client"

export function ScrollingDivider() {
  // Bantlarda akacak metinler (Aralarına ayıraç olarak yıldız veya nokta koyuyoruz)
  const goldBandWords = "ALTIN KELİME • 7 HARF • 1 DAKİKA • TEK KAZANAN • BÜYÜK ÖDÜL • "
  const darkBandWords = "HEYECAN • STRATEJİ • ZAMAN • ODAK • KELİME DAĞARCIĞI • "
  
  // Metinleri ekran genişliğini doldurması için bolca çoğaltıyoruz
  const repeatedDark = darkBandWords.repeat(20)

  return (
    // overflow-hidden ile dışarı taşan o çapraz bant uçlarını gizliyoruz
    <div className="relative w-full h-40 lg:h-48 flex items-center justify-center overflow-hidden bg-background pointer-events-none select-none">
      
      {/* 1. BANT: Arka plandaki Tema Rengi Bant (Sola Doğru Eğimli ve Sağa Akar) */}
      <div className="absolute w-[110%] h-16 bg-background border-y-2 border-primary/20 flex items-center whitespace-nowrap -rotate-3 shadow-lg z-10">
        <div className="animate-marquee-reverse flex text-xl md:text-3xl font-black tracking-widest text-foreground/80">
          <span>{repeatedDark}</span>
        </div>
      </div>
    </div>
  )
}