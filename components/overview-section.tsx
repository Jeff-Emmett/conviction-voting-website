import { Card, CardContent } from "@/components/ui/card"
import { Clock, TrendingUp, Shield, Users } from "lucide-react"

export function OverviewSection() {
  const features = [
    {
      icon: Clock,
      title: "Continuous Voting",
      description:
        "Express your preferences continuously, not just during time-boxed voting periods. Change your vote at any time.",
    },
    {
      icon: TrendingUp,
      title: "Conviction Growth",
      description:
        "Your vote weight grows over time according to a halflife algorithm, giving more influence to long-term community members.",
    },
    {
      icon: Shield,
      title: "Attack Resistant",
      description: "Sidesteps sybil attacks and provides collusion resistance through time-weighted mechanisms.",
    },
    {
      icon: Users,
      title: "Human-Centric",
      description: "Captures human needs in temporal data flows, ensuring people remain central to automated systems.",
    },
  ]

  return (
    <section id="overview" className="py-24 bg-muted/40">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">What is Conviction Voting?</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Conviction Voting is a decision-making process in which voters continuously express their preference by
            staking tokens in support of proposals. The conviction (weight) of their vote grows over time, and proposals
            pass when they reach an algorithmically-set threshold.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
