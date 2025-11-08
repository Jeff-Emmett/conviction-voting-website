import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="container mx-auto max-w-screen-2xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">Conviction Voting</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A novel continuous decision-making mechanism for decentralized governance.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4">Learn</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/#overview" className="hover:text-foreground transition-colors">
                  Overview
                </Link>
              </li>
              <li>
                <Link href="/#algorithm" className="hover:text-foreground transition-colors">
                  Algorithm
                </Link>
              </li>
              <li>
                <Link href="/#benefits" className="hover:text-foreground transition-colors">
                  Benefits
                </Link>
              </li>
              <li>
                <Link href="/applications" className="hover:text-foreground transition-colors">
                  Applications
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="https://github.com/BlockScience/conviction"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://medium.com/commonsstack"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  Medium
                </a>
              </li>
              <li>
                <a
                  href="https://1hive.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  1Hive
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4">Community</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="https://commonsstack.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  Commons Stack
                </a>
              </li>
              <li>
                <a
                  href="https://www.blockscience.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  BlockScience
                </a>
              </li>
              <li>
                <a
                  href="https://giveth.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  Giveth
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            Built with contributions from Commons Stack, BlockScience, 1Hive, and the broader web3 community.
          </p>
        </div>
      </div>
    </footer>
  )
}
