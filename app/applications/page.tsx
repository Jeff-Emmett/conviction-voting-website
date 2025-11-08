import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Rocket, CheckCircle2, Github } from "lucide-react"

export default function ApplicationsPage() {
  const implementations = [
    {
      name: "1Hive Gardens",
      description:
        "1Hive uses Disputable Conviction Voting as the core governance mechanism for their Gardens framework. Community members can create proposals and stake tokens to signal support for funding requests from the shared treasury.",
      url: "https://1hive.gitbook.io/gardens/on-chain-governance/protocol-parameters/disputable-conviction-voting",
      status: "Production",
      blockchain: "Gnosis Chain",
      tags: ["DAO", "Treasury Management", "Community Funding"],
    },
    {
      name: "Commons Stack",
      description:
        "The Commons Stack implements Conviction Voting for commons-based funding decisions, allowing communities to allocate resources to public goods and shared infrastructure in a continuous, democratic way.",
      url: "https://cv.commonsstack.org/",
      status: "Production",
      blockchain: "Ethereum",
      tags: ["Public Goods", "Commons", "Funding"],
    },
    {
      name: "Moonbeam Network",
      description:
        "Moonbeam implements Conviction Voting through a Solidity precompile contract that interacts with Substrate's Conviction Voting Pallet, enabling token holders to vote on governance referenda with conviction multipliers.",
      url: "https://docs.moonbeam.network/builders/ethereum/precompiles/features/governance/conviction-voting/",
      status: "Production",
      blockchain: "Polkadot Parachain",
      tags: ["OpenGov", "Polkadot", "Precompile"],
    },
    {
      name: "Ceramic Network (Off-chain)",
      description:
        "Ceramic Network developed a trust-minimized off-chain implementation of Conviction Voting using IDX and verifiable data structures. This approach avoids high gas costs while maintaining verifiability.",
      url: "https://blog.ceramic.network/trust-minimized-off-chain-conviction-voting",
      status: "Research",
      blockchain: "Off-chain / IPFS",
      tags: ["Off-chain", "Gas Efficient", "Verifiable"],
    },
    {
      name: "Giveth",
      description:
        "Giveth pioneered the exploration of Conviction Voting for decentralized funding allocation, working with Commons Stack and BlockScience to develop and refine the mechanism.",
      url: "https://giveth.io/",
      status: "Production",
      blockchain: "Ethereum / Gnosis",
      tags: ["Philanthropy", "Community", "Funding"],
    },
    {
      name: "Token Engineering Commons",
      description:
        "The TEC uses Conviction Voting as part of their governance toolkit for allocating funds to token engineering projects and public goods in the ecosystem.",
      url: "https://token-engineering-commons.gitbook.io/tec-handbook/",
      status: "Production",
      blockchain: "Gnosis Chain",
      tags: ["Token Engineering", "DAO", "Research"],
    },
  ]

  const useCases = [
    {
      title: "DAO Treasury Management",
      description:
        "Allocate funds from shared treasuries based on community preferences without time-boxed voting rounds",
    },
    {
      title: "Public Goods Funding",
      description: "Support commons-based projects and infrastructure with continuous community input",
    },
    {
      title: "Grant Programs",
      description: "Run transparent, participatory grant programs where conviction grows with community support",
    },
    {
      title: "Resource Allocation",
      description: "Prioritize work proposals and bounties based on sustained community interest",
    },
    {
      title: "Protocol Governance",
      description: "Make parameter changes and protocol upgrades with time-weighted community consensus",
    },
    {
      title: "Community Prioritization",
      description: "Surface and prioritize community needs through continuous preference signaling",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b">
          <div className="absolute inset-0 bg-gradient-to-br from-muted/30 via-background to-muted/20 -z-10" />
          <div className="container mx-auto max-w-screen-xl px-4 py-16 md:py-24">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
                Real-World Applications
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Discover where Conviction Voting has been implemented and how organizations are using it for continuous,
                democratic decision-making.
              </p>
            </div>
          </div>
        </section>

        {/* Implementations Section */}
        <section className="py-24">
          <div className="container mx-auto max-w-screen-xl px-4">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Live Implementations</h2>
              <p className="text-lg text-muted-foreground">
                Organizations and platforms using Conviction Voting in production
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {implementations.map((impl, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-2">
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-2">{impl.name}</CardTitle>
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <Badge variant={impl.status === "Production" ? "default" : "secondary"}>
                            {impl.status === "Production" ? (
                              <CheckCircle2 className="h-3 w-3 mr-1" />
                            ) : (
                              <Rocket className="h-3 w-3 mr-1" />
                            )}
                            {impl.status}
                          </Badge>
                          <Badge variant="outline">{impl.blockchain}</Badge>
                        </div>
                      </div>
                      <Button asChild variant="outline" size="sm">
                        <a href={impl.url} target="_blank" rel="noopener noreferrer">
                          Visit
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed mb-4">{impl.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {impl.tags.map((tag, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-24 bg-muted/40">
          <div className="container mx-auto max-w-screen-xl px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Common Use Cases</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Conviction Voting excels in scenarios requiring continuous community input and resource allocation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {useCases.map((useCase, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-lg mb-3">{useCase.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">{useCase.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="py-24">
          <div className="container mx-auto max-w-screen-xl px-4">
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="py-12 px-8">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-3xl font-bold mb-4">Want to implement Conviction Voting?</h2>
                  <p className="text-lg mb-8 opacity-90">
                    Explore the technical resources, cadCAD models, and documentation to get started with your own
                    implementation.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild variant="secondary" size="lg">
                      <a href="https://github.com/BlockScience/conviction" target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-5 w-5" />
                        GitHub Repository
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                    >
                      <a href="/#resources">View Resources</a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
