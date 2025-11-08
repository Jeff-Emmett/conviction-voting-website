import { Card, CardContent } from "@/components/ui/card"

export function BenefitsSection() {
  const benefits = [
    {
      number: "01",
      title: "No Time Pressure",
      description: "Vote whenever you want without coordinating around specific voting periods",
    },
    {
      number: "02",
      title: "Reduced Voter Fatigue",
      description: "Set your preferences once and they persist until you change them",
    },
    {
      number: "03",
      title: "Better Signal Quality",
      description: "Long-term community members have more influence than short-term participants",
    },
    {
      number: "04",
      title: "Attack Resistance",
      description: "Time-weighting makes vote-buying and last-minute coordination attacks less effective",
    },
    {
      number: "05",
      title: "Continuous Data",
      description: "Rich temporal data streams enable responsive and adaptive governance",
    },
    {
      number: "06",
      title: "Funds Allocation",
      description: "Specifically designed from first principles for allocating shared treasury resources",
    },
  ]

  return (
    <section id="benefits" className="py-24 bg-muted/40">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Why Conviction Voting?</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Traditional time-boxed voting has shown limited effectiveness in distributed communities. Conviction Voting
            offers a better alternative for continuous, human-centric decision making.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <Card key={benefit.number}>
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary/20 mb-4">{benefit.number}</div>
                <h3 className="font-semibold text-xl mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
