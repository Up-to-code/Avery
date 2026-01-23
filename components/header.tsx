import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 sm:px-8 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground text-background font-bold text-sm">
            A
          </div>
          <span className="font-bold text-foreground text-lg">AVYREN</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200">
            About
          </a>
          <a href="#what-we-build" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200">
            Products
          </a>
          <a href="#structure" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200">
            Principles
          </a>
        </nav>

        <Button className="bg-foreground text-background hover:opacity-90 text-sm font-semibold rounded-lg px-6 h-9">
          Get Started
        </Button>
      </div>
    </header>
  );
}
