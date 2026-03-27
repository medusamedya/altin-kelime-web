import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Altın Kelime Format Kiti | TV Lisansı ve Prodüksiyon",
  description: "Lisanslanabilir, global uyarlamalı kelime yarışması formatı. Format Bible, pilot bölüm ve sizzle reel paketi mevcut. Medusa Global.",
}

export default function FormatLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}