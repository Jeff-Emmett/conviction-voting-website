import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { HeroSection } from "@/components/hero-section"
import { OverviewSection } from "@/components/overview-section"
import { AlgorithmSection } from "@/components/algorithm-section"
import { BenefitsSection } from "@/components/benefits-section"
import { ResourcesSection } from "@/components/resources-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <OverviewSection />
        <AlgorithmSection />
        <BenefitsSection />
        <ResourcesSection />
      </main>
      <SiteFooter />
    </div>
  )
}
