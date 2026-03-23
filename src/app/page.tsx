import { Hero } from "@/components/hero"
import { ExperienceSection } from "@/components/experience-section"
import { ProgramIntro } from "@/components/program-intro"
import { ScrollingDivider } from "@/components/scrolling-divider"
import { GamePlayground } from "@/components/game-playground"
import { HowToPlay } from "@/components/how-to-play"

// 1. Yeni hazırladığımız SEO dostu bileşeni import ediyoruz
// (Dosya adını kendi projedeki ismine göre güncellemeyi unutma)
import { StatisticsSection } from "@/components/statistics-section"

// 2. Gelecekte Strapi'den (API) gelecek verinin provası
const mockStats = [
  { value: 5, label: "Yarışmacı", suffix: "" },
  { value: 7, label: "Harf", suffix: "" },
  { value: 1, label: "Dakika", suffix: "" },
  { value: 1000, label: "Başlangıç Puanı", suffix: "" },
]

export default function Home() {
  return (
      <main className="min-h-screen bg-background">
          <Hero />
          <ExperienceSection />
          <ProgramIntro />
          
          <StatisticsSection stats={mockStats} />
          
          <ScrollingDivider />
          <HowToPlay />
          <GamePlayground />
      </main>
  );
}