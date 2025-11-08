import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/30 via-background to-muted/20 -z-10" />

      <div className="container mx-auto max-w-screen-xl px-4 py-24 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/60 text-sm mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-foreground opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-foreground"></span>
            </span>
            Continuous governance for the decentralized era
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-balance">Conviction Voting</h1>

          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8 text-pretty">
            A novel continuous decision-making mechanism that allows votes to accumulate weight over time according to a
            halflife algorithm
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-base">
              <Link href="/#overview">
                Learn How It Works
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base bg-transparent">
              <Link href="/applications">View Applications</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
