import { AnimatedCounter } from "./animated-counter" // Doğru yolu (path) belirlemelisin

// Bu interface ileride Strapi'den gelecek veri modelini temsil eder
interface StatItem {
  value: number;
  label: string;
  suffix?: string;
}

interface StatisticsSectionProps {
  stats: StatItem[];
}

export function StatisticsSection({ stats }: StatisticsSectionProps) {
  return (
    <section className="py-24 lg:py-32 bg-charcoal relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08)_0%,transparent_60%)]" />

      <div className="container mx-auto px-4 relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
            Sayılarla{" "}
            <span className="text-primary">Altın Kelime</span>
          </h2>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 lg:p-8 rounded-2xl bg-card/30 border border-border/50 hover:border-primary/30 transition-colors"
            >
              {/* Sadece animasyon kısmı Client-Side çalışır */}
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <div className="text-lg text-muted-foreground mt-2 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}