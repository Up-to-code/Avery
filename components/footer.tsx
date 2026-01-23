import { Separator } from '@/components/ui/separator';

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground text-background font-bold text-sm">
                A
              </div>
              <span className="font-bold text-foreground">AVYREN</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Technology as structure. Building the foundations for lasting growth.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Company</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">About</a></li>
              <li><a href="#what-we-build" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">Products</a></li>
              <li><a href="#structure" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">Principles</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">Blog</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">Docs</a></li>
              <li><a href="mailto:hello@avyren.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">Privacy</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">Terms</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">Cookies</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-sm text-muted-foreground">
              © AVYREN 2024. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Twitter</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
