import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function AlgorithmSection() {
  return (
    <section id="algorithm" className="py-24">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">The Halflife Algorithm</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Conviction Voting uses an exponential decay function (halflife) to manage how support charges up and down
            for proposals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>How Conviction Grows</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                When you start supporting a proposal, your support (conviction) doesn't immediately apply. Instead, it
                charges up over time according to a halflife function.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-foreground font-semibold mt-0.5">•</span>
                  <span>After 2 days (48 hours): conviction reaches 1/2 of potential value</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground font-semibold mt-0.5">•</span>
                  <span>After 4 days: conviction reaches 3/4 of potential value</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground font-semibold mt-0.5">•</span>
                  <span>After 6 days: conviction reaches 7/8 of potential value</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground font-semibold mt-0.5">•</span>
                  <span>The process continues asymptotically toward full value</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Key Parameters</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Conviction Growth Rate</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Determines how quickly support charges up and down (typically 48 hours halflife)
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Spending Limit</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Maximum proportion of funds that can be requested by any single proposal (e.g., 10%)
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Minimum Conviction</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Minimum threshold required for small proposals to prevent spam (typically 2.5%)
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Effective Stake</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Minimum percent of token supply used to calculate thresholds (typically 20%)
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
