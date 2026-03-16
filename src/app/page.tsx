import { Hero } from "@/components/hero"
import { ExperienceSection } from "@/components/experience-section"



export default function Home() {
  return (
      <main className="min-h-screen bg-background">
          <Hero></Hero>
          <ExperienceSection></ExperienceSection>
      </main>
  );
}
