import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { ArrowRightIcon, SearchIcon, FilterIcon, StarIcon } from "lucide-react"
import Link from "next/link"

export default function SearchPage({ searchParams }: { searchParams: { q: string } }) {
  const searchQuery = searchParams.q || ""

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      {/* Header - Same as homepage */}
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="size-8 rounded-lg bg-gradient-to-br from-primary to-primary-foreground/80 flex items-center justify-center text-white font-bold">
                AI
              </div>
              <span className="font-semibold text-xl">AI Tools Directory</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/categories" className="text-muted-foreground hover:text-foreground transition-colors">
                Categories
              </Link>
              <Link href="/tags" className="text-muted-foreground hover:text-foreground transition-colors">
                Tags
              </Link>
              <Link href="/for-who" className="text-muted-foreground hover:text-foreground transition-colors">
                For Who
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden md:block w-64">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search tools..." className="pl-9 w-full" defaultValue={searchQuery} />
            </div>
            <Button variant="outline" size="icon" className="md:hidden">
              <SearchIcon className="h-4 w-4" />
            </Button>
            <Button>Submit Tool</Button>
          </div>
        </div>
      </header>

      {/* Search Header */}
      <section className="container py-8">
        <div className="max-w-3xl">
          <h1 className="text-3xl font-bold mb-3">Search Results for "{searchQuery}"</h1>
          <p className="text-lg text-muted-foreground">We found 42 AI tools matching your search query.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container pb-16 md:pb-24">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Sidebar - Similar to homepage */}
          <aside className="w-full md:w-64 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Filters</h2>
              <Button variant="ghost" size="sm" className="h-8 text-xs">
                Reset
              </Button>
            </div>

            {/* Categories Filter */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Categories</h3>
              <div className="space-y-2">
                {["Chat", "Art Generation", "Content Creation", "Productivity", "Research"].map((category) => (
                  <div key={category} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`category-${category}`}
                      className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <label htmlFor={`category-${category}`} className="ml-2 text-sm">
                      {category}
                    </label>
                  </div>
                ))}
              </div>
              <Button variant="link" size="sm" className="h-auto p-0 text-xs">
                Show more
              </Button>
            </div>

            {/* Tags Filter */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {["GPT-4", "Free", "Image", "Text", "Video"].map((tag) => (
                  <Badge key={tag} variant="outline" className="cursor-pointer hover:bg-muted">
                    {tag}
                  </Badge>
                ))}
              </div>
              <Button variant="link" size="sm" className="h-auto p-0 text-xs">
                Show more tags
              </Button>
            </div>

            {/* For Who Filter */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium">For Who</h3>
              <div className="space-y-2">
                {["Developers", "Designers", "Writers", "Marketers", "Students"].map((who) => (
                  <div key={who} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`who-${who}`}
                      className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <label htmlFor={`who-${who}`} className="ml-2 text-sm">
                      {who}
                    </label>
                  </div>
                ))}
              </div>
              <Button variant="link" size="sm" className="h-auto p-0 text-xs">
                Show more
              </Button>
            </div>
          </aside>

          {/* Tools Grid - Similar to homepage */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold">Search Results</h2>
                <p className="text-sm text-muted-foreground mt-1">Showing 1-12 of 42 tools</p>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="hidden md:flex gap-2">
                  <FilterIcon className="h-4 w-4" />
                  Sort by
                </Button>
                <Button variant="outline" size="icon" className="md:hidden">
                  <FilterIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {Array(12)
                .fill(0)
                .map((_, index) => (
                  <ToolCard key={index} />
                ))}
            </div>

            <div className="mt-8 flex justify-center">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" disabled>
                  <ArrowRightIcon className="h-4 w-4 rotate-180" />
                </Button>
                <Button variant="outline" size="sm" className="h-9 w-9 p-0">
                  1
                </Button>
                <Button variant="outline" size="sm" className="h-9 w-9 p-0">
                  2
                </Button>
                <Button variant="outline" size="sm" className="h-9 w-9 p-0">
                  3
                </Button>
                <span className="mx-1">...</span>
                <Button variant="outline" size="sm" className="h-9 w-9 p-0">
                  4
                </Button>
                <Button variant="outline" size="icon">
                  <ArrowRightIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Same as homepage */}
      <footer className="border-t border-border/40 bg-muted/40">
        <div className="container py-8 md:py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-3">AI Tools Directory</h3>
              <p className="text-sm text-muted-foreground">
                Your go-to resource for discovering the best AI tools for your needs.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Navigation</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/categories" className="text-muted-foreground hover:text-foreground transition-colors">
                    Categories
                  </Link>
                </li>
                <li>
                  <Link href="/tags" className="text-muted-foreground hover:text-foreground transition-colors">
                    Tags
                  </Link>
                </li>
                <li>
                  <Link href="/for-who" className="text-muted-foreground hover:text-foreground transition-colors">
                    For Who
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Popular Categories</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/categories/chat"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Chat
                  </Link>
                </li>
                <li>
                  <Link
                    href="/categories/art-generation"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Art Generation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/categories/content-creation"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Content Creation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/categories/productivity"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Productivity
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/submit" className="text-muted-foreground hover:text-foreground transition-colors">
                    Submit a Tool
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} AI Tools Directory. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ToolCard() {
  return (
    <Card className="overflow-hidden flex flex-col h-full hover:shadow-md transition-shadow">
      <div className="aspect-video relative bg-muted">
        <img src="/placeholder.svg?height=200&width=400" alt="Tool thumbnail" className="w-full h-full object-cover" />
        <Badge className="absolute top-2 right-2">Chat</Badge>
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-semibold line-clamp-1">AI Assistant Pro</h3>
          <div className="flex items-center text-amber-500">
            <StarIcon className="h-4 w-4 fill-current" />
            <span className="text-xs ml-1">4.8</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
          An advanced AI assistant that helps with writing, research, and creative tasks using the latest GPT-4
          technology.
        </p>
        <div className="flex flex-wrap gap-1 mt-auto mb-3">
          <Badge variant="secondary" className="text-xs">
            GPT-4
          </Badge>
          <Badge variant="secondary" className="text-xs">
            Writing
          </Badge>
          <Badge variant="secondary" className="text-xs">
            Free
          </Badge>
        </div>
        <Button variant="outline" size="sm" className="w-full gap-1">
          View Details
          <ArrowRightIcon className="h-3 w-3" />
        </Button>
      </div>
    </Card>
  )
}

