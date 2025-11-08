import Link from "next/link"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 text-xl font-semibold tracking-tight">
          Conviction Voting
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/#overview"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Overview
          </Link>
          <Link
            href="/#algorithm"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Algorithm
          </Link>
          <Link
            href="/#benefits"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Benefits
          </Link>
          <Link
            href="/applications"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Applications
          </Link>
        </nav>
        <Button asChild variant="default" size="sm">
          <Link href="/#resources">Resources</Link>
        </Button>
      </div>
    </header>
  )
}
