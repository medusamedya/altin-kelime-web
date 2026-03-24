import { Hero } from "@/components/hero"
import { ExperienceSection } from "@/components/experience-section"
import { ProgramIntro } from "@/components/program-intro"
import { ScrollingDivider } from "@/components/scrolling-divider"
import { GamePlayground } from "@/components/game-playground"
import { HowToPlay } from "@/components/how-to-play"
import { AnimatedStats } from "@/components/animated-stats" 
import { VideoSection } from "@/components/video-section"
import { StudioGallery } from "@/components/studio-gallery"

// 1. Mobil Uygulama (Omnichannel) vizyonumuzu ekliyoruz
import { MobileAppSection } from "@/components/mobile-app-section" 
import { FinalCTA } from "@/components/final-cta"
import { TeamSection } from "@/components/team-section"

export default function Home() {
  return (
      <main className="min-h-screen bg-background">
          <Hero />
          <ExperienceSection />
          <ProgramIntro />
          
         
          <AnimatedStats /> 
          
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