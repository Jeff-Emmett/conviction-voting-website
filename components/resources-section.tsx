import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, FileText, Github, BookOpen } from "lucide-react"

export function ResourcesSection() {
  const resources = [
    {
      category: "Core Articles",
      icon: FileText,
      items: [
        {
          title: "Conviction Voting: A Novel Continuous Decision Making Alternative",
          author: "Jeff Emmett",
          url: "https://blog.giveth.io/conviction-voting-a-novel-continuous-decision-making-alternative-to-governance-aa746cfb9475",
        },
        {
          title: "Understanding Real-Time 'Vote Streaming'",
          author: "Jeff Emmett",
          url: "https://medium.com/commonsstack/announcing-the-conviction-voting-cadcad-model-release-8e907ce67e4e",
        },
        {
          title: "A Brief History of Conviction Voting",
          author: "Michael Zargham",
          url: "https://medium.com/block-science/a-brief-history-of-conviction-voting-ad4ca4eb4aee",
        },
      ],
    },
    {
      category: "Technical Resources",
      icon: Github,
      items: [
        {
          title: "Social Sensor Fusion Paper",
          author: "BlockScience",
          url: "https://github.com/BlockScience/conviction/blob/master/social-sensorfusion.pdf",
        },
        {
          title: "Conviction Voting cadCAD Model",
          author: "BlockScience",
          url: "https://github.com/BlockScience/conviction/blob/master/conviction_cadCAD3.ipynb",
        },
        {
          title: "Conviction Voting GitHub Repository",
          author: "BlockScience",
          url: "https://github.com/BlockScience/conviction",
        },
      ],
    },
    {
      category: "Learning Resources",
      icon: BookOpen,
      items: [
        {
          title: "Conviction Voting WTF",
          author: "Community Resource",
          url: "https://convictionvoting.wtf/",
        },
        {
          title: "Token Engineering Commons Handbook",
          author: "TEC",
          url: "https://token-engineering-commons.gitbook.io/tec-handbook/",
        },
      ],
    },
  ]

  return (
    <section id="resources" className="py-24">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Learn More</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Explore articles, papers, and technical resources to deepen your understanding of Conviction Voting.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {resources.map((section) => {
            const Icon = section.icon
            return (
              <Card key={section.category}>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg">{section.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {section.items.map((item, idx) => (
                      <li key={idx}>
                        <a href={item.url} target="_blank" rel="noopener noreferrer" className="group block">
                          <div className="flex items-start gap-2">
                            <ExternalLink className="h-4 w-4 mt-0.5 text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0" />
                            <div>
                              <div className="font-medium text-sm group-hover:text-primary transition-colors leading-relaxed">
                                {item.title}
                              </div>
                              <div className="text-xs text-muted-foreground mt-0.5">{item.author}</div>
                            </div>
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
