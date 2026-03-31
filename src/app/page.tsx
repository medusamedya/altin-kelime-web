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
import { NotJustAGame } from "@/components/not-just-a-game"

import type { Metadata } from "next"
import { ProgressionSystem } from "@/components/progression-system"
import { RewardSystem } from "@/components/reward-system"
import { AudienceExperience } from "@/components/audience-experience"
import { StrategyCards } from "@/components/strategy-cards"
import { ProductionSection } from "@/components/production-section"
import { FAQSection } from "@/components/faq-section"
import { BroadcastSchedule } from "@/components/broadcast-schedule"
import { ApplicationCTA } from "@/components/application-cta"
import { SponsorshipSection } from "@/components/sponsorship-section"

export const metadata: Metadata = {
  title: "Altın Kelime | Türkiye'nin Strateji & Kelime Yarışması",
  description: "7 harf, 1 dakika, tek kazanan. Kelime bilgisi ve stratejinin buluştuğu TV yarışması. İlk sezon seçmeleri başladı — hemen başvur.",
}

export default function Home() {
  return (
      <main className="min-h-screen bg-background">
          <Hero />
          <ExperienceSection />
          <ProgramIntro />

          <FAQSection />
          <BroadcastSchedule />
          
         
          <AnimatedStats /> 
          
          <HowToPlay />
          
          <VideoSection />
          <StudioGallery />
          <TeamSection />
          
          <MobileAppSection />
          
          <GamePlayground />
          <ApplicationCTA />
          <SponsorshipSection />
          <FinalCTA />
      </main>
  );
}