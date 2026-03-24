import { Hero } from "@/components/hero"
import { ExperienceSection } from "@/components/experience-section"
import { ProgramIntro } from "@/components/program-intro"
import { ScrollingDivider } from "@/components/scrolling-divider"
import { GamePlayground } from "@/components/game-playground"
import { HowToPlay } from "@/components/how-to-play"
import { StatisticsSection } from "@/components/statistics-section"
import { VideoSection } from "@/components/video-section"
import { StudioGallery } from "@/components/studio-gallery"

// 1. Mobil Uygulama (Omnichannel) vizyonumuzu ekliyoruz
import { MobileAppSection } from "@/components/mobile-app-section" // Dosya adını kontrol etmeyi unutma
import { FinalCTA } from "@/components/final-cta"
import { TeamSection } from "@/components/team-section"

// Strapi'den gelecek verinin provası
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
          
          <VideoSection />
          <StudioGallery />
          <TeamSection />
          
          <MobileAppSection />
          
          <GamePlayground />
          <FinalCTA />
      </main>
  );
}